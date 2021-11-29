var db_fakeInstituicoes = 
{
    "usuarios": 
    [
        {
            "nome": "Instituto Casa do Caminho",
            "user": "casacaminho",
            "logo": "assets/images/inst.png",
            "senha": "1234567",
            "categoria": 6,
            "endereco": "R. Padre Rolim, 222 - Santa Efigênia, Belo Horizonte - MG, 30130-090",
            "telefone": "(31) 3586-3856",
            "descricao": "Instituição de apoio às pessoas com Câncer. Vivem de doações, inclusive o salário dos funcionários são providos por doações. Promovem bazares para angariar fundos e sempre precisam de ajuda."
        },
        {
            "nome": "Exército de Salvação",
            "user": "salvação_army",
            "logo": "assets/images/inst.png",
            "senha": "12345678",
            "categoria": 0,
            "endereco": "R. Maravilhas, 25 - Providência, Belo Horizonte - MG, 31814-040R. Padre Rolim, 222 - Santa Efigênia, Belo Horizonte - MG, 30130-090",
            "telefone": "(31) 3433-3563",
            "descricao": "O Exército de Salvação existe para salvar almas, edificar os santos e servir a humanidade sofredora, motivado pelo amor a Deus, em nome de Jesus, sem discriminação."
        },
        {
            "nome": "Associação Das Famílias Carentes De Belo Horizonte",
            "user": "familiasCarentes",
            "logo": "assets/images/inst.png",
            "senha": "12345678",
            "categoria": 0,
            "endereco": "R. Islândia, 196 - Sala 6 - Europa, Belo Horizonte - MG, 31620-430",
            "telefone": "(31) 3458-9070",
            "descricao": "A Associação das Famílias Carentes de Belo Horizonte é uma entidade de direito privado, sem fins lucrativos, de caráter assistencial e filantrópico, que tem como principal finalidade amparar as famílias carentes, por meio do desenvolvimento e execução de programas sociais."
        },
        {
            "nome": "Fundação Sara",
            "user": "fundacao_sara",
            "logo": "assets/images/inst.png",
            "senha": "12345678",
            "categoria": 1,
            "endereco": "R. André Luís, 415 - Canelas II, Montes Claros - MG, 39402-384",
            "telefone": "(38) 3214-5500",
            "descricao": "Prestar assistência social às crianças e adolescentes com câncer e ser agente de promoção de conhecimentos e de melhorias do tratamento oncológico."
        },
        {
            "nome": "Casa Santa Bernadete",
            "user": "SantaBernadete",
            "logo": "assets/images/inst.png",
            "senha": "123456778",
            "categoria": 3,
            "endereco": "R. Gentil Gonzaga, 181 - Canelas, Montes Claros - MG, 39402-661",
            "telefone": "(38) 3222-6055",
            "descricao": " A instituição acolhe jovens e adultos em situação de vulnerabilidade social com diagnóstico de câncer e em tratamento ambulatorial de radioterapia e/ou quimioterapia."
        },
        {
            "nome": "Exército de Salvação",
            "user": "salvação_army",
            "logo": "assets/images/inst.png",
            "senha": "12345678",
            "categoria": 4,
            "endereco": "R. Maravilhas, 25 - Providência, Belo Horizonte - MG, 31814-040R. Padre Rolim, 222 - Santa Efigênia, Belo Horizonte - MG, 30130-090",
            "telefone": "(31) 3433-3563",
            "descricao": ""
        },
        {
            "nome": "Lar das velhinhas",
            "user": "velha_lar",
            "logo": "assets/images/inst.png",
            "senha": "12345678",
            "categoria": 5,
            "endereco": "R. Dom João Pimenta, 65 - Centro, Montes Claros - MG, 39400-003",
            "telefone": "(38) 3221-1299",
            "descricao": "O Centro Feminino de Longa Permanecia “Lar das Velhinhas” é uma entidade civil, filantrópica, sem fins lucrativos, de cunho social, que presta Serviço de Acolhimento Institucional para pessoas idosas gênero feminino dando-lhes assistência alimentar, fornecendo-lhes atividades recreativas, abrigo e proteção."
        },
        {
            "nome": "APAE PORTO SEGURO - BAHIA",
            "user": "apae_bahia",
            "logo": "assets/images/inst.png",
            "senha": "1234567",
            "categoria": 6,
            "endereco": "Av. do Trab., 53 - Campinho, Porto Seguro - BA, 45810-000",
            "telefone": "(73) 98109-2161",
            "descricao": "Somos uma rede sem fins lucrativos que, há mais de 60 anos, se dedica na defesa dos direitos e na prestação de serviços à pessoa com deficiência no Brasil. A APAE é responsável pela inclusão social em diversos níveis de milhares de pessoas ao longo de sua história. "
        },
        {
            "nome": "Fundação da Terceira Idade Doce Lar",
            "user": "doce_lar",
            "logo": "assets/images/inst.png",
            "senha": "1234562278",
            "categoria": 5,
            "endereco": "Rua do Campo s/n - Agrovila, Porto Seguro - BA, 45810-000",
            "telefone": "(73) 99819-0151",
            "descricao": "Casa de acolhimento da terceira idade, que vive de doações e sempre realiza campanhas para o recebimento de doações e divulgação do projeto"
        }
    ]
};

var db_fakeImgs = 
{
    "img_carrossel": 
    [
        {
            "href": "assets/images/car_1.jpg",
            "alt": "Imagem 1",
        },
        {
            "href": "assets/images/car_2.jpg",
            "alt": "Imagem 2",
        },
        {
            "href": "assets/images/car_3.png",
            "alt": "Imagem 3",
        },
        {
            "href": "assets/images/car_4.png",
            "alt": "Imagem 4",
        },
    ]
};

let instituicoes, img;

loadDatabase();
loadLogin();

// ----------------------------------------------------------------------------------------------------------------------------------- //

function loadDatabase()
{
    if(localStorage.getItem("instituicoes") == null) localStorage.setItem("instituicoes", JSON.stringify(db_fakeInstituicoes.usuarios));
    if(localStorage.getItem("img_carrossel") == null) localStorage.setItem("img_carrossel", JSON.stringify(db_fakeImgs.img_carrossel));
    if(sessionStorage.getItem("id_clickInst") == null) sessionStorage.setItem("id_clickInst", 0);

    instituicoes = JSON.parse(localStorage.getItem("instituicoes"));
    imgs = JSON.parse(localStorage.getItem("img_carrossel"));
}

// ----------------------------------------------------------------------------------------------------------------------------------- //

function loadLogin()
{
    if(getUserLogged() == null) setUserLogged(-1);
    
    let divLoginText = document.getElementById('textLogin');

    if(getUserLogged() == -1) divLoginText.innerHTML = `<a id="b_loginOrLogoff" class="header_loginBtn" href="login.html"><i class="fas fa-user"></i></i>Login</a>`;
    else divLoginText.innerHTML = `<a id="b_loginOrLogoff" class="header_loginBtn" href="login.html"><i class="fas fa-user"></i></i>Sair</a>`;

    let blogin = document.getElementById('b_loginOrLogoff');

    blogin.addEventListener('click', loginOrLogoff);
}

// ----------------------------------------------------------------------------------------------------------------------------------- //

function loginOrLogoff()
{
    if(getUserLogged() == -1) console.log('rodou');
    else
    {
        event.preventDefault();

        setUserLogged(-1);

        location.reload();
    }
}

// ----------------------------------------------------------------------------------------------------------------------------------- //

function getUserLogged() { return sessionStorage.getItem("userLogged"); }
function setUserLogged(userid) { return sessionStorage.setItem("userLogged", userid); }