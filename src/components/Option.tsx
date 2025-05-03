interface OptionProps {
  label: string;
  type: "checkbox" | "range";
  name: string;
  id: string;
  value?: string | number;
  min?: number;
  max?: number;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Option({
  label,
  type,
  name,
  id,
  value,
  min,
  max,
  checked,
  onChange,
}: OptionProps) {
  return (
    <div className="flex justify-between">
      <label htmlFor={id}>{label}</label>
      {type === "range" ? (
        <div className="psw__range">
          <input
            className="w-[100px] range-custom mr-[5px] overflow-hidden bg-[#ebeddf] md:w-[150px]"
            type="range"
            name={name}
            id={id}
            min={min}
            max={max}
            value={value}
            onChange={onChange}
          />
          <output>{value}</output>
        </div>
      ) : (
        <input
          className="accent-[#97b002]"
          type="checkbox"
          name={name}
          id={id}
          checked={checked}
          onChange={onChange}
        />
      )}
    </div>
  );
}

export default Option;
