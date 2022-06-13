import { useRouter } from "next/router"
import { useEffect } from "react"

const Error=()=>{
    const router = useRouter()
    useEffect(()=>{
        setTimeout(()=>{
            router.push('/')
        },3000)
    })
    return <>
    <img className="image" src="https://miro.medium.com/max/800/1*hFwwQAW45673VGKrMPE2qQ.png"/>
    <style jsx>{`
        .image{
            margin-left:15px;
            width:1240px;
            height:500px
        }
    `}</style>
    </>
}
export default Error