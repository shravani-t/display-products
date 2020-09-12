import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

class GroupProductData extends React.Component {
  render() {
    const { data } = this.props;
    const rows = data[1].map((row) => {
      return <ProductRow product={row} key={row.name} />;
    });
    return (
      <>
        <ProductCategoryRow heading={data[0]} />
        {rows}
      </>
    );
  }
}

export default GroupProductData;
