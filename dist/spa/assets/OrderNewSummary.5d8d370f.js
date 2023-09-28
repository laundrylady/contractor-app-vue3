import { A as defineComponent, r as ref, w as watch, o as onMounted, l as openBlock, m as createElementBlock, k as createVNode, K as withCtx, L as QCardSection, p as createBaseVNode, N as QIcon, aG as createTextVNode, aH as toDisplayString, y as createCommentVNode, F as Fragment, bd as renderList, R as unref, Q as QCard } from "./index.bcc73ba7.js";
import { a as api } from "./axios.caba40e4.js";
import { u as useMixinDebug } from "./debug.ffa51329.js";
import { a as categoryDisplay, h as hourBookingDisplay } from "./help.f988fe57.js";
var _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAABFCAYAAAAcjSspAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALcSURBVHgB7ZdBUhNBFIb/1yFr4gkMRaB0ZTgB8QSEqGvDCfQGwAnAExDWKownIJwAWLkgFHMCa9xKMu3rnmSYYYjBiCWR/6tiJnnzqun5+73uPwAhhBBCCCGEEEIIIYQQQgghhBBCyDSU/HW5tYUnz1fx7esxCARLb+rA4GT4vYPzgw08cgTVZgVlOdKP9SRkT3Fl1xEGIWaZpVYbFk8hEuk7fc8/lHlYW9W3ryCOv+AiCHJP/bUoTKjCvJxZYWqvG5D46I7ZoXbHQjZgknAQ4fxwRT/tJmGpomxOsNhsYhbp9091ucM75VpbyJNCUq25CTFbmYxt/Ih3vXCziOsCMfMo24q2U+e6G4bEcVvbZz8bMoVBesG2Jq6nSltsamudqFgNzCJuMU28AivdgiCOAQonrowd7FmzioHsaUojE+3gKt6emb1mqakilHZ0ZRtpTBDoQrvvFX+oJNtGDpk4cK31XrM2k0FSHrY4fkGNm3M7E420AzYgc1G6Cd/SOg6DSfQOdlGKnZqdTLStG/GlHnt72rNVPBTcqVNr7aggzne107jVPfEqXvBHr8Rv0/gtreOYXCm5f7q+qtctPfsbubgVV5L7uPgc4F+w+Kqpy/su1yZ+XraLvt1IKzqpoMvh07FG9fdEGTFOHOdvoBuaNfvoferib+F9lXF2wc3D3Sv5aagYbn69w3wluMoeVZCrnDHtP50oI657tzixZPiun6CVMxijJunjKabBtWjZNLQaX+hC1AsVkRD5Nunjw1j7sNy61DGqmPBz5s9EyZLY6jUdcZLhU2HUelt9CbHuHmaeVbz1TqamNlytePIS49DNU08T2AADezzRS3kzatYw+PUhcX+ijHClXZJVGNEJ2Pqt3mB6It+i3nOoEDfb4564f1Fu4kSaEy17U/c/wuBWXt2lSHWUkcmOhn+J/bYSehNp9G4HZzgPpms/QgghhBBCCCGEEEIIIYSQ/5+fh+ANjRK8lzkAAAAASUVORK5CYII=";
var _imports_1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAABFCAYAAAAcjSspAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALLSURBVHgB7ZdBUtswFIZ/KbRb0htkQabdlZ6AcIKGTLsmPUG5AXAC2hNg1p0B9wQNJ4CuQwf3BMAWHL0+yUyC45gEmgTC/N+MYkuWbM3v/z2/AIQQQgghhBBCCCGEEEIIed4YzJtas6q/VSwt1SBShZVq/5ozlzDaPGmaIIkTPAGzFWXlUwNG3gOyqj3favCCPAwVyZyqgNrMMaxN0P1xihkyXVG8C15VNvWseSvEQwWYEEl06x111k/0eh111CWmyP+LkheiUTLrEoKOHhMND23ad06PcoXUXuRmVqQWjtbW4PRc1F1Gj8Y0yjfhBepF+BMf4D7qG5HO3YS4dZzFndK74bG8a+qmbVs3/RVFR3gRIli1/Y10cH74F9Og3lT32VW990fdeaP4XHWQmO9IXTwyH9VbF9ka3VP3aL3sMQ8XJWyssjfCFZkQkBhnR8eYBysba+qgdhBIQr66S4Qbt5sTZ6W1rXN3wvk9bplcFO+Mnt3Ws3ZuXFR16IPmJUQZ9VZbN6OuNauDQfHheoBr9y3knRDq9hxj3DKZKG9bW3DYRt6ukQoSPbkYw3gnS0UdIc3BoIrjZCfknLtugfuAblz4kpmxD4DZz6s/wpbPER9a1kRDYaV9dwBjf4WeeIcf7g4vLRclc8feYMDXCdh6ds4Yhw8roy7vixM+51kB6fNg9/DN8JKiKD7uXtt9vcnAfuJU0XgXi0pZPvSMSLhLhcVOrZVTVTZ00UwryJkQqmlX0/e+jDT8lUhgtRW+UnZNfzp3Rwai+PzRC7GWJVODGNfyZdrV4lzIBMnyhqrQjwcZMdeE0iIXBZkoWVE0EMSHS3eBwyVNT/XT61/mJH8zCnPMbbyd9C861x5bLi8CPjcau6wv+Krg9lCvaBhJCK3fw9cN6p/VJb2T0HspgkwF75YQQoQQQgghhBBCCCGEEEIIIYQQQggh5PH8A3w5GU3XgQ4cAAAAAElFTkSuQmCC";
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("p", { class: "text-bold" }, "Booking Summary", -1);
const _hoisted_2 = { key: 0 };
const _hoisted_3 = {
  key: 0,
  class: "q-mt-md"
};
const _hoisted_4 = {
  key: 1,
  class: "q-mt-md"
};
const _hoisted_5 = {
  key: 2,
  class: "q-mt-md"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "OrderNewSummary",
  props: {
    suburb_postcode_region_id: null,
    contractor_user_id: null,
    scheduled_pickup_date: null,
    scheduled_pickup_time: null,
    productcategories: null,
    categories: null
  },
  setup(__props) {
    const props = __props;
    const localModel = ref({ suburbpostcoderegion: void 0, contractor: void 0 });
    const getSuburbPostcodeRegion = (val) => {
      api.get(`/public/postcoderegion/${val}`).then((response) => {
        localModel.value.suburbpostcoderegion = response.data;
      }).catch((error) => {
        useMixinDebug(error);
      });
    };
    const getContractor = (val) => {
      api.get(`/public/user/contractor/details/${val}`).then((response) => {
        localModel.value.contractor = response.data;
      }).catch((error) => {
        useMixinDebug(error);
      });
    };
    watch(() => props.suburb_postcode_region_id, (newVal) => {
      if (newVal) {
        getSuburbPostcodeRegion(newVal);
      } else {
        localModel.value.suburbpostcoderegion = null;
      }
    });
    watch(() => props.contractor_user_id, (newVal) => {
      if (newVal) {
        getContractor(newVal);
      } else {
        localModel.value.contractor = null;
      }
    });
    onMounted(() => {
      if (props.suburb_postcode_region_id) {
        getSuburbPostcodeRegion(props.suburb_postcode_region_id);
      }
      if (props.contractor_user_id) {
        getContractor(props.contractor_user_id);
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _hoisted_1,
        createVNode(QCard, null, {
          default: withCtx(() => [
            createVNode(QCardSection, null, {
              default: withCtx(() => [
                createBaseVNode("div", null, [
                  localModel.value.suburbpostcoderegion ? (openBlock(), createElementBlock("span", _hoisted_2, [
                    createVNode(QIcon, {
                      name: "place",
                      size: "24px"
                    }),
                    createTextVNode(" " + toDisplayString(localModel.value.suburbpostcoderegion.locality) + " " + toDisplayString(localModel.value.suburbpostcoderegion.state), 1)
                  ])) : createCommentVNode("", true)
                ]),
                props.productcategories.filter((o) => o.active).length ? (openBlock(), createElementBlock("div", _hoisted_3, [
                  createVNode(QIcon, {
                    name: "local_laundry_service",
                    size: "24px"
                  }),
                  createTextVNode(),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(props.productcategories.filter((o) => o.active), (c) => {
                    return openBlock(), createElementBlock("span", {
                      key: c.product_category_id,
                      class: "q-mr-sm"
                    }, toDisplayString(unref(categoryDisplay)(c.product_category_id, props.categories)), 1);
                  }), 128))
                ])) : createCommentVNode("", true),
                !localModel.value.contractor && props.scheduled_pickup_date && !props.scheduled_pickup_time ? (openBlock(), createElementBlock("div", _hoisted_4, [
                  createVNode(QIcon, {
                    name: "event",
                    size: "24px"
                  }),
                  createTextVNode(" " + toDisplayString(props.scheduled_pickup_date), 1)
                ])) : createCommentVNode("", true),
                localModel.value.contractor && props.scheduled_pickup_date && props.scheduled_pickup_time ? (openBlock(), createElementBlock("div", _hoisted_5, [
                  createVNode(QIcon, {
                    name: "account_circle",
                    size: "24px"
                  }),
                  createTextVNode(" Pickup with " + toDisplayString(localModel.value.contractor.first_name) + " on " + toDisplayString(props.scheduled_pickup_date) + " (" + toDisplayString(unref(hourBookingDisplay)(props.scheduled_pickup_time)) + ") ", 1)
                ])) : createCommentVNode("", true)
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
export { _sfc_main as _, _imports_0 as a, _imports_1 as b };
