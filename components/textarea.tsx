import ResultBox from "./result-box";

export default function TextArea() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-rows-1 grid-cols-4 sm:grid-cols-5 gap-2 justify-start items-center">
        <ResultBox label="READING TIME" value="00:00" />
        <ResultBox label="WORDS" value="0" />
        <ResultBox label="CHARACTERS" value="0" />
        <ResultBox label="LANGUAGE" value="English" />
      </div>
      <textarea className="w-full border border-green-50 rounded-lg h-[50vh] shadow"></textarea>
    </div>
  );
}
