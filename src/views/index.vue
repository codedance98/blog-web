<template>
	<section id='index-page'>
    <div class='container'>
      <Header />
      <div class='list-wrap'>
        <ul>
          <li v-for='(item, idx) in data' :key='idx' @click.stop='clickHandle(item.id)'>{{item.title}}</li>
        </ul>
      </div>
      <div class='footer'>
        <p @click='clickGithubHandle'>codedance98.github.io</p>
      </div>
    </div>
  </section>
</template>

<script>
import Header from "@/components/common/header"
export default {
	data: () => {
		return {
			data:[]
		}
  },
  created(){
    this.getData();
  },
  components: {
    Header
  },
  methods: {
    getData(){
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
    color:#111;
    box-sizing: border-box;
    padding:20px 20px;
    margin-top:20%;
    min-height:80vh;
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
    p{
      cursor: pointer;
    }
  }
}
</style>
