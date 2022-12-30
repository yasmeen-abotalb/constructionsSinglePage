var list = document.querySelectorAll('.list');
var card = document.querySelectorAll('.container-image');
for(let i =0; i<list.length; i++){
  list[i].addEventListener('click',function(){
    for(let j=0; j<list.length; j++){
      list[j].classList.remove('activeted');
    }
    this.classList.add('activeted');
    
    let dataFilter = this.getAttribute('data-filter');
    for(let k= 0; k<card.length; k++){
      card[k].classList.remove('active');
      card[k].classList.add('hide');
      if(card[k].getAttribute('data-item') == dataFilter || dataFilter == "all"){
        card[k].classList.remove('hide');
        card[k].classList.add('active');
      }
    }
  });
}

// button go up
let btn = document.querySelector(".go-top");
window.onscroll =function(){
    if(this.scrollY >=300){
        btn.classList.add("show");
    }else{
        btn.classList.remove("show");
    }
}
btn.onclick = function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}
