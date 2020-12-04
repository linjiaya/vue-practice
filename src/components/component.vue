<template>
  <div class="component">
  <div class="row">
    <div class="col-sm-offset-1 col-sm-10">
      <div class="col-sm-6">
        <h2>全局组件</h2>
        <p>Vue.component({})写在main.js里面</p>
        <public-component class="redColor"></public-component><br>
        <h2>局部组件</h2>
        <pre style="text-align:left"><code>
        components:{
          'component1':{
            template:''
          }
        }
        </code></pre>
        <component1></component1>
        <hr>
        <h2>DOM 模板解析注意事项</h2>
        <table>
          <tr><td><label>&lt;my-row&gt;&lt;/my-row&gt; : </label></td><my-row></my-row></tr>
          <tr><td><label>&lt;tr is="my-row"&gt;&lt;/tr&gt; : </label></td><td is="my-row"></td></tr>
        </table>
        <ol>
          <li>当使用 DOM 作为模板时 (例如，使用 el 选项来把 Vue 实例挂载到一个已有内容的元素上)，你会受到 HTML 本身的一些限制，因为 Vue 只有在浏览器解析、规范化模板之后才能获取其内容。尤其要注意，像 &lt;ul&gt;、&lt;ol&gt;、&lt;table&gt;lt;、&gt;lt;select&gt; 这样的元素里允许包含的元素有限制，而另一些像 &lt;option&gt; 这样的元素只能出现在某些特定元素的内部。</li>
          <li>在自定义组件中使用这些受限制的元素时会导致一些问题自定义组件 &lt;my-row&gt; 会被当作无效的内容，因此会导致错误的渲染结果。变通的方案是使用特殊的 is 特性</li>
        </ol>
        <p><label class="green">应当注意，如果使用来自以下来源之一的字符串模板，则没有这些限制：</label></p>
        <ol>
          <li><code>&lt;script type="text/x-template"&gt;</code></li>
          <li>JavaScript 内联模板字符串</li>
          <li>.vue 组件</li>
        </ol>
      </div>
      <div class="col-sm-6">
        <h2>data必须是函数</h2>
        <counters></counters>
        <counters></counters>
        <counters></counters>
        <h2>prop</h2>
        <ol>
          <li>
            <h3>使用prop传递数据</h3>
            <p>组件实例的作用域是孤立的。这意味着不能 (也不应该) 在子组件的模板内直接引用父组件的数据。父组件的数据需要通过 prop 才能下发到子组件中。</p>
            <child msg="这是child的msg"></child>
            <div>
              <input type="text" class="form-control" v-model="parentMsg">
              <child :msg="parentMsg"></child>
            </div>
            <p>动态prop 目标是对象</p>
            <ul>
              <li><strong>第一种</strong></li>
              <todo-item1
                v-bind:text="todo.text"
                v-bind:class="{finished:todo.finished}"
              ></todo-item1>
              <todo-item1 v-bind="todo"></todo-item1>
              <li><strong>第二种</strong></li>
              <todo-item2 :todo="todo"></todo-item2>
              <li><strong>第三种</strong></li>
              <todo-item3 v-for="item in todo" :key="item" v-bind:todo='item'></todo-item3>
            </ul>
          </li>
        </ol>
        <h2>命名</h2>
        <p>HTML 特性是不区分大小写的。所以，当使用的不是字符串模板时，camelCase (驼峰式命名) 的 prop 需要转换为相对应的 kebab-case (短横线分隔式命名)：</p>
        <pre style="text-align:left"><code>
          Vue.component('child', {
            // 在 JavaScript 中使用 camelCase
            props: ['myMessage'],
            template: '&lt;span&gt;{｛ myMessage ｝}&lt;/span&gt;'
          })
          &lt;!-- 在 HTML 中使用 kebab-case --&gt;
          &lt;child my-message="hello!"&gt;&lt;/child&gt;
        </code></pre>

      </div>
    </div>
  </div>
  <hr>
  <div class="row">
    <div class="col-sm-offset-1 col-sm-10">
      <div class="col-sm-6">
        <h2>字面量语法 vs 动态语法</h2>
        <!-- 传递了一个字符串 "1" -->
        <comp class="bg-info" some-prop="1"></comp>
        <p>因为它是一个字面量 prop，它的值是字符串 "1" 而不是一个数值。如果想传递一个真正的 JavaScript 数值，则需要使用 v-bind，从而让它的值被当作 JavaScript 表达式计算：</p>
        <!-- 传递真正的数值 -->
        <comp class="bg-info" v-bind:some-prop="1"></comp>
        <h2>单项数据流</h2>
        <p>在两种情况下，我们很容易忍不住想去修改 prop 中数据：</p>
        <ul>
          <li>
          <p>Prop 作为初始值传入后，子组件想把它当作局部数据来用；</p>
          <div>
            <p>定义一个局部变量，并用 prop 的值初始化它：</p>
            <code>
              props: ['initialCounter'],<br>
              data: function () {<br>
              &nbsp;&nbsp;return {counter: this.initialCounter} <br>
              } <br>
            </code>
          </div>
          </li>
          <li>
          <p>Prop 作为原始数据传入，由子组件处理成其它数据输出。</p>
          <div>
            <p>定义一个计算属性，处理 prop 的值并返回：</p>
            <code>
              props: ['size'],<br>
              computed: {<br>
              &nbsp;normalizedSize: function () {<br>
              &nbsp;&nbsp;return this.size.trim().toLowerCase() <br>
              &nbsp;} <br>
              } <br>
            </code>
          </div>
          </li>
        </ul>
        <p class="green">例子见comp</p>
        <p class="green">注意在 JavaScript 中对象和数组是引用类型，指向同一个内存空间，如果 prop 是一个对象或数组，在子组件内部改变它会影响父组件的状态。</p>
        <h2>prop验证</h2>
        <prop-invalid
          :propA="100"
          :propB="'string,number'"
          :propC="'string'"
          :propE="{a:'a'}"
          :propF="11"
        ></prop-invalid>
        <p>propF比10小的话，控制台报错，但是会渲染出来</p>
        <p>当 prop 验证失败，Vue 会抛出警告 (如果使用的是开发版本)。<span class="green">注意 prop 会在组件实例创建之前进行校验，所以在 default 或 validator 函数里，诸如 data、computed 或 methods 等实例属性还无法使用。</span></p>
        <h2>非prop特性</h2>
        <p>所谓非 prop 特性，就是指它可以直接传入组件，而不需要定义相应的 prop。</p>
        <p>设我们使用了第三方组件 bs-date-input，它包含一个 Bootstrap 插件，该插件需要在 input 上添加 data-3d-date-picker 这个特性。这时可以把特性直接添加到组件上 (不需要事先定义 prop)</p>
        <code>&lt;bs-date-input data-3d-date-picker="true"&gt;&lt;/bs-date-input&gt;</code>
      </div>
      <div class="col-sm-6">
       <h2>自定义事件</h2>
       <p>父组件使用 prop 传递数据给子组件。<span class="green">但子组件怎么跟父组件通信呢？</span>这个时候 Vue 的自定义事件系统就派得上用场了。</p>
      <p>每个vue实力都实现了时间接口，即：</p>
      <ol>
        <li>使用$on(eventName)监听事件</li>
        <li>使用$emit(eventName)触发事件</li>
      </ol>
      <p>父组件可以再食用子组件的地方直接使用v-on监听子组件触发的事件，不能用$on监听子组件释放的事件，而必须在模版里直接用v-on绑定</p>
      <p>{{total}}</p>
      <btn-counter @increment="incrementTotal"></btn-counter>
      <btn-counter @increment="incrementTotal"></btn-counter>
      <h3>给组件绑定原生事件</h3>
      <p>你可能想在某个组件的根元素上监听一个原生事件。</p>
      <my-message :total="total" @click.native="doTheThing"></my-message>
      <h3>.sync修饰符</h3>
      <p>当一个子组件改变了一个带 .sync 的 prop 的值时，这个变化也会同步到父组件中所绑定的值。这很方便，但也会导致问题，因为它破坏了单向数据流。从2.0中移除，从2.3开始重新引入。它会被扩展为一个自动更新父组件属性的 v-on 监听器。</p>
      <h2>自定义事件的表单输入组件</h2>
      <currency-input label="Price" ref="currency" :value="price" @input="price = arguments[0]"></currency-input>
      <my-checkbox v-model="foo" :value="'some value'"></my-checkbox>
      <h2>非父子组件的通信</h2>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
