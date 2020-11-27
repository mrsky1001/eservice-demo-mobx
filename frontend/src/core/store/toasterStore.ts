class ToasterStore {
    public _optionsToaster = {
        autoClose: 8000,
        toastClassName: 'toast-style',
    };

   public get optionsToaster() {
        return this._optionsToaster;
    }
}

const modalStore = new ToasterStore();

export default modalStore;
export { ToasterStore };
