import Button from "./Button";

function ModalQuestion({ disabled, onConfirm, name, button, onClose }) {
  return (
    <div className="xs:w-100 sm:w-125 bg-(--body-color)">
      <h3 className="font-semibold pt-4 pb-10 pr-6">{name}</h3>
      <div className="flex flex-col items-center">
        <p className="text-base pb-10"> آیا از انجام این عمل مطمئن هستید؟</p>
        <div className="pb-6 flex gap-10">
          <Button
            disabled={disabled}
            htmlType="pay"
            onClick={() => {
              onConfirm();
              onClose();
            }}
          >
            {button}
          </Button>{" "}
          <Button disabled={disabled} htmlType="pay" onClick={onClose}>
            انصراف
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ModalQuestion;
