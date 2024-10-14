function local(){
    let dados = [ { "id":1,"nome":"goku","senha":1234}, 
                  { "id":2,"nome":"vegeta","senha":"pura_maldade"}, 
                  { "id":3,"nome":"gohan","senha":"piccolo"} 
                ]       
    let n = JSON.stringify(dados);
    localStorage.setItem("data", n);   
    return dados    
}



function login(){
    const dados = JSON.parse(localStorage.getItem("data"))
    
    let log = document.querySelector("#login").value
    let senha = document.querySelector('#password').value

        for(let i = 0;i < dados.length; i++){
            if(log == dados[i].nome && senha == dados[i].senha){
                console.log("voce logou no sistema :) ")
              
                alert("Voce logou")
            }
        }
    }

function adicionar() {
    var userArray = JSON.parse(localStorage.getItem("tds"))
    let log = document.querySelector("#login").value
    let senha = document.querySelector("#password").value
    let user = { id: Date.now(), nome: log, senha: senha }
    userArray.push(user)
    localStorage.setItem("data", JSON.stringify(userArray))
    alert("Você foi cadastrado :) ")
    
    }
    