import movieInfo from '../../styles/Movie.module.css'
import { BiPlay } from 'react-icons/bi'
import {AiFillStar} from 'react-icons/ai'
import Link from 'next/link'
import { useState } from 'react'
const MovieInfo = ({ movieInformation, list }) => {
    let { overview, release_date, vote_average, vote_count, title, tagline, poster_path, genres } = movieInformation || {}
    const [unclicked,setUnclicked]=useState(true)
    const [voteCount,setVoteCount] = useState(vote_count)
    return <div>
        <div className={movieInfo.movieContainer}>
            <div className={movieInfo.con}><img className={movieInfo.img} src={`https://image.tmdb.org/t/p/w342${poster_path}`} /></div>
            <div className={movieInfo.description}>
                <div className={movieInfo.title}>{title}</div>
                <div className={movieInfo.tagline}>{tagline}</div>
                <div className={movieInfo.rate}><div>
                <span className={unclicked?movieInfo.star:null} onClick={()=>{
                    return setUnclicked(false),setVoteCount((vote_count+1))
                }}>
                <AiFillStar className={movieInfo.stars} style={vote_average>2?{color:'yellow'}:null}/>
                <AiFillStar style={vote_average>3.5?{color:'yellow'}:null}/>
                <AiFillStar style={vote_average>5.5?{color:'yellow'}:null}/>
                <AiFillStar style={vote_average>7.5?{color:'yellow'}:null}/>
                <AiFillStar style={vote_average>9?{color:'yellow'}:null}/>
                </span>
                <span>{vote_average}</span>/<span>{voteCount}</span></div>
                <div>{release_date}</div></div>
                <div><strong>GENRES</strong><div className={movieInfo.genreInfo}>{genres.map(({ name, id }) => {
                    return <Link key={id} href={`/${name.toLowerCase()}/page1`}><div><BiPlay />{name.toUpperCase()}</div></Link>
                })}</div></div>
                <div className={movieInfo.overview}>{overview}</div>
            </div>
        </div>
        {list.length!==0?<div><span className={movieInfo.recommendedText}>YOU MAY ALSO LIKE THIS</span>
            <div className={movieInfo.recommended}>{list.map(({ title, id, poster_path }) => {
                return <Link key={id} href={`${id}`}><div className={list.length > 6 ? movieInfo.cell2 : null}><img className={movieInfo.image_2} src={`https://image.tmdb.org/t/p/w342${poster_path}`} title={title} /><a></a></div></Link>
            })}
            </div>
        </div>:null}
    </div>
}
export default MovieInfo