import Button from "./Button";

type HistoryContainerProps = {
  history: string[];
  showHistory: boolean;
  setShowHistory: React.Dispatch<React.SetStateAction<boolean>>;
  handleReset: () => void;
};

function HistoryContainer({
  history,
  showHistory,
  setShowHistory,
  handleReset,
}: HistoryContainerProps) {
  return (
    <div className="flex flex-col justify-start relative">
      <div className="flex flex-col items-center justify-center gap-[20px] mt-[20px] md:flex-row ">
        <Button
          width="250px"
          height="30px"
          bgColor="#ebeddf"
          textColor="#000"
          hoverBgColor="#dcdcdc"
          hoverTextColor="#000"
          onClick={() => setShowHistory(!showHistory)}
        >
          Check your history here 👇
        </Button>
        <Button width="140px" height="30px" onClick={handleReset}>
          Clear History
        </Button>
      </div>

      <div
        className="flex flex-col items-center justify-center p-[10px] border-[2px] border-black absolute rounded-[30px] top-[110px] w-full bg-[#e1e587] md:top-[60px] "
        style={{ display: showHistory ? "block" : "none" }}
      >
        {history.length === 0 ? (
          <p className="text-center">No password has been generated</p>
        ) : (
          <ul>
            {history.map((item, index) => (
              <li
                key={index}
                className="text-[15px] text-center decoration-none py-[3px]"
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default HistoryContainer;
