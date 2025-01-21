"use client";

import { useState } from "react";
import { franc } from "franc";

import { AVERAGE_WPM_FOR_UKNOWN_LANGUAGES, LanguageWPM } from "@/helpers/lang-codes";
import { formatDuration } from "@/helpers/duration-formatter";
import ResultBox from "./result-box";

export default function TextArea() {
  const [countWords, setCountWords] = useState<number>(0);
  const [countChars, setCountChars] = useState<number>(0);
  const [minutesToRead, setMinutesToRead] = useState<number>();

  const onTextareChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = event.target.value;
    const language = franc(text);
    const words = text.trim().match(/\S+/g)?.length || 0;

    const WPM = LanguageWPM[language] || AVERAGE_WPM_FOR_UKNOWN_LANGUAGES;

    setCountChars(text.trim().length);
    setCountWords(words);
    setMinutesToRead(words / WPM);
  };

  const formattedDuration = formatDuration(minutesToRead || 0);

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-rows-1 grid-cols-4 sm:grid-cols-5 gap-2 justify-start items-center">
        <ResultBox label="READING TIME" value={formattedDuration || "0"} />
        <ResultBox label="WORDS" value={`${countWords}`} />
        <ResultBox label="CHARACTERS" value={`${countChars}`} />
      </div>
      <textarea
        className="w-full border border-green-50 rounded-lg h-[50vh] shadow"
        onChange={onTextareChange}
      ></textarea>
    </div>
  );
}
