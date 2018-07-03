<template>
  <div id="app">  
   <transition :name="transitionName" >  
    <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
  	return  {
                //transitionName, //绑定在组件上面的动效class
                transitionName: 'slide-left'
            }
  },
  beforeRouteUpdate (to, from, next) {
  // 如果isBack为true时，证明是用户点击了回退，执行slide-right动画
    let isBack = this.$router.isBack
    if (isBack) {
      this.transitionName = 'slide-right'
    } else {
      this.transitionName = 'slide-left'
    }
    // 做完回退动画后，要设置成前进动画，否则下次打开页面动画将还是回退
    this.$router.isBack = false
    next()
  }
   // watch: {
   //          '$route' (to, from){
   //              const toDepth = to.path.split('/').length
   //              const fromDepth = from.path.split('/').length
   //              this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
   //          }
   //      }
}
</script>

<style lang="scss" scoped>
.child-view {
   position: absolute;
   width:100%;
   transition: all .4s cubic-bezier(.55,0,.1,1);
}
.slide-left-enter, .slide-right-leave-active {
   opacity: 0;
   -webkit-transform: translate(50px, 0);
   transform: translate(50px, 0);
}
.slide-left-leave-active, .slide-right-enter {
   opacity: 0;
   -webkit-transform: translate(-50px, 0);
   transform: translate(-50px, 0);
}
/*#app{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.container{
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.child-view {
    position: absolute;
    left:0;
    top: 0;
    height: 100%;
    width: 100%;
    transition: all .5s cubic-bezier(.55,0,.1,1);
    background-color: #f2f2f2;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
}

.slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(750px, 0);
    transform: translate(750px, 0);
    transition-delay: .5s;
    -webkit-transition-delay: .5s;
}
.slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-750px, 0);
    transform: translate(-750px, 0);
    transition-delay: .5s;
    -webkit-transition-delay: .5s;
}
.slide-enter-active {
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
}
.slide-leave-active {
    -webkit-transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}*/
</style>
