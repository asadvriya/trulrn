import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
  return rss({
    title: 'TruLrn - True Learn | Truly Learn Everything',
    description: 'TruLrn is a knowledge portal website for experiencing, learning and gaining skills.',
    site: 'https://trulrn.com/',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-us</language>`,
  });
}