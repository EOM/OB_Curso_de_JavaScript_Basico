// Crea una variable con tu nombre
const nombre = "Tu nombre";

// Crea una variable con tu apellido
const apellido = "Tu apellido";

// Crea un objeto con tu nombre y apellido
const datos = {
    nombre: nombre,
    apellido: apellido,
};

// Almacena el objeto en SessionStorage
sessionStorage.setItem("datos", JSON.stringify(datos));

// Almacena el objeto en LocalStorage
localStorage.setItem("datos", JSON.stringify(datos));

// Crea una cookie que caduque en 2 minutos con los datos del objeto
const cookieValue = encodeURIComponent(JSON.stringify(datos));
document.cookie = `datos=${cookieValue}; expires=${new Date(Date.now() + 2 * 60 * 1000).toUTCString()};`;

console.log("Datos almacenados en SessionStorage, LocalStorage y CookieStorage");
