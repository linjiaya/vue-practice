<template>
  <div class="form">
    <div class="row">
      <div class="col-sm-1"></div>
      <div class="col-sm-5">
        <h2>文本</h2>
        <ol>
          <li>你可以用 v-model 指令在表单<code> &lt;input&gt; </code>及<code> &lt;textarea&gt; </code>元素上创建双向数据绑定。它会根据控件类型自动选取正确的方法来更新元素。尽管有些神奇，但 v-model 本质上不过是语法糖。它负责监听用户的输入事件以更新数据，并对一些极端场景进行一些特殊处理。</li>
          <li>v-model 会忽略所有表单元素的value、checked、selected 特性的初始值而总是将 Vue 实例的数据作为数据来源。你应该通过 JavaScript 在组件的 data 选项中声明初始值。</li>
          <li>对于需要使用输入法 (如中文、日文、韩文等) 的语言，你会发现 v-model 不会在输入法组合文字过程中得到更新。如果你也想处理这个过程，请使用 input 事件。</li>
        </ol>
        <p>msg is : {{msg}}</p>
        <input class="form-control" type="text" v-model="msg" placeholder="edit"><br>
        <h2>多行文本</h2>
        <p>在文本区域插值 (<code>&lt;textarea&gt;&lt;/textarea&gt;</code>) 并不会生效，应用 v-model 来代替。</p>
        <textarea class="form-control" v-model="msg" placeholder="v-model='msg'"></textarea>
        <textarea class="form-control" placeholder="{ {msg} }这样就无效">{{msg}}</textarea>
      </div>
      <div class="col-sm-5">
        <h2>checkbox、radio、select</h2>
        <input type="checkbox" id="jack" value="jack" v-model="checkbox">
        <label for="jack">jack</label>
        <input type="checkbox" id="john" value="john" v-model="checkbox">
        <label for="john">john</label>
        <input type="checkbox" id="Joe" value="Joe" v-model="checkbox">
        <label for="Joe">Joe</label>
        <p>you choose : {{checkbox}}</p>
        <hr>
        <input type="radio" id="one" value="one" v-model="radio">
        <label for="one">one</label>
        <input type="radio" id="two" value="two" v-model="radio">
        <label for="two">two</label>
        <p>you choose:{{radio}}</p>
        <hr>
        <select v-model="select" class="form-control">
          <option disabled="true" value="">请选择</option>
          <option >A</option>
          <option >B</option>
          <option >C</option>
        </select>
        <p>you selected: {{select}}</p>
        <p>如果 v-model 表达式的初始值未能匹配任何选项，<code>&lt;select&gt;</code>元素将被渲染为“未选中”状态。在 iOS 中，这会使用户无法选择第一个选项。因为这样的情况下，iOS 不会触发 change 事件。因此，更推荐像上面这样提供一个值为空的禁用选项。</p>
        <select v-model="selected" multiple="multiple" size="5" class="form-control">
          <option disabled="true" value="">请选择</option>
          <option v-for="option in options" :value="option.value">{{option.text}}</option>
        </select>
        <p>you selected: {{selected}}</p>
        <hr>
        <input type="checkbox" id="toggle" v-model="toggle" true-value="yes" false-value="no">
        <label for="toggle">yes/no</label>
        <p>toggle: {{toggle}}</p>
        <p>这里的 <code>true-value</code> 和 <code>false-value</code> 特性并不会影响输入控件的 value 特性，因为浏览器在提交表单时并不会包含未被选中的复选框。如果要确保表单中这两个值中的一个能够被提交，(比如“yes”或“no”)，请换用单选按钮。</p>
        <input type="radio" v-model="pick" :value="a">
        <p>当选中时pick=a。pick: {{pick}} , a: {{a}}</p>
      </div>
      <div class="col-sm-1"></div>
    </div>
    <hr>
    <div class="row">
      <div class="col-sm-offset-1 col-sm-10">
        <div class="col-sm-6">
          <h2>修饰符</h2>
          <label for="lazy">.lazy change事件进行同步</label>
          <input v-model.lazy="msg" id="lazy" class="form-control">
          <label for="number">.number 自动将用户的输入值转为数值类型</label>
          <input class="form-control" type="number" v-model.number="age">
          <label for="trim">.trim 自动过滤用户输入的首尾空白字符</label>
          <input class="form-control" type="text" v-model.trim="msg">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'form',
  data:function(){
    return {
      msg:'',
      checkbox:['Joe'],
      radio:'one',
      select:'',
      selected:[],//多选就绑定到一个数组
      options: [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
      ],
      toggle:'yes',
      pick:'pick',
      a:'a',
      age:0,
    }
  }
}
</script>