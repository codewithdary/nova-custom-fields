import "./i18jn.jsx";
import "../css/app.css"
import React from 'react'
import {createRoot} from 'react-dom/client'
import {createInertiaApp} from '@inertiajs/react';
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers'

createInertiaApp({
    title: title => `${title} - BII Orbit`,
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    resolve: (name) =>
        resolvePageComponent(`./pages/${name}.jsx`,import.meta.glob('./pages/**/*.jsx')),
})
