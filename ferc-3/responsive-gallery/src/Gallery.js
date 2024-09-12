import React from 'react'
import './Gallery.css'

const Gallery = () => {

    const galleryItems = [
        { id: 1, title: 'Beautiful Landscape', price: '$30', image: 'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=' },
        { id: 2, title: 'Mountain View', price: '$40', image: 'https://media.istockphoto.com/id/482857481/photo/magnificent-mountain-panorama-snowy-peaks-high-above-clouds-himalayas-nepal.webp?b=1&s=612x612&w=0&k=20&c=GI4R1u6V1krrIQ1Iir1EBjpPvAbjLC42z3796YA4aKQ=' },
        { id: 3, title: 'City Lights', price: '$25', image: 'https://media.istockphoto.com/id/1285293445/photo/traffic-trails-in-financial-district.webp?b=1&s=612x612&w=0&k=20&c=s5bKvTa_J8S6wHY76GEZ7cdwIEMv32Hmxs--k_gBX_8=' },
        { id: 4, title: 'Sunset Beach', price: '$35', image: 'https://media.istockphoto.com/id/173250862/photo/beach-sunset.webp?b=1&s=612x612&w=0&k=20&c=oQutkbLsTyIIktXmYT7Fpb8vFzhoZo3WqubPeDPjRMU=' },
        { id: 5, title: 'Beautiful Flower', price: '$50', image: 'https://images.freeimages.com/images/large-previews/355/poppies-2-1334190.jpg?fmt=webp&w=500' },
        { id: 6, title: 'Lazy Dog', price: '$70', image: 'https://images.freeimages.com/images/large-previews/ab3/puppy-2-1404644.jpg?fmt=webp&w=500' },
        { id: 7, title: 'Butterfly', price: '$25', image: 'https://images.freeimages.com/images/large-previews/866/butterfly-1-1535829.jpg?fmt=webp&w=500' },
        { id: 8, title: 'Sunshine Beach', price: '$35', image: 'https://images.freeimages.com/variants/ARFoM1GQWRqUuBDXfvwPBvux/f4a36f6589a0e50e702740b15352bc00e4bfaf6f58bd4db850e167794d05993d?fmt=webp&w=500' },
    ]
  return (
    <div className='gallery'>
        {galleryItems.map((item)=>(
            <div className='gallery-card' key={item.id}>
                <img src={item.image} alt={item.title} className='gallery-image'/>
                <div className='gallery-info'>
                    <h3 className='gallery-title'>{item.title}</h3>
                    <p className="gallery-price">{item.price}</p>
                </div>
            </div>
        ))}
      
    </div>
  )
}

export default Gallery
