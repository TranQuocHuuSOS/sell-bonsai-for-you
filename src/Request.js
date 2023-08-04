const key='e30c3cB6e2f40fd337574dc7455c9621'
const requests={
    requestPopular:`https://api.themoviedb.org/3//movie/popular?api_key=${key}&language=en-US&page=1`,
    requestToprated:`https://api.themoviedb.org/3//movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending:`https://api.themoviedb.org/3//movie/popular?api_key=${key}&language=en-US&page=2`,
    
    requestUpcoming:`https://api.themoviedb.org/3//movie/upcoming?api_key=${key}&language=en-US&page=1`,
}

export default requests; 