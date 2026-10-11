import { useState } from 'react';

import 'styles/gallery.css'

import NavBar from 'components/NavBar'
import Footer from 'components/Footer'

import items from 'misc/gallery.generated.json'

function GalleryItem({ item }) {
    const [src, setSrc] = useState(item.img || item.imgFallback);

    function handleImageError() {
        if (item.imgFallback && src !== item.imgFallback) {
            setSrc(item.imgFallback);
        }
    }

    return (
        <li className='gallery__item'>
            <a
                className='gallery__item__link'
                href={item.url}
                target='_blank'
                rel='noopener noreferrer'
            >
                {src
                    ? <img
                        className='gallery__item__image'
                        src={src}
                        alt={`Karya ${item.title} oleh ${item.author}`}
                        loading='lazy'
                        width={item.width || undefined}
                        height={item.height || undefined}
                        onError={handleImageError}
                    />
                    : <span className='gallery__item__placeholder'>{item.title}</span>
                }
                <span className='gallery__item__overlay'>
                    <b>{item.title}</b>
                    {item.desc ? <p>{item.desc}</p> : null}
                    <span className='gallery__item__meta'>
                        {item.author} &middot; {item.jam}
                    </span>
                </span>
            </a>
        </li>
    );
}

function Gallery() {
    return (
        <div className='gallery__gallery'>
            <NavBar color='secondary'/>
            <div className='gallery__content'>
                {items.length === 0
                    ? <p className='gallery__empty'>
                        Belum ada karya yang bisa ditampilkan di sini.
                    </p>
                    : <ul className='gallery__masonry'>
                        {items.map((item) => (
                            <GalleryItem item={item} key={item.url} />
                        ))}
                    </ul>
                }
            </div>
            <Footer />
        </div>
    );
}

export default Gallery;
