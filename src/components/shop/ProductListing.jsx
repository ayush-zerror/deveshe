import React, { useEffect, useState } from 'react'
import styles from './shop.module.css'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(ScrollTrigger)
const ProductListing = () => {
  const products = [
    {
      image1: "/product/Emerald Kaftan top (2).jpeg",
      image2: ""
    },
    {
      image1: "/product/Gold crochet bib (2).jpeg",
      image2: ""
    },

    {
      image1: "/product/Ombré blue magia sleeve dress (1).jpeg",
      image2: ""
    },
    {
      image1: "/product/Ombré crochet patch dress- Brown (1).JPG",
      image2: ""
    },
    {
      image1: "/product/Emerald Kaftan top (2).jpeg",
      image2: ""
    },
    {
      image1: "/product/Golden fishnet crochet bag.jpeg",
      image2: ""
    },
    {
      image1: "/product/Emerald Kaftan top (2).jpeg",
      image2: ""
    },
    {
      image1: "/product/Gold crochet bib (2).jpeg",
      image2: ""
    },

    {
      image1: "/product/Ombré blue magia sleeve dress (1).jpeg",
      image2: ""
    },
    {
      image1: "/product/Ombré crochet patch dress- Brown (1).JPG",
      image2: ""
    },
    {
      image1: "/product/Emerald Kaftan top (2).jpeg",
      image2: ""
    },
    {
      image1: "/product/Golden fishnet crochet bag.jpeg",
      image2: ""
    },
    {
      image1: "/product/Emerald Kaftan top (2).jpeg",
      image2: ""
    },
    {
      image1: "/product/Gold crochet bib (2).jpeg",
      image2: ""
    },

    {
      image1: "/product/Ombré blue magia sleeve dress (1).jpeg",
      image2: ""
    },
    {
      image1: "/product/Ombré crochet patch dress- Brown (1).JPG",
      image2: ""
    },
    {
      image1: "/product/Emerald Kaftan top (2).jpeg",
      image2: ""
    },
    {
      image1: "/product/Golden fishnet crochet bag.jpeg",
      image2: ""
    },
  ]
  const [displayedProducts, setDisplayedProducts] = useState(products);

  useGSAP(() => {
    if (window.innerWidth > 576) return;
    const strip1Height = document.querySelector("#productStrip1").getBoundingClientRect().height/2
    const strip2Height = document.querySelector("#productStrip2").getBoundingClientRect().height
    const productContHeight = document.querySelector("#productCont").getBoundingClientRect().height

    const strip1Value = strip1Height - productContHeight
    const strip2Value = strip2Height - productContHeight

    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#productListing',
        scroller: "body",
        start: '35.3% 65px',
        end: '35.3% -120%',
        scrub: 1,
        // markers: true,
        pin: true
      }
    })

    tl
    .to('#productStrip1', {
      transform: `translateY(-56%)`,
      duration: 1.4,
    },"a")
    .to('#productStrip2', {
      transform: `translateY(-61.5%)`,
      duration: 1.4,
    },"a");

  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 576) {
        setDisplayedProducts(products.slice(0, 10));
      } else {
        setDisplayedProducts(products);
      }
    };

    handleResize(); // check on mount

    window.addEventListener('resize', handleResize); // update on resize
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className={styles.productListing} id='productListing'>
      <Link href="/product?id=6752e99c935fd014e82be779" className={styles.leftProCon}>
        <Image width={1000} height={1000} alt='image' src="/product/Ombré yellow wrap shirt.jpeg" />
        {/* <div className={styles.overlayLeftp}>
          <Image width={1000} height={1000} src="https://www.datocms-assets.com/136001/1727704761-vazzi-water-based-lubricant-100ml-bottle.png?auto=format&fit=crop&h=620&w=520" alt='image' />
        </div> */}
      </Link>
      <div className={styles.rightProCon} id='productCont'>
          <div className={styles.rightProConWrap} >
            {
              displayedProducts.map((product, index) => (
                <Link href={`/product?id=6752e99c935fd014e82be779`} key={index} className={styles.productCard}>
                  <Image width={1000} height={1000} alt='image' src={product.image1} />
                </Link>
              ))
            }
          </div>
          <div className={styles.rightProConStrip} id="productStrip1">
            {
              displayedProducts.slice(0, 7).map((product, index) => (
                <Link href={`/product?id=6752e99c935fd014e82be779`} key={index} className={styles.productCard}>
                  <Image width={1000} height={1000} alt='image' src={product.image1} />
                </Link>
              ))
            }
          </div>
          <div className={styles.rightProConStrip} id="productStrip2">
            {
              displayedProducts.reverse().slice(0, 8).map((product, index) => (
                <Link href={`/product?id=6752e99c935fd014e82be779`} key={index} className={styles.productCard}>
                  <Image width={1000} height={1000} alt='image' src={product.image1} />
                </Link>
              ))
            }
          </div>
      </div>
    </div>
  )
}

export default ProductListing