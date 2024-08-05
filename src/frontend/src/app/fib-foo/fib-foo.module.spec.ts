import { FibFooModule } from './fib-foo.module';

describe('FibFooModule', () => {
  let fibFooModule: FibFooModule;

  beforeEach(() => {
    fibFooModule = new FibFooModule();
  });

  it('should create an instance', () => {
    expect(fibFooModule).toBeTruthy();
  });
});