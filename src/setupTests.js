import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import './tempPolyfills';

const localStorageMock = {
  getItem: jest.fn(() => (JSON.stringify({}))),
  setItem: jest.fn(),
  clear: jest.fn()
};
global.localStorage = localStorageMock;

configure({ adapter: new Adapter() });
