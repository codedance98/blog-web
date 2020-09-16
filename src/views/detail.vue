<template>
	<section id='detail-page'>
    <div class='container'>
      <Header />
      <div class='content-wrap' v-show='!isLoading'>
        <h2 class='title'>{{data.title}}</h2>
        <div class='meta'>
          <p class='meta-item'>
            <span class="iconfont icon-date"></span>{{computedTime}}
          </p>
          <p class='meta-item'>
            <span class="iconfont icon-category"></span>
            <code v-for='(item, idx) in data.type' :key='idx'>{{item}} </code>
          </p>
          <p class='meta-item'>
             <span class="iconfont icon-browse"></span>{{data.browse || 15}}
          </p>
        </div>
        <div class='content markdown-body' v-highlight>
          <VueMarkdown class="article" :source="data.content"/>
        </div>
        <div class='other'>
          <p class='p1' @click='commentHandle'>
            <span>评论(github issues)</span>
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
      return this.data.created_at.replace('T', ' ').replace('.000Z', '');
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
      fetch(`http://123.57.252.92:8081/v1/article/findOne?title=${decodeURI(this.$route.params.title)}`,{
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
    .meta{
      color:#666;
      font-size:12px;
      text-align: center;
      margin-top: 10px;
      display:flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      padding-left:30px;
      .meta-item{
        margin-right:20px;
        display:flex;
        align-items: center;
        .iconfont.icon-browse,.iconfont.icon-category{
          font-size: 20px;
        }
        span{
          margin-right:5px;
        }
      }
      code{
        // background-color: rgba(27,31,35,.05);
        margin-right:10px;
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
