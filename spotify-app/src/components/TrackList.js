import React from "react";
import TrackItem from './TrackItem';

export default class TrackList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'MOOOOOONNN river',
            spotifyLink: 'https://open.spotify.com/track/4hZ5hltXes2wInBl7EGpCP?si=85ZGstoeQuGtYfrVmmZ3CA',
            duration: 120,
            popularity : 123,
            albumName: 'name album',
            albumSpotifyLink: 'https://open.spotify.com/album/0iqqnLXoocsMeCYlTw3Q2q?si=AeO0OgrTQ9KGy50KdxmrLw',
            artistName: 'Andy Williams',
            artistSpotifyLink: 'https://open.spotify.com/artist/4sj6D0zlMOl25nprDJBiU9'
        }
    }

    render() {
        return (
            <section className="track">
                <ul className="track__list">
                {this.props.trackArray.map((obj, id) => { 
                    return <TrackItem obj={obj} key={id} index={id}></TrackItem>
                })}
                </ul>
            </section>
        )
    }

}