export default function TextArea() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-2 justify-start items-center">
        <div className="flex flex-col gap-1 justify-center items-center bg-green-100 p-2 shadow">
          <div className="font-light text-sm text-gray-700"> READING TIME </div>
          <div className="font-bold text-xl"> 00:00 </div>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center bg-green-100 p-2 shadow">
          <div className="font-light text-sm text-gray-700"> WORDS </div>
          <div className="font-bold text-xl"> 0 </div>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center bg-green-100 p-2 shadow">
          <div className="font-light text-sm text-gray-700"> CHARACTERS </div>
          <div className="font-bold text-xl"> 0 </div>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center bg-green-100 p-2 shadow">
          <div className="font-light text-sm text-gray-700"> LANGUAGE </div>
          <div className="font-bold text-xl"> English </div>
        </div>
      </div>
      <textarea className="w-full border border-green-50 rounded-lg h-[50vh] shadow"></textarea>
    </div>
  );
}
