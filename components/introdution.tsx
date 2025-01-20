export default function Introdution() {
  return (
    <article className="py-4">
      <h1 className="text-3xl font-bold"> Reading Time Estimation: How it works ?</h1>
      <p>
        {" "}
        Everyone of us has a different reading speed, so it is not possible to predict with an
        accurancy of 100% the reading speed of a specific human being. But the reading proficency of
        a specific indivudual it is not the only variable to consider. We need to consider that
        different languages have diffent type of words and phonems, so the reading speed can be
        influenced by the language of the text itself.
      </p>
      <p>
        {" "}
        Some accademic studies (you can take a look to the linked resourced at the end of the
        article if you want to read more details) are suggesting an average reading speed of 184 ±
        29 WPM (words per minute). Below, you can find the specific reading speed for 17 different
        languages:
      </p>
      <div className="flex justify-center p-4">
        <table className="border border-collapse border-slate-400 bg-green-100">
          <caption className="italic text-sm font-extralight">Reading Data by Language</caption>
          <thead>
            <tr>
              <th className="p-2 border border-collapse border-slate-300">Language Code</th>
              <th className="p-2 border border-collapse border-slate-300">Words/Min</th>
              <th className="p-2 border border-collapse border-slate-300">Characters/Min</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border border-collapse border-slate-300">Ara</td>
              <td className="p-2 border border-collapse border-slate-300">138 (20)</td>
              <td className="p-2 border border-collapse border-slate-300">612 (88)</td>
            </tr>
            <tr>
              <td className="p-2 border border-collapse border-slate-300">Chi</td>
              <td className="p-2 border border-collapse border-slate-300">158 (19)</td>
              <td className="p-2 border border-collapse border-slate-300">255 (29)</td>
            </tr>
            <tr>
              <td className="p-2  border border-collapse border-slate-300">Dut</td>
              <td className="p-2 border border-collapse border-slate-300">202 (29)</td>
              <td className="p-2 border border-collapse border-slate-300">978 (143)</td>
            </tr>
            <tr>
              <td className="p-2 border border-collapse border-slate-300">Eng</td>
              <td className="p-2 border border-collapse border-slate-300">228 (30)</td>
              <td className="p-2 border border-collapse border-slate-300">987 (118)</td>
            </tr>
            <tr>
              <td className="p-2 border border-collapse border-slate-300">Fin</td>
              <td className="p-2 border border-collapse border-slate-300">161 (18)</td>
              <td className="p-2 border border-collapse border-slate-300">1078 (121)</td>
            </tr>
            <tr>
              <td className="p-2 border border-collapse border-slate-300">Fre</td>
              <td className="p-2 border border-collapse border-slate-300">195 (26)</td>
              <td className="p-2 border border-collapse border-slate-300">998 (126)</td>
            </tr>
            <tr>
              <td className="p-2 border border-collapse border-slate-300">Ger</td>
              <td className="p-2 border border-collapse border-slate-300">179 (17)</td>
              <td className="p-2 border border-collapse border-slate-300">920 (86)</td>
            </tr>
            <tr>
              <td className="p-2 border border-collapse border-slate-300">Heb</td>
              <td className="p-2 border border-collapse border-slate-300">187 (29)</td>
              <td className="p-2 border border-collapse border-slate-300">833 (130)</td>
            </tr>
            <tr>
              <td className="p-2 border border-collapse border-slate-300">Ita</td>
              <td className="p-2 border border-collapse border-slate-300">188 (28)</td>
              <td className="p-2 border border-collapse border-slate-300">950 (140)</td>
            </tr>
            <tr>
              <td className="p-2 border border-collapse border-slate-300">Jap</td>
              <td className="p-2 border border-collapse border-slate-300">193 (30)</td>
              <td className="p-2 border border-collapse border-slate-300">357 (56)</td>
            </tr>
            <tr>
              <td className="p-2 border border-collapse border-slate-300">Pol</td>
              <td className="p-2 border border-collapse border-slate-300">166 (23)</td>
              <td className="p-2 border border-collapse border-slate-300">916 (126)</td>
            </tr>
            <tr>
              <td className="p-2 border border-collapse border-slate-300">Por</td>
              <td className="p-2 border border-collapse border-slate-300">181 (29)</td>
              <td className="p-2 border border-collapse border-slate-300">913 (145)</td>
            </tr>
            <tr>
              <td className="p-2 border border-collapse border-slate-300">Rus</td>
              <td className="p-2 border border-collapse border-slate-300">184 (32)</td>
              <td className="p-2 border border-collapse border-slate-300">986 (175)</td>
            </tr>
            <tr>
              <td className="p-2 border border-collapse border-slate-300">Slo</td>
              <td className="p-2 border border-collapse border-slate-300">180 (30)</td>
              <td className="p-2 border border-collapse border-slate-300">885 (145)</td>
            </tr>
            <tr>
              <td className="p-2 border border-collapse border-slate-300">Spa</td>
              <td className="p-2 border border-collapse border-slate-300">218 (28)</td>
              <td className="p-2 border border-collapse border-slate-300">1025 (127)</td>
            </tr>
            <tr>
              <td className="p-2 border border-collapse border-slate-300">Swe</td>
              <td className="p-2 border border-collapse border-slate-300">199 (34)</td>
              <td className="p-2 border border-collapse border-slate-300">917 (156)</td>
            </tr>
            <tr>
              <td className="p-2 border border-collapse border-slate-300">Tur</td>
              <td className="p-2 border border-collapse border-slate-300">166 (25)</td>
              <td className="p-2 border border-collapse border-slate-300">1054 (156)</td>
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
          <strong> Referent WPM: </strong> Once we know the language, we are peeking the wpm for the
          language from the data in the previous table. If the language it is not in the table, we
          are choosing the average WPM, 184 (as explained before).{" "}
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
