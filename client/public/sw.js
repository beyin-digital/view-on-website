if (!self.define) {
  let e,
    s = {}
  const c = (c, a) => (
    (c = new URL(c + '.js', a).href),
    s[c] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script')
          ;(e.src = c), (e.onload = s), document.head.appendChild(e)
        } else (e = c), importScripts(c), s()
      }).then(() => {
        let e = s[c]
        if (!e) throw new Error(`Module ${c} didn’t register its module`)
        return e
      })
  )
  self.define = (a, i) => {
    const n =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href
    if (s[n]) return
    let r = {}
    const f = (e) => c(e, n),
      d = { module: { uri: n }, exports: r, require: f }
    s[n] = Promise.all(a.map((e) => d[e] || f(e))).then((e) => (i(...e), r))
  }
}
define(['./workbox-50de5c5d'], function (e) {
  'use strict'
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/static/DfFWcM7IJhuF476ILqQ3P/_buildManifest.js',
          revision: '825433d69440239ac60d32f99903f44d',
        },
        {
          url: '/_next/static/DfFWcM7IJhuF476ILqQ3P/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        {
          url: '/_next/static/chunks/0c428ae2-9c0ba3bdc89f44e2.js',
          revision: '9c0ba3bdc89f44e2',
        },
        {
          url: '/_next/static/chunks/1005-c2c2395890dceeac.js',
          revision: 'c2c2395890dceeac',
        },
        {
          url: '/_next/static/chunks/119.808d09fbc95b5d30.js',
          revision: '808d09fbc95b5d30',
        },
        {
          url: '/_next/static/chunks/1217.3b064fae5f6dfadd.js',
          revision: '3b064fae5f6dfadd',
        },
        {
          url: '/_next/static/chunks/1298.a7f0b11d7d0de562.js',
          revision: 'a7f0b11d7d0de562',
        },
        {
          url: '/_next/static/chunks/1405.39a2a7a35d41d6d6.js',
          revision: '39a2a7a35d41d6d6',
        },
        {
          url: '/_next/static/chunks/1429.136d7c070e147436.js',
          revision: '136d7c070e147436',
        },
        {
          url: '/_next/static/chunks/1473.3daff56633521cf4.js',
          revision: '3daff56633521cf4',
        },
        {
          url: '/_next/static/chunks/1556.05800d3e3f0cf9f4.js',
          revision: '05800d3e3f0cf9f4',
        },
        {
          url: '/_next/static/chunks/1579.743fc21528818614.js',
          revision: '743fc21528818614',
        },
        {
          url: '/_next/static/chunks/1664-6077f61cd231cbb6.js',
          revision: '6077f61cd231cbb6',
        },
        {
          url: '/_next/static/chunks/1669.ffd6e058315682c1.js',
          revision: 'ffd6e058315682c1',
        },
        {
          url: '/_next/static/chunks/1870.b7eb8753ea8af51e.js',
          revision: 'b7eb8753ea8af51e',
        },
        {
          url: '/_next/static/chunks/1931.cf6731e0580dd563.js',
          revision: 'cf6731e0580dd563',
        },
        {
          url: '/_next/static/chunks/1960.f7312f3ee8eb5d7a.js',
          revision: 'f7312f3ee8eb5d7a',
        },
        {
          url: '/_next/static/chunks/1962.e5cbb9e4ab053d97.js',
          revision: 'e5cbb9e4ab053d97',
        },
        {
          url: '/_next/static/chunks/1a48c3c1.ee9ea5c0253c73b9.js',
          revision: 'ee9ea5c0253c73b9',
        },
        {
          url: '/_next/static/chunks/1bfc9850.e0265019af303dd1.js',
          revision: 'e0265019af303dd1',
        },
        {
          url: '/_next/static/chunks/2106.d660ffa97086bca8.js',
          revision: 'd660ffa97086bca8',
        },
        {
          url: '/_next/static/chunks/2168.3badd187b2711d37.js',
          revision: '3badd187b2711d37',
        },
        {
          url: '/_next/static/chunks/2332-a071c02967703ace.js',
          revision: 'a071c02967703ace',
        },
        {
          url: '/_next/static/chunks/2340.2913ce1875a2e86b.js',
          revision: '2913ce1875a2e86b',
        },
        {
          url: '/_next/static/chunks/2360-e99d76ae831d3caa.js',
          revision: 'e99d76ae831d3caa',
        },
        {
          url: '/_next/static/chunks/252f366e.bb6ce75d9200a7f8.js',
          revision: 'bb6ce75d9200a7f8',
        },
        {
          url: '/_next/static/chunks/2604.776c86dd22a5d172.js',
          revision: '776c86dd22a5d172',
        },
        {
          url: '/_next/static/chunks/2661.8fd00f08885799c2.js',
          revision: '8fd00f08885799c2',
        },
        {
          url: '/_next/static/chunks/2687.b5dc24f8b4860010.js',
          revision: 'b5dc24f8b4860010',
        },
        {
          url: '/_next/static/chunks/2718.fdead693c8192154.js',
          revision: 'fdead693c8192154',
        },
        {
          url: '/_next/static/chunks/2821.0bd0bcaa37a9f4bd.js',
          revision: '0bd0bcaa37a9f4bd',
        },
        {
          url: '/_next/static/chunks/2887.0af746ada2d41579.js',
          revision: '0af746ada2d41579',
        },
        {
          url: '/_next/static/chunks/3286.4214b1d42ae10ff9.js',
          revision: '4214b1d42ae10ff9',
        },
        {
          url: '/_next/static/chunks/3296.ef15da2acad41a10.js',
          revision: 'ef15da2acad41a10',
        },
        {
          url: '/_next/static/chunks/3317.cfecf9fa60680880.js',
          revision: 'cfecf9fa60680880',
        },
        {
          url: '/_next/static/chunks/3318.5d74498ed0b3f7f0.js',
          revision: '5d74498ed0b3f7f0',
        },
        {
          url: '/_next/static/chunks/3321-f36a18ab93c7483c.js',
          revision: 'f36a18ab93c7483c',
        },
        {
          url: '/_next/static/chunks/3561.4c40d82acecf6f47.js',
          revision: '4c40d82acecf6f47',
        },
        {
          url: '/_next/static/chunks/3624.5bebfde7d0f40ddc.js',
          revision: '5bebfde7d0f40ddc',
        },
        {
          url: '/_next/static/chunks/3711.e33eac3ce669c2dd.js',
          revision: 'e33eac3ce669c2dd',
        },
        {
          url: '/_next/static/chunks/3761.ecd23e720b782eda.js',
          revision: 'ecd23e720b782eda',
        },
        {
          url: '/_next/static/chunks/3776.f08897df1faa15a4.js',
          revision: 'f08897df1faa15a4',
        },
        {
          url: '/_next/static/chunks/3777.9f92c969f1847038.js',
          revision: '9f92c969f1847038',
        },
        {
          url: '/_next/static/chunks/3782.8fe9bef4ae4db37c.js',
          revision: '8fe9bef4ae4db37c',
        },
        {
          url: '/_next/static/chunks/3795.bdbb99ec4d90ea8b.js',
          revision: 'bdbb99ec4d90ea8b',
        },
        {
          url: '/_next/static/chunks/3820.25a9b47ff8c259a3.js',
          revision: '25a9b47ff8c259a3',
        },
        {
          url: '/_next/static/chunks/3868.a7b61c00834bfb7f.js',
          revision: 'a7b61c00834bfb7f',
        },
        {
          url: '/_next/static/chunks/3920.f244a17bc10dd3db.js',
          revision: 'f244a17bc10dd3db',
        },
        {
          url: '/_next/static/chunks/3964.c506e262ebf8cf7f.js',
          revision: 'c506e262ebf8cf7f',
        },
        {
          url: '/_next/static/chunks/3999.462d3a3a12162edb.js',
          revision: '462d3a3a12162edb',
        },
        {
          url: '/_next/static/chunks/4033.90203166bdbfb7cd.js',
          revision: '90203166bdbfb7cd',
        },
        {
          url: '/_next/static/chunks/4064.b4fdf68987ade0b3.js',
          revision: 'b4fdf68987ade0b3',
        },
        {
          url: '/_next/static/chunks/4520.51e242f318d88b4c.js',
          revision: '51e242f318d88b4c',
        },
        {
          url: '/_next/static/chunks/4550.e5807041d0cb6faf.js',
          revision: 'e5807041d0cb6faf',
        },
        {
          url: '/_next/static/chunks/4557.36234a7b055d3ebe.js',
          revision: '36234a7b055d3ebe',
        },
        {
          url: '/_next/static/chunks/4682.eb25395dff76b88f.js',
          revision: 'eb25395dff76b88f',
        },
        {
          url: '/_next/static/chunks/4768.b42d3327208af277.js',
          revision: 'b42d3327208af277',
        },
        {
          url: '/_next/static/chunks/4829.97b6eb4c03ef9725.js',
          revision: '97b6eb4c03ef9725',
        },
        {
          url: '/_next/static/chunks/4858.41c76e81e0e001e6.js',
          revision: '41c76e81e0e001e6',
        },
        {
          url: '/_next/static/chunks/4864.91b04a3696d5aa9c.js',
          revision: '91b04a3696d5aa9c',
        },
        {
          url: '/_next/static/chunks/4881-6c28d926b1131f7f.js',
          revision: '6c28d926b1131f7f',
        },
        {
          url: '/_next/static/chunks/489.049a3381a6f17fe3.js',
          revision: '049a3381a6f17fe3',
        },
        {
          url: '/_next/static/chunks/5035.37bab31827de59be.js',
          revision: '37bab31827de59be',
        },
        {
          url: '/_next/static/chunks/51.edc17d8a255e7f2e.js',
          revision: 'edc17d8a255e7f2e',
        },
        {
          url: '/_next/static/chunks/5151.e680a7faf5370b35.js',
          revision: 'e680a7faf5370b35',
        },
        {
          url: '/_next/static/chunks/52-3f78948bc2e0208e.js',
          revision: '3f78948bc2e0208e',
        },
        {
          url: '/_next/static/chunks/5273-0d0f408e60ccd139.js',
          revision: '0d0f408e60ccd139',
        },
        {
          url: '/_next/static/chunks/5291.b04e8893d1ec964e.js',
          revision: 'b04e8893d1ec964e',
        },
        {
          url: '/_next/static/chunks/533.dbd66f128589c468.js',
          revision: 'dbd66f128589c468',
        },
        {
          url: '/_next/static/chunks/5400.7664e3855bf59230.js',
          revision: '7664e3855bf59230',
        },
        {
          url: '/_next/static/chunks/5511.57300190b19b8f03.js',
          revision: '57300190b19b8f03',
        },
        {
          url: '/_next/static/chunks/5553.4ba75ad713e0f446.js',
          revision: '4ba75ad713e0f446',
        },
        {
          url: '/_next/static/chunks/5588.04a06db8bc926ed3.js',
          revision: '04a06db8bc926ed3',
        },
        {
          url: '/_next/static/chunks/5608-37803c9543e1efc6.js',
          revision: '37803c9543e1efc6',
        },
        {
          url: '/_next/static/chunks/5658.d9e5634808046649.js',
          revision: 'd9e5634808046649',
        },
        {
          url: '/_next/static/chunks/5675-5b7e8c5b0646f2db.js',
          revision: '5b7e8c5b0646f2db',
        },
        {
          url: '/_next/static/chunks/5714.ee87425ffea25fff.js',
          revision: 'ee87425ffea25fff',
        },
        {
          url: '/_next/static/chunks/5803.4636c5f01bd8dcdc.js',
          revision: '4636c5f01bd8dcdc',
        },
        {
          url: '/_next/static/chunks/5861.a4c3bade11e63350.js',
          revision: 'a4c3bade11e63350',
        },
        {
          url: '/_next/static/chunks/5867.725e55e7bf9dbb2a.js',
          revision: '725e55e7bf9dbb2a',
        },
        {
          url: '/_next/static/chunks/59.cb2ff8ed0664d07b.js',
          revision: 'cb2ff8ed0664d07b',
        },
        {
          url: '/_next/static/chunks/5995.0e312ef35407ecf4.js',
          revision: '0e312ef35407ecf4',
        },
        {
          url: '/_next/static/chunks/6046.39bf342f958e5c36.js',
          revision: '39bf342f958e5c36',
        },
        {
          url: '/_next/static/chunks/6072-a148e5cabf8b0123.js',
          revision: 'a148e5cabf8b0123',
        },
        {
          url: '/_next/static/chunks/6203.5eb9af6690ecdc2e.js',
          revision: '5eb9af6690ecdc2e',
        },
        {
          url: '/_next/static/chunks/6225.0d890f097d82b725.js',
          revision: '0d890f097d82b725',
        },
        {
          url: '/_next/static/chunks/6339.cb61fd7790076b0c.js',
          revision: 'cb61fd7790076b0c',
        },
        {
          url: '/_next/static/chunks/6368.8a68c7533eb0610b.js',
          revision: '8a68c7533eb0610b',
        },
        {
          url: '/_next/static/chunks/6390.d6b18302d7e90037.js',
          revision: 'd6b18302d7e90037',
        },
        {
          url: '/_next/static/chunks/6483.18b4d712261ee1d8.js',
          revision: '18b4d712261ee1d8',
        },
        {
          url: '/_next/static/chunks/6506.1027a5e6a0870d2d.js',
          revision: '1027a5e6a0870d2d',
        },
        {
          url: '/_next/static/chunks/6574.640a2659f211bc20.js',
          revision: '640a2659f211bc20',
        },
        {
          url: '/_next/static/chunks/6755.1de70b67def6f4c6.js',
          revision: '1de70b67def6f4c6',
        },
        {
          url: '/_next/static/chunks/6794.6ef30aff1179799e.js',
          revision: '6ef30aff1179799e',
        },
        {
          url: '/_next/static/chunks/6886-900e943643fefc61.js',
          revision: '900e943643fefc61',
        },
        {
          url: '/_next/static/chunks/6893-1c53c16b039aae0e.js',
          revision: '1c53c16b039aae0e',
        },
        {
          url: '/_next/static/chunks/6902.e6ff7d5fb647da4a.js',
          revision: 'e6ff7d5fb647da4a',
        },
        {
          url: '/_next/static/chunks/7058-e39b287b7776b38c.js',
          revision: 'e39b287b7776b38c',
        },
        {
          url: '/_next/static/chunks/7173.fd6fa2a790f42c26.js',
          revision: 'fd6fa2a790f42c26',
        },
        {
          url: '/_next/static/chunks/748.4ce84c15f902b4e6.js',
          revision: '4ce84c15f902b4e6',
        },
        {
          url: '/_next/static/chunks/7533.c2ea32b716c2f4c8.js',
          revision: 'c2ea32b716c2f4c8',
        },
        {
          url: '/_next/static/chunks/754.356c49fd1f91edf4.js',
          revision: '356c49fd1f91edf4',
        },
        {
          url: '/_next/static/chunks/7549.efc4eeb042df0157.js',
          revision: 'efc4eeb042df0157',
        },
        {
          url: '/_next/static/chunks/7624.343ffc0d1fa4bb3c.js',
          revision: '343ffc0d1fa4bb3c',
        },
        {
          url: '/_next/static/chunks/7707.297f12f1caed4e39.js',
          revision: '297f12f1caed4e39',
        },
        {
          url: '/_next/static/chunks/7736-5932af409a3f1d0a.js',
          revision: '5932af409a3f1d0a',
        },
        {
          url: '/_next/static/chunks/78e521c3.7edd1a501d09a551.js',
          revision: '7edd1a501d09a551',
        },
        {
          url: '/_next/static/chunks/7927.fb7e8c1546863f71.js',
          revision: 'fb7e8c1546863f71',
        },
        {
          url: '/_next/static/chunks/8163-265038c07a3a4582.js',
          revision: '265038c07a3a4582',
        },
        {
          url: '/_next/static/chunks/82.26e4a8f919f80b51.js',
          revision: '26e4a8f919f80b51',
        },
        {
          url: '/_next/static/chunks/8256.252379b40f7ad7cd.js',
          revision: '252379b40f7ad7cd',
        },
        {
          url: '/_next/static/chunks/8298.85efbbfc856e54ee.js',
          revision: '85efbbfc856e54ee',
        },
        {
          url: '/_next/static/chunks/8315.104efbdd719b202b.js',
          revision: '104efbdd719b202b',
        },
        {
          url: '/_next/static/chunks/8317.b80862180832ed77.js',
          revision: 'b80862180832ed77',
        },
        {
          url: '/_next/static/chunks/8323.2ae7fa67e6138441.js',
          revision: '2ae7fa67e6138441',
        },
        {
          url: '/_next/static/chunks/834.03d25ed3f9005254.js',
          revision: '03d25ed3f9005254',
        },
        {
          url: '/_next/static/chunks/8512.5896232852b65436.js',
          revision: '5896232852b65436',
        },
        {
          url: '/_next/static/chunks/8631.57ab6e26a60c536a.js',
          revision: '57ab6e26a60c536a',
        },
        {
          url: '/_next/static/chunks/8743.a8183081d0dc2410.js',
          revision: 'a8183081d0dc2410',
        },
        {
          url: '/_next/static/chunks/8780.70e18c21d79b9a2d.js',
          revision: '70e18c21d79b9a2d',
        },
        {
          url: '/_next/static/chunks/8862.8bad393b6feba85d.js',
          revision: '8bad393b6feba85d',
        },
        {
          url: '/_next/static/chunks/8934.ae694ae0cab6a6a5.js',
          revision: 'ae694ae0cab6a6a5',
        },
        {
          url: '/_next/static/chunks/9045.c20e88b13dfe6809.js',
          revision: 'c20e88b13dfe6809',
        },
        {
          url: '/_next/static/chunks/9098.80fec8e1c7bae133.js',
          revision: '80fec8e1c7bae133',
        },
        {
          url: '/_next/static/chunks/9130.3ddd0c27bdb2b07f.js',
          revision: '3ddd0c27bdb2b07f',
        },
        {
          url: '/_next/static/chunks/9187.98e1174e49ff60cc.js',
          revision: '98e1174e49ff60cc',
        },
        {
          url: '/_next/static/chunks/9269.8acfdd4f1abecfe2.js',
          revision: '8acfdd4f1abecfe2',
        },
        {
          url: '/_next/static/chunks/9297.64bcd6d184d76dd2.js',
          revision: '64bcd6d184d76dd2',
        },
        {
          url: '/_next/static/chunks/9345-d5fe668f9a7cef03.js',
          revision: 'd5fe668f9a7cef03',
        },
        {
          url: '/_next/static/chunks/9401.89bbea65ad347165.js',
          revision: '89bbea65ad347165',
        },
        {
          url: '/_next/static/chunks/9422.b851abb09b0a94b5.js',
          revision: 'b851abb09b0a94b5',
        },
        {
          url: '/_next/static/chunks/9431.1e66e959fa173e6a.js',
          revision: '1e66e959fa173e6a',
        },
        {
          url: '/_next/static/chunks/9501.f79b4228b49a4a44.js',
          revision: 'f79b4228b49a4a44',
        },
        {
          url: '/_next/static/chunks/9512-0c7f4e2422ebb2b9.js',
          revision: '0c7f4e2422ebb2b9',
        },
        {
          url: '/_next/static/chunks/95b64a6e.031b6f9f18f6eaa0.js',
          revision: '031b6f9f18f6eaa0',
        },
        {
          url: '/_next/static/chunks/9755.8521e911ef5556d9.js',
          revision: '8521e911ef5556d9',
        },
        {
          url: '/_next/static/chunks/9800.91bc452b06d1f5df.js',
          revision: '91bc452b06d1f5df',
        },
        {
          url: '/_next/static/chunks/9879.e80ea8012cda45f3.js',
          revision: 'e80ea8012cda45f3',
        },
        {
          url: '/_next/static/chunks/9933.b35a316b0f828a7c.js',
          revision: 'b35a316b0f828a7c',
        },
        {
          url: '/_next/static/chunks/d7eeaac4.d0ebe41fbdb95a40.js',
          revision: 'd0ebe41fbdb95a40',
        },
        {
          url: '/_next/static/chunks/framework-aec4381329cec0e4.js',
          revision: 'aec4381329cec0e4',
        },
        {
          url: '/_next/static/chunks/main-cff751b56809a1d7.js',
          revision: 'cff751b56809a1d7',
        },
        {
          url: '/_next/static/chunks/pages/404-93961e6f572e264b.js',
          revision: '93961e6f572e264b',
        },
        {
          url: '/_next/static/chunks/pages/_app-611f75d76ae95059.js',
          revision: '611f75d76ae95059',
        },
        {
          url: '/_next/static/chunks/pages/_error-82b79221b9ed784b.js',
          revision: '82b79221b9ed784b',
        },
        {
          url: '/_next/static/chunks/pages/change-password-21a299ff9f76232d.js',
          revision: '21a299ff9f76232d',
        },
        {
          url: '/_next/static/chunks/pages/contact-21ffc62d39892531.js',
          revision: '21ffc62d39892531',
        },
        {
          url: '/_next/static/chunks/pages/dashboard-d60a071bf140cee2.js',
          revision: 'd60a071bf140cee2',
        },
        {
          url: '/_next/static/chunks/pages/dashboard/profile-25ba60569e67f54b.js',
          revision: '25ba60569e67f54b',
        },
        {
          url: '/_next/static/chunks/pages/dashboard/security-505a7aef5b983aff.js',
          revision: '505a7aef5b983aff',
        },
        {
          url: '/_next/static/chunks/pages/dashboard/subscriptions-36d955de0ab2ae22.js',
          revision: '36d955de0ab2ae22',
        },
        {
          url: '/_next/static/chunks/pages/example-f5a274b8eaeeadcc.js',
          revision: 'f5a274b8eaeeadcc',
        },
        {
          url: '/_next/static/chunks/pages/forgot-password-bb590b5dcb8fc9b9.js',
          revision: 'bb590b5dcb8fc9b9',
        },
        {
          url: '/_next/static/chunks/pages/illustration-37240077411e8695.js',
          revision: '37240077411e8695',
        },
        {
          url: '/_next/static/chunks/pages/index-c35dc20f75c589b7.js',
          revision: 'c35dc20f75c589b7',
        },
        {
          url: '/_next/static/chunks/pages/keywords/%5Bslug%5D-ce5504b6884584d6.js',
          revision: 'ce5504b6884584d6',
        },
        {
          url: '/_next/static/chunks/pages/login-34afe93b23de4025.js',
          revision: '34afe93b23de4025',
        },
        {
          url: '/_next/static/chunks/pages/payment-c3104f61aaaf51c5.js',
          revision: 'c3104f61aaaf51c5',
        },
        {
          url: '/_next/static/chunks/pages/privacy-a1c8c9ea29b3fbf2.js',
          revision: 'a1c8c9ea29b3fbf2',
        },
        {
          url: '/_next/static/chunks/pages/signup-3c9f026242309639.js',
          revision: '3c9f026242309639',
        },
        {
          url: '/_next/static/chunks/pages/subscribe-a680a9ab17aa872f.js',
          revision: 'a680a9ab17aa872f',
        },
        {
          url: '/_next/static/chunks/pages/subscribe/premium-bcbf8bca33dcfd83.js',
          revision: 'bcbf8bca33dcfd83',
        },
        {
          url: '/_next/static/chunks/pages/terms-0bdaabce240b1de5.js',
          revision: '0bdaabce240b1de5',
        },
        {
          url: '/_next/static/chunks/pages/verification-49822e1168896940.js',
          revision: '49822e1168896940',
        },
        {
          url: '/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js',
          revision: '79330112775102f91e1010318bae2bd3',
        },
        {
          url: '/_next/static/chunks/webpack-e8b45d1e4ac3faa8.js',
          revision: 'e8b45d1e4ac3faa8',
        },
        {
          url: '/_next/static/css/3d154874070ad04c.css',
          revision: '3d154874070ad04c',
        },
        {
          url: '/_next/static/css/45ccd052f26a170a.css',
          revision: '45ccd052f26a170a',
        },
        {
          url: '/_next/static/css/f8d9c0446dc5c523.css',
          revision: 'f8d9c0446dc5c523',
        },
        {
          url: '/data/keyword.json',
          revision: '3c8bb7ed2e1a6d0c64c146c52ab56a5f',
        },
        { url: '/favicon.ico', revision: '987d97a1a0f3c8c1a8e9e7876986d795' },
        {
          url: '/icons/apple.svg',
          revision: '9a36680fa58ed8e639792a637682b34f',
        },
        {
          url: '/icons/arrow.png',
          revision: '80ab4186d1c54913453eb968762d992f',
        },
        {
          url: '/icons/arrowAR.png',
          revision: 'b330d67821e6aed46054fc215df5165a',
        },
        {
          url: '/icons/arrowBottom.svg',
          revision: 'dabb9e2beea1fbb1c8b628df4f9d856a',
        },
        {
          url: '/icons/arrowDown.png',
          revision: '98470d90bf2c61e026e9427386386483',
        },
        {
          url: '/icons/arrowDownLeft.png',
          revision: '199c7e7bdfae5571c4d0e5b81623df52',
        },
        {
          url: '/icons/arrowExample.png',
          revision: 'c96730d402f5b26d7d90f656745068e9',
        },
        {
          url: '/icons/arrowExampleAR.png',
          revision: 'f22d706b9a322cee3d2872dca3a98af7',
        },
        {
          url: '/icons/arrowLeftExample.png',
          revision: '53640a174af1627689b6bbbb10b9427b',
        },
        {
          url: '/icons/arrowLeftExampleAR.png',
          revision: '08e68300ad1f407cfb13a61f62f99175',
        },
        {
          url: '/icons/arrowRight.svg',
          revision: '7d9478062f524fef3188a5e004c4be45',
        },
        {
          url: '/icons/arrowUp.png',
          revision: 'e6fbfec8851736f6878c204a477f8e30',
        },
        {
          url: '/icons/arrowUpAR.png',
          revision: '3ec839e1c8e8a15394dc14b9437d5797',
        },
        {
          url: '/icons/arrowUpLeft.svg',
          revision: '66402745f810a8c29c9b71a322eb7fd2',
        },
        {
          url: '/icons/arrowUpRight.svg',
          revision: 'c97dc979239d105d60a2e1cdaef5e732',
        },
        {
          url: '/icons/arrowUpRightGreen.svg',
          revision: 'e79705a14014c467bd35c96e0f13646b',
        },
        {
          url: '/icons/arrowUpright.tsx',
          revision: 'f9dd892e120569853a9e15eb69e85de0',
        },
        {
          url: '/icons/arrowupright.png',
          revision: 'd78653845b083abd0a3edd616561baef',
        },
        {
          url: '/icons/arrowuprightAR.png',
          revision: 'c9afa972453559a12a953907d187c7fe',
        },
        {
          url: '/icons/avatar.svg',
          revision: '88a184c0f2f74b60d3f2a9816729807f',
        },
        {
          url: '/icons/avatarsvg.svg',
          revision: '88a184c0f2f74b60d3f2a9816729807f',
        },
        {
          url: '/icons/card.svg',
          revision: '2061796b2a73ddeb2249d41fef119d32',
        },
        {
          url: '/icons/check.svg',
          revision: 'a8bc4229ba29f38c039ac711b4ea340d',
        },
        { url: '/icons/cvc.svg', revision: '6aabfd22fded17f7573e6aaa0d546416' },
        {
          url: '/icons/date.svg',
          revision: '76754f03661daa528a55a0ac850f74f6',
        },
        {
          url: '/icons/facebook.svg',
          revision: '09c8af7b364330bd3777d0acab54bfe4',
        },
        {
          url: '/icons/facebookColor.svg',
          revision: 'a276f8dcae2968652d958f6aaa309ad5',
        },
        { url: '/icons/ff.svg', revision: 'fb2e6fc8c8f2462eb95c15f5d210da22' },
        {
          url: '/icons/google.svg',
          revision: 'fb2e6fc8c8f2462eb95c15f5d210da22',
        },
        {
          url: '/icons/hashtag.svg',
          revision: 'ce8d5b807d1f662417aa9a771f0374af',
        },
        {
          url: '/icons/home.svg',
          revision: 'a4c0b349f05520733d58853c780328e4',
        },
        { url: '/icons/i.svg', revision: '53810a0ff71b08696e99e3c40a0480c6' },
        {
          url: '/icons/instagram.svg',
          revision: '08915f9a2e7ac7230646adf2dea663f5',
        },
        {
          url: '/icons/left.svg',
          revision: '5158ecddb1f194fdcd1d22b76ec22171',
        },
        {
          url: '/icons/linkedin.svg',
          revision: 'eae2d30b7020c034f9e69133f8ab2c3a',
        },
        {
          url: '/icons/logout.svg',
          revision: '8e8f593d54b60d99704ad24eb9796110',
        },
        {
          url: '/icons/message.svg',
          revision: '2393f165934c98aeaf5819394603eb8c',
        },
        {
          url: '/icons/mouse.svg',
          revision: '47c9338d5b95121495d7b8ca6dfba2c9',
        },
        {
          url: '/icons/play.png',
          revision: '856cb8bca38d26031e328de71a3e8dcd',
        },
        {
          url: '/icons/profile.svg',
          revision: '4769550581ace1f27bb0aee1b545e4ed',
        },
        {
          url: '/icons/security.svg',
          revision: 'd4d42a27538559b32ba02f33c01fea55',
        },
        {
          url: '/icons/sliderArrowLeft.svg',
          revision: 'b86a17dcd7bcbf12ce05b0b8a88bb73b',
        },
        {
          url: '/icons/sliderArrowRight.svg',
          revision: '872df906eb6d88781e0672dc9698ef91',
        },
        {
          url: '/icons/subscribe.svg',
          revision: 'b38b9faa1bad91101da0a4ff252bc27e',
        },
        {
          url: '/icons/twitter.svg',
          revision: 'ffe26a863e8f4aa3149b570804595699',
        },
        {
          url: '/icons/youtube.svg',
          revision: '60c0377105ffb2506dc3f77342a87be9',
        },
        {
          url: '/images/card.png',
          revision: '442434be62b4502c3429b83e5e2fa271',
        },
        {
          url: '/images/card.svg',
          revision: '1a7fa9fdd2005e9658c308388366d9ac',
        },
        {
          url: '/images/card.webp',
          revision: '21ccefed210337e8ea9ae4fd8d8bd742',
        },
        {
          url: '/images/cut-out-parallelogram-7.webp',
          revision: '35f0f11317635bdf1be1010b8936b91c',
        },
        {
          url: '/images/cut-out-parallelogram.png',
          revision: '00f58ba7f66a78c99e21745ef4d50cba',
        },
        {
          url: '/images/cut-out-parallelogram.svg',
          revision: '7573126870416f2f496a6d36b7f0d276',
        },
        {
          url: '/images/cut-out-parallelogram.webp',
          revision: 'c849818f5b8a0e54f09208190b3ff9b0',
        },
        {
          url: '/images/exampleBoxOneIconLeft.webp',
          revision: '3d60d7da89baeff96d32008e2d5e693a',
        },
        {
          url: '/images/exampleBoxOneIconRight.webp',
          revision: '4fa1ab7ab3fcb074b01cb8b2ba2ba0f8',
        },
        {
          url: '/images/illustrationPic.webp',
          revision: '3a619d608aa0a60de0bcb65cf06a00ea',
        },
        {
          url: '/images/illustrationPicAR.webp',
          revision: '726c5a628df39caae83c66eb630f7c44',
        },
        {
          url: '/images/illustrationPicCenter.png',
          revision: '671a785b25689e25977439ec9b76a5c4',
        },
        {
          url: '/images/illustrationPicCenter.svg',
          revision: '74680012e9499e0564853bae520ac121',
        },
        {
          url: '/images/illustrationPicCenterAR.png',
          revision: '4bb3c154c0a8ee8f5e5e047bcbbb4246',
        },
        {
          url: '/images/illustrationPicCenterAR.svg',
          revision: 'a06c835d4d10ba247bb48cfda378c10d',
        },
        {
          url: '/images/illustrationPicMobile.svg',
          revision: 'c01ba554f2c35ccd811cca46671dc9c2',
        },
        {
          url: '/images/illustrationPicMobile.webp',
          revision: 'd720e96ebf952df3dbc6383be0c39f56',
        },
        {
          url: '/images/layoutBoxThree.webp',
          revision: 'ddb5e49ff24ec58804bf5b821d74fded',
        },
        {
          url: '/images/layoutBoxTwo.webp',
          revision: 'fedb141083993067a43ac981829261ce',
        },
        {
          url: '/images/logo.svg',
          revision: '96f7c59efea68377601f8a9ced885c49',
        },
        {
          url: '/images/logo.webp',
          revision: '4f19611a17b906a6267073bb8b6379c5',
        },
        {
          url: '/images/mobile.svg',
          revision: 'e82eeed3fc89c0f7680bcc42a30f4b2c',
        },
        {
          url: '/images/mobile.webp',
          revision: 'e584f469c7c56b60a73c0b63f72baea3',
        },
        {
          url: '/images/phone.svg',
          revision: '3b460ce1c73491033623229a7ecabb6d',
        },
        {
          url: '/images/phone.webp',
          revision: '90acb3ef5fe9222915ba3f90295158f6',
        },
        {
          url: '/images/phoneAR.webp',
          revision: 'fd1b258ba2d6817403d8e3d8f4ed8e92',
        },
        {
          url: '/images/pic.svg',
          revision: 'ba77e9deee429bf60751ea7b57e4a9be',
        },
        {
          url: '/images/pic.webp',
          revision: '66742f5f6c8d249fb82629734a755e8e',
        },
        {
          url: '/images/picAR.webp',
          revision: '90c14159dc83e0765e8f4374310107ce',
        },
        {
          url: '/images/slid.svg',
          revision: 'de93f24b869a0fad7f6b46cf8acda1cf',
        },
        {
          url: '/images/slid.webp',
          revision: '1258a707c2b3470929ac306db9cbd0de',
        },
        {
          url: '/images/sliderExample.webp',
          revision: 'a5598067f8140c3307e1d36412a07798',
        },
        {
          url: '/images/swirl-21.webp',
          revision: '4eadf82102c3b92044dce0c216c8ce20',
        },
        {
          url: '/images/swirl.webp',
          revision: '4eadf82102c3b92044dce0c216c8ce20',
        },
        {
          url: '/images/swirlIllustration.webp',
          revision: 'fda9313e6e51cb65530e15fdc8c5ffde',
        },
        {
          url: '/images/swirlIllustrationLeft.webp',
          revision: 'ef5d97dedf8d291f8b63e52f62ff14f1',
        },
        {
          url: '/images/swirlSmall.svg',
          revision: '7f3c0308ef3d52abeca2d207c93908c3',
        },
        {
          url: '/images/swirlSmall.webp',
          revision: '3ccf7b166dcb2e2fed90e44c85a3712f',
        },
        {
          url: '/locales/ar/changePassword.json',
          revision: '4b0c726b97602a39166c9cb0710f6619',
        },
        {
          url: '/locales/ar/common.json',
          revision: '0e0af3bf3cd8672f863c47c98d716f34',
        },
        {
          url: '/locales/ar/contact.json',
          revision: 'c96f639c0bdc9a8383908c7f07699eaf',
        },
        {
          url: '/locales/ar/dashboard.json',
          revision: 'eba5258124d750a67feb00764454e6a4',
        },
        {
          url: '/locales/ar/error.json',
          revision: '26bce2d05a6a4e6be0a40d5be94ed95e',
        },
        {
          url: '/locales/ar/example.json',
          revision: '055253b65fa644f8c89f47b4711cf385',
        },
        {
          url: '/locales/ar/home.json',
          revision: '48946f5505f2d9fbca929e0c3ed3f881',
        },
        {
          url: '/locales/ar/illustration.json',
          revision: 'ee945d17d28908aabce3835dae8f4e68',
        },
        {
          url: '/locales/ar/login.json',
          revision: 'fde3e87c71dd1e51a4cf06630dacfac9',
        },
        {
          url: '/locales/ar/payment.json',
          revision: 'efa435d0a9b0cbeb7bca184224c63f04',
        },
        {
          url: '/locales/ar/privacy.json',
          revision: 'bbac5530dc21f64c8e7d62e528c5dfad',
        },
        {
          url: '/locales/ar/profile.json',
          revision: 'db06701f9eed134c29e5aafe2c41db66',
        },
        {
          url: '/locales/ar/request.json',
          revision: 'a552f83cf5238c5eea273653782c255c',
        },
        {
          url: '/locales/ar/security.json',
          revision: 'c29966c5d8feecefd71deda5db15bcb1',
        },
        {
          url: '/locales/ar/signup.json',
          revision: '07d256a1cec588f004fee455823fe2eb',
        },
        {
          url: '/locales/ar/slider.json',
          revision: '21af07bf49e8342c499cb7760ead4aa7',
        },
        {
          url: '/locales/ar/subscribe.json',
          revision: '7463e7b96d8907d46d33d763356d929f',
        },
        {
          url: '/locales/ar/subscriptionsDash.json',
          revision: '4f63bd1c8a7833d38557b2c140c42bcf',
        },
        {
          url: '/locales/ar/terms.json',
          revision: '7735e372e79aa4373a009fabf6a6356e',
        },
        {
          url: '/locales/ar/verification.json',
          revision: '4295b069b499f8ff8a1e9e80418be391',
        },
        {
          url: '/locales/en/changePassword.json',
          revision: '68e4ed2d9f435597c83d18edd42c1c1e',
        },
        {
          url: '/locales/en/common.json',
          revision: 'b2db43781f1e240b409622a86afbd138',
        },
        {
          url: '/locales/en/contact.json',
          revision: 'a377392378d6c2ef2cab8d12e261c864',
        },
        {
          url: '/locales/en/dashboard.json',
          revision: '8befa30dde630963f5f434056e363871',
        },
        {
          url: '/locales/en/error.json',
          revision: '9f4bb07434c809e4b116714495fdd22e',
        },
        {
          url: '/locales/en/example.json',
          revision: 'f7f78c54460c5ba7043cc5ab5dcd1cef',
        },
        {
          url: '/locales/en/home.json',
          revision: '427d0e8020ebc53ebfbfba428551d3b0',
        },
        {
          url: '/locales/en/illustration.json',
          revision: '4694d07365adf53f41de75a28d075842',
        },
        {
          url: '/locales/en/login.json',
          revision: '33a1ba91616d235f5140efaf103af954',
        },
        {
          url: '/locales/en/payment.json',
          revision: 'acaf51f9fb44437b2434fdb2c14e6107',
        },
        {
          url: '/locales/en/privacy.json',
          revision: '7c586e3896c2ac5284ad598310d4be1b',
        },
        {
          url: '/locales/en/profile.json',
          revision: '9d36874b7e00656033dc9a6d0773fb89',
        },
        {
          url: '/locales/en/request.json',
          revision: '504395055123f6043d4f9a8cac86105d',
        },
        {
          url: '/locales/en/security.json',
          revision: 'f8e2b5bb907529bbeff430134bbf5137',
        },
        {
          url: '/locales/en/signup.json',
          revision: '19f86b87e2a9cd0d2c28cfb80662226f',
        },
        {
          url: '/locales/en/slider.json',
          revision: '4427b4578f9f29f464ffc8e733f0096f',
        },
        {
          url: '/locales/en/subscribe.json',
          revision: '910b3164886c20a0ebf47e1fd0c72430',
        },
        {
          url: '/locales/en/subscriptionsDash.json',
          revision: 'c47e47b025a0b6ae131007ff523e3a90',
        },
        {
          url: '/locales/en/terms.json',
          revision: '954fdcd77a9893837be4375a38127137',
        },
        {
          url: '/locales/en/verification.json',
          revision: '62f0404a382d00e55eaf63f86d02093b',
        },
        { url: '/logo.svg', revision: '96f7c59efea68377601f8a9ced885c49' },
        {
          url: '/pwa/android-chrome-192x192.png',
          revision: 'd0b1b226968e0e35a05ea1ff9bf86068',
        },
        {
          url: '/pwa/android-chrome-512x512.png',
          revision: '5e2cc367786a148a8c56167651d6ec9d',
        },
        {
          url: '/pwa/apple-touch-icon-114x114-precomposed.png',
          revision: '3d66c99d42e1f3d320c7c6d7a73dd7c2',
        },
        {
          url: '/pwa/apple-touch-icon-114x114.png',
          revision: 'b67efd7f08766ba3da2d4d87242b1ae7',
        },
        {
          url: '/pwa/apple-touch-icon-120x120-precomposed.png',
          revision: '4b8f579a2b3bcddfe2a0eaff114fe185',
        },
        {
          url: '/pwa/apple-touch-icon-120x120.png',
          revision: 'ac9fb849131875286066429cdadd8d96',
        },
        {
          url: '/pwa/apple-touch-icon-144x144-precomposed.png',
          revision: '52c1dfe8e386c05ece09d8a08a5ed9ac',
        },
        {
          url: '/pwa/apple-touch-icon-144x144.png',
          revision: '54f63b9be04fc49e7074acc296bf73de',
        },
        {
          url: '/pwa/apple-touch-icon-152x152-precomposed.png',
          revision: '5957860d48403ceba1639931dce4fe5f',
        },
        {
          url: '/pwa/apple-touch-icon-152x152.png',
          revision: '8d00265a999ea1c23980e390c9917ff7',
        },
        {
          url: '/pwa/apple-touch-icon-180x180-precomposed.png',
          revision: '2e2ccb0ee29bc7a3914d41d16448377b',
        },
        {
          url: '/pwa/apple-touch-icon-180x180.png',
          revision: 'f8d6f3873bf169ee23bb165d2f781f0e',
        },
        {
          url: '/pwa/apple-touch-icon-57x57-precomposed.png',
          revision: 'c01f01490f6e86476d8b5a1d8e72118a',
        },
        {
          url: '/pwa/apple-touch-icon-57x57.png',
          revision: '2bf38c7afb38a0450933df35b8d0186b',
        },
        {
          url: '/pwa/apple-touch-icon-60x60-precomposed.png',
          revision: '0fc4df03397aa32e8633ccadb68fd435',
        },
        {
          url: '/pwa/apple-touch-icon-60x60.png',
          revision: 'f949739f794b3d668099d1745cb82385',
        },
        {
          url: '/pwa/apple-touch-icon-72x72-precomposed.png',
          revision: 'fa838a454fd88c1fbbfde3001ffb7fd5',
        },
        {
          url: '/pwa/apple-touch-icon-72x72.png',
          revision: '78d7d87bc466953195c23104104dbc0f',
        },
        {
          url: '/pwa/apple-touch-icon-76x76-precomposed.png',
          revision: 'd29cfc717759e1ab24b8a62e2c83b335',
        },
        {
          url: '/pwa/apple-touch-icon-76x76.png',
          revision: '8fe9b09d9f5dcac1e3f1cbc6a456383c',
        },
        {
          url: '/pwa/apple-touch-icon-precomposed.png',
          revision: '38071e85ef6d4552c070f32011e09a5a',
        },
        {
          url: '/pwa/apple-touch-icon.png',
          revision: 'f8d6f3873bf169ee23bb165d2f781f0e',
        },
        {
          url: '/pwa/browserconfig.xml',
          revision: '7f2b2f8a4c6863cc7be0a1e4b7963bd9',
        },
        {
          url: '/pwa/favicon-16x16.png',
          revision: '6c64d8c547795bd1537c82f414628d17',
        },
        {
          url: '/pwa/favicon-32x32.png',
          revision: 'db7d5a0aed7b398d9926ea52c5380a72',
        },
        {
          url: '/pwa/favicon.ico',
          revision: '987d97a1a0f3c8c1a8e9e7876986d795',
        },
        {
          url: '/pwa/manifest.json',
          revision: '6e7fedb0f80d3624afe8488ae1184e2c',
        },
        {
          url: '/pwa/mstile-144x144.png',
          revision: 'ebf8d52c13c5ad52f96eee683719a780',
        },
        {
          url: '/pwa/mstile-150x150.png',
          revision: '59f87a83966e9a6f65988a4067a80777',
        },
        {
          url: '/pwa/safari-pinned-tab.svg',
          revision: '9cd89fb198bbaf016bb9a91b80058b2e',
        },
        { url: '/robots.txt', revision: 'f23539c1b3c47131b64d7303bf7214a5' },
        { url: '/script.js', revision: '6b3bc1e75fb5fe3356bbf7a33a96aa85' },
        { url: '/sitemap-0.xml', revision: '64b8c5d3ad09721149073305ba1e2db8' },
        { url: '/sitemap.xml', revision: 'e08ae9f47966fae0653eadd11eadb0e9' },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: c,
              state: a,
            }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        const s = e.pathname
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        return !e.pathname.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      'GET'
    )
})
