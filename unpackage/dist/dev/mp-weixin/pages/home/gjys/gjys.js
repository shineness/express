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
  __name: "gjys",
  setup(__props) {
    const obj = [{
      title: "提供的服务",
      content: "涵盖整箱（FCL）、拼箱（LCL）运输，包括订舱、报关报检、拖车（门到港 / 港到门）、仓储、集装箱租赁、海运保险代办等全流程服务，适配普货、危险品、超大件等各类货物。​​"
    }, {
      title: "合作客户案例",
      content: "服务过电子配件出口商（如为某手机零部件企业提供东南亚专线海运）、家具制造商（协助某实木家具品牌将货物发往欧洲）、化工企业（为某涂料公司办理危险品海运至中东）等。​"
    }, {
      title: "价格模式",
      content: "参考价按货物重量 / 体积及目的港计算，具体需详聊。包含基本海运费、起运港本地费（如订舱费、报关费）；不含目的港杂费、关税、保险费等，特殊货物（危险品、超大件）需另计附加费。"
    }];
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(obj, (item, index, i0) => {
          return {
            a: common_vendor.t(item.content),
            b: "57a20e9a-1-" + i0 + ",57a20e9a-0",
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
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/home/gjys/gjys.js.map
