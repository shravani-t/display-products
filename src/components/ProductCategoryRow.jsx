import React from 'react';

class ProductCategoryRow extends React.Component {
  render() {
    const { heading } = this.props;
    return (
      <tr>
        <th colSpan="2">{heading}</th>
      </tr>
    );
  }
}

export default ProductCategoryRow;
