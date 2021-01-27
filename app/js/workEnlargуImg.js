const works = document.querySelector('.works');
const worksBoxImg= document.querySelectorAll('.works-box__img');
const worksImg= document.querySelector('.works__img');

worksBoxImg.forEach(img=>{
    img.addEventListener('click',()=>{
        if (img.classList.length!=3){
            img.classList.remove('w-20');
            img.classList.add('w-50');
            img.classList.add('absolute');
        }else{
            img.classList.remove('w-50');
            img.classList.add('w-20');
            img.classList.remove('absolute');
        }
    })
})