'use strict';

//autogallery
const gallery=document.querySelector('.gallery');
const galleryUl=gallery.querySelector('ul');
const galleryUlLi=galleryUl.querySelectorAll('li');

const arrow=document.querySelectorAll('span.arrow');

const items=document.querySelectorAll('.items>ul>li');

const arrBg=[];

for(let i=0;i<galleryUlLi.length;i++){
  arrBg.push(`url(img/g${i}.jpg) no-repeat 50%/cover`);
  galleryUlLi[i].style.background=arrBg[i];
}

let i=-1;

const autoGallery=()=>{
  i++;
  const gap=galleryUlLi[1].offsetLeft-galleryUlLi[0].offsetLeft;
  const goto=(-i*gap)+'px';
  
  gallery.style.left=goto;
  gallery.style.transition='all 0.5s';
  
  
  if(i>=galleryUlLi.length-1) i=-1;

}

let setIn=setInterval(autoGallery,4000);

(()=>autoGallery())();

//span.arrow
arrow.forEach(function(el){
  el.addEventListener('mouseover',function(){
    clearInterval(setIn);
  })
  el.addEventListener('mouseout',function(){
    setIn=setInterval(autoGallery,4000);
  })
})
//items
items.forEach(el=>{
  el.addEventListener('mouseover',()=> clearInterval(setIn));
  el.addEventListener('mouseout',()=> setIn=setInterval(autoGallery,4000));
});


