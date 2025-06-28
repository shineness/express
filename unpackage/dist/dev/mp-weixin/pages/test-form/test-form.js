"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_forms_item2 + _easycom_uni_forms2)();
}
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_forms_item + _easycom_uni_forms)();
}
const _sfc_main = {
  __name: "test-form",
  setup(__props) {
    const formData = common_vendor.ref({
      testInput: ""
    });
    const rules = {
      testInput: {
        rules: [{
          required: true,
          errorMessage: "请输入内容"
        }]
      }
    };
    const formRef = common_vendor.ref(null);
    const submit = async () => {
      try {
        const validate = await formRef.value.validate();
        common_vendor.index.showToast({
          title: "表单验证通过",
          icon: "success"
        });
      } catch (err) {
        common_vendor.index.showToast({
          title: "请填写必填字段",
          icon: "none"
        });
      }
    };
    return (_ctx, _cache) => {
      return {
        a: formData.value.testInput,
        b: common_vendor.o(($event) => formData.value.testInput = $event.detail.value),
        c: common_vendor.p({
          label: "测试输入",
          name: "testInput"
        }),
        d: common_vendor.o(submit),
        e: common_vendor.sr(formRef, "374fa8a8-0", {
          "k": "formRef"
        }),
        f: common_vendor.p({
          modelValue: formData.value,
          rules
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/test-form/test-form.js.map
