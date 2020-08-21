import React from "react";


export default class SearchButton extends React.Component {
    constructor(props) {
       super(props);

    }

    
    render() {
        return (
        
                <button  className="form__search-button" onClick={this.props.onClickHandler} type="submit">Search</button>
            
        )
    }


}