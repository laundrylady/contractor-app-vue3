import { B as defineComponent, u as useUserStore, r as ref, J as useRouter, o as onMounted, m as openBlock, K as createBlock, L as withCtx, l as createVNode, S as unref, Q as QCard, M as QCardSection, q as createBaseVNode, R as QBtn, n as createElementBlock, z as createCommentVNode, N as QInput, ab as QCardActions } from "./index.da11e37d.js";
import { Q as QSpace } from "./QSpace.ec8ed38e.js";
import { Q as QPage } from "./QPage.97baaa4b.js";
import { Q as QLayout, a as QPageContainer } from "./QLayout.b8830848.js";
import { a as api } from "./axios.cc162f2e.js";
import { _ as _sfc_main$1 } from "./AppLogo.1777c1d4.js";
import { u as useMixinDebug } from "./debug.972d445d.js";
import "./QResizeObserver.f84d078a.js";
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h4", { class: "text-h5 q-mt-none q-mb-none" }, "Account Protection", -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", null, "Enter the security code that was sent via SMS.", -1);
const _hoisted_3 = { class: "q-mb-md" };
const _hoisted_4 = { key: 0 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TfaSms",
  setup(__props) {
    const userStore = useUserStore();
    const sentSms = ref(false);
    const smsCode = ref();
    const error = ref(false);
    const loading = ref(false);
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
        loading.value = true;
        api.post("/auth/tfa/sms/check", { code: smsCode.value }).then((response) => {
          userStore.setUserData(response.data);
          router.push({ name: "appDashboard" });
        }).catch(() => {
          error.value = true;
          loading.value = false;
          useMixinDebug(error);
        });
      }
    };
    onMounted(() => {
      sendSms();
    });
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
                          _hoisted_2
                        ]),
                        _: 1
                      }),
                      createVNode(QCardSection, null, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_3, [
                            createVNode(QBtn, {
                              onClick: sendSms,
                              label: sentSms.value ? "Resend security code" : "Send security code",
                              disable: sending.value,
                              color: "primary",
                              rounded: ""
                            }, null, 8, ["label", "disable"])
                          ]),
                          error.value ? (openBlock(), createElementBlock("p", _hoisted_4, " There was an error verifying the security code. Please try again. ")) : createCommentVNode("", true),
                          createVNode(QInput, {
                            modelValue: smsCode.value,
                            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => smsCode.value = $event),
                            label: "Enter the security code",
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
