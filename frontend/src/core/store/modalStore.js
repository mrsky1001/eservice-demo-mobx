import { action, computed, observable } from 'mobx';

class ModalStore {
    @observable show = false;

    @computed get isShow() {
        console.log("isShow")
        return this.show;
    }

    @action('toggle left panel')
    open() {
        console.log("open")
        this.show = true;
    }

    @action('show left panel')
    close() {
        console.log("clos")

        this.show = false;
    }
}

const modalStore = new ModalStore();

export default modalStore;
export { ModalStore };