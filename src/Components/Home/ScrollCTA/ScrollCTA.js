import { useEffect, useState, useRef } from 'react'
import './ScrollCTA.css'
import gsap from 'gsap'

const ScrollCTA = () => {

    const [setOpacity] = useState(.5)

    const handleScroll = () => {
        const opacity = window.scrollY > 100 ? 0 : .5
        setOpacity(opacity)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])


}

export default ScrollCTA