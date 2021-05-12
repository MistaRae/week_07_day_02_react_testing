import { fireEvent, render } from '@testing-library/react';
import App from '../App';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<App/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByText('4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);

    expect(runningTotal).toHaveTextContent('4');
  })

  it('should add 1 to 4 and get 5', () => {
    const button1 = container.getByText('1');
    const button4 = container.getByText('4');
    const equals = container.getByText('=')
    const add = container.getByText('+')
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button1);
    fireEvent.click(add);
    fireEvent.click(button4);
    fireEvent.click(equals);

    expect(runningTotal).toHaveTextContent('5');
  })

  it('should subtract 1 from 4 and get 3', () => {
    const button1 = container.getByText('1');
    const button4 = container.getByText('4');
    const equals = container.getByText('=')
    const subtract = container.getByText('-')
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button1);
    fireEvent.click(subtract);
    fireEvent.click(button4);
    fireEvent.click(equals);

    expect(runningTotal).toHaveTextContent('3');
  })

})

