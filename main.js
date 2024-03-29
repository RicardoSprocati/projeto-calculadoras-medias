const form  = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji festejando" />';
const imgReprovado = '<img src="./images/reprovado.png" alt="emoji triste" />';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">reprovado</span>';
const notaMinima = parseFloat(prompt("digite a nota mínima"))

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizarTabela();
    atualizaMediaFinal();
})

function adicionaLinha() {
    const inputNome = document.getElementById('nome-atividade');
    const inputNota = document.getElementById('nota-atividade');

    if (atividades.includes(inputNome.value)) {
        alert(`a atividade: ${inputNome.value} ja foi inserida`);
    } else {

        atividades.push(inputNome.value);
        notas.push(parseFloat(inputNota.value));

        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputNota.value}</td>`;
        linha += `<td>${inputNota.value >=7 ? imgAprovado : imgReprovado}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNome.value = '';
    inputNota.value = '';
}

function atualizarTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMedia();

    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado ;
}

function calculaMedia () {
    let somaNotas = 0

    for (let i = 0; i < notas.length; i++) {
        somaNotas += notas[i];
    }

    return somaNotas / notas.length;
}