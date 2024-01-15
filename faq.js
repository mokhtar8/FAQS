
let acr= document.querySelectorAll(".accord-btn");
const javab =document.getElementById('javab');
const javab1 =document.getElementById('java');
const javab2 =document.getElementById('jav');
const javab3 =document.getElementById('j');



for (i=0; i<acr.length; i++) {
  acr[i].addEventListener('click', function () {
    this.classList.toggle('active')
    let javabsoalaval = this.nextElementsibling;
    let iconplus = this.querySelector('.icon-plus');
    let iconminus = this.querySelector('.icon-minus'); 

    if ( javabsoalaval == 'none' ){
     //javabsoalaval.style.maxHeight=null
     iconminus.style.display =  'none';
       iconplus.style.display =  'block';
      
      javab.style.display =  'none';
      javab1.style.display="none" 
      javab2.style.display="none" 
      javab3.style.display="none" 
    }else{
      
      iconminus.style.display =  'block'; 
      iconplus.style.display =  'none';
      

      javab.style.display="block" 
      javab1.style.display="block" 
      javab2.style.display="block" 
      javab3.style.display="block" 
     

    }
  })
 
  
}
 

