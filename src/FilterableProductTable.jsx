import React from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import {PRODUCTS} from "./products";

class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: "",
            inStockOnly: false
        };

        this.handleFilterTextChange = (filterText) => {
            this.setState ({filterText});
        };

        this.handleInStockChange = (inStockOnly) => {
            this.setState ({inStockOnly});
        };
    }

    render() {
        return (
            <div>
                <SearchBar searchDetails={this.state} handleInStockChange={
                    this.handleInStockChange} handleFilterTextChange
                    ={this.handleFilterTextChange}/>
                <ProductTable products={PRODUCTS} searchDetails={this.state}/>
            </div>
        )
    }
}

export default FilterableProductTable;