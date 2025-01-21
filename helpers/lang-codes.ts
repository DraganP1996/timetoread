export enum LanguageCodes {
  German = "deu",
  Arabic = "arb",
  Chinese = "cmn",
  Russian = "rus",
  English = "eng",
  Finnish = "fin",
  French = "fra",
  Hebrew = "heb",
  Italian = "ita",
  Japanese = "jpn",
  Polish = "pol",
  Portugese = "por",
  Slovenian = "slv",
  Spanish = "spa",
  Swedish = "swe",
  Turkish = "tur",
}

/**
 * WPM for specific languages according to accademic data
 */
export const LanguageWPM: { [key: string]: number } = {
  deu: 202,
  arb: 138,
  cmn: 158,
  eng: 228,
  fin: 161,
  fra: 195,
  heb: 187,
  ita: 188,
  jpn: 193,
  pol: 166,
  por: 181,
  rus: 184,
  slv: 180,
  spa: 218,
  swe: 199,
  tur: 166,
};

export const AVERAGE_WPM_FOR_UKNOWN_LANGUAGES = 184;
