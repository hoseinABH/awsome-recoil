import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useRecoilState } from 'recoil';
import { products } from 'store';

function DeleteModal({ pId, handleClose, ...rest }) {
  const [productList, setProductList] = useRecoilState(products);

  const deleteProduct = () => {
    const newArray = productList.filter((p) => p.id !== pId);
    setProductList(newArray);
  };
  return (
    <Modal {...rest}>
      <Modal.Header closeButton>
        <Modal.Title>Delete the Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => handleClose()}>
          Close
        </Button>
        <Button variant="primary" onClick={() => deleteProduct()}>
          Yes, Do it.
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteModal;
