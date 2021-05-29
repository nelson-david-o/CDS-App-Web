window.onscroll = function(){


    if(document.documentElement.scrollTop > 150){
        document.querySelector('.up_container')
        .classList.add('show');

    }else{
        document.querySelector('.up_container')
        .classList.remove('show');
    }
}

document.querySelector('.up_container')
.addEventListener('click', () => {
    window.scrollTo({
        top: 0, 
        behavior: 'smooth'
    });
});