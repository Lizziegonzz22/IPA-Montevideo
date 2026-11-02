document.getElementById('btn-calcular').addEventListener('click', function() {
    // 1. Obtener valores del formulario
    const zona = document.getElementById('zona').value;
    const crustosos = document.getElementById('crustosos').checked;
    const foliosos = document.getElementById('foliosos').checked;
    const fruticulosos = document.getElementById('fruticulosos').checked;

    let sumaPuntos = 0;
    let especiesContadas = 0;

    // Asignación de peso ecológico según el tipo de bioindicador
    if (crustosos) { sumaPuntos += 12; especiesContadas++; }
    if (foliosos) { sumaPuntos += 28; especiesContadas++; }
    if (fruticulosos) { sumaPuntos += 50; especiesContadas++; }

    // Multiplicador de frecuencia simulado por el entorno de las tres zonas seleccionadas
    let factorZona = 1.0;
    if (zona === 'centro') factorZona = 0.6;   // Alta polución baja notablemente la presencia de líquenes
    if (zona === 'prado') factorZona = 1.4;    // Parques y alta humedad benefician fuertemente el crecimiento
    if (zona === 'colon') factorZona = 1.2;    // Zona periférica semi-urbana con buena cobertura vegetal

    // 2. Calcular el Índice de Pureza Atmosférica (IPA)
    let resultadoIPA = 0;
    if (especiesContadas > 0) {
        resultadoIPA = (sumaPuntos * factorZona) / (4 - especiesContadas);
    }

    // Limitar decimales a 1 lugar
    resultadoIPA = parseFloat(resultadoIPA.toFixed(1));

    // 3. Modificar la interfaz con el diagnóstico correspondiente
    const bloqueResultado = document.getElementById('bloque-resultado');
    const marcadorIpa = document.getElementById('marcador-ipa');
    const diagnostico = document.getElementById('diagnostico');
    const barraNivel = document.getElementById('barra-nivel');

    bloqueResultado.classList.remove('oculta');
    marcadorIpa.innerText = resultadoIPA;

    // Rangos adaptados de calidad de aire por líquenes
    if (resultadoIPA <= 15.0) {
        diagnostico.innerHTML = `❌ <strong>Calidad del Aire: Mala</strong>.<br>Zona con alta concentración de gases contaminantes urbanos. Solo sobreviven los morfotipos crustosos más resistentes.`;
        marcadorIpa.style.color = 'var(--alert-red)';
        barraNivel.style.backgroundColor = 'var(--alert-red)';
        barraNivel.style.width = '30%';
    } else if (resultadoIPA > 15.0 && resultadoIPA <= 45.0) {
        diagnostico.innerHTML = `⚠️ <strong>Calidad del Aire: Moderada / Regular</strong>.<br>Nivel intermedio de pureza ambiental. Se observa una presencia equilibrada de especies foliosas comunes en entornos urbanos consolidados.`;
        marcadorIpa.style.color = 'var(--alert-yellow)';
        barraNivel.style.backgroundColor = 'var(--alert-yellow)';
        barraNivel.style.width = '65%';
    } else {
        diagnostico.innerHTML = `🌿 <strong>Calidad del Aire: Excelente / Alta Pureza</strong>.<br>Entorno atmosférico óptimo y oxigenado. La presencia de líquenes fruticulosos sensibles certifica un aire limpio de gran pureza.`;
        marcadorIpa.style.color = 'var(--alert-green)';
        barraNivel.style.backgroundColor = 'var(--alert-green)';
        barraNivel.style.width = '100%';
    }
});
