import { Q as QHeader } from "./QHeader.d025f001.js";
import { Q as QPage } from "./QPage.c9d1d2c4.js";
import { Q as QLayout, a as QPageContainer } from "./QLayout.4c26a0ff.js";
import { a as api } from "./axios.2d1b6d62.js";
import { u as useMixinDebug } from "./debug.ffa51329.js";
import { A as defineComponent, r as ref, l as openBlock, m as createElementBlock, k as createVNode, K as withCtx, a9 as useRoute, i as inject, o as onMounted, E as onBeforeUnmount, w as watch, bv as resolveComponent, J as createBlock, y as createCommentVNode, s as normalizeClass } from "./index.0a9ea33a.js";
import { Q as QRouteTab } from "./QRouteTab.bd105988.js";
import { Q as QTabs } from "./QTabs.9e736a56.js";
import "./QResizeObserver.b45d4c06.js";
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
          dense: "",
          align: !_ctx.$q.screen.xs ? "left" : "center"
        }, {
          default: withCtx(() => [
            createVNode(QRouteTab, {
              to: { name: "contractor-dashboard" },
              label: "Home",
              icon: "home"
            }),
            createVNode(QRouteTab, {
              to: { name: "contractor-edit" },
              label: "Details",
              icon: "info"
            }),
            createVNode(QRouteTab, {
              to: { name: "contractor-schedule" },
              label: "Schedule",
              icon: "calendar_month"
            }),
            createVNode(QRouteTab, {
              to: { name: "contractor-commission-paid" },
              label: "Commissions",
              icon: "attach_money"
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
                class: normalizeClass(["q-pt-md layout-container", { "q-pa-md": _ctx.$q.screen.xs }])
              }, {
                default: withCtx(() => [
                  createVNode(_component_router_view, { model: model.value }, null, 8, ["model"])
                ]),
                _: 1
              }, 8, ["class"])
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
