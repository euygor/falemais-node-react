import App from './App';
import { render, screen } from '@testing-library/react';
import { calculateFee } from './helpers/calculateFee';
import { TypeFees } from './types/TypeFees';
import { api } from './Api';


// Integration test
describe('Integration test', () => {
  it('check if component "<Form />" exists within the application looking for the name "FaleMais"', () => {
    render(<App />);
    const text = screen.getByText('FaleMais');
    expect(text).toBeInTheDocument();
  });

  it('check if api call is working', async () => {
    const response = await api.getFees();
    expect(response.status).toBe(200);
  });

});

// Unit test
describe('Unit test', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should calculate the fee correctly', async () => {
    const fees: TypeFees[] = await (await api.getFees()).data;
    const inputVoid = calculateFee(0, 0, 0, 0, fees);
    const inputFilled = Number(calculateFee(11, 18, 30, 32, fees).toFixed(2));

    expect(inputVoid).toBe(0);
    expect(inputFilled).toBe(3.89);
  });
});