
function change(){
     let wH = window.innerHeight;
     let mH = document.querySelector(".main").clientHeight;
     let lH = document.querySelector(".ident").clientHeight;

     if (wH >= (mH+lH)){
          console.log("lorem");
          document.querySelector(".ident").classList.add("col");
     } else {
          console.log("ipsum"); 
          document.querySelector(".ident").classList.remove("col");
     }
     console.log(wH);
     console.log(mH+lH);
     let eH = ((wH-mH)-100).toString();
     document.querySelector(".ident").style.maxHeight = eH+"px";
}

change();
window.addEventListener("resize", change);