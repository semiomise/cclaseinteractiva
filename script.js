function option1() {
    const caseContainer = document.getElementById('case-container');
    caseContainer.innerHTML = `
        <h2>Resultados de la Anamnesis y Ecografía</h2>
        <p>En la anamnesis detallada, se obtiene el dato de que ha tenido episodios de dolor cólico postprandial en los últimos dos meses. En la ecografía abdominal, se observan múltiples litos con pared vesicular de 5 mm (límite superior normal).</p>
        <p>¿A qué diagnóstico llegas?</p>
        <button onclick="diagnosis1()">Colecistitis</button>
        <button onclick="error1()">Colangitis</button>
        <button onclick="error1()">Cólico Biliar Simple</button>
    `;
}

function option2() {
    const caseContainer = document.getElementById('case-container');
    caseContainer.innerHTML = `
        <h2>Observación y Retraso en el Diagnóstico</h2>
        <p>El manejo conservador retrasó el diagnóstico, lo que podría permitir la progresión de la enfermedad.</p>
        <button onclick="stage3()">Continuar con el caso</button>
    `;
}

function option3() {
    const caseContainer = document.getElementById('case-container');
    caseContainer.innerHTML = `
        <h2>Resultados del Examen Físico y Laboratorio</h2>
        <p>En el examen físico, se constata piel seca y caliente, abdomen levemente distendido con signo de Murphy positivo. El laboratorio muestra 10,000 glóbulos blancos y Proteína C Reactiva positiva.</p>
        <p>¿A qué diagnóstico llegas?</p>
        <button onclick="diagnosis1()">Colecistitis</button>
        <button onclick="error1()">Colangitis</button>
        <button onclick="error1()">Cólico Biliar Simple</button>
    `;
}

function diagnosis1() {
    const caseContainer = document.getElementById('case-container');
    caseContainer.innerHTML = `
        <h2>Diagnóstico Confirmado: Colecistitis</h2>
        <p>El diagnóstico de colecistitis se confirma y se continúa con la observación y manejo.</p>
        <button onclick="stage3()">Continuar con el caso</button>
    `;
}

function error1() {
    const caseContainer = document.getElementById('case-container');
    caseContainer.innerHTML = `
        <h2 class="error">Diagnóstico Incorrecto</h2>
        <p class="error">Diagnóstico incorrecto. La evolución del caso clínico sugiere una complicación como pancreatitis.</p>
        <button onclick="stage3()">Continuar con el caso</button>
    `;
}

function stage3() {
    const caseContainer = document.getElementById('case-container');
    caseContainer.innerHTML = `
        <h2>Nuevos Síntomas Durante la Internación</h2>
        <p>Durante la internación para observación y manejo de la colecistitis, la paciente experimenta un agravamiento de su cuadro clínico. Ahora refiere un dolor abdominal de inicio súbito, de carácter intenso, localizado en el epigastrio, con irradiación en banda hacia ambos flancos y la región dorsal.</p>
        <p>El dolor se acompaña de náuseas y vómitos persistentes, que no alivian la sintomatología. La paciente presenta también distensión abdominal progresiva, con signos de irritación peritoneal evidentes.</p>
        <p>Al examen físico, se observa abdomen distendido, doloroso a la palpación profunda en el epigastrio, con defensa muscular y signos de rebote positivo (Blumberg). Los ruidos hidroaéreos están disminuidos. La paciente está febril (39°C), taquicárdica (110 lpm), y presenta hipotensión arterial (90/60 mmHg), con sudoración fría y palidez cutánea. Se evidencia ictericia leve.</p>
        <p>¿En qué diagnósticos piensas?</p>
        <button onclick="diagnosis2()">Pancreatitis Aguda</button>
        <button onclick="error2()">Colangitis</button>
        <button onclick="error2()">Síndrome Coledociano</button>
    `;
}

function diagnosis2() {
    const caseContainer = document.getElementById('case-container');
    caseContainer.innerHTML = `
        <h2>Diagnóstico Confirmado: Pancreatitis Aguda</h2>
        <p>El cuadro clínico y los hallazgos al examen físico son compatibles con una pancreatitis aguda, probablemente secundaria a la colecistitis.</p>
        <button onclick="stage4()">Continuar con el caso</button>
    `;
}

