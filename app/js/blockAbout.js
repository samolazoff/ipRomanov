const blockAbout=document.querySelector('.about');
const imgAbout=blockAbout.querySelector('.about__img');
const contAbout=blockAbout.querySelector('.about-content');


const structureAbout=()=>{
    if (blockAbout.offsetWidth>576){
        imgAbout.hidden = false;
        contAbout.classList.remove('w-100');
        contAbout.classList.add('w-50');
    }else{
        imgAbout.hidden = true;
        contAbout.classList.remove('w-50');
        contAbout.classList.add('w-100');
    }
}
structureAbout();
window.addEventListener('resize',function(){
    structureAbout();
});
