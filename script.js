// Función para generar operaciones matemáticas aleatorias
function generateRandomOperation() {
    const operations = ['+', '-', '*'];
    const num1 = Math.floor(Math.random() * 10) + 1;  // Número entre 1 y 10
    const num2 = Math.floor(Math.random() * 10) + 1;  // Número entre 1 y 10
    const operation = operations[Math.floor(Math.random() * operations.length)];

    let result;
    if (operation === '+') {
        result = num1 + num2;
    } else if (operation === '-') {
        result = num1 - num2;
    } else if (operation === '*') {
        result = num1 * num2;
    }

    return { num1, num2, operation, result };
}

// Función para pedir la operación al usuario
function askForOperation(event) {
    // Generar una operación aleatoria
    const { num1, num2, operation, result } = generateRandomOperation();

    
    // Mostrar un prompt al usuario con la operación
    const userAnswer = prompt(`Resuelve la operación: ${num1} ${operation} ${num2}`);

    // Verificar si la respuesta es correcta
    if (parseInt(userAnswer) === result) {
        // Si la respuesta es correcta, redirigir al enlace
        alert('¡Respuesta correcta! Redirigiendo...');
        setTimeout(() => {
            const button = event.target;
            if (button && button.tagName === 'A') {
                window.location.href = button.href;
            }
        }, 2000);  // Redirige después de 2 segundos
    } else {
        // Si la respuesta es incorrecta, mostrar un mensaje de error
        alert(`Respuesta incorrecta. Intenta de nuevo.`);
    }
}

// Seleccionar todos los botones de las cards
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn-jugar');  // Selecciona todos los botones con la clase .btn-jugar

    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();  // Evitar la redirección inmediata
            askForOperation(event);  // Llamar a la función para preguntar la operación
        });
    });
});
