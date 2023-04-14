import { TestBed } from '@angular/core/testing';

import { AuthIterceptorInterceptor } from './auth-iterceptor.interceptor';

describe('AuthIterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AuthIterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AuthIterceptorInterceptor = TestBed.inject(AuthIterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
