export default function Introdution() {
  return (
    <article className="py-4">
      <h1 className="text-3xl font-bold"> Reading Time Estimation: How it works ?</h1>
      <p>
        Everyone of us has a different reading speed, so it is not possible to predict with an
        accurancy of 100% the reading time of a specific human being. But the reading proficency of
        an indivudual it is not the only variable to consider. We need to consider that different
        languages have diffent type of words and phonems, so the calculation of reading time can be
        influenced by the language of the text itself.
      </p>
      <p>
        Some accademic studies (you can take a look to the linked resourced at the end of the
        article if you want to read more details) are suggesting an average reading speed of 184 ±
        29 WPM (words per minute). Below, you can find the specific reading speed for 16 different
        languages:
      </p>
      <div className="flex justify-center p-4">
        <table className="border border-collapse border-slate-400 bg-green-100">
          <caption className="italic text-sm font-extralight">Reading Data by Language</caption>
          <thead>
            <tr>
              <th className="p-2 border border-collapse border-slate-300">Language</th>
              <th className="p-2 border border-collapse border-slate-300">Words/Min</th>
              <th className="p-2 border border-collapse border-slate-300">Characters/Min</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border border-collapse border-slate-300">Arabic</td>
              <td className="p-2 border border-collapse border-slate-300">138</td>
              <td className="p-2 border border-collapse border-slate-300">612</td>
            </tr>
            <tr>
              <td className="p-2 border border-collapse border-slate-300">Chinese</td>
              <td className="p-2 border border-collapse border-slate-300">158</td>
              <td className="p-2 border border-collapse border-slate-300">255</td>
            </tr>
            <tr>
              <td className="p-2  border border-collapse border-slate-300">German</td>
              <td className="p-2 border border-collapse border-slate-300">202</td>
              <td className="p-2 border border-collapse border-slate-300">978</td>
            </tr>
            <tr>
              <td className="p-2 border border-collapse border-slate-300">English</td>
              <td className="p-2 border border-collapse border-slate-300">228</td>
              <td className="p-2 border border-collapse border-slate-300">987</td>
            </tr>
            <tr>
              <td className="p-2 border border-collapse border-slate-300">Finnish </td>
              <td className="p-2 border border-collapse border-slate-300">161</td>
              <td className="p-2 border border-collapse border-slate-300">1078</td>
            </tr>
            <tr>
              <td className="p-2 border border-collapse border-slate-300">French </td>
              <td className="p-2 border border-collapse border-slate-300">195</td>
              <td className="p-2 border border-collapse border-slate-300">998</td>
            </tr>
            <tr>
              <td className="p-2 border border-collapse border-slate-300">Hebrew</td>
              <td className="p-2 border border-collapse border-slate-300">187</td>
              <td className="p-2 border border-collapse border-slate-300">833</td>
            </tr>
            <tr>
              <td className="p-2 border border-collapse border-slate-300">Italian</td>
              <td className="p-2 border border-collapse border-slate-300">188</td>
              <td className="p-2 border border-collapse border-slate-300">950</td>
            </tr>
            <tr>
              <td className="p-2 border border-collapse border-slate-300">Japanese</td>
              <td className="p-2 border border-collapse border-slate-300">193</td>
              <td className="p-2 border border-collapse border-slate-300">357</td>
            </tr>
            <tr>
              <td className="p-2 border border-collapse border-slate-300">Polish</td>
              <td className="p-2 border border-collapse border-slate-300">166</td>
              <td className="p-2 border border-collapse border-slate-300">916</td>
            </tr>
            <tr>
              <td className="p-2 border border-collapse border-slate-300">Portugese</td>
              <td className="p-2 border border-collapse border-slate-300">181</td>
              <td className="p-2 border border-collapse border-slate-300">913</td>
            </tr>
            <tr>
              <td className="p-2 border border-collapse border-slate-300">Russian</td>
              <td className="p-2 border border-collapse border-slate-300">184</td>
              <td className="p-2 border border-collapse border-slate-300">986</td>
            </tr>
            <tr>
              <td className="p-2 border border-collapse border-slate-300">Slovenian</td>
              <td className="p-2 border border-collapse border-slate-300">180</td>
              <td className="p-2 border border-collapse border-slate-300">885</td>
            </tr>
            <tr>
              <td className="p-2 border border-collapse border-slate-300">Spanish</td>
              <td className="p-2 border border-collapse border-slate-300">218</td>
              <td className="p-2 border border-collapse border-slate-300">1025</td>
            </tr>
            <tr>
              <td className="p-2 border border-collapse border-slate-300">Swedish</td>
              <td className="p-2 border border-collapse border-slate-300">199</td>
              <td className="p-2 border border-collapse border-slate-300">917</td>
            </tr>
            <tr>
              <td className="p-2 border border-collapse border-slate-300">Turkish</td>
              <td className="p-2 border border-collapse border-slate-300">166</td>
              <td className="p-2 border border-collapse border-slate-300">1054</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold"> How it is our reading time calculator working ? </h2>
      <p>Actually it is very simple, the process can be divided in three points:</p>
      <ol className="list-decimal">
        <li className="ml-4">
          {" "}
          <strong> Language recognition: </strong> As we seen before, the language it is very
          important, so initially we are trying to detect the language of the text.
        </li>
        <li className="ml-4">
          {" "}
          <strong> Referent WPM: </strong> Once we know the language, we are peeking the wpm used
          for the estimation from the language speicific data in the previous table. If the language
          it is not in the table, we are choosing the average WPM, 184 (as explained before).{" "}
        </li>
        <li className="ml-4">
          <strong> Calculation: </strong> The last step it is very simple, we are counting the words
          in the text and getting an estimation of the time necessary to read the text!
        </li>
      </ol>

      <p> Sources: </p>
      <ul>
        <li>
          <a href="https://psycnet.apa.org/record/1980-29471-001">
            {" "}
            Processing determinants of reading speed{" "}
          </a>
        </li>
        <li>
          <a href="https://iovs.arvojournals.org/article.aspx?articleid=2166061">
            Standardized Assessment of Reading Performance: The New International Reading Speed
            Texts IReST
          </a>
        </li>
      </ul>
    </article>
  );
}
