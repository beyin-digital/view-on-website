import { saveAs } from 'file-saver'

export const downloadSvg = (hashtag: string) => {
  const svgContent = `
   <svg width="1035" height="378" viewBox="0 0 345 126" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M71.1288 94.9023L66.7733 81.5685H69.3522L71.3962 88.0635L72.5806 92.4954H72.6379L73.8032 88.0635L75.8472 81.5685H78.3497L73.9942 94.9023H71.1288ZM81.6678 83.4788C81.1584 83.4788 80.7891 83.3642 80.5598 83.1349C80.3433 82.9057 80.2351 82.6128 80.2351 82.2562V81.8741C80.2351 81.5175 80.3433 81.2246 80.5598 80.9954C80.7891 80.7662 81.1584 80.6515 81.6678 80.6515C82.1645 80.6515 82.5274 80.7662 82.7567 80.9954C82.9859 81.2246 83.1005 81.5175 83.1005 81.8741V82.2562C83.1005 82.6128 82.9859 82.9057 82.7567 83.1349C82.5274 83.3642 82.1645 83.4788 81.6678 83.4788ZM80.4452 84.9306H82.8904V94.9023H80.4452V84.9306ZM90.1374 95.1316C89.3988 95.1316 88.7365 95.0106 88.1507 94.7686C87.5776 94.5139 87.0873 94.1637 86.6798 93.718C86.285 93.2595 85.9793 92.7119 85.7628 92.0751C85.5463 91.4256 85.4381 90.6997 85.4381 89.8974C85.4381 89.1078 85.54 88.3946 85.7437 87.7578C85.9602 87.1211 86.2659 86.5798 86.6607 86.1341C87.0555 85.6756 87.5394 85.3254 88.1125 85.0834C88.6856 84.8287 89.3351 84.7014 90.061 84.7014C90.8379 84.7014 91.5128 84.8351 92.0859 85.1025C92.659 85.37 93.1302 85.7329 93.4995 86.1914C93.8689 86.6499 94.1427 87.1848 94.321 87.7961C94.512 88.3946 94.6075 89.0377 94.6075 89.7254V90.5278H87.9788V90.7761C87.9788 91.502 88.1826 92.0878 88.5901 92.5336C88.9976 92.9666 89.6025 93.1831 90.4049 93.1831C91.0162 93.1831 91.5128 93.0557 91.8949 92.801C92.2897 92.5463 92.6399 92.2216 92.9456 91.8268L94.2637 93.2977C93.8561 93.8708 93.2958 94.3229 92.5826 94.654C91.8822 94.9724 91.0671 95.1316 90.1374 95.1316ZM90.0992 86.5353C89.4497 86.5353 88.9339 86.7518 88.5519 87.1848C88.1698 87.6178 87.9788 88.1781 87.9788 88.8658V89.0186H92.0668V88.8467C92.0668 88.159 91.8949 87.605 91.551 87.1848C91.2199 86.7518 90.736 86.5353 90.0992 86.5353ZM96.0734 84.9306H98.423L99.4355 89.0377L100.219 92.4572H100.295L101.212 89.0377L102.377 84.9306H104.593L105.797 89.0377L106.733 92.4572H106.809L107.592 89.0377L108.586 84.9306H110.859L108.127 94.9023H105.491L104.211 90.5087L103.466 87.7961H103.409L102.683 90.5087L101.422 94.9023H98.8242L96.0734 84.9306ZM118.468 95.1316C117.59 95.1316 116.794 94.9851 116.081 94.6922C115.367 94.3993 114.756 93.9599 114.247 93.3741C113.75 92.7883 113.362 92.0687 113.081 91.2155C112.801 90.3622 112.661 89.3689 112.661 88.2354C112.661 87.1147 112.801 86.1277 113.081 85.2745C113.362 84.4085 113.75 83.6826 114.247 83.0967C114.756 82.5109 115.367 82.0715 116.081 81.7786C116.794 81.4857 117.59 81.3393 118.468 81.3393C119.347 81.3393 120.143 81.4857 120.856 81.7786C121.569 82.0715 122.181 82.5109 122.69 83.0967C123.2 83.6826 123.588 84.4085 123.855 85.2745C124.136 86.1277 124.276 87.1147 124.276 88.2354C124.276 89.3689 124.136 90.3622 123.855 91.2155C123.588 92.0687 123.2 92.7883 122.69 93.3741C122.181 93.9599 121.569 94.3993 120.856 94.6922C120.143 94.9851 119.347 95.1316 118.468 95.1316ZM118.468 92.8965C119.424 92.8965 120.181 92.5782 120.742 91.9414C121.315 91.3046 121.601 90.4132 121.601 89.267V87.2039C121.601 86.0577 121.315 85.1662 120.742 84.5294C120.181 83.8927 119.424 83.5743 118.468 83.5743C117.513 83.5743 116.749 83.8927 116.176 84.5294C115.616 85.1662 115.336 86.0577 115.336 87.2039V89.267C115.336 90.4132 115.616 91.3046 116.176 91.9414C116.749 92.5782 117.513 92.8965 118.468 92.8965ZM127.063 94.9023V84.9306H129.508V86.5926H129.604C129.808 86.0577 130.126 85.6119 130.559 85.2554C131.005 84.886 131.616 84.7014 132.393 84.7014C133.424 84.7014 134.214 85.0389 134.762 85.7138C135.309 86.3888 135.583 87.3503 135.583 88.5984V94.9023H133.138V88.8467C133.138 88.1335 133.01 87.5987 132.756 87.2421C132.501 86.8855 132.081 86.7072 131.495 86.7072C131.24 86.7072 130.992 86.7454 130.75 86.8218C130.521 86.8855 130.311 86.9874 130.12 87.1274C129.941 87.2548 129.795 87.4204 129.68 87.6241C129.566 87.8152 129.508 88.0444 129.508 88.3118V94.9023H127.063ZM140.387 94.9023L137.292 81.5685H139.814L141.132 87.968L141.953 92.056H142.011L142.966 87.968L144.494 81.5685H147.283L148.811 87.968L149.747 92.056H149.805L150.645 87.968L152.002 81.5685H154.409L151.218 94.9023H148.372L146.672 87.8534L145.85 84.3384H145.812L144.953 87.8534L143.252 94.9023H140.387ZM160.326 95.1316C159.587 95.1316 158.925 95.0106 158.339 94.7686C157.766 94.5139 157.276 94.1637 156.868 93.718C156.473 93.2595 156.168 92.7119 155.951 92.0751C155.735 91.4256 155.626 90.6997 155.626 89.8974C155.626 89.1078 155.728 88.3946 155.932 87.7578C156.149 87.1211 156.454 86.5798 156.849 86.1341C157.244 85.6756 157.728 85.3254 158.301 85.0834C158.874 84.8287 159.523 84.7014 160.249 84.7014C161.026 84.7014 161.701 84.8351 162.274 85.1025C162.847 85.37 163.319 85.7329 163.688 86.1914C164.057 86.6499 164.331 87.1848 164.509 87.7961C164.7 88.3946 164.796 89.0377 164.796 89.7254V90.5278H158.167V90.7761C158.167 91.502 158.371 92.0878 158.778 92.5336C159.186 92.9666 159.791 93.1831 160.593 93.1831C161.205 93.1831 161.701 93.0557 162.083 92.801C162.478 92.5463 162.828 92.2216 163.134 91.8268L164.452 93.2977C164.045 93.8708 163.484 94.3229 162.771 94.654C162.071 94.9724 161.255 95.1316 160.326 95.1316ZM160.288 86.5353C159.638 86.5353 159.122 86.7518 158.74 87.1848C158.358 87.6178 158.167 88.1781 158.167 88.8658V89.0186H162.255V88.8467C162.255 88.159 162.083 87.605 161.739 87.1848C161.408 86.7518 160.924 86.5353 160.288 86.5353ZM167.329 80.7662H169.774V86.5735H169.851C170.029 86.0004 170.367 85.5483 170.863 85.2172C171.36 84.8733 171.939 84.7014 172.602 84.7014C173.875 84.7014 174.843 85.1535 175.505 86.0577C176.18 86.9492 176.518 88.229 176.518 89.8974C176.518 91.5784 176.18 92.8711 175.505 93.7753C174.843 94.6795 173.875 95.1316 172.602 95.1316C171.939 95.1316 171.36 94.9597 170.863 94.6158C170.379 94.2719 170.042 93.8135 169.851 93.2404H169.774V94.9023H167.329V80.7662ZM171.818 93.1067C172.455 93.1067 172.971 92.8965 173.366 92.4763C173.761 92.056 173.958 91.4893 173.958 90.7761V89.0568C173.958 88.3437 173.761 87.7769 173.366 87.3567C172.971 86.9237 172.455 86.7072 171.818 86.7072C171.233 86.7072 170.742 86.8536 170.348 87.1465C169.965 87.4395 169.774 87.8279 169.774 88.3118V91.4829C169.774 92.0051 169.965 92.4062 170.348 92.6864C170.742 92.9666 171.233 93.1067 171.818 93.1067ZM182.432 95.1316C181.477 95.1316 180.675 94.9724 180.025 94.654C179.376 94.3229 178.803 93.8708 178.306 93.2977L179.796 91.8459C180.165 92.2661 180.567 92.5973 181 92.8392C181.445 93.0812 181.955 93.2022 182.528 93.2022C183.114 93.2022 183.534 93.1003 183.789 92.8965C184.056 92.6928 184.19 92.4126 184.19 92.056C184.19 91.7631 184.094 91.5339 183.903 91.3683C183.725 91.19 183.413 91.069 182.967 91.0053L181.974 90.8716C180.891 90.7315 180.063 90.4259 179.49 89.9547C178.93 89.4707 178.65 88.7703 178.65 87.8534C178.65 87.3694 178.739 86.9364 178.917 86.5544C179.096 86.1596 179.35 85.8284 179.681 85.561C180.013 85.2808 180.407 85.0707 180.866 84.9306C181.337 84.7778 181.859 84.7014 182.432 84.7014C182.916 84.7014 183.343 84.7396 183.712 84.816C184.094 84.8797 184.438 84.9816 184.744 85.1216C185.049 85.249 185.33 85.4145 185.584 85.6183C185.839 85.8093 186.087 86.0258 186.329 86.2678L184.897 87.7005C184.604 87.3949 184.253 87.1402 183.846 86.9364C183.438 86.7327 182.993 86.6308 182.509 86.6308C181.974 86.6308 181.585 86.7263 181.343 86.9173C181.114 87.1083 181 87.3567 181 87.6623C181 87.9934 181.095 88.2482 181.286 88.4264C181.49 88.592 181.827 88.713 182.299 88.7894L183.311 88.9231C185.463 89.2288 186.539 90.2094 186.539 91.865C186.539 92.3489 186.437 92.7947 186.234 93.2022C186.043 93.597 185.769 93.9408 185.412 94.2337C185.056 94.5139 184.623 94.7368 184.113 94.9023C183.617 95.0552 183.056 95.1316 182.432 95.1316ZM190.303 83.4788C189.794 83.4788 189.424 83.3642 189.195 83.1349C188.979 82.9057 188.87 82.6128 188.87 82.2562V81.8741C188.87 81.5175 188.979 81.2246 189.195 80.9954C189.424 80.7662 189.794 80.6515 190.303 80.6515C190.8 80.6515 191.163 80.7662 191.392 80.9954C191.621 81.2246 191.736 81.5175 191.736 81.8741V82.2562C191.736 82.6128 191.621 82.9057 191.392 83.1349C191.163 83.3642 190.8 83.4788 190.303 83.4788ZM189.08 84.9306H191.526V94.9023H189.08V84.9306ZM197.856 94.9023C197.015 94.9023 196.372 94.6858 195.926 94.2528C195.493 93.8071 195.277 93.1767 195.277 92.3617V86.8791H193.806V84.9306H194.57C194.939 84.9306 195.188 84.8478 195.315 84.6823C195.455 84.504 195.525 84.2429 195.525 83.899V82.1989H197.722V84.9306H199.766V86.8791H197.722V92.9538H199.613V94.9023H197.856ZM206.225 95.1316C205.486 95.1316 204.824 95.0106 204.238 94.7686C203.665 94.5139 203.175 94.1637 202.767 93.718C202.373 93.2595 202.067 92.7119 201.851 92.0751C201.634 91.4256 201.526 90.6997 201.526 89.8974C201.526 89.1078 201.628 88.3946 201.831 87.7578C202.048 87.1211 202.354 86.5798 202.748 86.1341C203.143 85.6756 203.627 85.3254 204.2 85.0834C204.773 84.8287 205.423 84.7014 206.149 84.7014C206.926 84.7014 207.6 84.8351 208.174 85.1025C208.747 85.37 209.218 85.7329 209.587 86.1914C209.957 86.6499 210.23 87.1848 210.409 87.7961C210.6 88.3946 210.695 89.0377 210.695 89.7254V90.5278H204.066V90.7761C204.066 91.502 204.27 92.0878 204.678 92.5336C205.085 92.9666 205.69 93.1831 206.493 93.1831C207.104 93.1831 207.6 93.0557 207.983 92.801C208.377 92.5463 208.728 92.2216 209.033 91.8268L210.351 93.2977C209.944 93.8708 209.383 94.3229 208.67 94.654C207.97 94.9724 207.155 95.1316 206.225 95.1316ZM206.187 86.5353C205.537 86.5353 205.022 86.7518 204.64 87.1848C204.257 87.6178 204.066 88.1781 204.066 88.8658V89.0186H208.154V88.8467C208.154 88.159 207.983 87.605 207.639 87.1848C207.308 86.7518 206.824 86.5353 206.187 86.5353ZM214.363 95.1125C213.841 95.1125 213.452 94.9851 213.198 94.7304C212.956 94.463 212.835 94.1255 212.835 93.718V93.3741C212.835 92.9666 212.956 92.6291 213.198 92.3617C213.452 92.0942 213.841 91.9605 214.363 91.9605C214.898 91.9605 215.286 92.0942 215.528 92.3617C215.77 92.6291 215.891 92.9666 215.891 93.3741V93.718C215.891 94.1255 215.77 94.463 215.528 94.7304C215.286 94.9851 214.898 95.1125 214.363 95.1125ZM222.695 95.1316C221.956 95.1316 221.3 95.0106 220.727 94.7686C220.154 94.5267 219.67 94.1764 219.275 93.718C218.893 93.2595 218.6 92.7119 218.397 92.0751C218.193 91.4256 218.091 90.6997 218.091 89.8974C218.091 89.095 218.193 88.3755 218.397 87.7387C218.6 87.102 218.893 86.5607 219.275 86.115C219.67 85.6565 220.154 85.3063 220.727 85.0643C221.3 84.8224 221.956 84.7014 222.695 84.7014C223.701 84.7014 224.529 84.9242 225.178 85.37C225.84 85.8157 226.318 86.4334 226.611 87.223L224.605 88.1208C224.49 87.7005 224.274 87.3567 223.955 87.0892C223.65 86.8091 223.23 86.669 222.695 86.669C222.007 86.669 221.491 86.8855 221.147 87.3185C220.816 87.7515 220.651 88.3182 220.651 89.0186V90.8334C220.651 91.5339 220.816 92.1006 221.147 92.5336C221.491 92.9538 222.007 93.164 222.695 93.164C223.28 93.164 223.733 93.0175 224.051 92.7246C224.369 92.419 224.618 92.0433 224.796 91.5975L226.668 92.4954C226.337 93.3741 225.834 94.0363 225.159 94.4821C224.484 94.9151 223.663 95.1316 222.695 95.1316ZM232.797 95.1316C232.083 95.1316 231.44 95.0106 230.867 94.7686C230.307 94.5267 229.823 94.1764 229.415 93.718C229.021 93.2595 228.715 92.7119 228.498 92.0751C228.282 91.4256 228.174 90.6997 228.174 89.8974C228.174 89.095 228.282 88.3755 228.498 87.7387C228.715 87.102 229.021 86.5607 229.415 86.115C229.823 85.6565 230.307 85.3063 230.867 85.0643C231.44 84.8224 232.083 84.7014 232.797 84.7014C233.51 84.7014 234.153 84.8224 234.726 85.0643C235.299 85.3063 235.783 85.6565 236.178 86.115C236.585 86.5607 236.897 87.102 237.114 87.7387C237.33 88.3755 237.439 89.095 237.439 89.8974C237.439 90.6997 237.33 91.4256 237.114 92.0751C236.897 92.7119 236.585 93.2595 236.178 93.718C235.783 94.1764 235.299 94.5267 234.726 94.7686C234.153 95.0106 233.51 95.1316 232.797 95.1316ZM232.797 93.164C233.446 93.164 233.955 92.9666 234.325 92.5718C234.694 92.177 234.879 91.5975 234.879 90.8334V88.9804C234.879 88.229 234.694 87.656 234.325 87.2612C233.955 86.8664 233.446 86.669 232.797 86.669C232.16 86.669 231.657 86.8664 231.287 87.2612C230.918 87.656 230.733 88.229 230.733 88.9804V90.8334C230.733 91.5975 230.918 92.177 231.287 92.5718C231.657 92.9666 232.16 93.164 232.797 93.164ZM239.988 94.9023V84.9306H242.434V86.5926H242.529C242.72 86.0704 243.026 85.6247 243.446 85.2554C243.866 84.886 244.452 84.7014 245.203 84.7014C245.891 84.7014 246.483 84.8669 246.98 85.1981C247.477 85.5292 247.846 86.0322 248.088 86.7072H248.126C248.304 86.1468 248.655 85.6756 249.177 85.2936C249.712 84.8988 250.38 84.7014 251.183 84.7014C252.163 84.7014 252.915 85.0389 253.437 85.7138C253.972 86.3888 254.239 87.3503 254.239 88.5984V94.9023H251.794V88.8467C251.794 87.4204 251.259 86.7072 250.189 86.7072C249.947 86.7072 249.712 86.7454 249.483 86.8218C249.266 86.8855 249.069 86.9874 248.89 87.1274C248.725 87.2548 248.591 87.4204 248.489 87.6241C248.387 87.8152 248.336 88.0444 248.336 88.3118V94.9023H245.891V88.8467C245.891 87.4204 245.356 86.7072 244.287 86.7072C244.057 86.7072 243.828 86.7454 243.599 86.8218C243.382 86.8855 243.185 86.9874 243.007 87.1274C242.841 87.2548 242.701 87.4204 242.586 87.6241C242.484 87.8152 242.434 88.0444 242.434 88.3118V94.9023H239.988Z"
        fill="#0090EC" />
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#31E716"
        font-family="IBM Plex Sans Arabic, sans-serif" font-size="36px" font-weight= "bold">#${hashtag}</text>
    <path
        d="M36.8162 0C35.294 0 34.5329 0 33.9775 0.426475C33.4222 0.852949 33.2258 1.58826 32.8329 3.05888L10.2768 87.4971C9.67245 89.7596 9.37025 90.8908 9.91999 91.6771C9.95522 91.7275 9.99269 91.7763 10.0323 91.8233C10.6501 92.5574 11.821 92.5574 14.1628 92.5574C15.6092 92.5574 16.3323 92.5574 16.8714 92.1702C16.9071 92.1446 16.9419 92.1178 16.9759 92.0899C17.4891 91.669 17.6757 90.9703 18.0489 89.573L38.9977 11.1312C39.3904 9.66051 39.5868 8.92514 40.1422 8.49863C40.6976 8.07211 41.4587 8.07211 42.981 8.07211H338.898C340.356 8.07211 341.085 8.07211 341.626 7.67912C341.657 7.65682 341.687 7.63368 341.716 7.60973C342.235 7.18743 342.423 6.48296 342.798 5.07402C343.404 2.7964 343.707 1.65758 343.148 0.869113C343.117 0.825853 343.085 0.783792 343.051 0.743025C342.433 0 341.254 0 338.898 0H36.8162ZM305.127 114.87C304.734 116.34 304.537 117.075 303.982 117.502C303.426 117.928 302.665 117.928 301.143 117.928H5.25061C3.79263 117.928 3.06364 117.928 2.52206 118.321C2.49134 118.343 2.46124 118.366 2.4318 118.39C1.91274 118.813 1.72526 119.517 1.35031 120.926C0.744181 123.204 0.441117 124.342 1.00018 125.131C1.03085 125.174 1.06318 125.216 1.09709 125.257C1.71526 126 2.89372 126 5.25062 126H307.325C308.847 126 309.608 126 310.164 125.573C310.719 125.147 310.915 124.411 311.308 122.941L333.71 39.0294C334.312 36.7764 334.613 35.6498 334.068 34.8653C334.03 34.8109 333.99 34.7584 333.947 34.7079C333.33 33.9793 332.164 33.9793 329.832 33.9793C328.392 33.9793 327.671 33.9793 327.134 34.3635C327.095 34.391 327.058 34.4198 327.021 34.4499C326.511 34.8701 326.325 35.5658 325.953 36.9571L305.127 114.87Z"
        fill="#343132" />
</svg>
  `

  const blob = new Blob([svgContent], { type: 'image/svg+xml' })

  saveAs(blob, `${hashtag}-hashtag.svg`)
}
