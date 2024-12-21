let entities = [];
let currentId = 1;

async function Edit_Delete() {
    try {
        const response = await fetch('/json/edit.json');
        if (!response.ok) {
            throw new Error("Failed");
        }
        const data = await response.json();
        entities = data;
        Table();
    } catch (error) {
        console.error(error);
        alert("Error 404");
    }
}

function Table() {
    const tableBody = document.querySelector("#Table-Edit tbody");
    tableBody.innerHTML = "";

    entities.forEach((entity) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${entity.name}</td>
            <td>${entity.email}</td>
            <td>
                <button onclick="edit(${entity.id})">Edit</button>
                <button onclick="delete_person(${entity.id})">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function edit(id) {
    const person = entities.find(e => e.id === id);
    const new_name = prompt("Edit name:", person.name);
    const new_email = prompt("Edit email:", person.email);

    if (new_name && new_email) {
        person.name = new_name;
        person.email = new_email;
        alert("Success");
        Table();
    } else {
        alert("Failed");
    }
}

function delete_person(id) {
    const index = entities.findIndex(e => e.id === id);

    if (index !== -1) {
        entities.splice(index, 1);
        alert("Success");
        Table();
    } else {
        alert("Failed");
    }
}

function add() {
    const new_name = document.getElementById('new_name').value;
    const new_email = document.getElementById('new_email').value;

    if (new_name, new_email) {
        const new_person = {
            id: currentId++,
            name: new_name,
            email: new_email
        };

        entities.push(new_person);
        Table();

        document.getElementById('new_name').value = "";
        document.getElementById('new_email').value = "";
        alert("Success");
    } else {
        alert("Error404");
    }
}

Edit_Delete();