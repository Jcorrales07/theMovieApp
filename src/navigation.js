// Aca se usa la API location del navegador para saber que hash se esta usando
// el hash tiene un evento que se llama hashchange y sirve para saber
// si el hash cambio.

// el hash se usa para saber donde estamos, si en el home, trends o en otro lado
searchFormBtn.addEventListener('click', () => {
    location.hash = "search="
})

arrowBtn.addEventListener('click', () => {
    location.hash = "home"
})

trendingBtn.addEventListener('click', () => {
    location.hash = "trends"
})


window.addEventListener('DOMContentLoaded', navigation, false)
window.addEventListener('hashchange', navigation, false)



function navigation() {

    if(location.hash.startsWith('#trends')) {
        trendsPage()
    } else if(location.hash.startsWith('#search=')) {
        searchPage()
    } else if(location.hash.startsWith('#movie=')) {
        moviePage()
    } else if(location.hash.startsWith('#category=')) {
        categoryPage()
    } else {
        homePage()
    }
}

function homePage() {
    console.log('HOME')

    headerSection.classList.remove('header-container--long')
    headerSection.style.background = '' // para limpiar el background

    arrowBtn.classList.add('inactive')
    headerTitle.classList.add('inactive')
    headerCategoryTitle.classList.add('inactive')
    searchForm.classList.remove('inactive')

    trendingPreviewSection.classList.remove('inactive')
    categoriesPreviewSection.classList.remove('inactive')
    genericSection.classList.add('inactive')
    movieDetailSection.classList.add('inactive')

    getTrendingMoviesPreview()
    getMovieGenres()
}

function trendsPage() {
    console.log('TRENDS')

    headerSection.classList.remove('header-container--long')
    headerSection.style.background = '' // para limpiar el background

    arrowBtn.classList.remove('inactive')
    arrowBtn.classList.remove('header-arrow--white')
    headerTitle.classList.add('inactive')
    headerCategoryTitle.classList.remove('inactive')
    searchForm.classList.add('inactive')

    trendingPreviewSection.classList.add('inactive')
    categoriesPreviewSection.classList.add('inactive')
    genericSection.classList.remove('inactive')
    movieDetailSection.classList.add('inactive')
}

function searchPage() {
    console.log('SEARCH')

    headerSection.classList.remove('header-container--long')
    headerSection.style.background = '' // para limpiar el background

    arrowBtn.classList.remove('inactive')
    arrowBtn.classList.remove('header-arrow--white')
    headerTitle.classList.add('inactive')
    headerCategoryTitle.classList.remove('inactive')
    searchForm.classList.remove('inactive')

    trendingPreviewSection.classList.add('inactive')
    categoriesPreviewSection.classList.add('inactive')
    genericSection.classList.remove('inactive')
    movieDetailSection.classList.add('inactive')
}

function moviePage() {
    console.log('MOVIE')

    headerSection.classList.add('header-container--long')
    //headerSection.style.background = '' // para limpiar el background

    arrowBtn.classList.remove('inactive')
    arrowBtn.classList.add('header-arrow--white')
    headerTitle.classList.add('inactive')
    headerCategoryTitle.classList.add('inactive')
    searchForm.classList.add('inactive')

    trendingPreviewSection.classList.add('inactive')
    categoriesPreviewSection.classList.add('inactive')
    genericSection.classList.add('inactive')
    movieDetailSection.classList.remove('inactive')

}

function categoryPage() {
    console.log('CATEGORY')

    headerSection.classList.remove('header-container--long')
    headerSection.style.background = '' // para limpiar el background

    arrowBtn.classList.remove('inactive')
    arrowBtn.classList.remove('header-arrow--white')
    headerTitle.classList.add('inactive')
    headerCategoryTitle.classList.remove('inactive')
    searchForm.classList.add('inactive')

    trendingPreviewSection.classList.add('inactive')
    categoriesPreviewSection.classList.add('inactive')
    genericSection.classList.remove('inactive')
    movieDetailSection.classList.add('inactive')
}