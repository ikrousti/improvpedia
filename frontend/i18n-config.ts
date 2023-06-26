export const i18n = {
    defaultLocale: 'el',
    locales: ['el'],
} as const;

export type Locale = typeof i18n['locales'][number];
