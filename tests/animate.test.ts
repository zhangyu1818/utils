import animate from '../src/animate';

describe('animate', () => {
  it('should support animate', () => {
    const divElement = document.createElement('div');
    document.body.appendChild(divElement);
    expect.assertions(1);

    return animate({
      elements: divElement,
      duration: 500,
      opacity: ['1', '0'],
      transform: ['translate(100px)', 'translate(50px)'],
    }).then(() => {
      expect({
        opacity: getComputedStyle(divElement).opacity,
        transform: getComputedStyle(divElement).transform,
      }).toEqual({
        opacity: '0',
        transform: 'translate(50px)',
      });
    });
  });
});
