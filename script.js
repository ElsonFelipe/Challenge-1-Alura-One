function criptografar() {
    var textoEntrada = document.getElementById('textoEntrada').value;
    var textoEncriptado = '';

    for (let i = 0; i < textoEntrada.length; i++) {
        var posicaoAtual = textoEntrada[i];
        var encriptarLetra = '';

        switch (posicaoAtual) {
            case 'e':
                encriptarLetra = 'enter';
                break;
            case 'i':
                encriptarLetra = 'imes';
                break;
            case 'a':
                encriptarLetra = 'ai';
                break;
            case 'o':
                encriptarLetra = 'ober';
                break;
            case 'u':
                encriptarLetra = 'ufat';
                break;            
            default:
                encriptarLetra = posicaoAtual;
        }
        
        textoEncriptado += encriptarLetra;
    }

    document.getElementById('saidaTexto').value = textoEncriptado;
    console.log(textoEncriptado);
}