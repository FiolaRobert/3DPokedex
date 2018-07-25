function updateLinks(){
    //>>
}
//create array of list of numbers: default=(0-10)
function arrayRange(num1=0,num2=10){
    //inclusive
    var array=[];
    if(num1<num2)
    {
        for(var i=num1;i<=num2;i++)
        {
            array.push(i);
        }
    }
    return array;
}
//combine strings of an(multiple) array(s)
function concatArray(array1=[]){
    if(array1==null)
        return null;
    var string="";
    for(var i=0;i<array1.length;i++){
        //string+=array1[i];
        if(arguments!=null)
            for(var j=0;j<arguments.length;j++)
                {
                    if(arguments[j][i]!=null){
                        string+=arguments[j][i];
                    }
                }
    }
    return string;
}
//random array of numbers: default=10*(1-10)
function randomArray(amount=10, num1=1, num2=10){
    try{
    var array=[];
    for(var i=0;i<amount;i++)
        {
            array.push(Math.floor(randNum(parseInt(num1),parseInt(num2))));
        }
    return array;
    
    }catch(e)
       { return null;}
}
//random number: default=(0-100)
function randNum(num1=0,num2=100){
    var num=(Math.random()*(num2-num1))+num1
    //log(num);
    return num;
}
//hide element with css class '.Hide'
function hide(e){
    e.classList.add("Hide");
}
//show element with css class '.Hide'
function show(e){
    e.classList.remove("Hide");
}
//console.log message (multiple arguments gives multiple lines)
function log(message){
    var msg=message;
    for (i = 1; i < arguments.length; i++) {
        msg+="\n"+arguments[i];
    }
    console.log(msg);
    return msg;
}
//popup with timeout (default 1000)
function message(msg, timeout=1000){
    var notification = new Notification("Message", {body: msg});
setTimeout(function() {notification.close()}, timeout);
}
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      } 
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
}