function calculate(){
    let num1 =parseFloat(document.querySelector("#num1").value);
    let num2 = parseFloat(document.querySelector("#num2").value);
    let operation = document.querySelector("#option").value;  
    let res=0;
    // let Res_container = document.querySelector("#result").innerText; 
    
    function Error(){
        let para=document.createElement("p");
        para.innerText="number2 can't zero";
        para.style.color="red";
    
        let num2err=document.querySelector(".secondNumber");
        num2err.append(para);
        res="";
    
    }
    
    
    
    switch(operation){
        case "+":
            res=num1+num2;
            break;
        case "-":
            res=num1-num2;
            break;
        case "*":
            res=num1*num2;
            break;
        case "/":
            (num2!==0)? res=parseFloat(num1/num2).toFixed(2) :Error();
            break;
        case "%":
            (num2!==0)? res=parseFloat(num1%num2).toFixed(2) :Error();
            break;
        default:
            res="choose the currect option";
    }
    document.querySelector("#result").innerText =res;

}


//document.location.reload();
 
   