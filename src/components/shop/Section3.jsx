import React from 'react'
import styles from './shop.module.css'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Section3 = () => {
    useGSAP(()=>{
        document.querySelectorAll('#title-main-wrap h2').forEach((h) => {
            var clutter = ""
            h.textContent.split("").forEach((letter, i) => {
                clutter += `<span>${letter}</span>`
            })
            h.innerHTML = clutter
        });
        const tl = gsap.timeline()
        tl.fromTo('#title-main-wrap h2 span',{
            transform: "rotateX(90deg)",
        } ,{
            duration: .8,
            transform:"rotateX(0deg)",
            stagger: 0.05,
            // ease: "power2.out",
            ease: "bounce.out",
            delay:.8
        })
         const tl2 = gsap.timeline({
              scrollTrigger: {
                trigger: "#imageContainer2",
                scroller: "body",
                start: "top 80%",
                end: "top 40%",
                // scrub: true,
                // markers: true
              }
            })
            tl2.fromTo('#imgCardSec31', {
              y: -600,
              scale: 0.8,
              opacity: 0,
            }, {
              y: 0,
              scale: 1,
              opacity: 1,
              duration: 1.2,
              ease: "power2.out"
            })
            tl2.fromTo('#imgCardSec32', {
                y: -700,
                scale: 0,
                opacity: 0,
              }, {
                y: 0,
                scale: 1,
                opacity: 1,
                duration: 1.5,
                delay: -0.2,
                ease: "power2.out"
              })
              setTimeout(() => {
                    ScrollTrigger.refresh();
                  }, 50)
    },[])
    return (
        <div className={styles.shopSection3}>
            <Image width={1000} height={1000} src="/shop/shop-banner1.webp" alt='image'/>
            <div className={styles.overlay3}>
                <div id='title-main-wrap'>
                    <h2>Discover New</h2>
                    <h2>Collection!</h2>
                </div>
                <div className={styles.Section33Btm}>
                    <p>Find which careers match <br />
                        your personality.</p>
                    <h3>Take the Quiz and receive <br />
                        recommendations just <br />
                        for You!</h3>
                    <h2 className={styles.titleh2}>you will get:</h2>
                    <div className={styles.imageContainer2} id='imageContainer2'>
                        <div className={styles.imgCardSec3} id='imgCardSec31'>
                            <Image width={1000} height={1000} src="https://emmpo.com/assets/19fe6ba1416662966d9a.png" alt='image'/>
                            <p><span>Top 15+</span> tech and sustainability careers for your personality.</p>
                        </div>
                        <div className={styles.imgCardSec3} id='imgCardSec32'>
                            <Image width={1000} height={1000} src="https://emmpo.com/assets/4ad5ec5a3db01004cdd0.png" alt='image'/>
                            <p><span>Top 15+</span> tech and sustainability careers for your personality.</p>
                        </div>
                        <Image width={1000} height={1000} src="https://emmpo.com/assets/0a541af8d51a8cd9d385.png" alt='image'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section3