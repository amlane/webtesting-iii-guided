import { savePerson } from "./helpers.js";

jest.mock("uuid", () => {
  return () => "abc234";
});

describe("helpers", () => {
  it("should return newly saved person", () => {
    const name = "Amanda";
    const expected = {
      name,
      id: "abc234"
    };
    const actual = savePerson(name);
    expect(actual).toEqual(expected);
  });
});
