document.querySelector(".notify-section").getElementsByClassName.display = "none";

document.querySelector(".generate-btm").addEventListener("click", generatePin);

function generatePin(){
   document.querySelector("form-control").value = Math.ceil(Math.random()*(9999-1000 + 1))+1000 ;

   document.querySelector(".form-control").style.color = "white";

}

function inputValueTaker(x){
      const inputAmount = document.querySelector(".inputValueShower")
      inputAmount.value = inputAmount.value + x
      document.querySelector(".inputValueShower").style.color = "white";
      document.querySelector(".inputValueShower").style.textAlign ="right";

   }

   function submitAction(){
      const assignValue = document.querySelector(".inputValueShower").value;
      const generateValue = document.querySelector(".generatedValue").value;


    if (assignValue == generatedValue) {
       document.querySelector(".notify-section").style.display = "block";
       document.querySelector(".wrong").style.display = "none";
     }
     else {
       document.querySelector(".notify-section").style.display = "block";
       document.querySelector(".right").style.display = "none";


     } 


   }
   document.querySelector(".inputValueShower").value = '';
   document.querySelector(".action-left").innerText = 1+ 'try left'


function  removalFromLast(){
    const currentValue = document.querySelector(".inputValueShower").value;
    const newCurrentValue = currentValue.substring(0, currentValue.length-1)
    document.querySelector(".inputValueShower").value = newCurrentValue;


}
function clearAll(){
    document.querySelector(".inputValueShower").value = null;

}





