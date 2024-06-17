<!DOCTYPE html>
<html>
<head>
    <title inertia></title>
    <meta
        charset="utf-8"
    />
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
    />
    <script
        src="https://cdn.usefathom.com/script.js"
        data-site="GPMJZEQV"
        defer
    />
    <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="{{ asset('favicon.ico') }}"
    />
    <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="{{ asset('favicon.ico') }}"
    />
    <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="{{ asset('favicon.ico') }}"
    />
    </script>
    @viteReactRefresh
    @vite([
    'resources/css/app.css',
    'resources/js/app.jsx'
    ])
    @inertiaHead
</head>
<body class="h-full bg-bg-color font-cerebri font-sans">
    @inertia
</body>
</html>