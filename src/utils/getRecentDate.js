export const getRecentDate = (steps) => {
  const extractedContent = steps.map((step) => ({
    stepNumber: step.stepNumber,
    stepInfo: step.versionContent.reduce((a, b) =>
      a.effectiveDate > b.effectiveDate ? a : b
    )
  }));

  const newSteps = extractedContent.map((step) => ({
    stepNumber: step.stepNumber,
    title: step.stepInfo.title,
    body: step.stepInfo.body
  }));

  console.log(newSteps);
  return newSteps;
};

export default getRecentDate;
