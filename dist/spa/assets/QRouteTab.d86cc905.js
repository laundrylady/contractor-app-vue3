import { A as defineComponent, r as ref, o as onMounted, J as resolveComponent, m as openBlock, n as createElementBlock, l as createVNode, L as withCtx, y as createCommentVNode, V as createComponent, aN as useRouterLinkProps, aO as useRouterLink, g as computed, w as watch } from "./index.3eea7960.js";
import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.ca54c685.js";
const _hoisted_1 = { key: 0 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MapWithMarker",
  props: {
    latLng: null,
    height: null
  },
  setup(__props) {
    const props = __props;
    const mapRefMarker = ref();
    const center = ref();
    const style = `width:100%;height:${props.height || "300px"}`;
    onMounted(() => {
      center.value = props.latLng;
    });
    return (_ctx, _cache) => {
      const _component_GMapMarker = resolveComponent("GMapMarker");
      const _component_GMapMap = resolveComponent("GMapMap");
      return __props.latLng && center.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_GMapMap, {
          center: __props.latLng,
          zoom: 8,
          "map-type-id": "terrain",
          style,
          ref_key: "mapRefMarker",
          ref: mapRefMarker
        }, {
          default: withCtx(() => [
            createVNode(_component_GMapMarker, {
              position: __props.latLng,
              clickable: true,
              draggable: false,
              onClick: _cache[0] || (_cache[0] = ($event) => center.value = __props.latLng),
              icon: { url: "https://cdn.mapmarker.io/api/v1/font-awesome/v5/pin?text=P&size=32&background=cf1677&color=FFF&hoffset=-1" }
            }, null, 8, ["position", "icon"])
          ]),
          _: 1
        }, 8, ["center"])
      ])) : createCommentVNode("", true);
    };
  }
});
var QRouteTab = createComponent({
  name: "QRouteTab",
  props: {
    ...useRouterLinkProps,
    ...useTabProps
  },
  emits: useTabEmits,
  setup(props, { slots, emit }) {
    const routeData = useRouterLink({
      useDisableForRouterLinkProps: false
    });
    const { renderTab, $tabs } = useTab(
      props,
      slots,
      emit,
      {
        exact: computed(() => props.exact),
        ...routeData
      }
    );
    watch(() => `${props.name} | ${props.exact} | ${(routeData.resolvedLink.value || {}).href}`, () => {
      $tabs.verifyRouteModel();
    });
    return () => renderTab(routeData.linkTag.value, routeData.linkAttrs.value);
  }
});
export { QRouteTab as Q, _sfc_main as _ };
