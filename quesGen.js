document.addEventListener('scroll',function(){
    var scrollTop= window.pageYOffset;
    var parallaxBgLeft= document.querySelector('.parallax-bg-left');
    var parallaxBgRight= document.querySelector('.parallax-bg-right');
    parallaxBgLeft.style.transform='translateX(' + -scrollTop*0.5 +'px)';
    parallaxBgRight.style.transform='translateX(' + scrollTop*0.5 + 'px)';
});
