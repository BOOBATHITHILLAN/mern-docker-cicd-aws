const request = require("supertest");
const { server, app } = require("../index");
const mongoose = require("mongoose");

describe("Get api/tasks", () => {
  it("it should return 200 ok", async () => {
    const res = await request(app).get("/api/tasks");
    expect(res.statusCode).toBe(200);
    // expect(Array.isArray(res.body)).toBe(true)
  });
  //   it("it should return array data", async () => {
  //     const res = await request(app).get("/api/tasks");
  //     expect(Array.isArray(res.body)).toBe(true);
  //   });
  it("it should return object and tasks property data", async () => {
    const res = await request(app).get("/api/tasks");
    expect(typeof res.body).toBe("object");
    expect(res.body).toHaveProperty("tasks");
  });
});

afterAll(async () => {
  await mongoose.connection.close();
  await server.close();
});
