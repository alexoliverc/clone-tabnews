test("GET to /api/v1/status should return status 200", () => {
  fetch("http://localhost:3000/api/v1/status").then((res) => {
    expect(res.status).toBe(200);
  });
});
