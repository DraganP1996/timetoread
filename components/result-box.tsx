type ResultBoxProps = {
  label: string;
  value: string;
};

export default function ResultBox({ label, value }: ResultBoxProps) {
  return (
    <div className="flex flex-col gap-1 justify-center items-center bg-green-100 p-2 shadow h-20">
      <div className="font-light text-xs sm:text-sm text-gray-700 text-center leading-4">
        {" "}
        {label}{" "}
      </div>
      <div className="text-lg font-bold leading-4"> {value} </div>
    </div>
  );
}
