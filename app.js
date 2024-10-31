function um_comment () {
    alert("Os Comentários não funcionam :(")
}


function writeComment (){
    const com = document.getElementById('comments').value
    const com_ul = document.querySelector('.commentarios')


    let escrita = ''
    escrita += `<div class="form-group mb-2" style="width: 100%;">
                    <img src="img/vegeta.png" class="img_login" alt="avatar"/>
                    <li class="um_com">${com}
                </div>`;
    com_ul.innerHTML += escrita;
}

