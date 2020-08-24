import React from "react";
import PropTypes from 'prop-types';



export default class ArtistItem extends React.Component {
    constructor(props) {
        super(props);
    }
    

    render() {
        // const { name, spotifyLink, genres, image } = this.state;
        return (
            <li className="artist__item">
            <a className="artist__link" href={this.props.itemObj.spotifyLink}>{this.props.itemObj.name}</a>
            <img className="artist__img" alt="фотография группы Muse" src={this.props.itemObj.image}></img>
            </li>
        )
    }

}

ArtistItem.propTypes = {
    name: PropTypes.string,
    spotifyLink: PropTypes.string, 
    genres: PropTypes.arrayOf(PropTypes.string),  
    image: PropTypes.array,  
}