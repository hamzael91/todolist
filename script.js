const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function aaddTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value= "";
}

listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "li"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false);

function saveData(){
    localStorage.setItem("data", list-container.innerHTML);
}
function showdata(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showdata();












































