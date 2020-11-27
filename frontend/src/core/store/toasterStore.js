class ToasterStore {
    _optionsToaster = {
        autoClose: 8000,
        toastClassName: "toast-style",
    }

   get optionsToaster() {
        return this._optionsToaster
    }
}

const modalStore = new ToasterStore();

export default modalStore;
export { ToasterStore };