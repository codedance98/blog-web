<template>
	<section id='footer-com'>
    <div class='footer' @click='ref'>
      github.com/codedance98
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
  color:$primary-color; 
  font-size: .10rem;
  background-color:#fff;
}
</style>
