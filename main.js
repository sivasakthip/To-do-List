var area = document.querySelector("input");
var btn = document.getElementById('btn');
var btn2 = document.getElementById('btn2');
var order = document.querySelector(".order");

btn.addEventListener("click", () => {
    if (area.value.trim() === '') {
        alert("Enter your value please");
        return false;
    } else {
        var listItem = document.createElement('li');
        listItem.innerHTML = `${area.value}&nbsp; &nbsp;<button onclick="removeTask(event)">
        Remove</button><button onclick="editTask(event)">Edit</button>`;
        order.appendChild(listItem);
        area.value = "";
        area.focus();
    }
});

function editTask(e) {
    var task = e.target.parentElement.firstChild;
    var newValue = prompt("Edit task:", task.textContent.trim());
    if (newValue !== null && newValue !== '') {
        task.textContent = newValue;
    }
}

function removeTask(e) {
    e.target.parentElement.remove();
}

btn2.onclick = function () {
    order.innerHTML = '';
}