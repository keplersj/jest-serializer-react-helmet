import * as React from "react";
import renderer from "react-test-renderer";
import { Helmet } from "react-helmet";
import serializer from ".";

const TestHead = ({
  children
}: React.PropsWithChildren<{}>): React.ReactElement => (
  <>
    <Helmet>
      <title>Hello, Helmet!</title>
      <meta name="description" content="This is a unit test!" />
    </Helmet>
    {children}
  </>
);

describe("Serialization function", () => {
  it("component with React Helment correctly", () => {
    expect.addSnapshotSerializer(serializer);
    const tree = renderer
      .create(
        <TestHead>
          <div>
            <span>Hello, Jest!</span>
          </div>
        </TestHead>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe("Serialization module", () => {
  it("matches expectations", () => {
    expect(serializer).toMatchSnapshot();
  });
});
