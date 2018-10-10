export default class Loader {
    constructor() {
        this.loader = document.querySelector('#loader');
    }
    onComplete() {
        this.loader.classList.add('loaded')
    }
}