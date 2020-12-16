<template>
	<section id='detail-page'>
    <div class='container'>
      <Header />
      <div class='content-wrap' v-show='!isLoading'>
        <h2 class='title'>{{data.title}}</h2>
        <div class='meta'>
          <p class='meta-item'>
            <span class="iconfont icon-date"></span>
            <code>{{computedTime}}</code>
          </p>
          <p class='meta-item'>
            <span class="iconfont icon-category"></span>
            <code v-for='(item, idx) in data.type' :key='idx'>{{item}} </code>
          </p>
          <p class='meta-item'>
             <span class="iconfont icon-browse"></span>
             <code>{{data.browse}}</code>
          </p>
        </div>
        <div class='content markdown-body'>
          <VueMarkdown class="article" :source="data.content" v-highlight/>
        </div>
        <div class='other'>
          <p class='p1' @click='commentHandle'>
            <span>给我留言(github issues)</span>
          </p>
        </div>
      </div>
      <div class='loading' v-show='isLoading'>
        <i class='el-icon-loading'></i>
      </div>
      <Footer />
    </div>
  </section>
</template>

<script>
import Header from "@/components/common/header"
import Footer from "@/components/common/footer"
import VueMarkdown from 'vue-markdown'

export default {
	data: () => {
		return {
			data:{
        isLoading: false,
        content:'',
        title:'',
        created_at:'',
        browse:''
      }
		}
  },
  created(){
    this.getData();
  },
  computed:{
    computedTime(){
      return this.data.created_at.replace('T', ' ').replace('.000Z', '').replace('-', '/').replace('-', '/');
    }
  },
  components: {
    Header,
    Footer,
    VueMarkdown
  },
  methods: {
    getData(){
      this.isLoading = true;
      fetch(`http://api.cd98.xyz/v1/article/findOne?title=${decodeURI(this.$route.params.title)}`,{
        method:'get',
        mode: 'cors',
        headers: {
    　　　　'Content-Type': 'application/json'
    　　 },
        data:{
          id: this.$route.query.id
        }
      }).then((response)=>{
        if (response.ok) {
          return response.json()
        } else {
          return Promise.reject('something went wrong!')
          alert(`something went wrong!`);
        }
      }).then((response)=>{
        this.isLoading = false;
        this.data = response.data;
      })
    },
    clickHandle(_id){
      this.$router.push({
        path: '/detail',
        query: {
          id:_id
        }
      })
    },
    commentHandle(){
      window.open('https://github.com/codedance98/blog-web/issues')
    }
  }
}
</script>
<style lang="scss">
#detail-page{
  user-select: auto;
  .content-wrap{
    color: #1a1a1a;
    box-sizing: border-box;
    padding-top: .3rem;
    h2.title{
      text-align: center;
    }
    @media only screen and (min-width: 0px) and (max-width: 530px) {
      .meta{
       .meta-item:nth-child(2){
         display:none;
       }
      }
    }
    .meta{
      color:#666;
      font-size:.1rem;
      text-align: center;
      margin-top: 10px;
      display:flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      .meta-item{
        margin-right:.1rem;
        display:flex;
        align-items: center;
        &:last-child{
          margin-right:0;
        }
        .iconfont{
          font: .16rem;
        }
        .iconfont.icon-browse,.iconfont.icon-category{
          font-size: .17rem;
        }
        span{
          margin-right:5px;
        }
      }
      code{
        // background-color: rgba(27,31,35,.05);
        margin-right:10px;
      }
      code:last-child{
        margin-right:0;
      }
    }
    .content{
      color:#111;
      padding: 0 .2rem;
      box-sizing: border-box;
      margin-top: .2rem;
      font-size: .14rem;
      ul{
        li{
          margin-bottom:10px;
        }
      }
      a{
        text-decoration: underline;
      }
      p,li,code{
        font-size: .12rem; 
        line-height: .25rem;
      }
      .article{
        // code.{
        //   border-radius: 3px;
        //   margin-top:
        // }
        // pre,code{
        //   border-radius: 3px;
        //   padding: 16px;
        //   box-sizing: border-box;
        // }
      }
    }
    .other{
      margin-top:.3rem;
      .p1{
        text-decoration: underline;
        margin-bottom:.2rem;
        cursor: pointer;
        color:$primary-color;
        user-select: none;
      }
    }
  }
  .loading{
    min-height: 80vh;
    position:relative;
    .el-icon-loading{
      position: absolute;
      top:50%;
      left:50%;
      transform: translate(-50%, -50%);
      font-size: .2rem;
    }
  }
}
</style>
