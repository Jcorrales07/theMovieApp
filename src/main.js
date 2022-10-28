//Ocupas una API KEY para que el proyecto funcione,
//entonces crea un archivo secrets.js y pones tu llave

//No me robes mi API KEY porfa
//Don't take away my API KEY pls
API_KEY = '5d6333b08957ac769213935b302e8c6c'

//Instancia de axios
const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        'Content-Type': 'application/json',
    },
    params: {
        'api_key': API_KEY
    }
})


async function getTrendingMoviesPreview() {
    if (trendingMoviesPreviewList.querySelector('div')) {
        return
    }

    const { data } = await api('/trending/movie/day')

    const movies = data.results

    renderMovies(movies, trendingMoviesPreviewList)
}

async function getMovieGenres() {
    if (categoriesPreviewList.querySelector('div')) {
        return
    }

    const { data } = await api('/genre/movie/list')
    const genres = data.genres

    genres.forEach(genre => {
        const divCat = document.createElement('div')
        divCat.classList.add('category-container')
        const h3 = document.createElement('h3')
        h3.classList.add('category-title')
        h3.setAttribute('id', `id${genre.id}`)
        h3.addEventListener('click', (e) => {
            location.hash = `#category=${genre.id}-${genre.name}`
            getMoviesFromGenre()
        })
        h3.textContent = genre.name
        
        divCat.appendChild(h3)
        categoriesPreviewList.appendChild(divCat)
    })
}

async function getMoviesFromGenre() {
    const catId = location.hash.split('=')
    const [id, catName] = catId[1].split('-')

    const { data } = await api('/discover/movie?', {
        params: {
            with_genres: id
        }
    })

    const movies = data.results

    headerCategoryTitle.innerText = catName
    renderMovies(movies, genericSection)
}

function renderMovies(movies, HtmlSection) {
    HtmlSection.innerHTML = ''

    movies.forEach(movie => {
        const movieContainer = document.createElement('div')
        movieContainer.classList.add('movie-container')

        const movieImg = document.createElement('img')
        movieImg.classList.add('movie-img')
        movieImg.setAttribute('alt', movie.title)
        movieImg.setAttribute('src', `https://image.tmdb.org/t/p/w300/${movie.poster_path}`)
    
        movieContainer.appendChild(movieImg)
        HtmlSection.appendChild(movieContainer)
    });
}