import { A as defineComponent, u as useUserStore, r as ref, I as useRouter, l as openBlock, J as createBlock, K as withCtx, k as createVNode, R as unref, Q as QCard, L as QCardSection, m as createElementBlock, y as createCommentVNode, M as QInput, P as QBtn, aa as QCardActions, p as createBaseVNode } from "./index.ff28a0be.js";
import { Q as QSpace } from "./QSpace.c718e854.js";
import { Q as QPage } from "./QPage.38db1f22.js";
import { Q as QLayout, a as QPageContainer } from "./QLayout.e6db733c.js";
import { a as api } from "./axios.31973f2c.js";
import { _ as _sfc_main$1 } from "./AppLogo.0413fc64.js";
import { u as useMixinDebug } from "./debug.805a8aef.js";
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h4", { class: "text-h4 q-mt-none q-mb-sm" }, "Protect your account", -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("p", null, "Add an extra layer of security to your Laundry Lady account.", -1);
const _hoisted_3 = { key: 0 };
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
        api.post("/auth/tfa/sms/check", { code: smsCode.value, tfa_email: tfaEmail.value, mobile: userStore.data.mobile }).then((response) => {
          userStore.setUserData(response.data);
          router.push({ name: "appDashboard" });
        }).catch((error2) => {
          error2.value = true;
          useMixinDebug(error2);
        });
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QLayout, { view: "lHh Lpr lFf" }, {
        default: withCtx(() => [
          createVNode(QPageContainer, null, {
            default: withCtx(() => [
              unref(userStore) && unref(userStore).data ? (openBlock(), createBlock(QPage, {
                key: 0,
                class: "row justify-center items-center animated fadeIn q-pa-md"
              }, {
                default: withCtx(() => [
                  createVNode(QCard, { class: "col-xs-12 col-sm-6 col-md-4" }, {
                    default: withCtx(() => [
                      createVNode(QCardSection, {
                        class: "row",
                        style: { "min-height": "92px" }
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$1)
                        ]),
                        _: 1
                      }),
                      createVNode(QCardSection, null, {
                        default: withCtx(() => [
                          _hoisted_1,
                          _hoisted_2
                        ]),
                        _: 1
                      }),
                      createVNode(QCardSection, null, {
                        default: withCtx(() => [
                          error.value ? (openBlock(), createElementBlock("div", _hoisted_3, " There was an error verifying the security code sent. Please try again.")) : createCommentVNode("", true),
                          createVNode(QInput, {
                            modelValue: tfaEmail.value,
                            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => tfaEmail.value = $event),
                            label: "Enter an alternate email address for reseting your security protection",
                            error: !tfaEmail.value || tfaEmail.value === unref(userStore).data.email,
                            outlined: ""
                          }, null, 8, ["modelValue", "error"]),
                          createVNode(QInput, {
                            modelValue: smsCode.value,
                            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => smsCode.value = $event),
                            label: "Enter your security code",
                            hint: "Click the button to receive your code",
                            error: sentSms.value && !smsCode.value,
                            outlined: "",
                            "bottom-slots": ""
                          }, {
                            append: withCtx(() => [
                              createVNode(QBtn, {
                                onClick: sendSms,
                                label: sentSms.value ? "Resend code" : "Send code",
                                disable: sending.value
                              }, null, 8, ["label", "disable"])
                            ]),
                            _: 1
                          }, 8, ["modelValue", "error"])
                        ]),
                        _: 1
                      }),
                      createVNode(QCardActions, null, {
                        default: withCtx(() => [
                          createVNode(QSpace),
                          sentSms.value && smsCode.value ? (openBlock(), createBlock(QBtn, {
                            key: 0,
                            onClick: _cache[2] || (_cache[2] = ($event) => checkSms()),
                            label: "Continue",
                            color: "primary"
                          })) : createCommentVNode("", true)
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