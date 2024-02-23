// Adding 'use client' to resolve the following error: Error: Class extends value undefined is not a constructor or null
'use client';

/* eslint-disable */
/* tslint:disable */
/* auto-generated react proxies */
import { createReactComponent } from './react-component-lib';

import type { JSX } from 'core/components';

import { defineCustomElement as defineMyButton } from 'core/components/my-button.js';
import { defineCustomElement as defineMyComponent } from 'core/components/my-component.js';

export const MyButton = /*@__PURE__*/createReactComponent<JSX.MyButton, HTMLMyButtonElement>('my-button', undefined, undefined, defineMyButton);
export const MyComponent = /*@__PURE__*/createReactComponent<JSX.MyComponent, HTMLMyComponentElement>('my-component', undefined, undefined, defineMyComponent);

// Added default export to resolve the following error: Error: Unsupported Server Component type: Module 
export default MyComponent;