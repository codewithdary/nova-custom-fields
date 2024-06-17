import preset from '../../../../vendor/filament/filament/tailwind.config.preset'

export default {
    presets: [preset],
    content: [
        './app/Filament/**/*.php',
        './resources/views/filament/**/*.blade.php',
        './vendor/filament/**/*.blade.php',
        './vendor/ralphjsmit/laravel-filament-pulse/resources/**/*.blade.php',
        './vendor/laravel/pulse/resources/**/*.blade.php',
        './vendor/ralphjsmit/laravel-filament-media-library/resources/**/*.blade.php'
    ],
}
