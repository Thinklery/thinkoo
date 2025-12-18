import { questions } from './questions';

export default function getResults(optionsSelected: (number | null)[]) {
  const countMap: Record<string, number> = {
    'E': 0,
    'I': 0,
    'S': 0,
    'N': 0,
    'T': 0,
    'F': 0,
    'J': 0,
    'P': 0,
  };
  questions.forEach((question, index) => {
    if (optionsSelected[index] === null) return;
    const letters = question.options[optionsSelected[index]!].mbti ?? [];
    for (const letter of letters) {
      countMap[letter] += 1;
    }
  });
  const result = getMBTI(countMap) as string;
  return result;
}

function getMBTI(scores: Record<string, number>) {
	const mbti =
		(scores['E'] >= scores['I'] ? 'E' : 'I') +
		(scores['S'] >= scores['N'] ? 'S' : 'N') +
		(scores['T'] >= scores['F'] ? 'T' : 'F') +
		(scores['J'] >= scores['P'] ? 'J' : 'P');
	return mbti;
}