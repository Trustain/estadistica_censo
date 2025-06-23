 function validarEncuestador(event) {
     event.preventDefault();
     var dni = document.getElementById("Number").value;
     var operativo = document.getElementById("chooseGuests").value;
    
     if (dni === "" || operativo === "Seleccionar....") {
         alert("Por favor, complete todos los campos.");
         return;
    }
    
    window.location.href = `Encuestadores/resultado.html?dni=${dni}&operativo=${operativo}`;
}




// async function validarEncuestador(event) {
//      event.preventDefault();
//      var dni = document.getElementById("Number").value;
//      var operativo = document.getElementById("chooseGuests").value;

//     if (dni === "" || operativo === "Seleccionar....") {
//          alert("Por favor, complete todos los campos.");
//          return;
//      }

//      try {
//          const response = await fetch('encuestadores.json');
//          const encuestadores = await response.json();

//          const encuestador = encuestadores.find(e => e.dni === dni && e.operativo === operativo);

//          if (encuestador) {
//              window.location.href = `Encuestadores/resultado.html?dni=${dni}&operativo=${operativo}`;
//          } else {
//              window.location.href = `Encuestadores/no_validacion.html`;
//          }
//      } catch (error) {
//          console.error("Error al validar encuestador", error);
//          alert("Hubo un problema al validar los datos. Intente nuevamente.");
//      }
//  }

// function validarEncuestador(event) {
//     event.preventDefault();
//     var dni = parseInt(document.getElementById("Number").value.trim(), 10);
//     var operativo = parseInt(document.getElementById("chooseGuests").value, 10); // No es necesario trim() en select

//     // Verificar que los valores sean números válidos
//     if (isNaN(dni) || isNaN(operativo)) {
//         alert("Por favor, ingrese un DNI válido y seleccione un operativo.");
//         return;
//     }

//     fetch('encuestadores.json')
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('No se pudo cargar el archivo JSON');
//             }
//             return response.json();
//         })
//         .then(encuestadores => {
//             const encuestador = encuestadores.find(e => e.dni === dni && e.operativo === operativo);

//             if (encuestador) {
//                 window.location.href = `Encuestadores/resultado.html?dni=${dni}&operativo=${operativo}`;
//             } else {
//                 window.location.href = `Encuestadores/no_validacion.html`;
//             }
//         })
//         .catch(error => {
//             console.error("Error al validar encuestador:", error);
//             alert("Hubo un problema al validar los datos. Intente nuevamente.");
//         });
// }