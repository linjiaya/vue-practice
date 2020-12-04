const STORAGE_KEY = 'todos-vuejs';
export default {
  fetch : function(){//取
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
  },
  save : function(items){//保存
    localStorage.setItem(STORAGE_KEY,JSON.stringify(items));
  }
}