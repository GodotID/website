import { useRef, useState } from 'react';

import 'styles/gallery.css'

import NavBar from 'components/NavBar'

function GalleryItem({ imgsrc, title, desc }) {
    return (
        <li className='gallery__item'>
            <img src={imgsrc}></img>
            <div className='gallery__item__overlay'>
                <b>{title}</b>
                <p>{desc}</p>
            </div>
        </li>
    );
}

function Gallery() {
    return (
        <div className='gallery__gallery'>
            <NavBar />
            <div className='gallery__content'>
                <div className='gallery__hero'>
                    <h1>Galeri Komunitas</h1>
                    <p>Karya, kegiatan, dan penghargaan</p>
                </div>
                <ul className='gallery__masonry'>
                    {/* TODO: dynamic content loading, maybe we need server */}
                    <GalleryItem imgsrc={'https://picsum.photos/600/400'} title={'My Game'} desc={'A very great game with many developmental breakthrough'} />
                    <GalleryItem imgsrc={'https://picsum.photos/800/400'} title={'My Game'} desc={'A very great game with many developmental breakthrough'} />
                    <GalleryItem imgsrc={'https://picsum.photos/600/600'} title={'My Game'} desc={'A very great game with many developmental breakthrough'} />
                    <GalleryItem imgsrc={'https://picsum.photos/700/400'} title={'My Game'} desc={'A very great game with many developmental breakthrough'} />
                    <GalleryItem imgsrc={'https://picsum.photos/400/600'} title={'My Game'} desc={'A very great game with many developmental breakthrough'} />
                    <GalleryItem imgsrc={'https://picsum.photos/500/600'} title={'My Game'} desc={'A very great game with many developmental breakthrough'} />
                    <GalleryItem imgsrc={'https://picsum.photos/800/600'} title={'My Game'} desc={'A very great game with many developmental breakthrough'} />
                    <GalleryItem imgsrc={'https://picsum.photos/900/600'} title={'My Game'} desc={'A very great game with many developmental breakthrough'} />
                    <GalleryItem imgsrc={'https://picsum.photos/800/680'} title={'My Game'} desc={'A very great game with many developmental breakthrough'} />
                </ul>
            </div>
        </div>
    );
}

export default Gallery;