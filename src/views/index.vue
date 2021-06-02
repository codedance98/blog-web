<template>
	<section id='index-page'>
    <div class='container'>
      <Header />
      <div 
        class='cover' 
        @click.stop='coverHandle'
        v-show='trapIdx !== -1'
        >
      </div>
      <div class='list-wrap' v-show='!isLoading'>
        <ul>
          <li 
            v-for='(item, idx) in data' 
            :key='idx' 
            @click.stop='checkClientType(item)'
            @touchstart.stop='(e)=>{touchstartHandle(e, item, idx)}' 
            @touchend.stop='(e)=>{touchendHandle(e, item, idx)}'
            >
            <span class='title'>
              {{item.title}}
              <span 
                @click.stop='copyURLHandle(item)'
                v-show='idx === trapIdx' 
                class='trap'
                @touchstart.stop
                >Copy</span>
            </span>
            </li>
        </ul>
      </div>
      <div class='loading' v-show='isLoading'>
        <i class='el-icon-loading'></i>
      </div>
      <Footer />
    </div>
  </section>
</template>

<script>
let touchX = ''
let touchY = ''
import Header from "@/components/common/header"
import Footer from "@/components/common/footer"
import { isMobile } from '@/utils'
export default {
	data: () => {
		return {
      data:[],
      isLoading: false,
      touchTimestamp: 0,
      trapIdx: -1,
      distanceX: 10,
      distanceY: 10
		}
  },
  created(){
    this.getData();
  },
  components: {
    Header,
    Footer
  },
  methods: {
    getData(){
      this.isLoading = true;
      fetch('http://api.cd98.me/v1/article/findAll',{
        method:'get',
        mode: 'cors',
        headers: {
    　　　　'Content-Type': 'application/json'
    　　 }
      }).then((response)=>{
        if (response.ok) {
          return response.json()
        } else {
          return Promise.reject('something went wrong!')
        }
      }).then((response)=>{
        this.isLoading = false;
        this.data = response.data.filter((item)=> {return item.visible === 1});
      })
    },
    checkClientType(item) {
      if(!isMobile()) {
        this.clickHandle(item)
      }
    },
    clickHandle(_item){
      let y = new Date(_item.created_at).getFullYear();
      let m = new Date(_item.created_at).getMonth()+1;
      let d = new Date(_item.created_at).getDate();
      let t = _item.title_en;
      this.$router.push({
        path: `/d/${y}/${m}/${d}/${t}`
      })
    },
    touchstartHandle(e, item, idx) {
      e.preventDefault()
      e.stopPropagation()
      touchX = e.touches[0].pageX
      touchY = e.touches[0].pageY
      this.touchTimestamp = Date.now()
    },
    touchendHandle(e, item, idx) {
      let x = e.changedTouches[0].pageX
      let y = e.changedTouches[0].pageY
      let actionDuration = Date.now() - this.touchTimestamp > 350
      if(actionDuration) {
        this.trapIdx = idx
      }else if(Math.abs(x - touchX) < this.distanceX && Math.abs(y - touchY) < this.distanceY) {
        this.clickHandle(item)
      }
    },
    copyURLHandle(_item) {
      let y = new Date(_item.created_at).getFullYear()
      let m = new Date(_item.created_at).getMonth()+1
      let d = new Date(_item.created_at).getDate()
      let t = _item.title_en
      this.copyTxt(`${location.href}d/${y}/${m}/${d}/${t}`)
      this.trapIdx = -1
    },
    coverHandle() {
      this.trapIdx = -1
    },
    clickGithubHandle(){
      window.open('https://github.com/codedance98')
    },
    copyTxt(text){
      if(typeof document.execCommand!=="function"){
        return;
      }
      var dom = document.createElement("textarea");
      dom.value = text;
      dom.setAttribute('style', 'display: block;width: 1px;height: 1px;');
      document.body.appendChild(dom);
      dom.select();
      var result = document.execCommand('copy');
      document.body.removeChild(dom);
      if (result) {
        return;
      }
      if(typeof document.createRange!=="function"){
        return;
      }
      var range = document.createRange();
      var div=document.createElement('div');
      div.innerhtml=text;
      div.setAttribute('style', 'height: 1px;fontSize: 1px;overflow: hidden;');
      document.body.appendChild(div);
      range.selectNode(div);
      const selection = window.getSelection();
      if (selection.rangeCount > 0){
        selection.removeAllRanges();
      }
      selection.addRange(range);
      document.execCommand('copy');
    }
  }
}
</script>
<style lang="scss">
#index-page{
  .cover{
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 1;
    top:0;
    left:0;
  }
  .list-wrap{
    color: #1a1a1a;
    box-sizing: border-box;
    padding:.5rem .2rem .2rem;
    ul{
      li{
        margin-bottom: .1rem;
        text-decoration: underline;
        cursor: pointer;
        user-select: none;
        .title{
          position: relative;
          .trap{
            width: 50px;
            height: 25px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: rgba(10, 10, 10, .8);
            border-radius: 4px;
            position: absolute;
            z-index: 2;
            top: -30px;
            left: 50%;
            margin-left: -25px;
            color: rgba(255, 255, 255, .7);
            &::after{
              // content: '';
              // border: 5px solid rgba(10, 10, 10, .8);;
              // border-bottom-color: transparent;
              // border-left-color: transparent;
              // border-right-color: transparent;
              // position: absolute;
              // top: 25px;
            }
          }
        }
      }
    }
  }
  .loading{
    min-height: 80vh;
    position:relative;
    .el-icon-loading{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: .2rem;
    }
  }
}
</style>
