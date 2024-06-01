import { makeAutoObservable } from 'mobx';

class UserStore {
    _isAuth = false;
    _user: any
    constructor() {
        makeAutoObservable(this)
    }

    setIsAuth(bool: boolean) {
        this._isAuth = bool;
    }

    setUser(user:any) {
        this._user = user;
    }

    get isAuth() {
        return this._isAuth;
    }

    get user() {
        return this._user;
    }

    get isAdmin() {
        return this._user.role === 'ADMIN';
    }

}
const userStore = new UserStore();
export default userStore;

