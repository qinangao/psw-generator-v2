import Button from "./Button";
import CreateAccountModal from "./CreateAccountModal";
import { useState } from "react";
import SigninModal from "./SigninModal";
function Description() {
  const [activeModal, setActiveModal] = useState<"signup" | "login" | null>(
    null
  );
  const handleOpenModal = (modalType: "signup" | "login") => {
    if (!activeModal) {
      setActiveModal(modalType);
    }
  };

  const handleCloseModal = (): void => {
    setActiveModal(null);
  };

  return (
    <section className="w-full flex flex-col items-center gap-[30px] text-center lg:items-start  lg:gap-[80px] lg:text-left lg:w-[47%]">
      <h1 className="text-[30px] lg:text-[40px]/[60px]  font-bold">
        Lock Down Your Security
        <br />
        Generate Uncrackable Passwords in Seconds
      </h1>
      <p className="font-medium lg: text-xl">
        FortiLock is your ultimate safeguard, effortlessly generating strong,
        random passwords to elevate your digital security and keep your accounts
        impenetrable
      </p>
      <div className="flex gap-[20px] md:flex-row md:gap-[80px]">
        <Button
          width="160px"
          height="50px"
          bgColor="#97b002"
          textColor="white"
          hoverBgColor="#ebeddf"
          hoverTextColor="#97b002"
          onClick={() => handleOpenModal("signup")}
        >
          Create Account
        </Button>
        <Button
          width="160px"
          fontSize="20px"
          height="50px"
          bgColor="white"
          textColor="black"
          hoverBgColor="#97b002"
          hoverTextColor="#ebeddf"
          onClick={() => handleOpenModal("login")}
        >
          Login
        </Button>
        {activeModal === "signup" && (
          <CreateAccountModal onClose={handleCloseModal} />
        )}
        {activeModal === "login" && <SigninModal onClose={handleCloseModal} />}
      </div>
    </section>
  );
}

export default Description;
