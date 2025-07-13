// Función para alternar el estado de completado de una asignatura
function toggleCompletion(subject) {
    // Obtener el ID de la asignatura
    const subjectText = subject.innerText;

    // Verificar si la asignatura ya está marcada como completada
    if (subject.classList.contains("completed")) {
        // Desmarcar como completado
        subject.classList.remove("completed");
        // Eliminar el estado del localStorage
        localStorage.removeItem(subjectText);
    } else {
        // Marcar como completado
        subject.classList.add("completed");
        // Guardar el estado en localStorage
        localStorage.setItem(subjectText, "completado");
    }
}

// Cargar el estado de los ramos desde localStorage al cargar la página
document.addEventListener("DOMContentLoaded", function () {
    // Obtener todos los elementos .subject
    const subjects = document.querySelectorAll(".subject");

    // Iterar sobre todos los ramos
    subjects.forEach(function(subject) {
        const subjectText = subject.innerText;

        // Si la asignatura está marcada como completada en localStorage, la marcamos
        if (localStorage.getItem(subjectText)) {
            subject.classList.add("completed");
        }
    });
});
