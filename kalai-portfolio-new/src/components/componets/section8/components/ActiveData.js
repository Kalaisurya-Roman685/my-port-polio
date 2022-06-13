import React, { Component } from 'react'
import per1 from '../../../../assets/kalai-port/per1.png';
import per2 from '../../../../assets/kalai-port/per2.png';
import per3 from '../../../../assets/kalai-port/per3.png';

import per5 from '../../../../assets/kalai-port/per10.png';
import per6 from '../../../../assets/kalai-port/per44.png';
import per7 from '../../../../assets/kalai-port/per55.png';
import per8 from '../../../../assets/kalai-port/per66.png';
import per9 from '../../../../assets/kalai-port/per77.png';
import per10 from '../../../../assets/kalai-port/per88.png';
import per11 from '../../../../assets/kalai-port/per99.png';

import './styles/Active.scss';
export default class ActiveData extends Component {
    constructor(props) {
        super(props);
        this.switchImage = this.switchImage.bind(this);

        this.state = {
            currentImage: 0,
            images: [
                per1,
                per2,
                per3,
                per5,
                per6,
                per7,
                per8,
                per9,
                per10,
                per11

            ],
        };
    }

    switchImage() {
        if (this.state.currentImage < this.state.images.length - 1) {
            this.setState({
                currentImage: this.state.currentImage + 1,
            });
        } else {
            this.setState({
                currentImage: 0,
            });
        }
        return this.currentImage;
    }

    componentDidMount() {
        setInterval(this.switchImage, 1500);
    }

    render() {
        return (

            <div className="boxs">
                <img
                    src={
                        this.state.images[
                        this.state.currentImage
                        ]
                    }
                    alt="cleaning images"
                    className="image-persons"
                />
            </div>

        )
    }
}
