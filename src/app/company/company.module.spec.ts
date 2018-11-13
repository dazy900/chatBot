import { CompanyModule } from './company.module';

describe('ChatModule', () => {
  let chatModule: CompanyModule;

  beforeEach(() => {
    chatModule = new CompanyModule();
  });

  it('should create an instance', () => {
    expect(chatModule).toBeTruthy();
  });
});
