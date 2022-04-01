const displayAccountItem = document.querySelector("#viewAccount")
const deleteAccount = document.querySelector("#deleteAccount")
const logoutAccount = document.querySelector("#logoutAccount")
const viewTasks = document.querySelector("#viewTasks")   //just added for viewing tasks
const modifyAccountModalSaveButton = document.querySelector("#modifyAccountModalSaveButton")
const modifyTaskModalSaveButton = document.querySelector("modifyTaskModalSaveButton")


viewTasks.addEventListener("click", async (e) => {
    e.preventDefault()
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
            // if ('completed' != 'true'){
            const data = await response.json()

            const contentArea = document.querySelector("#taskArea")

            contentArea.innerHTML = `Title: ${data.title} Completed: ${data.completed}`
//}
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

    const url = "http://localhost:3000/users/me"

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


modifyTaskModalSaveButton.addEventListener("click", async (e) => {
    e.preventDefault()

    const token = localStorage.getItem("token")

    const url = "http://localhost:3000/users/me"

    const titleInput = document.querySelector("#titleInput")
    const completedInput = document.querySelector("#CompletedInput")
    const title = titleInput.value
    const completed = completedInput.value
    const requestData = { ...title && { title }, ...completed && { completed } }

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
        const contentArea = document.querySelector("#task area")
        contentArea.innerHTML = `Saved successful.`
    } else {
        console.log("HTTP-Error: " + response.status)
    }

    const modal = document.querySelector("#modifyTaskModal")
    bootstrap.Modal.getInstance(modal).hide()

    const form = document.querySelector("#modifyTaskForm").reset()
})