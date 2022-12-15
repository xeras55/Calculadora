
let inputN = document.getElementById('numbersInput');
let inputC = document.getElementById('numberRes');




valor = (val) =>{
    // console.log(val)
    let res = inputN.textContent =inputN.textContent + val;
    console.log(res)
}

borrar = (borrar) =>{
    console.log(borrar.slice(0,-1));
    inputN.textContent = (borrar.slice(0,-1));
}


selectOperation = () => {
    let selecOpe = inputN.textContent;
    inputC.textContent = selecOpe;
    inputN.textContent = "";

}


// if (datoOperacion.includes(".")){
//     convertirBoolean = (numero) =>{
//         numero.parseFloat();
//     }
// }


selecRes = () => {
    let datoOperacion =inputC.textContent;
    let datoRes = inputN.textContent;
    const datoOperacionPa = parseInt(datoOperacion)
    const  datoResPa= parseInt(datoRes)
    if(datoOperacion.includes('^')){
        console.log('papas')
        let resp =  datoOperacionPa ** datoResPa ;
        console.log(parseInt(resp));
        inputC.textContent = resp;
        inputN.textContent = "";
    } else if (datoOperacion.includes('%')){
        console.log('papas')
        let resp =  datoOperacionPa % datoResPa ;
        console.log(parseInt(resp));
        inputC.textContent = resp;
        inputN.textContent = "";
    }else if (datoOperacion.includes('√')){
        console.log('papas')
        let resp =  Math.sqrt(datoOperacionPa);
        console.log(parseInt(resp));
        inputC.textContent = resp;
        inputN.textContent = "";
    } else if (datoOperacion.includes('/')){
        console.log('papas')
        let resp =  datoOperacionPa / datoResPa ;
        console.log(parseInt(resp));
        inputC.textContent = resp;
        inputN.textContent = "";
    } else if (datoOperacion.includes('*')){
        console.log('papas')
        let resp =  datoOperacionPa * datoResPa ;
        console.log(parseInt(resp));
        inputC.textContent = resp;
        inputN.textContent = "";
    } else if (datoOperacion.includes('-')){
        console.log('papas')
        let resp =  datoOperacionPa - datoResPa ;
        console.log(parseInt(resp));
        inputC.textContent = resp;
        inputN.textContent = "";
    } else if (datoOperacion.includes('+')){
        console.log('papas')
        let resp =  datoOperacionPa + datoResPa ;
        console.log(parseInt(resp));
        inputC.textContent = resp;
        inputN.textContent = "";
    }
}

const potencia = () =>{
    valor("^");
    selectOperation();
}

const residuo = () =>{
    valor("%");
    selectOperation();
    
}

const raiz = () =>{
    valor("√");
    selectOperation();
    
}

const delete1 = () =>{
    borrar(inputN.textContent);
    butDel = document.getElementById('delete1')
    butDel.addEventListener("dblclick",del);
}
const del = () =>{
    inputC.textContent = "";
    inputN.textContent = "";
}

const siete = () =>{
    valor(7);
    
}

const ocho = () =>{
    valor(8);
}

const nueve = () =>{
    valor(9);
}

const dividir = () =>{
    valor("/");
    selectOperation();
}

const cuatro = () =>{
    valor(4);
}

const cinco = () =>{
    valor(5);
}

const seis = () =>{
    valor(6);
}

const multiplicar = () =>{
    valor("*");
    selectOperation();
}

const uno = () =>{
    valor(1);
}

const dos = () =>{
    valor(2);
}

const tres = () =>{
    valor(3);
}

const menos = () =>{
    valor("-");
    selectOperation();
}

const punto = () =>{
    valor(".");
}

const cero = () =>{
    valor(0);
}

const resultado = () =>{
    // valor("=");
    selecRes();
    
}

const sumar = () =>{
    valor("+");
    selectOperation();
}

// const clear = () => {
// console.log('papa');
// }

// const suna = ("12+23-12/12*32");
// console.log(suna.split('+'));




    // var contador = 2;
    // while(contador <= 100) {
    //     console.log(contador);
    //     contador = contador + 2; // incrementar de dos en dos
    // }
    // console.log("FIN");



class Operacion {
    constructor(valor1, valor2){
        this.valor1 = valor1;
        this.valor2 = valor2;
    }
    sumar(){
        
        return this.valor1 + this.valor2
    }
    resta(){
        
        return this.valor1 - this.valor2
    }
    multiplicacion(){
        
        return this.valor1 * this.valor2
    }
    divicion(){
        
        return this.valor1 / this.valor2
    }
    potencia(){
        
        return this.valor1 **  this.valor2
    }
    raizC(){
        
        return Math.sqrt(this.valor1 );
    }
    residuoDiv(){
        
        return this.valor1 % this.valor2
    }
}

const operac = new Operacion(5.2, 2.1);
console.log(operac.sumar());
console.log(operac.resta());
console.log(operac.multiplicacion());
console.log(operac.divicion());
console.log(operac.raizC());
console.log(operac.residuoDiv());


// class OperacionPunto{
//     constructor(valorDec1, valorDec2){
//         this.valorDec1 = valorDec1;
//         this.valorDec2 = valorDec2;
//     }
//     sumar(){
        
//         return parseFloat.this.valor1 + parseFloat.this.valor2;
//     }
//     resta(){
        
//         return this.valor1 - this.valor2
//     }
//     multiplicacion(){
        
//         return this.valor1 * this.valor2
//     }
//     divicion(){
        
//         return this.valor1 / this.valor2
//     }
//     potencia(){
        
//         return this.valor1 **  this.valor2
//     }
//     raizC(){
        
//         return Math.sqrt(this.valor1 );
//     }
//     residuoDiv(){
        
//         return this.valor1 % this.valor2
//     }
// }
// console.log("separacion");
// const operacp = new OperacionPunto(5.2, 2.1);
// console.log(operacp.sumar());
// console.log(operacp.resta());
// console.log(operacp.multiplicacion());
// console.log(operacp.divicion());
// console.log(operacp.raizC());
// console.log(operacp.residuoDiv());