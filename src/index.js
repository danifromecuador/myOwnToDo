// import _ from 'lodash';
// import './style.css';
import { render, add, remove, edit, completed } from './modules/functions.js';
let tasksContainerArray = JSON.parse(localStorage.getItem('tasksContainerArray')) || [];

// ADD ////////////////////////////////////////////////////////////////////////////////////////////
const addTaskBtn = document.querySelector('#addTaskBtn');
addTaskBtn.addEventListener('click', () => {
  let userTaskInput = document.querySelector('#userTaskInput').value;
  add(userTaskInput, tasksContainerArray);
});

const userTaskInput = document.querySelector('#userTaskInput');
userTaskInput.addEventListener('keydown', (event) => {  
  let userTaskInput = document.querySelector('#userTaskInput').value;
  if (event.key === 'Enter') {
    add(userTaskInput, tasksContainerArray);
  }
});

// REMOVE /////////////////////////////////////////////////////////////////////////////////////////
export const deleteBtnListener = () => {
  const deleteTaskBtnList = document.querySelectorAll('.deleteTaskBtn');
  deleteTaskBtnList.forEach((deleteTaskBtn, index) => {
    deleteTaskBtn.addEventListener('click', () => {
      remove(index, tasksContainerArray);
    });
  });
};

// EDIT ///////////////////////////////////////////////////////////////////////////////////////////
export const editTaskListener = () => {
  const editTaskList = document.querySelectorAll('.taskDescription');
  const saveEditedTaskBtnList = document.querySelectorAll('.saveEditedTaskBtn');
  editTaskList.forEach((taskDescription, index) => {
    taskDescription.addEventListener('keydown', (event) => {
      saveEditedTaskBtnList[index].classList.remove('hide');
      // if(event.keyCode === 13) {        
      // saveEditedTaskBtnList[index].classList.add('hide');      
      // edit(index, tasksContainerArray, editTaskList);
      // }
      saveEditedTaskBtnList[index].addEventListener('click', () => {
        saveEditedTaskBtnList[index].classList.add('hide');
        edit(index, tasksContainerArray, editTaskList);
      });
    });
  });
};

// COMPLETED //////////////////////////////////////////////////////////////////////////////////////
export const checkBoxListener = () => {
  const checkBoxList = document.querySelectorAll('.checkBox');
  checkBoxList.forEach((checkBox, index) => {
    checkBox.addEventListener('click', () => {
      completed(index, tasksContainerArray, checkBoxList);
    });
  });
};

// RENDER WHEN THE PAGE LOADS /////////////////////////////////////////////////////////////////////
render(tasksContainerArray);