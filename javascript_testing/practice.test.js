const video = require('./practice');

test('plays video', () => {
  const spy = jest.spyOn(video, 'play');
  const isPlaying = video.play(); // 1
  
  console.log(spy()); // 2
  console.log(spy.mock);
  expect(isPlaying).toBe(true);

  spy.mockRestore();
});

// 