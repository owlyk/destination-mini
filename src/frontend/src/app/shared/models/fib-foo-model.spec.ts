package src.frontend.src.app.shared.models.fib-foo-model.spec.ts

import { FibFooModel } from './fib-foo-model';

describe('FibFooModel', () => {
  it('should create an instance', () => {
    const model = new FibFooModel();
    expect(model).toBeTruthy();
  });

  it('should have proper structure and data types', () => {
    const model = new FibFooModel();
    expect(model.inputValue).toBeDefined();
    expect(model.inputValue).toEqual(jasmine.any(Number));
    expect(model.result).toBeDefined();
    expect(model.result).toEqual(jasmine.any(Number));
  });

  it('should have default values set properly', () => {
    const model = new FibFooModel();
    expect(model.inputValue).toEqual(0);
    expect(model.result).toEqual(0);
  });
});