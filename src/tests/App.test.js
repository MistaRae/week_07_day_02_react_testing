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

  it('should multiply 4 by 4 and get 16', () => {
    const button4 = container.getByText('4');
    const equals = container.getByText('=')
    const multiply = container.getByText('x')
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    fireEvent.click(multiply);
    fireEvent.click(button4);
    fireEvent.click(equals);

    expect(runningTotal).toHaveTextContent('16');
  })

  it('should divide 21 by 7 and get 3', () => {
    const button2 = container.getByText('2');
    const button1 = container.getByText('1');
    const button7 = container.getByText('7');
    const equals = container.getByText('=')
    const divide = container.getByText('/')
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(divide);
    fireEvent.click(button7);
    fireEvent.click(equals);

    expect(runningTotal).toHaveTextContent('3');
  })

  it('should divide 21 by 7 and get 3', () => {
    const button6 = container.getByText('6');
    const button8 = container.getByText('8');
    const button9 = container.getByText('9');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button6);
    fireEvent.click(button8);
    fireEvent.click(button9);
   

    expect(runningTotal).toHaveTextContent('689');
  })

})

