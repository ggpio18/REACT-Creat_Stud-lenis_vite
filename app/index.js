import '../styles/index.scss';
import Lenis from '@studio-freight/lenis';
// import Observer from './classes/Observer';
import TextReveal from './animation/TextReveal';

class App {

    constructor() {
        // this._createObserver();
        this._createTextReveals();
        this._createLenis();
        this._render();
    }

    _createTextReveals() {
        const textItems = [...document.querySelectorAll('[data-animation="text-reveal"]')];
        textItems.forEach(text => {
            new TextReveal({
                element: text,
            });
        });
    }

    // _createObserver(){
    //     const texts = [...document.querySelectorAll('h2')]

    //     texts.forEach(text => {
    //         new Observer({
    //             element: text,
    //         });
    //     });
    // }

    _createLenis() {
        this.Lenis = new Lenis({
            lerp: 0.15,
        });
    }

    _render(time) {
        this.Lenis.raf(time);

        requestAnimationFrame(this._render.bind(this));
    }

} //end tag



const app = new App();