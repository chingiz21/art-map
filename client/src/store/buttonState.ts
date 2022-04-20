import { makeAutoObservable } from "mobx";

class ButtonState {
    drawerState: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    toggleDrawer(): void {
        this.drawerState = !this.drawerState;
        console.log(this.drawerState);
    }

}

export default new ButtonState();