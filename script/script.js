// const a = document.querySelector('nav');
// window.addEventListener('scroll',function(e){
//   if(document.body.scrollTop > 200 ||document.documentElement.scrollTop > 200){
//      a.classList.add('scrolled')
//   }else{
//     a.classList.remove('scrolled')
//   }
// })
// if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
//   console.log('ok')
// }
// const test = document.body.scrollTop
// console.log(test)
const about_section = document.querySelector('.test');
const nav = document.querySelector('nav');
const position = nav.getBoundingClientRect();
const observer = new IntersectionObserver((entries,observer = {
    root: null,
    rootMargin: position.height
}) =>{
    console.log(observer);
   entries.forEach(entry =>{
        if(entry.isIntersecting){
            nav.classList.add('scrolled');
    }else{nav.classList.remove('scrolled')}
   })
});
observer.observe(about_section);
