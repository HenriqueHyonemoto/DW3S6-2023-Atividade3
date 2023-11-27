
const hello = (req, res) => (async () => {
    res.json({ status: "ok", "mensagem": "Olá Mundo!" });
})();

//função para ordenar o vetor e mostra-lo ordenado
const ordenaVetor = (req, res) => (async () => {
    const { vetor } = req.body;
    vetor.sort((b, a) => b - a);
    res.json({ status: 'ok', Números_Ordenados: vetor });
})();

//função para calcular e mostrar o menor e o maior número
const menorMaior = (req, res) => (async () => {
    const { vetor } = req.body;

    // Salva na variavel "menor" o menor número do array
    const menor = Math.min(...vetor);

    // Salva na variavel "maior" o maior número do array
    const maior = Math.max(...vetor);

    // Retorna o vetor ordenado e o menor e maior número
    res.json({ status: 'ok', Menor: menor, Maior: maior });
})();

module.exports = {
    hello,
    ordenaVetor,
    menorMaior,
}