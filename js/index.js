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

let areaList = document.querySelector('.area-chk-list');
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
    e.parentElement.parentElement.remove();
  });
}