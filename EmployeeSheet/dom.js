

const $ = function (selector) {
    const nodeList = document.querySelectorAll(selector);
  
    const text = function(content){
      for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].innerText = content;
      }
    }
    
    const html = function(content){
      for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].innerHTML = content;
      }
    }
  //add
    const addClass = function(className){
      for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].classList.add(className);
      }
    }
  //delete
    const removeClass = function(className){
      for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].classList.remove(className);
      }
    }
  //view option
    const toggleClass = function(className){
      for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].classList.toggle(className);
      }
    }
  
    const empty = function(){
      for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].innerHTML = '';
      }
    }
  //add
    const append = function(content){
      for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].innerHTML += content;
      }
    }
  //update
    const prepend = function(content){
      for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].innerHTML = content + nodeList[i].innerHTML;
      }
    }
  //verify
    const val = function (content) {
        if(content === undefined){
          return nodeList[0].value; 
        } else {
          nodeList[0].value = content;
        }     
    }
  
    const on = function (action, cb) {
      for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].addEventListener(action, cb);
      }
    }
  
    return {
      text: text,
      html: html,
      addClass: addClass,
      removeClass: removeClass,
      toggleClass: toggleClass,
      empty: empty,
      append: append,
      prepend: prepend,
      on: on,
      val: val
    };
  }
  