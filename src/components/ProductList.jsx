import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import DeleteModal from './DeleteModal';
import EditModal from './EditModal';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { filterProducts } from 'store';
import { products } from 'store';
import { filterProductsValue } from 'store';
import { useState } from 'react';

function ProductList() {
  const productsState = useRecoilValue(filterProducts);
  const resetList = useResetRecoilState(products);
  const resetfilterProductsValue = useResetRecoilState(filterProductsValue);

  // Modals
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [userId4Actions, setUserId4Actions] = useState(0);

  const handleEditClose = () => setShowEdit(false);
  const handleEditShow = () => setShowEdit(true);

  const handleDeleteClose = () => setShowDelete(false);
  const handleDeleteShow = () => setShowDelete(true);

  const resetAtoms = () => {
    resetList();
    resetfilterProductsValue();
  };

  const editProduct = (id) => {
    handleEditShow();
    setUserId4Actions(id);
  };

  const deleteProduct = (id) => {
    handleDeleteShow();
    setUserId4Actions(id);
  };
  return (
    <>
      <h3>List</h3>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Color</th>
            <th>Size</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {!productsState.length ? (
            <tr>
              <td colSpan="5" style={{ textAlign: 'center' }}>
                No products here.
              </td>
            </tr>
          ) : (
            productsState.map((item, index) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.color}</td>
                <td>{item.size}</td>
                <td>{item.quantity}</td>
                <td colSpan="2">
                  <Button
                    variant="secondary"
                    onClick={() => editProduct(item.id)}
                  >
                    Edit
                  </Button>{' '}
                  {' | '}
                  <Button
                    variant="danger"
                    onClick={() => deleteProduct(item.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>

      <Button variant="secondary" size="lg" onClick={() => resetAtoms()}>
        Clear Data
      </Button>

      <EditModal
        show={showEdit}
        pId={userId4Actions}
        handleClose={handleEditClose}
      />

      <DeleteModal
        show={showDelete}
        pId={userId4Actions}
        handleClose={handleDeleteClose}
      />
    </>
  );
}

export default ProductList;
