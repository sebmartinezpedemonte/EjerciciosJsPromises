//Constructor: metodos resolve y reject
let promise = new Promise(function(resolve, reject){

    const valor = "Fideos";
    resolve(valor);
    
    reject(new Error("Local cerrado"))
});
//------------------------------------------------
//Usando la promesa: then y catch handlers
let getFideos = new Promise(function(resolve,reject){
    let value = 'fideos';
    resolve(value);
});

getFideos   
    .then((result) => {
        console.log(result); 
    })
    .catch(error => console.log("Hubo un error", error));
//----------------------------------------------------
//Promise chain: then()
/*
cocinarArroz()
.then(() => {
    return prepararEnsalada();
})
.then(() => {
    return cocinarPollo();
})
.then(() => {
    console.log("¡La comida esta lista!");
})
.catch((error) => {
    console.error("Algo salio mal: ", error);
});*/
//--------------------------------------------------
//Promise chain: otro ejemplo
/*
function ordenarPlatoPersonal(tiempo){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Plato Persona 1 listo en ${tiempo} minutos.`);
        }, tiempo * 1000 );
    });
}

function ordenarPlatoPersona2(tiempo){
    return new Promise((resolve)=> {
        setTimeout(() => {
            resolve(`Plato Persona 2 listo en ${tiempo} minutos.`);
        }, tiempo * 1000)
    })
}

const tiempoPlatoPersona1 = 5;
const tiempoPlatoPersona2 = 3;

ordenarPlatoPersonal(tiempoPlatoPersona1)
.then((resultadoPersona1) => {
    console.log(resultadoPersona1);
    return ordenarPlatoPersona2(tiempoPlatoPersona2);
})
.then((resultadoPersona2) => {
    console.log(resultadoPersona2);
})
.catch((error) => {
    console.error("Algo salio mal:", error);
});*/
//------------------------------------------------------------

//Tareas al mismo tiempo
function ordenarPlatoPersona1(tiempo){
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(`Plato Persona 1 listo en ${tiempo} minutos.`);
        }, tiempo * 1000)
    });
}

function ordenarPlatoPersona2(tiempo){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Plato Persona 2 listo en ${tiempo} minutos.`);
        }, tiempo * 1000)
    });
}

const tiempoPlatoPersona1 = 3;
const tiempoPlatoPersona2 = 5;

Promise.all([
    ordenarPlatoPersona1(tiempoPlatoPersona1),
    ordenarPlatoPersona2(tiempoPlatoPersona2),    
])
    .then((resultados) => {
        console.log("Todos los platos estan listos:");
        resultados.forEach((resultado) => console.log(resultado));
    })
    .catch((error) => {
        console.error("Algo salio mal:", error);
    });
    /*
Race: 
    Una de las promesas se resuelva o sera rechazada
Any:
    Al menos una de las promesas se resuelva con éxito    
AllSettled:
Todas las promesas se resuelvan o seran rechazadas*/
//---------------------------------------
//Simplificado: async/await
async function prepararPlatos() {
    try {
        const platoPersona1 = await ordenarPlatoPersona1(tiempoPlatoPersona1);
        const platoPersona2 = await ordenarPlatoPersona2(tiempoPlatoPersona2);
        console.log("Todos los platos estan listos:");
        console.log(platoPersona1);
        console.log(platoPersona2);
    } catch (error){
        console.error("Algo salio mal:", error);
    }
}
/*¿Que nos devuelve una promesa?
Fetch:
    Cualquier pedido de recursos que no dependa de nosotros
Archivos:
    Lectura/escritura de archivos
Base de datos: 
    Cualquier operacion con base de datos
*/