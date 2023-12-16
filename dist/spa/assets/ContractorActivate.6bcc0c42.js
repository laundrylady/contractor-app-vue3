import { U as createComponent, ac as useDarkProps, ad as useDark, g as computed, h, W as hSlot, j as getCurrentInstance, B as defineComponent, J as useRouter, u as useUserStore, r as ref, C as reactive, aa as useRoute, o as onMounted, m as openBlock, K as createBlock, L as withCtx, l as createVNode, q as createBaseVNode, Q as QCard, M as QCardSection, z as createCommentVNode, I as Transition, ak as createTextVNode, n as createElementBlock, N as QInput, S as unref, O as QIcon, ab as QCardActions, R as QBtn, a as authLogin } from "./index.208ac1b0.js";
import { Q as QSpace } from "./QSpace.d1c22587.js";
import { Q as QPage } from "./QPage.f0c0b1f6.js";
import { Q as QLayout, a as QPageContainer } from "./QLayout.4ee729f8.js";
import { u as useVuelidate, r as required } from "./index.esm.5ecef02b.js";
import { m as moment, a as api } from "./axios.affd6c01.js";
import { _ as _sfc_main$1 } from "./AppLogo.530d29e3.js";
import { u as useMixinCommon } from "./common.f149a1fb.js";
import { u as useMixinDebug } from "./debug.972d445d.js";
import "./QResizeObserver.bb8db11b.js";
import "./common.6fc3fe87.js";
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
const _hoisted_1 = { class: "col-xs-12 col-sm-6 col-md-4 col-xl-3" };
const _hoisted_2 = {
  class: "text-center q-mb-md",
  style: { "min-height": "150px" }
};
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("h4", { class: "text-h4 q-mt-none q-mb-sm" }, "Account Activation", -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("p", null, "Congratulations and welcome to The Laundry Lady.", -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("p", null, "Before you can get started, you need to set a secure password for your account.", -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("div", { class: "q-pa-md bg-pink-1 q-mb-lg" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "q-mb-sm" }, "Create a strong password containing at least:"),
  /* @__PURE__ */ createBaseVNode("ul", { class: "q-mb-none" }, [
    /* @__PURE__ */ createBaseVNode("li", null, "1 number"),
    /* @__PURE__ */ createBaseVNode("li", null, "1 UPPERCASE character"),
    /* @__PURE__ */ createBaseVNode("li", null, "1 special character (e.g. !,#,@)")
  ])
], -1);
const _hoisted_7 = { key: 0 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ContractorActivate",
  setup(__props) {
    const router = useRouter();
    const userStore = useUserStore();
    const loading = ref(false);
    const error = ref(false);
    const success = ref(false);
    const pwdToggle = reactive({ pwc: true, pw: true });
    const route = useRoute();
    const contractor = ref();
    const common = useMixinCommon();
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
      api.put(`/public/user/contractor/onboarding/activate/${route.params.code}`, model).then(() => {
        error.value = false;
        api.get("/auth/check").then((res) => {
          var _a;
          userStore.setUserData(res.data);
          authLogin();
          router.push({ name: ((_a = common.value) == null ? void 0 : _a.operating_country) === "aud" ? "tfaSms" : "appDashboard" });
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
      return openBlock(), createBlock(QLayout, {
        view: "lHh Lpr lFf",
        class: "bg-page-background"
      }, {
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
                            _hoisted_5,
                            _hoisted_6
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
                                error.value ? (openBlock(), createBlock(QBanner, {
                                  key: 0,
                                  class: "bg-negative text-white"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Error setting your password")
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true)
                              ]),
                              _: 1
                            }),
                            !success.value ? (openBlock(), createElementBlock("div", _hoisted_7, [
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
