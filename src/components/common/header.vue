<template>
	<section id='header-com'>
    <div class='brand'>
      <a href="/">codedance98</a>
    </div>
    <div class='nav'>
      <p
        class='item'
        v-for='(item, idx) in navList'
        :key='idx'
        :class='{"cur": idx === cur}'
        @click='navClickHandle(item, idx)'
        >{{ item.name }}
      </p>
    </div>
  </section>
</template>

<script>
export default {
	data: () => {
		return {
      navList:[
        {
          name:'home',
          uri:'/'
        },
        {
          name:'blog',
          uri:'/b'
        }
      ],
      cur: 0
		}
  },
  methods: {
    navClickHandle(_item, _idx){
      this.cur = _idx;
      this.$router.push({
        path: _item.uri
      })
    }
  }
}
</script>
<style lang="scss" scoped>
#header-com{
  color:$primary-color; 
  display:flex;
  justify-content: space-between;
  font-size: .14rem;
  font-weight: 700;
  user-select: none;
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
      &:last-child{
        padding-right: 0;
      }
    }
  }
}
</style>
