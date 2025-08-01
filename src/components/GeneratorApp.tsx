import Button from "./Button";
import Option from "./Option";
import { useState } from "react";
import HistoryContainer from "./HistoryContainer";
import Result from "./Result";

function Generator() {
  const [length, setLength] = useState(5);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [punctuation, setPunctuation] = useState(true);
  const [result, setResult] = useState("");
  const [strengthBar, setStrengthBar] = useState(0);
  const [bgColor, setBgColor] = useState("red");
  const [history, setHistory] = useState<string[]>([]);
  const [showHistory, setShowHistory] = useState(false);

  const passwordGen = function (): string | undefined {
    if (history.length >= 10) {
      alert(
        "You have reached the maximum history limit of 10 passwords. Please clear the history to generate new ones."
      );
      return; // Stop further execution
    }
    const data = {
      specials: "!@#$%^&*()_+{}:<>?|[];',./`~",
      lowercase: "abcdefghijklmnopqrstuvwxyz",
      uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      numbers: "0123456789",
    };

    function randomChar(str: string) {
      return str[Math.floor(Math.random() * str.length)];
    }

    let password = "";
    const pswCharacter = [];
    let allowedChars = "";

    if (punctuation) {
      allowedChars += data.specials;
      pswCharacter.push(randomChar(data.specials));
    }
    if (lowercase) {
      allowedChars += data.lowercase;
      pswCharacter.push(randomChar(data.lowercase));
    }
    if (uppercase) {
      allowedChars += data.uppercase;
      pswCharacter.push(randomChar(data.uppercase));
    }
    if (numbers) {
      allowedChars += data.numbers;
      pswCharacter.push(randomChar(data.numbers));
    }

    if (allowedChars.length === 0) {
      setResult("Please select at least one character type!");
      return;
    }

    for (let i = pswCharacter.length; i < length; i++) {
      pswCharacter.push(randomChar(allowedChars));
    }

    password = pswCharacter.sort(() => Math.random() - 0.5).join("");
    setResult(String(password));
    setHistory((prev) => [...prev, password]);

    const strengthTester = function () {
      if (password.length <= 10) {
        setStrengthBar(30);
        setBgColor("red");
      }
      if (password.length > 10 && password.length <= 14) {
        setStrengthBar(60);
        setBgColor("orange");
      }
      if (password.length >= 15) {
        setStrengthBar(100);
        setBgColor("#97b002");
      }
    };
    strengthTester();
    if (history.length === 10)
      alert(
        "You have reached the maximum history limit of 10 passwords. Please clear the history to generate new ones."
      );
    return;
  };

  function handleReset() {
    setHistory([]);
    setShowHistory(false);
    setResult("");
    setStrengthBar(0);
  }

  return (
    <section className="w-full border-3 border-black bg-white rounded-[20px] lg:w-[50%] 2xl:w-[35%]">
      <div className="p-[20px] md:p-[30px] flex flex-col items-center w-full">
        <Result result={result} strengthBar={strengthBar} bgColor={bgColor} />
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
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <Option
              label="A-Z"
              type="checkbox"
              name="uppercase"
              id="uppercase"
              checked={uppercase}
              onChange={() => setUppercase(!uppercase)}
            />
            <Option
              label="a-z"
              type="checkbox"
              name="lowercase"
              id="lowercase"
              checked={lowercase}
              onChange={() => setLowercase(!lowercase)}
            />
            <Option
              label="0-9"
              type="checkbox"
              name="number"
              id="number"
              checked={numbers}
              onChange={() => setNumbers(!numbers)}
            />
            <Option
              label="!@#^&*"
              type="checkbox"
              name="punctuation"
              id="punctuation"
              checked={punctuation}
              onChange={() => setPunctuation(!punctuation)}
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
          onClick={() => passwordGen()}
        >
          Generate
        </Button>
        <div className="pt-[5px] pl-[14px] text-[13px] border-t border-dashed border-black mt-[20px] text-left">
          * Value must be between 8 and 50. Use 14 characters or more to
          generate a strong password.
        </div>
        <HistoryContainer
          history={history}
          showHistory={showHistory}
          setShowHistory={setShowHistory}
          handleReset={handleReset}
        />
      </div>
    </section>
  );
}

export default Generator;
