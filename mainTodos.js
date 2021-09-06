function makeGet(url){ //Função que faz a requisição da url.
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseText;

}

function createRow(user){
    let row = document.createElement("tr"); //Cria linha

    let tdUserId = document.createElement("td"); //Cria coluna
    let tdId = document.createElement("td");
    let tdTitle = document.createElement("td");
    let tdCompleted = document.createElement("td");

    tdUserId.innerHTML = user.userId;
    tdId.innerHTML = user.id;
    tdTitle.innerHTML = user.title;
    tdCompleted.innerHTML = user.completed;

    row.appendChild(tdUserId); //Adiciona na tabela.
    row.appendChild(tdId);
    row.appendChild(tdTitle);
    row.appendChild(tdCompleted);

    return row;
}

function main() { //Função que puxa a API.
    let data = makeGet("https://jsonplaceholder.typicode.com/todos");
    let posts = JSON.parse(data); //Converte a String para JSON.
    let table = document.getElementById("todos"); //Pega a ID post do HTML
    
    posts.forEach(element => { //Para cada usuário cria uma linha e adiciona na tabela.
        let row = createRow(element);
        table.appendChild(row);
    });
}

main()