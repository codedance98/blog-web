<template>
	<section id='footer-com'>
    <div class='footer'>
      <p>来源: <span @click='ref' class='ltalic'>github.com/codedance98</span></p>
      <p>联系我: <a href="mailto:codedance98@gmail.com" class='ltalic' target="_blank">codedance98@gmail.com</a></p>
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
  box-sizing: border-box;
  padding-bottom: .2rem;
  margin-top:.2rem;
  user-select: none;
  .footer{
    display:flex;
    justify-content: space-between;
    .ltalic{
      font-style:italic;
    }
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
