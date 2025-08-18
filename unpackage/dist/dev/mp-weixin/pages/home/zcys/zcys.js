"use strict";
const common_vendor = require("../../../common/vendor.js");
const utils_index = require("../../../utils/index.js");
if (!Array) {
  const _easycom_uni_th2 = common_vendor.resolveComponent("uni-th");
  const _easycom_uni_tr2 = common_vendor.resolveComponent("uni-tr");
  const _easycom_uni_td2 = common_vendor.resolveComponent("uni-td");
  const _easycom_uni_table2 = common_vendor.resolveComponent("uni-table");
  (_easycom_uni_th2 + _easycom_uni_tr2 + _easycom_uni_td2 + _easycom_uni_table2)();
}
const _easycom_uni_th = () => "../../../uni_modules/uni-table/components/uni-th/uni-th.js";
const _easycom_uni_tr = () => "../../../uni_modules/uni-table/components/uni-tr/uni-tr.js";
const _easycom_uni_td = () => "../../../uni_modules/uni-table/components/uni-td/uni-td.js";
const _easycom_uni_table = () => "../../../uni_modules/uni-table/components/uni-table/uni-table.js";
if (!Math) {
  (_easycom_uni_th + _easycom_uni_tr + _easycom_uni_td + _easycom_uni_table)();
}
const _sfc_main = {
  __name: "zcys",
  setup(__props) {
    const parsePrice = (priceStr) => {
      return parseFloat(priceStr) || 0;
    };
    const normalTempData = common_vendor.ref([
      { type: "依维柯", style: "厢车", dimension: "2.4*1.7*1.5", weight: "1吨", price: "4.5元/公里" },
      { type: "4米2", style: "平板/高栏/厢车", dimension: "3.8*1.8*1.8", weight: "1.5吨", price: "5.5元/公里" },
      { type: "6米8", style: "平板/高栏/厢车", dimension: "6.4*2.2*2.5", weight: "6吨", price: "7.5元/公里" },
      { type: "9米6", style: "平板/高栏/厢车", dimension: "9.0*2.2*2.5", weight: "10吨", price: "8.5元/公里" },
      { type: "13米", style: "高栏", dimension: "12.5*2.3*2.5", weight: "18吨", price: "9.5元/公里" },
      { type: "13米75", style: "高低板", dimension: "13.5*2.8*2.5", weight: "25吨", price: "11元/公里" },
      { type: "17米5", style: "高低板", dimension: "17.5*2.8*2.5", weight: "25吨", price: "12元/公里" },
      { type: "气垫车", style: "厢车、飞翼、平板", dimension: "具体咨询客服", weight: "具体咨询客服", price: "具体咨询客服" }
    ]);
    const coldStorageData = common_vendor.ref([
      { type: "4米2", style: "厢车", dimension: "3.8*1.8*1.8", weight: "1.5吨", price: "6元/公里" },
      { type: "6米8", style: "厢车", dimension: "6.4*2.2*2.5", weight: "6吨", price: "8元/公里" },
      { type: "9米6", style: "厢车", dimension: "9.0*2.2*2.5", weight: "10吨", price: "9元/公里" },
      { type: "12米5", style: "厢车", dimension: "12*2.2*2.5", weight: "18吨", price: "11元/公里" },
      { type: "15米", style: "厢车", dimension: "14.5*2.2*2.5", weight: "25吨", price: "13元/公里" }
    ]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          width: "100",
          align: "center"
        }),
        b: common_vendor.p({
          width: "120",
          align: "center"
        }),
        c: common_vendor.p({
          width: "140",
          align: "center"
        }),
        d: common_vendor.p({
          width: "120",
          align: "center"
        }),
        e: common_vendor.p({
          width: "140",
          align: "center"
        }),
        f: common_vendor.f(normalTempData.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.type),
            b: "35d28904-8-" + i0 + "," + ("35d28904-7-" + i0),
            c: common_vendor.t(item.price),
            d: parsePrice(item.price) > 10 ? 1 : "",
            e: "35d28904-9-" + i0 + "," + ("35d28904-7-" + i0),
            f: common_vendor.t(item.style),
            g: "35d28904-10-" + i0 + "," + ("35d28904-7-" + i0),
            h: common_vendor.t(item.dimension),
            i: "35d28904-11-" + i0 + "," + ("35d28904-7-" + i0),
            j: common_vendor.t(item.weight),
            k: "35d28904-12-" + i0 + "," + ("35d28904-7-" + i0),
            l: index,
            m: "35d28904-7-" + i0 + ",35d28904-0"
          };
        }),
        g: common_vendor.p({
          align: "center"
        }),
        h: common_vendor.p({
          align: "center"
        }),
        i: common_vendor.p({
          align: "center"
        }),
        j: common_vendor.p({
          align: "center"
        }),
        k: common_vendor.p({
          align: "center"
        }),
        l: common_vendor.p({
          border: true,
          stripe: true,
          emptyText: "暂无数据"
        }),
        m: common_vendor.p({
          width: "100",
          align: "center"
        }),
        n: common_vendor.p({
          width: "120",
          align: "center"
        }),
        o: common_vendor.p({
          width: "100",
          align: "center"
        }),
        p: common_vendor.p({
          width: "120",
          align: "center"
        }),
        q: common_vendor.p({
          width: "100",
          align: "center"
        }),
        r: common_vendor.f(coldStorageData.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.type),
            b: "35d28904-21-" + i0 + "," + ("35d28904-20-" + i0),
            c: common_vendor.t(item.price),
            d: parsePrice(item.price) > 10 ? 1 : "",
            e: "35d28904-22-" + i0 + "," + ("35d28904-20-" + i0),
            f: common_vendor.t(item.style),
            g: "35d28904-23-" + i0 + "," + ("35d28904-20-" + i0),
            h: common_vendor.t(item.dimension),
            i: "35d28904-24-" + i0 + "," + ("35d28904-20-" + i0),
            j: common_vendor.t(item.weight),
            k: "35d28904-25-" + i0 + "," + ("35d28904-20-" + i0),
            l: index,
            m: "35d28904-20-" + i0 + ",35d28904-13"
          };
        }),
        s: common_vendor.p({
          align: "center"
        }),
        t: common_vendor.p({
          align: "center"
        }),
        v: common_vendor.p({
          align: "center"
        }),
        w: common_vendor.p({
          align: "center"
        }),
        x: common_vendor.p({
          align: "center"
        }),
        y: common_vendor.p({
          border: true,
          stripe: true
        }),
        z: common_vendor.o(($event) => common_vendor.unref(utils_index.makePhoneCall)())
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-35d28904"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/home/zcys/zcys.js.map
