document.getElementById("myButton").onclick=function(){
    event.preventDefault()
    var myName=document.getElementById("myText").value
    console.log(myName)
    myAge=document.getElementById("age").value
    console.log(myAge)
    myNumber=document.getElementById("mobileno").value
    console.log(myNumber)
    mydate=document.getElementById("date").value
    console.log(mydate)
}