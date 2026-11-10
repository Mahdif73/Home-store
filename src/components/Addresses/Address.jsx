import { faDigitsNum, formatPhone } from "../../utils/helpers";
import Button from "../main/Button";
import Modal from "../main/Modal";
import ModalQuestion from "../main/ModalQuestion";
import NewAddress from "./NewAddress";
import { useAddressTitle } from "./useAddressTitle";
import { useDeleteAddress } from "./useDeleteAddress";

function Address({ address }) {
  const {
    id,
    isTitle: title,
    state,
    city,
    address: location,
    postCode,
    phone,
    customerName,
  } = address;
  const { mutate, isDeleting } = useDeleteAddress();
  const { handleSelectOrg, isTitle: titleLoading } = useAddressTitle();

  return (
    <div
      className={`block justify-between items-end border border-(--border-color) rounded-t-2xl py-4 px-8 mb-4 gap-4 transition delay-20 xs:text-sm md:text-base lg:flex ${title ? "bg-(--border-color-alt) border-2" : ""}  ${titleLoading ? "bg-(--back-color-alt) blur-xs" : ""}`}
    >
      <div
        className="cursor-pointer"
        onClick={() => {
          if (address?.isTitle) return;
          handleSelectOrg(id);
        }}
      >
        <p className="pb-4">
          آدرس: {state} - {city} - {location}
        </p>
        <p className="pb-4"> کد پستی : {faDigitsNum(postCode)}</p>
        <p className="pb-4 cursor-pointer">
          {customerName} <span className="px-4">|</span>
          {formatPhone(phone)}
        </p>
      </div>

      <div className="flex gap-8">
        <Modal>
          <Modal.Open opens="edit">
            <Button> ویرایش</Button>
          </Modal.Open>
          <Modal.Window name="edit">
            <NewAddress editingAddress={address} />
          </Modal.Window>
          <Modal.Open>
            <Button disabled={isDeleting}>حذف</Button>
          </Modal.Open>
          <Modal.Window>
            <ModalQuestion
              name=" حذف آدرس انتخابی "
              disabled={isDeleting}
              button="حذف"
              onConfirm={() => mutate(id)}
            />
          </Modal.Window>
        </Modal>
      </div>
    </div>
  );
}

export default Address;
