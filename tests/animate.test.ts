import animate from '../src/animate';

it('Animate', async () => {
  const divElement = document.createElement('div');
  document.body.appendChild(divElement);
  expect.assertions(1);

  await animate({
    elements: divElement,
    duration: 1000,
    opacity: [1, 0],
    transform: ['translate(100px)', 'translate(50px)'],
  });

  expect({
    opacity: getComputedStyle(divElement).opacity,
    transform: getComputedStyle(divElement).transform,
  }).toEqual({
    opacity: '0',
    transform: 'translate(50px)',
  });
});
