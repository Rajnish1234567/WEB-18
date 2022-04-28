// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks

var form=document.querySelector("form");
form.addEventListener("submit",myfunction)
function myfunction(){    
    event.preventDefault();
var data={
        avtar:form.image.value,
        name:form.name.value,
        batch:form.batch.value,
        dsa:form.dsa.value,
        cs:form.cs.value,
        coding:form.coding.value
    };
    display(data);
}
function display(data){
    var tr=document.createElement("tr");
    var td1=document.createElement("td");
    var td2=document.createElement("td");
    td2.textContent=data.name;
    var td3=document.createElement("td");
    td3.textContent=data.batch;
    var td4=document.createElement("td");
    td4.textContent=data.dsa;
    var td5=document.createElement("td");
    td5.textContent=data.cs;
    var td6=document.createElement("td");
    td6.textContent=data.coding;
    var td7=document.createElement("td");
    var percent=(((Number(data.cs)+Number(data.coding)+Number(data.dsa))/30)*100)
    td7.innerText=percent;
    var td8=document.createElement("td");
    if(percent>50){td8.innerText="Regular"}
    else{td8.innerText="Async"}
    var td9=document.createElement("td");
    td9.innerText="Delete";
    td9.addEventListener("click",deleteRow);
    tr.append(td1,td2,td3,td4,td5,td6,td7,td8,td9)
    document.querySelector("tbody").append(tr);
}
function deleteRow ()
{
    event.target.parentNode.innerHTML=" ";
}