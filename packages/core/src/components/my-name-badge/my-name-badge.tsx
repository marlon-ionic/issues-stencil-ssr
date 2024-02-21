import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-name-badge',
  styleUrl: 'my-name-badge.css',
  shadow: true,
})
export class MyNameBadge {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
