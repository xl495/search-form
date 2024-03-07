import { AjaxRequest } from "../ajax";
import { expect, describe, it } from "vitest";

describe("AjaxRequest", () => {
  it("should send a GET request", async () => {
    const url = "https://example.com/api/data";
    const ajaxRequest = new AjaxRequest(url);
    const response = await ajaxRequest.send();
    expect(response).toBeDefined();
    // Add more assertions as needed
  });

  it("should send a POST request", async () => {
    const url = "https://example.com/api/data";
    const data = { name: "John Doe", age: 30 };
    const ajaxRequest = new AjaxRequest(url, "POST", data);
    const response = await ajaxRequest.send();
    expect(response).toBeDefined();
    // Add more assertions as needed
  });

  // Add more test cases for other scenarios
});
