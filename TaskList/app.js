const input = document.getElementsByClassName("new-task-box")[0];
const taskContainer = document.querySelector(".task-container");

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const theDate = new Date();
const currentMonth = month[theDate.getMonth()];
const currentDate = theDate.getDate();
const currentYear = theDate.getFullYear();
const currentWeekDay = weekday[theDate.getDay()];
const today = `${currentWeekDay}: ${currentMonth} ${currentDate}, ${currentYear}`;


const todaysDate = document.querySelector(".date");

todaysDate.innerText = today;


const addNewTask = () => {
  
  const newTaskText= input.value;

if(newTaskText.length >= 1) {
  const newTask = document.createElement('p');

  const taskBox = document.createElement('div');
  taskBox.classList.add('task-box');
  
  const checkmarkBox = document.createElement('input');
  checkmarkBox.classList.add("checkbox");
  checkmarkBox.setAttribute("type", "checkbox");

  
  const newTaskAndDel = document.createElement('div');
    newTaskAndDel.classList.add("task-and-delete");
  
  newTask.classList.add("task");
  newTask.innerText = newTaskText;
   
  const span = document.createElement('span');

  
  const deleteMark = document.createElement('img');
  deleteMark.classList.add("delete-mark");
  deleteMark.setAttribute("src", "https://cdn-icons-png.flaticon.com/512/748/748122.png");
  deleteMark.setAttribute("alt", "delete");
  
  span.appendChild(deleteMark);
  newTaskAndDel.append(newTask, span);
  taskBox.append(checkmarkBox, newTaskAndDel);
  taskContainer.appendChild(taskBox);
  
  var complete = false;
 
  
  
  taskBox.addEventListener('change', function(event) {
    complete = true;
    
    if (complete == false) {
    newTask.classList.add('incomplete');
  } else {
      newTask.classList.add('complete');

  }
    
  if (event.target.classList.contains('checkbox') && newTask.classList.contains('complete')) {
   
   newTask.classList.toggle('crossed-out'); 
  }
    else {
      complete = false;
      
    }
    
}
                                 );
  taskBox.addEventListener('click', function(event) {
    
   if (event.target.classList.contains('delete-mark')) {
   taskBox.remove();
     console.log('Removed!');
   }

    
}
                                 );

}
};
 



input.addEventListener("keyup", function(event) {

  if (event.keyCode === 13) {
    addNewTask();
    input.value = "";
  }
  
});
