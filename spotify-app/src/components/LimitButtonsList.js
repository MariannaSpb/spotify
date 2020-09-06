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
        this.props.setValue(event.target.value)
        }
  
    

    render() {
        return (
            <div className="checkbox checkbox__container">
                Показывать загрузить первые:
                <input type="radio"
                id='20'
                        name="limit" 
                        value="20" 
                        className="checkbox__input"
                        checked={this.state.selectedValue === '20'}
                        onChange={this.handleChange}
                    />
                <label className="checkbox__label" htmlFor='20'>
                    20
                </label>
                <input type="radio"
                            id='30'
                            name="limit" 
                            value="30" 
                            className="checkbox__input"
                            checked={this.state.selectedValue === '30'}
                            onChange={this.handleChange}
                    />
                <label className="checkbox__label" htmlFor='30'>
                    30
                </label>
                <input id='40'
                        type="radio" 
                        name="limit" 
                        value="40" 
                        className="checkbox__input"
                        checked={this.state.selectedValue === '40'}
                        onChange={this.handleChange}
                    />
                <label className="checkbox__label" htmlFor='40'>
                    40
                </label>
                <input id='50'
                        type="radio" 
                        name="limit" 
                        value="50" 
                        className="checkbox__input"
                        checked={this.state.selectedValue === '50'}
                        onChange={this.handleChange}
                    />
                <label className="checkbox__label" htmlFor='50'>
                    50
                </label>

            </div>
            
        )
    }

}