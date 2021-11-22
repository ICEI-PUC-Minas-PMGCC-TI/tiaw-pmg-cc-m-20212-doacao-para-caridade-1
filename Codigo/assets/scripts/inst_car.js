onload = () => {
    var db_fakeInstituicoes = {
        "usuarios": [{
                "id": 1,
                "nome": "Instituto Casa do Caminho",
                "user": "casacaminho",
                "logo": "assets/images/inst.png",
                "senha": "1234567",
                "categoria": "Dinheiro",
                "endereco": "R. Padre Rolim, 222 - Santa Efigênia, Belo Horizonte - MG, 30130-090",
                "telefone": "31-3586-3856",
                "descricao": "Instituição de apoio às pessoas com Câncer. Vivem de doações, inclusive o salário dos funcionários são providos por doações. Promovem bazares para angariar fundos e sempre precisam de ajuda."
            },
            {
                "id": 2,
                "nome": "Exército de Salvação",
                "user": "salvação_army",
                "logo": "assets/images/inst.png",
                "senha": "12345678",
                "categoria": "Cesta básica, dinheiro",
                "endereco": "R. Maravilhas, 25 - Providência, Belo Horizonte - MG, 31814-040R. Padre Rolim, 222 - Santa Efigênia, Belo Horizonte - MG, 30130-090",
                "telefone": "31-3433-3563",
                "descricao": "O Exército de Salvação existe para salvar almas, edificar os santos e servir a humanidade sofredora, motivado pelo amor a Deus, em nome de Jesus, sem discriminação."
            },
            {
                "id": 3,
                "nome": "Associação Das Famílias Carentes De Belo Horizonte",
                "user": "familiasCarentes",
                "logo": "assets/images/inst.png",
                "senha": "12345678",
                "categoria": "Cesta básica, dinheiro",
                "endereco": "R. Islândia, 196 - Sala 6 - Europa, Belo Horizonte - MG, 31620-430",
                "telefone": "31-3458-9070",
                "descricao": "A Associação das Famílias Carentes de Belo Horizonte é uma entidade de direito privado, sem fins lucrativos, de caráter assistencial e filantrópico, que tem como principal finalidade amparar as famílias carentes, por meio do desenvolvimento e execução de programas sociais."
            },
            {
                "id": 4,
                "nome": "Fundação Sara",
                "user": "fundacao_sara",
                "logo": "assets/images/inst.png",
                "senha": "12345678",
                "categoria": "Cesta básica, dinheiro",
                "endereco": "R. André Luís, 415 - Canelas II, Montes Claros - MG, 39402-384",
                "telefone": "38-3214-5500",
                "descricao": "Prestar assistência social às crianças e adolescentes com câncer e ser agente de promoção de conhecimentos e de melhorias do tratamento oncológico."
            },
            {
                "id": 5,
                "nome": "Casa Santa Bernadete",
                "user": "SantaBernadete",
                "logo": "assets/images/inst.png",
                "senha": "123456778",
                "categoria": "Cesta básica, dinheiro",
                "endereco": "R. Gentil Gonzaga, 181 - Canelas, Montes Claros - MG, 39402-661",
                "telefone": "38-3222-6055",
                "descricao": " A instituição acolhe jovens e adultos em situação de vulnerabilidade social com diagnóstico de câncer e em tratamento ambulatorial de radioterapia e/ou quimioterapia."
            },
            {
                "id": 6,
                "nome": "Exército de Salvação",
                "user": "salvação_army",
                "logo": "assets/images/inst.png",
                "senha": "12345678",
                "categoria": "Cesta básica, dinheiro",
                "endereco": "R. Maravilhas, 25 - Providência, Belo Horizonte - MG, 31814-040R. Padre Rolim, 222 - Santa Efigênia, Belo Horizonte - MG, 30130-090",
                "telefone": "31-3433-3563",
                "descricao": ""
            },
            {
                "id": 7,
                "nome": "Lar das velhinhas",
                "user": "velha_lar",
                "logo": "assets/images/inst.png",
                "senha": "12345678",
                "categoria": "Cesta básica, dinheiro",
                "endereco": "R. Dom João Pimenta, 65 - Centro, Montes Claros - MG, 39400-003",
                "telefone": "+38-3221-1299",
                "descricao": "O Centro Feminino de Longa Permanecia “Lar das Velhinhas” é uma entidade civil, filantrópica, sem fins lucrativos, de cunho social, que presta Serviço de Acolhimento Institucional para pessoas idosas gênero feminino dando-lhes assistência alimentar, fornecendo-lhes atividades recreativas, abrigo e proteção."
            },
            {
                "id": 8,
                "nome": "APAE PORTO SEGURO - BAHIA",
                "user": "apae_bahia",
                "logo": "assets/images/inst.png",
                "senha": "1234567",
                "categoria": "Dinheiro",
                "endereco": "Av. do Trab., 53 - Campinho, Porto Seguro - BA, 45810-000",
                "telefone": "73-98109-2161",
                "descricao": "Somos uma rede sem fins lucrativos que, há mais de 60 anos, se dedica na defesa dos direitos e na prestação de serviços à pessoa com deficiência no Brasil. A APAE é responsável pela inclusão social em diversos níveis de milhares de pessoas ao longo de sua história. "
            },
            {
                "id": 9,
                "nome": "Fundação da Terceira Idade Doce Lar",
                "user": "doce_lar",
                "logo": "assets/images/inst.png",
                "senha": "1234562278",
                "categoria": "Materiais de higiene, dinheiro, itens cama e banho",
                "endereco": "Rua do Campo s/n - Agrovila, Porto Seguro - BA, 45810-000",
                "telefone": "73-99819-0151",
                "descricao": "Casa de acolhimento da terceira idade, que vive de doações e sempre realiza campanhas para o recebimento de doações e divulgação do projeto"
            }
        ]
    };

    // ----------------------------------------------------------------------------------------------------------------------------------- //

    let divCarrossel = document.getElementById('inst_carrossel');
    let texto = '';
    let instituicoes = db_fakeInstituicoes.usuarios;

    // Montar um bloco de informações para cada instituição
    for (i = 0; i < instituicoes.length; i++) {

        let instInfo = instituicoes[i];

        if (i == 0) texto += `<div class="carousel-item active">`;
        else texto += `<div class="carousel-item">`;

        texto +=
            `<span class="inst_info">
                <img src="${instInfo.logo}" alt="${instInfo.nome}" width="200" height="200">
                <h5>${instInfo.nome}</h5>
                <h6>
                    <b>Contato:</b> ${instInfo.telefone}<br>
                    <b>Endereço:</b> ${instInfo.endereco}<br>
                    <b>Categoria:</b> ${instInfo.categoria}
                </h6>
                <button type="button" class="btn inst_saibaMais" onclick="setClickInst(${instInfo.id})"><i class="fas fa-plus"></i>Saiba mais</button>
            </span>
        </div>`;
    };

    // Preencher a DIV com o texto HTML
    divCarrossel.innerHTML = texto;
};

// ----------------------------------------------------------------------------------------------------------------------------------- //

function setClickInst(id) {
    sessionStorage.setItem('id_clickInst', id);
    location.href = "instituicao.html";
}