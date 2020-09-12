import React from 'react';
import GroupedProductData from './GroupedProductData';

class ProductTable extends React.Component {
  render() {
    const { searchText, isStockOnly, products } = this.props;

    const groupedProducts = products.reduce((accumulator, object) => {
      if (!accumulator[object.category]) {
        accumulator[object.category] = [];
      }

      const searchTextMatchesObjectName =
        object.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;

      if (
        searchTextMatchesObjectName &&
        (isStockOnly ? object.stocked === true : true)
      ) {
        accumulator[object.category].push(object);
      }
      return accumulator;
    }, {});

    const groupedProductsArray = Object.entries(groupedProducts);

    const blocks = groupedProductsArray.map((groupedProduct) => {
      return (
        <GroupedProductData data={groupedProduct} key={groupedProduct[0]} />
      );
    });

    return (
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{blocks}</tbody>
        </table>
      </div>
    );
  }
}

export default ProductTable;
