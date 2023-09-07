import { A as defineComponent, u as useUserStore, r as ref, I as useRouter, o as onMounted, l as openBlock, J as createBlock, K as withCtx, k as createVNode, R as unref, Q as QCard, L as QCardSection, m as createElementBlock, y as createCommentVNode, M as QInput, P as QBtn, aa as QCardActions, p as createBaseVNode } from "./index.0a73f961.js";
import { Q as QSpace } from "./QSpace.b8c9fdeb.js";
import { Q as QPage } from "./QPage.e0ac27ef.js";
import { Q as QLayout, a as QPageContainer } from "./QLayout.ce3c1efc.js";
import { a as api } from "./axios.753e2493.js";
import { _ as _sfc_main$1 } from "./AppLogo.a52ef008.js";
import { u as useMixinDebug } from "./debug.ffa51329.js";
import "./QResizeObserver.9e3533fe.js";
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h4", { class: "text-h5 q-mt-none q-mb-none" }, "Account Protection", -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", null, "Enter the security code that was sent to via SMS.", -1);
const _hoisted_3 = { key: 0 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TfaSms",
  setup(__props) {
    const userStore = useUserStore();
    const sentSms = ref(false);
    const smsCode = ref();
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
        api.post("/auth/tfa/sms/check", { code: smsCode.value }).then((response) => {
          userStore.setUserData(response.data);
          router.push({ name: "appDashboard" });
        }).catch((error2) => {
          error2.value = true;
          useMixinDebug(error2);
        });
      }
    };
    onMounted(() => {
      sendSms();
    });
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
                          _hoisted_2
                        ]),
                        _: 1
                      }),
                      createVNode(QCardSection, null, {
                        default: withCtx(() => [
                          error.value ? (openBlock(), createElementBlock("div", _hoisted_3, " There was an error verifying the security code sent. Please try again.")) : createCommentVNode("", true),
                          createVNode(QInput, {
                            modelValue: smsCode.value,
                            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => smsCode.value = $event),
                            label: "Enter the security code",
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
                            onClick: _cache[1] || (_cache[1] = ($event) => checkSms()),
                            label: "Continue",
                            color: "primary",
                            rounded: ""
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
