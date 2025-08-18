"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_uv_collapse_item2 = common_vendor.resolveComponent("uv-collapse-item");
  const _easycom_uv_collapse2 = common_vendor.resolveComponent("uv-collapse");
  (_easycom_uv_collapse_item2 + _easycom_uv_collapse2)();
}
const _easycom_uv_collapse_item = () => "../../../uni_modules/uv-collapse/components/uv-collapse-item/uv-collapse-item.js";
const _easycom_uv_collapse = () => "../../../uni_modules/uv-collapse/components/uv-collapse/uv-collapse.js";
if (!Math) {
  (_easycom_uv_collapse_item + _easycom_uv_collapse)();
}
const _sfc_main = {
  __name: "ccgyl",
  setup(__props) {
    const obj = [{
      title: "提供的服务",
      content: "涵盖青岛区域内的仓储管理（含货物存储、出入库登记、库存监控）、入库处理（接收货物、检验、上架）、出库配送（对接货拉拉、中通冷链等物流渠道，将货物送达指定地点），还可根据客户需求提供货物分拣、打包、贴标等增值服务，适配日用品、生鲜、电子产品等多种类型货物。​"
    }, {
      title: "合作客户案例",
      content: "服务过本地日用品经销商（为其提供货物存储及按订单出库配送服务）、生鲜电商（协助存储生鲜产品并通过中通冷链完成区域内配送）、小型电子企业（负责货物仓储、入库检验及通过货拉拉发往各分销商）等。"
    }, {
      title: "价格模式",
      content: "部分费用公开透明，仓储费用 3.6 元 / 托 / 天，入库费用 4.5 元 / 件，货拉拉出库费用 3 元 / 件，中通冷链出库费用 1 元 / 件。其他可能产生的费用（如分拣打包费、特殊货物处理费等）及整体合作价格，具体可详聊。"
    }];
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(obj, (item, index, i0) => {
          return {
            a: common_vendor.t(item.content),
            b: "40f25f20-1-" + i0 + ",40f25f20-0",
            c: common_vendor.p({
              title: item.title,
              name: index
            })
          };
        }),
        b: common_vendor.p({
          value: [0, 1, 2]
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/home/ccgyl/ccgyl.js.map
