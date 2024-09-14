import React from 'react';
import { useState,useEffect } from 'react';

const ScrollEvent = () => {
    const [scrollPosition, setScrollPosition] = useState(0)

    useEffect(()=>{
        const handleScroll =()=>{
            setScrollPosition(window.scrollY)
        }
        window.addEventListener('scroll', handleScroll)

        return ()=> window.removeEventListener('scroll', handleScroll)
    },[])
  return (
    <div>
      <h1>Scroll Position: {scrollPosition}</h1>
      <p>Scroll to see the position change.</p>
      <div style={{ height: '200vh' }}></div> {/* Extra space to scroll */}
    </div>
  );
}

export default ScrollEvent;
