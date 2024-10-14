import {useState} from "react";

export default function Gallery({gallery}) {
    const [imageIndex, setImageIndex] = useState(0);

    return (
        <div className="gallery">
            {
                gallery && gallery.images &&
                <>
                    <button onClick={() => setImageIndex((imageIndex - 1 + gallery.images.length) % gallery.images.length)}><i
                        className={"arrow left"}></i></button>
                    {
                        gallery.images &&
                        <div className="galleryImage">
                            <div className="galleryImageContainer">
                                <img src={gallery.images[imageIndex].src} alt={gallery.images[imageIndex].description}/>
                            </div>
                            <div
                                className="image-description">Image {imageIndex + 1}/{gallery.images.length} - {gallery.images[imageIndex].description}</div>
                        </div>
                    }
                    <button onClick={() => setImageIndex((imageIndex + 1) % gallery.images.length)}><i
                        className={"arrow right"}></i></button>
                </>
            }
        </div>
    )
}