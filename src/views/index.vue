<template>
	<section id='index-page'>
    <div class='container'>
      <Header />
      <div class='list-wrap'>
        <ul>
          <li>11231321</li>
          <li>2213131313312312312312</li>
          <li>232132132133</li>
          <li>4123132112131313113231</li>
          <li>52132131231</li>
          <li>5213213qewqeqe1231</li>
          <li>52132131231</li>
          <li>52132weqweqweqweqeqweqeqew31231</li>
          <li>52132131231</li>
          <li>5213213qeqweqwe1231</li>
          <li>52132131weqwe231</li>
          <li>52132eqwewqewdadaad131231</li>
          <li>52132131231</li>
          <li>52132131231</li>
          <li>5213213qweqweqweq1231</li>
        </ul>
      </div>
      <div class='footer'>
        llqi.github.io
      </div>
    </div>
  </section>
</template>

<script>
import Header from "@/components/common/header"
export default {
	data: () => {
		return {
			
		}
  },
  components: {
    Header
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
    min-height:70vh;
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
  }
}
</style>
