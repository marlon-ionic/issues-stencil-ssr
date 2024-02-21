import { newSpecPage } from '@stencil/core/testing';
import { MyNameBadge } from '../my-name-badge';

describe('my-name-badge', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyNameBadge],
      html: `<my-name-badge></my-name-badge>`,
    });
    expect(page.root).toEqualHtml(`
      <my-name-badge>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-name-badge>
    `);
  });
});
