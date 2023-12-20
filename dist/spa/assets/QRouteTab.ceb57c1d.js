import { U as createComponent, aK as useRouterLinkProps, aL as useRouterLink, g as computed, w as watch } from "./index.8edaef54.js";
import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.db426f48.js";
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
export { QRouteTab as Q };
