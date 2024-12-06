// Obtener el botón de checkout
const checkoutButton = document.getElementById('checkoutButton');

// Agregar el evento click al botón
checkoutButton.addEventListener('click', function() {
    // Mostrar un mensaje de éxito
    alert("Pago exitoso");

    // Redirigir a la página principal (home)
    window.location.href = "hotel.html"; // Asegúrate de que esta sea la URL correcta de tu página principal
});
