import React from "react";
import renderer from "react-test-renderer";

import ProfileScreen from "./ProfileScreen";

it("Snapshot test", () => {
  const home = renderer.create(
    <ProfileScreen />,
  ).toJSON();
  expect(home).toMatchSnapshot();
});
