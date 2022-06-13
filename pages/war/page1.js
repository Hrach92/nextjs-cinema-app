import Link from 'next/link'
import movie from '../../styles/Movie.module.css'
export const getStaticProps = async () =>{
    const response = await fetch('https://api.themoviedb.org/3/list/10752?api_key=c1fe0a5e08d1bf80be453d4b47b27699')
    const data = await response.json()
 
    if(!data){
      return {
        notFound:true
      }
    }
    let animationMovies = data.items.filter(action=>action.genre_ids.find(i=>i==10752))
    return {
      props:{movieList:animationMovies}
    }
  }

  let War = ({movieList}) =>{
    return <>
    <div className={movie.container}>
        {movieList.map(({title,id,poster_path})=>{
            return <Link key={id} href={`/movies/${id}`}><div className={movie.cell}><a><img className={movie.image} src={`https://image.tmdb.org/t/p/w342${poster_path}`}/>{title}</a></div></Link>
        })}
    </div>
    </>
}
  export default War