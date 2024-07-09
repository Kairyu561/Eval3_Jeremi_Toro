document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('caloriesForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const peso = parseFloat(document.getElementById('weightInput').value);
        const tiempo = parseFloat(document.getElementById('timeInput').value);
        const actividad = document.querySelector('input[name="activity"]:checked').value;

        // Validaciones
        if (isNaN(peso) || peso < 1 || peso > 120) {
            document.getElementById('weightInput').classList.add('is-invalid');
            return;
        } else {
            document.getElementById('weightInput').classList.remove('is-invalid');
        }

        if (isNaN(tiempo) || tiempo < 5 || tiempo> 150) {
            document.getElementById('timeInput').classList.add('is-invalid');
            return;
        } else {
            document.getElementById('timeInput').classList.remove('is-invalid');
        }

        // Realizar cálculo
        let MET = (actividad === 'caminar') ? 3.5 : 8.0;
        let calorias = MET * 3.5 * peso * (tiempo / 200);

        // Mostrar resultado
        alert(`Calorías quemadas: ${calorias.toFixed(2)}`);
    });
});