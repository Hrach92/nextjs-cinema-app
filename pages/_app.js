import { useState } from 'react'
import '../styles/globals.css'
import Layout from './components/Layout'
import Link from 'next/link'
import {BiSearchAlt} from 'react-icons/bi'
function MyApp({ Component, pageProps }) {
  const [text,setText]=useState('')
  const [filter, setFilter] = useState('')
  return <>
    <Layout >
      <div className='form'>
        <div><input className='input' type='text' placeholder='Search...' value={text} onChange={(e) => {
          return setText(e.target.value)
        }} /></div>
        <button className='btn' onClick={()=>{
          return setFilter(text),setText('')}}><Link href='/search'><BiSearchAlt/></Link></button>
      </div>
      <Component {...pageProps} filter={filter} />
    </Layout>
  </>
}

export default MyApp
