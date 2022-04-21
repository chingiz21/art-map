import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite';
import imgStateMobx from '../../store/imgState';
import './ImgGallery.css';

// TODO: render big image as first element of fetched array of imgs
// Problem: imgs is undefined on render drawer, so application go on fatal error

type ImgGalleryType = {
    imgs: string[] | undefined
};

const ImgGallery = observer(({ imgs }: ImgGalleryType) => {

    console.log('image gallery render');

    const onImgClickHandler = (src: string) => {
        imgStateMobx.selectImg(src);
    };

    return (
        <div className='wrapper__image-gallery'>
            <img className='big-img' src={imgStateMobx.selectedImage} alt="" />
            <div className='flexbox'>
                {imgs?.map(image =>
                    <div key={image} className="small-image_wrapper" onClick={() => onImgClickHandler(image)}>
                        <img className='flexbox__item small-image' src={image} alt="" />
                    </div>
                )}
            </div>
        </div>
    )
}
)

export default React.memo(ImgGallery);