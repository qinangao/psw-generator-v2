import Description from "./Description";
import Generator from "./GeneratorApp";

function Main() {
  return (
    <div className="p-[30px] flex flex-col md:flex-row justify-between md:p-[50px] gap-[60px] items-center bg-[#EBEDDF] xl:px-[120px] :py-[100px]">
      <Description />
      <Generator />
    </div>
  );
}

export default Main;
