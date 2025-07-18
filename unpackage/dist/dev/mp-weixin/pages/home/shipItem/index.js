"use strict";
const common_vendor = require("../../../common/vendor.js");
const utils_index = require("../../../utils/index.js");
if (!Array) {
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _easycom_uv_navbar2 = common_vendor.resolveComponent("uv-navbar");
  const _easycom_uv_checkbox2 = common_vendor.resolveComponent("uv-checkbox");
  const _easycom_uv_checkbox_group2 = common_vendor.resolveComponent("uv-checkbox-group");
  (_easycom_uv_icon2 + _easycom_uv_navbar2 + _easycom_uv_checkbox2 + _easycom_uv_checkbox_group2)();
}
const _easycom_uv_icon = () => "../../../uni_modules/uv-icon/components/uv-icon/uv-icon.js";
const _easycom_uv_navbar = () => "../../../uni_modules/uv-navbar/components/uv-navbar/uv-navbar.js";
const _easycom_uv_checkbox = () => "../../../uni_modules/uv-checkbox/components/uv-checkbox/uv-checkbox.js";
const _easycom_uv_checkbox_group = () => "../../../uni_modules/uv-checkbox/components/uv-checkbox-group/uv-checkbox-group.js";
if (!Math) {
  (_easycom_uv_icon + _easycom_uv_navbar + _easycom_uv_checkbox + _easycom_uv_checkbox_group)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    common_vendor.ref("kye");
    const isAgreementChecked = common_vendor.ref(false);
    const current = common_vendor.ref(0);
    const checkboxList = common_vendor.ref([{
      name: ""
    }]);
    const selectPickupAddress = () => {
      common_vendor.index.navigateTo({
        url: "/pages/address/address?type=pickup"
      });
    };
    const selectDeliveryAddress = () => {
      common_vendor.index.navigateTo({
        url: "/pages/address/address?type=delivery"
      });
    };
    const editProductInfo = () => {
      common_vendor.index.navigateTo({
        url: "/pages/product/product"
      });
    };
    const selectLogistics = (company) => {
      current.value = company;
    };
    const viewDeliveryOptions = () => {
      common_vendor.index.navigateTo({
        url: "/pages/delivery/delivery"
      });
    };
    const toggleAgreement = () => {
      isAgreementChecked.value = !isAgreementChecked.value;
    };
    const viewAgreement = () => {
      common_vendor.index.navigateTo({
        url: "/pages/agreement/agreement"
      });
    };
    const handleBooking = () => {
      if (!isAgreementChecked.value) {
        common_vendor.index.showToast({
          title: "请先同意服务协议",
          icon: "none"
        });
        return;
      }
      common_vendor.index.showLoading({
        title: "预约中..."
      });
      setTimeout(() => {
        common_vendor.index.hideLoading();
        common_vendor.index.showToast({
          title: "预约成功",
          icon: "success"
        });
      }, 2e3);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          name: "arrow-left",
          size: "20"
        }),
        b: common_vendor.o(common_vendor.unref(utils_index.pagesRoute)),
        c: common_vendor.p({
          placeholder: true,
          bgColor: "transparent",
          title: "寄件"
        }),
        d: common_vendor.o(selectPickupAddress),
        e: common_vendor.o(selectDeliveryAddress),
        f: common_vendor.o(editProductInfo),
        g: current.value == 0 ? 1 : "",
        h: common_vendor.o(($event) => selectLogistics(0)),
        i: current.value == 1 ? 1 : "",
        j: common_vendor.o(($event) => selectLogistics(1)),
        k: common_vendor.o(viewDeliveryOptions),
        l: common_vendor.f(checkboxList.value, (item, index, i0) => {
          return {
            a: common_vendor.o(viewAgreement, index),
            b: index,
            c: "a0502217-3-" + i0 + ",a0502217-2",
            d: common_vendor.p({
              label: item.name,
              name: item.name
            })
          };
        }),
        m: common_vendor.o(($event) => _ctx.checkboxValue = $event),
        n: common_vendor.p({
          modelValue: _ctx.checkboxValue
        }),
        o: common_vendor.o(toggleAgreement),
        p: common_vendor.p({
          name: "warning-fill",
          size: "18",
          color: "#d97706"
        }),
        q: common_vendor.o(handleBooking)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a0502217"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/home/shipItem/index.js.map
