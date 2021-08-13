import SnxHoldersPage from '../pages/network-overview/snx-holders-page';

const snxHolders = new SnxHoldersPage();

describe('Wallet overview tests', () => {
  before(() => {
    snxHolders.visit();
  });
  context('Verify correct data is shown', () => {
    it(`table shows top 99 SNX holders`, () => {
      snxHolders.getSnxHolderRows().should('have.length', 99);
    });
  });
});
