<template>
	<section id='detail-page'>
    <div class='container'>
      <Header />
      <h2>{{data.title}}</h2>
      <p class='created_at'>{{computedTime}}</p>
      <div class='content-wrap'>
        <div v-html='data.content'></div>
      </div>  
      <div class='footer'>
        llqi.github.io
      </div>
    </div>
  </section>
</template>

<script>
import Header from "@/components/common/header"
export default {
	data: () => {
		return {
			data:{
        content:'',
        title:''
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
    Header
  },
  methods: {
    getData(){
      fetch(`http://127.0.0.1:8081/v1/web/findOne?id=${this.$route.query.id}`,{
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
          this.data = response;
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
  h2{
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
    min-height:70vh;
    ul{
      li{
        margin-bottom:10px;
        text-decoration: underline;
      }
    }
  }
  .footer{
    margin-top:50px;
    border-top:1px solid #aaa; 
    position:sticky;
    bottom:0;
    padding-bottom:20px;
    background-color:#fff;
  }
}
</style>
