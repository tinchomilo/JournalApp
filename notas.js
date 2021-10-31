//************************************Sass*************************************

// se trabaja de manera similar a react, trabajando componentes por separado para trabajar más ordenado, estos archivos se llaman partials y se ubican dentreo de una carpeta llamada base y el archivo _settings.scss

//estos archivos van a ser importados en el archivo raiz de Sass "styles.scss"

// para importarlo se hace asi y debe ser el primer archivo importado ya que es el que contiene todas las configuraciones:

//palabra reservada @import y el path donde se encuentra el archivo
//      @import './base/settings'

// el guin bajo no se va a ver,

// archivo **** _base.scss *****
//este archivo va a tener configuraciones globales de css, como el html, body, y demás

// Los className de los tags html se van a estructurar para poder identificar más rapidamente las clases. Ejemplo 
{/* <div className='auth__main'>
    <h1>Titulo</h1>
</div> */}

//en el authRouter, tanto el login como el register toman el mismo estilo porque estan dentro del mismo div con el className='auth__main'

// leyendo el className inmediatamente me doy cuenta que en el archivo _auth.scss va a estar la configuracion de esta clase.
// anters que escribir alguna propiedad, debo importar ese archivo dentro de styles.scss para que tome los cambios cuando actualice. Es un error comun no hacerlo y no encontrar la falla despues. ejemplo:

//          styles.scss
// @import './base/settings';
// @import './base/base';


// //components
// @import './components/auth'


// para oscurecer un color, sass tiene una funcion llamada darken, que se le pasan 2 parametros, 1 es el color y el segundo el % que quiero que se oscurezca. ejemplo:
// $color: puedo elegir la variable que definí, $priamry
// $amount: el porcentaje que quiero oscurecerlo, 20
// color:darken($color: #000000, $amount: 0)
// color: lighten($color: #000000, $amount: 0)



/**************************************************************************** */
//  npm install react-redux
//  npm install redux
//  npm install firebase
// tutorial firestore https://www.youtube.com/playlist?list=PLCKuOXG0bPi29EkcAuVCln9ISbExcQk66


// thunk es el middleware que utiliza redux para llevar a cabo las tareas asincronas. cuando se dispara la accion el dispatch se encarga de llevarla al reducer, pero si esta accion es asincrona, primero debe pasar por el middleware, cuando retorna de este ya es sincrona y es ahi cuando el reducer encargado de esa accion se ejecuta
// para configurar el thunk se necesita instalarlo

// npm install redux-thunk

// y configurarlo en el store asi: 

// import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
// const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// const reducers = combineReducers({
//     auth: authReducer,
// })

// export const store = createStore(
//     reducers,
//     composeEnhancers( applyMiddleware( thunk ))
//     );

// tengo que crear una constante llamada composeEnhancers y asignarle las devtools de redux o e lcompose:

// const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// y cuando exporto el store el composeEnhancers recibe el applyMiddleware y el thunk se lo pasamos como parametro
// composeEnhancers( applyMiddleware( thunk ))

//todo esto esta en la documentacion de redux


//****************************** Configurar FIREBASE para autenticación */
/*
1° Ir a descripción general y despues configuración del proyecto
2° Elegir el icono </>
3° Dar nombre al proyecto ( ne es importante el nombre que le demos )
4° seguido al 3° paso nos da la configuracion para hacer la conexion con el proyecto. nos devuelve algo asi:

Si ya usas npm y un agrupador de módulos como Webpack o Rollup, puedes ejecutar el siguiente comando para instalar la versión más reciente del SDK:

npm install firebase
Luego, inicializa Firebase y comienza a usar los SDK de los productos que quieres usar.

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArm8x9TbvfgV-J2lpjzxazN8zcmWgAj6w",
  authDomain: "journal-app-first.firebaseapp.com",
  projectId: "journal-app-first",
  storageBucket: "journal-app-first.appspot.com",
  messagingSenderId: "876922609310",
  appId: "1:876922609310:web:f7772542a37cf1b2baa58f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

5° Crear una carpeta dentro de src que se llame firebase y dentro de esta un archivo que se llama firebaseConfig.js que va a tener esta configuración:

firebaseConfig.js
**************
import 'firebase/firestore'
import 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArm8x9TbvfgV-J2lpjzxazN8zcmWgAj6w",
  authDomain: "journal-app-first.firebaseapp.com",
  projectId: "journal-app-first",
  storageBucket: "journal-app-first.appspot.com",
  messagingSenderId: "876922609310",
  appId: "1:876922609310:web:f7772542a37cf1b2baa58f"
};

// Initialize Firebase
// esto es la base de datos
initializeApp(firebaseConfig);


// referencia a la base de datos que voy a utilizar para grabar
const db = getFirestore()

//creo auth provider, es lo mismo para google, twitter, facebook etc
const googleAuthProvider = new GoogleAuthProvider()

  export {
      db,
      googleAuthProvider,    
  }

*/