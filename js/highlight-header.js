var element = document.getElementsByClassName("subtitles")[0];
element.addEventListener("click", myFunction);

function myFunction(e) {
    var elems = document.querySelector(".active");
    if(elems !==null){
     elems.classList.remove("active");
     elems.classList.add("subtitle")
    }
   e.target.className = "active";
  }