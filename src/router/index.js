import Vue from 'vue'
import LinVueRouter from 'vue-router'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Hello from '@/components/Hello'
import Hello2 from '@/components/Hello2'
import textHtml from '@/components/textHtml'
import someEG from '@/components/someEG'
import parent from '@/components/parent'
import todoList from '@/components/todo-list'
import Event from '@/components/event'
import Form from '@/components/form'
import Component from '@/components/component'
import Component2 from '@/components/component2'
import googleMap from '@/components/googleMap'
import yzmInput from '@/components/yzmInput'
import mockEG from '@/example/mockEG'

//LinVueRouter 这里三个名字要一样

Vue.use(LinVueRouter)

const routers = [
  {
    path:'/',
    components:{
      default:Hello,
      header:Header,
      footer:Footer
    }
  },{
    path: '/Hello',
    name: 'Hello',
    component: Hello,
    children:[
      {
        name:'Hello2',
        path: 'Hello2/:id',
        component: Hello2
      }
    ]
  },{
    path: '/textHtml',
    name: 'textHtml',
    component: textHtml
  },{
    path: '/someEG',
    name: 'someEG',
    component: someEG
  },{
    path: '/parent',
    name: 'parent',
    component: parent
  },{
    path: '/todoList',
    name: 'todoList',
    component: todoList
  },{
    path: '/event',
    name: 'Event',
    component: Event
  },{
    path: '/form',
    name: 'Form',
    component: Form
  },{
    path: '/Component',
    name: 'Component',
    component: Component
  },{
    path: '/Component2',
    name: 'Component2',
    component: Component2
  },{
    path: '/googleMap',
    name: 'googleMap',
    component: googleMap
  },{
    path: '/yzmInput',
    name: 'yzmInput',
    component: yzmInput
  },{
    path: '/mockEG',
    name: 'mockEG',
    component: mockEG
  }
];

export default new LinVueRouter({
  routes : routers
})
