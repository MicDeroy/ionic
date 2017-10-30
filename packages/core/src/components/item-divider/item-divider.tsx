import { Component } from '@stencil/core';


@Component({
  tag: 'ion-item-divider',
  styleUrls: {
    ios: 'item-divider.ios.scss',
    md: 'item-divider.md.scss',
    wp: 'item-divider.wp.scss'
  },
  host: {
    theme: 'item item-divider'
  }
})
export class ItemDivider {
  protected render() {
    return [
      <slot name='start'></slot>,
      <div class='item-inner'>
        <div class='input-wrapper'>
          <slot></slot>
        </div>
        <slot name='end'></slot>
      </div>
    ];
  }
}