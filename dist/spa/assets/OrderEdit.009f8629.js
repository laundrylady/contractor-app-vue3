import { A as defineComponent, g as computed, r as ref, B as reactive, o as onMounted, m as openBlock, K as createBlock, L as withCtx, n as createElementBlock, F as Fragment, bm as renderList, t as normalizeClass, l as createVNode, bu as QAvatar, R as createTextVNode, aI as toDisplayString, q as createBaseVNode, U as unref, N as QInput, S as QBtn, y as createCommentVNode, O as QIcon, G as withDirectives, i as inject, E as onBeforeUnmount, Q as QCard, M as QCardSection, aG as QDialog, aO as QSpinner, J as resolveComponent, ak as QToggle, ae as QCardActions, bt as QSeparator, bn as QCheckbox } from "./index.f596c8b4.js";
import { Q as QSelect } from "./QSelect.062469f2.js";
import { Q as QTime } from "./QTime.e662f2d6.js";
import { Q as QExpansionItem } from "./QExpansionItem.4c8ac076.js";
import { a as QItem, Q as QItemSection } from "./QItemSection.428ce3b8.js";
import { Q as QList } from "./QList.0be7fff6.js";
import { Q as QItemLabel } from "./rtl.a33aca76.js";
import { u as useVuelidate, r as required } from "./index.esm.62e65c44.js";
import { a as api } from "./axios.165a10e8.js";
import { _ as _sfc_main$9 } from "./AddressSearch.53e2f4da.js";
import { _ as _sfc_main$b } from "./CountryField.ec286853.js";
import { _ as _sfc_main$7 } from "./DateField.f6da400c.js";
import { _ as _sfc_main$a } from "./PostcodeRegionField.60bde143.js";
import { _ as _sfc_main$6, a as _sfc_main$8 } from "./OrderContractorManagement.69f3e304.js";
import { _ as _sfc_main$5 } from "./GlobalNotes.50bc70f0.js";
import { Q as QMenu } from "./format.ce8c2b83.js";
import { C as ClosePopup } from "./ClosePopup.0f34e25b.js";
import { u as useMixinDebug } from "./debug.805a8aef.js";
import { g as groupBy, a as currencyFormat, c as confirmDelete, d as dateTz, b as doNotify, e as globalStatusList, h as hourBookingOptions, f as dateTimeTz, i as displayDateDay, j as hourBookingDisplay, k as hourAgreedDisplay } from "./help.f405f514.js";
import { _ as _sfc_main$4 } from "./StatusTag.740d6073.js";
import { _ as _sfc_main$c } from "./UserAvatar.374622c4.js";
import { Q as QToolbar, a as QToolbarTitle } from "./QToolbarTitle.95dc101e.js";
import { Q as QSpace } from "./QSpace.4a4bacc3.js";
import { Q as QMarkupTable } from "./QMarkupTable.d01b3e45.js";
import { u as useQuasar } from "./use-quasar.0a70395b.js";
import { p as productCategoriesVisibleBooking } from "./helpers.8289b76e.js";
import { u as useI18n } from "./vue-i18n.runtime.esm-bundler.6aeff9f1.js";
import "./TouchPan.d979649d.js";
import "./touch.70a9dd44.js";
import "./QLinearProgress.bbb2424d.js";
import "./QBadge.4a0fce4e.js";
import "./use-ratio.fdd856de.js";
const _hoisted_1$3 = { class: "text-grey" };
const _hoisted_2$3 = { class: "text-h6" };
const _hoisted_3$3 = { class: "row" };
const _hoisted_4$3 = { class: "text-h6 q-pa-sm bg-grey-2" };
const _hoisted_5$3 = { class: "text-grey" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "OrderProductManagement",
  props: {
    model: null
  },
  emits: ["update:products"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const localModel = computed(() => props.model);
    const productList = ref();
    const nonEditableProducts = ref([26, 35, 36]);
    const rawProductList = ref();
    const schema = {
      order_id: null,
      name: null,
      product_id: null,
      cost: null,
      price: null,
      qty: 1,
      notes: null,
      product: {},
      tax: false
    };
    const loading = ref(false);
    const newProduct = reactive(JSON.parse(JSON.stringify(schema)));
    const productCategoryOrder = ["Washing", "Ironing", "Other", "Delivery"];
    const sortByObject = productCategoryOrder.reduce((obj, item, index) => {
      return {
        ...obj,
        [item]: index
      };
    }, {});
    const productListFiltered = computed(() => {
      if (productList.value) {
        const productListTmp = JSON.parse(JSON.stringify(productList.value));
        const currentProductIds = props.model.products.map((o) => o.product_id);
        for (const g of productListTmp) {
          g.data = g.data.filter((o) => currentProductIds.indexOf(o.id) === -1);
        }
        return productListTmp.filter((o) => o.data.length).sort((a, b) => sortByObject[a.key] - sortByObject[b.key]);
      }
      return [];
    });
    const addProduct = () => {
      const delivery = localModel.value.products.findIndex((o) => o.product_id === 26);
      if (delivery !== -1) {
        localModel.value.products.splice(delivery, 0, {
          product: newProduct.product,
          name: newProduct.name,
          product_id: newProduct.product_id,
          cost: newProduct.cost,
          price: newProduct.price,
          qty: newProduct.qty,
          notes: newProduct.notes,
          tax: newProduct.tax
        });
      } else {
        localModel.value.products.push({
          product: newProduct.product,
          name: newProduct.name,
          product_id: newProduct.product_id,
          cost: newProduct.cost,
          price: newProduct.price,
          qty: newProduct.qty,
          notes: newProduct.notes,
          tax: newProduct.tax
        });
      }
    };
    const removeProduct = (index) => {
      confirmDelete("This will remove the product from the order permenantly").onOk(() => {
        localModel.value.products.splice(index, 1);
        save();
      });
    };
    const selectProduct = (product) => {
      newProduct.product = product;
      newProduct.product_id = product.id;
      newProduct.name = product.name;
      newProduct.cost = product.unit_cost;
      newProduct.price = product.unit_price;
      newProduct.qty = product.unit_minimum;
      newProduct.tax = product.tax;
      setTimeout(() => {
        addProduct();
        if (!localModel.value.products.find((o) => o.product_id === 26)) {
          const delivery = rawProductList.value.find((o) => o.id === 26);
          if (delivery) {
            newProduct.product = delivery;
            newProduct.product_id = delivery.id;
            newProduct.name = delivery.name;
            newProduct.cost = delivery.unit_cost;
            newProduct.price = delivery.unit_price;
            newProduct.qty = delivery.unit_minimum;
            newProduct.tax = delivery.tax;
            addProduct();
          }
        }
        save();
        Object.assign(newProduct, JSON.parse(JSON.stringify(schema)));
      }, 100);
    };
    const minusQty = (product) => {
      if (product.qty > 1) {
        product.qty = parseFloat(product.qty.toString()) - 1;
      }
      save();
    };
    const plusQty = (product) => {
      product.qty = parseFloat(product.qty.toString()) + 1;
      save();
    };
    const manualQty = () => {
      save();
    };
    const save = () => {
      if (!props.model.id) {
        return true;
      }
      loading.value = true;
      api.put(`/order/${props.model.id}?cp=true`, localModel.value).then(() => {
        loading.value = false;
        emits("update:products");
      }).catch((error) => {
        useMixinDebug(error);
      });
    };
    onMounted(() => {
      api.get("/product/index").then((response) => {
        rawProductList.value = response.data;
        productList.value = groupBy(response.data.filter((o) => props.model.productcategories.find((p) => p.id === o.product_category_id) || o.productcategory.name === "Delivery"), "productcategory.name");
      }).catch((error) => {
        useMixinDebug(error);
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QList, {
        separator: "",
        bordered: ""
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.model.products, (p, index) => {
            return openBlock(), createBlock(QItem, {
              key: index,
              class: normalizeClass({ "bg-grey-1": index % 2 !== 0 })
            }, {
              default: withCtx(() => [
                createVNode(QItemSection, {
                  avatar: "",
                  class: "cursor-move"
                }, {
                  default: withCtx(() => [
                    createVNode(QAvatar, {
                      icon: p.product.productcategory.icon,
                      size: "48px"
                    }, null, 8, ["icon"])
                  ]),
                  _: 2
                }, 1024),
                createVNode(QItemSection, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(p.name) + " ", 1),
                    createBaseVNode("div", _hoisted_1$3, "Price per " + toDisplayString(p.product.unit_measurement) + ": " + toDisplayString(unref(currencyFormat)(p.price)), 1)
                  ]),
                  _: 2
                }, 1024),
                nonEditableProducts.value.indexOf(p.product_id) === -1 ? (openBlock(), createBlock(QItemSection, {
                  key: 0,
                  class: "col-xs-12 col-sm-3"
                }, {
                  default: withCtx(() => [
                    createVNode(QInput, {
                      modelValue: p.qty,
                      "onUpdate:modelValue": [($event) => p.qty = $event, manualQty],
                      type: "number",
                      min: "1",
                      borderless: "",
                      label: `${p.product.unit_measurement.toUpperCase()}S`,
                      filled: "",
                      debounce: 500
                    }, {
                      prepend: withCtx(() => [
                        createVNode(QBtn, {
                          onClick: ($event) => minusQty(p),
                          color: "primary",
                          icon: "remove",
                          dense: "",
                          disable: loading.value
                        }, null, 8, ["onClick", "disable"])
                      ]),
                      append: withCtx(() => [
                        createVNode(QBtn, {
                          onClick: ($event) => plusQty(p),
                          color: "primary",
                          icon: "add",
                          dense: "",
                          disable: loading.value
                        }, null, 8, ["onClick", "disable"])
                      ]),
                      _: 2
                    }, 1032, ["modelValue", "onUpdate:modelValue", "label"])
                  ]),
                  _: 2
                }, 1024)) : createCommentVNode("", true),
                nonEditableProducts.value.indexOf(p.product_id) === -1 ? (openBlock(), createBlock(QItemSection, {
                  key: 1,
                  side: ""
                }, {
                  default: withCtx(() => [
                    createVNode(QBtn, {
                      onClick: ($event) => removeProduct(index),
                      icon: "delete",
                      color: "negative",
                      title: "Remove Product",
                      flat: "",
                      disable: loading.value
                    }, null, 8, ["onClick", "disable"])
                  ]),
                  _: 2
                }, 1024)) : createCommentVNode("", true)
              ]),
              _: 2
            }, 1032, ["class"]);
          }), 128)),
          __props.model.id ? (openBlock(), createBlock(QItem, { key: 0 }, {
            default: withCtx(() => [
              createVNode(QItemSection),
              createVNode(QItemSection, { class: "text-right" }, {
                default: withCtx(() => [
                  createBaseVNode("div", null, [
                    createBaseVNode("div", null, "Subtotal: " + toDisplayString(unref(currencyFormat)(__props.model.total_price)), 1),
                    createBaseVNode("div", null, "GST: " + toDisplayString(unref(currencyFormat)(__props.model.total_price_gst)), 1),
                    createBaseVNode("div", _hoisted_2$3, "Total: " + toDisplayString(unref(currencyFormat)(__props.model.grand_total_price)), 1)
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          })) : createCommentVNode("", true),
          createVNode(QItem, null, {
            default: withCtx(() => [
              createVNode(QItemSection, null, {
                default: withCtx(() => [
                  createVNode(QBtn, {
                    label: !newProduct.product_id ? `Add a ${_ctx.$t("product.name")}` : `${newProduct.name}`,
                    outline: "",
                    "no-caps": "",
                    color: "primary",
                    icon: "add_circle",
                    disable: loading.value
                  }, {
                    default: withCtx(() => [
                      createVNode(QMenu, {
                        anchor: "center middle",
                        self: "center middle",
                        class: "soft-shadow"
                      }, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_3$3, [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(productListFiltered), (p) => {
                              return openBlock(), createElementBlock("div", {
                                class: "col-xs-12",
                                key: p.key
                              }, [
                                createBaseVNode("div", _hoisted_4$3, [
                                  createVNode(QIcon, {
                                    name: p.data[0].productcategory.icon,
                                    size: "32px"
                                  }, null, 8, ["name"]),
                                  createTextVNode(" " + toDisplayString(p.key), 1)
                                ]),
                                createVNode(QList, { separator: "" }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createElementBlock(Fragment, null, renderList(p.data, (d) => {
                                      return withDirectives((openBlock(), createBlock(QItem, {
                                        onClick: ($event) => selectProduct(d),
                                        clickable: "",
                                        key: d.id
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(QItemSection, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(d.name) + " ", 1),
                                              createBaseVNode("div", _hoisted_5$3, toDisplayString(unref(currencyFormat)(d.unit_price)) + " per " + toDisplayString(d.unit_measurement), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"])), [
                                        [ClosePopup]
                                      ]);
                                    }), 128))
                                  ]),
                                  _: 2
                                }, 1024)
                              ]);
                            }), 128))
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["label", "disable"])
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
var _imports_0 = "data:image/webp;base64,UklGRiIEAABXRUJQVlA4WAoAAAAQAAAARwAARwAAQUxQSFECAAABkENr2yFJX1V3j23bNqK1bdvezAxn0rVt27Zt79hW9XZ9SfH/FmlETAD8l3M2fsldh06cPm3cwPaxniYqVuGD889/qGg2i4ii0Fj84siSLr48c5z/6P3fBVTd9GpNdxem+JiVrwTUuPH6FG92QlZ9E1FH4eFEFzbsx76woM6tZ9sZGIjY3oQMlixy1Yvr/ATZFA5F6mMcV4jMPsjVwzSnGhl+10k745w6ZPpTB624cdXI+OsMjToXIPM3QzSJfIwEtzloYLcNKbbM1GBsEwn8kqIq5DkS3WGjglspUqntqSL2K5I9aa9sJdKt76Eo4BUh3GlSMlqgVBCvwLQfKYtzFER8I4UnbOQGC7R+RMjlI+3WfjI254nhUhn/D9T2GqSSK6jddpTq2kztvZ/UUDO1gkipiUi9IkFqOrmaFKlp5KplxonUyuKlBgrUfoRJtW+k9tpLKraY2mVbKc8X1DZzUqYj1OaD7BJijR3lujbReucv5/uK1naDHLealDACFHZvoPQmUInLdUp5oHiqmU5xujKfh3TWGZXBxFYqv9JApcsZIpYVnBpoV0Ljth+o5hebKZR1Aw1dDhFoW8BrAVEPmBM3O4K2ue9YO+EHWnf6xNb5UNC+w2uGLCdCQc+MWyIrbVt8Qd+QbS1slC9wBL0dZnxl4PedbgbQn0veUafXrxV+wKZtz5MNepSsSzUAsw7ddxZYtGl7m5dmBKZN8XNO/mhT0/hu+4gAHti3iei3bO/t9wUVNdVlP15f3jy/o58RyBoc/SITUlLiw7xsefhPBwBWUDggqgEAAPAKAJ0BKkgASAA+7XKwUimnJKKj60EwHYlkAMxHE9AmcBtoOeE0wDeYP+Dk3sIAwYjq9Kxnof/Us4woeFGha+kkAGxAk2NG/4MaZGnYMiFBIDNoIz/AL0tZ6SnZLII8AAD+6+rf/+xLt/bb3iv+tvxz5iqNYARXAPiaUq7xmiHMLr7ssIlwUCPo3WVw/4dP/ZyyE1k/nVUMM5W/0z+tFipTqh1ZRCYYgb7SOzOLhNJ0cDPWz6+Aej2uUJWMmKoD9u5DoNhmH13RETbn4rNBLSalv0eaUcCX9eeROWAVLKlaQHAU9h55jFSFgbIlL1tJwPoBculgZt10qBjT8GD6zaIYB+nMcQZRfQoFV828G6qqrEqc+VKqo+bKrU5eE+xZExG9ujYdbbaT1jdNX9fyNcSWykWokCc3KTmcW8/GO4UxiGAT69hJ8z/32SKFy91ka5zQxYtOvzQEHCrz9h51PgaQvnMy+SzHLujw+Lf5nfIqv2RLJqOUHTleUd0qq+zNm4AzfcmYG+MeLyizWMtQx+reAxi1qtcmMzdsJp1D3y0ErFiyAiG7QAAAAA==";
const _hoisted_1$2 = { class: "row q-col-gutter-md q-mb-lg q-mt-xs" };
const _hoisted_2$2 = { class: "col-xs-12 col-sm-2" };
const _hoisted_3$2 = /* @__PURE__ */ createBaseVNode("div", { class: "text-bold" }, "To", -1);
const _hoisted_4$2 = { class: "col-xs-12 col-sm-4" };
const _hoisted_5$2 = /* @__PURE__ */ createBaseVNode("div", { class: "text-bold" }, "Reference", -1);
const _hoisted_6$2 = { class: "col-xs-12 col-sm-2" };
const _hoisted_7$2 = /* @__PURE__ */ createBaseVNode("div", { class: "text-bold" }, "Invoice Number", -1);
const _hoisted_8$2 = { class: "col-xs-12 col-sm-2" };
const _hoisted_9$2 = /* @__PURE__ */ createBaseVNode("div", { class: "text-bold" }, "Issue Date", -1);
const _hoisted_10$2 = { class: "col-xs-12 col-sm-2" };
const _hoisted_11$1 = /* @__PURE__ */ createBaseVNode("div", { class: "text-bold" }, "Due Date", -1);
const _hoisted_12$1 = /* @__PURE__ */ createBaseVNode("thead", null, [
  /* @__PURE__ */ createBaseVNode("tr", null, [
    /* @__PURE__ */ createBaseVNode("th", { style: { "width": "60px" } }, "Qty"),
    /* @__PURE__ */ createBaseVNode("th", { class: "text-left" }, "Product"),
    /* @__PURE__ */ createBaseVNode("th", { style: { "width": "85px" } }, "Amount"),
    /* @__PURE__ */ createBaseVNode("th", { style: { "width": "80px" } }, "Tax"),
    /* @__PURE__ */ createBaseVNode("th", { style: { "width": "100px" } }, "Total")
  ])
], -1);
const _hoisted_13$1 = { class: "text-center" };
const _hoisted_14$1 = { class: "text-left" };
const _hoisted_15$1 = /* @__PURE__ */ createBaseVNode("td", null, null, -1);
const _hoisted_16$1 = /* @__PURE__ */ createBaseVNode("td", null, null, -1);
const _hoisted_17$1 = { class: "text-bold" };
const _hoisted_18$1 = { class: "text-bold" };
const _hoisted_19$1 = { class: "text-bold" };
const _hoisted_20$1 = /* @__PURE__ */ createBaseVNode("td", null, null, -1);
const _hoisted_21$1 = /* @__PURE__ */ createBaseVNode("td", null, null, -1);
const _hoisted_22$1 = /* @__PURE__ */ createBaseVNode("td", null, null, -1);
const _hoisted_23$1 = /* @__PURE__ */ createBaseVNode("span", { class: "text-bold text-positive" }, "Paid:", -1);
const _hoisted_24$1 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_25$1 = /* @__PURE__ */ createBaseVNode("span", { class: "text-bold text-negative" }, "DUE:", -1);
const _hoisted_26$1 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "XeroInvoiceView",
  setup(__props) {
    const bus = inject("bus");
    const showModal = ref(false);
    const id = ref();
    const model = ref();
    const $q = useQuasar();
    const getInvoice = () => {
      $q.loading.show({ message: "Loading invoice..." });
      api.get(`/xero/invoice/${id.value}`).then((response) => {
        model.value = response.data.data[0];
        showModal.value = true;
        $q.loading.hide();
      }).catch((error) => {
        useMixinDebug(error);
        $q.loading.hide();
      });
    };
    onMounted(() => {
      bus.on("xeroInvoiceView", (invoiceId) => {
        id.value = invoiceId;
        getInvoice();
      });
    });
    onBeforeUnmount(() => {
      bus.off("xeroInvoiceView");
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QDialog, {
        modelValue: showModal.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => showModal.value = $event)
      }, {
        default: withCtx(() => [
          model.value && model.value.reference ? (openBlock(), createBlock(QCard, {
            key: 0,
            class: "modal"
          }, {
            default: withCtx(() => [
              createVNode(QToolbar, { class: "bg-primary text-white" }, {
                default: withCtx(() => [
                  createVNode(QToolbarTitle, { class: "col-grow" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(model.value.reference), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(QSpace),
                  createVNode(_sfc_main$4, {
                    status: model.value.status,
                    class: "q-mr-xs"
                  }, null, 8, ["status"]),
                  withDirectives(createVNode(QBtn, {
                    dense: "",
                    round: "",
                    flat: "",
                    icon: "close"
                  }, null, 512), [
                    [ClosePopup]
                  ])
                ]),
                _: 1
              }),
              createVNode(QCardSection, null, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_1$2, [
                    createBaseVNode("div", _hoisted_2$2, [
                      _hoisted_3$2,
                      createTextVNode(" " + toDisplayString(model.value.contact.name), 1)
                    ]),
                    createBaseVNode("div", _hoisted_4$2, [
                      _hoisted_5$2,
                      createTextVNode(" " + toDisplayString(model.value.reference), 1)
                    ]),
                    createBaseVNode("div", _hoisted_6$2, [
                      _hoisted_7$2,
                      createTextVNode(" #" + toDisplayString(model.value.invoiceNumber), 1)
                    ]),
                    createBaseVNode("div", _hoisted_8$2, [
                      _hoisted_9$2,
                      createTextVNode(" " + toDisplayString(unref(dateTz)(model.value.date)), 1)
                    ]),
                    createBaseVNode("div", _hoisted_10$2, [
                      _hoisted_11$1,
                      createTextVNode(" " + toDisplayString(unref(dateTz)(model.value.dueDate)), 1)
                    ])
                  ]),
                  createVNode(QMarkupTable, {
                    flat: "",
                    bordered: "",
                    "wrap-cells": ""
                  }, {
                    default: withCtx(() => [
                      _hoisted_12$1,
                      createBaseVNode("tbody", null, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(model.value.lineItems, (l) => {
                          return openBlock(), createElementBlock("tr", {
                            key: l.lineItemID
                          }, [
                            createBaseVNode("td", _hoisted_13$1, toDisplayString(l.quantity), 1),
                            createBaseVNode("td", _hoisted_14$1, toDisplayString(l.description), 1),
                            createBaseVNode("td", null, toDisplayString(unref(currencyFormat)(l.lineAmount)), 1),
                            createBaseVNode("td", null, toDisplayString(unref(currencyFormat)(l.taxAmount)), 1),
                            createBaseVNode("td", null, toDisplayString(unref(currencyFormat)(l.taxAmount + l.lineAmount)), 1)
                          ]);
                        }), 128)),
                        createBaseVNode("tr", null, [
                          _hoisted_15$1,
                          _hoisted_16$1,
                          createBaseVNode("td", _hoisted_17$1, toDisplayString(unref(currencyFormat)(model.value.subTotal)), 1),
                          createBaseVNode("td", _hoisted_18$1, toDisplayString(unref(currencyFormat)(model.value.totalTax)), 1),
                          createBaseVNode("td", _hoisted_19$1, toDisplayString(unref(currencyFormat)(model.value.total)), 1)
                        ])
                      ]),
                      createBaseVNode("tfoot", null, [
                        createBaseVNode("tr", null, [
                          _hoisted_20$1,
                          _hoisted_21$1,
                          _hoisted_22$1,
                          createBaseVNode("td", null, [
                            _hoisted_23$1,
                            _hoisted_24$1,
                            createTextVNode(toDisplayString(unref(currencyFormat)(model.value.amountPaid)), 1)
                          ]),
                          createBaseVNode("td", null, [
                            _hoisted_25$1,
                            _hoisted_26$1,
                            createTextVNode(toDisplayString(unref(currencyFormat)(model.value.amountDue)), 1)
                          ])
                        ])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
});
const _hoisted_1$1 = { class: "q-pa-md" };
const _hoisted_2$1 = { class: "row q-col-gutter-md items-center" };
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("div", { class: "col-xs-12 col-sm-2" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_0,
    style: { "max-width": "100%" }
  })
], -1);
const _hoisted_4$1 = { class: "col-xs-12 col-sm-10" };
const _hoisted_5$1 = { key: 0 };
const _hoisted_6$1 = { key: 1 };
const _hoisted_7$1 = { class: "q-mb-xs" };
const _hoisted_8$1 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_9$1 = {
  key: 0,
  class: "q-mt-xs"
};
const _hoisted_10$1 = {
  key: 1,
  class: "q-mt-xs text-negative"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "XeroInvoice",
  props: {
    invoiceId: null,
    type: null,
    type_id: null,
    dataType: null
  },
  setup(__props) {
    const props = __props;
    const bus = inject("bus");
    const error = ref(false);
    const loading = ref(false);
    const model = ref();
    const getInvoice = () => {
      loading.value = true;
      error.value = false;
      api.get(`/xero/invoice/${props.invoiceId}`).then((response) => {
        if (response.data.data && response.data.data[0]) {
          model.value = response.data.data[0];
        } else {
          error.value = response.data.error;
        }
        loading.value = false;
      });
    };
    const requeue = () => {
      confirmDelete("This will repush this to invoice to Xero").onOk(() => {
        api.post("/xeroqueue/requeue", {
          type: props.type,
          type_id: props.type_id,
          data: props.dataType ? { type: props.dataType } : null
        }).then(() => {
          doNotify("positive", "Xero invoice push queued");
        }).catch((error2) => {
          useMixinDebug(error2);
        });
      });
    };
    const viewInvoice = (invoiceID) => {
      bus.emit("xeroInvoiceView", invoiceID);
    };
    onMounted(() => {
      getInvoice();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createVNode(_sfc_main$2),
        createBaseVNode("div", _hoisted_2$1, [
          _hoisted_3$1,
          createBaseVNode("div", _hoisted_4$1, [
            loading.value ? (openBlock(), createElementBlock("div", _hoisted_5$1, [
              createVNode(QSpinner),
              createTextVNode(" Loading Xero invoice... ")
            ])) : createCommentVNode("", true),
            !loading.value && model.value ? (openBlock(), createElementBlock("div", _hoisted_6$1, [
              createBaseVNode("div", _hoisted_7$1, [
                createTextVNode("Xero Invoice ID:"),
                _hoisted_8$1,
                createTextVNode(toDisplayString(__props.invoiceId), 1)
              ]),
              createBaseVNode("a", {
                class: "link",
                onClick: _cache[0] || (_cache[0] = ($event) => viewInvoice(__props.invoiceId))
              }, "#" + toDisplayString(model.value.invoiceNumber), 1),
              !error.value ? (openBlock(), createElementBlock("div", _hoisted_9$1, [
                createVNode(_sfc_main$4, {
                  status: model.value.status
                }, null, 8, ["status"]),
                createVNode(QBtn, {
                  onClick: _cache[1] || (_cache[1] = ($event) => requeue()),
                  label: "Re-push to Xero",
                  color: "grey",
                  class: "q-ml-xs",
                  flat: ""
                })
              ])) : createCommentVNode("", true),
              error.value ? (openBlock(), createElementBlock("div", _hoisted_10$1, [
                createTextVNode(" Error retrieving invoice: "),
                createBaseVNode("div", null, toDisplayString(error.value), 1)
              ])) : createCommentVNode("", true)
            ])) : createCommentVNode("", true)
          ])
        ])
      ]);
    };
  }
});
const _hoisted_1 = {
  key: 0,
  class: "row q-col-gutter-md q-mb-lg"
};
const _hoisted_2 = { class: "col-xs-12 col-sm-4" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6" }, "Total Amount", -1);
const _hoisted_4 = { class: "text-center q-mt-sm" };
const _hoisted_5 = { class: "col-xs-12 col-sm-4" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6" }, "Total Owing", -1);
const _hoisted_7 = { class: "text-center q-mt-sm" };
const _hoisted_8 = {
  key: 0,
  class: "col-xs-12 col-sm-4"
};
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6" }, "Commission Paid", -1);
const _hoisted_10 = { class: "text-center q-mt-sm" };
const _hoisted_11 = { class: "row q-col-gutter-md q-mb-md" };
const _hoisted_12 = {
  key: 0,
  class: "row q-col-gutter-md"
};
const _hoisted_13 = { class: "col-xs-12 col-sm-8" };
const _hoisted_14 = { class: "row q-col-gutter-md q-mb-md" };
const _hoisted_15 = { key: 0 };
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("div", { class: "text-bold text-grey q-mt-md" }, "Deliver To", -1);
const _hoisted_17 = { key: 1 };
const _hoisted_18 = { key: 2 };
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("div", { class: "text-bold text-grey q-mt-md" }, "Products", -1);
const _hoisted_20 = {
  key: 3,
  class: "q-mt-lg q-mb-md"
};
const _hoisted_21 = { class: "col-xs-12 col-sm-4" };
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("div", { class: "text-bold text-grey q-mb-xs" }, "Agreed Pickup Time", -1);
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("p", null, "The time below has been agreed upon by the customer and contractor.", -1);
const _hoisted_24 = { class: "row q-col-gutter-md" };
const _hoisted_25 = { class: "row q-col-gutter-md" };
const _hoisted_26 = { key: 0 };
const _hoisted_27 = {
  key: 1,
  class: "q-mt-xl"
};
const _hoisted_28 = { key: 0 };
const _hoisted_29 = { key: 1 };
const _hoisted_30 = { class: "text-grey-7 text-caption" };
const _hoisted_31 = { key: 0 };
const _hoisted_32 = {
  key: 0,
  class: "q-ml-xs q-mr-xs"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "OrderEdit",
  props: {
    model: null,
    noNotes: { type: Boolean },
    futureRecurring: null
  },
  emits: ["update:order"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const bus = inject("bus");
    const i18n = useI18n();
    const categories = ref();
    const localModel = computed(() => props.model);
    const rules = {
      team_id: { required },
      scheduled_pickup_date: { required },
      scheduled_pickup_time: { required },
      status: { required },
      productcategories: { required }
    };
    const loading = ref(false);
    const loadingPayment = ref(false);
    const $v = useVuelidate(rules, localModel, { $scope: false });
    const save = () => {
      loading.value = true;
      api.put(`/order/${props.model.id}`, localModel.value).then(() => {
        doNotify("positive", "Saved");
        emits("update:order");
        bus.emit("getDashboardStats");
        loading.value = false;
      }).catch((error) => {
        loading.value = false;
        useMixinDebug(error);
      });
    };
    const updateProducts = () => {
      emits("update:order", { onlyTotals: true });
    };
    const paymentsOwing = computed(() => {
      const grandTotal = parseFloat(props.model.grand_total_price.toString());
      const paymentTotal = props.model.payments.reduce((previousValue, currentValue) => {
        return previousValue + currentValue.total;
      }, 0);
      return { owing: grandTotal - paymentTotal, totalPayments: paymentTotal };
    });
    const doPayment = () => {
      loadingPayment.value = true;
      document.location = `/api/orderpayment/session/${props.model.id}`;
    };
    const pushToXero = () => {
      confirmDelete(`This will push the ${i18n.t("order.name")} to Xero`).onOk(() => {
        api.get(`/order/pushtoxero/${props.model.id}`).then(() => {
          emits("update:order");
        }).catch((error) => {
          useMixinDebug(error);
        });
      });
    };
    onMounted(async () => {
      categories.value = await productCategoriesVisibleBooking();
    });
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock(Fragment, null, [
        __props.model && __props.model.products.length ? (openBlock(), createElementBlock("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            createVNode(QCard, { class: "bg-secondary text-white" }, {
              default: withCtx(() => [
                createVNode(QCardSection, null, {
                  default: withCtx(() => [
                    _hoisted_3,
                    createBaseVNode("div", _hoisted_4, toDisplayString(unref(currencyFormat)(__props.model.grand_total_price)), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_5, [
            createVNode(QCard, {
              class: normalizeClass(["text-white", { "bg-positive": unref(paymentsOwing).owing <= 0, "bg-negative": unref(paymentsOwing).owing > 0 }])
            }, {
              default: withCtx(() => [
                createVNode(QCardSection, null, {
                  default: withCtx(() => [
                    _hoisted_6,
                    createBaseVNode("div", _hoisted_7, toDisplayString(unref(currencyFormat)(unref(paymentsOwing).owing)), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["class"])
          ]),
          __props.model.commission_paid_amount && __props.model.commission_paid_amount_gst ? (openBlock(), createElementBlock("div", _hoisted_8, [
            createVNode(QCard, { class: "text-white bg-primary" }, {
              default: withCtx(() => [
                createVNode(QCardSection, null, {
                  default: withCtx(() => [
                    _hoisted_9,
                    createBaseVNode("div", _hoisted_10, toDisplayString(unref(currencyFormat)(__props.model.commission_paid_amount)) + " / " + toDisplayString(unref(currencyFormat)(__props.model.commission_paid_amount_gst)), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        createVNode(QCard, null, {
          default: withCtx(() => [
            createVNode(QList, null, {
              default: withCtx(() => [
                createVNode(QExpansionItem, {
                  group: "orderEdit",
                  label: _ctx.$t("order.details"),
                  "header-class": "text-h6",
                  "default-opened": !__props.model.products || !__props.model.products.length || __props.model.recurring_order,
                  caption: "Update the booking details"
                }, {
                  default: withCtx(() => [
                    createVNode(QCard, null, {
                      default: withCtx(() => [
                        createVNode(QCardSection, null, {
                          default: withCtx(() => [
                            createBaseVNode("div", _hoisted_11, [
                              createVNode(_sfc_main$6, {
                                modelValue: unref(localModel).team_id,
                                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(localModel).team_id = $event),
                                label: _ctx.$t("team.name"),
                                status: "active",
                                class: "col-xs-12 col-sm-8",
                                error: unref($v).team_id.$invalid,
                                disabled: true
                              }, null, 8, ["modelValue", "label", "error"]),
                              createVNode(QSelect, {
                                modelValue: unref(localModel).status,
                                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(localModel).status = $event),
                                label: _ctx.$t("order.status"),
                                error: unref($v).status.$invalid,
                                "map-options": "",
                                options: unref(globalStatusList),
                                "emit-value": "",
                                class: "col-xs-12 col-sm-4"
                              }, null, 8, ["modelValue", "label", "error", "options"])
                            ]),
                            unref(localModel).team_id ? (openBlock(), createElementBlock("div", _hoisted_12, [
                              createBaseVNode("div", _hoisted_13, [
                                createBaseVNode("div", _hoisted_14, [
                                  createVNode(_sfc_main$7, {
                                    modelValue: unref(localModel).scheduled_pickup_date,
                                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(localModel).scheduled_pickup_date = $event),
                                    label: _ctx.$t("order.scheduledPickupDate"),
                                    invalid: unref($v).scheduled_pickup_date.$invalid,
                                    class: "col-xs-12 col-sm-6"
                                  }, null, 8, ["modelValue", "label", "invalid"]),
                                  createVNode(QSelect, {
                                    modelValue: unref(localModel).scheduled_pickup_time,
                                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(localModel).scheduled_pickup_time = $event),
                                    label: _ctx.$t("order.scheduledPickupTime"),
                                    invalid: unref($v).scheduled_pickup_time,
                                    options: unref(hourBookingOptions),
                                    "emit-value": "",
                                    "map-options": "",
                                    class: "col-xs-12 col-sm-6"
                                  }, null, 8, ["modelValue", "label", "invalid", "options"])
                                ]),
                                !unref(localModel).recurring_parent_id ? (openBlock(), createElementBlock("div", _hoisted_15, [
                                  createVNode(QToggle, {
                                    modelValue: unref(localModel).recurring_order,
                                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => unref(localModel).recurring_order = $event),
                                    label: _ctx.$t("order.recurring")
                                  }, null, 8, ["modelValue", "label"]),
                                  unref(localModel).recurring_order ? (openBlock(), createBlock(QSelect, {
                                    key: 0,
                                    modelValue: unref(localModel).recurring,
                                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => unref(localModel).recurring = $event),
                                    label: _ctx.$t("order.recurringFrequency"),
                                    options: ["Week", "Fortnite", "Month"],
                                    "bottom-slots": ""
                                  }, null, 8, ["modelValue", "label"])) : createCommentVNode("", true)
                                ])) : createCommentVNode("", true),
                                _hoisted_16,
                                unref(localModel).address1 ? (openBlock(), createElementBlock("div", _hoisted_17, toDisplayString(unref(localModel).address1), 1)) : createCommentVNode("", true),
                                createBaseVNode("div", null, toDisplayString(unref(localModel).address2), 1),
                                unref(localModel).suburbpostcoderegion ? (openBlock(), createElementBlock("div", _hoisted_18, toDisplayString(unref(localModel).suburbpostcoderegion.locality) + " " + toDisplayString(unref(localModel).suburbpostcoderegion.state) + " " + toDisplayString(unref(localModel).suburbpostcoderegion.postcode), 1)) : createCommentVNode("", true),
                                _hoisted_19,
                                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(localModel).productcategories, (c) => {
                                  return openBlock(), createElementBlock("div", {
                                    key: c.id
                                  }, [
                                    c.meta ? (openBlock(), createBlock(QCheckbox, {
                                      key: 0,
                                      modelValue: c.meta.pivot_active,
                                      "onUpdate:modelValue": ($event) => c.meta.pivot_active = $event,
                                      label: c.name
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])) : createCommentVNode("", true)
                                  ]);
                                }), 128)),
                                unref(localModel).scheduled_pickup_time ? (openBlock(), createElementBlock("div", _hoisted_20, [
                                  createVNode(_sfc_main$8, {
                                    modelValue: unref(localModel).contractor_user_id,
                                    "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => unref(localModel).contractor_user_id = $event),
                                    team_id: unref(localModel).team_id,
                                    scheduled_pickup_date: unref(localModel).scheduled_pickup_date,
                                    scheduled_pickup_time: unref(localModel).scheduled_pickup_time,
                                    reassign: true,
                                    productcategories: __props.model.productcategories
                                  }, null, 8, ["modelValue", "team_id", "scheduled_pickup_date", "scheduled_pickup_time", "productcategories"])
                                ])) : createCommentVNode("", true)
                              ]),
                              createBaseVNode("div", _hoisted_21, [
                                _hoisted_22,
                                _hoisted_23,
                                createVNode(QTime, {
                                  modelValue: unref(localModel).agreed_pickup_time,
                                  "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => unref(localModel).agreed_pickup_time = $event),
                                  color: "secondary"
                                }, null, 8, ["modelValue"])
                              ])
                            ])) : createCommentVNode("", true)
                          ]),
                          _: 1
                        }),
                        createVNode(QCardActions, { align: "right" }, {
                          default: withCtx(() => [
                            createVNode(QBtn, {
                              disable: loading.value || unref($v).$invalid,
                              label: _ctx.$t("actions.update"),
                              color: "primary",
                              onClick: _cache[8] || (_cache[8] = ($event) => save())
                            }, null, 8, ["disable", "label"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["label", "default-opened"]),
                createVNode(QExpansionItem, {
                  group: "orderEdit",
                  label: `${_ctx.$t("order.products")} (${__props.model.products.length})`,
                  caption: " Create, update and delete products for this booking",
                  "header-class": "text-h6",
                  "default-opened": __props.model.products && __props.model.products.length && !__props.model.recurring_order ? true : false
                }, {
                  default: withCtx(() => [
                    createVNode(QCard, null, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$3, {
                          model: __props.model,
                          "onUpdate:products": updateProducts
                        }, null, 8, ["model"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["label", "default-opened"]),
                createVNode(QExpansionItem, {
                  group: "orderEdit",
                  label: _ctx.$t("order.invoiceConfiguration"),
                  caption: "Invoice configuration",
                  "header-class": "text-h6"
                }, {
                  default: withCtx(() => [
                    createVNode(QCard, null, {
                      default: withCtx(() => [
                        createVNode(QCardSection, null, {
                          default: withCtx(() => [
                            createBaseVNode("div", _hoisted_24, [
                              createVNode(QInput, {
                                modelValue: unref(localModel).invoice_name,
                                "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => unref(localModel).invoice_name = $event),
                                label: _ctx.$t("team.invoiceName"),
                                class: "col-xs-12 col-sm-6",
                                "bottom-slots": ""
                              }, null, 8, ["modelValue", "label"]),
                              createVNode(QInput, {
                                modelValue: unref(localModel).invoice_po,
                                "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => unref(localModel).invoice_po = $event),
                                label: _ctx.$t("team.invoicePo"),
                                class: "col-xs-12 col-sm-6",
                                "bottom-slots": ""
                              }, null, 8, ["modelValue", "label"])
                            ]),
                            createVNode(_sfc_main$9, {
                              model: unref(localModel),
                              addressfields: { address1: "invoice_address1", address2: "invoice_address2", suburb_postcode_region_id: "invoice_address_suburb_postcode_region_id", lat: "lat", lng: "lng", country_id: "invoice_address_country_id" },
                              placeholder: _ctx.$t("address.search"),
                              filled: true
                            }, null, 8, ["model", "placeholder"]),
                            createVNode(QInput, {
                              modelValue: unref(localModel).invoice_address1,
                              "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => unref(localModel).invoice_address1 = $event),
                              label: _ctx.$t("address.line1"),
                              "bottom-slots": ""
                            }, null, 8, ["modelValue", "label"]),
                            createVNode(QInput, {
                              modelValue: unref(localModel).invoice_address2,
                              "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => unref(localModel).invoice_address2 = $event),
                              label: _ctx.$t("address.line2"),
                              "bottom-slots": ""
                            }, null, 8, ["modelValue", "label"]),
                            createBaseVNode("div", _hoisted_25, [
                              createVNode(_sfc_main$a, {
                                modelValue: unref(localModel).invoice_address_suburb_postcode_region_id,
                                "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => unref(localModel).invoice_address_suburb_postcode_region_id = $event),
                                label: _ctx.$t("address.suburb"),
                                class: "col-xs-12 col-sm-6"
                              }, null, 8, ["modelValue", "label"]),
                              createVNode(_sfc_main$b, {
                                modelValue: unref(localModel).invoice_address_country_id,
                                "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => unref(localModel).invoice_address_country_id = $event),
                                label: _ctx.$t("address.country"),
                                class: "col-xs-12 col-sm-6"
                              }, null, 8, ["modelValue", "label"])
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(QCardActions, { align: "right" }, {
                          default: withCtx(() => [
                            createVNode(QBtn, {
                              disable: loading.value || unref($v).$invalid,
                              label: _ctx.$t("actions.update"),
                              color: "primary",
                              onClick: _cache[15] || (_cache[15] = ($event) => save())
                            }, null, 8, ["disable", "label"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["label"]),
                __props.model && __props.model.products.length ? (openBlock(), createBlock(QExpansionItem, {
                  key: 0,
                  group: "orderEdit",
                  label: _ctx.$t("order.payments"),
                  caption: "Payments",
                  "header-class": "text-h6"
                }, {
                  default: withCtx(() => [
                    createVNode(QCard, null, {
                      default: withCtx(() => [
                        createVNode(QCardSection, null, {
                          default: withCtx(() => [
                            createVNode(QList, { separator: "" }, {
                              default: withCtx(() => [
                                !__props.model.payments.length ? (openBlock(), createBlock(QItem, { key: 0 }, {
                                  default: withCtx(() => [
                                    createVNode(QItemSection, null, {
                                      default: withCtx(() => [
                                        createTextVNode(" No payments found ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true),
                                (openBlock(true), createElementBlock(Fragment, null, renderList(__props.model.payments, (p) => {
                                  return openBlock(), createBlock(QItem, {
                                    key: p.id
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(QItemSection, { avatar: "" }, {
                                        default: withCtx(() => [
                                          createVNode(_sfc_main$c, {
                                            user: p.user
                                          }, null, 8, ["user"])
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(QItemSection, null, {
                                        default: withCtx(() => [
                                          createBaseVNode("div", null, toDisplayString(unref(dateTimeTz)(p.created_at)), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(QItemSection, { side: "" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(unref(currencyFormat)(p.grand_total)), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128)),
                                unref(paymentsOwing).owing > 0 ? (openBlock(), createBlock(QItem, { key: 1 }, {
                                  default: withCtx(() => [
                                    createVNode(QItemSection, null, {
                                      default: withCtx(() => [
                                        createVNode(QBtn, {
                                          onClick: _cache[16] || (_cache[16] = ($event) => doPayment()),
                                          label: "Make Payment",
                                          color: "primary",
                                          push: "",
                                          disable: loadingPayment.value,
                                          loading: loadingPayment.value
                                        }, null, 8, ["disable", "loading"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true),
                                __props.model.status === "paid" && !__props.model.xero_id ? (openBlock(), createBlock(QItem, { key: 2 }, {
                                  default: withCtx(() => [
                                    createVNode(QItemSection, null, {
                                      default: withCtx(() => [
                                        createVNode(QBtn, {
                                          onClick: _cache[17] || (_cache[17] = ($event) => pushToXero()),
                                          label: "Push to Xero",
                                          color: "blue",
                                          push: ""
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true)
                              ]),
                              _: 1
                            }),
                            __props.model.xero_id ? (openBlock(), createElementBlock("div", _hoisted_26, [
                              createVNode(QSeparator, { class: "q-mt-md" }),
                              createVNode(_sfc_main$1, {
                                "invoice-id": __props.model.xero_id,
                                type: "Order",
                                type_id: __props.model.id
                              }, null, 8, ["invoice-id", "type_id"])
                            ])) : createCommentVNode("", true)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["label"])) : createCommentVNode("", true)
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        !__props.noNotes ? (openBlock(), createElementBlock("div", _hoisted_27, [
          createVNode(_sfc_main$5, {
            notable_id: __props.model.id,
            notable_type: "Order",
            nobox: true
          }, null, 8, ["notable_id"])
        ])) : createCommentVNode("", true),
        __props.futureRecurring && __props.futureRecurring.length ? (openBlock(), createBlock(QCard, {
          key: 2,
          class: "q-mb-md"
        }, {
          default: withCtx(() => [
            createVNode(QList, { separator: "" }, {
              default: withCtx(() => [
                createVNode(QItemLabel, { header: "" }, {
                  default: withCtx(() => [
                    createTextVNode("FUTURE BOOKINGS")
                  ]),
                  _: 1
                }),
                (openBlock(true), createElementBlock(Fragment, null, renderList(__props.futureRecurring, (o) => {
                  return openBlock(), createBlock(QItem, {
                    key: o.id
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("div", null, [
                        createBaseVNode("div", null, [
                          createVNode(_component_router_link, {
                            to: { name: "order-edit", params: { id: o.id } },
                            target: "_blank",
                            class: "link"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(displayDateDay)(o.scheduled_pickup_date)) + " " + toDisplayString(o.scheduled_pickup_date) + " (", 1),
                              !o.agreed_pickup_time ? (openBlock(), createElementBlock("span", _hoisted_28, toDisplayString(unref(hourBookingDisplay)(o.scheduled_pickup_time)), 1)) : createCommentVNode("", true),
                              o.agreed_pickup_time ? (openBlock(), createElementBlock("span", _hoisted_29, toDisplayString(unref(hourAgreedDisplay)(o.agreed_pickup_time)), 1)) : createCommentVNode("", true),
                              createTextVNode(")")
                            ]),
                            _: 2
                          }, 1032, ["to"]),
                          createVNode(_sfc_main$4, {
                            status: o.status,
                            small: true,
                            class: "q-ml-xs"
                          }, null, 8, ["status"])
                        ]),
                        createBaseVNode("div", _hoisted_30, [
                          createVNode(QIcon, {
                            name: "settings",
                            color: "grey-7"
                          }),
                          createTextVNode(),
                          o.productcategories ? (openBlock(), createElementBlock("span", _hoisted_31, [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(o.productcategories, (c, index) => {
                              return openBlock(), createElementBlock("span", {
                                key: c.id
                              }, [
                                createTextVNode(toDisplayString(c.name), 1),
                                index + 1 !== o.productcategories.length ? (openBlock(), createElementBlock("span", _hoisted_32, "&")) : createCommentVNode("", true)
                              ]);
                            }), 128)),
                            createTextVNode(" pickup with " + toDisplayString(o.team.name), 1)
                          ])) : createCommentVNode("", true)
                        ])
                      ])
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : createCommentVNode("", true)
      ], 64);
    };
  }
});
export { _sfc_main as default };
