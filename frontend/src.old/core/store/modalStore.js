import { action, computed, observable } from 'mobx';

class ModalStore {
    @observable _show = false;

    @computed get isShow() {
        return this._show;
    }

    @action
    open() {
        this._show = true;
    }

    @action
    close() {
        this._show = false;
    }
}

const modalStore = new ModalStore();

export default modalStore;
export { ModalStore };