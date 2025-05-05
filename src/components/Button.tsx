type ButtonProps = {
  children: React.ReactNode;
  fontSize?: string;
  width?: string;
  height?: string;
  bgColor?: string;
  textColor?: string;
  hoverBgColor?: string;
  hoverTextColor?: string;
  isHover?: boolean; // Optional hover effect
  onClick?: () => void;
};

function Button({
  children,
  fontSize = "18px",
  width = "auto",
  height = "35px",
  bgColor = "#97b002",
  textColor = "white",
  hoverBgColor = "#ebeddf",
  hoverTextColor = "#97b002",
  isHover = true, // Default to true
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`tracking-[1px] border-[2px] border-black rounded-[10px] cursor-pointer transition ${
        isHover ? "hover:scale-103" : ""
      } duration-300 ease-in-out px-[10px]`}
      style={{
        width,
        height,
        backgroundColor: bgColor,
        color: textColor,
        fontSize,
      }}
      onMouseEnter={(e) => {
        if (isHover) {
          (e.target as HTMLButtonElement).style.backgroundColor = hoverBgColor;
          (e.target as HTMLButtonElement).style.color = hoverTextColor;
        }
      }}
      onMouseLeave={(e) => {
        if (isHover) {
          (e.target as HTMLButtonElement).style.backgroundColor = bgColor;
          (e.target as HTMLButtonElement).style.color = textColor;
        }
      }}
    >
      {children}
    </button>
  );
}

export default Button;
