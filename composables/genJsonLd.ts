
export function genJsonLd () {
  const i18n = useNuxtApp().$i18n;

  const title = i18n.t("test.test.title");
  return {
    '@context': 'http://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: title,
          },
        ],
      },
    ],
  };
}

export function genJsonLdScript (data: any) {
  return {
    type: 'application/ld+json',
    children: JSON.stringify(data, null, ''),
    id: 'jsonld',
  };
}
