"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
const utils_index = require("../../../utils/index.js");
if (!Array) {
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  _easycom_uv_icon2();
}
const _easycom_uv_icon = () => "../../../uni_modules/uv-icon/components/uv-icon/uv-icon.js";
if (!Math) {
  _easycom_uv_icon();
}
const _sfc_main = {
  __name: "kf",
  setup(__props) {
    const clickS = (it) => {
      utils_index.makePhoneCall(it.value);
    };
    const arr = [
      { icon: "phone-fill", title: "服务热线", value: "18866274507", name: "樊经理" },
      { icon: "phone-fill", title: "监督电话", value: "18866211816", name: "任经理" }
    ];
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$1,
        b: common_vendor.f(arr, (item, index, i0) => {
          return {
            a: "3c8e4972-0-" + i0,
            b: common_vendor.p({
              color: "#2979ff",
              name: item.icon,
              size: "28"
            }),
            c: common_vendor.t(item.title),
            d: common_vendor.t(item.name),
            e: common_vendor.t(item.value),
            f: common_vendor.o(($event) => clickS(item))
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-3c8e4972"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/home/kf/kf.js.map
