<template>
  <div id="app">
    <headerComp></headerComp>
    <router-view name="header"></router-view>
    <!-- <img src="./assets/logo.png"> -->
    <!-- 这个是主图 -->
<!-- todolist 开始 -->
    <input type="text" 
    v-model="newItem"
    v-on:keyup.enter="addNew"
    >
    <ul>
      <li 
        v-for="item in items" 
        :class="{finished:item.isFinished}"
        v-on:click="toggleFinish(item);"
        >
        {{item.label}}
      </li>
    </ul>
<!-- todolist 结束 -->
    <router-link class="btn btn-primary" to="/Hello">hello</router-link>
    <router-link class="btn btn-primary" to="/Hello/Hello2/1">hello2</router-link>
    <button class="btn btn-primary" v-on:click="goHello2()">hello2</button>
    <!-- <router-link class="btn btn-primary" to="/Hello/Hello2/2">hello22</router-link> -->
    <router-link class="btn btn-primary" to="/textHtml">textHtml</router-link>
    <router-link class="btn btn-primary" to="/parent">parent</router-link>
    <router-link class="btn btn-primary" to="/todoList">todoList</router-link>
    <!-- <router-link class="btn btn-primary" to="/someEG">someEG</router-link> -->
    <button class="btn btn-primary" v-on:click="gosomeEG()">someEG</button>
    <router-link class="btn btn-primary" to="/event">Event</router-link>
    <router-link class="btn btn-primary" to="/form">form</router-link>
    <router-link class="btn btn-primary" to="/Component">component</router-link>
    <router-link class="btn btn-primary" to="/Component2">component2</router-link>
    <button class="btn btn-success" @click="goClick()">$router.go(-1)</button>
    <div class="row">
      <transition name="slide-left"><router-view></router-view></transition>
    </div>
    <hr>
    <router-view name="footer"></router-view>
    <!-- 这个是放router文件引入的界面展示 -->
    <footerComp></footerComp>
  </div>
</template>

<script>
import Store from './store'

// console.log(Store);
export default {
  name: 'app',
  data:function (){
    return {
      title: '<span>?</span>这是title',
      items:Store.fetch(),
      newItem:''
    }
  },
  methods:{
    toggleFinish : function (item){
      console.log(item.isFinished = !item.isFinished);//true,false反转
    },
    addNew : function (){
      console.log(this.newItem);
      this.items.push(
        {
          label:this.newItem,
          isFinished:false
        });//存放进数组
      this.newItem = '';//双向绑定让input框值为空
    },
    goHello2 :function(){
      this.$router.push({name:'Hello2',params:{id:123}}) // -> /Hello2/123
    },
    gosomeEG : function(){
      // 跳转的时候写name比较好，不会重复添加路径
      //router.replace(location, onComplete?, onAbort?)
      //跟 $router.push 很像，唯一的不同就是，它不会向 history 添加新记录，而是跟它的方法名一样 —— 替换掉当前的 history 记录。
      this.$router.replace({name:'someEG'});
      // this.$router.replace({path:`Hello/Hello2/${1234}`})
    },
    goClick : function(){
      this.$router.go(-1);//replace方法的就会有问题，因为是替换了当前的路径，并不再history留记录
    }
  },
  watch:{
    items:{//监控items
      handler : function (items){
        Store.save(items);
        // console.log(value,oldValue)
        //注意：当观察的数据为对象或数组时，curVal和oldVal是相等的，因为这两个形参指向的是同一个数据对象
      },
      deep:true//深层赋值，就一定要有
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
.finished{
  text-decoration:line-through;
}
.slide-left-enter-active, .slide-left-leave-active {
  transition-delay: 0.5s;
  transition: transform .5s;
  transform-origin: left;
}
.slide-left-enter, .slide-left-leave-active {
  transform: scale(0,1);
}
</style>
