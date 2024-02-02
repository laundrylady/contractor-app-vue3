import { B as defineComponent, J as useRouter, C as reactive, i as inject, r as ref, u as useUserStore, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, F as Fragment, t as normalizeClass, q as createBaseVNode, Q as QCard, L as QCardSection, M as QInput, N as QIcon, O as withKeys, P as QBtn, R as unref, a as authLogin } from "./index.8e5fd2f9.js";
import { Q as QPage } from "./QPage.2ea92104.js";
import { Q as QLayout, a as QPageContainer } from "./QLayout.7b5174d5.js";
import { u as useVuelidate, r as required, e as email } from "./index.esm.85a76f5c.js";
import { a as api } from "./axios.95284358.js";
import { _ as _sfc_main$2 } from "./AppLogo.297a37d7.js";
import { _ as _sfc_main$1 } from "./ValidationsModal.f8c556e0.js";
import { u as useMixinDebug } from "./debug.b9d7424b.js";
import "./QResizeObserver.281f14f9.js";
import "./QSpace.9884ea55.js";
import "./QToolbar.3f89b6b7.js";
import "./ClosePopup.e795b154.js";
const _hoisted_1 = { class: "col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3" };
const _hoisted_2 = {
  class: "text-center q-mb-md",
  style: { "min-height": "150px" }
};
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h5 text-bold" }, "Sign In", -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("p", null, "Welcome back!", -1);
const _hoisted_5 = { class: "text-right" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SignIn",
  setup(__props) {
    const router = useRouter();
    const login = reactive({
      username: void 0,
      password: void 0
    });
    const rules = {
      username: { required, email },
      password: { required }
    };
    const $v = useVuelidate(rules, login);
    const bus = inject("bus");
    const loading = ref(false);
    const isPwd = ref(true);
    const error = ref(false);
    const userStore = useUserStore();
    const signIn = () => {
      loading.value = true;
      if (login.username && login.password) {
        api.post("/auth/signin", login).then(() => {
          api.get("/auth/check").then((res) => {
            userStore.setUserData(res.data);
            authLogin();
            router.push({ name: "appDashboard" });
          }).catch((es) => {
            useMixinDebug(es);
          });
        }).catch((response) => {
          useMixinDebug(response, bus);
          loading.value = false;
          error.value = true;
          return false;
        });
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_sfc_main$1),
        createVNode(QLayout, {
          view: "lHh Lpr lFf",
          class: "bg-page-background"
        }, {
          default: withCtx(() => [
            createVNode(QPageContainer, null, {
              default: withCtx(() => [
                createVNode(QPage, {
                  class: normalizeClass(["row justify-center items-center animated fadeIn", { "q-pa-md": _ctx.$q.screen.xs }]),
                  padding: ""
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_1, [
                      createBaseVNode("div", _hoisted_2, [
                        createVNode(_sfc_main$2)
                      ]),
                      createVNode(QCard, null, {
                        default: withCtx(() => [
                          createVNode(QCardSection, null, {
                            default: withCtx(() => [
                              _hoisted_3,
                              _hoisted_4,
                              createVNode(QInput, {
                                modelValue: login.username,
                                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => login.username = $event),
                                label: "Registered Email",
                                "bottom-slots": "",
                                autofocus: "",
                                outlined: ""
                              }, {
                                prepend: withCtx(() => [
                                  createVNode(QIcon, { name: "account_circle" })
                                ]),
                                _: 1
                              }, 8, ["modelValue"]),
                              createVNode(QInput, {
                                modelValue: login.password,
                                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => login.password = $event),
                                type: isPwd.value ? "password" : "text",
                                label: "Password",
                                onKeydown: _cache[3] || (_cache[3] = withKeys(($event) => signIn(), ["enter"])),
                                error: error.value,
                                "error-message": "Invalid credentials",
                                outlined: ""
                              }, {
                                prepend: withCtx(() => [
                                  createVNode(QIcon, { name: "lock" })
                                ]),
                                append: withCtx(() => [
                                  createVNode(QIcon, {
                                    name: isPwd.value ? "visibility_off" : "visibility",
                                    class: "cursor-pointer",
                                    onClick: _cache[1] || (_cache[1] = ($event) => isPwd.value = !isPwd.value)
                                  }, null, 8, ["name"])
                                ]),
                                _: 1
                              }, 8, ["modelValue", "type", "error"]),
                              createBaseVNode("div", _hoisted_5, [
                                createVNode(QBtn, {
                                  to: { name: "passwordResetRequest" },
                                  label: "Forgot your password?",
                                  "no-caps": "",
                                  color: "primary",
                                  flat: "",
                                  rounded: ""
                                })
                              ]),
                              createVNode(QBtn, {
                                loading: loading.value,
                                onClick: _cache[4] || (_cache[4] = ($event) => signIn()),
                                disable: unref($v).$invalid || loading.value,
                                color: "primary",
                                label: "Sign In",
                                class: "full-width q-mt-md",
                                rounded: ""
                              }, null, 8, ["loading", "disable"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                }, 8, ["class"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ], 64);
    };
  }
});
export { _sfc_main as default };