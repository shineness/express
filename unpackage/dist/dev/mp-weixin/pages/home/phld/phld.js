"use strict";
const common_vendor = require("../../../common/vendor.js");
const data = require("../../../data.js");
const utils_index = require("../../../utils/index.js");
if (!Array) {
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uv_button2 = common_vendor.resolveComponent("uv-button");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_forms_item2 + _easycom_uni_icons2 + _easycom_uv_button2 + _easycom_uni_forms2)();
}
const _easycom_uni_forms_item = () => "../../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uv_button = () => "../../../uni_modules/uv-button/components/uv-button/uv-button.js";
const _easycom_uni_forms = () => "../../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_forms_item + _easycom_uni_icons + _easycom_uv_button + _easycom_uni_forms)();
}
const _sfc_main = {
  __name: "phld",
  setup(__props) {
    const mainBtn = {
      borderRadius: "40rpx",
      padding: "20rpx 50rpx",
      width: "300rpx"
    };
    common_vendor.ref([]);
    const short = (str) => {
      return str.slice(0, -1);
    };
    const initform = {
      senderAddress: "青岛市",
      recipientAddress: "",
      packageWeight: "",
      tiji: "",
      type: "cg",
      list: [{
        c: "",
        k: "",
        g: "",
        num: 1
      }],
      tji: "",
      courier: ""
    };
    const type = common_vendor.ref();
    const form = common_vendor.ref({
      senderAddress: "青岛市",
      recipientAddress: "",
      packageWeight: "",
      tiji: "",
      type: "cg",
      list: [{
        c: "",
        k: "",
        g: "",
        num: 1
      }],
      tji: "",
      courier: ""
    });
    common_vendor.watch(
      () => form.value.list,
      (newList, oldList) => {
        common_vendor.index.__f__("log", "at pages/home/phld/phld.vue:164", "list 发生变化:", newList);
        const a = newList.reduce((sum, item) => {
          const c = parseFloat(item.c) || 0;
          const k = parseFloat(item.k) || 0;
          const g = parseFloat(item.g) || 0;
          const num = parseFloat(item.num) || 0;
          return sum + c * k * g * num;
        }, 0) / 1e6;
        common_vendor.index.__f__("log", "at pages/home/phld/phld.vue:173", form);
        form.value.tiji = a;
      },
      {
        deep: true
      }
    );
    const reset = () => {
      common_vendor.index.__f__("log", "at pages/home/phld/phld.vue:182", initform);
      couriers.value = [];
      form.value = {
        senderAddress: "青岛市",
        recipientAddress: "",
        packageWeight: "",
        tiji: "",
        list: [{
          c: "",
          k: "",
          g: "",
          num: 1
        }],
        tji: "",
        courier: ""
      };
    };
    const rules = common_vendor.ref({
      recipientAddress: {
        rules: [{
          required: true,
          errorMessage: "请选择寄件地址"
        }]
      },
      packageWeight: {
        rules: [
          {
            required: true,
            errorMessage: "请输入物品重量"
          },
          {
            pattern: /^\d+(\.\d+)?$/,
            // 匹配整数或小数
            errorMessage: "重量必须为数字（整数或小数）"
          }
        ]
      },
      tiji: {
        rules: [
          {
            pattern: /^\d+(\.\d+)?$/,
            // 匹配整数或小数
            errorMessage: "体积必须为数字（整数或小数）"
          }
        ]
      }
    });
    const level1 = common_vendor.ref("");
    const level2 = common_vendor.ref("");
    common_vendor.ref({});
    common_vendor.ref({});
    common_vendor.ref({});
    const add = () => {
      form.value.list.push({
        c: "",
        k: "",
        g: "",
        num: 1
      });
    };
    const del = (index) => {
      form.value.list.splice(index, 1);
    };
    const haddleChange2 = (e) => {
      const l0 = e.detail.value[0];
      const l1 = e.detail.value[1];
      const l2 = e.detail.value[2];
      if (l0 == l1) {
        form.value.recipientAddress = l1 + "" + l2;
        level1.value = short(l1);
        level2.value = short(l2);
      } else {
        form.value.recipientAddress = l0 + "" + l1 + l2;
        level1.value = short(l0);
        level2.value = short(l1);
      }
    };
    const couriers = common_vendor.ref([]);
    common_vendor.computed(() => {
      common_vendor.index.__f__("log", "at pages/home/phld/phld.vue:288", form.value.tiji);
      const res = form.value.list.reduce((init, pre) => {
        if (pre) {
          const num = parseFloat(pre);
          return init + num;
        } else {
          return init + 0;
        }
      }, 0);
      return res;
    });
    common_vendor.onMounted(() => {
    });
    const getRes = (obj) => {
      let o = {};
      const maxW = Math.max(parseFloat(form.value.packageWeight), form.value.tiji * 200);
      const arr = ["cg", "drd", "crd"];
      arr.map((item) => {
        var _a, _b;
        if (obj[item + "_base"]) {
          const base = obj[item + "_base"];
          const p1 = utils_index.findValueByRange(maxW, obj, item + "_") * maxW;
          o[item] = (_a = Math.max(base, p1)) == null ? void 0 : _a.toFixed(2);
        } else {
          const baseP = item == "cg" ? "cg_2-3" : item == "crd" ? "crd_0-10" : "";
          const baseWeight = getMaxFromRangeString(baseP);
          if (maxW > baseWeight) {
            const xuzhong = utils_index.findValueByRange(maxW, obj, item + "_");
            if (xuzhong) {
              const a = Math.ceil(maxW - baseWeight) * xuzhong + obj[baseP];
              o[item] = a == null ? void 0 : a.toFixed(2);
            } else {
              o[item] = "无数据";
            }
          } else {
            o[item] = (_b = utils_index.findValueByRange(maxW, obj, item + "_")) == null ? void 0 : _b.toFixed(2);
          }
        }
      });
      common_vendor.index.__f__("log", "at pages/home/phld/phld.vue:336", o, 1111);
      return o;
    };
    const formRef = common_vendor.ref(null);
    const submitForm = async () => {
      const res = await formRef.value.validate();
      debugger;
      const obj = data.data.filter((item) => {
        const a = getCityFromAddress(res.recipientAddress);
        return a.indexOf(item.toC) >= 0;
      });
      if (obj) {
        const resO = getRes(obj[0]);
        couriers.value = [
          {
            name: "陆运货物",
            icon: "map-pin-ellipse",
            value: resO.cg
          },
          {
            name: "空运当日达",
            icon: "paperplane",
            value: resO.drd
          },
          {
            name: "空运次日达",
            icon: "paperplane-filled",
            value: resO.crd
          }
        ];
      }
    };
    common_vendor.onLoad((param) => {
      type.value = param.type;
      common_vendor.index.__f__("log", "at pages/home/phld/phld.vue:399", data.data);
    });
    function getCityFromAddress(address) {
      const municipalities = ["北京", "上海", "天津", "重庆"];
      const provinceCityMatch = address.match(/省(.+?)市/);
      if (provinceCityMatch) {
        return provinceCityMatch[1];
      }
      for (const city of municipalities) {
        if (address.startsWith(city)) {
          const districtMatch = address.match(new RegExp(`${city}(.+?)区`));
          if (districtMatch) {
            return city;
          }
          return city;
        }
      }
      const cityMatch = address.match(/(.+?)市/);
      if (cityMatch) {
        return cityMatch[1];
      }
      return address || null;
    }
    function getMaxFromRangeString(str) {
      const numbers = str.match(/\d+/g);
      if (numbers && numbers.length >= 2) {
        return Math.max(parseInt(numbers[0]), parseInt(numbers[1]));
      }
      return null;
    }
    return (_ctx, _cache) => {
      return {
        a: form.value.senderAddress,
        b: common_vendor.o(($event) => form.value.senderAddress = $event.detail.value),
        c: common_vendor.p({
          label: "寄件地址:",
          name: "senderAddress"
        }),
        d: form.value.recipientAddress,
        e: common_vendor.o(($event) => form.value.recipientAddress = $event.detail.value),
        f: form.value.recipientAddress,
        g: common_vendor.o(haddleChange2),
        h: common_vendor.p({
          label: "收件地址:",
          name: "recipientAddress"
        }),
        i: form.value.packageWeight,
        j: common_vendor.o(($event) => form.value.packageWeight = $event.detail.value),
        k: common_vendor.p({
          label: "物品重量(kg):",
          name: "packageWeight"
        }),
        l: form.value.tiji,
        m: common_vendor.o(($event) => form.value.tiji = $event.detail.value),
        n: common_vendor.p({
          label: "物品体积(m³):  " + form.value.tiji,
          name: "tiji"
        }),
        o: common_vendor.f(form.value.list, (item, index, i0) => {
          return common_vendor.e({
            a: form.value.list[index].c,
            b: common_vendor.o(common_vendor.m(($event) => form.value.list[index].c = $event.detail.value, {
              number: true
            }), index),
            c: "1de9f30c-6-" + i0 + ",1de9f30c-5",
            d: form.value.list[index].k,
            e: common_vendor.o(common_vendor.m(($event) => form.value.list[index].k = $event.detail.value, {
              number: true
            }), index),
            f: "1de9f30c-7-" + i0 + ",1de9f30c-5",
            g: form.value.list[index].g,
            h: common_vendor.o(common_vendor.m(($event) => form.value.list[index].g = $event.detail.value, {
              number: true
            }), index),
            i: "1de9f30c-8-" + i0 + ",1de9f30c-5",
            j: form.value.list[index].num,
            k: common_vendor.o(common_vendor.m(($event) => form.value.list[index].num = $event.detail.value, {
              number: true
            }), index),
            l: "1de9f30c-9-" + i0 + ",1de9f30c-5",
            m: index > 0
          }, index > 0 ? {
            n: "1de9f30c-10-" + i0 + ",1de9f30c-5",
            o: common_vendor.p({
              type: "clear",
              color: "red",
              size: "20"
            }),
            p: common_vendor.o(($event) => del(index), index)
          } : {}, {
            q: index
          });
        }),
        p: common_vendor.p({
          name: "c"
        }),
        q: common_vendor.p({
          name: "k"
        }),
        r: common_vendor.p({
          name: "g"
        }),
        s: common_vendor.p({
          name: "num"
        }),
        t: common_vendor.o(add),
        v: common_vendor.p({
          type: "info"
        }),
        w: common_vendor.p({
          label: "尺寸 "
        }),
        x: common_vendor.o(submitForm),
        y: common_vendor.p({
          customStyle: mainBtn,
          type: "primary"
        }),
        z: common_vendor.o(reset),
        A: common_vendor.p({
          customStyle: mainBtn
        }),
        B: common_vendor.sr(formRef, "1de9f30c-0", {
          "k": "formRef"
        }),
        C: common_vendor.p({
          modelValue: form.value,
          rules: rules.value,
          ["label-width"]: "100px"
        }),
        D: common_vendor.f(couriers.value, (item, index, i0) => {
          return common_vendor.e({
            a: common_vendor.t(item.name),
            b: "1de9f30c-14-" + i0,
            c: common_vendor.p({
              type: item.icon,
              size: "30"
            }),
            d: common_vendor.t(item.value),
            e: item.sx
          }, item.sx ? {
            f: common_vendor.t(item.sx)
          } : {}, {
            g: index
          });
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/home/phld/phld.js.map
