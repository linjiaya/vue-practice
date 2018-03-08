<template>
  <div class="row event">
    <div class="col-sm-offset-1 col-sm-10">
      <div class="col-sm-6">
        <h2>监听事件</h2>
        <button class="btn btn-default" @click="count += 1">add 1</button>
        <p>the button clicked {{count}} times</p>
      <hr>
        <h2>事件修饰符</h2>
        <p><a @click.stop="doThis">click.stop 阻止单击事件继续传播 </a></p>
        <p><a v-on:click.stop.prevent="doThat">click.stop.prevent 修饰符可以串联</a></p>
        <form v-on:submit.prevent="onSubmit">提交事件不再重载页面</form>
        <form v-on:submit.prevent>只有修饰符</form>
        <div class="well" @click.capture="doThis">添加事件监听器时使用事件捕获模式,<span class="redColor">即元素自身触发的事件先在此处处理，然后才交由内部元素进行处理</span></div>
        <div class="well" @click.self="doThat">只当在 event.target 是当前元素自身时触发处理函数,<span class="redColor">即事件不是从内部元素触发的</span></div>
        <p><label class="green">注意：</label>使用修饰符时，顺序很重要；相应的代码会以同样的顺序产生。因此，用 @click.prevent.self 会阻止所有的点击，而 @click.self.prevent 只会阻止对元素自身的点击。</p>
        <p>2.1.4新增<label>.once</label><button class="btn btn-default" @click.once="doThis">只触发一次</button></p>
        <p>2.3.0新增<label>scroll.passive</label><div v-on:scroll.passive="onScroll">...</div></p>
        <p><label class="green">注意：</label>1、 .passive 修饰符来提升移动端的性能。举个例子，在滚动的时候，浏览器会在整个事件处理完毕之后再触发滚动，因为浏览器并不知道这个事件是否在其处理函数中被调用了 event.preventDefault()。.passive 修饰符用来进一步告诉浏览器这个事件的默认行为不会被取消。</p>
        <p>2、 不要把 .passive 和 .prevent 一起使用。被动处理函数无法阻止默认的事件行为。</p>
      </div>
      <div class="col-sm-6">
        <h2>按键修饰符</h2>
        <!-- 只有在 `keyCode` 是 13 时调用 `vm.submit()` -->
        <input class="form-control" @keyup.13="submit" placeholder="只有在 `keyCode` 是 13 时调用 vm.submit()">
        <label>别名</label>
        {{msg}}
        <input class="form-control" type="text" @keyup.enter="keyupMethods('enter')" v-model="inputMsg" placeholder="请按enter键">
        <input class="form-control" type="text" @keyup.tab="keyupMethods('tab')" v-model="inputMsg" placeholder="请按tab键">
        <input class="form-control" type="text" @keyup.delete="keyupMethods('delete')" v-model="inputMsg" placeholder="请按delete键">
        <input class="form-control" type="text" @keyup.esc="keyupMethods('esc')" v-model="inputMsg" placeholder="请按esc键">
        <input class="form-control" type="text" @keyup.space="keyupMethods('space')" v-model="inputMsg" placeholder="请按space键">
        <input class="form-control" type="text" @keyup.up="keyupMethods('up')" v-model="inputMsg" placeholder="请按 ⬆️ 键">
        <input class="form-control" type="text" @keyup.down="keyupMethods('down')" v-model="inputMsg" placeholder="请按 ⬇️ 键">
        <input class="form-control" type="text" @keyup.left="keyupMethods('left')" v-model="inputMsg" placeholder="请按 ⬅️ 键">
        <input class="form-control" type="text" @keyup.right="keyupMethods('right')" v-model="inputMsg" placeholder="请按 ➡️ 键">
        <p>可以通过全局 config.keyCodes 对象自定义按键修饰符别名：</p>
        <code>// 可以使用 `v-on:keyup.f1`
        Vue.config.keyCodes.f1 = 112</code>
      <hr>
        <h2>系统修饰键</h2>
        
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'event',
    data : function(){
      return {
        count:0,
        msg:'',
        inputMsg:'',
      }
    },
    methods:{
      doThis:function(){
        alert('dothis');
      },
      doThat:function(){
        alert('doThat');
      },
      onSubmit:function(){
        alert('onSubmit '+this.alertMsg);
      },
      keyupMethods:function(option){
        this.msg  = option + ' ' + this.inputMsg ;
      }
    }
  }
</script>