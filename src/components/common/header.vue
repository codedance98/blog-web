<template>
	<section id='header-com'>
    <div class='brand'>
      <a href="/index">codedance98</a>
    </div>
    <div class='nav'>
      <p
        class='item'
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
  font-size: .18rem;
  font-weight: 700;
  position:sticky;
  top:0;
  background-color:#fff;
  .nav{
    display:flex;
    justify-content: space-between;
    p.item{
      margin:0;
      cursor: pointer;
      padding:0 .15rem;
      position: relative;
      &.cur::after{
        content: '';
        position: absolute;
        bottom: -.06rem;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 5px;
        width: .2rem;
        height: .05rem;
        background-color: $primary-color;
      }
    }
  }
}
</style>
