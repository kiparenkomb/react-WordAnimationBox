import React, { Component } from 'react';

import { TweenMax } from 'gsap';
import ScrollMagic from 'scrollmagic';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';

import './styles.scss';

class WordAnimation extends Component {
    state =  {
        textAnimation: 'We’re passionate about developing and delivering disruptive denim stories. A place where innovation and creativity can thrive, hand in hand, we’re the pioneers of endless denim possibilities.',
    };

    componentDidMount() {
        let wordController = new ScrollMagic.Controller();
        let wordTween = TweenMax.staggerTo('.WordAnimation-word', .05, {opacity: 1}, .05);

        let wordScene = new ScrollMagic.Scene({
            triggerElement: '.WordAnimation',
            duration: 0,
            offset: 0,
            reverse: false,
        });
        wordScene
            .setTween(wordTween)
            .addTo(wordController);
    }

    render() {
        const { textAnimation } = this.state;
        const wordSet = textAnimation.split(" ");
        const wordBoxes = wordSet.map((post, index) => {
            return (
                <span
                    key = { index }
                    className="WordAnimation-word"
                >
                    { post }
                </span>
            );
        });
        return (
            <section className="WordAnimation">
                <div className="WordAnimation-box">
                    { wordBoxes }
                </div>
            </section>
        );
    }
}

export default WordAnimation;
