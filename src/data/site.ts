export const languages = ['sl', 'en', 'de', 'it'] as const;
export type Language = (typeof languages)[number];

export const site = 'https://bowlbarbled.si';

export const mapUrl = 'https://www.google.com/maps/search/?api=1&query=Bowl%20Bar%20Bled%2C%20Ljubljanska%20cesta%204%2C%204260%20Bled%2C%20Slovenia';

export const i18n = {
  sl: {
    title: 'Bowl Bar Bled — bowls vsak dan 12:00–20:00',
    desc: 'Bowl Bar v Bledu. Ljubljanska cesta 4, Trgovski center Bled. Odprto vsak dan 12:00–20:00.',
    h1: 'Bowl Bar Bled',
    open: 'Odprto vsak dan',
    hours: '12:00–20:00',
    address: 'Ljubljanska cesta 4.',
    center: 'Trgovski center Bled'
  },
  en: {
    title: 'Bowl Bar Bled — bowls daily 12:00–20:00',
    desc: 'Bowl Bar in Bled, Slovenia. Ljubljanska cesta 4, Bled Shopping Center. Open every day 12:00–20:00.',
    h1: 'Bowl Bar Bled',
    open: 'Open every day',
    hours: '12:00–20:00',
    address: 'Ljubljanska cesta 4.',
    center: 'Bled Shopping Center'
  },
  de: {
    title: 'Bowl Bar Bled — Bowls täglich 12:00–20:00',
    desc: 'Bowl Bar in Bled, Slowenien. Ljubljanska cesta 4, Einkaufszentrum Bled. Täglich geöffnet 12:00–20:00.',
    h1: 'Bowl Bar Bled',
    open: 'Täglich geöffnet',
    hours: '12:00–20:00',
    address: 'Ljubljanska cesta 4.',
    center: 'Einkaufszentrum Bled'
  },
  it: {
    title: 'Bowl Bar Bled — bowl ogni giorno 12:00–20:00',
    desc: 'Bowl Bar a Bled, Slovenia. Ljubljanska cesta 4, Centro commerciale Bled. Aperto ogni giorno 12:00–20:00.',
    h1: 'Bowl Bar Bled',
    open: 'Aperto ogni giorno',
    hours: '12:00–20:00',
    address: 'Ljubljanska cesta 4.',
    center: 'Centro commerciale Bled'
  }
} satisfies Record<Language, {
  title: string;
  desc: string;
  h1: string;
  open: string;
  hours: string;
  address: string;
  center: string;
}>;

