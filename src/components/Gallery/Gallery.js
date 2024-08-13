import Lightbox from 'react-image-lightbox';
import { useState } from 'react';
import {imgAsg, imgDron, imgTravel} from './GalleryImport'
import 'react-image-lightbox/style.css';

const Gallery = () => {

    const [imagesOpen, setImagesOpen] = useState([false, false, false])
    const [photoIndex, setPhotoIndex] = useState(0)

    const description = [
        'This is my hobby for several years, guns and forest - perfect connection!', 
        'Flying a drone is a really relaxing activity, you can see world from the other perspective!', 
        'Mountains? Sea? Lake? Whatever, everywhere is fine!'
    ]

    return (
        <div className="hobby" >
            <h1>HOBBY</h1>
            <div className="hobby_div" onClick={() => setImagesOpen([true, false, false])}>
                <img className="hobby-img" src={imgAsg[0]} alt='asg'/>
                <div className="hobby-des big">
                    <div className="hobby-text">{description[0]}</div>
                </div>
            </div>
            <div className="hobby_div" onClick={() =>setImagesOpen([false, true, false])}>
                <img className="hobby-img" src={imgDron[0]} alt='drone'/>
                <div className="hobby-des small">
                    <div className="hobby-text">{description[1]}</div>
                </div>
            </div>
            <div className="hobby_div" onClick={() => setImagesOpen([false, false, true])}>
                <img className="hobby-img" src={imgTravel[0]} alt='travel'/>
                <div className="hobby-des big">
                    <div className="hobby-text">{description[2]}</div>
                </div>
            </div>
            {imagesOpen[0] && (
                <Lightbox
                    mainSrc={imgAsg[photoIndex]}
                    nextSrc={imgAsg[(photoIndex + 1) % imgAsg.length]}
                    prevSrc={imgAsg[(photoIndex + imgAsg.length - 1) % imgAsg.length]}
                    onCloseRequest={() => {
                        setImagesOpen([false, false, false]);
                        setPhotoIndex([0]);
                    }}
                    onMovePrevRequest={() => setPhotoIndex((photoIndex + imgAsg.length - 1) % imgAsg.length)}
                    onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % imgAsg.length)}
                />
            )}
            {imagesOpen[1] && (
                <Lightbox
                    mainSrc={imgDron[photoIndex]}
                    nextSrc={imgDron[(photoIndex + 1) % imgDron.length]}
                    prevSrc={imgDron[(photoIndex + imgDron.length - 1) % imgDron.length]}
                    onCloseRequest={() => {
                        setImagesOpen([false, false, false]);
                        setPhotoIndex([0]);
                    }}
                    onMovePrevRequest={() => setPhotoIndex((photoIndex + imgDron.length - 1) % imgDron.length)}
                    onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % imgDron.length)}
                />
            )}
            {imagesOpen[2] && (
                <Lightbox
                    mainSrc={imgTravel[photoIndex]}
                    nextSrc={imgTravel[(photoIndex + 1) % imgTravel.length]}
                    prevSrc={imgTravel[(photoIndex + imgTravel.length - 1) % imgTravel.length]}
                    onCloseRequest={() => {
                        setImagesOpen([false, false, false]);
                        setPhotoIndex([0]);
                    }}
                    onMovePrevRequest={() => setPhotoIndex((photoIndex + imgTravel.length - 1) % imgTravel.length)}
                    onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % imgTravel.length)}
                />
            )}
        </div>
    )
}

export default Gallery;