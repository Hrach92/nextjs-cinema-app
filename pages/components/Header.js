import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { BiMenu } from 'react-icons/bi'
import { RiCloseCircleLine } from 'react-icons/ri'
import movie from '../../styles/Movie.module.css'
import {FaHome} from 'react-icons/fa'
import Result from "../search"
const genres = [
    { id: 2, name: 'Popular', path: '/' },
    { id: 28, name: 'Action', path: '/action/page1' },
    { id: 12, name: 'Adventure', path: '/adventure/page1' },
    { id: 16, name: 'Animation', path: '/animation/page1' },
    { id: 35, name: 'Comedy', path: '/comedy/page1' },
    { id: 80, name: 'Crime', path: '/crime/page1' },
    { id: 18, name: 'Drama', path: '/drama/page1' },
    { id: 10751, name: 'Family', path: '/family/page1' },
    { id: 14, name: 'Fantasy', path: '/fantasy/page1' },
    { id: 36, name: 'History', path: '/history/page1' },
    { id: 27, name: 'Horror', path: '/horror/page1' },
    { id: 10402, name: 'Music', path: '/music/page1' },
    { id: 9648, name: 'Mystery', path: '/mystery/page1' },
    { id: 10749, name: 'Romance', path: '/romance/page1' },
    { id: 53, name: 'Thriller', path: '/thriller/page1' },
    { id: 10752, name: 'War', path: '/war/page1' },
    { id: 37, name: 'Western', path: '/western/page1' },
]
function Header() {
    const router = useRouter()
    const [close, setClose] = useState(true)
    return <div id="up" onChange={()=>setClose(true)}>
        {close ? <button className={movie.btn} onClick={() => {
            setClose(false)
        }}><BiMenu /></button> :
            <div>
                <button className={movie.btn} onClick={() => {
                    setClose(true)
                }}><RiCloseCircleLine /></button>
                <div className={movie.genres} onClick={()=>setClose(true)}>{genres.map(({ id, name, path }) => {
                    return <Link key={id} href={path}><div className={router.pathname == path ? movie.active : movie.genre}><a>{name}</a></div></Link>
                })}</div>
            </div>}<Link href={`/`} key={1}><strong className={movie.homeIcon}><FaHome/></strong></Link>
            <div onClick={() => {
                return setClose(true)
            }} className={movie.home}></div>
    </div>
}
export default Header