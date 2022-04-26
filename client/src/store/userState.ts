import { makeAutoObservable, observable, makeObservable, action } from 'mobx';
import { User } from '../utils/types';



class UserState {
    private _isAuth: boolean = false;
    private _user: User | undefined;

    constructor() {
        makeAutoObservable(this);
    }

    
    public setAuth(authState : boolean) {
        this._isAuth = authState;
    }

    public setUser(user : User) {
        this._user = user;
    }

    
    public get isAuth() : boolean {
        return this._isAuth;
    }

    
    public get user() {
        return this._user;
    }
    
    

}

export default new UserState();