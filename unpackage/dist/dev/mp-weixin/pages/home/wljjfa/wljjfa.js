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
  __name: "wljjfa",
  setup(__props) {
    const obj = [{
      title: "展会运输",
      hxfw: "提供定制木箱、上门打包、运输、布展及撤展全流程服务，适配精密仪器、易碎品等各类展品。",
      cj: "工业展、科技展、艺术品展等各类展会参展商。​",
      ys: "一站式 “门到展” 服务，专业包装降损，全程专人跟进省时省心。​​"
    }, {
      title: "宠物运输",
      hxfw: "协助办理检疫等手续，提供航空 / 公路运输，配备标准宠物箱及温控环境，长途专人照料。​",
      cj: "个人宠物迁移、宠物机构运输、赛事宠物转运。​​",
      ys: "全程监控宠物状态，注重安全与舒适，经验丰富让主人放心。​​"
    }, {
      title: "特种车辆运输​",
      hxfw: "针对大型工程机械、特种设备等，提供路线勘察、合规运输及加固保障，含超限许可办理。",
      cj: "工程建设、工厂搬迁、大型设备采购。​​",
      ys: "专业车辆与团队，精准把控运输细节，确保合法安全。​​"
    }, {
      title: "多式联运​",
      hxfw: "整合公路、铁路、航空、海运等方式，优化路线组合，全程跟踪及手续代办。​",
      cj: "长距离 / 大批量货物运输、跨境物流需求。​",
      ys: "降本增效，灵活适配需求，减少中间环节延误。​​"
    }, {
      title: "冷链快递​",
      hxfw: "为生鲜、医药等提供全程温控（0-10℃/-18℃等），配备冷藏设备及实时温度监控。​",
      cj: "生鲜电商、餐饮、医疗机构、医药企业。​",
      ys: "严控温度保品质，降低损耗，提供可靠冷链保障。"
    }];
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(obj, (item, index, i0) => {
          return {
            a: common_vendor.t(item.hxfw),
            b: common_vendor.t(item.cj),
            c: common_vendor.t(item.ys),
            d: "81d74128-1-" + i0 + ",81d74128-0",
            e: common_vendor.p({
              title: item.title,
              name: index
            })
          };
        }),
        b: common_vendor.p({
          value: [0]
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-81d74128"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/home/wljjfa/wljjfa.js.map
