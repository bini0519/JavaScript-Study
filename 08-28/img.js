const toDoForm = document.querySelector(".img_url"),
    url = toDoForm.querySelector("input");

function showurl(url){
    location.href = url;
}

 function addImage(){   
    const li = document.createElement("li");
    const Btn = document.createElement("button");
    const span = document.createElement("span");

    Btn.addEventListener("click", showurl);
    li.appendChild(span);
    li.appendChild(Btn);
 }

 
 function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function init(){
};
init();
