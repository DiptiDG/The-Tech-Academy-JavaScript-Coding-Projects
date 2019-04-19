function printReceipt(){
  
    var  sizeArray = document.getElementsByClassName('size');
    
   
   
    var sauce = document.getElementsByClassName("sauce");



    var sizeTotal=0;
    var subTotal = 0;
    var result = 0;
    //var text = "";
   
     for(var i =0; i < sizeArray.length;i++)
     {
        if (sizeArray[i].checked) {
            var sizeResult =sizeArray[i].value;
        }
     }

     
    if(sizeResult=="Personal Pizza")
  {
     sizeTotal = 6;
  }
  else if(sizeResult=="Medium Pizza")
  {
    sizeTotal = 10;
  }
  else if(sizeResult=="Large Pizza")
  {
     sizeTotal = 14;
  }
  else if(sizeResult=="Extra Large Pizza")
  {
      sizeTotal = 16;
  }
  subTotal = sizeTotal;
  console.log("Your order is : "+sizeResult);
  console.log("your total is "+sizeTotal);
  document.getElementById('title2').innerHTML = sizeResult 
  document.getElementById('pizzaPrice').innerHTML= "$" +sizeTotal;


 var total = meatResult() + cheeseResult() + veggieResult() + sauceResult()+ crustResult();
  subTotal = sizeTotal +  total;
  console.log("your total is: "+subTotal);
document.getElementById('totalPrice2').innerHTML = subTotal;
	
}
function meatResult(){

  var meatArray = document.getElementsByClassName('meats');
  var meatResult = "";
  var meatTotal= 0;
  var meatCount = 0;
  for(var j = 0; j< meatArray.length; j++ )
  {
   
      if(meatArray[j].checked)
      {
         meatResult = meatResult + "  ," +meatArray[j].value;
         meatCount++;
         console.log("meat Result is:" +meatArray[j].value);
  
      }
  }
  
  if(meatCount >1)
  {
      meatCount = meatCount -1;
     meatTotal = meatCount * 1;//$1 for extra veggie
     console.log("meat total is: " +meatTotal);
  }
  else
  {
  veggieTotal = 0;
  console.log("meat total is: " +meatTotal);
  }
  
  document.getElementById('showText1').innerHTML = meatResult 
  document.getElementById('meatPrice').innerHTML = "+" +"$" +meatTotal;
    
  return meatTotal;
  
  
  
  }

function veggieResult(){

var veggieArray = document.getElementsByClassName('veggies');
var veggieResult = "";
var veggieTotal= 0;
var veggieCount = 0;
for(var j = 0; j< veggieArray.length; j++ )
{
 
    if(veggieArray[j].checked)
    {
       var veggieResult= veggieResult + " ," +veggieArray[j].value;
       
       veggieCount++;
       console.log("veggie Result is:" +veggieArray[j].value);

    }
}

if(veggieCount >1)
{
    veggieCount = veggieCount -1;
   veggieTotal = veggieCount * 1;//$1 for extra veggie
   console.log("veggie total is: " +veggieTotal);
}
else
{
veggieTotal = 0;
console.log("veggie total is: " +veggieTotal);
}

document.getElementById('showText2').innerHTML = veggieResult  ;
document.getElementById('veggiePrice').innerHTML = "+" +"$" +veggieTotal;
  
return veggieTotal;



}






function cheeseResult(){

    var cheeseArray = document.getElementsByClassName('cheese');
    var cheeseTotal = 0;
   
  
    for(var j = 0; j<cheeseArray.length; j++ )
    {
    
        if(cheeseArray[j].checked)
        {
           var cheeseResult = cheeseArray[j].value;
           console.log("chees result is "+cheeseResult);
         
        }
    }
    
    if(cheeseResult === "Extra cheese")
    {
      cheeseTotal = cheeseTotal + 3;//$3 for extra cheese
      console.log("cheese total is:" +cheeseTotal);
    }
    else
    {
   cheeseTotal = 0;
   console.log("cheesetotal is :" +cheeseTotal);
    }
    document.getElementById('showText3').innerHTML = cheeseResult ;
    document.getElementById('cheesePrice').innerHTML= "+" +  "$" +cheeseTotal;
 return cheeseTotal;
}


function crustResult(){

var crustArray = document.getElementsByClassName('crust');
var crustTotal = 0;


for(var j = 0; j<crustArray.length; j++ )
{

    if(crustArray[j].checked)
    {
       var crustResult = crustArray[j].value;
       console.log("crust result is: "+crustResult);
     
    }
}

if(crustResult === "Cheese Stuffed Crust")
{
  crustTotal = crustTotal + 3;//$3 for cheese stuffed crust
  console.log("crust total is:" +crustTotal);
}
else
{
crustTotal = 0;
console.log("crustTotal is :" +crustTotal);
}
document.getElementById('showText4').innerHTML = crustResult;
document.getElementById('crustPrice').innerHTML= " + " + "$" +crustTotal;
return crustTotal;
}

function sauceResult(){
  var sauceArray = document.getElementsByClassName("sauce");
  for(var j = 0; j<sauceArray.length; j++ )
{

    if(sauceArray[j].checked)
    {
       var sauceResult = sauceArray[j].value;
       console.log("sauce result is: "+sauceResult);
     
    }
}

sauceTotal = 0;
document.getElementById('showText5').innerHTML = sauceResult ;
document.getElementById('saucePrice') .innerHTML= "+" +  "$" + "0";
return sauceTotal;
}


function Clear() {
  document.getElementById('cart').style.opacity=0;
		 };