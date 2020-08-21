import React from "react";


export default class TypeButtonsList extends React.Component { 
    constructor() {
        super();

    }

    render() {
        return (
            <div className="checkbox checkbox__container">
                <label>
                    <input type="checkbox" name="type" value="album" className="checkbox__input"/>
                    Album
                </label>
                <label>
                    <input type="checkbox" name="type" value="artist" className="checkbox__input"/>
                    Artist
                </label>
                <label>
                    <input type="checkbox" name="type" value="playlist" className="checkbox__input"/>
                    Playlist
                </label>
                <label>
                    <input type="checkbox" name="type" value="track" className="checkbox__input"/>
                    Track
                </label>

            </div>
            
        )
    }
}