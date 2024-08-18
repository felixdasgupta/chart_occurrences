import { PhraseMap } from "../store";

export const formatPhrase = (phrase: string) =>
	phrase
		.trim()
		.toLowerCase()
		.replace(/[^\w\s]/g, "")
		.split(" ")
		.filter((word) => word.length > 0)
		.reduce((wordMap: PhraseMap, currentWord) => {
			if (wordMap[currentWord]) {
				wordMap[currentWord]++;
			} else {
				wordMap[currentWord] = 1;
			}
			return wordMap;
		}, {});
