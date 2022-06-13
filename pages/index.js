import Head from 'next/head'
import Image from 'next/image'
import movie from '../styles/Movie.module.css'
import Link from 'next/link'
 export const getStaticProps = async () =>{
   const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=c1fe0a5e08d1bf80be453d4b47b27699')
   const data = await response.json()
   if(!data){
     return {
       notFound:true
     }
   }
   return {
     props:{
      popular:data.results
   }
 }
}
let Home=({popular,filter})=> {
  return <div className={movie.container}>
    {popular.map(({title,id,poster_path})=>{
      return <Link key={id} href={`movies/${id}`}><div className={movie.cell}><a><img className={movie.image} src={`https://image.tmdb.org/t/p/w342${poster_path}`}/>{title}</a></div></Link>
    })}
  </div>
}
export default Home