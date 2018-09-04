import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

const ProductTable = (props) => (
    <table>
        <thead>
        <tr>
            <th>Name</th>
            <th>Price</th>
        </tr>
        </thead>
        <tbody>
        {/*<ProductCategoryRow/>*/}
        {/*<ProductRow/>*/}
        {returnArrayRow(props)}
        </tbody>
    </table>
);

function returnArrayRow(value) {
    let myRow = [];
    let lastCategory = null;

    value.products.forEach(each => {
            let lowerCaseProductName = each.name.toLowerCase();
            let lowerCaseFilterText = value.searchDetails.filterText.toLowerCase();
            if (lowerCaseProductName.indexOf(lowerCaseFilterText) === -1 ||
                (!each.stocked && value.searchDetails.inStockOnly)) {
                return;
            }
            if (each.category !== lastCategory) {
                myRow.push(<ProductCategoryRow category={each.category}
                                               key={each.category}/>);
                lastCategory = each.category;
            }
            myRow.push(<ProductRow products={each} key={each.name}/>);
        }
    );
    return myRow;
}

export default ProductTable;