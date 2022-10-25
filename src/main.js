//Ocupas una API KEY para que el proyecto funcione,
//entonces crea un archivo secrets.js y pones tu llave

async function getTrendingMoviesPreview() {
    const res = await fetch(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
    );

    const data = await res.json()

    const movies = data.results
    console.log({res, movies})

    movies.forEach(movie => {
        const trendingPreviewMoviesContainer = document.querySelector('#trendingPreview .trendingPreview-movieList')

        const movieContainer = document.createElement('div')
        movieContainer.classList.add('movie-container')

        const movieImg = document.createElement('img')
        movieImg.classList.add('movie-img')
        movieImg.setAttribute('alt', movie.title)
        movieImg.setAttribute('src', `https://image.tmdb.org/t/p/w300/${movie.poster_path}`)
    
        movieContainer.appendChild(movieImg)
        trendingPreviewMoviesContainer.appendChild(movieContainer)
    });
}

async function getMovieGenres() {
    const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`)
    const data = await res.json()


    const genres = data.genres

    console.log({res, genres})

    const categoriesPreviewMoviesContainer = document.querySelector('#categoriesPreview .categoriesPreview-list')



    genres.forEach(genre => {
        const divCat = document.createElement('div')
        divCat.classList.add('category-container')
        const h3 = document.createElement('h3')
        h3.classList.add('category-title')
        console.log(h3)
        h3.setAttribute('id', `id${genre.id}`)
        h3.textContent = genre.name
        
        divCat.appendChild(h3)
        categoriesPreviewMoviesContainer.appendChild(divCat)
    })
}

getTrendingMoviesPreview()
getMovieGenres()