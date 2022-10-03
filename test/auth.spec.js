import { register } from '../src/Components/Register.js';

jest.mock('../src/main.js');
jest.mock('../src/lib/imports.js');

describe('Test de Registro', () => {
  test('El componente es una función', () => {
    expect(typeof register).toBe('function');
  });
});
