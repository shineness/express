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
  __name: "csps",
  setup(__props) {
    const obj = [{
      title: "提供的服务",
      content: "涵盖商超配送（常温 / 冷链）、电商包裹同城速达、企业件定时配送（如文件、样品）、大件货物（家具、家电）上门配送，还可提供临时仓储、分拣打包、夜间配送等定制化服务，适配各类日用品、生鲜、工业小件等货物。​"
    }, {
      title: "合作客户案例",
      content: "为本地连锁超市（如某社区超市连锁品牌，每日配送生鲜及日用品至各门店）、电商平台（协助某区域电商完成市区内包裹当日达）、家电卖场（为某家电品牌提供市区及周边区县的家电配送安装）等提供服务。​"
    }, {
      title: "价格模式",
      content: "参考价按货物重量 / 体积、配送距离及时效要求计算，具体需详聊。包含基础配送费、上门取件费；不含货物保险费、特殊地点（如偏远小区、限行区域）附加费，大件货物如需搬运上楼另计费用。"
    }];
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(obj, (item, index, i0) => {
          return {
            a: common_vendor.t(item.content),
            b: "1151df14-1-" + i0 + ",1151df14-0",
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
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/home/csps/csps.js.map
