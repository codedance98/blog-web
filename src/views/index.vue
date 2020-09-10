<template>
	<section id='index-page'>
    <div class='container'>
      <Header />
      <div class='list-wrap' v-show='!isLoading'>
        <ul>
          <li v-for='(item, idx) in data' :key='idx' @click.stop='clickHandle(item.id)'>{{item.title}}</li>
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
import Header from "@/components/common/header"
import Footer from "@/components/common/footer"
export default {
	data: () => {
		return {
      data:[],
      isLoading: false
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
      fetch('http://123.57.252.92:8081/v1/article/findAll',{
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
    clickGithubHandle(){
      window.open('https://github.com/codedance98')
    }
  }
}
</script>
<style lang="scss">
#index-page{
  .list-wrap{
    color: #1a1a1a;
    box-sizing: border-box;
    padding:1rem .2rem .2rem;
    ul{
      li{
        margin-bottom: .1rem;
        text-decoration: underline;
        cursor: pointer;
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
