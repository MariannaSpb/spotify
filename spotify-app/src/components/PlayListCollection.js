import React from "react";
import PlayListItem from './PlayListItem';

export default class PlayListCollection extends React.Component {
    constructor(props) {
        super(props);
        }

    render() {
        return (
            <section className="playlist">
                <ul className="playlist__list">
                {this.props.playlistArray.map((obj, id) => { 
                    return <PlayListItem obj={obj} key={id} index={id}></PlayListItem>
                })}
                </ul>
            </section>
        )
    }

}