function error2() {
    const caseContainer = document.getElementById('case-container');
    caseContainer.innerHTML = `
        <h2 class="error">Diagnóstico Incorrecto</h2>
        <p class="error">Diagnóstico incorrecto. Los síntomas y la evolución clínica son más graves y sugieren una complicación importante como la pancreatitis.</p>
        <button onclick="stage4()">Continuar con el caso</button>
    `;
}

function stage4() {
    const caseContainer = document.getElementById('case-container');
    caseContainer.innerHTML = `
        <h2>Nuevos Síntomas que Sugieren Peritonitis</h2>
        <p>A pesar del manejo inicial de la pancreatitis, la paciente presenta un empeoramiento significativo de su estado general. Ahora refiere un dolor abdominal de mayor intensidad, que se ha vuelto más difuso, con predominio en el abdomen inferior.</p>
        <p>La paciente presenta fiebre persistente y alta (40°C), acompañada de escalofríos y sudoración profusa. Se observa un abdomen rígido, con defensa muscular generalizada y signos de rebote muy positivos, indicativos de irritación peritoneal. Los ruidos hidroaéreos están prácticamente ausentes.</p>
        <p>En el examen físico, la paciente se encuentra taquicárdica (120 lpm), con hipotensión arterial (80/50 mmHg), y signos de shock séptico incipiente (palidez, extremidades frías, llenado capilar lento).</p>
        <p>¿Qué complicación sospechas a partir de estos nuevos síntomas?</p>
        <button onclick="peritonitis()">Peritonitis Secundaria a Pancreatitis</button>
        <button onclick="error3()">Absceso Pancreático</button>
        <button onclick="error3()">Obstrucción Intestinal</button>
    `;
}

function peritonitis() {
    const caseContainer = document.getElementById('case-container');
    caseContainer.innerHTML = `
        <h2>Diagnóstico Confirmado: Peritonitis</h2>
        <p>El cuadro clínico es altamente sugestivo de peritonitis secundaria a una complicación de la pancreatitis. Los signos de irritación peritoneal, junto con la gravedad del estado general de la paciente, apoyan este diagnóstico.</p>
        <button onclick="endCase()">Finalizar Caso</button>
    `;
}

function error3() {
    const caseContainer = document.getElementById('case-container');
    caseContainer.innerHTML = `
        <h2 class="error">Diagnóstico Incorrecto</h2>
        <p class="error">Si bien otras complicaciones son posibles, los signos clínicos observados sugieren una peritonitis difusa como complicación de la pancreatitis.</p>
        <button onclick="endCase()">Finalizar Caso</button>
    `;
}

function endCase() {
    const caseContainer = document.getElementById('case-container');
    caseContainer.innerHTML = `
        <h2>Conclusión del Caso Clínico</h2>
        <p id="final-message">Este caso clínico ejemplifica la progresión de una patología biliar a complicaciones graves como pancreatitis y peritonitis. La detección precoz y el diagnóstico preciso de estas complicaciones son cruciales para optimizar el manejo clínico y mejorar el pronóstico del paciente.</p>
        <button onclick="startOver()">Reiniciar Caso</button>
    `;
}

function startOver() {
    const caseContainer = document.getElementById('case-container');
    caseContainer.innerHTML = `
        <h2>Introducción del Caso Clínico</h2>
        <p>Eva, una paciente de 45 años con antecedentes de obesidad y antecedentes familiares de colelitiasis, acude a la consulta por un dolor abdominal agudo localizado en el hipocondrio derecho acompañado de náuseas, vómitos, anorexia y síndrome febril del mismo tiempo de evolución.</p>
        <p>Antes de continuar, es importante indagar más sobre las características del dolor: ¿Cómo describirías la intensidad y tipo de dolor? ¿Hay algún factor que agrave o alivie el dolor? ¿Cuándo comenzó y cómo ha evolucionado desde su inicio?</p>
        <p>¿Ya tiene un diagnóstico presuntivo? De ser afirmativo, ¿por qué opción decide?</p>
        <button onclick="option1()">Realizar Anamnesis Dirigida y Solicitar Ecografía Abdominal</button>
        <button onclick="option2()">Administrar Analgésicos y Observación en la Guardia por 4-6 Horas</button>
        <button onclick="option3()">Realizar Examen Físico Completo y Solicitar Laboratorio de Sangre</button>
    `;
}
