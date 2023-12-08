import { B as defineComponent, r as ref, C as reactive, m as openBlock, K as createBlock, L as withCtx, l as createVNode, q as createBaseVNode, Q as QCard, M as QCardSection, I as Transition, n as createElementBlock, z as createCommentVNode, N as QInput, S as unref, R as QBtn } from "./index.d21e33cc.js";
import { Q as QPage } from "./QPage.6ff27846.js";
import { Q as QLayout, a as QPageContainer } from "./QLayout.d0e62484.js";
import { u as useVuelidate, r as required, e as email } from "./index.esm.0ad964e7.js";
import { a as api } from "./axios.1457e981.js";
import { u as useMixinDebug } from "./debug.972d445d.js";
import { _ as _sfc_main$1 } from "./AppLogo.7c941c45.js";
import "./QResizeObserver.4525703e.js";
const _hoisted_1 = { class: "col-xs-12 col-sm-6 col-md-4 col-xl-3" };
const _hoisted_2 = {
  class: "text-center q-mb-md",
  style: { "min-height": "150px" }
};
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h5 text-bold" }, "Password Reset", -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", null, "Enter your registered email address to start the process.", -1);
const _hoisted_5 = {
  key: 0,
  class: "text-positive q-mb-md"
};
const _hoisted_6 = { class: "text-left q-mt-lg" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PasswordResetRequest",
  setup(__props) {
    const loading = ref(false);
    const error = ref(false);
    const success = ref(false);
    const model = reactive({ email: void 0 });
    const rules = { email: { required, email } };
    const $v = useVuelidate(rules, model);
    const send = () => {
      if (model.email) {
        loading.value = true;
        api.post("/auth/password/reset/request?from=portal", model).then(() => {
          loading.value = false;
          error.value = false;
          success.value = true;
          model.email = void 0;
        }).catch((response) => {
          useMixinDebug(response);
          loading.value = false;
          error.value = true;
          success.value = false;
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
              createVNode(QPage, {
                class: "row justify-center items-center animated fadeIn",
                padding: ""
              }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_1, [
                    createBaseVNode("div", _hoisted_2, [
                      createVNode(_sfc_main$1)
                    ]),
                    createVNode(QCard, null, {
                      default: withCtx(() => [
                        createVNode(QCardSection, null, {
                          default: withCtx(() => [
                            _hoisted_3,
                            _hoisted_4
                          ]),
                          _: 1
                        }),
                        createVNode(QCardSection, null, {
                          default: withCtx(() => [
                            createVNode(Transition, {
                              "enter-active-class": "animated bounceIn",
                              "leave-active-class": "animated bounceOutTop",
                              appear: ""
                            }, {
                              default: withCtx(() => [
                                success.value || error.value ? (openBlock(), createElementBlock("div", _hoisted_5, " Please go to your email account and click the password reset link we've sent for your account. It could take a few minutes to appear, and be sure to check any spam or promotional folders - just in case! ")) : createCommentVNode("", true)
                              ]),
                              _: 1
                            }),
                            createVNode(QInput, {
                              modelValue: model.email,
                              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => model.email = $event),
                              error: unref($v).email.$error,
                              label: "Enter your registered email address",
                              autofocus: "",
                              "aria-label": "Enter your email address",
                              outlined: ""
                            }, null, 8, ["modelValue", "error"]),
                            createVNode(QBtn, {
                              onClick: _cache[1] || (_cache[1] = ($event) => send()),
                              disabled: loading.value || unref($v).$invalid,
                              loading: loading.value,
                              color: "primary",
                              rounded: "",
                              label: "Send",
                              "aria-label": "Send reset password email",
                              class: "full-width"
                            }, null, 8, ["disabled", "loading"]),
                            createBaseVNode("div", _hoisted_6, [
                              createVNode(QBtn, {
                                to: { name: "signIn" },
                                class: "link",
                                "aria-label": "Go back to Sign In",
                                label: "Back to Sign In",
                                flat: "",
                                "no-caps": "",
                                color: "primary",
                                rounded: ""
                              })
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              })
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
