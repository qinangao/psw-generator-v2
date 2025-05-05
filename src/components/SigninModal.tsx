import Modal from "./Modal";

type SigninModalProps = {
  onClose: () => void;
};
function SigninModal({ onClose }: SigninModalProps) {
  return (
    <Modal
      title="Login"
      method="email"
      password="Password"
      buttontext1="Login"
      onClose={onClose}
    />
  );
}

export default SigninModal;
