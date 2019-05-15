export const choose = (choiceType, choice) => ({
  type: "makeChoice",
  choiceType: choiceType,
  choice: choice
});
