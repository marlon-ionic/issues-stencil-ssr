// Adding 'use client' to resolve the following error: Error: Class extends value undefined is not a constructor or null
'use client';

import type { EventName } from '@lit/react';
import { createComponent as createComponentWrapper, Options } from '@lit/react';
import { defineCustomElement as defineMyButton, MyButton as MyButtonElement } from "core/components/my-button.js";
import { defineCustomElement as defineMyComponent, MyComponent as MyComponentElement } from "core/components/my-component.js";
import React from 'react';

const createComponent = <T extends HTMLElement, E extends Record<string, EventName | string>>({ defineCustomElement, ...options }: Options<T, E> & { defineCustomElement: () => void }) => {
    if (typeof defineCustomElement !== 'undefined') {
        defineCustomElement();
    }
    return createComponentWrapper<T, E>(options);
};

type MyButtonEvents = NonNullable<unknown>;

export const MyButton = createComponent<MyButtonElement, MyButtonEvents>({
    tagName: 'my-button',
    elementClass: MyButtonElement,
    react: React,
    events: {} as MyButtonEvents,
    defineCustomElement: defineMyButton
});

type MyComponentEvents = NonNullable<unknown>;

export const MyComponent = createComponent<MyComponentElement, MyComponentEvents>({
    tagName: 'my-component',
    elementClass: MyComponentElement,
    react: React,
    events: {} as MyComponentEvents,
    defineCustomElement: defineMyComponent
});

// Added default export to resolve the following error: Error: Unsupported Server Component type: Module 
export default MyComponent;