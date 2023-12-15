import { B as defineComponent, u as useUserStore, r as ref, J as useRouter, m as openBlock, K as createBlock, L as withCtx, l as createVNode, S as unref, Q as QCard, M as QCardSection, n as createElementBlock, z as createCommentVNode, q as createBaseVNode, R as QBtn, N as QInput, ab as QCardActions, ak as createTextVNode } from "./index.97c2c6d1.js";
import { Q as QSpace } from "./QSpace.4526e1bd.js";
import { Q as QPage } from "./QPage.932c9378.js";
import { Q as QLayout, a as QPageContainer } from "./QLayout.37c1a0fc.js";
import { a as api } from "./axios.8cf8e3fb.js";
import { _ as _sfc_main$1 } from "./AppLogo.7dffc3f6.js";
import { u as useMixinDebug } from "./debug.972d445d.js";
import "./QResizeObserver.564f3c9b.js";
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h4", { class: "text-h5 q-mt-none q-mb-none" }, "Protect your account", -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("p", null, "Add an extra layer of security to your Laundry Lady account.", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", null, [
  /* @__PURE__ */ createTextVNode("Click "),
  /* @__PURE__ */ createBaseVNode("span", { class: "text-bold text-primary" }, "SEND CODE"),
  /* @__PURE__ */ createTextVNode(" below and we'll send you a verification code to your registered mobile phone number. ")
], -1);
const _hoisted_4 = { key: 0 };
const _hoisted_5 = { class: "q-mb-md" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TfaSetup",
  setup(__props) {
    const userStore = useUserStore();
    const sentSms = ref(false);
    const smsCode = ref();
    const tfaEmail = ref();
    const error = ref(false);
    const router = useRouter();
    const sending = ref(false);
    const loading = ref(false);
    const sendSms = () => {
      if (userStore.data) {
        sending.value = true;
        api.post("/auth/tfa/sms/send").then(() => {
          sentSms.value = true;
          sending.value = false;
        }).catch((error2) => {
          sending.value = false;
          useMixinDebug(error2);
        });
      }
    };
    const checkSms = () => {
      if (userStore.data) {
        error.value = false;
        loading.value = true;
        api.post("/auth/tfa/sms/check", { code: smsCode.value, tfa_email: tfaEmail.value, mobile: userStore.data.mobile }).then((response) => {
          userStore.setUserData(response.data);
          router.push({ name: "appDashboard" });
        }).catch((error2) => {
          loading.value = false;
          error2.value = true;
          useMixinDebug(error2);
        });
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QLayout, {
        view: "lHh Lpr lFf",
        class: "bg-page-background"
      }, {
        default: withCtx(() => [
          createVNode(QPageContainer, null, {
            default: withCtx(() => [
              unref(userStore) && unref(userStore).data ? (openBlock(), createBlock(QPage, {
                key: 0,
                class: "row justify-center items-center animated fadeIn q-pa-md"
              }, {
                default: withCtx(() => [
                  createVNode(QCard, { class: "col-xs-12 col-sm-6 col-md-4 col-xl-3" }, {
                    default: withCtx(() => [
                      createVNode(QCardSection, {
                        class: "text-center",
                        style: { "min-height": "165px" }
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$1)
                        ]),
                        _: 1
                      }),
                      createVNode(QCardSection, null, {
                        default: withCtx(() => [
                          _hoisted_1,
                          _hoisted_2,
                          _hoisted_3
                        ]),
                        _: 1
                      }),
                      createVNode(QCardSection, null, {
                        default: withCtx(() => [
                          error.value ? (openBlock(), createElementBlock("div", _hoisted_4, " There was an error verifying the security code sent. Please try again.")) : createCommentVNode("", true),
                          createBaseVNode("div", _hoisted_5, [
                            createVNode(QBtn, {
                              onClick: sendSms,
                              label: sentSms.value ? "Resend security code" : "Send security code",
                              disable: sending.value,
                              color: sentSms.value ? "secondary" : "primary",
                              rounded: ""
                            }, null, 8, ["label", "disable", "color"])
                          ]),
                          createVNode(QInput, {
                            modelValue: smsCode.value,
                            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => smsCode.value = $event),
                            label: "Enter your security code",
                            hint: "Click the button to receive your code",
                            error: sentSms.value && !smsCode.value,
                            outlined: "",
                            "bottom-slots": ""
                          }, null, 8, ["modelValue", "error"])
                        ]),
                        _: 1
                      }),
                      createVNode(QCardActions, null, {
                        default: withCtx(() => [
                          createVNode(QSpace),
                          sentSms.value && smsCode.value ? (openBlock(), createBlock(QBtn, {
                            key: 0,
                            onClick: _cache[1] || (_cache[1] = ($event) => checkSms()),
                            label: "Continue",
                            color: "primary",
                            rounded: "",
                            disable: loading.value,
                            loading: loading.value
                          }, null, 8, ["disable", "loading"])) : createCommentVNode("", true)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
export { _sfc_main as default };
