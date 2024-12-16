import '../styles/index.scss';
import Lenis from '@studio-freight/lenis';
// import Observer from './classes/Observer';
import TextReveal from './animation/TextReveal';
import Button from './animation/Button';
import ParallaxImage from './animation/ParallaxImage';

class App {

    constructor() {
        // this._createObserver();
        this._createTextReveals();
        this._createButtons();
        this._createLenis();
        this._createParallaxImages();
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

    _createButtons() {
        const buttons = [...document.querySelectorAll('[data-animation="button"]')];
        buttons.forEach((button) => {
            new Button({
                element: button,
            });
        });
    }

    _createParallaxImages(){
        const images = [...document.querySelectorAll('[data-animation="parallax-image"]')];
        images.forEach((image) => {
            new ParallaxImage({
                imageSection: image,
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