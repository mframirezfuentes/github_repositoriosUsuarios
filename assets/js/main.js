import {
    request
} from './datos.js'

let form = document.querySelector('form');
form.disabled = true;
let arreglo = [];
const mostrarDOM = () => {
    let cuerpo = document.getElementById('resultados');
    const boton = document.getElementById('btnBoton');
    boton.addEventListener('click', async () => {
        try {
            const user = document.getElementById('nombre');
            const pagina = document.getElementById('pagina');
            const cantidad_repos = document.getElementById('repoPagina');
            if (user.value != "" && pagina.value != "" && cantidad_repos.value != "") {
                const datos = await request(user.value, pagina.value, cantidad_repos.value)
                let info = datos[1];
                arreglo.push(info)
                cuerpo.innerHTML = `<div class="row">               
                <div class="col-6">
                <h2>Datos Usuarios</h2>
                <p>Nombre Usuario: ${datos[0].name}</p>
                <p>Nombre de login: ${datos[0].login}</p>
                <p> Cantidad de repositorios: ${datos[0].public_repos}</p>
                <p>Localidad: ${datos[0].location}</p>
                <p> Tipo de Usuario: ${datos[0].type}</p> 
                </div> 
                <div class="col-6" id="repositorio">
                <h2 id="datos">Datos Repositorios</h2><br>
                </div>  
                </div>`
                console.log(arreglo)
                for (let i = 0; i < arreglo[0].length; i++) {
                    console.log(arreglo[0][i].html_url)
                    document.getElementById('datos').innerHTML += `<br>     
                          <a href=${arreglo[0][i].html_url}>${arreglo[0][i].name}</a>`
                }
            }
        } catch (error) {
            alert('Not Found')
        }
    })
}
mostrarDOM()