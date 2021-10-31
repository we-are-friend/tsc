function addNumbers(a: number, b: number): number {
  return a + b;
}

export default addNumbers;

export const addStrings = (str1: string, str2: string = ''): string => `${str1} ${str2}`;

// union type
export const format = (title: string, param: string | number): string => `${title} ${param}`;

// void type
export const printFormat = (title: string, param: string | number): void => {
  console.log(format(title, param));
};

export const fetchData = (url: string): Promise<string> => Promise.resolve(`Data from ${url}`);

function introduce(salutation: string, ...names: string[]): string {
  return `${salutation} ${names.join(' ')}`;
}

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
//https://developer.mozilla.org/en-US/docs/Glossary/Falsy
export function getName(user?: { first: string; last: string }): string {
  return `${user?.first ?? 'first'} ${user?.last ?? 'last'}`;
}

function nullishCheck(a: number | undefined | null) {
  console.log(`a : ${a ?? 'undefined or null'}`);
}
