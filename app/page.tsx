import Introdution from "@/components/introdution";
import TextArea from "@/components/textarea";

export default function Home() {
  return (
    <div className="grid grid-cols-1 p-2 justify-items-center">
      <div className="max-w-[1200px]">
        <div>
          <TextArea />
        </div>
        <Introdution />
      </div>
    </div>
  );
}
