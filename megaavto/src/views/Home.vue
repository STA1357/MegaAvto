<!-- @format -->

<template>
  <div>
    <FirstBlock></FirstBlock>
    <SecondBlock></SecondBlock>
    <ThirdBlock></ThirdBlock>
    <img src="../assets/whitewave.svg" style="width: 102%;margin-left: -10px; margin-bottom: -1025px" class="wave">
    <BlockFour></BlockFour>
    <LastBlock></LastBlock>
    <Coockie></Coockie>


  </div>
</template>

<script>
import FirstBlock from "../pages/homepages/FirstBlock";
import SecondBlock from "../pages/homepages/SecondBlock";
import ThirdBlock from "../pages/homepages/ThirdBlock";
import BlockFour from "../pages/homepages/BlockFour";
import LastBlock from "../pages/homepages/LastBlock";
import Coockie from "../pages/homepages/Coockie";








export default {
  name: "Home",
  computed: {
    userCredentials() {
      return this.$store.getters.getCredentials;
    },
  },
  mounted() {
    console.log(this.userCredentials);
  },
  components: {

    Coockie,
    LastBlock,
    BlockFour,
    ThirdBlock,
    SecondBlock,
    FirstBlock

  },
};
</script>
<style lang="scss">
.home {
  background: url("../assets/23а9о.jpeg") no-repeat center;
  background-size: cover;
  height: 100%;
  overflow: hidden;
}
.text {
  padding-top: 100px;
  color: white;
  background-color: rgba(0, 0, 0, 0.6);
  text-align: start;
}
.title_div {
  padding: 25px 0;
  font-size: 26px;
  line-height: 1.4;
}
.line {
  display: block;
  width: 100%;
  border-top: 3px solid white;
}
.animate__animated.animate__fadeInLeft {
  --animate-duration: 1.5s;
  --animate-delay: 2s;
}
.dropdown {
  display: flex;
  flex-direction: row;
  position: absolute;
}
.dropdown:hover {
  color: #f69e30;
}
.dropdown-content {
  display: none;
  min-width: 160px;
  z-index: 1;
  margin-left: 10px;
  position: relative;
  padding-top: 6px;
  color: white;
}

.dropdown:hover .dropdown-content {
  display: block;
}
.owl-item{
  display: flex !important;
  justify-content: center;
  align-items: center;
}
@media screen and (max-width: 1300px){
  .wave{
    display: none;
  }
}
</style>
