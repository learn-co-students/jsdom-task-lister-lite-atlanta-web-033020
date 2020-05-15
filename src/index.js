document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.addEventListener("submit", (e) => {
    e.preventDefault()
    let desc = document.getElementById("new-task-description").value
    let task = document.getElementById("tasks")
    let form = document.getElementById("create-task-form")

    let li = document.createElement('li')
    li.innerText = desc
    task.appendChild(li)
    form.reset()
  })

});