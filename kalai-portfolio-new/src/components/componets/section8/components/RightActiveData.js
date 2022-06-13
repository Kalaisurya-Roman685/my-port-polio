import React, { Component } from 'react'

export default class RightActiveData extends Component {
    constructor(props) {
        super(props);
        this.switchImage = this.switchImage.bind(this);
        this.state = {
            currentImage: 0,
            texts: [
                "MUSIC 🎵",
                "SCOOTERING 🛵",
                "MOBILE USING 📱",
                "WAITING 😊",
                "TRAVELLING ✈️",
                "THINKING 🤔",
                "STANDING 🧍",
                "POWER 🔋",
                "COFFEE ☕",
                "WORKING 🧑‍💼",
            ],
        };
    }
    switchImage() {
        if (this.state.currentImage < this.state.texts.length - 1) {
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
            <div>
                <p
                    className="text-sizes mb-3 mt-5"
                // style={{ color: this.props.color }}
                >
                    {this.state.texts[this.state.currentImage]}
                </p>
            </div>
        )
    }
}
