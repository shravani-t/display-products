import React from 'react';

const SearchBar = (props) => {
  const { searchText, isStockOnly } = props;

  const handleSearchChange = (e) => {
    props.updateSearch(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    props.updateStock(e.target.checked);
  };
  return (
    <form>
      <div className="form-control">
        <input
          type="text"
          value={searchText}
          placeholder="Search..."
          onChange={handleSearchChange}
        />
      </div>
      <div className="form-control">
        <p>
          <input
            type="checkbox"
            checked={isStockOnly}
            onChange={handleCheckboxChange}
          />
          Only show products in stock
        </p>
      </div>
    </form>
  );
};

export default SearchBar;
