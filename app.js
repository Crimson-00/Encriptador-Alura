function encriptarTexto() {
    const texto = document.getElementById('caja__texto').value;
    if (!texto) {
        mostrarMensajeInicial();
        return;
    }
    let textoEncriptado = texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    
    mostrarResultado(textoEncriptado);
    limpiarTextarea();
}

function desencriptarTexto() {
    const texto = document.getElementById('caja__texto').value;
    if (!texto) {
        mostrarMensajeInicial();
        return;
    }
    let textoDesencriptado = texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    
    mostrarResultado(textoDesencriptado);
    limpiarTextarea();
}

function mostrarResultado(texto) {
    document.getElementById('resultado').innerHTML = `
        <div class="lado__derecho">
            <p>${texto}</p>
            <button onclick="copiarTexto();" class="copiar">Copiar</button>
        </div>
    `;
}

function mostrarMensajeInicial() {
    document.getElementById('resultado').innerHTML = `
        <div class="lado__derecho">
            <img src="./Img/lupita.png" class="lupita">
            <div class="no__encontrado">
                <p class="ningun__mensaje">Ningún mensaje fue encontrado</p>
                <p class="ingresa__texto">Ingresa el texto que desees encriptar o desencriptar</p>
            </div>
        </div>
    `;
}

function limpiarTextarea() {
    const textarea = document.getElementById('caja__texto');
    textarea.value = '';
    textarea.placeholder = 'Ingrese el texto aquí';
}

function copiarTexto() {
    const texto = document.querySelector('.lado__derecho p').innerText;
    navigator.clipboard.writeText(texto).then(() => {
    });
}
