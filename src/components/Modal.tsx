type ModalProps = {
  title: string;
  method: string;
  password: string;
  buttontext1: string;
  showConfirmPassword?: boolean;
  onClose?: () => void;
};

import Button from "./Button";
function Modal({
  title,
  method,
  password,
  buttontext1,
  showConfirmPassword = false,
  onClose,
}: ModalProps) {
  return (
    <div className="w-[80%] md:w-[50%] lg:w-[25%] rounded-[30px] z-100 p-[15px] bg-white border-2 border-black fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <h2 className="text-center text-2xl">{title}</h2>
      <form className="flex flex-col gap-4 p-4">
        <input
          type={method}
          placeholder={method}
          className="border border-gray-300 rounded p-2"
        />
        <input
          type={password}
          placeholder={password}
          className="border border-gray-300 rounded p-2"
        />
        {showConfirmPassword && (
          <input
            type="password"
            placeholder="comfirm password"
            className="border border-gray-300 rounded p-2"
          />
        )}
        <div className="flex justify-end mt-4 gap-[20px]">
          <Button bgColor="#ebeddf" textColor="#97b002" onClick={onClose}>
            Cancel
          </Button>
          <Button>{buttontext1}</Button>
        </div>
      </form>
    </div>
  );
}

export default Modal;
