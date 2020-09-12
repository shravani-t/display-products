import React from 'react';
import '../style.css';

class ProductRow extends React.Component {
  render() {
    const { product } = this.props;
    const name = product.stocked ? (
      product.name
    ) : (
      <span className="unstocked-name">{product.name}</span>
    );
    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

export default ProductRow;
