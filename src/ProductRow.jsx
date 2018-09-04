import React from "react";

const ProductCategoryRow = ((props) => (
            <tr>
                <td>{props.products.name}</td>
                <td>{props.products.price}</td>
            </tr>
        )
);


export default ProductCategoryRow;