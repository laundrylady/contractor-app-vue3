import { B as defineComponent, r as ref, C as reactive, aa as useRoute, m as openBlock, K as createBlock, L as withCtx, l as createVNode, q as createBaseVNode, Q as QCard, M as QCardSection, I as Transition, n as createElementBlock, R as QBtn, z as createCommentVNode, N as QInput, S as unref, O as QIcon, ab as QCardActions } from "./index.6a5c0810.js";
import { Q as QSpace } from "./QSpace.a65fbdcd.js";
import { Q as QPage } from "./QPage.10b9ef9c.js";
import { Q as QLayout, a as QPageContainer } from "./QLayout.3ebe14f1.js";
import { u as useMixinDebug } from "./debug.972d445d.js";
import { u as useVuelidate, r as required } from "./index.esm.411ccfd3.js";
import { a as api } from "./axios.83cf9320.js";
import { _ as _sfc_main$1 } from "./AppLogo.2dea3568.js";
import "./QResizeObserver.878bf649.js";
const _hoisted_1 = { class: "col-xs-12 col-sm-6 col-md-4 col-xl-3" };
const _hoisted_2 = {
  class: "text-center q-mb-md",
  style: { "min-height": "150px" }
};
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("h1", { class: "text-h5 q-mt-none q-mb-none text-bold" }, "Password Reset", -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", null, "Enter and confirm your new password below:", -1);
const _hoisted_5 = {
  key: 0,
  class: "text-positive q-mb-md"
};
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("p", { class: "q-mb-lg" }, "Your password has been updated!", -1);
const _hoisted_7 = {
  key: 0,
  class: "bg-negative text-white"
};
const _hoisted_8 = { key: 0 };
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
      if (!model || !model.password) {
        return -1;
      }
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
      return openBlock(), createBlock(QLayout, {
        view: "lHh Lpr lFf",
        class: "bg-page-background"
      }, {
        default: withCtx(() => [
          createVNode(QPageContainer, null, {
            default: withCtx(() => [
              createVNode(QPage, { class: "row justify-center items-center animated fadeIn q-pa-md" }, {
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
                                success.value ? (openBlock(), createElementBlock("div", _hoisted_5, [
                                  _hoisted_6,
                                  createVNode(QBtn, {
                                    to: { name: "signIn" },
                                    color: "primary",
                                    label: "Go To Sign In",
                                    class: "full-width",
                                    rounded: ""
                                  })
                                ])) : createCommentVNode("", true)
                              ]),
                              _: 1
                            }),
                            createVNode(Transition, {
                              "enter-active-class": "animated bounceIn",
                              "leave-active-class": "animated bounceOutTop",
                              appear: ""
                            }, {
                              default: withCtx(() => [
                                error.value ? (openBlock(), createElementBlock("div", _hoisted_7, "Error reseting your password")) : createCommentVNode("", true)
                              ]),
                              _: 1
                            }),
                            !success.value ? (openBlock(), createElementBlock("div", _hoisted_8, [
                              createVNode(QInput, {
                                modelValue: model.password,
                                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => model.password = $event),
                                label: "Please enter a strong password",
                                type: pwdToggle.pw ? "password" : "text",
                                error: unref($v).password.$error || model.password && passwordTest() < 4,
                                "bottom-slots": "",
                                "error-message": "Your password must contain at least 1 number, 1 uppercase character and 1 special character",
                                "aria-label": "Enter new password",
                                outlined: ""
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
                                "aria-label": "Confirm new password",
                                outlined: ""
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
                            createVNode(QBtn, {
                              to: { name: "signIn" },
                              label: "Back to Sign In",
                              "no-caps": "",
                              flat: "",
                              color: "primary",
                              rounded: ""
                            }),
                            createVNode(QSpace),
                            !success.value ? (openBlock(), createBlock(QBtn, {
                              key: 0,
                              onClick: _cache[4] || (_cache[4] = ($event) => confirm()),
                              disabled: loading.value || unref($v).$invalid || model.password && model.passwordConfirm !== model.password,
                              loading: loading.value,
                              color: "primary",
                              label: "Confirm",
                              "aria-label": "Confirm",
                              rounded: ""
                            }, null, 8, ["disabled", "loading"])) : createCommentVNode("", true)
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
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
