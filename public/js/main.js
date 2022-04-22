const displayAccountItem = document.querySelector("#viewAccount")
const deleteAccount = document.querySelector("#deleteAccount")
const logoutAccount = document.querySelector("#logoutAccount")
const viewTasks = document.querySelector("#viewTasks")
const modifyAccountModalSaveButton = document.querySelector("#modifyAccountModalSaveButton")
const modifyTaskModalSaveButton = document.querySelector("#modifyTaskModalSaveButton")
const modifyTaskModalDeleteButton = document.querySelector("#modifyTaskModalDeleteButton")
const addTaskModalSaveButton = document.querySelector('#addTaskModalSaveButton')


let skip = 0

console.log(addTaskModalSaveButton)
addTaskModalSaveButton.addEventListener("click", async (e) => {
    e.preventDefault()

    const token = localStorage.getItem("token")
//const url = "http://localhost:2008/tasks"
const url = "https://https://mikayla-kzin-web-page.herokuapp.com/tasks"
//const url = 'https://mikayla-app-api.herokuapp.com/tasks'



    const titleInput = document.querySelector("#titleInputAdd")
    const descriptionInput = document.querySelector("#completedDescriptionAdd")
    const completedInput = document.querySelector("#completedInputAdd")

 //   console.log(titleInput.value)
 //   console.log(completedInput.value)
 //   console.log(descriptionInput.value)

    const data = {
        "title": titleInput.value,
        "completed": (completedInput.value === "true") ? "true" : "false"
    }
    if (descriptionInput.value != undefined) {
        data.description = descriptionInput.value
    }

    const options = {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }
    let response = await fetch(url, options)

    if (response.status == 201) {
        const modal = document.querySelector("#addTaskModal")
        bootstrap.Modal.getInstance(modal).hide()
        const form = document.querySelector("#addTaskForm").reset()

    } else {
        console.log("Error: " + response.status)
    }
})

console.log(viewTasks)
viewTasks.addEventListener("click", async (e) => {
    e.preventDefault()
    const token = localStorage.getItem("token")
    console.log(viewTasks)


 //   const url = "http://localhost:2008/tasks?limit=1"
    const url = "https://https://mikayla-kzin-web-page.herokuapp.com/tasks?limit=1"
 //   const url = 'https://mikayla-app-api.herokuapp.com/tasks?limit=1'



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
            if (data.length > 0) {
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

 //   const url = "http://localhost:2008/users/me"
 const url = "https://mikayla-kzin-web-page.herokuapp.com/users/me"
 //const url = 'https://mikayla-app-api.herokuapp.com/users/me'



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

 //   const url = "http://localhost:2008/users/me"
 const url = "https://mikayla-kzin-web-page.herokuapp.com/users/me"
// const url = 'https://mikayla-app-api.herokuapp.com/users/me'



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

  //  const url = "http://localhost:2008/users/logout"
 const url = "https://mikayla-kzin-web-page.herokuapp.com/users/logout"
 // const url = 'https://mikayla-app-api.herokuapp.com/users/logout'



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

 //   const url = "http://localhost:2008/users/me"
 //const url = 'https://mikayla-app-api.herokuapp.com/users/me'

    const url = "https://https://mikayla-kzin-web-page.herokuapp.com/users/me"


    const nameInput = document.querySelector("#nameInput")
    const passwordInput = document.querySelector("#passwordInput")
    const avatarInput = document.querySelector('#AvatarInput')
    const name = nameInput.value
    const password = passwordInput.value
    const avatar = avatarInput.value
    const requestData = { ...name && { name }, ...password && { password }, ...avatar && {avatar} }
    console.log(requestData)

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

 //   const url = "http://localhost:2008/tasks"
 const url = 'https://mikayla-kzin-web-page.herokuapp.com/tasks'
 //const url = 'https://mikayla-app-api.herokuapp.com/tasks'


    const idInput = document.querySelector('#idInput')
    const titleInput = document.querySelector("#titleInput")
    const completedInput = document.querySelector("#completedInput")
    const descriptionInput = document.querySelector('#description')
    const id = idInput.value
    const title = titleInput.value
    const completed = completedInput.value
    const description = descriptionInput.value

    const task = {
        "_id": id,
        "title": title,
        "completed": completed,
        "description": description
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

async function uploadAvatar() {
    const token = localStorage.getItem("token")

    const url = `${API_URL}/users/me/avatar`
    console.log(url)
    
    const input = document.querySelector("#avatarInput")

    const formData = new FormData();
    formData.append('avatar', input.files[0]);

    const options = {
        method: "POST",
        body: formData,
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    let response = await fetch(url, options)

    if (response.status === 200) {
        console.log("upload successful")
        //loadAvatar()
    } else {
        console.log("Error uploading avatar: " + response.status)
    }
}

async function uploadAvatar() {
    const token = localStorage.getItem("token")

    const url = `${API_URL}/users/me/avatar`
    console.log(url)
    
    const input = document.querySelector("#avatarInput")

    const formData = new FormData();
    formData.append('avatar', input.files[0]);

    const options = {
        method: "POST",
        body: formData,
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    let response = await fetch(url, options)

    if (response.status === 200) {
        console.log("upload successful")
        //loadAvatar()
    } else {
        console.log("Error uploading avatar: " + response.status)
    }
}