import { S as createComponent, ab as useDarkProps, ac as useDark, f as computed, h, V as hSlot, g as getCurrentInstance, A as defineComponent, u as useUserStore, r as ref, B as reactive, a9 as useRoute, o as onMounted, l as openBlock, J as createBlock, K as withCtx, k as createVNode, p as createBaseVNode, Q as QCard, L as QCardSection, y as createCommentVNode, H as Transition, m as createElementBlock, N as QIcon, P as QBtn, aG as createTextVNode, M as QInput, R as unref, aa as QCardActions, a as authLogin } from "./index.a868d555.js";
import { Q as QSpace } from "./QSpace.b9b90a50.js";
import { Q as QPage } from "./QPage.197ed816.js";
import { Q as QLayout, a as QPageContainer } from "./QLayout.385b8f92.js";
import { u as useVuelidate, r as required } from "./index.esm.ff88b628.js";
import { m as moment, a as api } from "./axios.a7f4982f.js";
import { _ as _sfc_main$1 } from "./AppLogo.a35bdf65.js";
import { u as useMixinDebug } from "./debug.ffa51329.js";
import "./QResizeObserver.267e3110.js";
var QBanner = createComponent({
  name: "QBanner",
  props: {
    ...useDarkProps,
    inlineActions: Boolean,
    dense: Boolean,
    rounded: Boolean
  },
  setup(props, { slots }) {
    const { proxy: { $q } } = getCurrentInstance();
    const isDark = useDark(props, $q);
    const classes = computed(
      () => "q-banner row items-center" + (props.dense === true ? " q-banner--dense" : "") + (isDark.value === true ? " q-banner--dark q-dark" : "") + (props.rounded === true ? " rounded-borders" : "")
    );
    const actionClass = computed(
      () => `q-banner__actions row items-center justify-end col-${props.inlineActions === true ? "auto" : "all"}`
    );
    return () => {
      const child = [
        h("div", {
          class: "q-banner__avatar col-auto row items-center self-start"
        }, hSlot(slots.avatar)),
        h("div", {
          class: "q-banner__content col text-body2"
        }, hSlot(slots.default))
      ];
      const actions = hSlot(slots.action);
      actions !== void 0 && child.push(
        h("div", { class: actionClass.value }, actions)
      );
      return h("div", {
        class: classes.value + (props.inlineActions === false && actions !== void 0 ? " q-banner--top-padding" : ""),
        role: "alert"
      }, child);
    };
  }
});
const _hoisted_1 = { class: "col-xs-12 col-sm-6 col-md-3" };
const _hoisted_2 = {
  class: "text-center q-mb-md",
  style: { "min-height": "150px" }
};
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("h4", { class: "text-h4 q-mt-none q-mb-sm" }, "Activate your Account", -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("p", null, "Congratulations and welcome to The Laundry Lady. Before you can get started, you need to set a secure password for your account. Please enter and confirm a secure password below:", -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("div", { class: "q-pa-md bg-pink-1 q-mb-lg" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "q-mb-sm" }, "Create a strong password containing at least:"),
  /* @__PURE__ */ createBaseVNode("ul", { class: "q-mb-none" }, [
    /* @__PURE__ */ createBaseVNode("li", null, "1 number"),
    /* @__PURE__ */ createBaseVNode("li", null, "1 UPPERCASE character"),
    /* @__PURE__ */ createBaseVNode("li", null, "1 special character (e.g. !,#,@)")
  ])
], -1);
const _hoisted_6 = {
  key: 0,
  class: "text-center"
};
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("p", null, "Your password has been set and account enabled!", -1);
const _hoisted_8 = { key: 0 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ContractorActivate",
  setup(__props) {
    const userStore = useUserStore();
    const loading = ref(false);
    const error = ref(false);
    const success = ref(false);
    const pwdToggle = reactive({ pwc: true, pw: true });
    const route = useRoute();
    const contractor = ref();
    const model = reactive({
      code: route.params.code,
      password: void 0,
      passwordConfirm: void 0,
      timezone: moment.tz.guess()
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
      api.put(`/public/user/contractor/onboarding/activate/${route.params.code}`, model).then(() => {
        error.value = false;
        api.get("/auth/check").then((res) => {
          userStore.setUserData(res.data);
          authLogin();
          success.value = true;
          loading.value = false;
        }).catch((es) => {
          useMixinDebug(es);
        });
      }).catch((response) => {
        useMixinDebug(response);
        error.value = true;
        success.value = false;
        loading.value = false;
      });
    };
    onMounted(() => {
      api.get(`/public/user/contractor/onboarding/activate/${route.params.code}`).then((response) => {
        contractor.value = response.data;
      }).catch((error2) => {
        useMixinDebug(error2);
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QLayout, { view: "lHh Lpr lFf" }, {
        default: withCtx(() => [
          createVNode(QPageContainer, null, {
            default: withCtx(() => [
              contractor.value ? (openBlock(), createBlock(QPage, {
                key: 0,
                class: "row justify-center items-center animated fadeIn q-pa-md"
              }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_1, [
                    createBaseVNode("div", _hoisted_2, [
                      createVNode(_sfc_main$1)
                    ]),
                    createVNode(QCard, null, {
                      default: withCtx(() => [
                        !success.value ? (openBlock(), createBlock(QCardSection, { key: 0 }, {
                          default: withCtx(() => [
                            _hoisted_3,
                            _hoisted_4,
                            _hoisted_5
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(QCardSection, null, {
                          default: withCtx(() => [
                            createVNode(Transition, {
                              "enter-active-class": "animated bounceIn",
                              "leave-active-class": "animated bounceOutTop",
                              appear: ""
                            }, {
                              default: withCtx(() => [
                                success.value ? (openBlock(), createElementBlock("div", _hoisted_6, [
                                  createBaseVNode("div", null, [
                                    createVNode(QIcon, {
                                      name: "check",
                                      size: "64px"
                                    })
                                  ]),
                                  _hoisted_7,
                                  createVNode(QBtn, {
                                    to: { name: "appDashboard" },
                                    color: "primary",
                                    label: "Continue"
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
                            !success.value ? (openBlock(), createElementBlock("div", _hoisted_8, [
                              createVNode(QInput, {
                                modelValue: model.password,
                                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => model.password = $event),
                                label: "Please enter a secure password",
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
                          key: 1,
                          class: "row"
                        }, {
                          default: withCtx(() => [
                            createVNode(QSpace),
                            !success.value ? (openBlock(), createBlock(QBtn, {
                              key: 0,
                              onClick: _cache[4] || (_cache[4] = ($event) => confirm()),
                              disabled: loading.value || unref($v).$invalid || model.password && model.passwordConfirm !== model.password,
                              loading: loading.value,
                              color: "primary",
                              label: "Activate",
                              "aria-label": "Activate",
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
