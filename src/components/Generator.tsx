import Button from "./Button";
import Option from "./Option";

function Generator() {
  return (
    <section className="w-full border-3 border-black bg-white rounded-[20px] lg:w-[50%] xl:w-[35%]">
      <div className="p-[20px] md:p-[30px] flex flex-col items-center w-full">
        <div className="w-[90%] min-h-[40px] border-[2px] border-black rounded-[10px] text-center relative p-[5px] break-words">
          <p className="result"></p>

          <div className="bg-[#DCDCDC] h-[6px] w-[99%] absolute bottom-0 left-[2px] rounded-[10px]">
            <div className="h-full bg-[#97b002]"></div>
          </div>
        </div>

        <div>
          <h2 className="text-[20px] text-center font-bold pt-[10px] md:pt-[20px] xl:text-2xl">
            Customise your new password
          </h2>

          <form className="w-[250px] px-[10px] py-[20px] flex flex-col md:w-[320px]">
            <Option
              label="Length"
              type="range"
              name="length"
              id="length"
              min={5}
              max={50}
              value={13}
              onChange={(e) => console.log(e.target.value)}
            />
            <Option
              label="A-Z"
              type="checkbox"
              name="uppercase"
              id="uppercase"
              checked={true}
              onChange={(e) => console.log(e.target.checked)}
            />
            <Option
              label="a-z"
              type="checkbox"
              name="lowercase"
              id="lowercase"
              checked={true}
              onChange={(e) => console.log(e.target.checked)}
            />
            <Option
              label="0-9"
              type="checkbox"
              name="number"
              id="number"
              checked={true}
              onChange={(e) => console.log(e.target.checked)}
            />
            <Option
              label="!@#^&*"
              type="checkbox"
              name="punctuation"
              id="punctuation"
              checked={true}
              onChange={(e) => console.log(e.target.checked)}
            />
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
