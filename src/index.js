// import _ from 'lodash';
// import './style.css';
import { render, add, remove } from './modules/functions.js';
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
  const deleteTaskBtnArray = Array.from(deleteTaskBtnList);
  deleteTaskBtnList.forEach((deleteTaskBtn, index) => {
    deleteTaskBtn.addEventListener('click', () => {
      remove(index, tasksContainerArray);
    });
  });
};

// RENDER WHEN THE PAGE LOADS /////////////////////////////////////////////////////////////////////
render(tasksContainerArray);