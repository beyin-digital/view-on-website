if(!self.define){let e,s={};const c=(c,a)=>(c=new URL(c+".js",a).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let r={};const d=e=>c(e,n),t={module:{uri:n},exports:r,require:d};s[n]=Promise.all(a.map((e=>t[e]||d(e)))).then((e=>(i(...e),r)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/UoPCImuJ4JVsLtiTz0GLf/_buildManifest.js",revision:"f197254db41689ba4ba10522c88e3112"},{url:"/_next/static/UoPCImuJ4JVsLtiTz0GLf/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0c428ae2-9c0ba3bdc89f44e2.js",revision:"9c0ba3bdc89f44e2"},{url:"/_next/static/chunks/119.8cb81de3c4d12d5c.js",revision:"8cb81de3c4d12d5c"},{url:"/_next/static/chunks/1217.f40e9a3e417fbbc1.js",revision:"f40e9a3e417fbbc1"},{url:"/_next/static/chunks/1298.6b2d8ce18286611d.js",revision:"6b2d8ce18286611d"},{url:"/_next/static/chunks/1344.745abc06f831c0ed.js",revision:"745abc06f831c0ed"},{url:"/_next/static/chunks/1405.9c62150df9bbfa98.js",revision:"9c62150df9bbfa98"},{url:"/_next/static/chunks/1429.c6f94a90b2857db2.js",revision:"c6f94a90b2857db2"},{url:"/_next/static/chunks/1556.e323723dc0709784.js",revision:"e323723dc0709784"},{url:"/_next/static/chunks/1579.f1562117d0dfae5e.js",revision:"f1562117d0dfae5e"},{url:"/_next/static/chunks/1664-6077f61cd231cbb6.js",revision:"6077f61cd231cbb6"},{url:"/_next/static/chunks/1669.3d0b36ad579de53b.js",revision:"3d0b36ad579de53b"},{url:"/_next/static/chunks/1790.0e333ca0b055a168.js",revision:"0e333ca0b055a168"},{url:"/_next/static/chunks/1870.a8079b4ff813c5b6.js",revision:"a8079b4ff813c5b6"},{url:"/_next/static/chunks/1931.795b212c755ce506.js",revision:"795b212c755ce506"},{url:"/_next/static/chunks/1960.18cc9eed91cf9377.js",revision:"18cc9eed91cf9377"},{url:"/_next/static/chunks/1962.86cb12ae33c07f27.js",revision:"86cb12ae33c07f27"},{url:"/_next/static/chunks/1983.92f7a1e4baffeda9.js",revision:"92f7a1e4baffeda9"},{url:"/_next/static/chunks/1a48c3c1.ee9ea5c0253c73b9.js",revision:"ee9ea5c0253c73b9"},{url:"/_next/static/chunks/1bfc9850.e0265019af303dd1.js",revision:"e0265019af303dd1"},{url:"/_next/static/chunks/2106.83f033388f54091e.js",revision:"83f033388f54091e"},{url:"/_next/static/chunks/2168.ac8ab149d218d8d2.js",revision:"ac8ab149d218d8d2"},{url:"/_next/static/chunks/2275-646afa643cd29c60.js",revision:"646afa643cd29c60"},{url:"/_next/static/chunks/2340.67e0264829d7e250.js",revision:"67e0264829d7e250"},{url:"/_next/static/chunks/2360-ea9d0cfb4ac8e1e8.js",revision:"ea9d0cfb4ac8e1e8"},{url:"/_next/static/chunks/252f366e.bb6ce75d9200a7f8.js",revision:"bb6ce75d9200a7f8"},{url:"/_next/static/chunks/2536.e4c4328073063f3f.js",revision:"e4c4328073063f3f"},{url:"/_next/static/chunks/2604.c98787a406438af8.js",revision:"c98787a406438af8"},{url:"/_next/static/chunks/2687.c4caa6f3365ed523.js",revision:"c4caa6f3365ed523"},{url:"/_next/static/chunks/3286.f0303076e3dc1a92.js",revision:"f0303076e3dc1a92"},{url:"/_next/static/chunks/3296.0b0af8c5e57bacb2.js",revision:"0b0af8c5e57bacb2"},{url:"/_next/static/chunks/3317.c07c04fd29614018.js",revision:"c07c04fd29614018"},{url:"/_next/static/chunks/3318.38f62b4f73bc33eb.js",revision:"38f62b4f73bc33eb"},{url:"/_next/static/chunks/3321-a7f3680792266a99.js",revision:"a7f3680792266a99"},{url:"/_next/static/chunks/3509.6da2b607c3e4cddf.js",revision:"6da2b607c3e4cddf"},{url:"/_next/static/chunks/3561.b7bd36b88f2cec96.js",revision:"b7bd36b88f2cec96"},{url:"/_next/static/chunks/3624.26936a4adffd8f04.js",revision:"26936a4adffd8f04"},{url:"/_next/static/chunks/3711.ba4d2e15cceb8baa.js",revision:"ba4d2e15cceb8baa"},{url:"/_next/static/chunks/3761.db4b7a1d7c9ee77a.js",revision:"db4b7a1d7c9ee77a"},{url:"/_next/static/chunks/3782.f07cbec4ad728546.js",revision:"f07cbec4ad728546"},{url:"/_next/static/chunks/3795.9f4c7e3feaf89a8c.js",revision:"9f4c7e3feaf89a8c"},{url:"/_next/static/chunks/3868.1b1f1d8875cf8d2c.js",revision:"1b1f1d8875cf8d2c"},{url:"/_next/static/chunks/3964.f8ac563206a0b5b1.js",revision:"f8ac563206a0b5b1"},{url:"/_next/static/chunks/3999.c1eb074651c5bb59.js",revision:"c1eb074651c5bb59"},{url:"/_next/static/chunks/4031-d5a82cf40fa42c56.js",revision:"d5a82cf40fa42c56"},{url:"/_next/static/chunks/4033.6c11a5cddcd89428.js",revision:"6c11a5cddcd89428"},{url:"/_next/static/chunks/4064.f2ccb79f3a057579.js",revision:"f2ccb79f3a057579"},{url:"/_next/static/chunks/4425.c25d16da269f1fae.js",revision:"c25d16da269f1fae"},{url:"/_next/static/chunks/4520.c100227989e53f9e.js",revision:"c100227989e53f9e"},{url:"/_next/static/chunks/4557.f43fc2e8a55a1322.js",revision:"f43fc2e8a55a1322"},{url:"/_next/static/chunks/4560.6b1cc6c9b0fafdaa.js",revision:"6b1cc6c9b0fafdaa"},{url:"/_next/static/chunks/4682.9cef486db1bd0a9e.js",revision:"9cef486db1bd0a9e"},{url:"/_next/static/chunks/4768.ce0e67ea4bcf8df2.js",revision:"ce0e67ea4bcf8df2"},{url:"/_next/static/chunks/4825.2d65be68ca0ec5b0.js",revision:"2d65be68ca0ec5b0"},{url:"/_next/static/chunks/4829.66028aeb822c7f7f.js",revision:"66028aeb822c7f7f"},{url:"/_next/static/chunks/4858.094ac76dbffdce92.js",revision:"094ac76dbffdce92"},{url:"/_next/static/chunks/4864.a9856c7676f7774e.js",revision:"a9856c7676f7774e"},{url:"/_next/static/chunks/489.ec98b9a4fe2156db.js",revision:"ec98b9a4fe2156db"},{url:"/_next/static/chunks/4958.9bdec065b84ab313.js",revision:"9bdec065b84ab313"},{url:"/_next/static/chunks/5035.81ca0fb34b8617b9.js",revision:"81ca0fb34b8617b9"},{url:"/_next/static/chunks/51.b7fc5926cc11d1c9.js",revision:"b7fc5926cc11d1c9"},{url:"/_next/static/chunks/5129-54ab45fa8e9e5dd8.js",revision:"54ab45fa8e9e5dd8"},{url:"/_next/static/chunks/5151.b3ad4ff616902bae.js",revision:"b3ad4ff616902bae"},{url:"/_next/static/chunks/52-c5846626019ab6bf.js",revision:"c5846626019ab6bf"},{url:"/_next/static/chunks/526.6c37a9ddbfa5566c.js",revision:"6c37a9ddbfa5566c"},{url:"/_next/static/chunks/5273-1941fb14f9a42563.js",revision:"1941fb14f9a42563"},{url:"/_next/static/chunks/5282.dc657dbe3a1c1642.js",revision:"dc657dbe3a1c1642"},{url:"/_next/static/chunks/5291.1041537dd56cca71.js",revision:"1041537dd56cca71"},{url:"/_next/static/chunks/533.1d86a5837ed3970e.js",revision:"1d86a5837ed3970e"},{url:"/_next/static/chunks/5511.32613d099c025b1b.js",revision:"32613d099c025b1b"},{url:"/_next/static/chunks/5553.4b8768c4c63801b8.js",revision:"4b8768c4c63801b8"},{url:"/_next/static/chunks/5588.8eb29701d43e436f.js",revision:"8eb29701d43e436f"},{url:"/_next/static/chunks/5608-c51fb564537635d7.js",revision:"c51fb564537635d7"},{url:"/_next/static/chunks/5658.81e4067315ab18ac.js",revision:"81e4067315ab18ac"},{url:"/_next/static/chunks/5675-e454bcf55fd814aa.js",revision:"e454bcf55fd814aa"},{url:"/_next/static/chunks/5803.7b63b5e78ebfc8a1.js",revision:"7b63b5e78ebfc8a1"},{url:"/_next/static/chunks/5818-628c6b85510afeb8.js",revision:"628c6b85510afeb8"},{url:"/_next/static/chunks/5867.64bcdf43fb8778d2.js",revision:"64bcdf43fb8778d2"},{url:"/_next/static/chunks/59.033a4fc1ec5002cf.js",revision:"033a4fc1ec5002cf"},{url:"/_next/static/chunks/5995.356755f981134f92.js",revision:"356755f981134f92"},{url:"/_next/static/chunks/6046.5e2b3862bdc0e18a.js",revision:"5e2b3862bdc0e18a"},{url:"/_next/static/chunks/6072-27933ec300e7ea85.js",revision:"27933ec300e7ea85"},{url:"/_next/static/chunks/6203.3380f97c0687e330.js",revision:"3380f97c0687e330"},{url:"/_next/static/chunks/6225-30d20aec9cdf5dbe.js",revision:"30d20aec9cdf5dbe"},{url:"/_next/static/chunks/6233.a4c466646fd5c8fa.js",revision:"a4c466646fd5c8fa"},{url:"/_next/static/chunks/6277.94c50d78ef83cdf2.js",revision:"94c50d78ef83cdf2"},{url:"/_next/static/chunks/6368.975c76d60aca9684.js",revision:"975c76d60aca9684"},{url:"/_next/static/chunks/6390.a8f8d47e15ecd538.js",revision:"a8f8d47e15ecd538"},{url:"/_next/static/chunks/6506.738fcd4741309433.js",revision:"738fcd4741309433"},{url:"/_next/static/chunks/6574.561f31f7d729987a.js",revision:"561f31f7d729987a"},{url:"/_next/static/chunks/6703-e10b622237bdef89.js",revision:"e10b622237bdef89"},{url:"/_next/static/chunks/6755.82d64789e4972c79.js",revision:"82d64789e4972c79"},{url:"/_next/static/chunks/6783-192d0ea650ceaf32.js",revision:"192d0ea650ceaf32"},{url:"/_next/static/chunks/6794.7288a54342dbe217.js",revision:"7288a54342dbe217"},{url:"/_next/static/chunks/6829.32a425b2ec76a7e3.js",revision:"32a425b2ec76a7e3"},{url:"/_next/static/chunks/6886-cf78126d842a24cb.js",revision:"cf78126d842a24cb"},{url:"/_next/static/chunks/6893-1c53c16b039aae0e.js",revision:"1c53c16b039aae0e"},{url:"/_next/static/chunks/6902.d0f1cfd6d1c45b58.js",revision:"d0f1cfd6d1c45b58"},{url:"/_next/static/chunks/7058-93366f2fb67b311b.js",revision:"93366f2fb67b311b"},{url:"/_next/static/chunks/7173.d2ff7cb49aab111c.js",revision:"d2ff7cb49aab111c"},{url:"/_next/static/chunks/7318.168282d4a9d312d6.js",revision:"168282d4a9d312d6"},{url:"/_next/static/chunks/7533.d6da97d51eb13fc3.js",revision:"d6da97d51eb13fc3"},{url:"/_next/static/chunks/754.e09f8bd65668d79d.js",revision:"e09f8bd65668d79d"},{url:"/_next/static/chunks/7549.50edf3fdc0c8c16d.js",revision:"50edf3fdc0c8c16d"},{url:"/_next/static/chunks/7707.7b1e1cd057170127.js",revision:"7b1e1cd057170127"},{url:"/_next/static/chunks/7736-b75bf25d3a1a9925.js",revision:"b75bf25d3a1a9925"},{url:"/_next/static/chunks/78e521c3.da545ed948d77149.js",revision:"da545ed948d77149"},{url:"/_next/static/chunks/7927.36294ce21354eca0.js",revision:"36294ce21354eca0"},{url:"/_next/static/chunks/8074.e8d298e209d5276a.js",revision:"e8d298e209d5276a"},{url:"/_next/static/chunks/82.480b58f216dded91.js",revision:"480b58f216dded91"},{url:"/_next/static/chunks/8256.d4579a49bc1c2a5e.js",revision:"d4579a49bc1c2a5e"},{url:"/_next/static/chunks/8298.2adfba3e5649b601.js",revision:"2adfba3e5649b601"},{url:"/_next/static/chunks/83.091fc5f92841853c.js",revision:"091fc5f92841853c"},{url:"/_next/static/chunks/8323.864cf8cc7309caac.js",revision:"864cf8cc7309caac"},{url:"/_next/static/chunks/8512.abd9416aea948617.js",revision:"abd9416aea948617"},{url:"/_next/static/chunks/8564.b243f63ac124b585.js",revision:"b243f63ac124b585"},{url:"/_next/static/chunks/8631.c1d9d1adee1e5964.js",revision:"c1d9d1adee1e5964"},{url:"/_next/static/chunks/8722.dacbd4f093f2b9ae.js",revision:"dacbd4f093f2b9ae"},{url:"/_next/static/chunks/8743.71b0dd32ee404a04.js",revision:"71b0dd32ee404a04"},{url:"/_next/static/chunks/879.b92a4c733320ff62.js",revision:"b92a4c733320ff62"},{url:"/_next/static/chunks/8862.455bda36c24d3865.js",revision:"455bda36c24d3865"},{url:"/_next/static/chunks/8934.fde3972ca2681158.js",revision:"fde3972ca2681158"},{url:"/_next/static/chunks/9130.42be3b9da3d3b0c9.js",revision:"42be3b9da3d3b0c9"},{url:"/_next/static/chunks/9187.31f56862eddabe63.js",revision:"31f56862eddabe63"},{url:"/_next/static/chunks/9242.2b3cf6c20017e270.js",revision:"2b3cf6c20017e270"},{url:"/_next/static/chunks/9269.a82518a747f525b6.js",revision:"a82518a747f525b6"},{url:"/_next/static/chunks/9297.853cb5847e51cf85.js",revision:"853cb5847e51cf85"},{url:"/_next/static/chunks/9367.b83597ee7c73a496.js",revision:"b83597ee7c73a496"},{url:"/_next/static/chunks/9369.70034bf73616039d.js",revision:"70034bf73616039d"},{url:"/_next/static/chunks/938.79f869854552618e.js",revision:"79f869854552618e"},{url:"/_next/static/chunks/9401.8c59d01eaf39a52d.js",revision:"8c59d01eaf39a52d"},{url:"/_next/static/chunks/9431.d20fd9d3cc98f835.js",revision:"d20fd9d3cc98f835"},{url:"/_next/static/chunks/9501.f082a295116f127d.js",revision:"f082a295116f127d"},{url:"/_next/static/chunks/95b64a6e.031b6f9f18f6eaa0.js",revision:"031b6f9f18f6eaa0"},{url:"/_next/static/chunks/9620.5b900572749b25c6.js",revision:"5b900572749b25c6"},{url:"/_next/static/chunks/9800.fbb34e5d79d5aefa.js",revision:"fbb34e5d79d5aefa"},{url:"/_next/static/chunks/9933.c571be455c6b9300.js",revision:"c571be455c6b9300"},{url:"/_next/static/chunks/d7eeaac4.d0ebe41fbdb95a40.js",revision:"d0ebe41fbdb95a40"},{url:"/_next/static/chunks/framework-ce84985cd166733a.js",revision:"ce84985cd166733a"},{url:"/_next/static/chunks/main-66ae202fe30b8944.js",revision:"66ae202fe30b8944"},{url:"/_next/static/chunks/pages/404-8a1b85c448135888.js",revision:"8a1b85c448135888"},{url:"/_next/static/chunks/pages/_app-a99a7c43b7766830.js",revision:"a99a7c43b7766830"},{url:"/_next/static/chunks/pages/_error-82b79221b9ed784b.js",revision:"82b79221b9ed784b"},{url:"/_next/static/chunks/pages/about-37a40acde715cece.js",revision:"37a40acde715cece"},{url:"/_next/static/chunks/pages/change-password-710b1d8057127de3.js",revision:"710b1d8057127de3"},{url:"/_next/static/chunks/pages/contact-5d17b68aad1e836b.js",revision:"5d17b68aad1e836b"},{url:"/_next/static/chunks/pages/dashboard-a56ad2aeb1ce030d.js",revision:"a56ad2aeb1ce030d"},{url:"/_next/static/chunks/pages/dashboard/profile-cc93e77edafede45.js",revision:"cc93e77edafede45"},{url:"/_next/static/chunks/pages/dashboard/security-ee3e947005adb663.js",revision:"ee3e947005adb663"},{url:"/_next/static/chunks/pages/dashboard/subscriptions-a250082436ae9183.js",revision:"a250082436ae9183"},{url:"/_next/static/chunks/pages/example-b283471b94dfbcc3.js",revision:"b283471b94dfbcc3"},{url:"/_next/static/chunks/pages/forgot-password-d954454f8258b8bf.js",revision:"d954454f8258b8bf"},{url:"/_next/static/chunks/pages/illustration-e7c254c45cf97ebe.js",revision:"e7c254c45cf97ebe"},{url:"/_next/static/chunks/pages/index-941ae6e2cb40dd4a.js",revision:"941ae6e2cb40dd4a"},{url:"/_next/static/chunks/pages/login-68adf10168c7c16e.js",revision:"68adf10168c7c16e"},{url:"/_next/static/chunks/pages/payment-3aa1937836016430.js",revision:"3aa1937836016430"},{url:"/_next/static/chunks/pages/privacy-208237136510a2ee.js",revision:"208237136510a2ee"},{url:"/_next/static/chunks/pages/signup-45f41288123fb7a2.js",revision:"45f41288123fb7a2"},{url:"/_next/static/chunks/pages/subscribe-6fadbeaba49e4d7b.js",revision:"6fadbeaba49e4d7b"},{url:"/_next/static/chunks/pages/subscribe/premium-589523967563dea8.js",revision:"589523967563dea8"},{url:"/_next/static/chunks/pages/terms-8b0b1d7444f431d7.js",revision:"8b0b1d7444f431d7"},{url:"/_next/static/chunks/pages/verification-352841ef04845fdc.js",revision:"352841ef04845fdc"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-135f2f11118accab.js",revision:"135f2f11118accab"},{url:"/_next/static/css/45ccd052f26a170a.css",revision:"45ccd052f26a170a"},{url:"/_next/static/css/729763b7dc0cabfc.css",revision:"729763b7dc0cabfc"},{url:"/_next/static/css/dcd4e44737d35dad.css",revision:"dcd4e44737d35dad"},{url:"/favicon.ico",revision:"987d97a1a0f3c8c1a8e9e7876986d795"},{url:"/icons/apple.svg",revision:"9a36680fa58ed8e639792a637682b34f"},{url:"/icons/arrow.png",revision:"80ab4186d1c54913453eb968762d992f"},{url:"/icons/arrowAR.png",revision:"b330d67821e6aed46054fc215df5165a"},{url:"/icons/arrowBottom.svg",revision:"dabb9e2beea1fbb1c8b628df4f9d856a"},{url:"/icons/arrowDown.png",revision:"98470d90bf2c61e026e9427386386483"},{url:"/icons/arrowDownLeft.png",revision:"199c7e7bdfae5571c4d0e5b81623df52"},{url:"/icons/arrowExample.png",revision:"c96730d402f5b26d7d90f656745068e9"},{url:"/icons/arrowExampleAR.png",revision:"f22d706b9a322cee3d2872dca3a98af7"},{url:"/icons/arrowLeftExample.png",revision:"53640a174af1627689b6bbbb10b9427b"},{url:"/icons/arrowLeftExampleAR.png",revision:"08e68300ad1f407cfb13a61f62f99175"},{url:"/icons/arrowRight.svg",revision:"7d9478062f524fef3188a5e004c4be45"},{url:"/icons/arrowUp.png",revision:"e6fbfec8851736f6878c204a477f8e30"},{url:"/icons/arrowUpAR.png",revision:"3ec839e1c8e8a15394dc14b9437d5797"},{url:"/icons/arrowUpLeft.svg",revision:"66402745f810a8c29c9b71a322eb7fd2"},{url:"/icons/arrowUpRight.svg",revision:"c97dc979239d105d60a2e1cdaef5e732"},{url:"/icons/arrowUpRightGreen.svg",revision:"e79705a14014c467bd35c96e0f13646b"},{url:"/icons/arrowUpright.tsx",revision:"f9dd892e120569853a9e15eb69e85de0"},{url:"/icons/arrowupright.png",revision:"d78653845b083abd0a3edd616561baef"},{url:"/icons/arrowuprightAR.png",revision:"c9afa972453559a12a953907d187c7fe"},{url:"/icons/avatar.svg",revision:"88a184c0f2f74b60d3f2a9816729807f"},{url:"/icons/avatarsvg.svg",revision:"88a184c0f2f74b60d3f2a9816729807f"},{url:"/icons/card.svg",revision:"2061796b2a73ddeb2249d41fef119d32"},{url:"/icons/check.svg",revision:"a8bc4229ba29f38c039ac711b4ea340d"},{url:"/icons/cvc.svg",revision:"6aabfd22fded17f7573e6aaa0d546416"},{url:"/icons/date.svg",revision:"76754f03661daa528a55a0ac850f74f6"},{url:"/icons/facebook.svg",revision:"09c8af7b364330bd3777d0acab54bfe4"},{url:"/icons/facebookColor.svg",revision:"a276f8dcae2968652d958f6aaa309ad5"},{url:"/icons/ff.svg",revision:"fb2e6fc8c8f2462eb95c15f5d210da22"},{url:"/icons/google.svg",revision:"fb2e6fc8c8f2462eb95c15f5d210da22"},{url:"/icons/hashtag.svg",revision:"ce8d5b807d1f662417aa9a771f0374af"},{url:"/icons/home.svg",revision:"a4c0b349f05520733d58853c780328e4"},{url:"/icons/i.svg",revision:"53810a0ff71b08696e99e3c40a0480c6"},{url:"/icons/instagram.svg",revision:"08915f9a2e7ac7230646adf2dea663f5"},{url:"/icons/left.svg",revision:"5158ecddb1f194fdcd1d22b76ec22171"},{url:"/icons/linkedin.svg",revision:"eae2d30b7020c034f9e69133f8ab2c3a"},{url:"/icons/logout.svg",revision:"8e8f593d54b60d99704ad24eb9796110"},{url:"/icons/message.svg",revision:"2393f165934c98aeaf5819394603eb8c"},{url:"/icons/mouse.svg",revision:"47c9338d5b95121495d7b8ca6dfba2c9"},{url:"/icons/play.png",revision:"856cb8bca38d26031e328de71a3e8dcd"},{url:"/icons/profile.svg",revision:"4769550581ace1f27bb0aee1b545e4ed"},{url:"/icons/security.svg",revision:"d4d42a27538559b32ba02f33c01fea55"},{url:"/icons/sliderArrowLeft.svg",revision:"b86a17dcd7bcbf12ce05b0b8a88bb73b"},{url:"/icons/sliderArrowRight.svg",revision:"872df906eb6d88781e0672dc9698ef91"},{url:"/icons/subscribe.svg",revision:"b38b9faa1bad91101da0a4ff252bc27e"},{url:"/icons/twitter.svg",revision:"ffe26a863e8f4aa3149b570804595699"},{url:"/icons/youtube.svg",revision:"60c0377105ffb2506dc3f77342a87be9"},{url:"/images/card.png",revision:"442434be62b4502c3429b83e5e2fa271"},{url:"/images/card.svg",revision:"1a7fa9fdd2005e9658c308388366d9ac"},{url:"/images/card.webp",revision:"21ccefed210337e8ea9ae4fd8d8bd742"},{url:"/images/cut-out-parallelogram-7.webp",revision:"35f0f11317635bdf1be1010b8936b91c"},{url:"/images/cut-out-parallelogram.webp",revision:"c849818f5b8a0e54f09208190b3ff9b0"},{url:"/images/exampleBoxOneIconLeft.webp",revision:"3d60d7da89baeff96d32008e2d5e693a"},{url:"/images/exampleBoxOneIconRight.webp",revision:"4fa1ab7ab3fcb074b01cb8b2ba2ba0f8"},{url:"/images/illustrationPic.webp",revision:"3a619d608aa0a60de0bcb65cf06a00ea"},{url:"/images/illustrationPicAR.webp",revision:"726c5a628df39caae83c66eb630f7c44"},{url:"/images/illustrationPicCenter.png",revision:"671a785b25689e25977439ec9b76a5c4"},{url:"/images/illustrationPicCenterAR.png",revision:"4bb3c154c0a8ee8f5e5e047bcbbb4246"},{url:"/images/illustrationPicMobile.webp",revision:"d720e96ebf952df3dbc6383be0c39f56"},{url:"/images/layoutBoxThree.webp",revision:"ddb5e49ff24ec58804bf5b821d74fded"},{url:"/images/layoutBoxTwo.webp",revision:"fedb141083993067a43ac981829261ce"},{url:"/images/logo.svg",revision:"96f7c59efea68377601f8a9ced885c49"},{url:"/images/logo.webp",revision:"4f19611a17b906a6267073bb8b6379c5"},{url:"/images/mobile.webp",revision:"e584f469c7c56b60a73c0b63f72baea3"},{url:"/images/phone.webp",revision:"90acb3ef5fe9222915ba3f90295158f6"},{url:"/images/phoneAR.webp",revision:"fd1b258ba2d6817403d8e3d8f4ed8e92"},{url:"/images/pic.webp",revision:"66742f5f6c8d249fb82629734a755e8e"},{url:"/images/picAR.webp",revision:"90c14159dc83e0765e8f4374310107ce"},{url:"/images/slid.webp",revision:"1258a707c2b3470929ac306db9cbd0de"},{url:"/images/sliderExample.webp",revision:"a5598067f8140c3307e1d36412a07798"},{url:"/images/swirl-21.webp",revision:"4eadf82102c3b92044dce0c216c8ce20"},{url:"/images/swirl.webp",revision:"4eadf82102c3b92044dce0c216c8ce20"},{url:"/images/swirlIllustration.webp",revision:"fda9313e6e51cb65530e15fdc8c5ffde"},{url:"/images/swirlIllustrationLeft.webp",revision:"ef5d97dedf8d291f8b63e52f62ff14f1"},{url:"/images/swirlSmall.webp",revision:"3ccf7b166dcb2e2fed90e44c85a3712f"},{url:"/locales/ar/changePassword.json",revision:"f2f35a411aa9fd32c2a2b7e21dff4490"},{url:"/locales/ar/common.json",revision:"351363a76b5f6aa0576d19a64c7fd719"},{url:"/locales/ar/contact.json",revision:"3da7f2aabc0999ea7f9bcc4304c40417"},{url:"/locales/ar/dashboard.json",revision:"9247989286a77bff41ccd0b48a799442"},{url:"/locales/ar/error.json",revision:"ffc6776292aff5ae4f9f90bf3ea213aa"},{url:"/locales/ar/example.json",revision:"9bbe338e0696e5dcd4b220d30ec84e98"},{url:"/locales/ar/home.json",revision:"f47b230350b8941827dfecae654f88dc"},{url:"/locales/ar/illustration.json",revision:"03d629e661f29463e8866c8911c13fe9"},{url:"/locales/ar/login.json",revision:"fdd9d64498fdf1a7588f4fbf9f51fa8d"},{url:"/locales/ar/payment.json",revision:"7a3550d82e36d19f6ccb670d655bdc70"},{url:"/locales/ar/privacy.json",revision:"bd057b6923dee2b3c3005f3a4a909687"},{url:"/locales/ar/profile.json",revision:"ac59e77302847c20249871bb4110949f"},{url:"/locales/ar/request.json",revision:"c15d7400468f1db8abb9b49e87f4cedb"},{url:"/locales/ar/security.json",revision:"af25af20c8b9e652be3ab69775eb1c49"},{url:"/locales/ar/signup.json",revision:"0bc3fce1c6f518a8c32f842af9972010"},{url:"/locales/ar/slider.json",revision:"e27d4e6bec175258352d4403905acb25"},{url:"/locales/ar/subscribe.json",revision:"ab2f1b3175668f4ad64d0d17708722f1"},{url:"/locales/ar/subscriptionsDash.json",revision:"faf96cd7720dc3ce53ffff283d0cb399"},{url:"/locales/ar/terms.json",revision:"e0f9abfa2f073df81ea599d07493697d"},{url:"/locales/ar/verification.json",revision:"e628daef13f92026425b80764ad8548b"},{url:"/locales/en/changePassword.json",revision:"2b937eddad06ec87904973fdc55601d4"},{url:"/locales/en/common.json",revision:"ce65b5e774c5b5e7b2b2f2789945f8f8"},{url:"/locales/en/contact.json",revision:"b568eaae4404a3d8503851b50120ab4b"},{url:"/locales/en/dashboard.json",revision:"cadf7a14f094050cb891565c3004d166"},{url:"/locales/en/error.json",revision:"06bd0e8e4aa5f56ec4faf2c67fdaf1d2"},{url:"/locales/en/example.json",revision:"048a10b87e546d02529aac7046cf174a"},{url:"/locales/en/home.json",revision:"d3195476090abbdd077dc7d0c244531f"},{url:"/locales/en/illustration.json",revision:"b7d5074445ca5546e940bba759306c91"},{url:"/locales/en/login.json",revision:"3dd8bff59925bd7732723d401465abf1"},{url:"/locales/en/payment.json",revision:"547438803c832ba284bdd33ec14d0db0"},{url:"/locales/en/privacy.json",revision:"0703ae06a0742519b3367ee85b64257b"},{url:"/locales/en/profile.json",revision:"9e6349684f2a2fbb12032f7c74b2b0d2"},{url:"/locales/en/request.json",revision:"fd7ce8d26e246148302242008c8a8fa1"},{url:"/locales/en/security.json",revision:"f1ea4165832f1c20ac598e20374e7097"},{url:"/locales/en/signup.json",revision:"4f2feb859d198d0b8aa1a64d65e93508"},{url:"/locales/en/slider.json",revision:"6d4d79392bb608e7c0a8517e11582d8e"},{url:"/locales/en/subscribe.json",revision:"304b943548b0a4b583e5094ad8e6d630"},{url:"/locales/en/subscriptionsDash.json",revision:"215fe3f41f7ffbb550b92ac0b4b4fa4b"},{url:"/locales/en/terms.json",revision:"4bf98efd0cc43b7fada92ff8e6728d3f"},{url:"/locales/en/verification.json",revision:"abd6c9523d39ecaffdee82f2d450f3dc"},{url:"/pwa/android-chrome-192x192.png",revision:"d0b1b226968e0e35a05ea1ff9bf86068"},{url:"/pwa/android-chrome-512x512.png",revision:"5e2cc367786a148a8c56167651d6ec9d"},{url:"/pwa/apple-touch-icon-114x114-precomposed.png",revision:"3d66c99d42e1f3d320c7c6d7a73dd7c2"},{url:"/pwa/apple-touch-icon-114x114.png",revision:"b67efd7f08766ba3da2d4d87242b1ae7"},{url:"/pwa/apple-touch-icon-120x120-precomposed.png",revision:"4b8f579a2b3bcddfe2a0eaff114fe185"},{url:"/pwa/apple-touch-icon-120x120.png",revision:"ac9fb849131875286066429cdadd8d96"},{url:"/pwa/apple-touch-icon-144x144-precomposed.png",revision:"52c1dfe8e386c05ece09d8a08a5ed9ac"},{url:"/pwa/apple-touch-icon-144x144.png",revision:"54f63b9be04fc49e7074acc296bf73de"},{url:"/pwa/apple-touch-icon-152x152-precomposed.png",revision:"5957860d48403ceba1639931dce4fe5f"},{url:"/pwa/apple-touch-icon-152x152.png",revision:"8d00265a999ea1c23980e390c9917ff7"},{url:"/pwa/apple-touch-icon-180x180-precomposed.png",revision:"2e2ccb0ee29bc7a3914d41d16448377b"},{url:"/pwa/apple-touch-icon-180x180.png",revision:"f8d6f3873bf169ee23bb165d2f781f0e"},{url:"/pwa/apple-touch-icon-57x57-precomposed.png",revision:"c01f01490f6e86476d8b5a1d8e72118a"},{url:"/pwa/apple-touch-icon-57x57.png",revision:"2bf38c7afb38a0450933df35b8d0186b"},{url:"/pwa/apple-touch-icon-60x60-precomposed.png",revision:"0fc4df03397aa32e8633ccadb68fd435"},{url:"/pwa/apple-touch-icon-60x60.png",revision:"f949739f794b3d668099d1745cb82385"},{url:"/pwa/apple-touch-icon-72x72-precomposed.png",revision:"fa838a454fd88c1fbbfde3001ffb7fd5"},{url:"/pwa/apple-touch-icon-72x72.png",revision:"78d7d87bc466953195c23104104dbc0f"},{url:"/pwa/apple-touch-icon-76x76-precomposed.png",revision:"d29cfc717759e1ab24b8a62e2c83b335"},{url:"/pwa/apple-touch-icon-76x76.png",revision:"8fe9b09d9f5dcac1e3f1cbc6a456383c"},{url:"/pwa/apple-touch-icon-precomposed.png",revision:"38071e85ef6d4552c070f32011e09a5a"},{url:"/pwa/apple-touch-icon.png",revision:"f8d6f3873bf169ee23bb165d2f781f0e"},{url:"/pwa/browserconfig.xml",revision:"7f2b2f8a4c6863cc7be0a1e4b7963bd9"},{url:"/pwa/favicon-16x16.png",revision:"6c64d8c547795bd1537c82f414628d17"},{url:"/pwa/favicon-32x32.png",revision:"db7d5a0aed7b398d9926ea52c5380a72"},{url:"/pwa/favicon.ico",revision:"987d97a1a0f3c8c1a8e9e7876986d795"},{url:"/pwa/manifest.json",revision:"812198a897a41d0d7ea703cc2e725382"},{url:"/pwa/mstile-144x144.png",revision:"ebf8d52c13c5ad52f96eee683719a780"},{url:"/pwa/mstile-150x150.png",revision:"59f87a83966e9a6f65988a4067a80777"},{url:"/pwa/safari-pinned-tab.svg",revision:"9cd89fb198bbaf016bb9a91b80058b2e"},{url:"/robots.txt",revision:"f23539c1b3c47131b64d7303bf7214a5"},{url:"/script.js",revision:"6b3bc1e75fb5fe3356bbf7a33a96aa85"},{url:"/sitemap-0.xml",revision:"5ea12584bbd4661b3dd251bd16e811e4"},{url:"/sitemap.xml",revision:"e08ae9f47966fae0653eadd11eadb0e9"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
