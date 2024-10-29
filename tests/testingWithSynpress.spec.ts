import { testWithSynpress } from '@synthetixio/synpress';
import { MetaMask, metaMaskFixtures } from '@synthetixio/synpress/playwright';
import basicSetup from '../wallet-setup/basic.setup';

// Set up the test environment with Synpress and MetaMask fixtures, using the basic setup configuration
const test = testWithSynpress(metaMaskFixtures(basicSetup));

const { expect } = test;

test.only('should open Summer.fi homepage with Metamask already installed in test browser', async ({
	context,
	page,
	metamaskPage,
	extensionId,
}) => {
	// Create a new MetaMask instance with the provided context, page, password, and extension ID
	const metamask = new MetaMask(context, metamaskPage, basicSetup.walletPassword, extensionId);

	// Navigate to the root page
	await page.goto('/');

	// Pause the test so that you can interact manually with Summer.fi website
	// and verify that Metmask browser extension and wallet are installed in test browser
	// whenclicking on 'Connect Wallet'
	await page.pause();
});
