const displayAccountItem = document.querySelector("#viewAccount")

displayAccountItem.addEventListener("click", async(e) => {
    e.preventDefault()

    const token = localStorage.getItem("token")

    const url = "http://localhost:3000/users/me"
    //const url = 'https://https://mikayla-kzin-app.herokuapp.com/users/me'

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


const displayAccountItem = document.querySelector("#deleteAccount")

displayAccountItem.addEventListener("click", async(e) => {
    e.preventDefault()

    const token = localStorage.getItem("token")

    const url = "http://localhost:3000/users/me"
    //const url = 'https://https://mikayla-kzin-app.herokuapp.com/users/me'
    console.log('before delete')

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
            localStorage.clear(data);
            location.href = 'http:\\localhost:3000/login';
        }
    } else {
        console.log("HTTP-Error: " + response.status)
    }
})

const displayAccountItem = document.querySelector("#logoutAccount")

displayAccountItem.addEventListener("click", async(e) => {
    e.preventDefault()

    const token = localStorage.getItem("token")

    const url = "http://localhost:3000/users/me"
    //const url = 'https://https://mikayla-kzin-app.herokuapp.com/users/me'

    const options = {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    let response = await fetch(url, options)

    if (response.ok) {
        if (response.status === 200) {
            localStprage.remove(token)
            location.href = 'http:\\localhost:3000/login';
        }
    } else {
        console.log("HTTP-Error: " + response.status)
    }
})