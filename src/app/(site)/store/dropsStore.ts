import { makeAutoObservable } from 'mobx';

class DropsStore {
    isProfileActive = false;
    constructor() {
        makeAutoObservable(this)
    }

    setIsProfileActive = (isActive: boolean) => {
        this.isProfileActive = isActive;
    }

}

export default new DropsStore();