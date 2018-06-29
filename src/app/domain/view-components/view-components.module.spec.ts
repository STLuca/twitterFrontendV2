import { ViewComponentsModule } from './view-components.module';

describe('ViewComponentsModule', () => {
  let viewComponentsModule: ViewComponentsModule;

  beforeEach(() => {
    viewComponentsModule = new ViewComponentsModule();
  });

  it('should create an instance', () => {
    expect(viewComponentsModule).toBeTruthy();
  });
});
