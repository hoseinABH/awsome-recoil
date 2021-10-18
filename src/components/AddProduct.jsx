import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useSetRecoilState } from 'recoil';
import { products } from 'store';
import { v4 as uuid4 } from 'uuid';

function AddProduct() {
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [size, setSize] = useState(0.0);
  const [quantity, setQuantity] = useState(0);
  const setProducts = useSetRecoilState(products);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeColor = (e) => {
    setColor(e.target.value);
  };

  const onChangeSize = (e) => {
    setSize(e.target.value);
  };

  const onChangeQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const addProduct = () => {
    setProducts((oldList) => [
      ...oldList,
      {
        id: uuid4(),
        name,
        color,
        size,
        quantity,
      },
    ]);
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setColor('');
    setSize(0.0);
    setQuantity(0);
  };

  return (
    <Form>
      <Form.Group controlId="name">
        <Form.Label>Name:</Form.Label>
        <Form.Control
          type="text"
          value={name}
          placeholder="Enter the Product Name"
          onChange={(e) => onChangeName(e)}
        />
      </Form.Group>

      <Form.Group controlId="color">
        <Form.Label>Color:</Form.Label>
        <Form.Control
          type="text"
          value={color}
          placeholder="Enter the Product Color"
          onChange={(e) => onChangeColor(e)}
        />
      </Form.Group>

      <Form.Group controlId="size">
        <Form.Label>Size:</Form.Label>
        <Form.Control
          type="number"
          value={size}
          placeholder="Enter the Product Size"
          onChange={(e) => onChangeSize(e)}
        />
      </Form.Group>

      <Form.Group controlId="quantity">
        <Form.Label>Quantity:</Form.Label>
        <Form.Control
          type="number"
          value={quantity}
          placeholder="Enter the Product Quantity"
          onChange={(e) => onChangeQuantity(e)}
        />
      </Form.Group>

      <Button
        variant="primary"
        className="mt-3"
        size="lg"
        onClick={() => addProduct()}
      >
        Add
      </Button>
    </Form>
  );
}

export default AddProduct;
