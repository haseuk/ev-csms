let localArea = document.querySelector('.local-area');
let regs = document.querySelectorAll('.reg');
let regMapOpen = document.querySelector('section');
function mapOpen(v) {
  localArea.classList.add('open');
  localArea.querySelector('.'+v).classList.add('on');
  regMapOpen.classList.add('region-open');
}
let localAreaClose = document.querySelector('.reg-close');
localAreaClose.addEventListener('click', function() {
  localArea.classList.remove('open');
  for (let i = 0; i < regs.length; i++) {
    regs[i].classList.remove('on');
  }
  regMapOpen.classList.remove('region-open');
});
function infoShow(v) {
  let info = document.querySelector('.'+v);
  info.style.display = 'block';

}
function infoHide(v) {
  let info = document.querySelector('.'+v);
  info.style.display = 'none';
}