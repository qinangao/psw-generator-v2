interface ButtonProps {
  children: React.ReactNode;
  fontSize?: string;
  width?: string;
  height?: string;
  bgColor?: string;
  textColor?: string;
  hoverBgColor?: string;
  hoverTextColor?: string;
  onClick?: () => void;
}

function Button({
  children,
  fontSize = "18px",
  width = "auto",
  height = "35px",
  bgColor = "#97b002",
  textColor = "white",
  hoverBgColor = "#ebeddf",
  hoverTextColor = "#97b002",
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`tracking-[1px] border-[2px] border-black rounded-[10px] cursor-pointer transition hover:scale-110 duration-300 ease-in-out px-[10px]`}
      style={{
        width,
        height,
        backgroundColor: bgColor,
        color: textColor,
        fontSize,
      }}
      onMouseEnter={(e) => {
        (e.target as HTMLButtonElement).style.backgroundColor = hoverBgColor;
        (e.target as HTMLButtonElement).style.color = hoverTextColor;
      }}
      onMouseLeave={(e) => {
        (e.target as HTMLButtonElement).style.backgroundColor = bgColor;
        (e.target as HTMLButtonElement).style.color = textColor;
      }}
    >
      {children}
    </button>
  );
}

export default Button;
