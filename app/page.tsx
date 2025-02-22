import { Metadata, Viewport } from "next";

import Introdution from "@/components/introdution";
import TextArea from "@/components/textarea";

export const metadata: Metadata = {
  title: "Reading Time Estimator | Calculate Reading Times Quickly",
  description:
    "Reading time estimator: Calculate the time needed to read a specific text. Useful tool that estimates the reading time of a specific text. Rely on accademic studies about the average reading speed.",
  applicationName: "Reading Time Estimator | Calculate Reading Times Quickly",
  authors: {
    name: "Dragan Petrovic",
    url: "https://github.com/DraganP1996",
  },
  keywords: [
    "reading time estimator",
    "reading time calculator",
    "estimate how long it takes to read text",
    "wordstotime",
    "text to time",
    "words to time calculator",
    "time of reading",
    "text time",
    "word count",
  ],
  creator: "Dragan Petrovic",
  publisher: "Dragan Petrovic",
  alternates: {
    canonical: "https://www.readingtimeestimator.com",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

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
