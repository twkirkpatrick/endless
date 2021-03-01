const sortSteps = require("../utils/sortSteps");

describe("sortSteps", () => {
  it("should sort an array of objects in ascending order based on the stepNumber", () => {
    const unsortedArray = [
      {
        stepNumber: "2",
        title: "title",
        body: "body"
      },
      {
        stepNumber: "3",
        title: "title",
        body: "body"
      },
      {
        stepNumber: "4",
        title: "title",
        body: "body"
      },
      {
        stepNumber: "1",
        title: "title",
        body: "body"
      }
    ];

    const sortedArray = [
      {
        stepNumber: "1",
        title: "title",
        body: "body"
      },
      {
        stepNumber: "2",
        title: "title",
        body: "body"
      },
      {
        stepNumber: "3",
        title: "title",
        body: "body"
      },
      {
        stepNumber: "4",
        title: "title",
        body: "body"
      }
    ];

    const finalSortedArray = sortSteps(unsortedArray);

    expect(finalSortedArray).toEqual(sortedArray);
  });
});
