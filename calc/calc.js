
let inputN = document.getElementById('numbersInput');
let inputC = document.getElementById('numberRes');



const hasnumbr = () =>{
    const but = document.getElementById('potencia');
    const but2 = document.getElementById('residuo');
    const but3 = document.getElementById('raiz');
    const but4 = document.getElementById('dividir');
    const but5 = document.getElementById('multiplicar');
    const but6 = document.getElementById('menos');
    const but7 = document.getElementById('sumar');
    but.disabled= true;
    but2.disabled= true;
    but3.disabled= true;
    but4.disabled= true;
    but5.disabled= true;
    but6.disabled= true;
    but7.disabled= true;
    console.log("jalo");
}

valor = (val) =>{
    let res = inputN.textContent =inputN.textContent + val;
}

borrar = (borrar) =>{
    inputN.textContent = (borrar.slice(0,-1));
}


selectOperation = () => {
    let selecOpe = inputN.textContent;
    inputC.textContent = selecOpe;
    inputN.textContent = "";
}

// input n abajo input res arriba
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



const convertirValor = () => {
    let datoOperacion =inputC.textContent;
    let datoRes = inputN.textContent;
    if(datoOperacion.includes(".") || datoRes.includes(".")){
        let datoOperacionF = parseFloat(datoRes);
        let datoResF = parseFloat(datoOperacion);
        console.log('tiene punto');
        if(datoOperacion.includes('+')){
            const operatF = new Operacion(datoResF,datoOperacionF);
            inputC.textContent = "";
            inputN.textContent = (operatF.sumar());            
        }else if (datoOperacion.includes('-')){
            const operatF = new Operacion(datoResF,datoOperacionF);
            inputC.textContent = "";
            inputN.textContent = (operatF.resta());
        }else if (datoOperacion.includes('*')){
            const operatF = new Operacion(datoResF,datoOperacionF);
            inputC.textContent = "";
            inputN.textContent = (operatF.multiplicacion());            
        }else if (datoOperacion.includes('/')){
            const operatF = new Operacion(datoResF,datoOperacionF);
            inputC.textContent = "";
            inputN.textContent = (operatF.divicion());
        }else if (datoOperacion.includes('√')){
            const operatF = new Operacion(datoResF,datoOperacionF);
            inputC.textContent = "";
            inputN.textContent = (operatF.raizC());
        }else if (datoOperacion.includes('^')){
            const operatF = new Operacion(datoResF,datoOperacionF);
            inputC.textContent = "";
            inputN.textContent = (operatF.potencia());
        }else if (datoOperacion.includes('%')){
            const operatF = new Operacion(datoResF,datoOperacionF);
            inputC.textContent = "";
            inputN.textContent = (operatF.residuoDiv());
        }                 
    }else   {
        let datoOperacionI = parseInt(datoRes);
        let datoResI = parseInt(datoOperacion);
            if(datoOperacion.includes('+')){
                const operatI = new Operacion(datoResI,datoOperacionI);
                inputC.textContent = "";
                inputN.textContent = (operatI.sumar());
            }else if (datoOperacion.includes('-')){
                const operatI = new Operacion(datoResI,datoOperacionI);
                inputC.textContent = "";
                inputN.textContent = (operatI.resta());
            }else if (datoOperacion.includes('*')){
                const operatI = new Operacion(datoResI,datoOperacionI);
                inputC.textContent = "";
                inputN.textContent = (operatI.multiplicacion());                
            }else if (datoOperacion.includes('/')){
                const operatI = new Operacion(datoResI,datoOperacionI);
                inputC.textContent = "";
                inputN.textContent = (operatI.divicion());                
            }else if (datoOperacion.includes('√')){
                const operatI = new Operacion(datoResI,datoOperacionI);
                inputC.textContent = "";
                inputN.textContent = (operatI.raizC());                
            }else if (datoOperacion.includes('^')){
                const operatI = new Operacion(datoResI,datoOperacionI);
                inputC.textContent = "";
                inputN.textContent = (operatI.potencia());                
            }else if (datoOperacion.includes('%')){
                const operatI = new Operacion(datoResI,datoOperacionI);
                inputC.textContent = "";
                inputN.textContent = (operatI.residuoDiv());                
            }                 
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
    const butDel = document.getElementById('delete1')
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
    convertirValor();
    
}

const sumar = () =>{
    valor("+");
    selectOperation();
    
}
