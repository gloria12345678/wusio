/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _i81_profile_jp_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./i81/profile_jp.json */ \"./i81/profile_jp.json\");\n\nlet profile =_i81_profile_jp_json__WEBPACK_IMPORTED_MODULE_0__\nfunction gustprofile(){\n    let profilecenten = document.getElementById(\"profile\");\n    let BigProfile = document.getElementById(\"BigProfile\");\n    for(let i=0;i<profile.length;i++){\n       let aaa=document.createElement(\"div\");\n       aaa.setAttribute(\"class\",\"bigborder\");\n       aaa.innerHTML=\"<div class='img' id='img\"+i+\"'  style='background-image:url(./img/avatar/\"+[i]+\".png)'><div class='btn' id='btn\"+[i]+\"'></div></div><div class='name'>\"+profile[i].CO+\"</div><div class='name1'><h3>\"+profile[i].name+\"</h3></div>\"\n       profilecenten.appendChild(aaa);\n\n\n       let gustPro = document.getElementById('btn'+[i]);\n        gustPro.addEventListener('click',function(e){\n            console.log(profile[i].number)\n            document.body.setAttribute(\"style\",\"touch-action: none;overflow: hidden;\");\n            let bbb =document.createElement(\"div\");\n            e.preventDefault();\n            bbb.className = \"BigPro\";\n            bbb.setAttribute(\"id\",\"BigPro\");\n            let Height =window.innerHeight+200;\n            bbb.setAttribute(\"style\",\"touch-action: none;position: absolute;width:\"+window.innerWidth+\"px;height:\"+Height+\"px;\");\n        bbb.innerHTML=\"<div class=' swiper mySwiper'><div class='swiper-wrapper pro-row' id='imgg\"+i+\"' ></div>  <div class='swiper-button-next'></div><div class='swiper-button-prev'></div></div>\";\n        BigProfile.appendChild(bbb);\n        let photo = document.getElementById(\"imgg\"+i);\n        let ccc = document.getElementById(\"BigPro\");\n        let det =  document.getElementById(\"det\");\n        let asd= screen.width/2-25\n        det.setAttribute(\"style\",\" display:block;left: \"+asd+\"px;\");\n        document.body.scrollTop = document.documentElement.scrollTop = 0;\n        ccc.style.top=380+\"px\";\n        for(let j=0;j<profile[i].number;j++){\n            let fff=document.createElement(\"div\");\n            fff.setAttribute(\"class\",\"swiper-slide\");\n            fff.innerHTML=\"<div class='img swiper-slide' style='background-image:url(./img/avatar/\"+i+\"/\"+j+\".png)'></div>\";\n            photo.appendChild(fff);  \n            var swiper = new Swiper(\".mySwiper\", {\n                navigation: {\n                  nextEl: \".swiper-button-next\",\n                  prevEl: \".swiper-button-prev\",\n                },\n              });  \n        }\n         \n           \n        }, {passive: false}) \n\n    }\n    \n    det.addEventListener('click', function () {\n      let ccc = document.getElementById(\"BigProfile\")\n\n          ccc.removeChild(ccc.children[0]);\n          document.body.setAttribute(\"style\",\"\");\n        det.setAttribute(\"style\",\" display:none;\");\n          console.log(ccc)\n    //   gustPro.removeEventListener('click',\n    //       locationGustPro,\n    //       false\n    //   );\n    });\n  \n};\ngustprofile();\n\n\n\n\n/* s<div class='pro-row-centen'>\"+profile[i].profile+\"</div><div class='pro-row-delet'></div>  */\n\n//# sourceURL=webpack://web32/./index.js?");

/***/ }),

/***/ "./i81/profile_jp.json":
/*!*****************************!*\
  !*** ./i81/profile_jp.json ***!
  \*****************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('[{\"name\":\"河 明宗\",\"number\":2,\"CO\":\"VeryLongAnimals<br/>Founder\",\"site\":\"https://verylonganimals.notion.site/VeryLongAnimals-866baf6526a4404ab674acc41715cd21\",\"twitter\":\"https://mobile.twitter.com/gdvonly\",\"profile\":\"顔が長い動物のNFTコレクション/VeryLongAnimals/のファウンダー・創業時クリエイター。VeryLongAnimalsは開始2ヶ月半時点で100以上の二次創作シリーズを持ち、Twitterでの登場頻度は日本で最大級。VeryLongAnimals GENESISは2ETH近い単価での取引が行われている。\"},{\"name\":\"Roi Senshi\",\"number\":2,\"CO\":\"DeFi探検隊隊長\",\"site\":\"https://discord.gg/8ebubP4GKn\",\"twitter\":\"https://twitter.com/RoiSarak\",\"profile\":\"仮想通貨 #Avalanche のスペシャリスト。#Chainlink 公式Advocate🇸🇬, DeFi探検隊隊長\"},{\"name\":\"Yoshitaka Okayama\",\"number\":2,\"CO\":\"Polyogn/Fracton Ventures\",\"site\":\"https://polygon.technology \",\"twitter\":\"https://fracton.ventures/\",\"profile\":\"PolygonJapanコミュニティマネージャー。複数プロジェクトに従事しており、Polygon,Fracton,個人でそれぞれweb3プロジェクトを行う。\"}]');\n\n//# sourceURL=webpack://web32/./i81/profile_jp.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;