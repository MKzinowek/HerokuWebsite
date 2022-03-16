const displayAccountItem = document.querySelector("#displayAccountItem")
const deleteAccount= document.querySelector("#deleteAccount")
const logoutAccount = document.querySelector("#logoutAccount")
const modifyAccountModalSaveButton = document.querySelector("#modifyAccountModalSaveButton")

displayAccountItem.addEventListener("click", async(e) => {
    e.preventDefault()

    const token = localStorage.getItem("token")

    const url = "http://localhost:3001/users/me"
    //const url = 'https://rachel-web-api-app.herokuapp.com/users/me'

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

deleteAccount.addEventListener("click", async(e) => {
    e.preventDefault()

    const token = localStorage.getItem("token")

    const url = "http://localhost:3001/users/me"
    //const url = 'https://rachel-web-api-app.herokuapp.com/users/me'

    const options = {
        method: "DEL",
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

logoutAccount.addEventListener("click", async(e) => {
    e.preventDefault()
    const app = express()
    const token = localStorage.getItem("token")

    const url = "http://localhost:3001/users/me"
    //const url = 'https://rachel-web-api-app.herokuapp.com/users/me'

    const options = {
        method: "POST",
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

modifyAccountModalSaveButton.addEventListener("click", async(e) => {
    e.preventDefault()

    const token = localStorage.getItem("token")

    const url = "http://localhost:3000/users/me"
        //const url = 'https://n0code-web-api-4.herokuapp.com/users/me'

    const nameInput = document.querySelector("#nameInput")
    const passwordInput = document.querySelector("#passwordInput")
    const name = nameInput.value
    const password = passwordInput.value
    const requestData = {...name && { name }, ...password && { password } }
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