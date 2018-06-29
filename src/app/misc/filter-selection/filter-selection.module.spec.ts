import { FilterSelectionModule } from './filter-selection.module';

describe('FilterSelectionModule', () => {
  let filterSelectionModule: FilterSelectionModule;

  beforeEach(() => {
    filterSelectionModule = new FilterSelectionModule();
  });

  it('should create an instance', () => {
    expect(filterSelectionModule).toBeTruthy();
  });
});
