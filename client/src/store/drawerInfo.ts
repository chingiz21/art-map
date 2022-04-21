import { makeAutoObservable } from "mobx";

type AuthorType = {
    name: string,
    instagramLink?: string,
    vkLink?: string
}

type ArtObjectType = {
    id: number,
    title: string,
    description: string,
    imgs: string[],
    wikiLink: string,
    mapsLink: string,
    authorInfo: AuthorType
}

class DrawerInfo {
    artObject?: ArtObjectType;

    constructor() {
        makeAutoObservable(this);
    }

    setArtObject(fetchedArtObject: ArtObjectType) {
        this.artObject = fetchedArtObject;
    }

}

export default new DrawerInfo();