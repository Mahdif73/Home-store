import Modal from "../main/Modal";
import NewAddress from "./NewAddress";

function AddAddress() {
  return (
    <Modal>
      <Modal.Open opens="address-form">
        <button className="text-(--back-color) text-base lg:font-semibold">
          افزودن آدرس جدید
        </button>
      </Modal.Open>
      <Modal.Window name="address-form">
        <NewAddress />
      </Modal.Window>
    </Modal>
  );
}

export default AddAddress;
