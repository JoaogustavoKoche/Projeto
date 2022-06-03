function fav() {
    let icon = document.querySelector('#fav');
    console.log(icon);

    if(icon.style.backgroundImage = "url('/svg/fav.svg')") {
        console.log("loop1");
        icon.style.backgroundImage = "url('/svg/favorited.svg')";
    }else {
        console.log("loop2");
        icon.style.backgroundImage = "'url('/svg/fav.svg')";
    }
   
}
