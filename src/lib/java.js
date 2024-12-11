
function change(){
     let wH = window.innerHeight;
     let mH = document.querySelector(".main").clientHeight;
     let lH = document.querySelector(".ident").clientHeight;
     
     console.log(wH);
     console.log(mH+lH);
     let eH = ((wH-mH)-100).toString();
     if(window.innerWidth > 600){
          document.querySelector(".ident").style.maxHeight = eH+"px";
     }
}

change();
window.addEventListener("resize", change);