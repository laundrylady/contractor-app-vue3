import { Q as QHeader } from "./QHeader.9b449710.js";
import { Q as QPage } from "./QPage.af5151b8.js";
import { Q as QLayout, a as QPageContainer } from "./QLayout.8454d77d.js";
import { a as api } from "./axios.631f0c20.js";
import { u as useMixinDebug } from "./debug.b9d7424b.js";
import { C as defineComponent, ak as useRoute, i as inject, r as ref, o as onMounted, G as onBeforeUnmount, w as watch, aN as resolveComponent, m as openBlock, aa as createBlock, K as withCtx, l as createVNode, t as normalizeClass, z as createCommentVNode } from "./index.c351ea70.js";
import { _ as _sfc_main$1 } from "./ContractorNav.d7df89f9.js";
import "./QResizeObserver.e72c78b8.js";
import "./QRouteTab.f33230aa.js";
import "./QTabs.8721dbaa.js";
import "./rtl.276c3f1b.js";
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
      return openBlock(), createBlock(QLayout, {
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
              createVNode(_sfc_main$1)
            ]),
            _: 1
          }, 8, ["class"]),
          createVNode(QPageContainer, null, {
            default: withCtx(() => [
              createVNode(QPage, {
                padding: "",
                class: "q-pt-md layout-container q-pa-md q-pb-xl"
              }, {
                default: withCtx(() => [
                  model.value && model.value.id ? (openBlock(), createBlock(_component_router_view, {
                    key: 0,
                    model: model.value
                  }, null, 8, ["model"])) : createCommentVNode("", true)
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
