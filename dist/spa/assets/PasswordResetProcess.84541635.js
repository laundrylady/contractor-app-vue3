import { A as defineComponent, r as ref, B as reactive, ad as useRoute, J as resolveComponent, m as openBlock, K as createBlock, L as withCtx, l as createVNode, Q as QCard, M as QCardSection, H as Transition, O as QIcon, S as QBtn, y as createCommentVNode, R as createTextVNode, n as createElementBlock, N as QInput, U as unref, ae as QCardActions, q as createBaseVNode } from "./index.3eea7960.js";
import { Q as QBanner } from "./QBanner.a573ab53.js";
import { Q as QSpace } from "./QSpace.958769c9.js";
import { Q as QPage } from "./QPage.ade328d2.js";
import { Q as QLayout, a as QPageContainer } from "./QLayout.0974a862.js";
import { u as useMixinDebug } from "./debug.805a8aef.js";
import { u as useVuelidate, r as required } from "./index.esm.3393c8fb.js";
import { a as api } from "./axios.a37557cf.js";
import { _ as _sfc_main$1 } from "./AppLogo.d194a44e.js";
import "./QResizeObserver.972c3e33.js";
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", { class: "text-h3 q-mt-none q-mb-none" }, "Password Reset", -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("p", null, "Your password has been updated!", -1);
const _hoisted_3 = { key: 0 };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("p", null, "Enter and confirm your new password below:", -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PasswordResetProcess",
  setup(__props) {
    const loading = ref(false);
    const error = ref(false);
    const success = ref(false);
    const pwdToggle = reactive({ pwc: true, pw: true });
    const route = useRoute();
    const model = reactive({
      code: route.params.code,
      password: void 0,
      passwordConfirm: void 0
    });
    const rules = {
      code: { required },
      password: { required },
      passwordConfirm: { required }
    };
    const $v = useVuelidate(rules, model);
    const passwordTest = () => {
      const pass = model.password ? model.password : void 0;
      const tests = [/[0-9]/, /[a-z]/, /[A-Z]/, /[^A-Z-0-9]/i];
      if (pass === void 0) {
        return -1;
      }
      let s = 0;
      if (pass.length < 6) {
        return 0;
      }
      for (const i in tests) {
        if (tests[i].test(pass)) {
          s += 1;
        }
      }
      return s;
    };
    const confirm = () => {
      loading.value = true;
      api.post("/auth/password/reset/process", model).then(() => {
        error.value = false;
        success.value = true;
        loading.value = false;
      }).catch((response) => {
        useMixinDebug(response);
        error.value = true;
        success.value = false;
        loading.value = false;
      });
    };
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createBlock(QLayout, { view: "lHh Lpr lFf" }, {
        default: withCtx(() => [
          createVNode(QPageContainer, null, {
            default: withCtx(() => [
              createVNode(QPage, { class: "row justify-center items-center animated fadeIn q-pa-md" }, {
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
                          _hoisted_1
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
                              success.value ? (openBlock(), createBlock(QBanner, {
                                key: 0,
                                class: "text-positive q-mb-md"
                              }, {
                                avatar: withCtx(() => [
                                  createVNode(QIcon, {
                                    name: "check",
                                    color: "white"
                                  })
                                ]),
                                default: withCtx(() => [
                                  _hoisted_2,
                                  createVNode(QBtn, {
                                    to: { name: "signIn" },
                                    color: "secondary",
                                    label: "Go To Sign In",
                                    class: "full-width"
                                  })
                                ]),
                                _: 1
                              })) : createCommentVNode("", true)
                            ]),
                            _: 1
                          }),
                          createVNode(Transition, {
                            "enter-active-class": "animated bounceIn",
                            "leave-active-class": "animated bounceOutTop",
                            appear: ""
                          }, {
                            default: withCtx(() => [
                              error.value ? (openBlock(), createBlock(QBanner, {
                                key: 0,
                                class: "bg-negative text-white"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Error reseting your password")
                                ]),
                                _: 1
                              })) : createCommentVNode("", true)
                            ]),
                            _: 1
                          }),
                          !success.value ? (openBlock(), createElementBlock("div", _hoisted_3, [
                            _hoisted_4,
                            createVNode(QInput, {
                              modelValue: model.password,
                              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => model.password = $event),
                              label: "Please enter a strong password",
                              type: pwdToggle.pw ? "password" : "text",
                              error: unref($v).password.$error || model.password && passwordTest() < 4,
                              "bottom-slots": "",
                              "error-message": "Your password must contain at least 1 number, 1 uppercase character and 1 special character",
                              "aria-label": "Enter new password"
                            }, {
                              append: withCtx(() => [
                                createVNode(QIcon, {
                                  name: pwdToggle.pw ? "visibility_off" : "visibility",
                                  class: "cursor-pointer",
                                  onClick: _cache[0] || (_cache[0] = ($event) => pwdToggle.pw = !pwdToggle.pw)
                                }, null, 8, ["name"])
                              ]),
                              _: 1
                            }, 8, ["modelValue", "type", "error"]),
                            createVNode(QInput, {
                              modelValue: model.passwordConfirm,
                              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => model.passwordConfirm = $event),
                              label: "Confirm password",
                              type: pwdToggle.pwc ? "password" : "text",
                              error: model.password && model.passwordConfirm !== model.password,
                              class: "q-mt-md",
                              "aria-label": "Confirm new password"
                            }, {
                              append: withCtx(() => [
                                createVNode(QIcon, {
                                  name: pwdToggle.pwc ? "visibility_off" : "visibility",
                                  class: "cursor-pointer",
                                  onClick: _cache[2] || (_cache[2] = ($event) => pwdToggle.pwc = !pwdToggle.pwc)
                                }, null, 8, ["name"])
                              ]),
                              _: 1
                            }, 8, ["modelValue", "type", "error"])
                          ])) : createCommentVNode("", true)
                        ]),
                        _: 1
                      }),
                      !success.value ? (openBlock(), createBlock(QCardActions, {
                        key: 0,
                        class: "row"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_router_link, {
                            to: { name: "signIn" },
                            class: "link"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Back to Sign In")
                            ]),
                            _: 1
                          }),
                          createVNode(QSpace),
                          !success.value ? (openBlock(), createBlock(QBtn, {
                            key: 0,
                            onClick: _cache[4] || (_cache[4] = ($event) => confirm()),
                            disabled: loading.value || unref($v).$invalid || model.password && model.passwordConfirm !== model.password,
                            loading: loading.value,
                            color: "secondary",
                            label: "Confirm",
                            "aria-label": "Confirm"
                          }, null, 8, ["disabled", "loading"])) : createCommentVNode("", true)
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
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
