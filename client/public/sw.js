if(!self.define){let e,s={};const c=(c,a)=>(c=new URL(c+".js",a).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let r={};const o=e=>c(e,n),d={module:{uri:n},exports:r,require:o};s[n]=Promise.all(a.map((e=>d[e]||o(e)))).then((e=>(i(...e),r)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/QnXDYRaBlQeA2i5QW_hVa/_buildManifest.js",revision:"37c42ac368c080cfdc1fc353926e04fb"},{url:"/_next/static/QnXDYRaBlQeA2i5QW_hVa/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0c428ae2-f6113953e24370e1.js",revision:"f6113953e24370e1"},{url:"/_next/static/chunks/119.8cb81de3c4d12d5c.js",revision:"8cb81de3c4d12d5c"},{url:"/_next/static/chunks/1217.01fd1d537acb4f44.js",revision:"01fd1d537acb4f44"},{url:"/_next/static/chunks/122-d0eaac93e64ef7e6.js",revision:"d0eaac93e64ef7e6"},{url:"/_next/static/chunks/1344.5493b6f39117afa9.js",revision:"5493b6f39117afa9"},{url:"/_next/static/chunks/1405.10898bbf3f68de7f.js",revision:"10898bbf3f68de7f"},{url:"/_next/static/chunks/1429.c6f94a90b2857db2.js",revision:"c6f94a90b2857db2"},{url:"/_next/static/chunks/153.508147f34c8b2ff8.js",revision:"508147f34c8b2ff8"},{url:"/_next/static/chunks/1579.7b1e32f7173ccb5b.js",revision:"7b1e32f7173ccb5b"},{url:"/_next/static/chunks/1664-6077f61cd231cbb6.js",revision:"6077f61cd231cbb6"},{url:"/_next/static/chunks/1671.f941c06a3f11c3ba.js",revision:"f941c06a3f11c3ba"},{url:"/_next/static/chunks/1749-a215d761115e454c.js",revision:"a215d761115e454c"},{url:"/_next/static/chunks/1931.ab43ebf5900d4729.js",revision:"ab43ebf5900d4729"},{url:"/_next/static/chunks/1a48c3c1-a931900d57002f43.js",revision:"a931900d57002f43"},{url:"/_next/static/chunks/1bfc9850-e0265019af303dd1.js",revision:"e0265019af303dd1"},{url:"/_next/static/chunks/2106.cc590549deef132e.js",revision:"cc590549deef132e"},{url:"/_next/static/chunks/2520.a53f37c1e8107421.js",revision:"a53f37c1e8107421"},{url:"/_next/static/chunks/252f366e-fb8bdbdc6d686e9d.js",revision:"fb8bdbdc6d686e9d"},{url:"/_next/static/chunks/2571.58eec694cf41311a.js",revision:"58eec694cf41311a"},{url:"/_next/static/chunks/2642.92419df81ac7c24a.js",revision:"92419df81ac7c24a"},{url:"/_next/static/chunks/2776.fc1ea952d934dac3.js",revision:"fc1ea952d934dac3"},{url:"/_next/static/chunks/3296.4643a3863a8cf254.js",revision:"4643a3863a8cf254"},{url:"/_next/static/chunks/3321-14f49c15146827c3.js",revision:"14f49c15146827c3"},{url:"/_next/static/chunks/3322.ee414167823aabed.js",revision:"ee414167823aabed"},{url:"/_next/static/chunks/346.fc19d92d049a0ca0.js",revision:"fc19d92d049a0ca0"},{url:"/_next/static/chunks/3624.df670f0ca4e10b28.js",revision:"df670f0ca4e10b28"},{url:"/_next/static/chunks/3709.c904881ae5895b48.js",revision:"c904881ae5895b48"},{url:"/_next/static/chunks/3761.7fcf1be08bb3e5bd.js",revision:"7fcf1be08bb3e5bd"},{url:"/_next/static/chunks/3776.0a307e0a1319e76f.js",revision:"0a307e0a1319e76f"},{url:"/_next/static/chunks/3782.513b910202f78707.js",revision:"513b910202f78707"},{url:"/_next/static/chunks/3787.84e1e3613575caaa.js",revision:"84e1e3613575caaa"},{url:"/_next/static/chunks/3833.53c178c563ba700d.js",revision:"53c178c563ba700d"},{url:"/_next/static/chunks/3902-b2e195084ccbe452.js",revision:"b2e195084ccbe452"},{url:"/_next/static/chunks/3999.b99ce62c1cee1dc3.js",revision:"b99ce62c1cee1dc3"},{url:"/_next/static/chunks/4033.72c804dd39dea348.js",revision:"72c804dd39dea348"},{url:"/_next/static/chunks/4064.779d8a205ea49a3d.js",revision:"779d8a205ea49a3d"},{url:"/_next/static/chunks/4218.06720a2563d11796.js",revision:"06720a2563d11796"},{url:"/_next/static/chunks/4228.9a06c8ea9404471a.js",revision:"9a06c8ea9404471a"},{url:"/_next/static/chunks/4253.be3307b9368797c8.js",revision:"be3307b9368797c8"},{url:"/_next/static/chunks/4425.c25d16da269f1fae.js",revision:"c25d16da269f1fae"},{url:"/_next/static/chunks/4515.19b31dd2a69e10c3.js",revision:"19b31dd2a69e10c3"},{url:"/_next/static/chunks/4557.d9824f7725ba347c.js",revision:"d9824f7725ba347c"},{url:"/_next/static/chunks/4682.9cef486db1bd0a9e.js",revision:"9cef486db1bd0a9e"},{url:"/_next/static/chunks/4768.d46a49be621683e2.js",revision:"d46a49be621683e2"},{url:"/_next/static/chunks/4829.4ba5a51e52828c90.js",revision:"4ba5a51e52828c90"},{url:"/_next/static/chunks/5137.b03d8c4e0b8c18b4.js",revision:"b03d8c4e0b8c18b4"},{url:"/_next/static/chunks/5181.db2063ef3a6f05cd.js",revision:"db2063ef3a6f05cd"},{url:"/_next/static/chunks/5291.c14ff5e1e29384f7.js",revision:"c14ff5e1e29384f7"},{url:"/_next/static/chunks/5334.66725b689117691a.js",revision:"66725b689117691a"},{url:"/_next/static/chunks/5491.66014769b3c0ae72.js",revision:"66014769b3c0ae72"},{url:"/_next/static/chunks/5511.bdab63dedcf13731.js",revision:"bdab63dedcf13731"},{url:"/_next/static/chunks/5553.ff8ab684472d6212.js",revision:"ff8ab684472d6212"},{url:"/_next/static/chunks/5569.ae95369974fa3f11.js",revision:"ae95369974fa3f11"},{url:"/_next/static/chunks/5588.8d156dc2d896662b.js",revision:"8d156dc2d896662b"},{url:"/_next/static/chunks/5675-e454bcf55fd814aa.js",revision:"e454bcf55fd814aa"},{url:"/_next/static/chunks/5861.ebb5b115aa21e4d9.js",revision:"ebb5b115aa21e4d9"},{url:"/_next/static/chunks/5867.64bcdf43fb8778d2.js",revision:"64bcdf43fb8778d2"},{url:"/_next/static/chunks/6368.db08f5a1f1adafb9.js",revision:"db08f5a1f1adafb9"},{url:"/_next/static/chunks/6462.9da1009fc07e7014.js",revision:"9da1009fc07e7014"},{url:"/_next/static/chunks/6483.1aa34979cf74af9d.js",revision:"1aa34979cf74af9d"},{url:"/_next/static/chunks/6488.5a23d699bc70caf2.js",revision:"5a23d699bc70caf2"},{url:"/_next/static/chunks/6506.7cbc9c187610be7c.js",revision:"7cbc9c187610be7c"},{url:"/_next/static/chunks/6508.54f8ac437cb065e3.js",revision:"54f8ac437cb065e3"},{url:"/_next/static/chunks/6574.753aa6e2ccface05.js",revision:"753aa6e2ccface05"},{url:"/_next/static/chunks/6612.fe4311a612823c32.js",revision:"fe4311a612823c32"},{url:"/_next/static/chunks/6681-99aead4238bff839.js",revision:"99aead4238bff839"},{url:"/_next/static/chunks/6703-1a5901e1d90b8fc9.js",revision:"1a5901e1d90b8fc9"},{url:"/_next/static/chunks/6755.6c08e132fd0fc410.js",revision:"6c08e132fd0fc410"},{url:"/_next/static/chunks/6783-d1aef793d9cdf090.js",revision:"d1aef793d9cdf090"},{url:"/_next/static/chunks/6794.2309009725167cbe.js",revision:"2309009725167cbe"},{url:"/_next/static/chunks/6886-aac576c7ac535e3d.js",revision:"aac576c7ac535e3d"},{url:"/_next/static/chunks/6893-1c53c16b039aae0e.js",revision:"1c53c16b039aae0e"},{url:"/_next/static/chunks/6902.2010b03244b8d270.js",revision:"2010b03244b8d270"},{url:"/_next/static/chunks/6951.52205ccc191e1c09.js",revision:"52205ccc191e1c09"},{url:"/_next/static/chunks/7058-e67749c5ab3c8545.js",revision:"e67749c5ab3c8545"},{url:"/_next/static/chunks/7134.659bc85f8e327f21.js",revision:"659bc85f8e327f21"},{url:"/_next/static/chunks/7173.e67a5e617186fc05.js",revision:"e67a5e617186fc05"},{url:"/_next/static/chunks/721.5910078d78acd54f.js",revision:"5910078d78acd54f"},{url:"/_next/static/chunks/724.1abcbcb6cd9a25ed.js",revision:"1abcbcb6cd9a25ed"},{url:"/_next/static/chunks/7533.d6da97d51eb13fc3.js",revision:"d6da97d51eb13fc3"},{url:"/_next/static/chunks/7624.47f1a9028729e8c9.js",revision:"47f1a9028729e8c9"},{url:"/_next/static/chunks/7709.4f106a8536ba99d6.js",revision:"4f106a8536ba99d6"},{url:"/_next/static/chunks/7954.6e90f8a03ac0f13e.js",revision:"6e90f8a03ac0f13e"},{url:"/_next/static/chunks/8240.f56729e6e5cc61fc.js",revision:"f56729e6e5cc61fc"},{url:"/_next/static/chunks/8298.2a1d28b508092e4a.js",revision:"2a1d28b508092e4a"},{url:"/_next/static/chunks/8323.b4b8f127dcf88016.js",revision:"b4b8f127dcf88016"},{url:"/_next/static/chunks/8390.b27b9da2819eedec.js",revision:"b27b9da2819eedec"},{url:"/_next/static/chunks/8476.caa0ed1804542a22.js",revision:"caa0ed1804542a22"},{url:"/_next/static/chunks/8512.304482208af5ac38.js",revision:"304482208af5ac38"},{url:"/_next/static/chunks/8564.071843c15bd3e908.js",revision:"071843c15bd3e908"},{url:"/_next/static/chunks/8736.401cfdf94c825288.js",revision:"401cfdf94c825288"},{url:"/_next/static/chunks/8862.2508d0fd16ce7ae9.js",revision:"2508d0fd16ce7ae9"},{url:"/_next/static/chunks/8970-75a0db3162e9938b.js",revision:"75a0db3162e9938b"},{url:"/_next/static/chunks/9063-df0db185c06ffaa7.js",revision:"df0db185c06ffaa7"},{url:"/_next/static/chunks/9130.42be3b9da3d3b0c9.js",revision:"42be3b9da3d3b0c9"},{url:"/_next/static/chunks/9187.2edb2c2a7ace92b8.js",revision:"2edb2c2a7ace92b8"},{url:"/_next/static/chunks/92.bc3cb312b9cffd11.js",revision:"bc3cb312b9cffd11"},{url:"/_next/static/chunks/9269.5785312945c9e431.js",revision:"5785312945c9e431"},{url:"/_next/static/chunks/9282.078b75cfad2fc595.js",revision:"078b75cfad2fc595"},{url:"/_next/static/chunks/9326-d209d3d037eb2999.js",revision:"d209d3d037eb2999"},{url:"/_next/static/chunks/9337.7c2f13eabfee21d6.js",revision:"7c2f13eabfee21d6"},{url:"/_next/static/chunks/9431-63766102e9d018b3.js",revision:"63766102e9d018b3"},{url:"/_next/static/chunks/95b64a6e-031b6f9f18f6eaa0.js",revision:"031b6f9f18f6eaa0"},{url:"/_next/static/chunks/9601-480b4e033ac657ed.js",revision:"480b4e033ac657ed"},{url:"/_next/static/chunks/9684.cd88883371867032.js",revision:"cd88883371867032"},{url:"/_next/static/chunks/9933.c571be455c6b9300.js",revision:"c571be455c6b9300"},{url:"/_next/static/chunks/d7eeaac4-afb5da4144574b35.js",revision:"afb5da4144574b35"},{url:"/_next/static/chunks/framework-ce84985cd166733a.js",revision:"ce84985cd166733a"},{url:"/_next/static/chunks/main-66ae202fe30b8944.js",revision:"66ae202fe30b8944"},{url:"/_next/static/chunks/pages/404-8d4c87c56e8507d9.js",revision:"8d4c87c56e8507d9"},{url:"/_next/static/chunks/pages/_app-cd055d7786e0bbd4.js",revision:"cd055d7786e0bbd4"},{url:"/_next/static/chunks/pages/_error-82b79221b9ed784b.js",revision:"82b79221b9ed784b"},{url:"/_next/static/chunks/pages/about-dd2ae069295b122c.js",revision:"dd2ae069295b122c"},{url:"/_next/static/chunks/pages/change-password-25cba20e3883525e.js",revision:"25cba20e3883525e"},{url:"/_next/static/chunks/pages/contact-da515cba8cd5eb15.js",revision:"da515cba8cd5eb15"},{url:"/_next/static/chunks/pages/dashboard-1457a20fdba755b8.js",revision:"1457a20fdba755b8"},{url:"/_next/static/chunks/pages/dashboard/profile-70b729d6d07922dd.js",revision:"70b729d6d07922dd"},{url:"/_next/static/chunks/pages/dashboard/security-1f0b1e1ad5f25c18.js",revision:"1f0b1e1ad5f25c18"},{url:"/_next/static/chunks/pages/dashboard/subscriptions-37b972e6975b0337.js",revision:"37b972e6975b0337"},{url:"/_next/static/chunks/pages/example-4f8555311cf33c75.js",revision:"4f8555311cf33c75"},{url:"/_next/static/chunks/pages/forgot-password-3026bfc3e8068101.js",revision:"3026bfc3e8068101"},{url:"/_next/static/chunks/pages/illustration-77050db0e1713a29.js",revision:"77050db0e1713a29"},{url:"/_next/static/chunks/pages/index-fe12dc1b76e76054.js",revision:"fe12dc1b76e76054"},{url:"/_next/static/chunks/pages/login-1228431354727511.js",revision:"1228431354727511"},{url:"/_next/static/chunks/pages/payment-b6470ed33f2d72e6.js",revision:"b6470ed33f2d72e6"},{url:"/_next/static/chunks/pages/privacy-c5f2c69b13cde7df.js",revision:"c5f2c69b13cde7df"},{url:"/_next/static/chunks/pages/signup-c444175aa5014118.js",revision:"c444175aa5014118"},{url:"/_next/static/chunks/pages/subscribe-8fe8c6803ca5375a.js",revision:"8fe8c6803ca5375a"},{url:"/_next/static/chunks/pages/subscribe/premium-8dd953f9739b3984.js",revision:"8dd953f9739b3984"},{url:"/_next/static/chunks/pages/terms-b9fe4aa6dbb94826.js",revision:"b9fe4aa6dbb94826"},{url:"/_next/static/chunks/pages/verification-944f11e28d91f09c.js",revision:"944f11e28d91f09c"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-f38bfb382ebf9556.js",revision:"f38bfb382ebf9556"},{url:"/_next/static/css/b17d61c7c905b2a3.css",revision:"b17d61c7c905b2a3"},{url:"/_next/static/css/dcd4e44737d35dad.css",revision:"dcd4e44737d35dad"},{url:"/favicon.ico",revision:"987d97a1a0f3c8c1a8e9e7876986d795"},{url:"/icons/apple.svg",revision:"9a36680fa58ed8e639792a637682b34f"},{url:"/icons/arrow.png",revision:"80ab4186d1c54913453eb968762d992f"},{url:"/icons/arrowAR.png",revision:"b330d67821e6aed46054fc215df5165a"},{url:"/icons/arrowBottom.svg",revision:"dabb9e2beea1fbb1c8b628df4f9d856a"},{url:"/icons/arrowDown.png",revision:"98470d90bf2c61e026e9427386386483"},{url:"/icons/arrowDownLeft.png",revision:"199c7e7bdfae5571c4d0e5b81623df52"},{url:"/icons/arrowExample.png",revision:"c96730d402f5b26d7d90f656745068e9"},{url:"/icons/arrowExampleAR.png",revision:"f22d706b9a322cee3d2872dca3a98af7"},{url:"/icons/arrowLeftExample.png",revision:"53640a174af1627689b6bbbb10b9427b"},{url:"/icons/arrowLeftExampleAR.png",revision:"08e68300ad1f407cfb13a61f62f99175"},{url:"/icons/arrowRight.svg",revision:"7d9478062f524fef3188a5e004c4be45"},{url:"/icons/arrowUp.png",revision:"e6fbfec8851736f6878c204a477f8e30"},{url:"/icons/arrowUpAR.png",revision:"3ec839e1c8e8a15394dc14b9437d5797"},{url:"/icons/arrowUpLeft.svg",revision:"66402745f810a8c29c9b71a322eb7fd2"},{url:"/icons/arrowUpRight.svg",revision:"c97dc979239d105d60a2e1cdaef5e732"},{url:"/icons/arrowUpRightGreen.svg",revision:"e79705a14014c467bd35c96e0f13646b"},{url:"/icons/arrowUpright.tsx",revision:"f9dd892e120569853a9e15eb69e85de0"},{url:"/icons/arrowupright.png",revision:"d78653845b083abd0a3edd616561baef"},{url:"/icons/arrowuprightAR.png",revision:"c9afa972453559a12a953907d187c7fe"},{url:"/icons/avatar.svg",revision:"88a184c0f2f74b60d3f2a9816729807f"},{url:"/icons/avatarsvg.svg",revision:"88a184c0f2f74b60d3f2a9816729807f"},{url:"/icons/card.svg",revision:"2061796b2a73ddeb2249d41fef119d32"},{url:"/icons/check.svg",revision:"a8bc4229ba29f38c039ac711b4ea340d"},{url:"/icons/cvc.svg",revision:"6aabfd22fded17f7573e6aaa0d546416"},{url:"/icons/date.svg",revision:"76754f03661daa528a55a0ac850f74f6"},{url:"/icons/facebook.svg",revision:"09c8af7b364330bd3777d0acab54bfe4"},{url:"/icons/facebookColor.svg",revision:"a276f8dcae2968652d958f6aaa309ad5"},{url:"/icons/ff.svg",revision:"fb2e6fc8c8f2462eb95c15f5d210da22"},{url:"/icons/google.svg",revision:"fb2e6fc8c8f2462eb95c15f5d210da22"},{url:"/icons/hashtag.svg",revision:"1b7405f5923236948b56823e94dd9a81"},{url:"/icons/home.svg",revision:"a4c0b349f05520733d58853c780328e4"},{url:"/icons/i.svg",revision:"53810a0ff71b08696e99e3c40a0480c6"},{url:"/icons/instagram.svg",revision:"08915f9a2e7ac7230646adf2dea663f5"},{url:"/icons/left.svg",revision:"5158ecddb1f194fdcd1d22b76ec22171"},{url:"/icons/linkedin.svg",revision:"eae2d30b7020c034f9e69133f8ab2c3a"},{url:"/icons/logout.svg",revision:"8e8f593d54b60d99704ad24eb9796110"},{url:"/icons/message.svg",revision:"2393f165934c98aeaf5819394603eb8c"},{url:"/icons/mouse.svg",revision:"47c9338d5b95121495d7b8ca6dfba2c9"},{url:"/icons/play.png",revision:"856cb8bca38d26031e328de71a3e8dcd"},{url:"/icons/profile.svg",revision:"4769550581ace1f27bb0aee1b545e4ed"},{url:"/icons/security.svg",revision:"d4d42a27538559b32ba02f33c01fea55"},{url:"/icons/sliderArrowLeft.svg",revision:"b86a17dcd7bcbf12ce05b0b8a88bb73b"},{url:"/icons/sliderArrowRight.svg",revision:"872df906eb6d88781e0672dc9698ef91"},{url:"/icons/subscribe.svg",revision:"b38b9faa1bad91101da0a4ff252bc27e"},{url:"/icons/twitter.svg",revision:"ffe26a863e8f4aa3149b570804595699"},{url:"/icons/youtube.svg",revision:"60c0377105ffb2506dc3f77342a87be9"},{url:"/images/card.webp",revision:"21ccefed210337e8ea9ae4fd8d8bd742"},{url:"/images/cut-out-parallelogram-7.webp",revision:"35f0f11317635bdf1be1010b8936b91c"},{url:"/images/cut-out-parallelogram.webp",revision:"c849818f5b8a0e54f09208190b3ff9b0"},{url:"/images/exampleBoxOneIconLeft.webp",revision:"3d60d7da89baeff96d32008e2d5e693a"},{url:"/images/exampleBoxOneIconRight.webp",revision:"4fa1ab7ab3fcb074b01cb8b2ba2ba0f8"},{url:"/images/illustrationPic.webp",revision:"3a619d608aa0a60de0bcb65cf06a00ea"},{url:"/images/illustrationPicAR.webp",revision:"726c5a628df39caae83c66eb630f7c44"},{url:"/images/illustrationPicCenter.png",revision:"671a785b25689e25977439ec9b76a5c4"},{url:"/images/illustrationPicCenterAR.png",revision:"4bb3c154c0a8ee8f5e5e047bcbbb4246"},{url:"/images/illustrationPicMobile.webp",revision:"d720e96ebf952df3dbc6383be0c39f56"},{url:"/images/layoutBoxThree.webp",revision:"ddb5e49ff24ec58804bf5b821d74fded"},{url:"/images/layoutBoxTwo.webp",revision:"fedb141083993067a43ac981829261ce"},{url:"/images/logo.svg",revision:"b1e882474c8331a938770a168d4d5169"},{url:"/images/logo.webp",revision:"4f19611a17b906a6267073bb8b6379c5"},{url:"/images/mobile.webp",revision:"e584f469c7c56b60a73c0b63f72baea3"},{url:"/images/phone.webp",revision:"90acb3ef5fe9222915ba3f90295158f6"},{url:"/images/phoneAR.webp",revision:"fd1b258ba2d6817403d8e3d8f4ed8e92"},{url:"/images/pic.webp",revision:"66742f5f6c8d249fb82629734a755e8e"},{url:"/images/picAR.webp",revision:"90c14159dc83e0765e8f4374310107ce"},{url:"/images/slid.webp",revision:"1258a707c2b3470929ac306db9cbd0de"},{url:"/images/sliderExample.webp",revision:"a5598067f8140c3307e1d36412a07798"},{url:"/images/swirl-21.webp",revision:"4eadf82102c3b92044dce0c216c8ce20"},{url:"/images/swirl.webp",revision:"4eadf82102c3b92044dce0c216c8ce20"},{url:"/images/swirlIllustration.webp",revision:"fda9313e6e51cb65530e15fdc8c5ffde"},{url:"/images/swirlIllustrationLeft.webp",revision:"ef5d97dedf8d291f8b63e52f62ff14f1"},{url:"/images/swirlSmall.webp",revision:"3ccf7b166dcb2e2fed90e44c85a3712f"},{url:"/locales/ar/changePassword.json",revision:"706ac5f0ef3855a5fa8dfeb357f17a35"},{url:"/locales/ar/common.json",revision:"f0b490178a2fa87fb84c50f8754acfd0"},{url:"/locales/ar/contact.json",revision:"3da7f2aabc0999ea7f9bcc4304c40417"},{url:"/locales/ar/dashboard.json",revision:"eede88b625c02b5c6c6c1dfdea75e8d6"},{url:"/locales/ar/error.json",revision:"f10079ca4831557e4a2f2b8e9a9b79cb"},{url:"/locales/ar/example.json",revision:"260606c00a9a4d8b6c06b84795d413c3"},{url:"/locales/ar/home.json",revision:"04982c98efaf370cbf81cb9c1da1dc21"},{url:"/locales/ar/illustration.json",revision:"94d6a8d9b0afe7f925f322252ad4c042"},{url:"/locales/ar/login.json",revision:"08a31679bb4585415d9d9a47cfade590"},{url:"/locales/ar/payment.json",revision:"7a3550d82e36d19f6ccb670d655bdc70"},{url:"/locales/ar/privacy.json",revision:"bd057b6923dee2b3c3005f3a4a909687"},{url:"/locales/ar/profile.json",revision:"ac59e77302847c20249871bb4110949f"},{url:"/locales/ar/request.json",revision:"c15d7400468f1db8abb9b49e87f4cedb"},{url:"/locales/ar/security.json",revision:"35c46e0fc271a9a0290c0668a5195585"},{url:"/locales/ar/signup.json",revision:"301794359185dc0acae4971eaabaa83a"},{url:"/locales/ar/slider.json",revision:"67236fda88f6fe166a4d9f8615d17eeb"},{url:"/locales/ar/subscribe.json",revision:"05861b02df47cef08cbe01506ba23c5d"},{url:"/locales/ar/subscriptionsDash.json",revision:"b90ec23fd926cda25639cda79066a3e9"},{url:"/locales/ar/terms.json",revision:"e0f9abfa2f073df81ea599d07493697d"},{url:"/locales/ar/verification.json",revision:"e628daef13f92026425b80764ad8548b"},{url:"/locales/en/changePassword.json",revision:"d7b9cefc0023dc92cdbb495b12f7a15d"},{url:"/locales/en/common.json",revision:"64dbb5ff2ddc860890d5a34c95dd9024"},{url:"/locales/en/contact.json",revision:"b568eaae4404a3d8503851b50120ab4b"},{url:"/locales/en/dashboard.json",revision:"042eed941542c006f9ef7de9809e4542"},{url:"/locales/en/error.json",revision:"fb41ae8ae7ab38f9698219fc5d0ee371"},{url:"/locales/en/example.json",revision:"558a5621f0211b3003fc80f42d0a50fe"},{url:"/locales/en/home.json",revision:"de48c0a598f75663b154ae47577a73b1"},{url:"/locales/en/illustration.json",revision:"b7d5074445ca5546e940bba759306c91"},{url:"/locales/en/login.json",revision:"3dd8bff59925bd7732723d401465abf1"},{url:"/locales/en/payment.json",revision:"547438803c832ba284bdd33ec14d0db0"},{url:"/locales/en/privacy.json",revision:"0703ae06a0742519b3367ee85b64257b"},{url:"/locales/en/profile.json",revision:"57639cb985c10dea4e6e6efce7a46ae0"},{url:"/locales/en/request.json",revision:"fd7ce8d26e246148302242008c8a8fa1"},{url:"/locales/en/security.json",revision:"aa35dc0813b87bfa1ebd9dfb84a985f8"},{url:"/locales/en/signup.json",revision:"4f2feb859d198d0b8aa1a64d65e93508"},{url:"/locales/en/slider.json",revision:"c0567a8a90a8376582820ef87e0096b1"},{url:"/locales/en/subscribe.json",revision:"4ab45a48f448c9c68efcd820a9ea6ba6"},{url:"/locales/en/subscriptionsDash.json",revision:"39233c3cdd3866dfc558effc7fd6477e"},{url:"/locales/en/terms.json",revision:"4bf98efd0cc43b7fada92ff8e6728d3f"},{url:"/locales/en/verification.json",revision:"dfc407c10e973baa8e414aad7132e267"},{url:"/pwa/android-chrome-192x192.png",revision:"d0b1b226968e0e35a05ea1ff9bf86068"},{url:"/pwa/android-chrome-512x512.png",revision:"5e2cc367786a148a8c56167651d6ec9d"},{url:"/pwa/apple-touch-icon-114x114-precomposed.png",revision:"3d66c99d42e1f3d320c7c6d7a73dd7c2"},{url:"/pwa/apple-touch-icon-114x114.png",revision:"b67efd7f08766ba3da2d4d87242b1ae7"},{url:"/pwa/apple-touch-icon-120x120-precomposed.png",revision:"4b8f579a2b3bcddfe2a0eaff114fe185"},{url:"/pwa/apple-touch-icon-120x120.png",revision:"ac9fb849131875286066429cdadd8d96"},{url:"/pwa/apple-touch-icon-144x144-precomposed.png",revision:"52c1dfe8e386c05ece09d8a08a5ed9ac"},{url:"/pwa/apple-touch-icon-144x144.png",revision:"54f63b9be04fc49e7074acc296bf73de"},{url:"/pwa/apple-touch-icon-152x152-precomposed.png",revision:"5957860d48403ceba1639931dce4fe5f"},{url:"/pwa/apple-touch-icon-152x152.png",revision:"8d00265a999ea1c23980e390c9917ff7"},{url:"/pwa/apple-touch-icon-180x180-precomposed.png",revision:"2e2ccb0ee29bc7a3914d41d16448377b"},{url:"/pwa/apple-touch-icon-180x180.png",revision:"f8d6f3873bf169ee23bb165d2f781f0e"},{url:"/pwa/apple-touch-icon-57x57-precomposed.png",revision:"c01f01490f6e86476d8b5a1d8e72118a"},{url:"/pwa/apple-touch-icon-57x57.png",revision:"2bf38c7afb38a0450933df35b8d0186b"},{url:"/pwa/apple-touch-icon-60x60-precomposed.png",revision:"0fc4df03397aa32e8633ccadb68fd435"},{url:"/pwa/apple-touch-icon-60x60.png",revision:"f949739f794b3d668099d1745cb82385"},{url:"/pwa/apple-touch-icon-72x72-precomposed.png",revision:"fa838a454fd88c1fbbfde3001ffb7fd5"},{url:"/pwa/apple-touch-icon-72x72.png",revision:"78d7d87bc466953195c23104104dbc0f"},{url:"/pwa/apple-touch-icon-76x76-precomposed.png",revision:"d29cfc717759e1ab24b8a62e2c83b335"},{url:"/pwa/apple-touch-icon-76x76.png",revision:"8fe9b09d9f5dcac1e3f1cbc6a456383c"},{url:"/pwa/apple-touch-icon-precomposed.png",revision:"38071e85ef6d4552c070f32011e09a5a"},{url:"/pwa/apple-touch-icon.png",revision:"f8d6f3873bf169ee23bb165d2f781f0e"},{url:"/pwa/browserconfig.xml",revision:"7f2b2f8a4c6863cc7be0a1e4b7963bd9"},{url:"/pwa/favicon-16x16.png",revision:"6c64d8c547795bd1537c82f414628d17"},{url:"/pwa/favicon-32x32.png",revision:"db7d5a0aed7b398d9926ea52c5380a72"},{url:"/pwa/favicon.ico",revision:"987d97a1a0f3c8c1a8e9e7876986d795"},{url:"/pwa/manifest.json",revision:"812198a897a41d0d7ea703cc2e725382"},{url:"/pwa/mstile-144x144.png",revision:"ebf8d52c13c5ad52f96eee683719a780"},{url:"/pwa/mstile-150x150.png",revision:"59f87a83966e9a6f65988a4067a80777"},{url:"/pwa/safari-pinned-tab.svg",revision:"9cd89fb198bbaf016bb9a91b80058b2e"},{url:"/robots.txt",revision:"f23539c1b3c47131b64d7303bf7214a5"},{url:"/script.js",revision:"6b3bc1e75fb5fe3356bbf7a33a96aa85"},{url:"/sitemap-0.xml",revision:"f6ef5de78787f84c1fe23bd40a35a189"},{url:"/sitemap.xml",revision:"e08ae9f47966fae0653eadd11eadb0e9"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
