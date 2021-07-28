import React, { Component } from "react"



export default class Card extends Component {
    constructor() {
        super()
        this.state = {
            value1: 0,

        }
    }

    render() {
        const handleClick1 = () => {
            this.setState(
                {
                    value: this.state.value1 += 1
                }
            )
        }
        return (
            <div className="card">
                <button className="btn1" onClick={handleClick1}>{this.state.value1}</button>

            </div>
        )
    }

}