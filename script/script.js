const a = document.querySelector('nav');
window.addEventListener('scroll',function(e){
  if(document.body.scrollTop > 200 ||document.documentElement.scrollTop > 200){
     a.classList.add('scrolled')
  }else{
    a.classList.remove('scrolled')
  }
})
if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
  console.log('ok')
}
// const test = document.body.scrollTop
// console.log(test)