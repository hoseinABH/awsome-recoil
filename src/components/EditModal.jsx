import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useRecoilState } from 'recoil';
import { products } from 'store';
import { useState } from 'react';

function EditModal({ handleClose, show, pId }) {
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [size, setSize] = useState(0.0);
  const [quantity, setQuantity] = useState(0);
  const [productList, setProductList] = useRecoilState(products);
  const product = productList.length
    ? productList.find((item) => item.id === pId)
    : null;

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

  const updateProduct = () => {
    const newProduct = {
      ...product,
      name,
      color,
      size,
      quantity,
    };
    setProductList([...productList, newProduct]);
    handleClose();
  };

  return product ? (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit the Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the Product Name"
              defaultValue={product.name}
              onChange={(e) => onChangeName(e)}
            />
          </Form.Group>

          <Form.Group controlId="color">
            <Form.Label>Color</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the Product Color"
              defaultValue={product.color}
              onChange={(e) => onChangeColor(e)}
            />
          </Form.Group>

          <Form.Group controlId="size">
            <Form.Label>Size</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter the Product Size"
              defaultValue={product.size}
              onChange={(e) => onChangeSize(e)}
            />
          </Form.Group>

          <Form.Group controlId="quantity">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter the Product Quantity"
              defaultValue={product.quantity}
              onChange={(e) => onChangeQuantity(e)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => handleClose()}>
          Close
        </Button>
        <Button variant="primary" onClick={() => updateProduct()}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  ) : null;
}

export default EditModal;
