import React from "react";

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleFilterTextChange = (event) => {
            this.props.handleFilterTextChange(event.target.value);
        };
        this.handleInStockChange = (event) => {
            this.props.handleInStockChange(event.target.checked);
        };
    }

    render() {
        return (
            <form>
                <input type="text"
                       placeholder="Search..." onChange={this.handleFilterTextChange}
                       value={this.props.searchDetails
                    .filterText}/>
                <p> Only show products in stock
                    <input type="checkbox" onChange={this.handleInStockChange}
                           value={this.props.searchDetails.inStockOnly}/>
                </p>
            </form>
        )
    }
}
