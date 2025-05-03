import Description from "./Description";
import Generator from "./Generator";

function Main() {
  return (
    <div className="flex flex-col md:flex-row justify-between p-[50px] gap-[60px] items-center bg-[#EBEDDF] xl:px-[120px] :py-[100px]">
      <Description />
      <Generator />
    </div>
  );
}

export default Main;
