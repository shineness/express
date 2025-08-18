"use strict";
const common_vendor = require("../common/vendor.js");
const getCurrentPagesBut = () => {
  let isPrevPage = false;
  let pages = getCurrentPages();
  pages[pages.length - 1];
  let prevPage = pages[pages.length - 2];
  if (prevPage && (prevPage.route || prevPage.__route__)) {
    isPrevPage = true;
  }
  return isPrevPage;
};
const pagesRoute = () => {
  const isPrevPage = getCurrentPagesBut();
  if (isPrevPage) {
    common_vendor.index.navigateBack();
  } else {
    let url = "/pages/tabBar/home/index";
    let type = userStore().customNum;
    if (type == 1) {
      url = "/pages/tabBar/eventsManage/index";
    } else if (type == 2) {
      url = "/pages/tabBar/savingsAccount/index";
    } else if (type == 3) {
      url = "/pages/tabBar/bill/index";
    } else if (type == 4) {
      url = "/pages/tabBar/mine/index";
    }
    common_vendor.index.switchTab({
      url
    });
  }
};
const makePhoneCall = (e) => {
  debugger;
  common_vendor.index.makePhoneCall({
    phoneNumber: e || "18866211816",
    success: () => common_vendor.index.__f__("log", "at utils/index.js:41", "拨号成功"),
    fail: (err) => common_vendor.index.__f__("error", "at utils/index.js:42", "拨号失败:", err)
  });
};
function findValueByRange(inputNumber, rangeObj, str) {
  const num = parseFloat(inputNumber);
  const rangeKeys = Object.keys(rangeObj).filter((key) => key.startsWith(str) && key !== str + "base");
  rangeKeys.sort((a, b) => {
    const aMin = parseFloat(a.split("-")[0].replace(str, ""));
    const bMin = parseFloat(b.split("-")[0].replace(str, ""));
    return aMin - bMin;
  });
  for (const key of rangeKeys) {
    const [minStr, maxStr] = key.replace(str, "").split("-");
    const min = parseFloat(minStr);
    const max = parseFloat(maxStr);
    if (num > min && num <= max) {
      return rangeObj[key];
    }
  }
  return null;
}
exports.findValueByRange = findValueByRange;
exports.makePhoneCall = makePhoneCall;
exports.pagesRoute = pagesRoute;
//# sourceMappingURL=../../.sourcemap/mp-weixin/utils/index.js.map
