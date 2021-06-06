const getUser = async (user) => {
    try {
        const url = `https://api.github.com/users/${user}`;
        const obtenerUser = await fetch(url);
        const respuesta = await obtenerUser.json();
        return respuesta;
    } catch (error) {
        alert('Not Found')
    }
  
}
const getRepo = async (user, pagina, cantidad_repos) => {
    try {  const url = `https://api.github.com/users/${user}/repos?page=${pagina}&per_page=${cantidad_repos}`
    const repositorio = await fetch(url)
    const respuestaRepo = repositorio.json();
    return respuestaRepo
        
    } catch (error) {
        alert('Not Found')
    }
  }

export {
    getUser,
    getRepo,
   
}