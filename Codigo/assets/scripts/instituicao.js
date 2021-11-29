let divInst = document.getElementById('inst_info'),
    divMap = document.getElementById('inst_map'),
    instId_Clicked = sessionStorage.getItem("id_clickInst");

let inst = instituicoes[instId_Clicked];

loadInstInfo();

// ----------------------------------------------------------------------------------------------------------------------------------- //

function loadInstInfo() 
{
    let text = '',
        textCat = '';

    if(inst.categoria == 0) textCat = 'Alimentos, cestas básicas';
    else if(inst.categoria == 1) textCat = 'Roupas, sapatos, cobertores';
    else if(inst.categoria == 2) textCat = 'Itens de higiene';
    else if(inst.categoria == 3) textCat = 'Itens de mercado em geral';
    else if(inst.categoria == 4) textCat = 'Livros, brinquedos';
    else if(inst.categoria == 5) textCat = 'Bens materiais';
    else if(inst.categoria == 6) textCat = 'Dinheiro';

    text += `
    <div class="col-12 col-xl-3 align-self-center text-center">
        <img src="${inst.logo}" alt="${inst.nome}" width="250" height="250">
        <br><span class="infoInst_contato"><i class="fas fa-phone-alt"></i>${inst.telefone}</span>
    </div>
    <div class="infoInst_general col-12 col-xl-9 align-self-center">
        <span class="infoInst_nome">${inst.nome}</span>
        <br><span class="infoInst_categoria">${textCat}</span>
        <p>${inst.descricao}</p>`;

    if(getUserLogged() == instId_Clicked)
    {
        text += `<button onclick="openEditModal()" class="infoInst_editar btn" data-toggle="modal" data-target="#editDataModal"><i class="fas fa-cogs"></i>Editar informações</button>
        <button class="infoInst_editar btn"><i class="far fa-newspaper"></i>Nova notícia</button>`;
    }

    text += `</div>`;

    divInst.innerHTML = text;
    divMap.innerHTML = `<iframe frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCNveGQ9bfpKFwWzQLLftrR9hNiHwdqQG8&amp;q=${inst.endereco}" allowfullscreen=""></iframe>`;
}

// ----------------------------------------------------------------------------------------------------------------------------------- //

let edit_nameInput = document.getElementById('edit_name'),
    edit_userInput = document.getElementById('edit_user'),
    edit_passInput = document.getElementById('edit_pass'),
    edit_catSelect = document.getElementById('edit_categoria'),
    edit_endInput = document.getElementById('edit_endereco'),
    edit_telInput = document.getElementById('edit_telefone'),
    edit_descInput = document.getElementById('edit_descricao');

// ----------------------------------------------------------------------------------------------------------------------------------- //

function openEditModal()
{
    edit_nameInput.value = inst.nome;
    edit_userInput.value = inst.user;
    edit_passInput.value = inst.senha;
    edit_catSelect.value = inst.categoria;
    edit_endInput.value = inst.endereco;
    edit_telInput.value = inst.telefone;
    edit_descInput.value = inst.descricao;
}

// ----------------------------------------------------------------------------------------------------------------------------------- //

function saveUserInfo()
{
    event.preventDefault();
    
    let inst = instituicoes[instId_Clicked];

    inst.nome = edit_nameInput.value;
    inst.user = edit_userInput.value;
    inst.senha = edit_passInput.value;
    inst.categoria = edit_catSelect.value;
    inst.endereco = edit_endInput.value;
    inst.telefone = edit_telInput.value;
    inst.descricao = edit_descInput.value;

    localStorage.setItem("instituicoes", JSON.stringify(instituicoes));

    loadInstInfo();

    $('#editDataModal').modal('hide');
}

// ----------------------------------------------------------------------------------------------------------------------------------- //

function edit_userLostFocus()
{   
    let i_id = instituicoes.findIndex(x => x.user === edit_userInput.value);

    if(i_id != -1)
    {
        document.getElementById('edit_userForm').style.border = "1px solid red";
        document.getElementById('edit_userForm').style.borderRadius = "0.25rem";
        document.getElementById('label_user').style.color = "#FF0000";
        document.getElementById('label_user').innerHTML = "Usuário indisponível";
    }
    else if(edit_userInput.value.length < 5)
    {
        document.getElementById('edit_userForm').style.border = "1px solid red";
        document.getElementById('edit_userForm').style.borderRadius = "0.25rem";
        document.getElementById('label_user').style.color = "#FF0000";
        document.getElementById('label_user').innerHTML = "Mín. 5 caracteres";
    }
    else
    {
        document.getElementById('edit_userForm').style.border = "1px solid green";
        document.getElementById('edit_userForm').style.borderRadius = "0.25rem";
        document.getElementById('label_user').style.color = "inherit";
        document.getElementById('label_user').innerHTML = "Usuário";
    }
}

// ----------------------------------------------------------------------------------------------------------------------------------- //

function edit_passLostFocus()
{
    if(edit_passInput.value.length < 8)
    {
        document.getElementById('edit_passForm').style.border = "1px solid red";
        document.getElementById('edit_passForm').style.borderRadius = "0.25rem";
        document.getElementById('label_pass').style.color = "#FF0000";
        document.getElementById('label_pass').innerHTML = "Mín. 8 caracteres";
    }
    else 
    {
        document.getElementById('edit_passForm').style.border = "1px solid green";
        document.getElementById('edit_passForm').style.borderRadius = "0.25rem";
        document.getElementById('label_pass').style.color = "inherit";
        document.getElementById('label_pass').innerHTML = "Senha";
    }
}