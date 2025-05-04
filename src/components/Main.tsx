import Description from "./Description";
import Generator from "./GeneratorApp";

function Main() {
  return (
    <div className="p-[30px] flex flex-col lg:flex-row justify-between items-start md:p-[60px] gap-[60px]  bg-[#EBEDDF] xl:px-[120px]">
      <Description />
      <Generator />
    </div>
  );
}

export default Main;
