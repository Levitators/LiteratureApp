import React from "react";
import renderer from "react-test-renderer";

import HomeScreen from "./HomeScreen";
const nav = { navigate: (page: string) => 0 };

it("Snapshot test", () => {
  const home = renderer.create(
    <HomeScreen navigation={nav} />,
  ).toJSON();
  expect(home).toMatchSnapshot();
});
