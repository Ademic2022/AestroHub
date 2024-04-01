export const splitStrings = (strings) => {
  const characters = [];
  const regex = /[\s\S]/gu;
  let match;
  while ((match = regex.exec(strings)) !== null) {
    characters.push(match[0]);
  }

  return characters;
};
