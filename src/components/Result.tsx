type ResultProps = {
  result: string;
  strengthBar: number;
  bgColor: string;
};
function Result({ result, strengthBar, bgColor }: ResultProps) {
  return (
    <div className="w-[100%] min-h-[40px] border-[2px] border-black rounded-[10px] text-center relative p-[5px] break-words">
      <p className="result">{result}</p>

      <div className="bg-[#DCDCDC] h-[6px] w-[99%] absolute bottom-0 left-[2px] rounded-[10px]">
        <div
          className="h-full bg-[#97b002]"
          style={{ width: `${strengthBar}%`, backgroundColor: bgColor }}
        ></div>
      </div>
    </div>
  );
}

export default Result;
