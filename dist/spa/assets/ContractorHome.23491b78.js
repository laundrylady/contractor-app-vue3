import { Q as QHeader } from "./QHeader.be56e818.js";
import { Q as QPage } from "./QPage.e61d0301.js";
import { Q as QLayout, a as QPageContainer } from "./QLayout.fbea82eb.js";
import { a as api } from "./axios.66f61733.js";
import { u as useMixinDebug } from "./debug.972d445d.js";
import { B as defineComponent, r as ref, m as openBlock, n as createElementBlock, l as createVNode, L as withCtx, aa as useRoute, i as inject, o as onMounted, G as onBeforeUnmount, w as watch, by as resolveComponent, K as createBlock, z as createCommentVNode, t as normalizeClass } from "./index.e4f8656c.js";
import { Q as QRouteTab } from "./QRouteTab.f0e73586.js";
import { Q as QTabs } from "./QTabs.87f6d397.js";
import "./QResizeObserver.4ae15854.js";
import "./rtl.b51694b1.js";
const _hoisted_1 = { class: "layout-container" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ContractorNav",
  props: {
    model: null
  },
  setup(__props) {
    const currentTab = ref("details");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(QTabs, {
          modelValue: currentTab.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => currentTab.value = $event),
          align: !_ctx.$q.screen.xs ? "left" : "center"
        }, {
          default: withCtx(() => [
            createVNode(QRouteTab, {
              to: { name: "appDashboard" },
              icon: "home",
              title: "Home"
            }),
            createVNode(QRouteTab, {
              to: { name: "contractor-dashboard" },
              icon: "account_circle",
              title: "Profile"
            }),
            createVNode(QRouteTab, {
              to: { name: "contractor-edit" },
              icon: "info",
              title: "Details"
            }),
            createVNode(QRouteTab, {
              to: { name: "contractor-schedule" },
              icon: "calendar_month",
              title: "Roster"
            }),
            createVNode(QRouteTab, {
              to: { name: "contractor-commission-paid" },
              icon: "attach_money",
              title: "Commissions"
            })
          ]),
          _: 1
        }, 8, ["modelValue", "align"])
      ]);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ContractorHome",
  setup(__props) {
    const route = useRoute();
    const bus = inject("bus");
    const model = ref();
    const getContractor = async () => {
      api.get("/public/user/contractor/profile").then((response) => {
        model.value = response.data;
        document.title = model.value.fullname;
      }).catch((response) => {
        useMixinDebug(response);
      });
    };
    onMounted(async () => {
      await getContractor();
      bus.on("getContractor", () => {
        getContractor();
      });
    });
    onBeforeUnmount(() => {
      bus.off("getContractor");
    });
    watch(() => route.params.id, (newVal) => {
      if (route.name === "contractor-dashboard") {
        if (newVal) {
          getContractor();
        }
      }
    });
    return (_ctx, _cache) => {
      const _component_router_view = resolveComponent("router-view");
      return model.value && model.value.id ? (openBlock(), createBlock(QLayout, {
        key: 0,
        view: "lHh Lpr lFf",
        container: "",
        class: "layout-height"
      }, {
        default: withCtx(() => [
          createVNode(QHeader, {
            class: normalizeClass({ "page-title text-black": !_ctx.$q.dark.isActive, "bg-dark": _ctx.$q.dark.isActive }),
            bordered: ""
          }, {
            default: withCtx(() => [
              createVNode(_sfc_main$1, { model: model.value }, null, 8, ["model"])
            ]),
            _: 1
          }, 8, ["class"]),
          createVNode(QPageContainer, null, {
            default: withCtx(() => [
              createVNode(QPage, {
                padding: "",
                class: "q-pt-md layout-container q-pa-md"
              }, {
                default: withCtx(() => [
                  createVNode(_component_router_view, { model: model.value }, null, 8, ["model"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      })) : createCommentVNode("", true);
    };
  }
});
export { _sfc_main as default };
