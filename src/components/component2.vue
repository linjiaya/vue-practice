<template>
  <div class="component2">
    <h1>续 component 上篇</h1>
    <div class="row">
      <div class="col-sm-offset-1 col-sm-10">
        <div class="col-sm-6">
          <h2>非父子之间的通信</h2>
          <p>详细见parent.vue child.vue</p>
          
          <h2>使用插槽分发内容</h2>
          <pre style="text-align:left"><code>
            &lt;app&gt;
              &lt;app-header&gt; &lt;/app-header&gt;
              &lt;app-footer&gt; &lt;/app-footer&gt;
            &lt;/app&gt;
          </code></pre>
          <p>
          <span class="green">注意：</span>
          <ol>
            <li>&lt;app&gt;组件不知道会收到什么样的内容，是有使用app的父组件决定的</li>
            <li>app组件很可能有自己的模版</li>
          </ol>
          </p>
          <p>为了让组件可以组合，我们需要一种方式来混合父组件的内容与子组件自己的模板。这个过程被称为内容分发 (即 Angular 用户熟知的“transclusion”)。Vue.js 实现了一个内容分发 API，参照了当前 Web Components 规范草案，使用特殊的 &lt;slot&gt; 元素作为原始内容的插槽。</p>
          <h4 class="green">父组件模板的内容在父组件作用域内编译；子组件模板的内容在子组件作用域内编译。</h4>
          <h3>单个插槽</h3>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'component2',
    data:function(){
      return {

      }
    },
    methods:{

    }
  }
</script>