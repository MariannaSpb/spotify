import React from "react";


export default class TypeButtonsList extends React.Component {  
    constructor(props) {
        super(props);
        this.state = {
            selectedValue: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = event => {
        this.setState({
            selectedValue: event.target.value
        });
 
        this.props.setValue(event.target.value)
        }

    render() {
        return (
            <div className="checkbox checkbox__container">
                Выбрать категорию поиска:
            <input type="checkbox"
                    id="art"
                    name="type1" 
                    value="artist" 
                    className="checkbox__input"
                    checked={this.state.selectedValue === 'artist'}
                    onChange={this.handleChange}
                />
            <label className="checkbox__label" htmlFor="art">         
            Artist
            </label>
        
            <input type="checkbox"
                        id="alb"
                        name="type2" 
                        value="album" 
                        className="checkbox__input"
                        checked={this.state.selectedValue === 'album'}
                        onChange={this.handleChange}
                />
            <label className="checkbox__label" htmlFor="alb">
                Album
            </label>

            
            <input id="play"
                    type="checkbox" 
                    name="type3" 
                    value="playlist" 
                    className="checkbox__input"
                    checked={this.state.selectedValue === 'playlist'}
                    onChange={this.handleChange}
                />
            <label className="checkbox__label" htmlFor="play">
                Playlist
            </label>

            
            <input  id="track"
                    type="checkbox" 
                    name="type4" 
                    value="track" 
                    className="checkbox__input"
                    checked={this.state.selectedValue === 'track'}
                    onChange={this.handleChange}
                />
            <label className="checkbox__label" htmlFor="track">
                Track
            </label>

        </div>
            
        )
    }
}