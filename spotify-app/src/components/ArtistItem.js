import React from "react";
import PropTypes from 'prop-types';



// export default class ArtistItem extends React.Component {
//     constructor(props) {
//         super(props);
//     }
    

//     render() {
//         // const { name, spotifyLink, genres, image } = this.state;
//         return (
//             <li className="artist__item">
//             <a className="artist__link" href={this.props.itemObj.spotifyLink}>{this.props.itemObj.name}</a>
//             <img className="artist__img" alt="фотография группы Muse" src={this.props.image}></img>
//             </li>
//         )
//     }

// }


export default function ArtistItem(props) {
    return (
<div className="artist__item">
    <h4>{props.name}</h4>            
    <img className="artist__img" src={props.images} width="300" height="300" alt={props.name} />  
    <p className="artist__genres">{props.genres ? "Genres: " + props.genres : null}</p>            
    <a className="artist__link" href={props.spotifyLink}>See on Spotify</a> 
</div>
    )
}

ArtistItem.propTypes = {
    name: PropTypes.string,
    spotifyLink: PropTypes.string, 
    genres: PropTypes.arrayOf(PropTypes.string),  
    images: PropTypes.string,  
}