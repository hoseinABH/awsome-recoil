import { useRecoilState } from 'recoil';
import { filterProductsValue } from 'store';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const FilterProducts = () => {
  const [filterProductsState, filterProducts] =
    useRecoilState(filterProductsValue);

  const filter = (event) => {
    const { value } = event.target;
    filterProducts(value);
  };

  const clearFilter = () => filterProducts('');

  return (
    <Form>
      <Form.Group controlId="name">
        <Form.Label>Filter:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Filter by Product Name"
          value={filterProductsState}
          onChange={filter}
        />
      </Form.Group>

      <Button variant="info" className="mt-2" onClick={clearFilter}>
        Clear Filter
      </Button>
    </Form>
  );
};

export default FilterProducts;
