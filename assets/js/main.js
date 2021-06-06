import {
    request
} from './datos.js'

let form = document.querySelector('form');
form.disabled = true;
const mostrarDOM = () => {
    const cuerpo = document.getElementById('resultados');
    const boton = document.getElementById('btnBoton');
    boton.addEventListener('click', async () => {
        try {
            const user = document.getElementById('nombre');
            const pagina = document.getElementById('pagina');
            const cantidad_repos = document.getElementById('repoPagina');
            if (user.value != "" && pagina.value !="" && cantidad_repos.value !="") {
                const datos = await request(user.value, pagina.value, cantidad_repos.value)
                cuerpo.innerHTML = `<div class="row">                
                <div class="col-6">
                <h2>Datos Usuarios</h2>
                <p>Nombre Usuario: ${datos[0].name}</p>
                <p>Nombre de login: ${datos[0].login}</p>
                <p> Cantidad de repositorios: ${datos[0].public_repos}</p>
                <p>Localidad: ${datos[0].location}</p>
                <p> Tipo de Usuario: ${datos[0].type}</p>
                </div>
                <div class="col-6">
                <h2>Datos Repositorios</h2>
               <a href=${datos[1][0].html_url}>${datos[1][0].name}</a><br>
               <a href=${datos[1][1].html_url}>${datos[1][1].name}</a><br>
               <a href=${datos[1][2].html_url}>${datos[1][2].name}</a><br>
               <a href=${datos[1][3].html_url}>${datos[1][3].name}</a><br>
               <a href=${datos[1][4].html_url}>${datos[1][4].name}</a><br>
               <a href=${datos[1][5].html_url}>${datos[1][5].name}</a><br>
               <a href=${datos[1][6].html_url}>${datos[1][6].name}</a><br>
               <a href=${datos[1][7].html_url}>${datos[1][7].name}</a><br>
               <a href=${datos[1][8].html_url}>${datos[1][8].name}</a><br>
               <a href=${datos[1][9].html_url}>${datos[1][9].name}</a><br>          
               </div>
                </div>`
            }
        } catch (error) {
            alert('Not Found')
        }
    })
}
mostrarDOM()