import React from "react";
import PropTypes from 'prop-types';


export default class TrackItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
    
        return (
            <li className="track__item">
            <a className="track__link" href={this.props.obj.spotifyLink}>{this.props.obj.name}</a>
            <p>duration:{this.props.obj.duration}</p>
            <p>popularity:{this.props.obj.popularity}</p>
            <p>albumName:{this.props.obj.albumName}</p>
            <p>albumSpotifyLink:{this.props.obj.albumSpotifyLink}</p>
            <p>artistName:{this.props.obj.artistName}</p>
            <p>artistSpotifyLink:{this.props.obj.artistSpotifyLink}</p>
            
            </li>
        )
    }

}

TrackItem.propTypes  = {
    name : PropTypes.string,
    spotifyLink: PropTypes.string,
    duration: PropTypes.number,
    popularity: PropTypes.number,
    albumName : PropTypes.string,
    albumSpotifyLink : PropTypes.string,
    artistName : PropTypes.string,
    artistSpotifyLink: PropTypes.string
}