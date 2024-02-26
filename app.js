// Fetch data from the server and update the DOM

document.getElementById('getAll').addEventListener('click', getAllCats);
document.getElementById('getCat').addEventListener('click', getCat);
document.getElementById('insertCat').addEventListener('click', insertCat);
document.getElementById('updateCat').addEventListener('click', updateCat);
document.getElementById('deleteCat').addEventListener('click', deleteCat);

function getAllCats() {
    fetch('/cats')
        .then(response => response.json())
        .then(cats => {
            displayCats(cats);
        })
        .catch(error => console.error('Error fetching cats:', error));
}

function getCat() {
    const catNumber = prompt('Enter the cat number:');
    if (!catNumber) return;

    fetch(`/cats/${catNumber}`)
        .then(response => response.json())
        .then(cat => {
            displayCat(cat);
        })
        .catch(error => console.error(`Error fetching cat ${catNumber}:`, error));
}

function insertCat() {
    const newCat = {
        number: parseInt(prompt('Enter the cat number:')),
        name: prompt('Enter the cat name:'),
        breed: prompt('Enter the cat breed:'),
        length: parseInt(prompt('Enter the cat length:')),
        yearOfBirth: parseInt(prompt('Enter the cat year of birth:'))
    };

    fetch('/cats', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCat)
    })
    .then(() => {
        alert('Cat inserted successfully!');
    })
    .catch(error => console.error('Error inserting cat:', error));
}

function updateCat() {
    const catNumber = prompt('Enter the cat number to update:');
    if (!catNumber) return;

    const updatedCat = {
        name: prompt('Enter the updated name:'),
        breed: prompt('Enter the updated breed:'),
        length: parseInt(prompt('Enter the updated length:')),
        yearOfBirth: parseInt(prompt('Enter the updated year of birth:'))
    };

    fetch(`/cats/${catNumber}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedCat)
    })
    .then(() => {
        alert('Cat updated successfully!');
    })
    .catch(error => console.error(`Error updating cat ${catNumber}:`, error));
}

function deleteCat() {
    const catNumber = prompt('Enter the cat number to delete:');
    if (!catNumber) return;

    fetch(`/cats/${catNumber}`, {
        method: 'DELETE'
    })
    .then(() => {
        alert('Cat deleted successfully!');
    })
    .catch(error => console.error(`Error deleting cat ${catNumber}:`, error));
}

function displayCats(cats) {
    // Implement displaying all cats on the page
}

function displayCat(cat) {
    // Implement displaying a single cat on the page
}
