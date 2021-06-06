import {getUser,getRepo} from './script.js'
export const request = async (user, pagina, cantidad_repos) => {
    const usuario = getUser(user)
    const repositorio = getRepo(user, pagina, cantidad_repos)
    const datos = await Promise.all([usuario, repositorio]);
    return datos;
}