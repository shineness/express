"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _easycom_uv_search2 = common_vendor.resolveComponent("uv-search");
  const _easycom_uv_notice_bar2 = common_vendor.resolveComponent("uv-notice-bar");
  (_easycom_uv_icon2 + _easycom_uv_search2 + _easycom_uv_notice_bar2)();
}
const _easycom_uv_icon = () => "../../uni_modules/uv-icon/components/uv-icon/uv-icon.js";
const _easycom_uv_search = () => "../../uni_modules/uv-search/components/uv-search/uv-search.js";
const _easycom_uv_notice_bar = () => "../../uni_modules/uv-notice-bar/components/uv-notice-bar/uv-notice-bar.js";
if (!Math) {
  (_easycom_uv_icon + _easycom_uv_search + _easycom_uv_notice_bar)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const searchValue = common_vendor.ref("");
    const text = common_vendor.ref("专注3kg以上寄大件/发物流,全国1-2小时上门取件,官方折扣渠道更优惠~");
    const businessModules = common_vendor.ref([
      {
        icon: "📦",
        title: "普货零担",
        description: "全国可发当日达、次日达",
        to: "/pages/home/phld/phld"
      },
      {
        icon: "❄️",
        title: "冷冻零担",
        description: "冷链发全国，可发冷链快递",
        to: "/pages/home/ldld/ldld"
      },
      {
        icon: "️🚛",
        title: "整车运输",
        description: "整车门到门，全额货物险",
        to: "/pages/home/zcys/zcys"
      },
      {
        icon: "🔁",
        title: "仓储供应链",
        description: "基础仓储、流通加工、系统对接、一件代发",
        to: "/pages/home/ccgyl/ccgyl"
      },
      {
        icon: "🚚",
        title: "城市配送",
        description: "常温配送、冷链配送、定制化交付",
        to: "/pages/home/csps/csps"
      },
      {
        icon: "🌍",
        title: "国际运输",
        description: "畅达全球，无缝连接",
        to: "/pages/home/gjys/gjys"
      },
      {
        icon: "📋",
        title: "物流解决方案",
        description: "快速送达身边",
        to: "/pages/home/wljjfa/wljjfa"
      },
      {
        icon: "💻",
        title: "联系我们",
        description: "服务有保障",
        to: "/pages/home/kf/kf"
      }
    ]);
    const handleSearchSubmit = () => {
      common_vendor.index.__f__("log", "at pages/home/index.vue:146", "搜索提交:", searchValue.value);
    };
    const handleSearchChange = () => {
    };
    const handleModuleClick = (module) => {
      common_vendor.index.navigateTo({
        url: module.to
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_vendor.p({
          name: "search",
          size: "24"
        }),
        c: common_vendor.o(handleSearchSubmit),
        d: common_vendor.o(handleSearchChange),
        e: common_vendor.o(($event) => searchValue.value = $event),
        f: common_vendor.p({
          placeholder: "请输入物流单号或扫码单号",
          ["show-action"]: false,
          ["bg-color"]: "white",
          shape: "round",
          height: "44",
          modelValue: searchValue.value
        }),
        g: common_vendor.p({
          text: text.value,
          fontSize: "12",
          speed: "60",
          color: "#5d5d5d"
        }),
        h: common_vendor.f(businessModules.value, (module, index, i0) => {
          return {
            a: common_vendor.t(module.icon),
            b: common_vendor.t(module.title),
            c: common_vendor.t(module.description),
            d: index,
            e: common_vendor.o(($event) => handleModuleClick(module), index)
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4978fed5"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/home/index.js.map
