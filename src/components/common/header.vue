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
      <p @click='modeHandle' class='mode-check'>{{modeName}}</p>
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
      cur: 0,
      modeName:'深色'
		}
  },
  methods: {
    navClickHandle(_item, _idx){
      this.cur = _idx;
      this.$router.push({
        path: _item.uri
      })
    },
    modeHandle(){
      let root = document.getElementsByTagName('html')[0];
      if(!root.classList.contains("dark")){
        root.className = "dark";
        this.modeName = '浅色'
      }else{
        root.classList.remove('dark');
         this.modeName = '深色'
      }
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
  .nav{
    display:flex;
    justify-content: space-between;
    p.item{
      margin:0;
      cursor: pointer;
      margin:0 .15rem;
      position: relative;
      &.cur::after{
        content: '';
        position: absolute;
        bottom: -.1rem;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 5px;
        width: .2rem;
        height: .05rem;
        background-color: $primary-color;
      }
      &:last-child{
      }
    }
    p.mode-check{
      margin-left: .15rem;
      cursor: pointer;
    }
  }
}
</style>
