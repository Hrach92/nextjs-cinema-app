import MovieInfo from "../components/MovieInfo"

export const getServerSideProps = async(context)=>{
    const {id}=context.params
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=c1fe0a5e08d1bf80be453d4b47b27699`)
    const data = await response.json()
    let list=Math.floor(Math.random()*100)
    const response2 = await fetch(`https://api.themoviedb.org/3/list/${list}?api_key=c1fe0a5e08d1bf80be453d4b47b27699`)
    const data2 = await response2.json()
    if(!data){
        return {
            notFound:true
        }
    }
    
    return {
        props:{
            movie:data,
            list:data2.items
        }
    }
}

let Movies =({movie,list})=>{
    return <>
    <MovieInfo movieInformation={movie} list={list}/>
    </>
}
export default Movies