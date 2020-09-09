<template>
	<section id='index-page'>
    <div class='container'>
      <Header />
      <div class='list-wrap'>
        <ul>
          <li v-for='(item, idx) in data' :key='idx' @click.stop='clickHandle(item.id)'>{{item.title}}</li>
        </ul>
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
			data:[]
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
}
</style>
