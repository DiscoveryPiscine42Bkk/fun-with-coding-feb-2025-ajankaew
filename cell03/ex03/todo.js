window.onload = function() {
    document.getElementById('td_list').innerHTML = Load();
}

function createList() {
    let newtext = prompt("Enter new task");
    if (newtext != "") {
        makeTask(newtext);
        Save();
    }
}

function makeTask(nt) {
    let child = document.createElement('div');
    child.id = "list";
    child.setAttribute("onclick", "deleteList(this)");
    child.textContent = nt;
    document.getElementById('td_list').insertBefore(child, document.getElementById('td_list').childNodes[0]);
}

function deleteList(ob) {
    if (confirm("Confirm removing task")) {
        ob.remove();
        Save();
    }
}

function Save() {
    const tasks = document.getElementById('td_list').innerHTML;
    localStorage.setItem('taskList', tasks);
}

function Load() {
    return localStorage.getItem('taskList') || "";
}