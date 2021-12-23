// Add your code here


function submitData (name, email) {
    const configurationObject = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({name, email})
    }
    return fetch('http://localhost:3000/users', configurationObject)
    .then(res => res.json())
    .then(data => addUser(data.id))
    .catch(error => {
        document.body.innerHTML = "Unauthorized Access"
    })

};


function addUser(user) {
    document.body.innerHTML = user;
}