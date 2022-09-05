import React, { Component } from 'react'

class LikeButton extends Component {

    constructor(props) {
        super(props)

        this.state = {
            likes: 100,
            hasLiked: false
        }
    }

    handleLike = () => {
        if(!this.state.hasLiked){
            this.setState({
                hasLiked: true
            })
        } else {
            this.setState({
                hasLiked: false
            })
        }
    }

    render() {

        const classLikeButton = `like-button ${this.state.hasLiked ? 'liked' : ''}`

        return (
            <div>
                <h2>Like Button Challenge</h2>
                <button className={classLikeButton} onClick={this.handleLike}>
                    Like | <span className='likes-counter'>{this.state.hasLiked ? this.state.likes + 1 : this.state.likes}</span>
                </button>
            </div>
        )
    }
}

export default LikeButton