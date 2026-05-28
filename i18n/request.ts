import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  // Await the locale if it's a promise (standard in Next.js 15/16)
  let locale = await requestLocale;

  // Validate that the incoming `locale` parameter is valid
  if (!locale || !routing.locales.includes(locale as (typeof routing.locales)[number])) {
    locale = routing.defaultLocale;
  }

  console.log('--- SERVER I18N DEBUG ---');
  console.log('Received locale:', locale);

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
