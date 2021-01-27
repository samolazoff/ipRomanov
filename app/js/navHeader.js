const wrap = document.querySelector('.wrap')
const navHeader = document.querySelector('.header-nav');
const iMenuHeader = navHeader.querySelector('#menu-header');
const listNavHeader = navHeader.querySelector('.nav-list');

const structureNav=()=>{
    if (wrap.offsetWidth>768){
        iMenuHeader.hidden = true;
        listNavHeader.classList.remove('flex-col');
        listNavHeader.classList.add('flex-row');
        navHeader.classList.add('between');
        navHeader.classList.remove('end');
    }else{
        iMenuHeader.hidden = false;
        listNavHeader.hidden = true;
        navHeader.classList.remove('between');
        navHeader.classList.add('end');
        navHeader.classList.add('relative');
        listNavHeader.classList.remove('flex-row');
        listNavHeader.classList.remove('flex-col');
    }
}
structureNav();
window.addEventListener('resize',function(){
    structureNav();
});
iMenuHeader.addEventListener('click',()=>{
    iMenuHeader.hidden = true;
    listNavHeader.hidden = false;
    listNavHeader.classList.remove('w-100');
    listNavHeader.classList.add('w-50');
    listNavHeader.classList.add('absolute');
    listNavHeader.classList.add('nav__active');
})
