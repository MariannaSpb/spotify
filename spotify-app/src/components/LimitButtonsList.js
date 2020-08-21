import React from "react";


export default class LimitButtonsList extends React.Component {
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
        console.log('val', event.target.value)
        console.log('value', this.state)
        this.props.setValue(event.target.value)
        }
  
    

    render() {
        return (
            <div className="checkbox checkbox__container">
                <label>
                    <input type="radio" 
                        name="limit" 
                        value="20" 
                        className="checkbox__input"
                        checked={this.state.selectedValue === '20'}
                        onChange={this.handleChange}
                    />
                    20
                </label>
                <label>
                    <input type="radio" 
                            name="limit" 
                            value="30" 
                            className="checkbox__input"
                            checked={this.state.selectedValue === '30'}
                            onChange={this.handleChange}
                    />
                    30
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="limit" 
                        value="40" 
                        className="checkbox__input"
                        checked={this.state.selectedValue === '40'}
                        onChange={this.handleChange}
                    />
                    40
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="limit" 
                        value="50" 
                        className="checkbox__input"
                        checked={this.state.selectedValue === '50'}
                        onChange={this.handleChange}
                    />
                    50
                </label>

            </div>
            
        )
    }

}