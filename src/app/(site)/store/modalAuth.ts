import { makeAutoObservable } from 'mobx';

class modalAuthStore {
    isActive = false;
    IsLoginWindow = true;
    constructor() {
        makeAutoObservable(this)
    }

    setIsActive = (isActive: boolean) => {
        this.isActive = isActive;
    }

    setIsLoginWindow = (isLogin: boolean) => {
        this.IsLoginWindow = isLogin;
    }
}

export default new modalAuthStore();