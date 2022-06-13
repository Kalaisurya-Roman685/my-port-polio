import React, { Component } from "react";
import image1 from '../../../../assets/kalai-port/news.jpg';
import image2 from '../../../../assets/kalai-port/work1.avif';
import images3 from '../../../../assets/kalai-port/work2.avif';
import images4 from '../../../../assets/kalai-port/work3.avif';
import images5 from '../../../../assets/kalai-port/work4.avif';
import images6 from '../../../../assets/kalai-port/work5.avif';
import images7 from '../../../../assets/kalai-port/work6.avif';
import images8 from '../../../../assets/kalai-port/work7.avif';
import './styles/Testimonials.scss';
export default class Testimonials extends Component {
    constructor(props) {
        super(props);
        this.switchImage = this.switchImage.bind(this);

        this.state = {
            currentImage: 0,
            images: [
                images5,
                image2,
                images3,
                images4,
                image1,
                images6,
                images7,
                images8
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
        setInterval(this.switchImage, 4000);
    }
    render() {
        return (
            <>
                <div className="box">
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
            </>
        );
    }
}
