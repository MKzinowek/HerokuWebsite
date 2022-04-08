const displayAccountItem = document.querySelector("#viewAccount")
const deleteAccount = document.querySelector("#deleteAccount")
const logoutAccount = document.querySelector("#logoutAccount")
const viewTasks = document.querySelector("#viewTasks")
const addTask = document.querySelector('#addTasks')
const modifyAccountModalSaveButton = document.querySelector("#modifyAccountModalSaveButton")
const modifyTaskModalSaveButton = document.querySelector("#modifyTaskModalSaveButton")
const modifyTaskModalDeleteButton = document.querySelector("#modifyTaskModalDeleteButton")



viewTasks.addEventListener("click", async (e) => {
    e.preventDefault()
    const token = localStorage.getItem("token")

    const url = "http://localhost:2008/tasks?limit=1"

    const options = {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    let response = await fetch(url, options)

    if (response.ok) {
        if (response.status === 200) {
            // if ('completed' != 'true'){
            const data = await response.json()

            const contentArea = document.querySelector("#taskArea")

            console.log(contentArea)

            console.log(data)
            if (data.length > 0){
            contentArea.innerHTML = `Title: ${data[0].title} Completed: ${data[0].completed}`
            }

        }
    } else {
        console.log("HTTP-Error: " + response.status)
    }

})

displayAccountItem.addEventListener("click", async (e) => {
    e.preventDefault()
    console.log('here')
    const token = localStorage.getItem("token")

    const url = "http://localhost:2008/users/me"

    const options = {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    let response = await fetch(url, options)

    if (response.ok) {
        if (response.status === 200) {

            const data = await response.json()

            const contentArea = document.querySelector("#contentArea")

            contentArea.innerHTML = `Name: ${data.name} <br>Email: ${data.email}`

        }
    } else {
        console.log("HTTP-Error: " + response.status)
    }

})

deleteAccount.addEventListener("click", async (e) => {
    e.preventDefault()

    const token = localStorage.getItem("token")

    const url = "http://localhost:2008/users/me"

    const options = {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    let response = await fetch(url, options)

    if (response.ok) {
        if (response.status === 200) {
            const data = await response.json()

            const contentArea = document.querySelector("#contentArea")
            contentArea.innerHTML = `Name: ${data.name} <br>Email: ${data.email}`
            location.href = "/templates/index.hbs"

        }
    } else {
        console.log("HTTP-Error: " + response.status)
    }
})

logoutAccount.addEventListener("click", async (e) => {
    e.preventDefault()

    const token = localStorage.getItem("token")

    const url = "http://localhost:2008/users/logout"

    const options = {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    let response = await fetch(url, options)

    if (response.ok) {
        if (response.status === 200) {
            //          location.href="http://localhost:2008/users/me"
            location.href = "/templates/index.hbs"

        }
    } else {
        console.log("HTTP-Error: " + response.status)
    }
})

modifyAccountModalSaveButton.addEventListener("click", async (e) => {
    e.preventDefault()

    const token = localStorage.getItem("token")

    const url = "http://localhost:2008/users/me"

    const nameInput = document.querySelector("#nameInput")
    const passwordInput = document.querySelector("#passwordInput")
    const name = nameInput.value
    const password = passwordInput.value
    const requestData = { ...name && { name }, ...password && { password } }
    //console.log(requestData)

    const options = {
        method: "PATCH",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
    }

    let response = await fetch(url, options)

    if (response.status === 200) {
        const contentArea = document.querySelector("#contentArea")
        contentArea.innerHTML = `Saved successful.`
    } else {
        console.log("HTTP-Error: " + response.status)
    }

    const modal = document.querySelector("#modifyAccountModal")
    bootstrap.Modal.getInstance(modal).hide()

    const form = document.querySelector("#modifyAccountForm").reset()
})

//get by id
modifyTaskModalSaveButton.addEventListener("click", async (e) => {
    e.preventDefault()

    const token = localStorage.getItem("token")

    const url = "http://localhost:2008/tasks"

    const idInput = document.querySelector('#idInput')
    const titleInput = document.querySelector("#titleInput")
    const completedInput = document.querySelector("#completedInput")
    const descriptionInput = document.querySelector('#description')
    const id = idInput.value
    const title = titleInput.value
    const completed = completedInput.value
    const description = descriptionInput.value

    const task = {
        "_id" : id,
        "title" : title,
        "completed" : completed,
        "description" : description
    }

    const options = {
        method: "PATCH",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
    }
console.log(task)
    let response = await fetch(url, options)

    if (response.status === 200) {
        console.log(response)
        const taskArea = document.querySelector("#taskArea")
        taskArea.innerHTML = `Saved successful.`
    } else {
        console.log("HTTP-Error: " + response.status)
        console.log(e)
    }

    const modal = document.querySelector("#modifyTaskModal")
    bootstrap.Modal.getInstance(modal).hide()

    const form = document.querySelector("#modifyTaskForm").reset()
})