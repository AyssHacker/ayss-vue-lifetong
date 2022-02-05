export default {
  formatJSON(arr, key){
    return arr.filter((item) => {
      if(item[key]){
        item[key] = item[key].split(',')
      }

      return item;
    })
  },

  jsonToArr(str){
    return JSON.parse(str);
  },

  strToArr(str){
    return str.split(',');
  },

  replaceToSpace(str){
    return str.replace(/,/g, ' ');
  },

  trimSpace(str){
    return str.replace(/\s+/g, '');
  },

  throttle(fn, delay){
    var begin = new Date().getTime,
        t = null;
    
    return function() {
      var _self = this,
          args = arguments,
          cur = new Date().getTime;

      clearTimeout(t);

      if(cur - begin >= delay){
        fn.apply(_self, args);
        begin = cur;
      }else{
        t = setTimeout(() => {
          fn.apply(_self, args);
        }, delay)
      }
    }
  }
}