// import _ from 'lodash';
// import './style.css';
import { render, add} from './modules/functions.js';
export let tasksContainerArray = JSON.parse(localStorage.getItem('tasksContainerArray')) || [];

// ADD ////////////////////////////////////////////////////////////////////////////////////////////
const addTaskBtn = document.querySelector('#addTaskBtn');
addTaskBtn.addEventListener('click', () => {
  let userTaskInput = document.querySelector('#userTaskInput').value;
  add(userTaskInput);
});

const userTaskInput = document.querySelector('#userTaskInput');
userTaskInput.addEventListener('keydown', (event) => {  
  let userTaskInput = document.querySelector('#userTaskInput').value;
  if (event.key === 'Enter') {
    add(userTaskInput);
  }
});

// RENDER WHEN THE PAGE LOADS /////////////////////////////////////////////////////////////////////
render(tasksContainerArray);
