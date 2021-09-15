const Converter = async() => {
    const url = `https://economia.awesomeapi.com.br/last/USD-BRL`;
    const dados = await fetch(url);
    const valordolar = await dados.json();
    var valordolarr = valordolar.USDBRL.high;
    var dividir = valordolarr;
    
    var real = document.getElementById("valor");
    var valor1 = real.value;
    var valoremreal = (valor1 / dividir).toFixed(2); 

    document.getElementById('ValorDolarAtualmente').innerHTML = "Valor do dolar hoje: " + valordolarr;

    document.getElementById('valorConvertido').innerHTML = "Valor em dolar: $"+valoremreal;

    var data = new Date();
    var dia = String(data.getDate()).padStart(2, '0');
    var mes = String(data.getMonth() + 1).padStart(2, '0');
    var ano = data.getFullYear();
    dataAtual = dia + '/' + mes + '/' + ano;
    document.getElementById('DataAtual').innerHTML = "Valor referente a data: " + dataAtual;
    
}