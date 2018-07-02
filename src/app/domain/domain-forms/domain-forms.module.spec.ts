import { DomainFormsModule } from './domain-forms.module';

describe('DomainFormsModule', () => {
  let domainFormsModule: DomainFormsModule;

  beforeEach(() => {
    domainFormsModule = new DomainFormsModule();
  });

  it('should create an instance', () => {
    expect(domainFormsModule).toBeTruthy();
  });
});