// import main from '@/main'
let data = {count : 0};
  export default {
    name:'Component',
    data:function(){
      return {
        count:0,
        // msg:'这是msg'
        parentMsg : '',
        todo : {
          text: 'learn vue',
          finished: true
        },
        foo:false,
        total : 1,
        price:0
      }
    },
    components:{
      'component1':{
        template:'<div>这是局部注册的组件component1</div>'
      },
      'my-row':{
        template:'<td>my-row</td>'
      },
      'counters':{
        template:'<button class="btn btn-default" @click="count += 1">{{count}}</button>',
        data:function(){
          return {
            count:0
          }//每个按钮count都是独立的。
          // return data;//三个按钮数字一起变，因为绑定的是一个对象
        }
      },
      'child':{
        props:['msg'],
        template:'<span class="green">{{msg}}</span>'
      },
      'todo-item1':{
        // 第一种
        props:['text','finished'],
        template:`<li :class="{finished:finished}" :text="text">{{text}}</li>`
      },
      'todo-item2':{
        // 第二种
        props:['todo'],
        template:'<li :class="{finished:todo.finished}">{{todo.text}}</li>'
      },
      'todo-item3':{
        props:['todo'],
        template:`<li>{{todo}}</li>`
      },
      'comp':{
        props:['someProp'],
        data:function(){
          return {
            counter: this.someProp
          }
        },
        computed:{
          compProp:function(){
            return typeof this.someProp
          }
        },
        template:`<p>someProp:{{someProp}},counter:{{counter}},compProp类型:{{compProp}}</p>`
      },
      'propInvalid':{
        props:{
          propA:Number,//数值。基础类型检测（｀null｀指允许任何类型)
          propB:[String,Number],//数组中含有的类型
          propC:{//必传，并且是字符串
            type: String,
            required:true
          },
          propD:{//数值，并且有默认值
            type:Number,
            default:100
          },
          propE:{//数组／对象的默认值应当有一个工厂函数返回
            type:Object,
            default:function(){
              return {message:'hello'}
            }
          },
          propF:{//自定义验证函数
            validator:function(value){
              return value > 10;
            }
          }
        },
        template:`<div>
        <p>{{propA}}</p>
        <p>{{propB}}</p>
        <p>{{propC}}</p>
        <p>{{propD}}</p>
        <p>{{propE}}</p>
        <p>{{propF}}</p>
        </div>`
      },
      'my-checkbox':{
        model:{
          prop:'checked',
          event:'change'
        },
        props:{
          checked:Boolean,
          value:String//这样就允许拿value这个prop作其他事了
        },
        methods:{
          change:function(){
            this.checked = !this.checked;
          }
        },
        template:'<div><input type="checkbox" :checked="checked" :value="value"/>{{value}} <button @click="change">{{checked}}</button></div>'
      },
      'btn-counter':{
        template:'<button class="btn btn-primary" @click="incrementCounter">{{counter}}</button>',
        data:function(){
          return {
            counter : 0
          }
        },
        methods:{
          incrementCounter:function(){
            this.counter += 1;
            this.$emit('increment');
          }
        }
      },
      'my-message':{
        props:['total'],
        template:'<button class="btn btn-info">{{total}}</button>'
      },
      'currency-input':{
        template:`<div>
          <label v-if="label">{{label}}</label>
          $ <input type="text"
            :value="value"
            @input="updateValue($event.target.value)">
        </div>`,
        props:{
          value:{
            type:Number,
            default:0
          },
          label:{
            type:String,
            default:''
          }
        },
        methods:{
          updateValue:function(value){
            var formattedValue = value.slice(0,value.indexOf('.')+3);
            // 如果值不统一，手动覆盖以保持一致
            /*if (formattedValue != value) {
              this.$refs.currency.value = formattedValue;
            }*/
            this.$emit('input',Number(formattedValue));
          }
        }
      },

    },
    methods:{
      incrementTotal:function(){
        this.total += 1;
      },
      doTheThing:function(){
        this.total -= 1;
      }
    },
    computed:{
      totals:function(){
        return ((
          this.price * 100 +
          this.shipping * 100 +
          this.handling * 100 -
          this.discount * 100
          )/100).toFixed(2)
      }
    }
  }
</script>
<style>
.finished{
  text-decoration:line-through;
}
</style>
