import Modal from "./Modal";
interface CreateAccountModalProps {
  onClose: () => void;
}

function CreateAccountModal({ onClose }: CreateAccountModalProps) {
  return (
    <Modal
      title="Create an account"
      method="email"
      password="password"
      buttontext1="Sign up"
      showConfirmPassword={true}
      onClose={onClose}
    />
  );
}

export default CreateAccountModal;
