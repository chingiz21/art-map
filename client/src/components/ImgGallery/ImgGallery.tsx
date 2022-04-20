import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite';
// import imgState from '../../store/imgState';
import imgStateMobx from '../../store/imgState';
import './ImgGallery.css';

const ImgGallery = observer(() => {

    const onImgClickHandler = (src: string) => {
        imgStateMobx.selectImg(src);
    };


    return (
        <div className='wrapper__image-gallery'>
            <img className='big-img' src={imgStateMobx.selectedImage} alt="" />
            <div className='flexbox'>
                <div className="small-image_wrapper" onClick={() => onImgClickHandler('http://s1.fotokto.ru/photo/full/576/5765404.jpg')}>
                    <img className='flexbox__item small-image' src="http://s1.fotokto.ru/photo/full/576/5765404.jpg" alt="" />
                </div>
                <div className="small-image_wrapper" onClick={() => onImgClickHandler('https://img.tourister.ru/files/2/1/5/5/1/3/3/2/clones/870_653_fixedwidth.jpg')}>
                    <img className='flexbox__item small-image' src="https://img.tourister.ru/files/2/1/5/5/1/3/3/2/clones/870_653_fixedwidth.jpg" alt="" />
                </div>
                <div className="small-image_wrapper" onClick={() => onImgClickHandler('https://thereminder.ru/wp-content/uploads/2020/08/shutterstock_1159873882.jpg')}>
                    <img className='flexbox__item small-image' src="https://thereminder.ru/wp-content/uploads/2020/08/shutterstock_1159873882.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}
)

export default ImgGallery;