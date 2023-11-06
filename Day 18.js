const taskContainer = document.querySelector(".task__container");
const globalStore = [];
console.log(taskContainer);

const generateNewCard = (taskData) =>
`<div class="col-sm-12 col-md-6 col-lg-4" ${taskData.id}>
    <div class="card">
      <div class="card-header d-flex justify-content-end gap-2">
        <button type="button" class="btn btn-outline-success"><i class="fas fa-pencil-alt"></i></button>
        <button type="button" class="btn btn-outline-danger"><i class="fas fa-trash-alt"></i></button>
      </div>
      <div class="card-body">
        <img src=${taskData.imageUrl} class="card-img-top" alt="card image">
        <h5 class="card-title fw-bold text-primary">${taskData.taskTitle}</h5>
        <p class="card-text">${taskData.taskDescription}</p>
        <a href="#" class="btn btn-primary fw-bolder">${taskData.taskType}</a>
      </div>
    </div>
</div>`;

const loadInitialCardData = () => {
//Local storage to get tasky card data
	const getCardData = localStorage.getItem("taskymanage");
//Convert to normal object
	const {cards} = JSON.parse(getCardData);
//loop over those array of task object to create HTML card, inject it to DOM
	cards.map((cardObject) => {
		taskContainer.insertAdjacentHTML("beforeend", generateNewCard(cardObject));
		//Update our globalStore
		globalStore.push(cardObject);
	}
 )
};

const saveChanges = () => {
  const taskData = {
    id: `${Date.now()}`,
    imageUrl: document.getElementById("imageurl").value,
    taskTitle: document.getElementById("tasktitle").value,
    taskType: document.getElementById("tasktype").value,
    taskDescription: document.getElementById("taskdescription").value
  };
  taskContainer.insertAdjacentHTML("beforeend", generateNewCard(taskData));
  globalStore.push(taskData);
  localStorage.setItem("taskymanage", JSON.stringify({cards: globalStore}));
};
