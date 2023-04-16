//Ejercicio 4: Modificar el ejercicio anterior para hacer las llamadas en simultaneo.

/*Ejercicio 3: Datos del usuario
Crear una funcion que use otras dos. Todas van a ser asincronicas. Las dos
funciones hijas tienen que simular el llamado a un servicio usando setTimeout y la
clase Promise(se puede mezclar con async/await). Crear una funcion padre que use
a las anteriores. Agregarle lo que falte, como palabras reservadas y demas.
*/
const usuarios = [
    {id:1, nombre: "Sebastian", edad: 35, publicaciones: ["fotos", "calcomanias", "perros"]},
    {id:2, nombre: "Carolina", edad: 30, publicaciones: ["fotos", "imagenes", "hamsters"]}
];


//devuelve un usuario
async function obtenerUsuario(id) {
    const resultado = await new Promise((resolve) => {
        setTimeout(() => {
            const usuario = usuarios.find((u) => u.id === id);
            resolve(usuario);
            //resolve(usuarios[id -1 ]);
        },2000);
    });
    return resultado;
}


//devuelve  el atributo array publicaciones (devuleve un array de strings)
async function obtenerPublicaciones(idUsuario) {
    const resultado = await new Promise((resolve) => {
        setTimeout(() => {
            const usuario = usuarios.find((u) => u.id === idUsuario);
            resolve(usuario.publicaciones);
            //resolve(usuarios[idUsuario -1 ].publicaciones);
        }, 2000);
    });
    return resultado;
}



async function obtenerInfoCompletaUsuario(idUsuario) {
try {
    const[usuario,publicaciones] = await Promise.all([obtenerUsuario(idUsuario),
obtenerPublicaciones(idUsuario)]);
console.log(`Nombre de usuario: ${usuario.nombre}`);
console.log(`Publicaciones del usuario: ${publicaciones.join(', ')}`);
} catch (error) {
console.error('Error:', error);
}
}
obtenerInfoCompletaUsuario(1);

//__________________________________Sin Promise.all_________________________________________
/*
async function obtenerInfoCompletaUsuario(idUsuario) {
    try {
    const usuario = await obtenerUsuario(idUsuario);
    const publicaciones = await obtenerPublicaciones(idUsuario);
    console.log(`Nombre de usuario: ${usuario.nombre}`);
    console.log(`Publicaciones del usuario: ${publicaciones.join(', ')}`);
    } catch (error) {
    console.error('Error:', error);
    }
    }
obtenerInfoCompletaUsuario(1);
*/


//_______________________________________Solucion CHATGPT que vi dsp___________________________
/*
//devuelve un usuario
function obtenerUsuario(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const usuario = { id: id, nombre: `Carlos` };
      resolve(usuario);
    }, 1000); // tiempo de espera de 1 segundo
  });
}

//devuelve un array de strings
function obtenerPublicaciones(idUsuario) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const publicaciones = [
        `Revistas`,
        `Papeles`,
        `Diarios`,
      ];
      resolve(publicaciones);
    }, 1500); // tiempo de espera de 1.5 segundos
  });
}

async function obtenerInfoCompletaUsuario(idUsuario) {
  try {
    const usuario = await obtenerUsuario(idUsuario);
    const publicaciones = await obtenerPublicaciones(idUsuario);
    console.log(`Nombre de usuario: ${usuario.nombre}`);
    console.log(`Publicaciones del usuario: ${publicaciones.join(', ')}`);
  } catch (error) {
    console.error('Error:', error);
  }
}

obtenerInfoCompletaUsuario(1);
*/


//________________________________Mi ejemplo con reparar Vehiculos, Auto, Moto con Promise.all_________________________


async function repararVehiculos(tiempo){
    try{
        const[auto, moto] = await Promise.all([repararAuto(tiempo), repararMoto(tiempo)]);
    console.log("Vehiculos reparados");
}catch(error){
    console.error('Error:', error)
}
}

repararVehiculos(2);


async function repararAuto(tiempo){
    const resultado = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Auto reparado en ${tiempo} dias.`);
        }, tiempo * 1000)
    });
    console.log(resultado);
}



async function repararMoto(tiempo){
    const resultado = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Moto reparada en ${tiempo} dias.`);
        }, tiempo * 1000)
    });
    console.log(resultado);
}


