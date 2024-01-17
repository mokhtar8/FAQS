
let btn = document.querySelectorAll(".accord-btn");
const javab = document.getElementById('javab');
const javab1 = document.getElementById('java');

for ( let i =0 ; i < btn.length  ; i++){
btn[i].addEventListener('click', function () {
   
  let iconplus = this.querySelector('.icon-plus');
  let iconminus = this.querySelector('.icon-minus');

  if ( javab== 'none'){
    iconminus.style.display = 'none';
    iconplus.style.display = 'block';

    javab.style.display = 'none';

  }else {

    iconminus.style.display = 'block';
    iconplus.style.display = 'none';


    javab.style.display = "block";
    javab1.style.display = "block";
  }

});
console.log(btn)

}


