let addTask = document.getElementById("add");
let buttonAdd = document.getElementById("submit");
let tasks = document.getElementsByClassName("tasks");



buttonAdd.addEventListener("click", ()=>{
    if(addTask.value== ""){
        alert("Please write task!")
    }else{
    let delTask = document.createElement("i");
    delTask.setAttribute("class", "fa fa-trash-can");

    let tik = document.createElement("input");
    tik.setAttribute("type", "checkbox");
    tik.setAttribute("class", "tiks");
    tik.setAttribute("id", "idtik");


    let  task= document.createElement("span");
    task.setAttribute("class", "unchecked");

    let taskDiv = document.createElement("div");
    taskDiv.setAttribute("class", "task--container");

    task.innerHTML = addTask.value;
    taskDiv.appendChild(delTask);
    taskDiv.appendChild(tik);
    taskDiv.appendChild(task);
    tasks[0].appendChild(taskDiv);
    addTask.value = "";
    
    let tikDown = document.querySelectorAll("input[type=checkbox]");
    let contClass = document.getElementsByClassName("task--container");

    console.log(tikDown);


    tik.addEventListener("click", ()=>{

        if(tik.checked){
            task.setAttribute("class", "checked");
        }else{ task.setAttribute("class","unchecked");}
    });


    let p = document.getElementById("paraf");
    p.innerText = `You have ${contClass.length} tasks.`;
    let html = document.getElementsByClassName("tiks");
    let completed = [];
    let notcompleted = [];

    tik.addEventListener("click", ()=>{
            if(tik.checked){
            task.setAttribute("class", "checked");
            }else{ task.setAttribute("class","unchecked");};

            [...html].forEach(e => {
                if(e.checked){
                    completed.push("1");
                    console.log(completed);
                }else{notcompleted.push("1");console.log(notcompleted);}
                p.innerText = `You have completed ${completed.length} of the ${contClass.length}, NOT completed ${notcompleted.length} yet...`;
                
            });
            
            if(completed.length == contClass.length){
                p.innerText = `You have completed all tasks...`;
            };
            completed =[];
            notcompleted= [];
    })
    



    delTask.addEventListener("click",()=>{
        tasks[0].removeChild(taskDiv);
        contClass.length --;
        p.innerText = `You have ${contClass.length} tasks.`;
        
    })

    
    
}})




let clear = document.getElementById("clear-all");

clear.addEventListener("click", ()=>{
    let warning = "Are you sure to delete them all!!!"
    if(confirm(warning))
        {tasks[0].innerHTML = "";}
})




////////   ENTER TUŞUNUN EVENT ATANAN YERE GEÇMESİ
addTask.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13)
        {buttonAdd.click();}
    
})


