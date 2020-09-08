<template>
	<section id='detail-page'>
    <div class='container'>
      <Header />
      <h2 class='title'>{{data.title}}</h2>
      <p class='created_at'>{{computedTime}}</p>
      <div class='content-wrap'>
        <div v-html='data.content'></div>
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
			data:{
        content:'',
        title:'',
        created_at:''
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
    Footer
  },
  methods: {
    getData(){
      fetch(`http://123.57.252.92:8081/v1/article/findOne?id=${this.$route.query.id}`,{
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
    }
  }
}
</script>
<style lang="scss">
#detail-page{
  user-select: auto;
  h2.title{
    text-align: center;
    margin-top: 30px;
  }
  .created_at{
    color:#666;
    font-size:12px;
    text-align: center;
    margin-top: 10px;
  }
  .content-wrap{
    color:#111;
    box-sizing: border-box;
    padding:20px 20px;
    margin-top:20%;
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
  }
}
</style>
