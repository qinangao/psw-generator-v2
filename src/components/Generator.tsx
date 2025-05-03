import Button from "./Button";
function Generator() {
  return (
    <section className="w-full border-3 border-black bg-white rounded-[20px] lg:w-[50%] xl:w-[35%]  ">
      <div className="p-[30px]  flex flex-col items-center">
        <div className="w-[90%] min-h-[40px] border-[2px] border-black rounded-[10px] text-center relative p-[5px] break-words ">
          <p className="result"></p>

          <div className="bg-[#DCDCDC] h-[6px] w-[99%] absolute bottom-0 left-[2px] rounded-[10px]">
            <div className=" h-full bg-[#97b002]"></div>
          </div>
        </div>

        <div>
          <h2 className="pt-[20px] font-bold text-2xl">
            Customise your new password
          </h2>

          <form className="flex flex-col p-[25px]">
            <div className="flex justify-between">
              <label htmlFor="length">Length</label>
              <div className="psw__range">
                <input
                  className="range-custom w-[150px] mr-[5px] overflow-hidden bg-[#ebeddf]"
                  type="range"
                  name="length"
                  id="length"
                  min="5"
                  max="50"
                  value="0"
                />
                <output>5</output>
              </div>
            </div>
            <div className="flex justify-between">
              <label htmlFor="uppercase">A-Z</label>
              <input
                className="accent-[#97b002] checkbox__uppercase"
                type="checkbox"
                name="uppercase"
                id="uppercase"
                checked
              />
            </div>
            <div className="flex justify-between">
              <label htmlFor="lowercase">a-z</label>
              <input
                className="checkbox__lowercase accent-[#97b002] checkbox"
                type="checkbox"
                name="lowercase"
                id="lowercase"
                checked
              />
            </div>
            <div className="flex justify-between">
              <label htmlFor="number">0-9</label>
              <input
                className="checkbox__number accent-[#97b002]"
                type="checkbox"
                name="number"
                id="number"
                checked
              />
            </div>
            <div className="flex justify-between">
              <label htmlFor="punctuation">!@#^&*</label>
              <input
                className="checkbox__punctuation accent-[#97b002]"
                type="checkbox"
                name="punctuation"
                id="punctuation"
                checked
              />
            </div>
          </form>
        </div>
        <Button
          width="120px"
          height="40px"
          bgColor="#97b002"
          textColor="white"
          hoverBgColor="#ebeddf"
          hoverTextColor="#97b002"
          onClick={() => alert("Generate button clicked!")}
        >
          Generate
        </Button>
        <div className="pt-[5px] pl-[14px] text-[13px] border-t border-dashed border-black mt-[20px] text-left">
          * Value must be between 8 and 50. Use 14 characters or more to
          generate a strong password.
        </div>
        <div className="flex flex-col justify-start relative">
          <Button
            width="260px"
            height="40px"
            bgColor="#ebeddf"
            textColor="#000"
            hoverBgColor="#dcdcdc"
            hoverTextColor="#000"
          >
            Check your history here 👇
          </Button>
          <ul className="histroy__list history__hidden"></ul>
        </div>
      </div>
    </section>
  );
}

export default Generator;
