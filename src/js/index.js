function calcGorjeta(event){
    event.preventDefault();
    let valorConta = document.getElementById('conta').value;
    let qualiServ = document.getElementById('qualidade').value;
    let quantPessoas = document.getElementById('pessoas').value;

    if(valorConta == '' | qualiServ == 0){
        alert("Por favor preencha todos os campos!");
    }

    if(quantPessoas == '' | quantPessoas <= 1){
        quantPessoas = 1;
        document.getElementById('cada').style.display = "none";
    } else{
        document.getElementById('cada').style.display = "block";
    }

    let total = (valorConta * qualiServ) / quantPessoas;
    total = total.toFixed(2);

    document.getElementById('gorjeta').innerHTML = total;
    document.getElementById('gorjetaTotal').style.display = "block";

}
document.getElementById('gorjetaTotal').style.display = "none";
document.getElementById('cada').style.display = "none";

document.getElementById('tipsForm').addEventListener('submit', calcGorjeta);