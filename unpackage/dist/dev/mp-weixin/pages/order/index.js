"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uv_empty2 = common_vendor.resolveComponent("uv-empty");
  _easycom_uv_empty2();
}
const _easycom_uv_empty = () => "../../uni_modules/uv-empty/components/uv-empty/uv-empty.js";
if (!Math) {
  _easycom_uv_empty();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const botHeight = common_vendor.computed(() => {
      return 50 + common_vendor.index.getSystemInfoSync().safeAreaInsets.bottom - 24 + "px";
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          mode: "order"
        }),
        b: common_vendor.s(`height:calc(100vh - ${botHeight.value});`)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-17a44f9d"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/order/index.js.map
