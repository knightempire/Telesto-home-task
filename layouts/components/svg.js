import { motion } from "framer-motion";

const AnimatedSVG = () => {
  return (
    <motion.svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="300" // Reduced width
      height="400" // Reduced height
      viewBox="0 0 598 792"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.path
        d="M0 0 C9.18344001 2.01535135 15.97610606 11.75147857 20.90039062 19.22070312 C36.90336122 45.11538557 37.54104129 75.23427433 30.9375 104.25 C22.54800921 138.31747204 2.19232663 188.80767337 -23 214 C-22.03513672 214.26103516 -21.07027344 214.52207031 -20.07617188 214.79101562 C50.13306479 233.83197135 124.27641816 262.0333201 170 322 C170.42877441 322.55768066 170.85754883 323.11536133 171.29931641 323.68994141 C190.97131176 349.39123935 205.11568926 378.69126103 212.25 410.3125 C212.40098145 410.97991211 212.55196289 411.64732422 212.70751953 412.33496094 C213.18063646 414.55066301 213.59952836 416.76997036 214 419 C214.17805176 419.98154053 214.35610352 420.96308105 214.53955078 421.97436523 C216.19501659 432.13572976 216.39780282 442.16187447 216.375 452.4375 C216.37478851 453.31818146 216.37457703 454.19886292 216.37435913 455.10623169 C216.34091683 469.08146983 215.44877177 482.40190401 212 496 C211.82339844 496.74040527 211.64679688 497.48081055 211.46484375 498.24365234 C201.66087943 538.66684967 175.09467246 575.01841027 140.05761719 597.23144531 C97.40856921 623.22439806 45.91104609 630.17162139 -2.56445312 618.609375 C-62.3602893 603.64842802 -106.68300711 568.99271063 -138.39111328 516.70605469 C-140.66896802 512.84448178 -142.86601583 508.94323161 -145 505 C-144.34 504.67 -143.68 504.34 -143 504 C-140.890625 504.92114258 -140.890625 504.92114258 -138.25 506.39453125 C-137.26241699 506.93319824 -136.27483398 507.47186523 -135.25732422 508.02685547 C-134.18240723 508.61611816 -133.10749023 509.20538086 -132 509.8125 C-78.36168055 538.41081774 -11.95888668 552.17629368 47.22802734 534.328125 C61.78954393 529.66084179 75.65972612 522.31764049 87 512 C87.97582031 511.11699219 88.95164062 510.23398437 89.95703125 509.32421875 C107.46395432 492.94134011 118.31886728 469.66175627 119.3359375 445.59765625 C120.03071279 402.9682294 99.803016 368.21451361 71.12109375 337.9375 C65.11745138 331.78867709 58.77153993 326.28180115 52 321 C51.38382812 320.51273437 50.76765625 320.02546875 50.1328125 319.5234375 C34.33161205 307.04233364 17.77918833 296.43452229 0 287 C-0.79374023 286.57251465 -1.58748047 286.1450293 -2.40527344 285.70458984 C-19.33314763 276.64304037 -37.0835487 269.81047106 -55 263 C-57.31095894 265.86540397 -59.58427523 268.74022466 -61.7421875 271.72265625 C-62.24258545 272.41383545 -62.7429834 273.10501465 -63.25854492 273.81713867 C-66.17877705 277.87353119 -69.09294381 281.93415332 -72 286 C-72.76884521 287.07169434 -72.76884521 287.07169434 -73.55322266 288.16503906 C-91.59992976 313.38453259 -109.29538865 339.24953291 -125 366 C-125.43086914 366.73234863 -125.86173828 367.46469727 -126.30566406 368.21923828 C-160.82603907 427.41374719 -181.38911594 499.96760964 -164.25 567.9375 C-161.71209667 577.4149331 -158.38676199 586.23569191 -154 595 C-153.68804687 595.63873047 -153.37609375 596.27746094 -153.0546875 596.93554688 C-146.56096002 610.14737859 -138.10530175 621.29086651 -128 632 C-127.33871094 632.72574219 -126.67742187 633.45148437 -125.99609375 634.19921875 C-110.42213519 650.65974042 -89.43638115 662.61722741 -69 672 C-68.34241699 672.30389648 -67.68483398 672.60779297 -67.00732422 672.92089844 C-14.43717742 696.83846462 44.31593991 691.81134799 97.37304688 672.37792969 C106.83152384 668.78452339 115.94879947 664.50916147 125 660 C125.84594727 659.58250488 126.69189453 659.16500977 127.56347656 658.73486328 C167.91670358 639.30055303 167.91670358 639.30055303 199 609 C199.66 609 200.32 609 201 609 C197.89461697 629.16582068 183.00454002 650.10997458 171 666 C169.93458984 667.41539062 169.93458984 667.41539062 168.84765625 668.859375 C157.87945206 682.94533049 145.14961227 696.12784054 131 707 C130.08879395 707.70914551 130.08879395 707.70914551 129.15917969 708.43261719 C76.93842595 748.75105804 7.67543636 766.55076623 -57.6953125 758.75390625 C-107.91178706 751.96350811 -154.25484125 732.32935066 -191 697 C-191.90202148 696.13882568 -191.90202148 696.13882568 -192.82226562 695.26025391 C-201.38376197 687.04637705 -209.16721282 678.71653266 -216 669 C-216.39993164 668.43909668 -216.79986328 667.87819336 -217.21191406 667.30029297 C-238.93356389 636.62684683 -251.45406672 601.81342261 -258 565 C-258.16661133 564.08879395 -258.33322266 563.17758789 -258.50488281 562.23876953 C-271.68717469 486.67940086 -250.29116016 410.58271993 -211.74658203 345.94189453 C-210.06240112 343.10510672 -208.40046425 340.25659843 -206.74609375 337.40234375 C-199.34105573 324.65863136 -191.48411718 312.27226112 -183.32714844 299.99822998 C-181.82450377 297.73576292 -180.32430081 295.47168646 -178.82421875 293.20751953 C-175.81321377 288.66404462 -172.79807041 284.12333716 -169.78030396 279.58435059 C-168.5750602 277.77148515 -167.37034675 275.95826701 -166.16622925 274.14465332 C-157.63062749 261.29613271 -148.90202951 248.59745245 -140 236 C-155.45125203 230.9171437 -171.08998527 226.57295265 -186.78157806 222.30308151 C-188.83185649 221.74472864 -190.88172251 221.1848865 -192.93145752 220.62454224 C-214.91861984 214.61399463 -236.93304849 208.71142097 -259 203 C-259 202.34 -259 201.68 -259 201 C-255.39628576 200.68214768 -251.79195501 200.37182937 -248.1875 200.0625 C-247.20201172 199.97548828 -246.21652344 199.88847656 -245.20117188 199.79882812 C-226.40846588 198.19818755 -207.68934372 197.81045546 -188.8366394 197.81359863 C-185.96121191 197.81407292 -183.08588803 197.80869206 -180.21047974 197.79821777 C-152.1603179 197.70038374 -152.1603179 197.70038374 -139.0234375 198.87109375 C-138.17106003 198.94306473 -137.31868256 199.01503571 -136.44047546 199.08918762 C-132.67663824 199.41778717 -128.94425558 199.81398831 -125.20336914 200.34301758 C-121.4735142 200.72391568 -118.63218477 200.93112957 -115 200 C-111.32827072 196.52124299 -109.30095224 192.45980292 -107 188 C-105.76356539 186.09962267 -104.50096289 184.21597635 -103.2109375 182.3515625 C-78.20857686 145.06269642 -55.06270919 106.65497599 -34 67 C-33.52030762 66.09846191 -33.04061523 65.19692383 -32.54638672 64.26806641 C-23.67165016 47.54318603 -15.24654958 30.59209496 -6.81298828 13.64208984 C-4.54859216 9.09142585 -2.27561648 4.54506225 0 0 Z"
 fill="none"
        stroke="#062964" // Dark blue
        transform="translate(279,0)"
        strokeWidth="2"
        initial={{ pathLength: 0, fill: "rgba(243, 243, 243, 0)" }}

        transition={{ duration: 2, ease: "easeInOut" }}
        animate={{ 
            pathLength: 1,
            fill: "rgba(6, 41, 100, 0.6)",
            duration: 6, 
            delay: 14 
          }}
      />
      <motion.path
        d="M0 0 C17.94128372 4.25609247 35.54985944 9.01484358 53 15 C54.04913574 15.35368652 55.09827148 15.70737305 56.17919922 16.07177734 C81.85827059 24.80522913 107.11643683 36.36516309 130 51 C131.02609375 51.64710938 132.0521875 52.29421875 133.109375 52.9609375 C156.19964286 67.92685185 178.25512968 86.03902848 195 108 C195.42877441 108.55768066 195.85754883 109.11536133 196.29931641 109.68994141 C215.97131176 135.39123935 230.11568926 164.69126103 237.25 196.3125 C237.40098145 196.97991211 237.55196289 197.64732422 237.70751953 198.33496094 C238.18063646 200.55066301 238.59952836 202.76997036 239 205 C239.17805176 205.98154053 239.35610352 206.96308105 239.53955078 207.97436523 C241.19501659 218.13572976 241.39780282 228.16187447 241.375 238.4375 C241.37478851 239.31818146 241.37457703 240.19886292 241.37435913 241.10623169 C241.34091683 255.08146983 240.44877177 268.40190401 237 282 C236.82339844 282.74040527 236.64679688 283.48081055 236.46484375 284.24365234 C226.66087943 324.66684967 200.09467246 361.01841027 165.05761719 383.23144531 C122.40856921 409.22439806 70.91104609 416.17162139 22.43554688 404.609375 C-37.3602893 389.64842802 -81.68300711 354.99271063 -113.39111328 302.70605469 C-115.66896802 298.84448178 -117.86601583 294.94323161 -120 291 C-119.34 290.67 -118.68 290.34 -118 290 C-115.890625 290.92114258 -115.890625 290.92114258 -113.25 292.39453125 C-112.26241699 292.93319824 -111.27483398 293.47186523 -110.25732422 294.02685547 C-109.18240723 294.61611816 -108.10749023 295.20538086 -107 295.8125 C-53.36168055 324.41081774 13.04111332 338.17629368 72.22802734 320.328125 C86.78954393 315.66084179 100.65972612 308.31764049 112 298 C112.97582031 297.11699219 113.95164062 296.23398437 114.95703125 295.32421875 C132.46395432 278.94134011 143.31886728 255.66175627 144.3359375 231.59765625 C145.03071279 188.9682294 124.803016 154.21451361 96.12109375 123.9375 C90.11745138 117.78867709 83.77153993 112.28180115 77 107 C76.38382813 106.51273437 75.76765625 106.02546875 75.1328125 105.5234375 C59.33161205 93.04233364 42.77918833 82.43452229 25 73 C24.20625977 72.57251465 23.41251953 72.1450293 22.59472656 71.70458984 C5.66685237 62.64304037 -12.0835487 55.81047106 -30 49 C-30 45.17229737 -28.81514337 43.91697431 -26.6484375 40.78125 C-25.9172168 39.71132812 -25.18599609 38.64140625 -24.43261719 37.5390625 C-24.03715698 36.96510742 -23.64169678 36.39115234 -23.23425293 35.79980469 C-21.09975972 32.68725718 -19.00960846 29.54509022 -16.9140625 26.40625 C-16.03787533 25.0962773 -15.16157243 23.78638199 -14.28515625 22.4765625 C-13.62990967 21.49671387 -13.62990967 21.49671387 -12.96142578 20.49707031 C-12.06053232 19.150832 -11.15882185 17.8051401 -10.25634766 16.45996094 C-8.93174571 14.48516893 -7.61012288 12.50841235 -6.2890625 10.53125 C-5.88700592 9.93332642 -5.48494934 9.33540283 -5.07070923 8.71936035 C-3.18393041 5.88957271 -1.42231155 3.09321925 0 0 Z"
        fill="none"
        transform="translate(254,214)"
        initial={{ pathLength: 0, fill: "rgba(243, 243, 243, 0)" }}
 
        transition={{ duration: 2, ease: "easeInOut", delay: 2 }} // Delay to start after the first path
        animate={{ 
            pathLength: 1,
            fill: "#DFD6C9",
            duration: 6, 
            delay: 14 
          }}
      />
      <motion.path
fill="none"
stroke="#BCA98F" // Light beige
strokeWidth="2"
initial={{ pathLength: 0, fill: "rgba(243, 243, 243, 0)" }}

transition={{ duration: 2, ease: "easeInOut", delay: 4 }} // Delay to start after the second path
animate={{ 
    pathLength: 1,
    fill: "#DFD6C9",
    duration: 2, 
    delay: 4 
  }}
      />
      <motion.path
        d="M0 0 C2.64 0 5.28 0 8 0 C7.67 0.99 7.34 1.98 7 3 C4.69 2.67 2.38 2.34 0 2 C0 1.34 0 0.68 0 0 Z"
        fill="none"
        stroke="#DFD6C9" // Cream color
        strokeWidth="2"
        initial={{ pathLength: 0, fill: "rgba(243, 243, 243, 0)" }}
    
        transition={{ duration: 2, ease: "easeInOut", delay: 6 }} // Delay to start after the third path
        animate={{ 
            pathLength: 1,
            fill: "#DFD6C9",
            duration: 6, 
            delay: 14 
          }}
      />


<motion.path
        d="M0 0 C9.18344001 2.01535135 15.97610606 11.75147857 20.90039062 19.22070312 C36.90336122 45.11538557 37.54104129 75.23427433 30.9375 104.25 C22.54800921 138.31747204 2.19232663 188.80767337 -23 214 C-22.03513672 214.26103516 -21.07027344 214.52207031 -20.07617188 214.79101562 C50.13306479 233.83197135 124.27641816 262.0333201 170 322 C170.42877441 322.55768066 170.85754883 323.11536133 171.29931641 323.68994141 C190.97131176 349.39123935 205.11568926 378.69126103 212.25 410.3125 C212.40098145 410.97991211 212.55196289 411.64732422 212.70751953 412.33496094 C213.18063646 414.55066301 213.59952836 416.76997036 214 419 C214.17805176 419.98154053 214.35610352 420.96308105 214.53955078 421.97436523 C216.19501659 432.13572976 216.39780282 442.16187447 216.375 452.4375 C216.37478851 453.31818146 216.37457703 454.19886292 216.37435913 455.10623169 C216.34091683 469.08146983 215.44877177 482.40190401 212 496 C211.82339844 496.74040527 211.64679688 497.48081055 211.46484375 498.24365234 C201.66087943 538.66684967 175.09467246 575.01841027 140.05761719 597.23144531 C97.40856921 623.22439806 45.91104609 630.17162139 -2.56445312 618.609375 C-62.3602893 603.64842802 -106.68300711 568.99271063 -138.39111328 516.70605469 C-140.66896802 512.84448178 -142.86601583 508.94323161 -145 505 C-144.34 504.67 -143.68 504.34 -143 504 C-140.890625 504.92114258 -140.890625 504.92114258 -138.25 506.39453125 C-137.26241699 506.93319824 -136.27483398 507.47186523 -135.25732422 508.02685547 C-134.18240723 508.61611816 -133.10749023 509.20538086 -132 509.8125 C-78.36168055 538.41081774 -11.95888668 552.17629368 47.22802734 534.328125 C61.78954393 529.66084179 75.65972612 522.31764049 87 512 C87.97582031 511.11699219 88.95164062 510.23398437 89.95703125 509.32421875 C107.46395432 492.94134011 118.31886728 469.66175627 119.3359375 445.59765625 C120.03071279 402.9682294 99.803016 368.21451361 71.12109375 337.9375 C65.11745138 331.78867709 58.77153993 326.28180115 52 321 C51.38382812 320.51273437 50.76765625 320.02546875 50.1328125 319.5234375 C34.33161205 307.04233364 17.77918833 296.43452229 0 287 C-0.79374023 286.57251465 -1.58748047 286.1450293 -2.40527344 285.70458984 C-19.33314763 276.64304037 -37.0835487 269.81047106 -55 263 C-57.31095894 265.86540397 -59.58427523 268.74022466 -61.7421875 271.72265625 C-62.24258545 272.41383545 -62.7429834 273.10501465 -63.25854492 273.81713867 C-66.17877705 277.87353119 -69.09294381 281.93415332 -72 286 C-72.76884521 287.07169434 -72.76884521 287.07169434 -73.55322266 288.16503906 C-91.59992976 313.38453259 -109.29538865 339.24953291 -125 366 C-125.43086914 366.73234863 -125.86173828 367.46469727 -126.30566406 368.21923828 C-160.82603907 427.41374719 -181.38911594 499.96760964 -164.25 567.9375 C-161.71209667 577.4149331 -158.38676199 586.23569191 -154 595 C-153.68804687 595.63873047 -153.37609375 596.27746094 -153.0546875 596.93554688 C-146.56096002 610.14737859 -138.10530175 621.29086651 -128 632 C-127.33871094 632.72574219 -126.67742187 633.45148437 -125.99609375 634.19921875 C-110.42213519 650.65974042 -89.43638115 662.61722741 -69 672 C-68.34241699 672.30389648 -67.68483398 672.60779297 -67.00732422 672.92089844 C-14.43717742 696.83846462 44.31593991 691.81134799 97.37304688 672.37792969 C106.83152384 668.78452339 115.94879947 664.50916147 125 660 C125.84594727 659.58250488 126.69189453 659.16500977 127.56347656 658.73486328 C167.91670358 639.30055303 167.91670358 639.30055303 199 609 C199.66 609 200.32 609 201 609 C197.89461697 629.16582068 183.00454002 650.10997458 171 666 C169.93458984 667.41539062 169.93458984 667.41539062 168.84765625 668.859375 C157.87945206 682.94533049 145.14961227 696.12784054 131 707 C130.08879395 707.70914551 130.08879395 707.70914551 129.15917969 708.43261719 C76.93842595 748.75105804 7.67543636 766.55076623 -57.6953125 758.75390625 C-107.91178706 751.96350811 -154.25484125 732.32935066 -191 697 C-191.90202148 696.13882568 -191.90202148 696.13882568 -192.82226562 695.26025391 C-201.38376197 687.04637705 -209.16721282 678.71653266 -216 669 C-216.39993164 668.43909668 -216.79986328 667.87819336 -217.21191406 667.30029297 C-238.93356389 636.62684683 -251.45406672 601.81342261 -258 565 C-258.16661133 564.08879395 -258.33322266 563.17758789 -258.50488281 562.23876953 C-271.68717469 486.67940086 -250.29116016 410.58271993 -211.74658203 345.94189453 C-210.06240112 343.10510672 -208.40046425 340.25659843 -206.74609375 337.40234375 C-199.34105573 324.65863136 -191.48411718 312.27226112 -183.32714844 299.99822998 C-181.82450377 297.73576292 -180.32430081 295.47168646 -178.82421875 293.20751953 C-175.81321377 288.66404462 -172.79807041 284.12333716 -169.78030396 279.58435059 C-168.5750602 277.77148515 -167.37034675 275.95826701 -166.16622925 274.14465332 C-157.63062749 261.29613271 -148.90202951 248.59745245 -140 236 C-155.45125203 230.9171437 -171.08998527 226.57295265 -186.78157806 222.30308151 C-188.83185649 221.74472864 -190.88172251 221.1848865 -192.93145752 220.62454224 C-214.91861984 214.61399463 -236.93304849 208.71142097 -259 203 C-259 202.34 -259 201.68 -259 201 C-255.39628576 200.68214768 -251.79195501 200.37182937 -248.1875 200.0625 C-247.20201172 199.97548828 -246.21652344 199.88847656 -245.20117188 199.79882812 C-226.40846588 198.19818755 -207.68934372 197.81045546 -188.8366394 197.81359863 C-185.96121191 197.81407292 -183.08588803 197.80869206 -180.21047974 197.79821777 C-152.1603179 197.70038374 -152.1603179 197.70038374 -139.0234375 198.87109375 C-138.17106003 198.94306473 -137.31868256 199.01503571 -136.44047546 199.08918762 C-132.67663824 199.41778717 -128.94425558 199.81398831 -125.20336914 200.34301758 C-121.4735142 200.72391568 -118.63218477 200.93112957 -115 200 C-111.32827072 196.52124299 -109.30095224 192.45980292 -107 188 C-105.76356539 186.09962267 -104.50096289 184.21597635 -103.2109375 182.3515625 C-78.20857686 145.06269642 -55.06270919 106.65497599 -34 67 C-33.52030762 66.09846191 -33.04061523 65.19692383 -32.54638672 64.26806641 C-23.67165016 47.54318603 -15.24654958 30.59209496 -6.81298828 13.64208984 C-4.54859216 9.09142585 -2.27561648 4.54506225 0 0 Z"
 fill="none"
        stroke="#062964" // Dark blue
        transform="translate(279,0)"
        strokeWidth="2"
        initial={{ pathLength: 0, fill: "rgba(243, 243, 243, 0)" }}

        transition={{ duration: 2, ease: "easeInOut" }}
        animate={{ 
            pathLength: 1,
            fill: "rgba(6, 41, 100, 0.6)",
            duration: 6, 
            delay: 14 
          }}
      />
      <motion.path
        d="M0 0 C17.94128372 4.25609247 35.54985944 9.01484358 53 15 C54.04913574 15.35368652 55.09827148 15.70737305 56.17919922 16.07177734 C81.85827059 24.80522913 107.11643683 36.36516309 130 51 C131.02609375 51.64710938 132.0521875 52.29421875 133.109375 52.9609375 C156.19964286 67.92685185 178.25512968 86.03902848 195 108 C195.42877441 108.55768066 195.85754883 109.11536133 196.29931641 109.68994141 C215.97131176 135.39123935 230.11568926 164.69126103 237.25 196.3125 C237.40098145 196.97991211 237.55196289 197.64732422 237.70751953 198.33496094 C238.18063646 200.55066301 238.59952836 202.76997036 239 205 C239.17805176 205.98154053 239.35610352 206.96308105 239.53955078 207.97436523 C241.19501659 218.13572976 241.39780282 228.16187447 241.375 238.4375 C241.37478851 239.31818146 241.37457703 240.19886292 241.37435913 241.10623169 C241.34091683 255.08146983 240.44877177 268.40190401 237 282 C236.82339844 282.74040527 236.64679688 283.48081055 236.46484375 284.24365234 C226.66087943 324.66684967 200.09467246 361.01841027 165.05761719 383.23144531 C122.40856921 409.22439806 70.91104609 416.17162139 22.43554688 404.609375 C-37.3602893 389.64842802 -81.68300711 354.99271063 -113.39111328 302.70605469 C-115.66896802 298.84448178 -117.86601583 294.94323161 -120 291 C-119.34 290.67 -118.68 290.34 -118 290 C-115.890625 290.92114258 -115.890625 290.92114258 -113.25 292.39453125 C-112.26241699 292.93319824 -111.27483398 293.47186523 -110.25732422 294.02685547 C-109.18240723 294.61611816 -108.10749023 295.20538086 -107 295.8125 C-53.36168055 324.41081774 13.04111332 338.17629368 72.22802734 320.328125 C86.78954393 315.66084179 100.65972612 308.31764049 112 298 C112.97582031 297.11699219 113.95164062 296.23398437 114.95703125 295.32421875 C132.46395432 278.94134011 143.31886728 255.66175627 144.3359375 231.59765625 C145.03071279 188.9682294 124.803016 154.21451361 96.12109375 123.9375 C90.11745138 117.78867709 83.77153993 112.28180115 77 107 C76.38382813 106.51273437 75.76765625 106.02546875 75.1328125 105.5234375 C59.33161205 93.04233364 42.77918833 82.43452229 25 73 C24.20625977 72.57251465 23.41251953 72.1450293 22.59472656 71.70458984 C5.66685237 62.64304037 -12.0835487 55.81047106 -30 49 C-30 45.17229737 -28.81514337 43.91697431 -26.6484375 40.78125 C-25.9172168 39.71132812 -25.18599609 38.64140625 -24.43261719 37.5390625 C-24.03715698 36.96510742 -23.64169678 36.39115234 -23.23425293 35.79980469 C-21.09975972 32.68725718 -19.00960846 29.54509022 -16.9140625 26.40625 C-16.03787533 25.0962773 -15.16157243 23.78638199 -14.28515625 22.4765625 C-13.62990967 21.49671387 -13.62990967 21.49671387 -12.96142578 20.49707031 C-12.06053232 19.150832 -11.15882185 17.8051401 -10.25634766 16.45996094 C-8.93174571 14.48516893 -7.61012288 12.50841235 -6.2890625 10.53125 C-5.88700592 9.93332642 -5.48494934 9.33540283 -5.07070923 8.71936035 C-3.18393041 5.88957271 -1.42231155 3.09321925 0 0 Z"
        fill="none"
        transform="translate(254,214)"
        initial={{ pathLength: 0, fill: "rgba(243, 243, 243, 0)" }}

        transition={{ duration: 2, ease: "easeInOut", delay: 2 }} // Delay to start after the first path
        animate={{ 
            pathLength: 1,
            fill: "#DFD6C9",
            duration: 6, 
            delay: 14 
          }}
   
      />
      <motion.path
fill="none"
stroke="#BCA98F" // Light beige
strokeWidth="2"
initial={{ pathLength: 0, fill: "rgba(243, 243, 243, 0)" }}

transition={{ duration: 2, ease: "easeInOut", delay: 4 }} // Delay to start after the second path
animate={{ 
    pathLength: 1,
    fill: "#DFD6C9",
    duration: 2, 
    delay: 4 
  }}

      />
      <motion.path
        d="M0 0 C2.64 0 5.28 0 8 0 C7.67 0.99 7.34 1.98 7 3 C4.69 2.67 2.38 2.34 0 2 C0 1.34 0 0.68 0 0 Z"
        fill="none"
        stroke="#DFD6C9" // Cream color
        strokeWidth="2"
        initial={{ pathLength: 0, fill: "rgba(243, 243, 243, 0)" }}
      
        transition={{ duration: 2, ease: "easeInOut", delay: 6 }} // Delay to start after the third path
        animate={{ 
            pathLength: 1,
            fill: "#DFD6C9",
            duration: 6, 
            delay: 14 
          }}
   
      />


<motion.path
        d="M0 0 C2.64 0 5.28 0 8 0 C7.67 0.99 7.34 1.98 7 3 C4.69 2.67 2.38 2.34 0 2 C0 1.34 0 0.68 0 0 Z"
        stroke="#DFD6C9" // Cream color
        initial={{ pathLength: 0, fill: "rgba(243, 243, 243, 0)" }}
   
        transition={{ duration: 2, ease: "easeInOut", delay: 6 }} // Delay to start after the third path
        animate={{ 
            pathLength: 1,
            fill: "#DFD6C9",
            duration: 6, 
            delay: 14 
          }}
      />
      
      
      
    </motion.svg>

    
  );
};


export default AnimatedSVG;