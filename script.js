let display=document.getElementById('display');
let button_container=Array.from(document.getElementsByClassName('buttons'));

button_container.map( buttons =>{
      buttons.addEventListener('click',(e)=>{
        switch(e.target.innerText){
            case 'C':
                  display.innerText='';
                  break;
            case '←':
                if(display.innerText){
                    display.innerText=display.innerText.slice(0,-1);
                }
                  break;
            case '=':
                 try{
                     display.innerText=eval(display.innerText);
                 }
                 catch{
                     display.innerText='ERROR!';
                 }
                  break;

            default:
                display.innerText +=e.target.innerText;
        }
      });
});