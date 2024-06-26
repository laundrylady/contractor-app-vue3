import { Q as QRouteTab } from "./QRouteTab.c654c8f6.js";
import { Q as QTabs } from "./QTabs.41fdf994.js";
import { C as defineComponent, r as ref, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx } from "./index.22c247c5.js";
const _hoisted_1 = { class: "layout-container" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ContractorNav",
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
              title: "Home",
              exact: ""
            }),
            createVNode(QRouteTab, {
              to: { name: "contractor-dashboard" },
              icon: "bar_chart",
              title: "Profile"
            }),
            createVNode(QRouteTab, {
              to: { name: "contractor-schedule" },
              icon: "schedule",
              title: "Roster"
            }),
            createVNode(QRouteTab, {
              to: { name: "contractor-commission-paid" },
              icon: "attach_money",
              title: "Commissions"
            }),
            createVNode(QRouteTab, {
              to: { name: "contractor-edit" },
              icon: "settings",
              title: "Details"
            })
          ]),
          _: 1
        }, 8, ["modelValue", "align"])
      ]);
    };
  }
});
export { _sfc_main as _ };
