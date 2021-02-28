export const getRecentDate = (steps) => {
  //I wanted to come up with a cleaner solution for this helper function, but this is what I ended up with.
  //Essentially, we are mapping over the steps that are passed into the function and returning an object with the stepNumber and most recent versionContent object by evaluating the effectiveDate.
  const extractedContent = steps.map((step) => ({
    stepNumber: step.stepNumber,
    stepInfo: step.versionContent.reduce((a, b) =>
      a.effectiveDate > b.effectiveDate ? a : b
    )
  }));

  //In order to remove extraneous data and combine all of the necessary data into one object instead of having a stepInfo object nested in the main object, I ran the array that is returned above through another map method to return an object containing the stepNumber, title, and body only.
  const newSteps = extractedContent.map((step) => ({
    stepNumber: step.stepNumber,
    title: step.stepInfo.title,
    body: step.stepInfo.body
  }));

  return newSteps;
};

export default getRecentDate;
