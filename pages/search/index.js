import { useState } from "react"
import movie from '../../styles/Movie.module.css'
import Link from 'next/link'
import { useEffect } from "react"

function Result({filter}){
    const [search,setSearch]=useState('')
    return search?<div className={movie.container}>
        {console.log('h')}
        {search.map(({title,id,poster_path})=>{
            return <Link key={id} href={`/movies/${id}`}><div className={movie.cell}><a><img className={movie.image} src={`https://image.tmdb.org/t/p/w342${poster_path}`}/>{title}</a></div></Link>
        })}
    </div>:'Not Found'
}
export default Result