// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Mock window.scrollTo used in ScrollToTop component to avoid jsdom "Not implemented: window.scrollTo"
Object.defineProperty(window, 'scrollTo', { value: jest.fn(), writable: true });

// Mock react-tsparticles to prevent canvas initialization during tests (jsdom has no canvas)
jest.mock('react-tsparticles', () => () => null);
