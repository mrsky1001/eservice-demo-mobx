import { action, computed, observable } from 'mobx';

class ModalStore {
    @observable public _show = false;

    @computed public get isShow() {
        return this._show;
    }

    @action
    public open() {
        this._show = true;
    }

    @action
    public close() {
        this._show = false;
    }
}

const modalStore = new ModalStore();

export default modalStore;
export { ModalStore };
