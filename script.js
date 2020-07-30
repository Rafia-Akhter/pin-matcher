  function insert(num) {
    document.forms.text.value =  document.forms.text.value + num;
    
  }
  function clear() {
    document.forms.text.value = '';
  }
  function back() {
    var exp = document.forms.text.value;
    document.forms.text.value = exp.substring(0,exp.length-1);
  }


