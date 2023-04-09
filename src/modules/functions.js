import { deleteBtnListener } from "../index.js";

export const render = (tasksContainerArray) => {  
  const tasksContainer = document.querySelector('.tasksContainer');
  tasksContainer.innerHTML = "";
  for (let i = 0; i < tasksContainerArray.length; i++) {
    let html = `
      <li class="task">
        <input type="checkbox" name="" class="checkBox">
        <span class="taskDescription">${tasksContainerArray[i].description}</span>
        <input type="button" value="save changes" class="saveEditedTaskBtn hide">
        <input type="button" value="delete" class="deleteTaskBtn">      
      </li>
      <hr>
    `;    
    tasksContainerArray[i].index = i+1;
    tasksContainer.innerHTML += html;
  }  
  localStorage.setItem('tasksContainerArray', JSON.stringify(tasksContainerArray));
  deleteBtnListener();
};

export const add = (userInput, tasksContainerArray) => {
  if (userInput)  { // if user input is not empty so do following: 
    let userTaskInput = document.querySelector('#userTaskInput');
    userTaskInput.value = '';
    tasksContainerArray.push(
      {
        completed: false,
        description: userInput,
        index: tasksContainerArray.length + 1
      }
    );
    localStorage.setItem('tasksContainerArray', JSON.stringify(tasksContainerArray));
    render(tasksContainerArray);
  }
};

export const remove = (index, tasksContainerArray) => {
  tasksContainerArray.splice(index, 1);
  localStorage.setItem('tasksContainerArray', JSON.stringify(tasksContainerArray));
  render(tasksContainerArray);
};