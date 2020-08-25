<template>
	<section id='header-com'>
    <div class='brand'>
      <a href="/index">0ver.io</a>
    </div>
    <div class='nav'>
      <p 
        v-for='(item, idx) in navList'
        :key='idx'
        :class='{"cur": idx === cur}'
        @click='navClickHandle(idx)'
        >{{ item }}
      </p>
    </div>
  </section>
</template>

<script>
export default {
	data: () => {
		return {
      navList:["home", "blog"],
      cur: 0
		}
  },
  methods: {
    navClickHandle(idx){
      this.cur = idx;
    }
  }
}
</script>
<style lang="scss">
#header-com{
  display:flex;
  justify-content: space-between;
  font-size: 24px;
  font-weight: 700;
  position:sticky;
  top:0;
  background-color:#fff;
  .nav{
    display:flex;
    justify-content: space-between;
    p{
      cursor: pointer;
      padding:0 15px;
      position: relative;
      &.cur::after{
        content: '';
        position: absolute;
        bottom: -3px;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 5px;
        width: 20px;
        height: 5px;
        background-color: $primary-color;
      }
    }
  }
}
</style>
