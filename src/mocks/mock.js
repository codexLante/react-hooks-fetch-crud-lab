global.fetch = jest.fn();

// Before each test, mock the questions data
beforeEach(() => {
  fetch.mockClear();
  fetch.mockResolvedValue({
    ok: true,
    json: async () => [
      {
        id: 1,
        prompt: "lorem testum 2",
        answers: ["option 1", "option 2", "option 3", "option 4"],
        correctIndex: 0
      },
      // ... other test questions
    ]
  });
});