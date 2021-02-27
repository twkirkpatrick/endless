export const getRecentDate = (steps) => {
  const newSteps = steps.map((step) =>
    step.versionContent.reduce((a, b) =>
      a.effectiveDate > b.effectiveDate ? a : b
    )
  );
  return newSteps;
};

export default getRecentDate;
