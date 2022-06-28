import { toBeInTheDocument } from '@testing-library/jest-dom/dist/matchers';
import { render, screen } from '@testing-library/react';
import App from './App';
import Clock from './components/Clock'

describe('<Clock />', ()=> {

  beforeAll(() => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date('June 26, 2022 21:00:00'));
  });
  
  afterAll(() => {
    jest.useRealTimers();
  });

  test('renders 8 clocks', () => {
    render(<App />);
    const clocks = screen.queryAllByTestId('clock');
    expect(clocks.length).toBe(8);
  });

  test('renders name in the clock', ()=>{
    render(<Clock name="Berlin" timezone={0} />);
    const berlin = screen.getByText(/Berlin/g);
    expect(berlin).toBeInTheDocument()
    render(<Clock name="London" timezone={0} />);
    const london = screen.getByText(/London/g);
    expect(london).toBeInTheDocument()
  })


  test('renders name fallback', ()=>{
    render(<Clock timezone={0} />);
    const unknown = screen.getByText(/unknown city/g);
    expect(unknown).toBeInTheDocument()
  })

  test('renders time in hh:mm:ss', ()=>{
    render(<Clock name="Berlin" timezone={0} />);
    const time = screen.getByText(/(\d{2}:){2}\d{2}/g);
    expect(time).toBeInTheDocument()
  })

  test('renders offset time in 24hr', ()=>{
    render(<Clock name="London" timezone={-1} />);
    const londonTime = screen.getByText(/20:00:00/g);
    expect(londonTime).toBeInTheDocument();

    render(<Clock name="Berlin" timezone={0} />);
    const berlinTime = screen.getByText(/21:00:00/g);
    expect(berlinTime).toBeInTheDocument();
  })
  
})
