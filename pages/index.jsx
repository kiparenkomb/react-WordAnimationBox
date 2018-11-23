import React, { Component } from 'react';

import WordAnimation from '../components/WordAnimation';
import VideoProcessing from '../components/VideoProcessing';

class Index extends Component {
    render() {
        return (
            <>
                <WordAnimation />
                <VideoProcessing />
            </>
        );
    }
}

export default Index;
