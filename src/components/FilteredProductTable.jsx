import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import listOfProducts from '../listOfProducts.json';
import '../style.css';

class FilteredProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      isStockOnly: false,
    };
    this.updateSearchText = this.updateSearchText.bind(this);
    this.updateStockSelection = this.updateStockSelection.bind(this);
  }

  updateSearchText(value) {
    this.setState({ searchText: value });
  }

  updateStockSelection(value) {
    this.setState({ isStockOnly: value });
  }

  render() {
    const { searchText, isStockOnly } = this.state;
    const { updateSearchText, updateStockSelection } = this;
    return (
      <div className="body">
        <div className="container">
          <h2 className="main-heading">List of Products</h2>
          <SearchBar
            searchText={searchText}
            isStockOnly={isStockOnly}
            updateSearch={updateSearchText}
            updateStock={updateStockSelection}
          />
          <ProductTable
            searchText={searchText}
            isStockOnly={isStockOnly}
            products={listOfProducts}
          />
        </div>
      </div>
    );
  }
}

export default FilteredProductTable;
