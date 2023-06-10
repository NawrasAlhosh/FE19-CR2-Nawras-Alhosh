// Array of Objects
let tasks = [{
    taskName: "shopping",
    image: "photos/shopping.jpg",
    description: "Shop for weekly groceries at Billa and Hofer.",
    importance: 0,
    deadline: "2023.06.15"
}, {
    taskName: "Acro-yoga",
    image: "photos/acroyoga.jpeg",
    description: "going to Yogaclass to keep the progress.",
    importance: 0,
    deadline: "2023.06.12"
}, {
    taskName: "Cycling",
    image: "photos/cycling.jpeg",
    description: "cycling some mountains and train for the next race.",
    importance: 0,
    deadline: "2023.06.20"
}, {
    taskName: "Dancing class",
    image: "photos/dancing class.jpeg",
    description: "go shake it a little bit.",
    importance: 0,
    deadline: "2023.06.10"
}, {
    taskName: "fixing the car",
    image: "photos/fixing the car.jpeg",
    description: "fixing the car ASAP as we need it this weekend for travelling to the seaside.",
    importance: 0,
    deadline: "2023.06.14"
}, {
    taskName: "watering the plants",
    image: "photos/watering the plants.jpeg",
    description: "watering our plants before going on vac.",
    importance: 0,
    deadline: "2023.06.13"
}, {
    taskName: "hiking with doggo",
    image: "photos/hiking with doggo.jpeg",
    description: "go for a walk with the dogs to play around and spend some quality time.",
    importance: 0,
    deadline: "2023.06.15"
}, {
    taskName: "Learning",
    image: "photos/learning.jpeg",
    description: "learning and practicing some JS and SCC.",
    importance: 0,
    deadline: "2023.06.12"
}, {
    taskName: "meeting family",
    image: "photos/meeting family.jpeg",
    description: "going with family to visit uncle Salim.",
    importance: 0,
    deadline: "2023.06.20"
}, ];

function updateImportanceColor(btn, importance) {
    if (importance >= 0 && importance <= 1) {
        btn.classList.remove("btn-primary", "btn-danger");
        btn.classList.add("btn-success");
    } else if (importance >= 2 && importance <= 3) {
        btn.classList.remove("btn-success", "btn-danger");
        btn.classList.add("btn-warning");
    } else if (importance >= 4 && importance <= 5) {
        btn.classList.remove("btn-success", "btn-warning");
        btn.classList.add("btn-danger");
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    document.getElementById("results").innerHTML = "";
    displayTasks();
}

function markTaskAsDone(index) {
    tasks[index].done = true;
    updateImportanceColor(btns[index], tasks[index].importance);
    btns[index].disabled = true;
}

function increaseImportance(index) {
    if (tasks[index].importance < 5) {
        tasks[index].importance++;
        updateImportanceColor(btns[index], tasks[index].importance);
        btns[index].innerText = "priority level: " + tasks[index].importance;
    }
}
// For Loop 

function displayTasks() {
    document.getElementById("results").innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i];
        document.getElementById("results").innerHTML += `
      <div class="col-lg-4 col-md-6 col-sm-12">
        <div class="card" style="width: 18rem;">
          <img src="${task.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <hr>
            <h5 class="card-title">${task.taskName}</h5>
            <hr>
            <p>${task.description}</p>
            <hr>
            <p>Deadline: ${task.deadline}</p>
            <a class="btn btn-primary myBtn">priority level: ${task.importance}</a>
            <div class="d-flex justify-content-between mt-2">
              <button class="btn btn-danger" onclick="deleteTask(${i})">Delete</button>
              <button class="btn btn-success" onclick="markTaskAsDone(${i})">Done</button>
            </div>
          </div>
        </div>
      </div>
    `;
    }
}

function sortTasksByImportance() {
    tasks.sort((a, b) => a.importance - b.importance);
    displayTasks();
}

document.getElementById("sortButton").addEventListener("click", sortTasksByImportance);

displayTasks();

let btns = document.getElementsByClassName("myBtn");

Array.from(btns).forEach((btn, i) => {
    btn.addEventListener("click", function() {
        increaseImportance(i);
    });
    updateImportanceColor(btn, tasks[i].importance);
});