const getUser = async (user) => {
    const url = `https://api.github.com/users/${user}`;
    const obtenerUser = await fetch(url);
    const respuesta = await obtenerUser.json();
    return respuesta;
}
const getRepo = async (user, pagina, cantidad_repos) => {
    const url = `https://api.github.com/users/${user}/repos?page=${pagina}&per_page=${cantidad_repos}`
    const repositorio = await fetch(url)
    const respuestaRepo = repositorio.json();
    return respuestaRepo
}



export {
    getUser,
    getRepo,
   
}