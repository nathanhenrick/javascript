// IMC = peso / altura^2;
// Deve retornar um único número;
// Deve gerar um erro se receber um parâmetro não número;
// Deve retornar erro caso não receba os dois parâmetros;
//Fazer uma função que pega o peso inserido e a altura (realizar o quadrado), os divide e obtém um return. Este terá um valor diferente dependendo do valor da saída de acordo com a TABELA IMC
/*------------------------------------------------------------------------------------------------------------------------------------------------------------*/

// let weight = 66;
// let height = 1.71;
// let numericWeight = parseFloat(weight);

// if (isNaN(numericWeight) || isNaN(height) || height === 0) {
//     throw Error('Erro. Ambos peso e altura devem ser fornecidos como números válidos e altura nem peso pode ser zero.');
// }

// let imc = numericWeight / height ** 2;
// let imcFixed = imc.toFixed(1);

// function calc() {
//     switch (true) {
//             case imc >= 18.5 && imc < 24.9:
//                 console.log(`Seu IMC é ${imcFixed}, portanto, você está com peso normal.`);
//                 break;
//             case imc >= 25 && imc < 29.9:
//                 console.log(`Seu IMC é ${imcFixed}, portanto, você está com sobrepeso.`);
//                 break;
//             case imc >= 30 && imc < 34.9:
//                 console.log(`Seu IMC é ${imcFixed}, portanto, você está com obesidade grau 1.`);
//                 break;
//             case imc >= 35 && imc < 39.9:
//                 console.log(`Seu IMC é ${imcFixed}, portanto, você está com obesidade grau 2.`);
//                 break;
//             case imc >= 40:
//                 console.log(`Seu IMC é ${imcFixed}, portanto, você está com obesidade grau 3.`);
//                 break;
//     }
// }

/*------------------------------------------------------------------------------------------------------------------------------------------------------------*/


const calc = (peso, altura) => {
    if (isNaN(peso) || isNaN(altura)) {
        throw Error('Error. Please, put a number in both spaces!')
    }else {
        const imc = peso / altura**2
        const imcFixed = imc.toFixed(1)
    }



}

const switches = () => {
    switch (true) {

    }
}







// IMC = peso / altura^2; CHECK
// Deve retornar um único número;
// Deve gerar um erro se receber um parâmetro não número;
// Deve retornar erro caso não receba os dois parâmetros;
//Fazer uma função que pega o peso inserido e a altura (realizar o quadrado), os divide e obtém um return. Este terá um valor diferente dependendo do valor da saída de acordo com a TABELA IMC