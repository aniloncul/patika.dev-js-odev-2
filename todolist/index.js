

let btnDOM = document.querySelector('#liveToastBtn');
let listDOM = document.querySelector('#list');
let taskDOM = document.querySelector('#task');
let listLength = document.getElementsByTagName('li');


function remove(){
    this.parentElement.remove();
}
function check(){
    this.classList.toggle("checked");
}

btnDOM.addEventListener('click', newElement)


function newElement(){

    
    if(taskDOM.value.trim() == ""){
        $(".error").toast("show");
    } else {
        $(".success").toast("show");
        let liDOM = document.createElement("li");
        listDOM.appendChild(liDOM);
        liDOM.innerHTML = taskDOM.value;
        
    }

    for (let i = 0; i < listLength.length; i++) {
        let closeBtn = document.createElement("span");
        closeBtn.textContent = '\u00D7';
        closeBtn.classList.add("close");
        closeBtn.onclick = remove;
        listLength[i].append(closeBtn);
        listLength[i].onclick = check;
       
    }

   
      
}
