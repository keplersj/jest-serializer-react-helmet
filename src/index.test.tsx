import serializer from ".";

describe("Serialization module", () => {
  it("matches expectations", () => {
    expect(serializer).toMatchSnapshot();
  });
});
