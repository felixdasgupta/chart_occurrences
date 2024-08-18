import { atom, createStore } from "jotai";
import { formatPhrase } from "../utils";

export type PhraseMap = {
	[key: string]: number;
};

export const myAtomStore = createStore();
const phraseMapAtom = atom<PhraseMap | null>(null);

export const savePhraseMap = atom(null, (_get, set, phrase: string) => {
	const phraseMap = formatPhrase(phrase);
	set(phraseMapAtom, phraseMap);
});

export const clearPhraseMap = atom(null, (_get, set) => {
	set(phraseMapAtom, null);
});

export const chartPhrase = atom((get) => {
	const phraseMap = get(phraseMapAtom);

	if (!phraseMap) {
		return [];
	}

	return Object.keys(phraseMap)
		.map((word) => ({
			word,
			count: phraseMap[word],
		}))
		.sort((a, b) => b.count - a.count);
});
