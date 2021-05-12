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

  it('should be able to concatenate number inputs', () => {
    const button6 = container.getByText('6');
    const button8 = container.getByText('8');
    const button9 = container.getByText('9');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button6);
    fireEvent.click(button8);
    fireEvent.click(button9);
   

    expect(runningTotal).toHaveTextContent('689');
  })

  it('should be able to clear the running total without affecting the calculation', () => {
    const button7 = container.getByText('7');
    const button8 = container.getByText('8');
    const button9 = container.getByText('9');
    const add = container.getByText('+')
    const subtract = container.getByText('-')
    const equals = container.getByText('=')
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button7);
    fireEvent.click(add);
    fireEvent.click(button9);
    fireEvent.click(equals);
    fireEvent.click(subtract);
    fireEvent.click(button8);
    fireEvent.click(equals);
   

    expect(runningTotal).toHaveTextContent('8');
  })

  it('should be able to chain mutliple events together', () => {
    const button7 = container.getByText('7');
    const button8 = container.getByText('8');
    const clear = container.getByText('C');
    const add = container.getByText('+')
    const equals = container.getByText('=')
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button7);
    fireEvent.click(add);
    fireEvent.click(clear);
    fireEvent.click(button8);
    fireEvent.click(equals);
   

    expect(runningTotal).toHaveTextContent('15');
  })


})

