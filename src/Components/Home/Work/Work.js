import './Work.css'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef, useEffect } from "react"

gsap.registerPlugin(ScrollTrigger)

const HomeWork = () => {

    const image1 = useRef(null)
    const image3 = useRef(null)
    const heading = useRef(null)

    useEffect(() => {
        //image 1
        gsap.fromTo(image1.current, { y: 100 }, { y: -130, scrollTrigger: { trigger: image1.current, scrub: true, }, })

        //image 3
        gsap.fromTo(image3.current, { y: -50 }, { y: 100, scrollTrigger: { trigger: image3.current, scrub: true, }, })

        //heading scroll trigger opening
        gsap.fromTo(heading.current,
            { rotation: 6, opacity: 0, y: () => heading.current.clientHeight * .5 },
            { rotation: 0, y: 0, opacity: 1, duration: .7, ease: 'power4.easeOut', scrollTrigger: { trigger: heading.current, start: 'center bottom' } })
    }, [])

    const handleMouseEnter = (event) => {
        //play video
        const video = event.target.children[1]
        if (video ? video.classList.contains('video') : false)
            video.play()

        //animation
        const text = event.target.children[2].children[0]
        if (text) {
            gsap.killTweensOf(text)
            gsap.fromTo(text, { rotation: 10, opacity: 0, y: () => text.clientHeight * .5 }, { rotation: 0, y: 0, opacity: 1, duration: .7, ease: 'power4.easeOut' })
        }
    }

    const handleMouseLeave = (event) => {
        //pause video
        const video = event.target.children[1]
        if (video ? video.classList.contains('video') : false)
            video.pause()

        //animation
        const text = event.target.children[2].children[0]
        if (text) {
            gsap.killTweensOf(text)
            gsap.fromTo(text, { rotation: 0, opacity: 1, y: 0 }, { rotation: -10, y: -text.clientHeight, opacity: 0, duration: .5, ease: 'power4.easeOut' })
        }
    }

    return (
        <section className="column content-width" id="work-section">
            <div className="anim">
                <h1 ref={heading}>Cerámica</h1>
            </div>
            <div className="row">
                <div id="block-0" className="block" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <img src="/home/work/person-hands-fingers.jpg" height="3113" alt="Ottografie" loading="lazy" />
                    <video playsInline="" loop="loop" muted="muted" disablePictureInPicture="" className="video">
                        <source src="/home/hands-happiness.mp4" type="video/mp4" />
                    </video>
                    <div className="text-wrapper">
                        <p>
                            <span><strong>Manos Creativas -</strong></span>
                            <span>"Donde la pasión se encuentra con la habilidad."</span>
                        </p>
                    </div>
                </div>
                <div className="column" id="work-right-section">
                    <div className="row">
                        <svg viewBox="0 0 12 12" fill="#0D0E13" xmlns="http://www.w3.org/2000/svg" className="icon" data-v-669b4a84="">
                            <path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"></path>
                        </svg>
                        <span>Nosotros</span>
                    </div>
                    <p> Creemos en la magia de transformar<br />la arcilla en obras de arte funcionales.<br />combinando técnicas tradicionales con diseños<br />modernos para crear piezas únicas y personalizadas.</p>
                    <div id="block-1" className="block" ref={image1} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <img src="/home/work/grup-ceramic.jpeg" />
                        <video playsInline="" loop="loop" muted="muted" disablePictureInPicture="" className="video">
                            <source src="/home/6693575-uhd.mp4" type="video/mp4" />
                        </video>
                        <div className="text-wrapper">
                            <p>
                                <span><strong>Creación Colaborativa - </strong></span>
                                <span>"Trabajando juntos para crear piezas extraordinarias."</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div id="block-3" className="block" ref={image3} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <img src="/home/work/lathe-piece.jpeg" />
                    <video playsInline="" loop="loop" muted="muted" disablePictureInPicture="" className="video">
                        <source src="home/lathe-piece.mp4" type="video/mp4" />
                    </video>
                    <div className="text-wrapper">
                        <p>
                            <span><strong>Inspiración - </strong></span>
                            <span>"Explorando nuevas formas y texturas."</span>
                        </p>
                    </div>
                </div>
                <div id="block-2" className="block" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <img src="/home/work/brush-jar.jpeg" />
                    <video playsInline="" loop="loop" muted="muted" disablePictureInPicture="" className="video">
                        <source src="/home/shelf-brushes.mp4" type="video/mp4" />
                    </video>
                    <div className="text-wrapper">
                        <p>
                            <span><strong>{'Esmalte - '}</strong></span>
                            <span>"Cada detalle cuenta en el proceso de creación.</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeWork