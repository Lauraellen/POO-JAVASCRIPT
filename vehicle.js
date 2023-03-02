class Veiculo {
    placa;
    ano; 

    constructor(placa, ano) {
        this.placa = placa;
        this.ano = ano
    }

    setPlaca(placa) {
        this.placa = placa
    }

    setAno(ano) {
        this.ano = ano
    }

    getPlaca() {
    }

    getAno() {
    }

    exibirDados() {
        console.debug(`Placa:  ${this.placa}, Ano: ${this.ano}`)
    }
}

veiculo = new Veiculo('HBK4740', '2019')

veiculo.exibirDados();

class Caminhao extends Veiculo {
    eixos;

    constructor(placa, ano, eixos) {
        super(placa, ano);
        this.eixos = eixos;
    }

    setEixos(eixos) {
        this.eixos = eixos
    }

    getEixos() {

    }

    exibirDados() {
        console.debug(`Placa do caminhão: ${this.placa}, Ano: ${this.ano}`)
        console.debug(`Eixos: ${this.eixos}`)
    }


}

caminhao = new Caminhao('fgh555', 2010, 3)
caminhao.setPlaca('abc4563');
caminhao.setAno('2015');
caminhao.exibirDados();

class Onibus extends Veiculo {
    assentos;

    constructor(placa, ano, assentos) {
        super(placa, ano);
        this.assentos = assentos;
    }

    setAssentos(assentos) {
        this.assentos = assentos
    }

    getAssentos() {

    }

    exibirDados() {
        console.debug(`Placa do onibus: ${this.placa}, Ano: ${this.ano}`)
        console.debug(`Quantidade de assentos: ${this.assentos}`)
    }


}

onibus = new Onibus('TRN-8541', 2019, 26)
onibus.setAssentos(30)
onibus.exibirDados();