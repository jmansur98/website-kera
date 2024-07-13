import './LoadingScreen.css'
import { useEffect, useRef } from 'react'

const LoadingScreen = ({ setLoadingVisible }) => {

    const container = useRef(null)
    const imgRef = useRef(null)

    useEffect(() => {
        setTimeout(() => {
            // Ocultar la imagen
            imgRef.current.style.opacity = 0

            // Transición del contenedor
            container.current.style.clipPath = 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)'

            // Actualizar la visibilidad del contenedor
            setTimeout(() => {
                setLoadingVisible(false)
            }, 900)
        }, 2300)
    }, [setLoadingVisible])

    return (
        <div className="loading-container center loading-transition" ref={container}>
            <img src="/logk.jpg" alt="Loading" ref={imgRef} className="loading-image" />
        </div>
    )
}

export default LoadingScreen
