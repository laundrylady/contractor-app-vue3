import { S as createComponent, aJ as useRouterLinkProps, aK as useRouterLink, f as computed, w as watch } from "./index.ef1b2cb4.js";
import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.6bac3b25.js";
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
