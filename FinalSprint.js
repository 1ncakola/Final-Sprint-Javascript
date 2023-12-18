
fetch('data.json')
.then(response => response.json())
.then(data => {
    console.log('JSON data:', data);

data.records.forEach(record => {
   console.log('Record:', record);
});

// Three Functions
function displayRecord(record) {
    console.log('Record:', record);
}

function getDataDescription(data) {
    return "This is the Final Sprint for JavaScript";
}
function displayDataInHtml(data){
    const htmloutput = getDataDescription (data);
    const paragraph = document.createElement('p');
    paragraph.innerHTML = htmloutput; 
    document.body.appendChild(paragraph);
}

data.records.forEach(record => {
    displayRecord(record)
});

    displayDataInHtml(data);
})


.catch(error => console.error('Error fetching JSON: ', error));

