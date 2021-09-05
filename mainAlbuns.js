function makeGet(url){
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseText;

}

function createRow(user){
    let row = document.createElement("tr");

    let tdUserId = document.createElement("td");
    let tdId = document.createElement("td");
    let tdTitle = document.createElement("td");

    tdUserId.innerHTML = user.userId;
    tdId.innerHTML = user.id;
    tdTitle.innerHTML = user.title;

    row.appendChild(tdUserId);
    row.appendChild(tdId);
    row.appendChild(tdTitle);

    return row;
}

function main() {
    let data = makeGet("https://jsonplaceholder.typicode.com/albums");
    let posts = JSON.parse(data);
    let table = document.getElementById("albuns");
    
    posts.forEach(element => {
        let row = createRow(element);
        table.appendChild(row);
    });
}

main()