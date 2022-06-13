import {Link} from "react-scroll"
import {BsChevronUp,BsChevronDown} from 'react-icons/bs'
import movie from '../../styles/Movie.module.css'

function Footer () {
    return <footer id='down'>
        <div className={movie.up}><Link to="up" smooth={true} duration={500}><BsChevronUp/></Link></div>
        <div className={movie.down}><Link to="down" smooth={true} duration={500}><BsChevronDown/></Link></div>
    </footer>
}
export default Footer