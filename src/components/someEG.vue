<template>
  <div class="someEG col-sm-offset-1 col-sm-10">
    <p>这是someEG.vue <br> {{fullname}}</p>
    <hr>
    <div class="row">
    <div class="col-sm-3">
      <h2>v-if v-else</h2>
      <p v-if="type === 'A'">A</p>
      <p v-else-if="type === 'B'">B</p>
      <p v-else-if="type === 'C'">C</p>
      <p v-else>not A/B/C</p>
      <hr>
      <div v-if="loginType === 'username'">
        <label>Username</label>
        <input placeholder="Enter your username">
      <p><small>切换后不改变输入内容</small></p>
      </div>
      <div v-else>
        <label>Email</label>
        <input placeholder="Enter your email address">
      <p><small>切换后不改变输入内容</small></p>
      </div><br>
      <div v-if="loginType === 'username'">
        <label>Username</label>
        <input placeholder="Enter your username" key="username">
      <p><small>切换后改变输入内容</small></p>
      </div>
      <div v-else>
        <label>Email</label>
        <input placeholder="Enter your email address" key="email">
      <p><small>切换后改变输入内容</small></p>
      </div><br>
      <button class="btn btn-default" @click="loginToggle()">login toggle</button>
    </div>
    <div class="col-sm-9">
      <h2>v-if v-show</h2>
      <ol>
        <li>v-if 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。</li>
        <li>v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。</li>
        <li>相比之下，v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。</li>
        <li>一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。</li>
        <li>当 v-if 与 v-for 一起使用时，v-for 具有比 v-if 更高的优先级。</li>
      </ol>
    </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-sm-6">
        <h2>v-for</h2>
        <ul>
          <li v-for="(fruit, index) in someFruits" :key="fruit.name">
            <strong>{{index}}. {{fruit.name}} {{fruit.price}}</strong>
            <p v-for="(value,key,fruitIndex) in fruit" >
            {{index}}.{{fruitIndex}}  {{key}} : {{value}}
            </p>
          </li>
        </ul>
        <p>name:<input type="text" key="name" v-model="name"></p>
        <p>price:$<input type="text" key="price" v-model="price"></p>
        <button class="btn btn-default" @click="addFruit()">addFruit</button>
        <hr>
        <ul class="col-sm-6">
          <li>v-for="n in evenNum"</li>
          <li v-for="n in evenNum">{{n}}</li>
        </ul>
        <ul class="col-sm-6">
          <li>v-for="n in even(number)"</li>
          <li v-for="n in even(number)">{{n}}</li>
        </ul>
        <ul class="col-sm-6">
          <li v-for="n in planeInfos">
            {{n}}
          </li>
        </ul>
      </div>
      <div class="col-sm-6">
        <h2>数组更新检测</h2>
        <p><label>数组变异方法：</label>push(),pop(),shift(),unshift(),splice(),sort(),reverse().会改变数组</p>
        <p><label>数组非变异方法：</label>filter(),concat(),slice().不会改变数组，但返回一个新的数组。可以用新数组替换就数组，达到变异。</p>
        <button class="btn btn-success" @click="filterChange()">filterChange</button>
        <h4 class="redColor">注意</h4>
        <div class="well">
          <p>由于 JavaScript 的限制，Vue 不能检测以下变动的数组：</p>
          <ol>
            <li>
            <p>当你利用索引直接设置一个项时，例如：vm.items[indexOfItem] = newValue</p>
            <label class="green">解决：</label>
            <ol>
              <li>Vue.set(app.items,indexOfItem,newvalue)</li>
              <li>app.items.splice(indexOfIten,1,newValue)</li>
            </ol>
            </li>
            <li>
            <p>当你修改数组的长度时，例如：vm.items.length = newLength</p>
            <label class="green">解决：</label>
            <p>app.items.splice(newLength)</p>
            </li>
          </ol>
        </div>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-sm-6">
        <h2>对象的更改</h2>
        <div :style="{textAlign:textAlign}">
          <pre><code>
        var vm = new Vue({
          data: {
            a: 1
          }
        })
        // `vm.a` 现在是响应式的

        vm.b = 2
        // `vm.b` 不是响应式的
          </code></pre>
          可以通过vue.set(object,key,value)方法向潜逃对象添加响应式属性。
        </div>
        <button class="btn btn-warning" @click="objectVueSet()">set(object,key,value)</button>
        <button class="btn btn-warning" @click="objectAssign()">Object.assign()</button>
        <p class="redColor">问题：Object.assign()不能立即反应，要点set的按钮才会有用，并且set和Object.assign()不能用在一个对象上</p>
      </div>
      <div class="col-sm-6">
        <h2>v-for & v-if</h2>
        <p>当v-for和v-if在同一节点上，v-for的优先级更高，v-if将分别重复运行于每一个v-for循环中 </p>
        <p class="redColor">在2.2.0+版本里，当在组建中使用时，v-for的key是必要的
        <pre><code>
        &lt;component v-for="item in items" :key="item.id"&gt;&lt;/component&gt;
        </code></pre></p>
      </div>
      <p>{{arr2}}</p>
      <table>
        <tr v-for="(tr, index) in arr2">
          <td v-for="(td, i) in tr">
            <input type="text" v-model="arr2[index][i]">
          </td>
        </tr>
      </table>
    </div>
  </div>
  
</template>

<script>
//script里面需要有东西才不报错
export default {
  name: 'someEG',
  data () {
    return {
      firstname:'lin',
      lastname:'jia',
      type:'C',
      loginType:'username',
      name:'',
      price:'',
      someFruits:[
        {name:'apple',price:'$10'},
        {name:'pear',price:'$20'},
        {name:'banana',price:'$30'}
      ],
      textAlign:'left',
      number:[1,2,3,4,5,6,7,8,9],
      planeInfos:{
        '25':{
          id: 25,
          height: 25
        },
        '26':{
          id: 26,
          height: 26
        },
        '27':{
          id: 27,
          height: 27
        }
      },
      arr2: [[1,2,3],[2,3,4],[5,6,7]],
    }
  },
  computed:{
    fullname:function(){
      return this.firstname + ' ' + this.lastname;
    },
    evenNum:function(){
      return this.number.filter(function(n){
        return n % 2 === 0;
      })
    }
  },
  methods:{
    loginToggle : function(){
      this.loginType = (this.loginType == 'username') ? 'email' : 'username';
    },
    addFruit:function(){
      this.someFruits.push({name:this.name,price:this.price});
      this.name='';this.price='';
    },
    filterChange:function(){
      this.someFruits = this.someFruits.filter(function(item){
        return item.name.match(/e/);
      })
    },
    objectVueSet:function(){
      this.$set(this.someFruits[0],'color','red');
      //如果上面的写法是var vm = new Vue({});就可以写成vm.set(...)
    },
    objectAssign:function(){
      this.someFruits[1] = Object.assign({},this.someFruits[1],{
        color:'yello',level:'1'
      })
    },
    even:function(number){
      return number.filter(function(n){
        return n % 2 === 0;
      })
    }
  }
}
</script>

<style>
  h2{
    border-left: 5px solid #ccc;
    border-bottom: 1px solid #ccc;
  }
  small,.green{
    color: green;
  }
  ol,ul{
    text-align: left;
  }
  .redColor{
    color: red;
  }
</style>
