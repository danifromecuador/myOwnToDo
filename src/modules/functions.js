import { deleteBtnListener, editTaskListener } from "../index.js";

export const render = (tasksContainerArray) => {  
  const tasksContainer = document.querySelector('.tasksContainer');
  tasksContainer.innerHTML = "";
  for (let i = 0; i < tasksContainerArray.length; i++) {
    let html = `
      <li class="task">
        <input type="checkbox" name="" class="checkBox">
        <input type="text" name="" class="taskDescription" value=${tasksContainerArray[i].description}>
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
  editTaskListener();
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

export const edit = (index, tasksContainerArray, editTaskList) => {
  tasksContainerArray[index].description = editTaskList[index].value;
  localStorage.setItem('tasksContainerArray', JSON.stringify(tasksContainerArray));
  // I don't want to render because if I have > 1 tasks editing,
  // when i render,  all the save changes buttons dissapear, not only the clicked one
};