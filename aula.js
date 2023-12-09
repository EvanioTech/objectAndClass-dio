/*class Carro {
    marca;
    cor;
    consumoKmPorLitro;

    constructor (marca, cor, consumoKmPorLitro) {

        this.marca = marca;
        this.cor = cor;
        this.consumoKmPorLitro = consumoKmPorLitro;
    }


     calcGastoTrajeto (trajeto, precoCombustivel) {
    return trajeto/10 * precoCombustivel
}
}

const testdrive = new Carro ('fiat', 'preto', 10);


console.log(`O carro da ${testdrive.marca} tem uma autonomia de ${testdrive.consumoKmPorLitro}km/l e numa viagem de 100km com o preço da gasolina atual o seu gasto seria de: ${testdrive.calcGastoTrajeto(100 ,6)} Reais!
*/

class Cliente {
    nome;
    peso;
    altura;

    constructor (nome, peso, altura) {
        this.nome = nome;
        this.peso =peso;
        this.altura = altura
    }
    calcImc () {
        return this.peso/ (this.altura*this.altura)
    }
    classificarImc () {
       const imc= this.calcImc()

if (imc < 18.5) {
    return ('Abaixo do peso');
}
else if (imc >= 18.5 && imc <25) {
    return('Peso normal');
}
else if (imc >= 25 && imc < 30) {
    return('Acima do peso');
}
else if (imc >=30 && imc <=40) {
    return('obeso');
}
else {
    return('Obesidade Grave');
    }
}

}

const meuCliente = new Cliente('evanio', 89, 1.78)

console.log(meuCliente.calcImc() +' '+ meuCliente.classificarImc());
