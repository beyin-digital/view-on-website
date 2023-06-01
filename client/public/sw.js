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
    const d = (e) => c(e, n),
      f = { module: { uri: n }, exports: r, require: d }
    s[n] = Promise.all(a.map((e) => f[e] || d(e))).then((e) => (i(...e), r))
  }
}
define(['./workbox-588899ac'], function (e) {
  'use strict'
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/static/BOJavnm1-9lNNurWpjgky/_buildManifest.js',
          revision: '22e89f4892d1c098bbd31d86ca865dc9',
        },
        {
          url: '/_next/static/BOJavnm1-9lNNurWpjgky/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        {
          url: '/_next/static/chunks/0c428ae2-9c0ba3bdc89f44e2.js',
          revision: '9c0ba3bdc89f44e2',
        },
        {
          url: '/_next/static/chunks/1036-bb51981f0805c2f9.js',
          revision: 'bb51981f0805c2f9',
        },
        {
          url: '/_next/static/chunks/119.8cb81de3c4d12d5c.js',
          revision: '8cb81de3c4d12d5c',
        },
        {
          url: '/_next/static/chunks/1217.23cc2d4758205c04.js',
          revision: '23cc2d4758205c04',
        },
        {
          url: '/_next/static/chunks/1344.061eb815e451c910.js',
          revision: '061eb815e451c910',
        },
        {
          url: '/_next/static/chunks/1405.9c62150df9bbfa98.js',
          revision: '9c62150df9bbfa98',
        },
        {
          url: '/_next/static/chunks/1416.3cae3c30c5d2e566.js',
          revision: '3cae3c30c5d2e566',
        },
        {
          url: '/_next/static/chunks/1429.c6f94a90b2857db2.js',
          revision: 'c6f94a90b2857db2',
        },
        {
          url: '/_next/static/chunks/1556.b906cbacc2bd45bf.js',
          revision: 'b906cbacc2bd45bf',
        },
        {
          url: '/_next/static/chunks/1579.f1562117d0dfae5e.js',
          revision: 'f1562117d0dfae5e',
        },
        {
          url: '/_next/static/chunks/1664.6077f61cd231cbb6.js',
          revision: '6077f61cd231cbb6',
        },
        {
          url: '/_next/static/chunks/1669.a31c0e22a9d39a20.js',
          revision: 'a31c0e22a9d39a20',
        },
        {
          url: '/_next/static/chunks/1770.fa2387ac695704b6.js',
          revision: 'fa2387ac695704b6',
        },
        {
          url: '/_next/static/chunks/1775-45e7387588395248.js',
          revision: '45e7387588395248',
        },
        {
          url: '/_next/static/chunks/1790.51706ec9cb36910c.js',
          revision: '51706ec9cb36910c',
        },
        {
          url: '/_next/static/chunks/1931.a03306ea8ea6f3c1.js',
          revision: 'a03306ea8ea6f3c1',
        },
        {
          url: '/_next/static/chunks/1960.8b5a23b867cebd22.js',
          revision: '8b5a23b867cebd22',
        },
        {
          url: '/_next/static/chunks/1983.92f7a1e4baffeda9.js',
          revision: '92f7a1e4baffeda9',
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
          url: '/_next/static/chunks/2015.6b0d95eaea4713ba.js',
          revision: '6b0d95eaea4713ba',
        },
        {
          url: '/_next/static/chunks/2106.83f033388f54091e.js',
          revision: '83f033388f54091e',
        },
        {
          url: '/_next/static/chunks/2157.a627427aeb66cf3e.js',
          revision: 'a627427aeb66cf3e',
        },
        {
          url: '/_next/static/chunks/2168.d78f696bc61c6b4b.js',
          revision: 'd78f696bc61c6b4b',
        },
        {
          url: '/_next/static/chunks/252f366e.bb6ce75d9200a7f8.js',
          revision: 'bb6ce75d9200a7f8',
        },
        {
          url: '/_next/static/chunks/2604.2e75390f5095022e.js',
          revision: '2e75390f5095022e',
        },
        {
          url: '/_next/static/chunks/2687.a21b60432eb24edb.js',
          revision: 'a21b60432eb24edb',
        },
        {
          url: '/_next/static/chunks/2887.606e3d821c74480a.js',
          revision: '606e3d821c74480a',
        },
        {
          url: '/_next/static/chunks/3121-96c029cdaf7f5cab.js',
          revision: '96c029cdaf7f5cab',
        },
        {
          url: '/_next/static/chunks/3212.f2d05c0db63134c8.js',
          revision: 'f2d05c0db63134c8',
        },
        {
          url: '/_next/static/chunks/3286.a79e8ad6bd622ab3.js',
          revision: 'a79e8ad6bd622ab3',
        },
        {
          url: '/_next/static/chunks/3296.1facf754f8d0282f.js',
          revision: '1facf754f8d0282f',
        },
        {
          url: '/_next/static/chunks/3317.5f8650bdf240f767.js',
          revision: '5f8650bdf240f767',
        },
        {
          url: '/_next/static/chunks/3318.6720762313d2e816.js',
          revision: '6720762313d2e816',
        },
        {
          url: '/_next/static/chunks/3321-a7f3680792266a99.js',
          revision: 'a7f3680792266a99',
        },
        {
          url: '/_next/static/chunks/343.6b917e7da6557a08.js',
          revision: '6b917e7da6557a08',
        },
        {
          url: '/_next/static/chunks/3484.03cf65580d2c7d38.js',
          revision: '03cf65580d2c7d38',
        },
        {
          url: '/_next/static/chunks/3509.3a34b0460978e0dc.js',
          revision: '3a34b0460978e0dc',
        },
        {
          url: '/_next/static/chunks/3561.d97656c7e5d44680.js',
          revision: 'd97656c7e5d44680',
        },
        {
          url: '/_next/static/chunks/3624.120b6ac89aed3607.js',
          revision: '120b6ac89aed3607',
        },
        {
          url: '/_next/static/chunks/3761.7fcf1be08bb3e5bd.js',
          revision: '7fcf1be08bb3e5bd',
        },
        {
          url: '/_next/static/chunks/3782.c7f5991707639dd3.js',
          revision: 'c7f5991707639dd3',
        },
        {
          url: '/_next/static/chunks/3868.1b1f1d8875cf8d2c.js',
          revision: '1b1f1d8875cf8d2c',
        },
        {
          url: '/_next/static/chunks/3964.f9eaff8d565fc5ef.js',
          revision: 'f9eaff8d565fc5ef',
        },
        {
          url: '/_next/static/chunks/3999.8a61c53014e08684.js',
          revision: '8a61c53014e08684',
        },
        {
          url: '/_next/static/chunks/4031-0f187e1d84cfa55b.js',
          revision: '0f187e1d84cfa55b',
        },
        {
          url: '/_next/static/chunks/4033.6c11a5cddcd89428.js',
          revision: '6c11a5cddcd89428',
        },
        {
          url: '/_next/static/chunks/4064.a15c1803a4af04d4.js',
          revision: 'a15c1803a4af04d4',
        },
        {
          url: '/_next/static/chunks/4299.9945b99daba109f5.js',
          revision: '9945b99daba109f5',
        },
        {
          url: '/_next/static/chunks/4520.ee7c6f49b80cd34d.js',
          revision: 'ee7c6f49b80cd34d',
        },
        {
          url: '/_next/static/chunks/4557.6c18f0115cfb657b.js',
          revision: '6c18f0115cfb657b',
        },
        {
          url: '/_next/static/chunks/4560.af78cc01a01ca929.js',
          revision: 'af78cc01a01ca929',
        },
        {
          url: '/_next/static/chunks/4682.9cef486db1bd0a9e.js',
          revision: '9cef486db1bd0a9e',
        },
        {
          url: '/_next/static/chunks/4768.82296c516241d3e9.js',
          revision: '82296c516241d3e9',
        },
        {
          url: '/_next/static/chunks/4825.c232bc2dec02aec4.js',
          revision: 'c232bc2dec02aec4',
        },
        {
          url: '/_next/static/chunks/4829.7bfcd5f7bd7a2416.js',
          revision: '7bfcd5f7bd7a2416',
        },
        {
          url: '/_next/static/chunks/4864.8deab346c51b3f10.js',
          revision: '8deab346c51b3f10',
        },
        {
          url: '/_next/static/chunks/4881-67fb53dab1b453f1.js',
          revision: '67fb53dab1b453f1',
        },
        {
          url: '/_next/static/chunks/51.258bcef76d1ce33a.js',
          revision: '258bcef76d1ce33a',
        },
        {
          url: '/_next/static/chunks/5291.d331bc1cdf4e0240.js',
          revision: 'd331bc1cdf4e0240',
        },
        {
          url: '/_next/static/chunks/53.947a89cbe1da1686.js',
          revision: '947a89cbe1da1686',
        },
        {
          url: '/_next/static/chunks/533.1d86a5837ed3970e.js',
          revision: '1d86a5837ed3970e',
        },
        {
          url: '/_next/static/chunks/5491.a746ff8d29654d75.js',
          revision: 'a746ff8d29654d75',
        },
        {
          url: '/_next/static/chunks/5511.3190bbd80559af22.js',
          revision: '3190bbd80559af22',
        },
        {
          url: '/_next/static/chunks/5553.80ab26b8503a1358.js',
          revision: '80ab26b8503a1358',
        },
        {
          url: '/_next/static/chunks/5588.9f5aeac2e96ab65c.js',
          revision: '9f5aeac2e96ab65c',
        },
        {
          url: '/_next/static/chunks/5658.b6c86d06834f9c15.js',
          revision: 'b6c86d06834f9c15',
        },
        {
          url: '/_next/static/chunks/5675-e454bcf55fd814aa.js',
          revision: 'e454bcf55fd814aa',
        },
        {
          url: '/_next/static/chunks/5855.ffa14830983535fa.js',
          revision: 'ffa14830983535fa',
        },
        {
          url: '/_next/static/chunks/5861.a3c35c460bca614a.js',
          revision: 'a3c35c460bca614a',
        },
        {
          url: '/_next/static/chunks/5867.64bcdf43fb8778d2.js',
          revision: '64bcdf43fb8778d2',
        },
        {
          url: '/_next/static/chunks/59.e13097e5159506fb.js',
          revision: 'e13097e5159506fb',
        },
        {
          url: '/_next/static/chunks/5995.de6b4f191f568e3d.js',
          revision: 'de6b4f191f568e3d',
        },
        {
          url: '/_next/static/chunks/6046.e9687fc709fce913.js',
          revision: 'e9687fc709fce913',
        },
        {
          url: '/_next/static/chunks/6149.9f49dbc21af8c035.js',
          revision: '9f49dbc21af8c035',
        },
        {
          url: '/_next/static/chunks/6203.3380f97c0687e330.js',
          revision: '3380f97c0687e330',
        },
        {
          url: '/_next/static/chunks/6368.584e5a9d37c6db0e.js',
          revision: '584e5a9d37c6db0e',
        },
        {
          url: '/_next/static/chunks/6506.c8782b0cea261223.js',
          revision: 'c8782b0cea261223',
        },
        {
          url: '/_next/static/chunks/6574.561f31f7d729987a.js',
          revision: '561f31f7d729987a',
        },
        {
          url: '/_next/static/chunks/6755.8baca05d4ec5cf1a.js',
          revision: '8baca05d4ec5cf1a',
        },
        {
          url: '/_next/static/chunks/6783-192d0ea650ceaf32.js',
          revision: '192d0ea650ceaf32',
        },
        {
          url: '/_next/static/chunks/6794.793b4ccfe949941d.js',
          revision: '793b4ccfe949941d',
        },
        {
          url: '/_next/static/chunks/6886-cf78126d842a24cb.js',
          revision: 'cf78126d842a24cb',
        },
        {
          url: '/_next/static/chunks/6893-1c53c16b039aae0e.js',
          revision: '1c53c16b039aae0e',
        },
        {
          url: '/_next/static/chunks/6902.d0f1cfd6d1c45b58.js',
          revision: 'd0f1cfd6d1c45b58',
        },
        {
          url: '/_next/static/chunks/7058-93366f2fb67b311b.js',
          revision: '93366f2fb67b311b',
        },
        {
          url: '/_next/static/chunks/7064-dcf7f225dc39966a.js',
          revision: 'dcf7f225dc39966a',
        },
        {
          url: '/_next/static/chunks/7173.e67a5e617186fc05.js',
          revision: 'e67a5e617186fc05',
        },
        {
          url: '/_next/static/chunks/7211.0292681d63770a3b.js',
          revision: '0292681d63770a3b',
        },
        {
          url: '/_next/static/chunks/7533.d6da97d51eb13fc3.js',
          revision: 'd6da97d51eb13fc3',
        },
        {
          url: '/_next/static/chunks/754.ffc8d32f7d7c733d.js',
          revision: 'ffc8d32f7d7c733d',
        },
        {
          url: '/_next/static/chunks/7549.b18026950ee322f9.js',
          revision: 'b18026950ee322f9',
        },
        {
          url: '/_next/static/chunks/7633-1604725b7eedb7df.js',
          revision: '1604725b7eedb7df',
        },
        {
          url: '/_next/static/chunks/7707.968561d79fa927a6.js',
          revision: '968561d79fa927a6',
        },
        {
          url: '/_next/static/chunks/78e521c3.da545ed948d77149.js',
          revision: 'da545ed948d77149',
        },
        {
          url: '/_next/static/chunks/7927.6f2cbda133ab4844.js',
          revision: '6f2cbda133ab4844',
        },
        {
          url: '/_next/static/chunks/8074.4512e48c5eb80950.js',
          revision: '4512e48c5eb80950',
        },
        {
          url: '/_next/static/chunks/8298.efb042ba135406f9.js',
          revision: 'efb042ba135406f9',
        },
        {
          url: '/_next/static/chunks/83.5de10aeee4b9c490.js',
          revision: '5de10aeee4b9c490',
        },
        {
          url: '/_next/static/chunks/8323.864cf8cc7309caac.js',
          revision: '864cf8cc7309caac',
        },
        {
          url: '/_next/static/chunks/8512.22275bfd76c608f5.js',
          revision: '22275bfd76c608f5',
        },
        {
          url: '/_next/static/chunks/8564.071843c15bd3e908.js',
          revision: '071843c15bd3e908',
        },
        {
          url: '/_next/static/chunks/8631.a59a97dba31b6b42.js',
          revision: 'a59a97dba31b6b42',
        },
        {
          url: '/_next/static/chunks/8680.03487c7d6051f3ee.js',
          revision: '03487c7d6051f3ee',
        },
        {
          url: '/_next/static/chunks/8691.f46910eef77e585b.js',
          revision: 'f46910eef77e585b',
        },
        {
          url: '/_next/static/chunks/8719.35d53b6d52fb7fa5.js',
          revision: '35d53b6d52fb7fa5',
        },
        {
          url: '/_next/static/chunks/8722.74e434e58e94d2ec.js',
          revision: '74e434e58e94d2ec',
        },
        {
          url: '/_next/static/chunks/8743.92cb2229a68c7ea8.js',
          revision: '92cb2229a68c7ea8',
        },
        {
          url: '/_next/static/chunks/8862.1ce48c8022c6f445.js',
          revision: '1ce48c8022c6f445',
        },
        {
          url: '/_next/static/chunks/8934.6a30f878168562b0.js',
          revision: '6a30f878168562b0',
        },
        {
          url: '/_next/static/chunks/9.f594a518989fdc4c.js',
          revision: 'f594a518989fdc4c',
        },
        {
          url: '/_next/static/chunks/9036.4d6588390ced4711.js',
          revision: '4d6588390ced4711',
        },
        {
          url: '/_next/static/chunks/9130.42be3b9da3d3b0c9.js',
          revision: '42be3b9da3d3b0c9',
        },
        {
          url: '/_next/static/chunks/9145.d568f18f2e6b74c2.js',
          revision: 'd568f18f2e6b74c2',
        },
        {
          url: '/_next/static/chunks/9187.31f56862eddabe63.js',
          revision: '31f56862eddabe63',
        },
        {
          url: '/_next/static/chunks/9214.2f2eed57d4414734.js',
          revision: '2f2eed57d4414734',
        },
        {
          url: '/_next/static/chunks/9226.acea022d45ea8c38.js',
          revision: 'acea022d45ea8c38',
        },
        {
          url: '/_next/static/chunks/9269.a82518a747f525b6.js',
          revision: 'a82518a747f525b6',
        },
        {
          url: '/_next/static/chunks/9297.853cb5847e51cf85.js',
          revision: '853cb5847e51cf85',
        },
        {
          url: '/_next/static/chunks/9367.c498994f7c1bdab9.js',
          revision: 'c498994f7c1bdab9',
        },
        {
          url: '/_next/static/chunks/9401.0e38a572e5b7a51d.js',
          revision: '0e38a572e5b7a51d',
        },
        {
          url: '/_next/static/chunks/9443-afd75e2534c48168.js',
          revision: 'afd75e2534c48168',
        },
        {
          url: '/_next/static/chunks/9501.4be4e2ed478172af.js',
          revision: '4be4e2ed478172af',
        },
        {
          url: '/_next/static/chunks/9504-9ba0fc0a286d5aab.js',
          revision: '9ba0fc0a286d5aab',
        },
        {
          url: '/_next/static/chunks/9509.f847dd9355be7f94.js',
          revision: 'f847dd9355be7f94',
        },
        {
          url: '/_next/static/chunks/95b64a6e.031b6f9f18f6eaa0.js',
          revision: '031b6f9f18f6eaa0',
        },
        {
          url: '/_next/static/chunks/9620.750dbbbb3a80fef8.js',
          revision: '750dbbbb3a80fef8',
        },
        {
          url: '/_next/static/chunks/9702.9ad51bd1439b0520.js',
          revision: '9ad51bd1439b0520',
        },
        {
          url: '/_next/static/chunks/9800.ed18bc7f6c00a338.js',
          revision: 'ed18bc7f6c00a338',
        },
        {
          url: '/_next/static/chunks/9836.e959dd599cdbf440.js',
          revision: 'e959dd599cdbf440',
        },
        {
          url: '/_next/static/chunks/9912.2b0a9c9ef6f03423.js',
          revision: '2b0a9c9ef6f03423',
        },
        {
          url: '/_next/static/chunks/9933.c571be455c6b9300.js',
          revision: 'c571be455c6b9300',
        },
        {
          url: '/_next/static/chunks/d7eeaac4.d0ebe41fbdb95a40.js',
          revision: 'd0ebe41fbdb95a40',
        },
        {
          url: '/_next/static/chunks/framework-ce84985cd166733a.js',
          revision: 'ce84985cd166733a',
        },
        {
          url: '/_next/static/chunks/main-66ae202fe30b8944.js',
          revision: '66ae202fe30b8944',
        },
        {
          url: '/_next/static/chunks/pages/404-4ffd258c5823ac9e.js',
          revision: '4ffd258c5823ac9e',
        },
        {
          url: '/_next/static/chunks/pages/_app-bbfc52d1444bdf81.js',
          revision: 'bbfc52d1444bdf81',
        },
        {
          url: '/_next/static/chunks/pages/_error-82b79221b9ed784b.js',
          revision: '82b79221b9ed784b',
        },
        {
          url: '/_next/static/chunks/pages/about-46210d8f7b5defd4.js',
          revision: '46210d8f7b5defd4',
        },
        {
          url: '/_next/static/chunks/pages/change-password-5afad331aed92eb5.js',
          revision: '5afad331aed92eb5',
        },
        {
          url: '/_next/static/chunks/pages/contact-006250360dc613a8.js',
          revision: '006250360dc613a8',
        },
        {
          url: '/_next/static/chunks/pages/dashboard-a5200360e38fbff6.js',
          revision: 'a5200360e38fbff6',
        },
        {
          url: '/_next/static/chunks/pages/dashboard/profile-0f47e7fe09c9d34e.js',
          revision: '0f47e7fe09c9d34e',
        },
        {
          url: '/_next/static/chunks/pages/dashboard/security-52e4bfdf30a1abb9.js',
          revision: '52e4bfdf30a1abb9',
        },
        {
          url: '/_next/static/chunks/pages/dashboard/subscriptions-d0cbcab8a877468a.js',
          revision: 'd0cbcab8a877468a',
        },
        {
          url: '/_next/static/chunks/pages/example-282309804d78fc9d.js',
          revision: '282309804d78fc9d',
        },
        {
          url: '/_next/static/chunks/pages/forgot-password-0a4449c676ba6d8d.js',
          revision: '0a4449c676ba6d8d',
        },
        {
          url: '/_next/static/chunks/pages/illustration-24f941026828b8cd.js',
          revision: '24f941026828b8cd',
        },
        {
          url: '/_next/static/chunks/pages/index-e22951c95f904e1c.js',
          revision: 'e22951c95f904e1c',
        },
        {
          url: '/_next/static/chunks/pages/login-490f2d38bbe66dc4.js',
          revision: '490f2d38bbe66dc4',
        },
        {
          url: '/_next/static/chunks/pages/privacy-12fe5696b6645f05.js',
          revision: '12fe5696b6645f05',
        },
        {
          url: '/_next/static/chunks/pages/signup-098d981c58ec3b6c.js',
          revision: '098d981c58ec3b6c',
        },
        {
          url: '/_next/static/chunks/pages/subscribe-21e20482c51c1638.js',
          revision: '21e20482c51c1638',
        },
        {
          url: '/_next/static/chunks/pages/terms-82dd66c8b9ca4c33.js',
          revision: '82dd66c8b9ca4c33',
        },
        {
          url: '/_next/static/chunks/pages/verification-40441022545de01a.js',
          revision: '40441022545de01a',
        },
        {
          url: '/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js',
          revision: '837c0df77fd5009c9e46d446188ecfd0',
        },
        {
          url: '/_next/static/chunks/webpack-f46a1e37729004cd.js',
          revision: 'f46a1e37729004cd',
        },
        {
          url: '/_next/static/css/45ccd052f26a170a.css',
          revision: '45ccd052f26a170a',
        },
        {
          url: '/_next/static/css/dcd4e44737d35dad.css',
          revision: 'dcd4e44737d35dad',
        },
        {
          url: '/_next/static/css/e11e2ff0b0f42c6f.css',
          revision: 'e11e2ff0b0f42c6f',
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
          revision: '69e3c774f787554dcea94160997996ff',
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
          url: '/images/illustrationPicCenterAR.png',
          revision: '4bb3c154c0a8ee8f5e5e047bcbbb4246',
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
          url: '/images/mobile.webp',
          revision: 'e584f469c7c56b60a73c0b63f72baea3',
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
          url: '/images/pic.webp',
          revision: '66742f5f6c8d249fb82629734a755e8e',
        },
        {
          url: '/images/picAR.webp',
          revision: '90c14159dc83e0765e8f4374310107ce',
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
          url: '/images/swirlSmall.webp',
          revision: '3ccf7b166dcb2e2fed90e44c85a3712f',
        },
        {
          url: '/locales/ar/changePassword.json',
          revision: '706ac5f0ef3855a5fa8dfeb357f17a35',
        },
        {
          url: '/locales/ar/common.json',
          revision: '5a1b166d7f09822c17d68015375a09fa',
        },
        {
          url: '/locales/ar/contact.json',
          revision: '3da7f2aabc0999ea7f9bcc4304c40417',
        },
        {
          url: '/locales/ar/dashboard.json',
          revision: 'd8704d2eb8e46adab252f58b1cc4b458',
        },
        {
          url: '/locales/ar/error.json',
          revision: 'ffc6776292aff5ae4f9f90bf3ea213aa',
        },
        {
          url: '/locales/ar/example.json',
          revision: '9bbe338e0696e5dcd4b220d30ec84e98',
        },
        {
          url: '/locales/ar/home.json',
          revision: 'f47b230350b8941827dfecae654f88dc',
        },
        {
          url: '/locales/ar/illustration.json',
          revision: '03d629e661f29463e8866c8911c13fe9',
        },
        {
          url: '/locales/ar/login.json',
          revision: 'fdd9d64498fdf1a7588f4fbf9f51fa8d',
        },
        {
          url: '/locales/ar/payment.json',
          revision: '7a3550d82e36d19f6ccb670d655bdc70',
        },
        {
          url: '/locales/ar/privacy.json',
          revision: 'bd057b6923dee2b3c3005f3a4a909687',
        },
        {
          url: '/locales/ar/profile.json',
          revision: 'ac59e77302847c20249871bb4110949f',
        },
        {
          url: '/locales/ar/request.json',
          revision: 'c15d7400468f1db8abb9b49e87f4cedb',
        },
        {
          url: '/locales/ar/security.json',
          revision: 'ac03c85a8be222ff90a37b92b34c0da0',
        },
        {
          url: '/locales/ar/signup.json',
          revision: '0bc3fce1c6f518a8c32f842af9972010',
        },
        {
          url: '/locales/ar/slider.json',
          revision: 'e27d4e6bec175258352d4403905acb25',
        },
        {
          url: '/locales/ar/subscribe.json',
          revision: '1794bc67a417d72c50b3ceb96a8ca484',
        },
        {
          url: '/locales/ar/subscriptionsDash.json',
          revision: 'faf96cd7720dc3ce53ffff283d0cb399',
        },
        {
          url: '/locales/ar/terms.json',
          revision: 'e0f9abfa2f073df81ea599d07493697d',
        },
        {
          url: '/locales/ar/verification.json',
          revision: 'e628daef13f92026425b80764ad8548b',
        },
        {
          url: '/locales/en/changePassword.json',
          revision: 'd7b9cefc0023dc92cdbb495b12f7a15d',
        },
        {
          url: '/locales/en/common.json',
          revision: 'ce65b5e774c5b5e7b2b2f2789945f8f8',
        },
        {
          url: '/locales/en/contact.json',
          revision: 'b568eaae4404a3d8503851b50120ab4b',
        },
        {
          url: '/locales/en/dashboard.json',
          revision: 'dff1c4a5320b26aeeaa954e49d1ab5e1',
        },
        {
          url: '/locales/en/error.json',
          revision: 'd7f36e6a0ea028375eafda53754b3e61',
        },
        {
          url: '/locales/en/example.json',
          revision: '048a10b87e546d02529aac7046cf174a',
        },
        {
          url: '/locales/en/home.json',
          revision: 'd3195476090abbdd077dc7d0c244531f',
        },
        {
          url: '/locales/en/illustration.json',
          revision: 'b7d5074445ca5546e940bba759306c91',
        },
        {
          url: '/locales/en/login.json',
          revision: '3dd8bff59925bd7732723d401465abf1',
        },
        {
          url: '/locales/en/payment.json',
          revision: '547438803c832ba284bdd33ec14d0db0',
        },
        {
          url: '/locales/en/privacy.json',
          revision: '0703ae06a0742519b3367ee85b64257b',
        },
        {
          url: '/locales/en/profile.json',
          revision: '9e6349684f2a2fbb12032f7c74b2b0d2',
        },
        {
          url: '/locales/en/request.json',
          revision: 'fd7ce8d26e246148302242008c8a8fa1',
        },
        {
          url: '/locales/en/security.json',
          revision: '0b2f7d69fdf95d42aa65d36154b2ab6a',
        },
        {
          url: '/locales/en/signup.json',
          revision: '4f2feb859d198d0b8aa1a64d65e93508',
        },
        {
          url: '/locales/en/slider.json',
          revision: '6d4d79392bb608e7c0a8517e11582d8e',
        },
        {
          url: '/locales/en/subscribe.json',
          revision: 'e7510c27881c6ad82e97830a20e2c55e',
        },
        {
          url: '/locales/en/subscriptionsDash.json',
          revision: '215fe3f41f7ffbb550b92ac0b4b4fa4b',
        },
        {
          url: '/locales/en/terms.json',
          revision: '4bf98efd0cc43b7fada92ff8e6728d3f',
        },
        {
          url: '/locales/en/verification.json',
          revision: 'dfc407c10e973baa8e414aad7132e267',
        },
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
          revision: '812198a897a41d0d7ea703cc2e725382',
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
        { url: '/sitemap-0.xml', revision: 'eb4195ab3b2ff66c7f46bdbe3b95d34a' },
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
