
const hello = (req, res) => (async () => {
    res.json({ status: "ok", "mensagem": "Olá Mundo!" });
})();

//função para ordenar o vetor e mostra-lo ordenado
const ordenaVetor = (req, res) => (async () => {
    
    //Pegando os valores mandado pelo POST do tests.rest
    const { vetor } = req.body;

    //Verifica se o array possui menos que 2 valores ou mais que 20, nesse caso ele informa um erro
    if (vetor.length < 2 || vetor.length >20 ) {
        res.json({ status: 'Erro', Erro: "Você deve digitar de 2 a 20 Números!" });
    }else //Se o array tiver entre 2 a 20 números ele realiza a ordenação normalmente
    {
    vetor.sort((b, a) => b - a); //ordena o array
    res.json({ status: 'ok', Números_Ordenados: vetor }); //mostra mensagem com o array ordenado no "response"
    }
})();

//função para calcular e mostrar o menor e o maior número
const menorMaior = (req, res) => (async () => {
    //Pegando os valores mandado pelo POST do tests.rest
    const { vetor } = req.body;

    if (vetor.length < 2 || vetor.length >20 ) {  //Verifica se o array possui menos que 2 valores ou mais que 20, nesse caso ele informa um erro
        res.json({ status: 'Erro', Erro: "Você deve digitar de 2 a 20 Números!" }); //Mensagem informando o erro
    }else //Se o array tiver entre 2 a 20 números ele realiza a ordenação normalmente
    {
    
    const menor = Math.min(...vetor); // Salva na variavel "menor" o menor número do array

    
    const maior = Math.max(...vetor); // Salva na variavel "maior" o maior número do array

    res.json({ status: 'ok', Menor: menor, Maior: maior }); // Retorna o vetor ordenado e o menor e maior número
    }
})();

module.exports = {
    hello,
    ordenaVetor,
    menorMaior,
}