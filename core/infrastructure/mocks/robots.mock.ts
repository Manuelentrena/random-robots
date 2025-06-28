import { type RandomUserDto } from '@/core/infrastructure/types/random-user.types';

export const robotsMock = [
  {
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Elliot',
      last: 'Margaret',
    },
    location: {
      street: {
        number: 1496,
        name: 'St. Lawrence Ave',
      },
      city: 'Trout Lake',
      state: 'Manitoba',
      country: 'Canada',
      postcode: 'M1P 4X4',
      coordinates: {
        latitude: '-67.6457',
        longitude: '-47.4323',
      },
      timezone: {
        offset: '+4:00',
        description: 'Abu Dhabi, Muscat, Baku, Tbilisi',
      },
    },
    email: 'elliot.margaret@example.com',
    login: {
      uuid: '4a92de2f-d8b2-4650-9c44-9be40dadcb83',
      username: 'crazyelephant608',
      password: 'scooby1',
      salt: '1FSiAucu',
      md5: '0203b24342b46eb35c89dd7fb99ec8f4',
      sha1: '729758577276c5865b660e1a99a8383fd3956c08',
      sha256: '3926b02fc6a78f3e0919c04c293837b3542767699090f3b8990bb46f85a4b7d4',
    },
    dob: {
      date: '1985-02-28T08:42:01.434Z',
      age: 40,
    },
    registered: {
      date: '2020-05-07T05:52:56.512Z',
      age: 5,
    },
    phone: 'A86 V76-5290',
    cell: 'Q33 U25-5179',
    id: {
      name: 'SIN',
      value: '219901683',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/25.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/25.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/25.jpg',
    },
    nat: 'CA',
  },
  {
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Lucas',
      last: 'Cook',
    },
    location: {
      street: {
        number: 8804,
        name: 'Herbert Road',
      },
      city: 'Portmarnock',
      state: 'Fingal',
      country: 'Ireland',
      postcode: 92560,
      coordinates: {
        latitude: '76.3252',
        longitude: '-146.7863',
      },
      timezone: {
        offset: '-12:00',
        description: 'Eniwetok, Kwajalein',
      },
    },
    email: 'lucas.cook@example.com',
    login: {
      uuid: '965c4893-bf28-474c-86e7-c31057148ff8',
      username: 'greenrabbit225',
      password: 'assassin',
      salt: 'nBCMys6b',
      md5: '31a322d30644bf30316ddf03f3a21684',
      sha1: 'b3dec1137066a85edcbce93bd60be7886f6f04de',
      sha256: 'a6a9ce52fa390b3bbd53fc9aff575d5254945a891d65d90c70eb5fe6acf7fd36',
    },
    dob: {
      date: '1997-01-02T19:33:51.196Z',
      age: 28,
    },
    registered: {
      date: '2013-03-19T11:41:44.135Z',
      age: 12,
    },
    phone: '011-388-7999',
    cell: '081-017-6635',
    id: {
      name: 'PPS',
      value: '3545812T',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/68.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/68.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/68.jpg',
    },
    nat: 'IE',
  },
  {
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Rudolf',
      last: 'Heuer',
    },
    location: {
      street: {
        number: 6920,
        name: 'Gartenstraße',
      },
      city: 'Neuffen',
      state: 'Sachsen-Anhalt',
      country: 'Germany',
      postcode: 38625,
      coordinates: {
        latitude: '-76.9586',
        longitude: '-63.1074',
      },
      timezone: {
        offset: '-9:00',
        description: 'Alaska',
      },
    },
    email: 'rudolf.heuer@example.com',
    login: {
      uuid: 'd76308fb-be42-4560-9f9e-e32c1b029306',
      username: 'brownmeercat734',
      password: 'clayton',
      salt: '5SxoJfNe',
      md5: '33d00bb9fc2d0d39e8dd1a46c92e62e9',
      sha1: '1da26c19fb1fc175be4fc6ffc094e47f1d46421d',
      sha256: '9b778677b3df108c28b5d18b25803d9eddc4e272df9f935666b8dc11e0fa20c4',
    },
    dob: {
      date: '1973-10-23T22:01:41.723Z',
      age: 51,
    },
    registered: {
      date: '2014-08-27T17:09:34.559Z',
      age: 10,
    },
    phone: '0672-1888230',
    cell: '0179-9603532',
    id: {
      name: 'SVNR',
      value: '29 231073 H 344',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/27.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/27.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/27.jpg',
    },
    nat: 'DE',
  },
  {
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Urbano',
      last: 'Aragão',
    },
    location: {
      street: {
        number: 8982,
        name: 'Rua da Paz ',
      },
      city: 'Petrópolis',
      state: 'Pará',
      country: 'Brazil',
      postcode: 21397,
      coordinates: {
        latitude: '-37.8304',
        longitude: '19.7769',
      },
      timezone: {
        offset: '+5:00',
        description: 'Ekaterinburg, Islamabad, Karachi, Tashkent',
      },
    },
    email: 'urbano.aragao@example.com',
    login: {
      uuid: '69bc1090-c8fd-4d4c-93c5-02af8531ee01',
      username: 'whiterabbit604',
      password: 'millwall',
      salt: '490lHfdp',
      md5: 'c46fbd239cf0ad5c6141913dcafb78cc',
      sha1: '623ff9d772d7b8fd2bfa666f53860c504af7a649',
      sha256: '6843eb9b050de1e1b882377ddc0b96ae765202e2ef788dd81d787a7f1973fa30',
    },
    dob: {
      date: '1945-11-15T06:02:34.767Z',
      age: 79,
    },
    registered: {
      date: '2011-11-19T18:44:18.826Z',
      age: 13,
    },
    phone: '(91) 2075-2063',
    cell: '(17) 9830-9354',
    id: {
      name: 'CPF',
      value: '881.886.894-67',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/92.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/92.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/92.jpg',
    },
    nat: 'BR',
  },
  {
    gender: 'female',
    name: {
      title: 'Mrs',
      first: 'Maëlle',
      last: 'Da Silva',
    },
    location: {
      street: {
        number: 9188,
        name: 'Rue Saint-Georges',
      },
      city: 'Tours',
      state: "Côtes-D'Armor",
      country: 'France',
      postcode: 97609,
      coordinates: {
        latitude: '32.5506',
        longitude: '120.0561',
      },
      timezone: {
        offset: '-9:00',
        description: 'Alaska',
      },
    },
    email: 'maelle.dasilva@example.com',
    login: {
      uuid: '67297e68-6a20-4e4c-8e37-7964e016c2e8',
      username: 'bluewolf225',
      password: 'super',
      salt: 'xB6NwFPv',
      md5: 'd49366703106b9b431a6aee6a1e2fc6e',
      sha1: '9ac3a8841afa68806701846e220884e5c2a1d363',
      sha256: '65d8e59a8b067791edf2f29826121d131c756a7e45b72a578a3cecaa13e3004a',
    },
    dob: {
      date: '1955-04-25T11:21:37.599Z',
      age: 70,
    },
    registered: {
      date: '2016-01-25T14:55:00.232Z',
      age: 9,
    },
    phone: '02-46-11-69-20',
    cell: '06-27-29-22-65',
    id: {
      name: 'INSEE',
      value: '2550363181621 74',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/52.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/52.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/52.jpg',
    },
    nat: 'FR',
  },
  {
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Samu',
      last: 'Lauri',
    },
    location: {
      street: {
        number: 8344,
        name: 'Bulevardi',
      },
      city: 'Lieksa',
      state: 'Central Finland',
      country: 'Finland',
      postcode: 57584,
      coordinates: {
        latitude: '34.1440',
        longitude: '-153.5917',
      },
      timezone: {
        offset: '+9:30',
        description: 'Adelaide, Darwin',
      },
    },
    email: 'samu.lauri@example.com',
    login: {
      uuid: '4cdceef1-3caa-4585-868e-2432d51b59d5',
      username: 'orangeladybug424',
      password: 'xian',
      salt: 'Ji1r2EYJ',
      md5: '7f21d4a22e2fa8145d23ff8426570cae',
      sha1: 'c7b0b625a950e4b55f5320cb40857652aea4e347',
      sha256: '946742d6835741e85a1418679708b7a48adb0716057287727404afdd0b4291d9',
    },
    dob: {
      date: '1998-11-15T18:40:25.684Z',
      age: 26,
    },
    registered: {
      date: '2015-08-16T11:27:33.271Z',
      age: 9,
    },
    phone: '07-104-641',
    cell: '046-511-72-62',
    id: {
      name: 'HETU',
      value: 'NaNNA943undefined',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/81.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/81.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/81.jpg',
    },
    nat: 'FI',
  },
  {
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Hunter',
      last: 'Bélanger',
    },
    location: {
      street: {
        number: 6382,
        name: 'St. Lawrence Ave',
      },
      city: 'Fauquier',
      state: 'Nunavut',
      country: 'Canada',
      postcode: 'U2D 2D3',
      coordinates: {
        latitude: '74.7382',
        longitude: '80.1822',
      },
      timezone: {
        offset: '+9:30',
        description: 'Adelaide, Darwin',
      },
    },
    email: 'hunter.belanger@example.com',
    login: {
      uuid: '6391a134-9b89-44bb-b2cd-e461ffa05954',
      username: 'tinyostrich440',
      password: 'martina',
      salt: 'rtLfsVcu',
      md5: 'b07cc2d9309dc732a8ce896b15dfc7b5',
      sha1: 'f4a32fa20a3c33f5fd1cb60418151bea5a0f4830',
      sha256: 'cf39a61a70eb6e04558949b670d59d9f9d55c59e2efb69b12ba670287d563603',
    },
    dob: {
      date: '1957-05-07T13:36:21.563Z',
      age: 68,
    },
    registered: {
      date: '2004-11-01T22:21:10.380Z',
      age: 20,
    },
    phone: 'W06 R25-9052',
    cell: 'L08 R52-7001',
    id: {
      name: 'SIN',
      value: '256897638',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/71.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/71.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/71.jpg',
    },
    nat: 'CA',
  },
  {
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Boban',
      last: 'Simonović',
    },
    location: {
      street: {
        number: 6121,
        name: 'Velislava Vulovića',
      },
      city: 'Temerin',
      state: 'Kosovo',
      country: 'Serbia',
      postcode: 55639,
      coordinates: {
        latitude: '-29.2921',
        longitude: '65.2918',
      },
      timezone: {
        offset: '+2:00',
        description: 'Kaliningrad, South Africa',
      },
    },
    email: 'boban.simonovic@example.com',
    login: {
      uuid: '604e0be3-a92e-4ff3-8104-9fc807ef340c',
      username: 'goldenelephant757',
      password: 'assassin',
      salt: 'W3pdhP1Q',
      md5: '6b63049d0a402e5212647197d3348404',
      sha1: '1b1a7d7e260b60a255f3e6aa166246d2631493d5',
      sha256: '3f1c9ae5c90c83ee609be055796abff14da48f30156f58c2e279c367018426d6',
    },
    dob: {
      date: '1983-08-09T21:02:29.540Z',
      age: 41,
    },
    registered: {
      date: '2019-04-20T00:06:33.273Z',
      age: 6,
    },
    phone: '021-4222-343',
    cell: '067-3331-179',
    id: {
      name: 'SID',
      value: '437718613',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/92.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/92.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/92.jpg',
    },
    nat: 'RS',
  },
  {
    gender: 'female',
    name: {
      title: 'Ms',
      first: 'Alea',
      last: 'Schie',
    },
    location: {
      street: {
        number: 9101,
        name: 'Hausmanns gate',
      },
      city: 'Vollen',
      state: 'Aust-Agder',
      country: 'Norway',
      postcode: '5165',
      coordinates: {
        latitude: '3.9119',
        longitude: '-103.5178',
      },
      timezone: {
        offset: '-9:00',
        description: 'Alaska',
      },
    },
    email: 'alea.schie@example.com',
    login: {
      uuid: '1a52cfd6-0f48-46ee-adea-df6ac6ac271e',
      username: 'goldenmouse541',
      password: 'minemine',
      salt: 'wZh5VAsB',
      md5: 'a5515d742f1ac40b7cf1c994e1beda4d',
      sha1: '99b578ddf261e6d72acd3472bb3e8338766136b1',
      sha256: '42e48ec173cc5d3f9a9d84afc569c64fe9aeb310ef7f4f00d6fef7dc285f2287',
    },
    dob: {
      date: '1971-06-24T22:58:50.790Z',
      age: 54,
    },
    registered: {
      date: '2007-01-12T23:53:22.147Z',
      age: 18,
    },
    phone: '24215546',
    cell: '48986934',
    id: {
      name: 'FN',
      value: '24067121895',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/52.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/52.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/52.jpg',
    },
    nat: 'NO',
  },
  {
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Austin',
      last: 'Newman',
    },
    location: {
      street: {
        number: 3059,
        name: 'Park Road',
      },
      city: 'Loughrea',
      state: 'Waterford',
      country: 'Ireland',
      postcode: 71389,
      coordinates: {
        latitude: '87.8602',
        longitude: '160.1102',
      },
      timezone: {
        offset: '-8:00',
        description: 'Pacific Time (US & Canada)',
      },
    },
    email: 'austin.newman@example.com',
    login: {
      uuid: '3f67ea58-a5d3-4e23-a867-a31af414b4f3',
      username: 'ticklishgorilla128',
      password: 'thecat',
      salt: 'r1QaA3pT',
      md5: '52cfec0b8e505b475fe3b1a448062ca9',
      sha1: '56af87883b56757e01dc25f19d0d3c36962a2d84',
      sha256: '93cffb0842e39f434ee6c396ca8cbb7ee9c1b7478b110a7c506988ae91844503',
    },
    dob: {
      date: '1979-07-19T10:09:23.430Z',
      age: 45,
    },
    registered: {
      date: '2010-10-18T01:19:00.827Z',
      age: 14,
    },
    phone: '011-868-7911',
    cell: '081-543-1371',
    id: {
      name: 'PPS',
      value: '5341799T',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/85.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/85.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/85.jpg',
    },
    nat: 'IE',
  },
] as RandomUserDto[];
