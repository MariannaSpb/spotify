import React from "react";
import PropTypes from 'prop-types';



export default class PlayListItem extends React.Component {
    constructor(props) {
        super(props);
    }
    

    render() {
        // const { name, spotifyLink, genres, image } = this.state;
        return (
            <li className="playlist__item"> PLAYLIST
            <a className="" href={this.props.obj.link}>{this.props.obj.name}</a>
            </li>
        )
    }

}

PlayListItem.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
  image: PropTypes.string,
  totalTracks: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ownerName: PropTypes.string
}