// import _ from 'lodash';
// import './style.css';

let tasksContainerArray = [
  {
    completed: false,
    description: 'task 1',
    index: 1
  },
  {
    completed: false,
    description: 'task 2',
    index: 1
  },
  {
    completed: false,
    description: 'task 3',
    index: 1
  }
];

console.log(tasksContainerArray[1].description);

const render = () => {
  const tasksContainer = document.querySelector('.tasksContainer');
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
    tasksContainer.innerHTML += html;
  }
};

render();