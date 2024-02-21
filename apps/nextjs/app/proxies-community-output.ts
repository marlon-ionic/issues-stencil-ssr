import type { EventName } from '@lit/react';
import { createComponent as createComponentWrapper, Options } from '@lit/react';
import { defineCustomElement as defineMyButton, MyButton as MyButtonElement } from "core/dist/components/my-button.js";
import { defineCustomElement as defineMyComponent, MyComponent as MyComponentElement } from "core/dist/components/my-component.js";
import { defineCustomElement as defineMyNameBadge, MyNameBadge as MyNameBadgeElement } from "core/dist/components/my-name-badge.js";
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

type MyNameBadgeEvents = NonNullable<unknown>;

export const MyNameBadge = createComponent<MyNameBadgeElement, MyNameBadgeEvents>({
    tagName: 'my-name-badge',
    elementClass: MyNameBadgeElement,
    react: React,
    events: {} as MyNameBadgeEvents,
    defineCustomElement: defineMyNameBadge
});