export const bowls = {
  sl: [
    { name: 'Losos Bowl', price: '€13.90', text: 'Mariniran losos, sushi riž, avokado, kumara, wakame, črni sezam, vložen ingver, mlada čebula, rdeče zelje, granatno jabolko, wasabi mayo.' },
    { name: 'Tuna Bowl', price: '€14.90', text: 'Marinirana tuna, sushi riž, avokado, mukimame, rdeče zelje, rdeča čebula, redkvica, sezam, nori, mango, hrustljava čebula, spicy mayo.' },
    { name: 'Piščanec Bowl', price: '€13.90', text: 'Teriyaki piščanec, sushi riž, mukimame, redkvica, rdeče zelje, korenje, ananas, mlada čebula, sezam, limeta, hrustljava čebula, poke mayo.' },
    { name: 'Ta Zelen Bowl', price: '€11.90', text: 'Mešana solata, mariniran losos, avokado, češnjev paradižnik, kumara, korenje, redkvica, rdeče zelje, mlada čebula, limona, Philadelphia kremni sir, sezam, poke mayo.' },
    { name: 'Mix Bowl', price: '€14.90', text: 'Mariniran losos in tuna, sushi riž, avokado, nori, kumara, mukimame, wakame, rdeče zelje, črni sezam, hrustljava čebula, ananas, wasabi mayo.' },
    { name: 'Vegi Bowl', price: '€13.90', text: 'Mariniran tempeh, sushi riž, avokado, kumara, korenje, mukimame, vložen ingver, redkvica, sezam, poke mayo.' },
    { name: 'Otroški Bowl', price: '€8.90', text: 'Manjša porcija katerega koli bowla.' }
  ],
  en: [
    { name: 'Salmon Bowl', price: '€13.90', text: 'Marinated salmon, sushi rice, avocado, cucumber, wakame, black sesame, pickled ginger, spring onion, red cabbage, pomegranate, wasabi mayo.' },
    { name: 'Tuna Bowl', price: '€14.90', text: 'Marinated tuna, sushi rice, avocado, mukimame, red cabbage, red onion, radish, sesame seeds, nori, mango, crispy onion, spicy mayo.' },
    { name: 'Chicken Bowl', price: '€13.90', text: 'Teriyaki chicken, sushi rice, mukimame, radish, red cabbage, carrot, pineapple, spring onion, sesame seeds, lime, crispy onion, poke mayo.' },
    { name: 'Green Bowl', price: '€11.90', text: 'Mixed greens, marinated salmon, avocado, cherry tomato, cucumber, carrot, radish, red cabbage, spring onion, lemon, Philadelphia cream cheese, sesame seeds, poke mayo.' },
    { name: 'Mixed Bowl', price: '€14.90', text: 'Marinated salmon and tuna, sushi rice, avocado, nori, cucumber, mukimame, wakame, red cabbage, black sesame seeds, crispy onion, pineapple, wasabi mayo.' },
    { name: 'Vegi Bowl', price: '€13.90', text: 'Marinated tempeh, sushi rice, avocado, cucumber, carrot, mukimame, pickled ginger, radish, sesame seeds, poke mayo.' },
    { name: 'Kids Bowl', price: '€8.90', text: 'Smaller portion of any bowl.' }
  ],
  de: [
    { name: 'Lachs Bowl', price: '€13.90', text: 'Marinierter Lachs, Sushi-Reis, Avocado, Gurke, Wakame, schwarzer Sesam, eingelegter Ingwer, Frühlingszwiebel, Rotkohl, Granatapfel, Wasabi-Mayo.' },
    { name: 'Thunfisch Bowl', price: '€14.90', text: 'Marinierter Thunfisch, Sushi-Reis, Avocado, Mukimame, Rotkohl, rote Zwiebel, Radieschen, Sesam, Nori, Mango, Röstzwiebeln, Spicy Mayo.' },
    { name: 'Chicken Bowl', price: '€13.90', text: 'Teriyaki-Hähnchen, Sushi-Reis, Mukimame, Radieschen, Rotkohl, Karotte, Ananas, Frühlingszwiebel, Sesam, Limette, Röstzwiebeln, Poke-Mayo.' },
    { name: 'Green Bowl', price: '€11.90', text: 'Blattsalat, marinierter Lachs, Avocado, Kirschtomate, Gurke, Karotte, Radieschen, Rotkohl, Frühlingszwiebel, Zitrone, Philadelphia-Frischkäse, Sesam, Poke-Mayo.' },
    { name: 'Mixed Bowl', price: '€14.90', text: 'Marinierter Lachs und Thunfisch, Sushi-Reis, Avocado, Nori, Gurke, Mukimame, Wakame, Rotkohl, schwarzer Sesam, Röstzwiebeln, Ananas, Wasabi-Mayo.' },
    { name: 'Vegi Bowl', price: '€13.90', text: 'Marinierter Tempeh, Sushi-Reis, Avocado, Gurke, Karotte, Mukimame, eingelegter Ingwer, Radieschen, Sesam, Poke-Mayo.' },
    { name: 'Kinder Bowl', price: '€8.90', text: 'Kleinere Portion von jeder Bowl.' }
  ],
  it: [
    { name: 'Bowl Salmone', price: '€13.90', text: 'Salmone marinato, riso sushi, avocado, cetriolo, wakame, sesamo nero, zenzero marinato, cipollotto, cavolo rosso, melograno, maionese wasabi.' },
    { name: 'Bowl Tonno', price: '€14.90', text: 'Tonno marinato, riso sushi, avocado, mukimame, cavolo rosso, cipolla rossa, ravanello, sesamo, nori, mango, cipolla croccante, maionese piccante.' },
    { name: 'Bowl Pollo', price: '€13.90', text: 'Pollo teriyaki, riso sushi, mukimame, ravanello, cavolo rosso, carota, ananas, cipollotto, sesamo, lime, cipolla croccante, maionese poke.' },
    { name: 'Green Bowl', price: '€11.90', text: 'Insalata mista, salmone marinato, avocado, pomodoro ciliegino, cetriolo, carota, ravanello, cavolo rosso, cipollotto, limone, formaggio cremoso Philadelphia, sesamo, maionese poke.' },
    { name: 'Mixed Bowl', price: '€14.90', text: 'Salmone e tonno marinati, riso sushi, avocado, nori, cetriolo, mukimame, wakame, cavolo rosso, sesamo nero, cipolla croccante, ananas, maionese wasabi.' },
    { name: 'Vegi Bowl', price: '€13.90', text: 'Tempeh marinato, riso sushi, avocado, cetriolo, carota, mukimame, zenzero marinato, ravanello, sesamo, maionese poke.' },
    { name: 'Kids Bowl', price: '€8.90', text: 'Porzione più piccola di qualsiasi bowl.' }
  ]
} satisfies Record<Language, readonly { name: string; price: string; text: string }[]>;

export function restaurantSchema(lang: Language) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Bowl Bar Bled',
    servesCuisine: ['Poke', 'Bowls'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Ljubljanska cesta 4',
      postalCode: '4260',
      addressLocality: 'Bled',
      addressCountry: 'SI'
    },
    openingHours: 'Mo-Su 12:00-20:00',
    hasMenu: `${site}/${lang}/#menu`
  };
}
