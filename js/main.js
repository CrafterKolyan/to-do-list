function saveToDo() {
    let status = document.getElementById("status")
    status.innerText = "Saving..."
    let todo = document.getElementById("todo")
    let value = encodeURIComponent(todo.value)
    document.cookie = "todo=" + value + "; expires=Fri, 31 Dec 9999 23:59:59 GMT"
    status.innerText = "Saved!"
}

function initialize() {
    let todo = document.getElementById("todo")
    let cookie = document.cookie.split(";")
    for (let i = 0; i < cookie.length; ++i) {
        if (cookie[i].split("=")[0] === "todo") {
            todo.value = decodeURIComponent(cookie[i].split("=")[1])
        }
    }
    window.initializeInterval = window.setInterval(initialize, 10)
}

window.onload = initialize
