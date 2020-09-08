<template>
	<section id='detail-page'>
    <div class='container'>
      <Header />
      <div class='content-wrap'>
        <h2 class='title'>{{data.title}}</h2>
        <p class='created_at'>{{computedTime}}</p>
        <div class='content markdown-body' v-highlight>
          <!-- <div v-html='data.content'></div> -->
          <!-- <code class="language-javascript">
            import { OhMyBox, OhMyBoxItem } from 'ohmybox'
            import 'ohmybox/lib/ohmybox.css'
            &lt;OhMyBox
              :scrollHeight='scrollHeight'
              :quickScrollHeight='quickScrollHeight'
              :scrollDuration='scrollDuration'
              :clickDuration='clickDuration'
              :clickDistance='clickDistance'
              @change='change'
              @click='click'
            &gt;
              &lt;OhMyBoxItem v-for='(item, idx) in 5' :key='idx'&gt;{{item}}&lt;/OhMyBoxItem&gt;
            &lt;/OhMyBox&gt;
          </code> -->
          <VueMarkdown class="article" :source="data.content"/>
        </div>
      </div>
      <Footer />
    </div>
  </section>
</template>

<script>
import Header from "@/components/common/header"
import Footer from "@/components/common/footer"
import VueMarkdown from 'vue-markdown'
import 'highlight.js/styles/atom-one-dark.css'
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
    Footer,
    VueMarkdown
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
  .content-wrap{
    color: #1a1a1a;
    box-sizing: border-box;
    padding-top: .3rem;
    h2.title{
      text-align: center;
    }
    .created_at{
      color:#666;
      font-size:12px;
      text-align: center;
      margin-top: 10px;
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
  }
}
</style>
