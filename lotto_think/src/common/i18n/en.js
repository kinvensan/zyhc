module.exports = {
  app: think.app,
  localeId: 'en',
  numeralFormat: {
    delimiters: {
      thousands: ',',
      decimal: '.'
    },
    abbreviations: {
      thousand: 'k',
      million: 'm',
      billion: 'b',
      trillion: 't'
    },
    ordinal: function(number) {
      var b = number % 10;
      return (~~(number % 100 / 10) === 1) ? 'th'
        : (b === 1) ? 'st'
          : (b === 2) ? 'nd'
            : (b === 3) ? 'rd' : 'th';
    },
    currency: {
      symbol: '$'
    },
    formats: [ // 定义缩写
      {name: 'USA', format: '$ 0,0[.]00'},
      {name: 'Europe', format: '€ 0,0[.]00'},
      {name: 'Poland', format: 'PLN 0,0[.]00'},
      {name: 'Italy', format: '€ 0,0[.]00'},
      {name: 'UK', format: '£ 0,0[.]00'}
    ]
  },
  translation: {
    'messages': {
      '': {
        'domain': 'messages',
        'lang': 'en',
        'plural_forms': 'nplurals=2; plural=(n != 1);'
      },
      powerball: [ 'Powerball' ],
      megaMillions: [ 'Mega Millions' ],
      EuroMillions: [ 'Euro Millions' ],
      lotteries: [ 'All lotteries' ],
      results: [ 'Results' ],
      information: [ 'Information' ],
      news: [ 'News' ],
      contact: [ 'Contact' ],
      faq: [ 'FAQ' ],
      login: [ 'Login' ],
      signUp: [ 'Sign Up' ]
    },
    'csslang': {
      '': {
        'domain': 'csslang',
        'lang': 'en',
        'plural_forms': 'nplurals=2; plural=(n != 1);'
      },
      'Europe': ['sprite-lang-eu'],
      'Poland': ['sprite-lang-pl'],
      'USA': [ 'sprite-lang-us' ],
      'Italy': ['sprite-lang-it'],
      'UK': ['sprite-lang-gb']
    }
  }
};
