export const sortSteps = (steps) => {
  return steps.sort((a, b) => parseInt(a.stepNumber > b.stepNumber ? 1 : -1));
};
