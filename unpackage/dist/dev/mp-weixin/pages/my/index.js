"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uv_avatar2 = common_vendor.resolveComponent("uv-avatar");
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _component_uv_card = common_vendor.resolveComponent("uv-card");
  const _easycom_uv_button2 = common_vendor.resolveComponent("uv-button");
  const _easycom_uv_cell2 = common_vendor.resolveComponent("uv-cell");
  const _easycom_uv_cell_group2 = common_vendor.resolveComponent("uv-cell-group");
  const _easycom_uv_toast2 = common_vendor.resolveComponent("uv-toast");
  (_easycom_uv_avatar2 + _easycom_uv_icon2 + _component_uv_card + _easycom_uv_button2 + _easycom_uv_cell2 + _easycom_uv_cell_group2 + _easycom_uv_toast2)();
}
const _easycom_uv_avatar = () => "../../uni_modules/uv-avatar/components/uv-avatar/uv-avatar.js";
const _easycom_uv_icon = () => "../../uni_modules/uv-icon/components/uv-icon/uv-icon.js";
const _easycom_uv_button = () => "../../uni_modules/uv-button/components/uv-button/uv-button.js";
const _easycom_uv_cell = () => "../../uni_modules/uv-cell/components/uv-cell/uv-cell.js";
const _easycom_uv_cell_group = () => "../../uni_modules/uv-cell/components/uv-cell-group/uv-cell-group.js";
const _easycom_uv_toast = () => "../../uni_modules/uv-toast/components/uv-toast/uv-toast.js";
if (!Math) {
  (_easycom_uv_avatar + _easycom_uv_icon + _easycom_uv_button + _easycom_uv_cell + _easycom_uv_cell_group + _easycom_uv_toast)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const statusBarHeight = common_vendor.ref(44);
    common_vendor.ref(2);
    const userInfo = common_vendor.ref({
      isLogin: false,
      nickname: "",
      avatar: "",
      userId: "2wwt8s"
    });
    const botHeight = common_vendor.computed(() => {
      return 50 + common_vendor.index.getSystemInfoSync().safeAreaInsets.bottom - 24 + "px";
    });
    const uToast = common_vendor.ref();
    common_vendor.onMounted(() => {
      common_vendor.index.getSystemInfo({
        success: (res) => {
          statusBarHeight.value = res.statusBarHeight || 44;
        }
      });
      checkLoginStatus();
    });
    const checkLoginStatus = () => {
      const loginInfo = common_vendor.index.getStorageSync("userInfo");
      if (loginInfo) {
        userInfo.value = {
          ...userInfo.value,
          ...loginInfo,
          isLogin: true
        };
      }
    };
    const handleLogin = () => {
      if (!userInfo.value.isLogin) {
        common_vendor.index.getUserProfile({
          desc: "用于完善用户资料",
          success: (res) => {
            var _a;
            userInfo.value = {
              ...userInfo.value,
              isLogin: true,
              nickname: res.userInfo.nickName,
              avatar: res.userInfo.avatarUrl
            };
            common_vendor.index.setStorageSync("userInfo", userInfo.value);
            (_a = uToast.value) == null ? void 0 : _a.show({
              type: "success",
              message: "登录成功"
            });
          },
          fail: () => {
            var _a;
            (_a = uToast.value) == null ? void 0 : _a.show({
              type: "error",
              message: "登录失败"
            });
          }
        });
      }
    };
    const handleCouponClick = () => {
      var _a;
      (_a = uToast.value) == null ? void 0 : _a.show({
        type: "primary",
        message: "跳转到优惠券页面"
      });
    };
    const handleSenderAddress = () => {
      var _a;
      (_a = uToast.value) == null ? void 0 : _a.show({
        type: "primary",
        message: "设置寄件地址"
      });
    };
    const handleReceiverAddress = () => {
      var _a;
      (_a = uToast.value) == null ? void 0 : _a.show({
        type: "primary",
        message: "设置收件地址"
      });
    };
    const handleHelpCenter = () => {
      var _a;
      (_a = uToast.value) == null ? void 0 : _a.show({
        type: "primary",
        message: "进入帮助中心"
      });
    };
    const handleContactService = () => {
      var _a;
      (_a = uToast.value) == null ? void 0 : _a.show({
        type: "primary",
        message: "联系客服"
      });
    };
    const handleShareApp = () => {
      common_vendor.index.share({
        provider: "weixin",
        scene: "WXSceneSession",
        type: 5,
        imageUrl: "/static/images/share-logo.png",
        title: "风火递物流小程序",
        miniProgram: {
          id: "your-mini-program-id",
          path: "/pages/index/index",
          type: 0,
          webUrl: "https://your-website.com"
        },
        success: () => {
          var _a;
          (_a = uToast.value) == null ? void 0 : _a.show({
            type: "success",
            message: "分享成功"
          });
        }
      });
    };
    return (_ctx, _cache) => {
      return {
        a: statusBarHeight.value + "px",
        b: common_vendor.p({
          src: userInfo.value.avatar || "/static/my/user-avatar.png",
          size: "60",
          shape: "circle"
        }),
        c: common_vendor.t(userInfo.value.isLogin ? userInfo.value.nickname : "点击登录获取头像"),
        d: common_vendor.t(userInfo.value.userId),
        e: common_vendor.o(handleLogin),
        f: common_vendor.p({
          name: "coupon",
          color: "#ff4444",
          size: "20"
        }),
        g: common_vendor.p({
          name: "arrow-right",
          color: "#999",
          size: "14"
        }),
        h: common_vendor.o(handleCouponClick),
        i: common_vendor.p({
          ["show-head"]: false,
          ["show-foot"]: false,
          margin: "15px",
          padding: "0",
          ["bg-color"]: "rgba(255, 240, 240, 0.8)",
          ["border-color"]: "#ffcccb"
        }),
        j: common_vendor.p({
          name: "map",
          color: "#353b48",
          size: "18"
        }),
        k: common_vendor.o(handleSenderAddress),
        l: common_vendor.p({
          plain: true,
          size: "large"
        }),
        m: common_vendor.p({
          name: "home",
          color: "#353b48",
          size: "18"
        }),
        n: common_vendor.o(handleReceiverAddress),
        o: common_vendor.p({
          plain: true,
          size: "large"
        }),
        p: common_vendor.p({
          name: "question-circle",
          color: "#666",
          size: "20"
        }),
        q: common_vendor.o(handleHelpCenter),
        r: common_vendor.p({
          title: "帮助中心",
          ["is-link"]: true,
          customStyle: _ctx.cus
        }),
        s: common_vendor.p({
          name: "kefu-ermai",
          color: "#666",
          size: "20"
        }),
        t: common_vendor.o(handleContactService),
        v: common_vendor.p({
          title: "联系客服",
          ["is-link"]: true,
          customStyle: _ctx.cus
        }),
        w: common_vendor.p({
          name: "share",
          color: "#666",
          size: "20"
        }),
        x: common_vendor.o(handleShareApp),
        y: common_vendor.p({
          title: "分享小程序",
          ["is-link"]: true,
          customStyle: _ctx.cus
        }),
        z: common_vendor.p({
          border: false
        }),
        A: common_vendor.sr(uToast, "f97bc692-15", {
          "k": "uToast"
        }),
        B: common_vendor.s(`height:calc(100vh - ${botHeight.value});`)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f97bc692"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/my/index.js.map
