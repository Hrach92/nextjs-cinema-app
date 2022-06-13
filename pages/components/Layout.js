import Header from "./Header"
import Footer from "./Footer"
import Link from "next/link"
import { getStaticProps } from "../romance/page1"
import { useState } from "react"

function Layout ({children}){
    return <>
    <Header id='header'/>
    {children}
    <Footer/>
    </>
}
export default Layout