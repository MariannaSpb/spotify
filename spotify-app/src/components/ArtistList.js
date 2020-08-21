import React from "react";
import ArtistItem from './ArtistItem';

export default class ArtistList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Muse',
            spotifyLink: 'https://open.spotify.com/artist/12Chz98pHFMPJEknJQMWvI',
            genres: [],
            image : []

        }
    }

    render() {
        return (
            <section className="artist">
                <ul className="artist__list">
                {this.props.artistArray.map((itemObj, id) => { 
                    return <ArtistItem itemObj={itemObj} key={itemObj.id} index={id}></ArtistItem>
                })}
                </ul>
            </section>
        )
    }

}