import { newE2EPage } from '@stencil/core/testing';

describe('my-name-badge', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-name-badge></my-name-badge>');

    const element = await page.find('my-name-badge');
    expect(element).toHaveClass('hydrated');
  });
});
