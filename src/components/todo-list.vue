<template>
<div>
  <input type="text" 
    v-model="newTodoTest"
    @keyup.enter="addNewTodo"
    placeholder="add a todo">
  <my-component
    v-for="(item,index) in items"
    :item="item"
    :index="index"
    :key="item.id"
    :title="item.title"
    @remove="items.splice(index,1)">
  </my-component>
  <button class="btn btn-success" @click="greet">greetBtn</button>
  <button class="btn btn-info" @click="say('hi')">say hi</button>
  <button class="btn btn-info" @click="say('hello')">say hello</button>
  <button class="btn btn-warning" @click="warn('warn message',$event)">warn</button>
</div>
</template>

<script>
  export default {
    name: 'todoList',
    data(){
      return {
        newTodoTest:'',
        newTodoId:4,
        items:[
          {id:1,title:'title1'},
          {id:2,title:'title2'},
          {id:3,title:'title3'}
        ]
      }
    },
    methods:{
      addNewTodo:function (){
        this.items.push({
          id:this.newTodoId++,
          title:this.newTodoTest
        });
        this.newTodoTest = '';
      },
      greet:function(event){
        alert('hello ' + this.newTodoTest);
        if (event) {
          alert(event.target.tagName)
        }
      },
      say:function(msg){
        alert('say ' + msg);
      },
      warn:function(message,event){
        if (event) {
          event.preventDefault()
        }
        alert(message)
      }
    },
    components:{
      'my-component':{
        template:`<p>
          {{item.title}}
          <button class="btn btn-warning btn-xs" @click="$emit('remove')">X</button>
          </p>`,
          props:['item']
      }
    }
  }
  /*Vue.component('my-component',{
    template:`<p>
    {{title}}
    <button @click="$emit('remove')">X</button>
    </p>`,
    props:['title']
  })*/
</script>