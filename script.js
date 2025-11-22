const inputCantidad = document.getElementById('input-cantidad');
const btnGenerar = document.getElementById('btn-generar');
const btnLimpiar = document.getElementById('btn-limpiar');
const contenedorTarjetas = document.getElementById('contenedor-tarjetas');
const mensajeError = document.getElementById('mensaje-error');

const statTotal = document.getElementById('stat-total');
const statPares = document.getElementById('stat-pares');
const statImpares = document.getElementById('stat-impares');
const statSuma = document.getElementById('stat-suma');


document.addEventListener('DOMContentLoaded', iniciarApp);

function iniciarApp() {
    btnGenerar.addEventListener('click', generarSecuencia);
    btnLimpiar.addEventListener('click', limpiarResultados);
    
    limpiarResultados(); 
}

//fibonacci

function generarSecuencia() {
    mensajeError.textContent = '';
    const cantidad = parseInt(inputCantidad.value);
 
    
    const secuencia = [0];
    
    if (cantidad >= 2) {
        secuencia.push(1);
    }
    
    // F(n) = F(n-1) + F(n-2)
    for (let i = 2; i < cantidad; i++) {
        const siguiente = secuencia[i - 1] + secuencia[i - 2];
        secuencia.push(siguiente);
    }

    // 4. Actualizar el DOM
    mostrarTarjetas(secuencia);
    actualizarEstadisticas(secuencia);
}

 
function mostrarTarjetas(secuencia) {
    
    contenedorTarjetas.innerHTML = ''; 

    secuencia.forEach(numero => {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('tarjeta-fib');
        
        
        if (numero % 2 === 0) {
            tarjeta.classList.add('par'); 
        } else {
            tarjeta.classList.add('impar'); 
        }
        
        tarjeta.textContent = numero.toLocaleString(); 
        contenedorTarjetas.appendChild(tarjeta);
    });
}

function actualizarEstadisticas(secuencia) {
    let totalPares = 0;
    let totalImpares = 0;
    let sumaTotal = 0;

    // Iteración para calcular suma y paridad
    secuencia.forEach(numero => {
        sumaTotal += numero;
        
        // El 0 es considerado un número par
        if (numero % 2 === 0) {
            totalPares++;
        } else {
            totalImpares++;
        }
    });

    // Actualizar los elementos en el panel de estadísticas
    statTotal.textContent = secuencia.length;
    statPares.textContent = totalPares;
    statImpares.textContent = totalImpares;
    statSuma.textContent = sumaTotal.toLocaleString(); // Formato de número
}


function limpiarResultados() {
    
    contenedorTarjetas.innerHTML = '';
    
    
    mensajeError.textContent = '';

    statTotal.textContent = '0';
    statPares.textContent = '0';
    statImpares.textContent = '0';
    statSuma.textContent = '0';
}