window.onload = function() {
  printTime();
}

let timeTxt = document.querySelector('.h-wrap .time');
function printTime() {
  let dateInfo = new Date();
  let year = dateInfo.getFullYear();
  let month = dateInfo.getMonth() + 1;
  let date = dateInfo.getDate();
  let hours = modifyNumber(dateInfo.getHours());
  let minutes = modifyNumber(dateInfo.getMinutes());
  let seconds = modifyNumber(dateInfo.getSeconds());
  timeTxt.innerHTML = (year + '-' + month + '-' + date + ' ' + hours + ':' + minutes + ':' + seconds);
  setTimeout('printTime()', 1000);
}
function modifyNumber(time){
  if(parseInt(time)<10){
    return "0"+ time;
  } else {
    return time;
  }
}

let topIndex = document.querySelector('.top-index');
topIndex.addEventListener('click', function(e) {
  let nm = e.currentTarget.className;
  if(nm === 'top-index') {
    topIndex.classList.add('on');
  } else {
    topIndex.classList.remove('on');
  }
});

let client = document.querySelector('.client');
let listBtn = document.querySelector('.client .list-btn');
if(listBtn)listBtn.addEventListener('click', function(e) {
  let clientNm = e.currentTarget.parentNode.className;
  if(clientNm === 'client') {
    client.classList.add('on');
  } else {
    client.classList.remove('on');
  }
});

let listChild = document.querySelectorAll('.area-chk-list li');
Array.prototype.forEach.call(listChild, function(e) {
  e.addEventListener('click', function() {
    if(e.className === 'on' || e.className === 'check on') {
      e.classList.remove('on');
    } else {
      for (let i = 0; i < listChild.length; i++) {
        listChild[i].classList.remove('on');
      }
      e.classList.add('on');
    }
  });
});

let routeChild = document.querySelectorAll('.route-chk-list li');
Array.prototype.forEach.call(routeChild, function(e) {
  e.addEventListener('click', function() {
    if(e.className === 'on' || e.className === 'check on') {
      e.classList.remove('on');
    } else {
      for (let i = 0; i < routeChild.length; i++) {
        routeChild[i].classList.remove('on');
      }
      e.classList.add('on');
    }
  });
});

let sBtn = document.querySelector('.s-btn');
let aside = document.querySelector('aside');
let asideX = document.querySelector('aside .top .close');
let article = document.querySelector('article');
if(sBtn)sBtn.addEventListener('click', function(e) {
  if(aside.className !== 'on') {
    sBtn.classList.remove('on');
    aside.classList.add('on');
    article.classList.add('aside-on');
  }
});
if(asideX)asideX.addEventListener('click', function() {
  aside.classList.remove('on');
  sBtn.classList.add('on');
  article.classList.remove('aside-on');
});

let decAsc = document.querySelector('.dec-asc');
if(decAsc)decAsc.addEventListener('click', function(e) {
  let nm = e.target.className;
  if(nm === 'dec-asc') {
    decAsc.classList.add('ascending');
  } else {
    decAsc.classList.remove('ascending');
  }
});

let del = document.querySelector('.del');
if(del)del.addEventListener('click', function() {
  chkdDel();
});

function chkdDel() {
  let chkd = document.querySelectorAll('input[type=checkbox]:checked');
  Array.prototype.forEach.call(chkd, function(e) {
    if(e.parentElement.parentElement.nodeName === 'LI') {
      e.parentElement.parentElement.remove();
    }
  });
}

let tabs = document.querySelectorAll('.dmy li');
let h2Tit = document.querySelector('.h2-tit s');
let h2Graph = document.querySelector('.h2-graph s');
let txtList = ['VCB','ACB','DC'];
Array.prototype.forEach.call(tabs, function(e,idx) {
  e.addEventListener('click', function() {
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('on');
    }
    e.classList.add('on');
    if(idx === 0) {
      h2Tit.innerHTML = txtList[0];
      h2Graph.innerHTML = txtList[0];
    } else if(idx === 1) {
      h2Tit.innerHTML = txtList[1];
      h2Graph.innerHTML = txtList[1];
    } else {
      h2Tit.innerHTML = txtList[2];
      h2Graph.innerHTML = txtList[2];
    }
  })
});

let resultElement1 = document.querySelector('.history .c-view1 s');
let resultElement2 = document.querySelector('.history .c-view2 s');
let maxNum = 100;
let minNum = 0;
function count(type)  {
  let number1 = resultElement1.innerText;
  let number2 = resultElement2.innerText;
  if(type === 'plus1') {
    number1 = parseInt(number1) + 1;
    if(number1 > maxNum) { return; }
  } else if(type === 'minus1')  {
    number1 = parseInt(number1) - 1;
    if(number1 < minNum) { return; }
  }
  if(type === 'plus2') {
    number2 = parseInt(number2) + 1;
    if(number2 > maxNum) { return; }
  } else if(type === 'minus2')  {
    number2 = parseInt(number2) - 1;
    if(number2 < minNum) { return; }
  }
  resultElement1.innerText = number1;
  resultElement2.innerText = number2;
}

//p40 drag drop
function allowDrop(e) {
  e.preventDefault();
}
function drag(e) {
  e.dataTransfer.setData("text", e.target.id);
}
function drop(e) {
  e.preventDefault();
  let data = e.dataTransfer.getData("text");
  let nodeCopy = document.getElementById(data).cloneNode(true);
  if(e.target.childNodes.length === 0) {
    e.target.appendChild(nodeCopy);
    childCheck();
  }
}
let dropItems;
function childCheck() {
  dropItems = document.querySelectorAll('.drop-box .drag-item')
  Array.prototype.forEach.call(dropItems, function(e) {
    e.addEventListener('click', function() {
      e.remove()
    })
  })
}




