import Conta from "../types/Conta.js";
import { alternarDisplay } from "../utils/trocarDisplay.js";
import ExtratoComponent from "./extrato-component.js";
import SaldoComponent from "./saldo-component.js";
const elementoForm = document.querySelector(".form form");
elementoForm.addEventListener("submit", function (event) {
    try {
        event.preventDefault(); // Para não recarregar a página
        console.log("Clicado");
        if (!elementoForm.checkValidity()) {
            alert("Por favor, preencha todos os campos!");
            return;
        }
        const inputTipoTransacao = elementoForm.querySelector("#tipoTransacao");
        const inputNomeProduto = elementoForm.querySelector("#nomeProduto");
        const inputQuantidade = elementoForm.querySelector("#quantidade");
        const inputValor = elementoForm.querySelector("#valor");
        let tipoTransacao = inputTipoTransacao.value;
        let nomeProduto = inputNomeProduto.value;
        let quantidade = inputQuantidade.valueAsNumber;
        let valor = inputValor.valueAsNumber;
        const novaTransacao = {
            tipoTransacao: tipoTransacao,
            nomeProduto: nomeProduto,
            quantidade: quantidade,
            valor: valor
        };
        // if (!validaTransacao(novaTransacao)) {
        //     throw new Error("Erro: Preencha todos os campos corretamente (nome, quantidade e valor)!");
        // }
        console.log(novaTransacao);
        Conta.registrarTransacao(novaTransacao); //Registrando a nova transação na conta
        SaldoComponent.atualizar(); //Atualizando o saldo
        ExtratoComponent.atualizar(); //Atualizando o extrato
        elementoForm.reset(); // Limpando o formulário
    }
    catch (error) {
        alert(error.message);
    }
});
const elementoVisualizar = document.getElementById("visualizar");
const elementoTransacao = document.getElementById("sessao-transacao");
const elementoExtrato = document.getElementById("sessao-extrato");
elementoVisualizar.addEventListener("click", function (event) {
    try {
        event.preventDefault(); // Para não recarregar a página
        console.log("Visualizar clicado");
        // const transacaoVisivel = !elementoTransacao.classList.contains("d-none");
        // const transacaoVisivel = !elementoTransacao.classList.contains("d-none");
        alternarDisplay(elementoTransacao);
        alternarDisplay(elementoExtrato);
    }
    catch (error) {
        error.message;
    }
});
