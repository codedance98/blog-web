<template>
	<section id='footer-com'>
    <div class='footer'>
      <p>ref: <span @click='ref'>github.com/codedance98</span></p>
      <p>联系我: <a href="mailto:codedance98@gmail.com" target="_blank">codedance98@gmail.com</a></p>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    ref(){
      window.open('https://github.com/codedance98')
    }
  }
}
</script>
<style lang="scss">
#footer-com{
  width:100%;
  border-top:1px solid #aaa;
  font-size: .10rem;
  background-color:#fff;
  box-sizing: border-box;
  padding-bottom: .2rem;
  margin-top:.2rem;
  .footer{
    display:flex;
    justify-content: space-between;
    p:first-child{
      span{
        color:$primary-color; 
      }
    }
    p{
      a, span{
        cursor: pointer;
      }
    }
  }
}
</style>
