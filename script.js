let close = document.querySelector(".close");
let menu = document.querySelector(".menu");
let np3in = document.querySelector( ".np3in" );

const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true
});

// custom cursor code
let crscr = document.querySelector(".crscr");
document.addEventListener("mousemove",(dets)=>{
       crscr.style.left = dets.x + 5 +"px";
       crscr.style.top = dets.y + 5 +"px";
});

close.addEventListener("click",()=>{
    menu.style.height = "1%" ;    
})

menu.addEventListener("mouseleave",()=>{
    menu.style.height = "1%" ;
})

np3in.addEventListener("mouseenter",()=>{
    menu.style.height = "80%";
})