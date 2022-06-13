import { useState } from "react"
import movie from '../../styles/Movie.module.css'
import Link from 'next/link'
import { useEffect } from "react"

function Result({filter}){
    const [search,setSearch]=useState('')
    useEffect( ()=>{
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=c1fe0a5e08d1bf80be453d4b47b27699&language=en-US&query=${filter}`).then(e=>{
            return e.json()
        }).then(e=>{
            
            return setSearch(e.results)
        })
    },[search])
    return search?<div className={movie.container}>
        {search.map(({title,id,poster_path})=>{
            return <Link key={id} href={`/movies/${id}`}><div className={movie.cell}><a><img className={movie.image} src={`https://image.tmdb.org/t/p/w342${poster_path}`}/>{title}</a></div></Link>
        })}
    </div>:'Not Found'
}
export default Result