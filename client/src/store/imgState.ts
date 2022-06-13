import { makeAutoObservable, observable, makeObservable, action } from 'mobx';

class ImgState {

    // selectedImage = '';

    selectedImage: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Valdau.jpg/1280px-Valdau.jpg';

    constructor() {
        makeAutoObservable(this);
    }

    selectImg(src: string) {
        this.selectedImage = src;
    }
}

export default new ImgState();