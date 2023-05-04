import { A as defineComponent, r as ref, B as reactive, J as resolveComponent, m as openBlock, K as createBlock, L as withCtx, l as createVNode, Q as QCard, M as QCardSection, H as Transition, R as createTextVNode, y as createCommentVNode, N as QInput, U as unref, S as QBtn, q as createBaseVNode } from "./index.743d7681.js";
import { Q as QBanner } from "./QBanner.785fbf02.js";
import { Q as QPage } from "./QPage.fb804c54.js";
import { Q as QLayout, a as QPageContainer } from "./QLayout.5e6bb060.js";
import { u as useVuelidate, r as required, e as email } from "./index.esm.acb925a8.js";
import { a as api } from "./axios.67dbaacc.js";
import { u as useMixinDebug } from "./debug.805a8aef.js";
import { _ as _sfc_main$1 } from "./AppLogo.3618abe0.js";
import "./QResizeObserver.4be4ddb2.js";
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h3 text-bold" }, "Password Reset", -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6 sub" }, "Enter your registered email address to start the process.", -1);
const _hoisted_3 = { class: "text-left q-mt-lg" };
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
        api.post("/auth/password/reset/request?from=manager", model).then(() => {
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
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createBlock(QLayout, { view: "lHh Lpr lFf" }, {
        default: withCtx(() => [
          createVNode(QPageContainer, null, {
            default: withCtx(() => [
              createVNode(QPage, {
                class: "row justify-center items-center animated fadeIn",
                padding: ""
              }, {
                default: withCtx(() => [
                  createVNode(QCard, { class: "col-xs-12 col-sm-6 col-md-4 text-center" }, {
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
                          createVNode(Transition, {
                            "enter-active-class": "animated bounceIn",
                            "leave-active-class": "animated bounceOutTop",
                            appear: ""
                          }, {
                            default: withCtx(() => [
                              success.value || error.value ? (openBlock(), createBlock(QBanner, {
                                key: 0,
                                class: "text-positive q-mb-md"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Please go to your email account and click the password reset link we've sent for your account. It could take a few minutes to appear, and be sure to check any spam and promotional folders\u2014just in case! ")
                                ]),
                                _: 1
                              })) : createCommentVNode("", true)
                            ]),
                            _: 1
                          }),
                          createVNode(QInput, {
                            modelValue: model.email,
                            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => model.email = $event),
                            error: unref($v).email.$error,
                            label: "Enter your registered email address",
                            autofocus: "",
                            "aria-label": "Enter your email address"
                          }, null, 8, ["modelValue", "error"]),
                          createVNode(QBtn, {
                            onClick: _cache[1] || (_cache[1] = ($event) => send()),
                            disabled: loading.value || unref($v).$invalid,
                            loading: loading.value,
                            color: "secondary",
                            label: "Send",
                            "aria-label": "Send reset password email",
                            class: "full-width"
                          }, null, 8, ["disabled", "loading"]),
                          createBaseVNode("div", _hoisted_3, [
                            createVNode(_component_router_link, {
                              to: { name: "signIn" },
                              class: "link",
                              "aria-label": "Go back to Sign In"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Back to Sign In")
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
