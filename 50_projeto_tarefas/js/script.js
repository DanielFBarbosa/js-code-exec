//fnção que adiciona tarefa
function addTask(){

    //titulo da tarefa
    const taskTitle = document.querySelector("#task-title").value;
   
    if(taskTitle){

        //clonar template
        const template = document.querySelector(".template");
        const newTask = template.cloneNode(true);
    
        //adicionar título
        newTask.querySelector(".task-title").textContent= taskTitle;

    }
}


//evento de adicionar tarefa
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function(e){

e.preventDefault();

addTask();

})