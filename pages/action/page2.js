import movie from '../../styles/Movie.module.css'
import Link from 'next/link'
export const getStaticProps = async () =>{
    const response = await fetch('https://api.themoviedb.org/3/list/1?api_key=c1fe0a5e08d1bf80be453d4b47b27699')
    const data = await response.json()
 
    if(!data){
      return {
        notFound:true
      }
    }
    let actionMovies = data.items.filter(action=>action.genre_ids.find(i=>i==28)).slice(20,40)
    return {
      props:{movieList:actionMovies}
    }
  }
let Page2=({movieList})=>{
    return <>
          <div className={movie.container}>
          {movieList.map(({title,id,poster_path})=>{
              return <Link key={id} href={`/movies/${id}`}><div className={movie.cell}><a><img className={movie.image} src={`https://image.tmdb.org/t/p/w342${poster_path}`}/>{title}</a></div></Link>
          })}
          <div className={movie.pages} ><Link href={'page1'}><span>1</span></Link><span style={{color:'blue',fontSize:'1.3em'}}>2</span><Link href={'page3'}><span>3</span></Link></div>
      </div>
    </>
}
export default Page2