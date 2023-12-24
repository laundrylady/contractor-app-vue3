import { Q as QTab } from "./QTab.96e15793.js";
import { Q as QTabs } from "./QTabs.a24c1563.js";
import { B as defineComponent, r as ref, g as computed, i as inject, C as reactive, o as onMounted, m as openBlock, n as createElementBlock, q as createBaseVNode, F as Fragment, be as renderList, t as normalizeClass, ak as createTextVNode, aj as toDisplayString, S as unref, z as createCommentVNode, l as createVNode, bf as createSlots, L as withCtx, R as QBtn, N as QInput, K as createBlock, O as QIcon, H as withDirectives, bw as QSeparator, Q as QCard, M as QCardSection, ab as QCardActions, aH as QDialog, J as useRouter, by as resolveComponent, bg as QCheckbox, al as QToggle, bo as Dialog } from "./index.dd540b4f.js";
import { Q as QBadge } from "./QBadge.0a0904e6.js";
import { Q as QSelect } from "./QSelect.2d64b487.js";
import { Q as QSpace } from "./QSpace.5cae6ea2.js";
import { Q as QExpansionItem } from "./QExpansionItem.98fd5ac2.js";
import { a as QItem, Q as QItemSection } from "./QItemSection.1a564290.js";
import { Q as QList } from "./QList.dc30c21a.js";
import { Q as QItemLabel } from "./QItemLabel.748c0180.js";
import { Q as QToolbar, a as QToolbarTitle } from "./QToolbarTitle.80eb5f6b.js";
import { C as ClosePopup } from "./ClosePopup.0719daa7.js";
import { u as useVuelidate, r as required, a as requiredIf } from "./index.esm.4b6a2c5c.js";
import { a as api } from "./axios.a558da08.js";
import { _ as _sfc_main$7 } from "./AuditTimeline.2b2b4a79.js";
import { _ as _sfc_main$4, a as _sfc_main$5, b as _sfc_main$6 } from "./PostcodeRegionField.ccdafc8a.js";
import { _ as _sfc_main$2 } from "./DateField.347eed41.js";
import { Q as QMenu } from "./QMenu.724cc13f.js";
import { o as openURL } from "./open-url.92818356.js";
import { u as useMixinDebug } from "./debug.972d445d.js";
import { t as groupBy, k as currencyFormat, A as dateTimeTz, d as hourBookingOptions, c as confirmDelete, e as doNotify, b as arrayRange, h as hourBookingDisplay, F as agreedTimes, g as hourAgreedDisplay, C as displayDateDay, G as cancelOrderReasons, H as changeOrderReasonsDelivery, I as changeOrderReasons } from "./help.e4640e31.js";
import { _ as _sfc_main$3 } from "./GlobalNotes.74911d77.js";
import { _ as _sfc_main$8 } from "./GlobalNotifications.f9ff694b.js";
import { u as useMixinCommon } from "./common.76f6a4f0.js";
import { u as useMixinSecurity } from "./security.c42b83fa.js";
import { p as productCategoriesVisibleBooking } from "./helpers.4ebfb4f7.js";
import { u as useI18n } from "./vue-i18n.runtime.esm-bundler.98fb171c.js";
import "./QResizeObserver.94cddf66.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QSlideTransition.7836dee8.js";
import "./QTd.23275125.js";
import "./QTable.b4d6f9af.js";
import "./QMarkupTable.acf76c7c.js";
import "./QLinearProgress.61f39338.js";
import "./use-fullscreen.d6577286.js";
import "./QDate.22a55481.js";
import "./use-cache.b0833c75.js";
import "./QPopupProxy.86c74e0c.js";
import "./use-quasar.c5db3f70.js";
import "./selection.61335d0a.js";
import "./UserAvatar.55cf0323.js";
import "./QImg.8b647f14.js";
import "./use-ratio.70bf178e.js";
import "./common.613fbab4.js";
const _hoisted_1$1 = { class: "q-pl-sm q-pr-sm" };
const _hoisted_2$1 = { class: "col-xs-7 col-sm-9" };
const _hoisted_3$1 = { class: "text-grey q-mr-sm" };
const _hoisted_4$1 = ["onClick"];
const _hoisted_5$1 = {
  key: 0,
  class: "col-xs-5 col-sm-3"
};
const _hoisted_6$1 = {
  key: 0,
  class: "q-mt-md q-mb-sm"
};
const _hoisted_7$1 = { class: "row" };
const _hoisted_8$1 = { class: "text-h6 q-pa-sm bg-grey-2" };
const _hoisted_9$1 = { class: "text-primary" };
const _hoisted_10$1 = { class: "text-grey" };
const _hoisted_11$1 = { key: 1 };
const _hoisted_12$1 = { class: "text-right" };
const _hoisted_13$1 = { class: "text-h6" };
const _hoisted_14$1 = { key: 2 };
const _hoisted_15$1 = { key: 0 };
const _hoisted_16$1 = { class: "q-mt-md items-center q-pb-md" };
const _hoisted_17$1 = { class: "flex" };
const _hoisted_18$1 = {
  key: 0,
  class: "text-grey"
};
const _hoisted_19$1 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_20$1 = { key: 0 };
const _hoisted_21$1 = /* @__PURE__ */ createBaseVNode("p", null, "Please confirm the scheduled delivery date & time below:", -1);
const _hoisted_22$1 = { class: "row q-col-gutter-md" };
const _hoisted_23$1 = { class: "col-xs-12 col-sm-6" };
const _hoisted_24$1 = { class: "col-xs-12 col-sm-6" };
const _hoisted_25$1 = /* @__PURE__ */ createBaseVNode("p", null, "Please confirm the scheduled delivery date & time below:", -1);
const _hoisted_26$1 = { class: "row q-col-gutter-md" };
const _hoisted_27$1 = { class: "col-xs-12 col-sm-6" };
const _hoisted_28$1 = { class: "col-xs-12 col-sm-6" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "InvoiceProductManagement",
  props: {
    invoice: null,
    team: null,
    categories: null
  },
  emits: ["update:products", "update:order"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const sendPaymentModal = ref({
      show: false,
      content: null,
      scheduled_delivery_date: null,
      scheduled_delivery_time: null
    });
    const sendPaymentModalSms = ref({
      show: false,
      scheduled_delivery_date: null,
      scheduled_delivery_time: null
    });
    const localModel = computed(() => props.invoice);
    const productList = ref();
    const nonEditableProducts = ref([26, 35, 36]);
    const nonEditableProductCategories = ref([6]);
    const rawProductList = ref();
    const gfDcCode = ref();
    const sendingPaymentRequest = ref(false);
    const bus = inject("bus");
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
    const sendOnceTypes = ["NDIS", "Home Care", "Aged Care", "Veteran Affairs", "Sporting Group"];
    const hasPickupNoShow = computed(() => {
      if (!props.invoice || !props.invoice.products || !props.invoice.products.length) {
        return false;
      }
      if (props.invoice.products.find((o) => o.name === "Pickup No Show")) {
        return true;
      }
      return false;
    });
    const canEdit = computed(() => {
      if (localModel.value.status === "DRAFT") {
        return true;
      }
      if (localModel.value.status === "AUTHORISED") {
        const totalPaymentAmount = localModel.value.payments.reduce((current, obj) => {
          return current + parseFloat(obj.total.toString());
        }, 0);
        if (totalPaymentAmount > 0) {
          return false;
        } else {
          return true;
        }
      }
      return false;
    });
    const canSend = computed(() => {
      if (localModel.value.total_price <= 0) {
        return false;
      }
      if (localModel.value.status === "PAID") {
        return false;
      }
      if (sendOnceTypes.indexOf(props.team.type) !== -1 && localModel.value.sent_for_payment) {
        return false;
      }
      return true;
    });
    const productListFiltered = computed(() => {
      if (productList.value) {
        const productListTmp = JSON.parse(JSON.stringify(productList.value));
        const currentProductIds = localModel.value.products.map((o) => o.product_id);
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
        if (!localModel.value.products.find((o) => o.product_id === 26) && !props.team.free_delivery) {
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
    const manualQty = (qty) => {
      if (!qty) {
        return;
      }
      save();
    };
    const save = () => {
      if (!localModel.value.id) {
        return true;
      }
      loading.value = true;
      api.put(`/public/invoice/${localModel.value.id}?cp=true`, localModel.value).then(() => {
        loading.value = false;
        emits("update:products");
      }).catch((error) => {
        loading.value = false;
        useMixinDebug(error);
      });
    };
    const checkGvDc = () => {
      if (gfDcCode.value) {
        loading.value = true;
        api.post("/public/invoice/giftvoucherdiscountcoupon", { code: gfDcCode.value, invoice_id: localModel.value.id }).then((response) => {
          if (response.data.giftVoucher) {
            doNotify("positive", "Gift voucher payment applied");
            emits("update:order");
          } else if (response.data.discountCode) {
            if (!response.data.error) {
              doNotify("positive", "Discount applied");
              emits("update:order");
            } else {
              doNotify("negative", response.data.error);
            }
          } else {
            doNotify("negative", "No discount code or gift voucher found for that code");
          }
          gfDcCode.value = null;
          loading.value = false;
        }).catch((error) => {
          loading.value = false;
          useMixinDebug(error);
        });
      }
    };
    const doSendPaymentRequest = (type) => {
      if (type === "sms") {
        sendPaymentModalSms.value.show = true;
      } else {
        sendPaymentModal.value.content = null;
        sendPaymentModal.value.show = true;
      }
    };
    const sendPaymentRequest = () => {
      const message = "PLEASE NOTE: This will send the invoice for payment";
      confirmDelete(message).onOk(() => {
        sendingPaymentRequest.value = true;
        api.post(`/public/invoice/sendpaymentrequest/${localModel.value.id}`, sendPaymentModal.value).then(() => {
          doNotify("positive", "Invoice sent for payment");
          sendingPaymentRequest.value = false;
          emits("update:order");
          sendPaymentModal.value = {
            show: false,
            content: null,
            scheduled_delivery_date: null,
            scheduled_delivery_time: null
          };
        }).catch((error) => {
          sendingPaymentRequest.value = false;
          useMixinDebug(error, bus);
        });
      });
    };
    const sendPaymentRequestSms = () => {
      const message = "PLEASE NOTE: This will send the invoice for payment";
      confirmDelete(message).onOk(() => {
        sendingPaymentRequest.value = true;
        api.post(`/public/invoice/sendpaymentrequestsms/${localModel.value.id}`, sendPaymentModalSms.value).then(() => {
          doNotify("positive", "Invoice sent for payment");
          sendingPaymentRequest.value = false;
          sendPaymentModalSms.value = {
            show: false,
            scheduled_delivery_date: null,
            scheduled_delivery_time: null
          };
          emits("update:order");
        }).catch((error) => {
          sendingPaymentRequest.value = false;
          useMixinDebug(error, bus);
        });
      });
    };
    onMounted(() => {
      api.get("/public/product/index").then((response) => {
        response.data = response.data.filter((o) => o.active && o.name !== "Pickup No Show");
        rawProductList.value = response.data;
        productList.value = groupBy(response.data.filter((o) => props.categories.find((p) => p.id === o.product_category_id) || ["Delivery", "Other"].indexOf(o.productcategory.name) !== -1), "productcategory.name");
      }).catch((error) => {
        useMixinDebug(error);
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1$1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(localModel).products, (p, index) => {
            return openBlock(), createElementBlock("div", {
              class: normalizeClass(["row q-pt-md q-pb-md q-col-gutter-xs", { "bg-grey-1": index % 2 !== 0 }]),
              key: index
            }, [
              createBaseVNode("div", _hoisted_2$1, [
                createBaseVNode("div", null, [
                  createTextVNode(toDisplayString(p.name) + " ", 1),
                  createBaseVNode("div", null, [
                    createBaseVNode("span", _hoisted_3$1, toDisplayString(unref(currencyFormat)(p.price)), 1),
                    nonEditableProducts.value.indexOf(p.product_id) === -1 && nonEditableProductCategories.value.indexOf(p.product.product_category_id) === -1 && unref(canEdit) ? (openBlock(), createElementBlock("a", {
                      key: 0,
                      onClick: ($event) => removeProduct(index),
                      class: "link text-caption"
                    }, "Remove", 8, _hoisted_4$1)) : createCommentVNode("", true)
                  ])
                ])
              ]),
              nonEditableProducts.value.indexOf(p.product_id) === -1 && nonEditableProductCategories.value.indexOf(p.product.product_category_id) === -1 && p.name !== "Pickup No Show" ? (openBlock(), createElementBlock("div", _hoisted_5$1, [
                createVNode(QInput, {
                  modelValue: p.qty,
                  "onUpdate:modelValue": [($event) => p.qty = $event, manualQty],
                  type: "number",
                  min: "1",
                  borderless: "",
                  label: `${p.product.unit_measurement.toUpperCase()}S`,
                  filled: "",
                  debounce: 500,
                  disable: loading.value || !unref(canEdit),
                  dense: "",
                  style: { "max-width": "150px" }
                }, createSlots({ _: 2 }, [
                  unref(canEdit) ? {
                    name: "prepend",
                    fn: withCtx(() => [
                      createVNode(QBtn, {
                        onClick: ($event) => minusQty(p),
                        color: "primary",
                        icon: "remove",
                        dense: "",
                        size: "sm",
                        disable: loading.value || !unref(canEdit),
                        round: "",
                        style: { "margin-right": "1px" }
                      }, null, 8, ["onClick", "disable"])
                    ]),
                    key: "0"
                  } : void 0,
                  unref(canEdit) ? {
                    name: "append",
                    fn: withCtx(() => [
                      createVNode(QBtn, {
                        onClick: ($event) => plusQty(p),
                        color: "primary",
                        icon: "add",
                        dense: "",
                        size: "sm",
                        disable: loading.value || !unref(canEdit),
                        round: ""
                      }, null, 8, ["onClick", "disable"])
                    ]),
                    key: "1"
                  } : void 0
                ]), 1032, ["modelValue", "onUpdate:modelValue", "label", "disable"])
              ])) : createCommentVNode("", true)
            ], 2);
          }), 128)),
          unref(localModel).id && unref(canEdit) ? (openBlock(), createElementBlock("div", _hoisted_6$1, [
            !unref(hasPickupNoShow) ? (openBlock(), createBlock(QBtn, {
              key: 0,
              label: !newProduct.product_id ? `Add a ${_ctx.$t("product.name")}` : `${newProduct.name}`,
              outline: "",
              "no-caps": "",
              color: "primary",
              icon: "add_circle",
              disable: loading.value,
              class: "full-width",
              rounded: ""
            }, {
              default: withCtx(() => [
                createVNode(QMenu, {
                  anchor: "center middle",
                  self: "center middle",
                  class: "soft-shadow add-product-menu"
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_7$1, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(unref(productListFiltered), (p) => {
                        return openBlock(), createElementBlock("div", {
                          class: "col-xs-12",
                          key: p.key
                        }, [
                          createBaseVNode("div", _hoisted_8$1, [
                            createVNode(QIcon, {
                              name: p.data[0].productcategory.icon,
                              size: "32px"
                            }, null, 8, ["name"]),
                            createTextVNode(" " + toDisplayString(p.key), 1)
                          ]),
                          createVNode(QList, {
                            separator: "",
                            style: { "max-height": "300px", "overflow": "auto" }
                          }, {
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
                                        createBaseVNode("div", _hoisted_9$1, toDisplayString(d.name), 1),
                                        createBaseVNode("div", _hoisted_10$1, toDisplayString(unref(currencyFormat)(d.unit_price)) + " per " + toDisplayString(d.unit_measurement), 1)
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
            }, 8, ["label", "disable"])) : createCommentVNode("", true)
          ])) : createCommentVNode("", true),
          unref(localModel).id ? (openBlock(), createElementBlock("div", _hoisted_11$1, [
            createVNode(QSeparator, { class: "q-mb-sm" }),
            createBaseVNode("div", _hoisted_12$1, [
              createBaseVNode("div", null, "Subtotal: " + toDisplayString(unref(currencyFormat)(unref(localModel).grand_total_price)), 1),
              createBaseVNode("div", null, "Total GST: " + toDisplayString(unref(currencyFormat)(unref(localModel).total_price_gst)), 1),
              createBaseVNode("div", _hoisted_13$1, "Total: " + toDisplayString(unref(currencyFormat)(unref(localModel).grand_total_price)), 1)
            ])
          ])) : createCommentVNode("", true),
          unref(canEdit) ? (openBlock(), createElementBlock("div", _hoisted_14$1, [
            unref(localModel).total_price > 0 ? (openBlock(), createElementBlock("div", _hoisted_15$1, [
              createVNode(QInput, {
                modelValue: gfDcCode.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => gfDcCode.value = $event),
                label: "Gift voucher / Discount code",
                outlined: "",
                dense: ""
              }, {
                append: withCtx(() => [
                  createVNode(QBtn, {
                    onClick: _cache[0] || (_cache[0] = ($event) => checkGvDc()),
                    label: "Apply",
                    color: "primary",
                    disable: !gfDcCode.value,
                    size: "sm",
                    rounded: ""
                  }, null, 8, ["disable"])
                ]),
                _: 1
              }, 8, ["modelValue"])
            ])) : createCommentVNode("", true)
          ])) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_16$1, [
            createBaseVNode("div", _hoisted_17$1, [
              createVNode(QBtn, {
                onClick: _cache[2] || (_cache[2] = ($event) => unref(openURL)(`/api/public/invoice/pdf/${unref(localModel).id}`)),
                icon: "picture_as_pdf",
                title: "Download Invoice PDF",
                flat: "",
                round: "",
                class: "q-mr-xs"
              }),
              unref(canSend) ? (openBlock(), createBlock(QBtn, {
                key: 0,
                onClick: _cache[3] || (_cache[3] = ($event) => !unref(hasPickupNoShow) ? doSendPaymentRequest("sms") : sendPaymentRequestSms()),
                icon: "chat",
                title: "Send SMS Payment Request",
                flat: "",
                disable: sendingPaymentRequest.value,
                round: ""
              }, null, 8, ["disable"])) : createCommentVNode("", true),
              createVNode(QSpace),
              unref(canSend) ? (openBlock(), createBlock(QBtn, {
                key: 1,
                onClick: _cache[4] || (_cache[4] = ($event) => doSendPaymentRequest("email")),
                icon: "mail",
                label: "Send Payment Request",
                push: "",
                color: "primary",
                disable: sendingPaymentRequest.value,
                rounded: ""
              }, null, 8, ["disable"])) : createCommentVNode("", true)
            ]),
            unref(localModel).sent_for_payment && unref(localModel).status !== "PAID" ? (openBlock(), createElementBlock("div", _hoisted_18$1, [
              createVNode(QSeparator, { class: "q-mt-md q-mb-sm" }),
              createTextVNode(" Sent for payment: " + toDisplayString(unref(dateTimeTz)(unref(localModel).sent_for_payment)), 1),
              _hoisted_19$1,
              createTextVNode("Due: " + toDisplayString(unref(localModel).due_date), 1)
            ])) : createCommentVNode("", true)
          ])
        ]),
        createVNode(QDialog, {
          modelValue: sendPaymentModal.value.show,
          "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => sendPaymentModal.value.show = $event)
        }, {
          default: withCtx(() => [
            createVNode(QCard, { class: "modal" }, {
              default: withCtx(() => [
                createVNode(QToolbar, { class: "bg-primary text-white" }, {
                  default: withCtx(() => [
                    createVNode(QToolbarTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("Send for payment")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(QCardSection, null, {
                  default: withCtx(() => [
                    !unref(hasPickupNoShow) ? (openBlock(), createElementBlock("div", _hoisted_20$1, [
                      _hoisted_21$1,
                      createBaseVNode("div", _hoisted_22$1, [
                        createBaseVNode("div", _hoisted_23$1, [
                          createVNode(_sfc_main$2, {
                            modelValue: sendPaymentModal.value.scheduled_delivery_date,
                            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => sendPaymentModal.value.scheduled_delivery_date = $event),
                            label: "Scheduled delivery date",
                            outlined: true,
                            invalid: !unref(hasPickupNoShow) && !sendPaymentModal.value.scheduled_delivery_date
                          }, null, 8, ["modelValue", "invalid"])
                        ]),
                        createBaseVNode("div", _hoisted_24$1, [
                          createVNode(QSelect, {
                            modelValue: sendPaymentModal.value.scheduled_delivery_time,
                            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => sendPaymentModal.value.scheduled_delivery_time = $event),
                            label: "Scheduled delivery time",
                            outlined: true,
                            options: unref(hourBookingOptions),
                            error: !unref(hasPickupNoShow) && !sendPaymentModal.value.scheduled_delivery_time,
                            "map-options": "",
                            "emit-value": ""
                          }, null, 8, ["modelValue", "options", "error"])
                        ])
                      ])
                    ])) : createCommentVNode("", true),
                    createVNode(QInput, {
                      modelValue: sendPaymentModal.value.content,
                      "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => sendPaymentModal.value.content = $event),
                      type: "textarea",
                      outlined: "",
                      rows: "3",
                      label: "Enter any notes for the customer",
                      class: "q-mt-sm"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(QCardActions, null, {
                  default: withCtx(() => [
                    withDirectives(createVNode(QBtn, {
                      flat: "",
                      color: "secondary",
                      label: "Cancel",
                      rounded: ""
                    }, null, 512), [
                      [ClosePopup]
                    ]),
                    createVNode(QSpace),
                    createVNode(QBtn, {
                      onClick: _cache[8] || (_cache[8] = ($event) => sendPaymentRequest()),
                      color: "primary",
                      label: "Send via email",
                      rounded: "",
                      disable: sendingPaymentRequest.value || !unref(hasPickupNoShow) && (!sendPaymentModal.value.scheduled_delivery_date || !sendPaymentModal.value.scheduled_delivery_time)
                    }, null, 8, ["disable"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"]),
        createVNode(QDialog, {
          modelValue: sendPaymentModalSms.value.show,
          "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => sendPaymentModalSms.value.show = $event)
        }, {
          default: withCtx(() => [
            createVNode(QCard, { class: "modal" }, {
              default: withCtx(() => [
                createVNode(QToolbar, { class: "bg-primary text-white" }, {
                  default: withCtx(() => [
                    createVNode(QToolbarTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("Send for payment")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(QCardSection, null, {
                  default: withCtx(() => [
                    _hoisted_25$1,
                    createBaseVNode("div", _hoisted_26$1, [
                      createBaseVNode("div", _hoisted_27$1, [
                        createVNode(_sfc_main$2, {
                          modelValue: sendPaymentModalSms.value.scheduled_delivery_date,
                          "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => sendPaymentModalSms.value.scheduled_delivery_date = $event),
                          label: "Scheduled delivery date",
                          outlined: true,
                          invalid: !sendPaymentModalSms.value.scheduled_delivery_date
                        }, null, 8, ["modelValue", "invalid"])
                      ]),
                      createBaseVNode("div", _hoisted_28$1, [
                        createVNode(QSelect, {
                          modelValue: sendPaymentModalSms.value.scheduled_delivery_time,
                          "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => sendPaymentModalSms.value.scheduled_delivery_time = $event),
                          label: "Scheduled delivery time",
                          outlined: true,
                          options: unref(hourBookingOptions),
                          error: !sendPaymentModalSms.value.scheduled_delivery_time,
                          "map-options": "",
                          "emit-value": ""
                        }, null, 8, ["modelValue", "options", "error"])
                      ])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(QCardActions, null, {
                  default: withCtx(() => [
                    withDirectives(createVNode(QBtn, {
                      flat: "",
                      color: "secondary",
                      label: "Cancel",
                      rounded: ""
                    }, null, 512), [
                      [ClosePopup]
                    ]),
                    createVNode(QSpace),
                    createVNode(QBtn, {
                      onClick: _cache[12] || (_cache[12] = ($event) => sendPaymentRequestSms()),
                      color: "primary",
                      label: "Send via SMS",
                      rounded: "",
                      disable: sendingPaymentRequest.value || !sendPaymentModalSms.value.scheduled_delivery_date || !sendPaymentModalSms.value.scheduled_delivery_time
                    }, null, 8, ["disable"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 64);
    };
  }
});
const _hoisted_1 = { key: 1 };
const _hoisted_2 = { class: "row q-col-gutter-md" };
const _hoisted_3 = {
  key: 0,
  class: "col-xs-12 col-sm-6"
};
const _hoisted_4 = { class: "text-bold text-grey q-mt-md" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("div", null, null, -1);
const _hoisted_6 = { class: "col-xs-12 col-sm-6" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("div", { class: "text-bold text-grey q-mt-md" }, "PICKUP & DELIVERY", -1);
const _hoisted_8 = { key: 0 };
const _hoisted_9 = { key: 1 };
const _hoisted_10 = {
  key: 0,
  class: "row q-col-gutter-md q-mt-sm"
};
const _hoisted_11 = { class: "col-xs-12 col-sm-6" };
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("div", { class: "text-bold text-grey" }, "PICKUP DATE", -1);
const _hoisted_13 = { key: 0 };
const _hoisted_14 = { key: 1 };
const _hoisted_15 = { class: "col-xs-12 col-sm-6" };
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("div", { class: "text-bold text-grey" }, "PICKUP BETWEEN", -1);
const _hoisted_17 = { key: 0 };
const _hoisted_18 = { key: 1 };
const _hoisted_19 = { key: 1 };
const _hoisted_20 = { key: 0 };
const _hoisted_21 = { class: "text-bold text-grey q-mb-xs q-mt-md" };
const _hoisted_22 = { key: 0 };
const _hoisted_23 = {
  key: 1,
  class: "row q-col-gutter-md q-mt-sm"
};
const _hoisted_24 = { class: "col-xs-12 col-sm-6" };
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("div", { class: "text-bold text-grey" }, "SCHEDULED DELIVERY DATE", -1);
const _hoisted_26 = { key: 0 };
const _hoisted_27 = { key: 1 };
const _hoisted_28 = { class: "col-xs-12 col-sm-6" };
const _hoisted_29 = /* @__PURE__ */ createBaseVNode("div", { class: "text-bold text-grey" }, "DELIVER BETWEEN", -1);
const _hoisted_30 = { key: 0 };
const _hoisted_31 = { key: 0 };
const _hoisted_32 = { key: 2 };
const _hoisted_33 = { key: 1 };
const _hoisted_34 = { key: 0 };
const _hoisted_35 = { class: "text-bold text-grey q-mb-xs q-mt-md" };
const _hoisted_36 = { key: 0 };
const _hoisted_37 = /* @__PURE__ */ createBaseVNode("div", { class: "text-bold text-grey q-mt-md" }, "PRODUCTS", -1);
const _hoisted_38 = {
  key: 2,
  class: "q-mt-md"
};
const _hoisted_39 = { class: "row q-col-gutter-md" };
const _hoisted_40 = { class: "col-xs-12 col-sm-6 col-lg-3" };
const _hoisted_41 = {
  key: 0,
  class: "col-xs-12 col-sm-6 col-lg-4"
};
const _hoisted_42 = {
  key: 0,
  class: "q-mb-lg"
};
const _hoisted_43 = /* @__PURE__ */ createBaseVNode("p", null, "If the booking needs to occur multiple times a week, choose the days below:", -1);
const _hoisted_44 = {
  key: 1,
  class: "row q-col-gutter-md"
};
const _hoisted_45 = { class: "col-xs-12 col-sm-6 col-lg-3" };
const _hoisted_46 = { class: "col-xs-12 col-sm-6 col-lg-4" };
const _hoisted_47 = { class: "flex" };
const _hoisted_48 = { key: 1 };
const _hoisted_49 = {
  key: 0,
  class: "q-pa-md"
};
const _hoisted_50 = { class: "row q-col-gutter-md q-mb-sm" };
const _hoisted_51 = { class: "col-xs-12 col-sm-6" };
const _hoisted_52 = { class: "row q-col-gutter-md" };
const _hoisted_53 = { class: "q-mt-md text-right" };
const _hoisted_54 = { key: 0 };
const _hoisted_55 = { key: 1 };
const _hoisted_56 = { key: 2 };
const _hoisted_57 = { class: "text-grey-7 text-caption" };
const _hoisted_58 = { key: 0 };
const _hoisted_59 = {
  key: 0,
  class: "q-ml-xs q-mr-xs"
};
const _hoisted_60 = { class: "text-grey-7" };
const _hoisted_61 = {
  key: 0,
  class: "q-mr-sm"
};
const _hoisted_62 = {
  key: 0,
  class: "row q-col-gutter-md q-mb-md"
};
const _hoisted_63 = { class: "col-xs-12 col-sm-6" };
const _hoisted_64 = /* @__PURE__ */ createBaseVNode("div", { class: "text-grey text-bold" }, "PICKUP DATE", -1);
const _hoisted_65 = { class: "col-xs-12 col-sm-6" };
const _hoisted_66 = /* @__PURE__ */ createBaseVNode("div", { class: "text-grey text-bold" }, "PICKUP TIME", -1);
const _hoisted_67 = { key: 0 };
const _hoisted_68 = { key: 1 };
const _hoisted_69 = {
  key: 1,
  class: "row q-col-gutter-md q-mb-md"
};
const _hoisted_70 = { class: "col-xs-12 col-sm-6" };
const _hoisted_71 = /* @__PURE__ */ createBaseVNode("div", { class: "text-grey text-bold" }, "DELIVERY DATE", -1);
const _hoisted_72 = { class: "col-xs-12 col-sm-6" };
const _hoisted_73 = /* @__PURE__ */ createBaseVNode("div", { class: "text-grey text-bold" }, "DELIVERY TIME", -1);
const _hoisted_74 = { key: 0 };
const _hoisted_75 = { key: 1 };
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
    const router = useRouter();
    const bus = inject("bus");
    const i18n = useI18n();
    const categories = ref();
    const invoiceTab = ref("products");
    const bookingTab = ref("details");
    const tax = ref();
    const agreedTimeOptions = ref([]);
    const localModel = computed(() => props.model);
    const { user } = useMixinSecurity();
    const showCancelOrder = ref(false);
    const loadingCancel = ref(false);
    const showChangesOrder = ref(false);
    const loadingChanges = ref(false);
    const common = useMixinCommon();
    const changes = ref({
      date: false,
      date_model: null,
      time: false,
      time_model: null,
      agreed_time_model: null,
      contractor: false,
      dateDelivery: false,
      dateDelivery_model: null,
      timeDelivery: false,
      timeDelivery_model: null,
      agreed_timeDelivery_model: null
    });
    const activeChangeReasons = ref();
    const rules = {
      team_id: { required },
      scheduled_pickup_date: { required },
      scheduled_pickup_time: { required },
      status: { required },
      productcategories: { required },
      recurring: { requiredIf: requiredIf(() => localModel.value.recurring_order) },
      recurring_every: { requiredIf: requiredIf(() => localModel.value.recurring_order) },
      recurring_end_type: { requiredIf: requiredIf(() => localModel.value.recurring_order) },
      recurring_end: { requiredIf: requiredIf(() => localModel.value.recurring_order && localModel.value.recurring_end_type !== "Never") }
    };
    const loading = ref(false);
    const $v = useVuelidate(rules, localModel, { $scope: false });
    const canEdit = computed(() => {
      if (["awaiting_payment", "PAID", "completed", "cancelled"].indexOf(props.model.status) !== -1 && !props.model.recurring) {
        return false;
      }
      return true;
    });
    const canEditDelivery = computed(() => {
      if (["PAID", "completed", "cancelled"].indexOf(props.model.status) !== -1 && !props.model.recurring) {
        return false;
      }
      return true;
    });
    const recurringOccurenceOptions = computed(() => {
      if (localModel.value && localModel.value.recurring === "Day") {
        return arrayRange(1, 50, 1, true);
      }
      if (localModel.value && localModel.value.recurring === "Week") {
        return arrayRange(1, 12, 1, true);
      }
      if (localModel.value && localModel.value.recurring === "Month") {
        return arrayRange(1, 3, 1, true);
      }
      return arrayRange(1, 50, 1, true);
    });
    const doSavePut = () => {
      loading.value = true;
      if (changes.value.date) {
        localModel.value.scheduled_pickup_date = changes.value.date_model;
      }
      if (changes.value.time) {
        localModel.value.scheduled_pickup_time = changes.value.time_model;
      }
      localModel.value.agreed_pickup_time = changes.value.agreed_time_model;
      if (changes.value.dateDelivery) {
        localModel.value.scheduled_delivery_date = changes.value.dateDelivery_model;
      }
      if (changes.value.timeDelivery) {
        localModel.value.scheduled_delivery_time = changes.value.timeDelivery_model;
      }
      localModel.value.agreed_delivery_time = changes.value.agreed_timeDelivery_model;
      api.put(`/public/order/${props.model.id}`, localModel.value).then(() => {
        doNotify("positive", "Saved");
        emits("update:order");
        bus.emit("getDashboardStats");
        loading.value = false;
        changes.value.date_model = JSON.parse(JSON.stringify(localModel.value.scheduled_pickup_date));
        changes.value.time_model = JSON.parse(JSON.stringify(localModel.value.scheduled_pickup_time));
        changes.value.date = false;
        changes.value.time = false;
        changes.value.dateDelivery_model = JSON.parse(JSON.stringify(localModel.value.scheduled_delivery_date));
        changes.value.timeDelivery_model = JSON.parse(JSON.stringify(localModel.value.scheduled_delivery_time));
        changes.value.dateDelivery = false;
        changes.value.timeDelivery = false;
        changes.value.contractor = false;
        showChangesOrder.value = false;
      }).catch((error) => {
        loading.value = false;
        useMixinDebug(error);
      });
    };
    const doSave = () => {
      if (localModel.value.recurring_parent_id) {
        Dialog.create({
          title: "Recurring Booking",
          message: 'This will only update the details of this booking. To make changes to all future recurring bookings, click "Edit Master Booking"',
          ok: {
            color: "primary",
            rounded: true,
            label: "Update"
          },
          cancel: {
            color: "secondary",
            flat: true,
            rounded: true,
            label: "Edit Master Booking"
          }
        }).onOk(() => {
          doSavePut();
        }).onCancel(() => {
          router.push({ name: "order-edit", params: { id: localModel.value.recurring_parent_id } });
        });
      } else {
        doSavePut();
      }
    };
    const save = () => {
      if (changes.value.date_model !== localModel.value.scheduled_pickup_date || changes.value.time_model !== localModel.value.scheduled_pickup_time || changes.value.agreed_time_model !== localModel.value.agreed_pickup_time || changes.value.dateDelivery_model !== localModel.value.scheduled_delivery_date || changes.value.timeDelivery_model !== localModel.value.scheduled_delivery_time || changes.value.agreed_timeDelivery_model !== localModel.value.agreed_delivery_time) {
        if (changes.value.dateDelivery_model !== localModel.value.scheduled_delivery_date || changes.value.timeDelivery_model !== localModel.value.scheduled_delivery_time || changes.value.agreed_timeDelivery_model !== localModel.value.agreed_delivery_time) {
          activeChangeReasons.value = changeOrderReasonsDelivery;
        } else {
          activeChangeReasons.value = changeOrderReasons;
        }
        showChangesOrder.value = true;
      } else {
        doSave();
      }
    };
    const cancelOrder = () => {
      confirmDelete("This will cancel the order").onOk(() => {
        loadingCancel.value = true;
        api.put(`/public/order/cancel/${props.model.id}`, localModel.value).then(() => {
          emits("update:order");
          bus.emit("getDashboardStats");
          showCancelOrder.value = false;
          loadingCancel.value = false;
        }).catch((error) => {
          useMixinDebug(error);
        });
      });
    };
    const saveInvoice = () => {
      if (localModel.value && localModel.value.invoice) {
        loading.value = true;
        api.put(`/public/invoice/${localModel.value.invoice.id}`, localModel.value.invoice).then(() => {
          doNotify("positive", "Saved");
          emits("update:order");
          bus.emit("getDashboardStats");
          loading.value = false;
        }).catch((error) => {
          loading.value = false;
          useMixinDebug(error, bus);
        });
      }
    };
    const updateProducts = () => {
      emits("update:order", { onlyTotals: true });
    };
    const updateOrder = () => {
      emits("update:order");
    };
    const createInvoice = () => {
      confirmDelete(`This will create an invoice for the ${i18n.t("order.name")}`).onOk(() => {
        api.post(`/public/invoice/createfromorder/${props.model.id}`).then(() => {
          emits("update:order");
        }).catch((error) => {
          useMixinDebug(error);
        });
      });
    };
    const createInvoicePickupNoShow = () => {
      confirmDelete(`This will create a no show invoice for the ${i18n.t("order.name")}`).onOk(() => {
        api.post(`/public/invoice/createfromorderpickupnoshow/${props.model.id}`).then(() => {
          emits("update:order");
        }).catch((error) => {
          useMixinDebug(error);
        });
      });
    };
    const resetChangeModel = () => {
      changes.value.date = false;
      changes.value.time = false;
      changes.value.dateDelivery = false;
      changes.value.timeDelivery = false;
      changes.value.contractor = false;
      changes.value.date_model = JSON.parse(JSON.stringify(localModel.value.scheduled_pickup_date));
      changes.value.time_model = JSON.parse(JSON.stringify(localModel.value.scheduled_pickup_time));
      changes.value.agreed_time_model = JSON.parse(JSON.stringify(localModel.value.agreed_pickup_time));
      changes.value.dateDelivery_model = JSON.parse(JSON.stringify(localModel.value.scheduled_delivery_date));
      changes.value.timeDelivery_model = JSON.parse(JSON.stringify(localModel.value.scheduled_delivery_time));
      changes.value.agreed_timeDelivery_model = JSON.parse(JSON.stringify(localModel.value.agreed_delivery_time));
    };
    onMounted(async () => {
      categories.value = await productCategoriesVisibleBooking();
      api.get("/public/setting/tax").then((response) => {
        tax.value = { tax_enabled: response.data.tax_enabled, tax_rate: response.data.tax_rate };
      }).catch((error) => {
        useMixinDebug(error);
      });
      if (localModel.value.scheduled_pickup_time && !hourBookingOptions.find((o) => o.value === localModel.value.scheduled_pickup_time)) {
        hourBookingOptions.unshift({ value: "", label: "-----------", disable: true });
        hourBookingOptions.unshift({ value: localModel.value.scheduled_pickup_time, label: hourBookingDisplay(localModel.value.scheduled_pickup_time), disable: false });
      }
      changes.value.date_model = JSON.parse(JSON.stringify(localModel.value.scheduled_pickup_date));
      changes.value.time_model = JSON.parse(JSON.stringify(localModel.value.scheduled_pickup_time));
      changes.value.agreed_time_model = JSON.parse(JSON.stringify(localModel.value.agreed_pickup_time));
      changes.value.dateDelivery_model = JSON.parse(JSON.stringify(localModel.value.scheduled_delivery_date));
      changes.value.timeDelivery_model = JSON.parse(JSON.stringify(localModel.value.scheduled_delivery_time));
      changes.value.agreed_timeDelivery_model = JSON.parse(JSON.stringify(localModel.value.agreed_delivery_time));
      agreedTimeOptions.value = agreedTimes();
    });
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(QCard, null, {
          default: withCtx(() => [
            createVNode(QList, null, {
              default: withCtx(() => [
                createVNode(QExpansionItem, {
                  group: "orderEdit",
                  label: _ctx.$t("order.details"),
                  "header-class": "text-h6 bg-grey-3",
                  caption: "Update the booking details",
                  onClick: _cache[27] || (_cache[27] = ($event) => bookingTab.value = "details"),
                  "default-opened": unref(localModel).status === "cancelled"
                }, {
                  default: withCtx(() => [
                    createVNode(QCard, null, {
                      default: withCtx(() => [
                        createVNode(QCardSection, null, {
                          default: withCtx(() => {
                            var _a;
                            return [
                              createVNode(QTabs, {
                                modelValue: bookingTab.value,
                                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => bookingTab.value = $event),
                                align: "left",
                                class: "q-mb-md"
                              }, {
                                default: withCtx(() => [
                                  createVNode(QTab, {
                                    name: "details",
                                    label: "Details"
                                  }),
                                  createVNode(QTab, {
                                    name: "notes",
                                    label: "Notes"
                                  })
                                ]),
                                _: 1
                              }, 8, ["modelValue"]),
                              bookingTab.value === "notes" ? (openBlock(), createBlock(_sfc_main$3, {
                                key: 0,
                                notable_id: unref(localModel).id,
                                notable_type: "Order",
                                nobox: true
                              }, null, 8, ["notable_id"])) : createCommentVNode("", true),
                              bookingTab.value === "details" ? (openBlock(), createElementBlock("div", _hoisted_1, [
                                createVNode(QInput, {
                                  modelValue: unref(localModel).special_instructions,
                                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(localModel).special_instructions = $event),
                                  label: "Special Instructions",
                                  outlined: "",
                                  type: "textarea",
                                  autogrow: "",
                                  class: "q-mt-md",
                                  disable: !unref(canEdit)
                                }, null, 8, ["modelValue", "disable"]),
                                createBaseVNode("div", _hoisted_2, [
                                  unref(localModel).team.name ? (openBlock(), createElementBlock("div", _hoisted_3, [
                                    createBaseVNode("div", _hoisted_4, toDisplayString(_ctx.$t("team.name").toUpperCase()), 1),
                                    createBaseVNode("div", null, [
                                      createTextVNode(toDisplayString(unref(localModel).team.name) + " ", 1),
                                      createVNode(QBadge, {
                                        label: unref(localModel).team.type,
                                        color: "grey-7",
                                        class: "q-ml-sm"
                                      }, null, 8, ["label"])
                                    ]),
                                    createBaseVNode("div", null, [
                                      _hoisted_5,
                                      createBaseVNode("div", null, toDisplayString(unref(localModel).team.payment_terms === "Credit Card" ? "Credit Card" : "Account"), 1)
                                    ])
                                  ])) : createCommentVNode("", true),
                                  createBaseVNode("div", _hoisted_6, [
                                    _hoisted_7,
                                    unref(localModel).address1 ? (openBlock(), createElementBlock("div", _hoisted_8, toDisplayString(unref(localModel).address1), 1)) : createCommentVNode("", true),
                                    createBaseVNode("div", null, toDisplayString(unref(localModel).address2), 1),
                                    unref(localModel).suburbpostcoderegion ? (openBlock(), createElementBlock("div", _hoisted_9, toDisplayString(unref(localModel).suburbpostcoderegion.locality) + " " + toDisplayString(unref(localModel).suburbpostcoderegion.state) + " " + toDisplayString(unref(localModel).postcode), 1)) : createCommentVNode("", true)
                                  ])
                                ]),
                                unref(localModel).team_id ? (openBlock(), createElementBlock("div", _hoisted_10, [
                                  createBaseVNode("div", _hoisted_11, [
                                    _hoisted_12,
                                    !changes.value.date ? (openBlock(), createElementBlock("div", _hoisted_13, [
                                      createTextVNode(toDisplayString(unref(localModel).scheduled_pickup_date), 1),
                                      unref(canEdit) ? (openBlock(), createBlock(QBtn, {
                                        key: 0,
                                        onClick: _cache[2] || (_cache[2] = ($event) => changes.value.date = true),
                                        icon: "edit",
                                        flat: "",
                                        round: "",
                                        size: "sm",
                                        color: "grey-7",
                                        class: "q-ml-xs"
                                      })) : createCommentVNode("", true)
                                    ])) : createCommentVNode("", true),
                                    changes.value.date ? (openBlock(), createElementBlock("div", _hoisted_14, [
                                      createVNode(_sfc_main$2, {
                                        modelValue: changes.value.date_model,
                                        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => changes.value.date_model = $event),
                                        label: "Choose a pickup date",
                                        outlined: true,
                                        invalid: !changes.value.date_model,
                                        disable: !unref(canEdit)
                                      }, null, 8, ["modelValue", "invalid", "disable"])
                                    ])) : createCommentVNode("", true)
                                  ]),
                                  createBaseVNode("div", _hoisted_15, [
                                    _hoisted_16,
                                    !changes.value.time && unref(localModel).scheduled_pickup_time ? (openBlock(), createElementBlock("div", _hoisted_17, [
                                      createTextVNode(toDisplayString(unref(hourBookingDisplay)(unref(localModel).scheduled_pickup_time)), 1),
                                      unref(canEdit) ? (openBlock(), createBlock(QBtn, {
                                        key: 0,
                                        onClick: _cache[4] || (_cache[4] = ($event) => changes.value.time = true),
                                        icon: "edit",
                                        flat: "",
                                        round: "",
                                        size: "sm",
                                        color: "grey-7",
                                        class: "q-ml-xs"
                                      })) : createCommentVNode("", true),
                                      unref(localModel).agreed_pickup_time ? (openBlock(), createElementBlock("div", _hoisted_18, "Agreed: " + toDisplayString(unref(hourAgreedDisplay)(unref(localModel).agreed_pickup_time)), 1)) : createCommentVNode("", true)
                                    ])) : createCommentVNode("", true),
                                    changes.value.time ? (openBlock(), createElementBlock("div", _hoisted_19, [
                                      createVNode(QSelect, {
                                        modelValue: changes.value.time_model,
                                        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => changes.value.time_model = $event),
                                        label: _ctx.$t("order.scheduledPickupTime"),
                                        invalid: !changes.value.time_model,
                                        options: unref(hourBookingOptions),
                                        "emit-value": "",
                                        "map-options": "",
                                        disable: !unref(canEdit),
                                        outlined: ""
                                      }, null, 8, ["modelValue", "label", "invalid", "options", "disable"]),
                                      unref(canEdit) && changes.value.time || unref(localModel).agreed_pickup_time ? (openBlock(), createElementBlock("div", _hoisted_20, [
                                        createBaseVNode("div", _hoisted_21, [
                                          createTextVNode("AGREED PICKUP TIME "),
                                          changes.value.agreed_time_model && changes.value.time ? (openBlock(), createElementBlock("a", {
                                            key: 0,
                                            onClick: _cache[6] || (_cache[6] = ($event) => changes.value.agreed_time_model = null),
                                            class: "link"
                                          }, "[RESET]")) : createCommentVNode("", true)
                                        ]),
                                        !changes.value.time && unref(localModel).agreed_pickup_time ? (openBlock(), createElementBlock("div", _hoisted_22, [
                                          createTextVNode(toDisplayString(unref(hourAgreedDisplay)(unref(localModel).agreed_pickup_time)), 1),
                                          unref(canEdit) ? (openBlock(), createBlock(QBtn, {
                                            key: 0,
                                            onClick: _cache[7] || (_cache[7] = ($event) => changes.value.time = true),
                                            icon: "edit",
                                            flat: "",
                                            round: "",
                                            size: "sm",
                                            color: "grey-7",
                                            class: "q-ml-xs"
                                          })) : createCommentVNode("", true)
                                        ])) : createCommentVNode("", true),
                                        createVNode(QSelect, {
                                          modelValue: changes.value.agreed_time_model,
                                          "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => changes.value.agreed_time_model = $event),
                                          options: agreedTimeOptions.value,
                                          label: "Choose a time",
                                          outlined: "",
                                          "map-options": "",
                                          "emit-value": ""
                                        }, null, 8, ["modelValue", "options"])
                                      ])) : createCommentVNode("", true)
                                    ])) : createCommentVNode("", true)
                                  ])
                                ])) : createCommentVNode("", true),
                                unref(localModel).scheduled_delivery_date || ["ready_for_delivery", "awaiting_payment"].indexOf(unref(localModel).status) !== -1 ? (openBlock(), createElementBlock("div", _hoisted_23, [
                                  createBaseVNode("div", _hoisted_24, [
                                    _hoisted_25,
                                    !changes.value.dateDelivery ? (openBlock(), createElementBlock("div", _hoisted_26, [
                                      createTextVNode(toDisplayString(unref(localModel).scheduled_delivery_date), 1),
                                      unref(canEditDelivery) ? (openBlock(), createBlock(QBtn, {
                                        key: 0,
                                        onClick: _cache[9] || (_cache[9] = ($event) => changes.value.dateDelivery = true),
                                        icon: "edit",
                                        flat: "",
                                        round: "",
                                        size: "sm",
                                        color: "grey-7",
                                        class: "q-ml-xs"
                                      })) : createCommentVNode("", true)
                                    ])) : createCommentVNode("", true),
                                    changes.value.dateDelivery ? (openBlock(), createElementBlock("div", _hoisted_27, [
                                      createVNode(_sfc_main$2, {
                                        modelValue: changes.value.dateDelivery_model,
                                        "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => changes.value.dateDelivery_model = $event),
                                        label: "Choose a delivery date",
                                        outlined: true,
                                        invalid: !changes.value.dateDelivery_model,
                                        disable: !unref(canEditDelivery)
                                      }, null, 8, ["modelValue", "invalid", "disable"])
                                    ])) : createCommentVNode("", true)
                                  ]),
                                  createBaseVNode("div", _hoisted_28, [
                                    _hoisted_29,
                                    !changes.value.timeDelivery ? (openBlock(), createElementBlock("div", _hoisted_30, [
                                      unref(localModel).scheduled_delivery_time ? (openBlock(), createElementBlock("span", _hoisted_31, toDisplayString(unref(hourBookingDisplay)(unref(localModel).scheduled_delivery_time)), 1)) : createCommentVNode("", true),
                                      unref(canEditDelivery) ? (openBlock(), createBlock(QBtn, {
                                        key: 1,
                                        onClick: _cache[11] || (_cache[11] = ($event) => changes.value.timeDelivery = true),
                                        icon: "edit",
                                        flat: "",
                                        round: "",
                                        size: "sm",
                                        color: "grey-7",
                                        class: "q-ml-xs"
                                      })) : createCommentVNode("", true),
                                      unref(localModel).agreed_delivery_time ? (openBlock(), createElementBlock("div", _hoisted_32, "Agreed: " + toDisplayString(unref(hourAgreedDisplay)(unref(localModel).agreed_delivery_time)), 1)) : createCommentVNode("", true)
                                    ])) : createCommentVNode("", true),
                                    changes.value.timeDelivery ? (openBlock(), createElementBlock("div", _hoisted_33, [
                                      createVNode(QSelect, {
                                        modelValue: changes.value.timeDelivery_model,
                                        "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => changes.value.timeDelivery_model = $event),
                                        label: _ctx.$t("order.scheduledDeliveryTime"),
                                        invalid: !changes.value.timeDelivery_model,
                                        options: unref(hourBookingOptions),
                                        "emit-value": "",
                                        "map-options": "",
                                        disable: !unref(canEditDelivery),
                                        outlined: ""
                                      }, null, 8, ["modelValue", "label", "invalid", "options", "disable"]),
                                      unref(canEdit) && changes.value.timeDelivery || unref(localModel).agreed_delivery_time ? (openBlock(), createElementBlock("div", _hoisted_34, [
                                        createBaseVNode("div", _hoisted_35, [
                                          createTextVNode("AGREED DELIVERY TIME "),
                                          changes.value.agreed_timeDelivery_model && changes.value.timeDelivery ? (openBlock(), createElementBlock("a", {
                                            key: 0,
                                            onClick: _cache[13] || (_cache[13] = ($event) => changes.value.agreed_timeDelivery_model = null),
                                            class: "link"
                                          }, "[RESET]")) : createCommentVNode("", true)
                                        ]),
                                        !changes.value.timeDelivery && unref(localModel).agreed_delivery_time ? (openBlock(), createElementBlock("div", _hoisted_36, [
                                          createTextVNode(toDisplayString(unref(hourAgreedDisplay)(unref(localModel).agreed_delivery_time)), 1),
                                          unref(canEditDelivery) ? (openBlock(), createBlock(QBtn, {
                                            key: 0,
                                            onClick: _cache[14] || (_cache[14] = ($event) => changes.value.timeDelivery = true),
                                            icon: "edit",
                                            flat: "",
                                            round: "",
                                            size: "sm",
                                            color: "grey-7",
                                            class: "q-ml-xs"
                                          })) : createCommentVNode("", true)
                                        ])) : createCommentVNode("", true),
                                        createVNode(QSelect, {
                                          modelValue: changes.value.agreed_timeDelivery_model,
                                          "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => changes.value.agreed_timeDelivery_model = $event),
                                          options: agreedTimeOptions.value,
                                          label: "Choose a time",
                                          outlined: "",
                                          "map-options": "",
                                          "emit-value": ""
                                        }, null, 8, ["modelValue", "options"])
                                      ])) : createCommentVNode("", true)
                                    ])) : createCommentVNode("", true)
                                  ])
                                ])) : createCommentVNode("", true),
                                _hoisted_37,
                                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(localModel).productcategories, (c) => {
                                  return openBlock(), createElementBlock("div", {
                                    key: c.id
                                  }, [
                                    c.meta ? (openBlock(), createBlock(QCheckbox, {
                                      key: 0,
                                      modelValue: c.meta.pivot_active,
                                      "onUpdate:modelValue": ($event) => c.meta.pivot_active = $event,
                                      label: c.name,
                                      disable: !unref(canEdit)
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "disable"])) : createCommentVNode("", true)
                                  ]);
                                }), 128)),
                                !unref(localModel).recurring_parent_id && ((_a = unref(common)) == null ? void 0 : _a.operating_country) === "nzd" ? (openBlock(), createElementBlock("div", _hoisted_38, [
                                  createVNode(QToggle, {
                                    modelValue: unref(localModel).recurring_order,
                                    "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => unref(localModel).recurring_order = $event),
                                    label: _ctx.$t("order.recurring")
                                  }, null, 8, ["modelValue", "label"]),
                                  unref(localModel).recurring_order ? (openBlock(), createElementBlock("div", {
                                    key: 0,
                                    class: normalizeClass(["q-pa-md q-mt-sm", { "bg-grey-1": !_ctx.$q.dark.isActive }])
                                  }, [
                                    createBaseVNode("div", _hoisted_39, [
                                      createBaseVNode("div", _hoisted_40, [
                                        createVNode(QSelect, {
                                          modelValue: unref(localModel).recurring,
                                          "onUpdate:modelValue": [
                                            _cache[17] || (_cache[17] = ($event) => unref(localModel).recurring = $event),
                                            _cache[18] || (_cache[18] = ($event) => unref(localModel).recurring_end = "")
                                          ],
                                          label: _ctx.$t("order.recurringFrequency"),
                                          options: ["Week", "Month", "Day"],
                                          "bottom-slots": "",
                                          error: unref($v).recurring.$invalid,
                                          outlined: ""
                                        }, null, 8, ["modelValue", "label", "error"])
                                      ]),
                                      __props.model.recurring ? (openBlock(), createElementBlock("div", _hoisted_41, [
                                        createVNode(QSelect, {
                                          modelValue: unref(localModel).recurring_every,
                                          "onUpdate:modelValue": _cache[19] || (_cache[19] = ($event) => unref(localModel).recurring_every = $event),
                                          label: "Repeat every",
                                          options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
                                          error: unref($v).recurring_every.$invalid,
                                          outlined: ""
                                        }, {
                                          append: withCtx(() => [
                                            createVNode(QBadge, {
                                              label: `${unref(localModel).recurring}s`,
                                              color: "grey"
                                            }, null, 8, ["label"])
                                          ]),
                                          _: 1
                                        }, 8, ["modelValue", "error"])
                                      ])) : createCommentVNode("", true)
                                    ]),
                                    unref(localModel).recurring === "Week" ? (openBlock(), createElementBlock("div", _hoisted_42, [
                                      _hoisted_43,
                                      (openBlock(true), createElementBlock(Fragment, null, renderList(unref(localModel).recurring_days.days, (d) => {
                                        return openBlock(), createBlock(QBtn, {
                                          key: d.day,
                                          color: "primary",
                                          onClick: ($event) => d.active = !d.active,
                                          label: d.label,
                                          flat: !d.active,
                                          class: "q-mr-xs",
                                          size: "sm"
                                        }, null, 8, ["onClick", "label", "flat"]);
                                      }), 128))
                                    ])) : createCommentVNode("", true),
                                    __props.model.recurring ? (openBlock(), createElementBlock("div", _hoisted_44, [
                                      createBaseVNode("div", _hoisted_45, [
                                        createVNode(QSelect, {
                                          modelValue: unref(localModel).recurring_end_type,
                                          "onUpdate:modelValue": [
                                            _cache[20] || (_cache[20] = ($event) => unref(localModel).recurring_end_type = $event),
                                            _cache[21] || (_cache[21] = ($event) => unref(localModel).recurring_end = "")
                                          ],
                                          label: "Ends",
                                          options: ["After", "On", "Never"],
                                          error: unref($v).recurring_end_type.$invalid,
                                          outlined: ""
                                        }, null, 8, ["modelValue", "error"])
                                      ]),
                                      createBaseVNode("div", _hoisted_46, [
                                        unref(localModel).recurring_end_type === "After" ? (openBlock(), createBlock(QSelect, {
                                          key: 0,
                                          modelValue: unref(localModel).recurring_end,
                                          "onUpdate:modelValue": _cache[22] || (_cache[22] = ($event) => unref(localModel).recurring_end = $event),
                                          label: "Choose the amount",
                                          error: unref($v).recurring_end.$invalid,
                                          options: unref(recurringOccurenceOptions),
                                          outlined: ""
                                        }, {
                                          append: withCtx(() => [
                                            createVNode(QBadge, {
                                              label: "occurences",
                                              color: "grey"
                                            })
                                          ]),
                                          _: 1
                                        }, 8, ["modelValue", "error", "options"])) : createCommentVNode("", true),
                                        unref(localModel).recurring_end_type === "On" ? (openBlock(), createBlock(_sfc_main$2, {
                                          key: 1,
                                          modelValue: unref(localModel).recurring_end,
                                          "onUpdate:modelValue": _cache[23] || (_cache[23] = ($event) => unref(localModel).recurring_end = $event),
                                          label: "Choose an end date",
                                          outlined: true,
                                          invalid: unref($v).recurring_end.$invalid,
                                          disable: !unref(canEdit)
                                        }, null, 8, ["modelValue", "invalid", "disable"])) : createCommentVNode("", true)
                                      ])
                                    ])) : createCommentVNode("", true)
                                  ], 2)) : createCommentVNode("", true)
                                ])) : createCommentVNode("", true)
                              ])) : createCommentVNode("", true)
                            ];
                          }),
                          _: 1
                        }),
                        bookingTab.value === "details" ? (openBlock(), createBlock(QCardActions, { key: 0 }, {
                          default: withCtx(() => [
                            unref(localModel).status !== "cancelled" && (!unref(localModel).invoice || unref(localModel).invoice && unref(localModel).invoice.status !== "PAID") ? (openBlock(), createBlock(QBtn, {
                              key: 0,
                              onClick: _cache[24] || (_cache[24] = ($event) => showCancelOrder.value = true),
                              color: "red",
                              label: _ctx.$t("order.cancel"),
                              rounded: "",
                              flat: ""
                            }, null, 8, ["label"])) : createCommentVNode("", true),
                            createVNode(QSpace),
                            changes.value.time || changes.value.date || changes.value.timeDelivery || changes.value.dateDelivery || changes.value.contractor ? (openBlock(), createBlock(QBtn, {
                              key: 1,
                              label: _ctx.$t("actions.cancel"),
                              flat: "",
                              color: "secondary",
                              onClick: _cache[25] || (_cache[25] = ($event) => resetChangeModel()),
                              rounded: ""
                            }, null, 8, ["label"])) : createCommentVNode("", true),
                            createVNode(QBtn, {
                              disable: loading.value || unref($v).$invalid,
                              label: _ctx.$t("actions.update"),
                              color: "primary",
                              onClick: _cache[26] || (_cache[26] = ($event) => save()),
                              rounded: ""
                            }, null, 8, ["disable", "label"])
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["label", "default-opened"]),
                unref(localModel).status !== "cancelled" ? (openBlock(), createBlock(QExpansionItem, {
                  key: 0,
                  group: "orderEdit",
                  label: `${_ctx.$t("order.invoice")}${unref(localModel).invoice ? ` - #${unref(localModel).invoice.display_id}` : ""}`,
                  caption: " Create, update and delete products",
                  "header-class": "text-h6 bg-grey-3",
                  "default-opened": "",
                  onClick: _cache[39] || (_cache[39] = ($event) => invoiceTab.value = "products")
                }, {
                  default: withCtx(() => [
                    createVNode(QCard, null, {
                      default: withCtx(() => [
                        !unref(localModel).invoice ? (openBlock(), createBlock(QCardSection, { key: 0 }, {
                          default: withCtx(() => [
                            createBaseVNode("p", null, "No invoice has been created for this " + toDisplayString(_ctx.$t("order.name")) + ".", 1),
                            createBaseVNode("div", _hoisted_47, [
                              createVNode(QBtn, {
                                label: "Create invoice",
                                onClick: _cache[28] || (_cache[28] = ($event) => createInvoice()),
                                color: "primary",
                                icon: "add_circle",
                                rounded: "",
                                class: normalizeClass({ "q-mb-lg": _ctx.$q.screen.xs })
                              }, null, 8, ["class"]),
                              createVNode(QSpace),
                              createVNode(QBtn, {
                                label: "Create No Show invoice",
                                onClick: _cache[29] || (_cache[29] = ($event) => createInvoicePickupNoShow()),
                                color: "red",
                                icon: "add_circle",
                                rounded: "",
                                flat: ""
                              })
                            ])
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        unref(localModel).invoice ? (openBlock(), createElementBlock("div", _hoisted_48, [
                          createVNode(QTabs, {
                            modelValue: invoiceTab.value,
                            "onUpdate:modelValue": _cache[30] || (_cache[30] = ($event) => invoiceTab.value = $event),
                            align: "left"
                          }, {
                            default: withCtx(() => [
                              createVNode(QTab, {
                                name: "products",
                                label: `${_ctx.$t("product.namePlural")} (${unref(localModel).invoice.products.length})`
                              }, null, 8, ["label"]),
                              unref(user) && unref(user).role === "customer" ? (openBlock(), createBlock(QTab, {
                                key: 0,
                                name: "config",
                                label: _ctx.$t("order.invoiceConfiguration")
                              }, null, 8, ["label"])) : createCommentVNode("", true),
                              createVNode(QTab, {
                                name: "payments",
                                label: `${_ctx.$t("order.payments")} (${unref(localModel).invoice.payments.length})`
                              }, null, 8, ["label"]),
                              createVNode(QTab, {
                                name: "notes",
                                label: "Notes"
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue"]),
                          invoiceTab.value === "notes" ? (openBlock(), createElementBlock("div", _hoisted_49, [
                            createVNode(_sfc_main$3, {
                              notable_type: "Invoice",
                              notable_id: unref(localModel).invoice.id,
                              nobox: true
                            }, null, 8, ["notable_id"])
                          ])) : createCommentVNode("", true),
                          invoiceTab.value === "products" ? (openBlock(), createBlock(_sfc_main$1, {
                            key: 1,
                            invoice: unref(localModel).invoice,
                            "onUpdate:products": updateProducts,
                            team: unref(localModel).team,
                            "onUpdate:order": updateOrder,
                            categories: unref(localModel).productcategories
                          }, null, 8, ["invoice", "team", "categories"])) : createCommentVNode("", true),
                          invoiceTab.value === "config" ? (openBlock(), createBlock(QCardSection, { key: 2 }, {
                            default: withCtx(() => [
                              createBaseVNode("div", _hoisted_50, [
                                createBaseVNode("div", _hoisted_51, [
                                  createVNode(_sfc_main$2, {
                                    modelValue: unref(localModel).invoice.invoice_date,
                                    "onUpdate:modelValue": _cache[31] || (_cache[31] = ($event) => unref(localModel).invoice.invoice_date = $event),
                                    label: _ctx.$t("invoice.invoiceDate")
                                  }, null, 8, ["modelValue", "label"])
                                ]),
                                createVNode(QInput, {
                                  modelValue: unref(localModel).invoice.invoice_po,
                                  "onUpdate:modelValue": _cache[32] || (_cache[32] = ($event) => unref(localModel).invoice.invoice_po = $event),
                                  label: _ctx.$t("team.invoicePo"),
                                  class: "col-xs-12 col-sm-6",
                                  "bottom-slots": ""
                                }, null, 8, ["modelValue", "label"])
                              ]),
                              createVNode(QInput, {
                                modelValue: unref(localModel).invoice.invoice_name,
                                "onUpdate:modelValue": _cache[33] || (_cache[33] = ($event) => unref(localModel).invoice.invoice_name = $event),
                                label: _ctx.$t("team.invoiceName"),
                                "bottom-slots": ""
                              }, null, 8, ["modelValue", "label"]),
                              createVNode(_sfc_main$4, {
                                model: unref(localModel).invoice,
                                addressfields: { address1: "invoice_address1", address2: "invoice_address2", suburb_postcode_region_id: "invoice_address_suburb_postcode_region_id", postcode: "invoice_address_postcode", lat: "lat", lng: "lng", country_id: "invoice_address_country_id" },
                                placeholder: _ctx.$t("address.search"),
                                filled: true
                              }, null, 8, ["model", "placeholder"]),
                              createVNode(QInput, {
                                modelValue: unref(localModel).invoice.invoice_address1,
                                "onUpdate:modelValue": _cache[34] || (_cache[34] = ($event) => unref(localModel).invoice.invoice_address1 = $event),
                                label: _ctx.$t("address.line1"),
                                "bottom-slots": ""
                              }, null, 8, ["modelValue", "label"]),
                              createVNode(QInput, {
                                modelValue: unref(localModel).invoice.invoice_address2,
                                "onUpdate:modelValue": _cache[35] || (_cache[35] = ($event) => unref(localModel).invoice.invoice_address2 = $event),
                                label: _ctx.$t("address.line2"),
                                "bottom-slots": ""
                              }, null, 8, ["modelValue", "label"]),
                              createBaseVNode("div", _hoisted_52, [
                                createVNode(_sfc_main$5, {
                                  modelValue: unref(localModel).invoice.invoice_address_suburb_postcode_region_id,
                                  "onUpdate:modelValue": _cache[36] || (_cache[36] = ($event) => unref(localModel).invoice.invoice_address_suburb_postcode_region_id = $event),
                                  label: _ctx.$t("address.suburb"),
                                  class: "col-xs-12 col-sm-6"
                                }, null, 8, ["modelValue", "label"]),
                                createVNode(_sfc_main$6, {
                                  modelValue: unref(localModel).invoice.invoice_address_country_id,
                                  "onUpdate:modelValue": _cache[37] || (_cache[37] = ($event) => unref(localModel).invoice.invoice_address_country_id = $event),
                                  label: _ctx.$t("address.country"),
                                  class: "col-xs-12 col-sm-6"
                                }, null, 8, ["modelValue", "label"])
                              ]),
                              createBaseVNode("div", _hoisted_53, [
                                createVNode(QBtn, {
                                  disable: loading.value || unref($v).$invalid,
                                  label: _ctx.$t("actions.update"),
                                  color: "primary",
                                  onClick: _cache[38] || (_cache[38] = ($event) => saveInvoice()),
                                  rounded: ""
                                }, null, 8, ["disable", "label"])
                              ])
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          invoiceTab.value === "audit" ? (openBlock(), createBlock(_sfc_main$7, {
                            key: 3,
                            auditable_type: "Invoice",
                            auditable_id: unref(localModel).invoice_id,
                            nobox: true
                          }, null, 8, ["auditable_id"])) : createCommentVNode("", true),
                          invoiceTab.value === "mail" ? (openBlock(), createBlock(_sfc_main$8, {
                            key: 4,
                            notifiable_type: "Invoice",
                            notifiable_id: unref(localModel).invoice_id,
                            flat: true
                          }, null, 8, ["notifiable_id"])) : createCommentVNode("", true),
                          invoiceTab.value === "payments" ? (openBlock(), createBlock(QCardSection, {
                            key: 5,
                            style: { "min-height": "300px" },
                            class: "q-pt-sm"
                          }, {
                            default: withCtx(() => [
                              createVNode(QList, { separator: "" }, {
                                default: withCtx(() => [
                                  !__props.model.invoice.payments.length ? (openBlock(), createBlock(QItem, {
                                    key: 0,
                                    class: "q-pa-none"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(QItemSection, null, {
                                        default: withCtx(() => [
                                          createTextVNode("No payments found")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  (openBlock(true), createElementBlock(Fragment, null, renderList(__props.model.invoice.payments, (p) => {
                                    return openBlock(), createBlock(QItem, {
                                      key: p.id,
                                      class: "q-pl-none q-pr-none"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(QItemSection, null, {
                                          default: withCtx(() => [
                                            createBaseVNode("div", null, [
                                              createBaseVNode("div", null, [
                                                createBaseVNode("strong", null, toDisplayString(unref(currencyFormat)(p.grand_total)), 1),
                                                createTextVNode(" - " + toDisplayString(p.method), 1)
                                              ]),
                                              createBaseVNode("div", null, toDisplayString(unref(dateTimeTz)(p.created_at)), 1)
                                            ])
                                          ]),
                                          _: 2
                                        }, 1024)
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
                        ])) : createCommentVNode("", true)
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
        __props.futureRecurring && __props.futureRecurring.length ? (openBlock(), createBlock(QCard, {
          key: 0,
          class: "q-mb-md q-mt-md"
        }, {
          default: withCtx(() => [
            createVNode(QList, { separator: "" }, {
              default: withCtx(() => [
                createVNode(QItemLabel, {
                  header: "",
                  class: "text-grey-8 text-bold"
                }, {
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
                            class: "link"
                          }, {
                            default: withCtx(() => [
                              o.scheduled_pickup_date ? (openBlock(), createElementBlock("span", _hoisted_54, toDisplayString(unref(displayDateDay)(o.scheduled_pickup_date)), 1)) : createCommentVNode("", true),
                              createTextVNode(" " + toDisplayString(o.scheduled_pickup_date) + " (", 1),
                              !o.agreed_pickup_time && o.scheduled_pickup_time ? (openBlock(), createElementBlock("span", _hoisted_55, toDisplayString(unref(hourBookingDisplay)(o.scheduled_pickup_time)), 1)) : createCommentVNode("", true),
                              o.agreed_pickup_time ? (openBlock(), createElementBlock("span", _hoisted_56, toDisplayString(unref(hourAgreedDisplay)(o.agreed_pickup_time)), 1)) : createCommentVNode("", true),
                              createTextVNode(")")
                            ]),
                            _: 2
                          }, 1032, ["to"])
                        ]),
                        createVNode(QSpace),
                        createBaseVNode("div", _hoisted_57, [
                          createVNode(QIcon, {
                            name: "settings",
                            color: "grey-7"
                          }),
                          createTextVNode(),
                          o.productcategories ? (openBlock(), createElementBlock("span", _hoisted_58, [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(o.productcategories, (c, index) => {
                              return openBlock(), createElementBlock("span", {
                                key: c.id
                              }, [
                                createTextVNode(toDisplayString(c.name), 1),
                                index + 1 !== o.productcategories.length ? (openBlock(), createElementBlock("span", _hoisted_59, "&")) : createCommentVNode("", true)
                              ]);
                            }), 128)),
                            createTextVNode(" pickup with " + toDisplayString(o.team.name), 1)
                          ])) : createCommentVNode("", true)
                        ]),
                        createBaseVNode("div", _hoisted_60, [
                          createVNode(QIcon, {
                            name: "place",
                            color: "grey-7"
                          }),
                          createTextVNode(),
                          o.team.suburbpostcoderegion ? (openBlock(), createElementBlock("span", _hoisted_61, toDisplayString(o.team.suburbpostcoderegion.locality) + " " + toDisplayString(o.team.suburbpostcoderegion.state), 1)) : createCommentVNode("", true)
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
        })) : createCommentVNode("", true),
        createVNode(QDialog, {
          modelValue: showCancelOrder.value,
          "onUpdate:modelValue": _cache[44] || (_cache[44] = ($event) => showCancelOrder.value = $event)
        }, {
          default: withCtx(() => [
            createVNode(QCard, { class: "modal" }, {
              default: withCtx(() => [
                createVNode(QToolbar, { class: "bg-primary text-white" }, {
                  default: withCtx(() => [
                    createVNode(QToolbarTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("Booking #" + toDisplayString(unref(localModel).display_id) + " - Cancellation", 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(QCardSection, null, {
                  default: withCtx(() => [
                    createVNode(QSelect, {
                      modelValue: unref(localModel).cancel_reason,
                      "onUpdate:modelValue": _cache[40] || (_cache[40] = ($event) => unref(localModel).cancel_reason = $event),
                      label: "Reason for cancellation",
                      outlined: "",
                      options: unref(cancelOrderReasons),
                      "bottom-slots": ""
                    }, null, 8, ["modelValue", "options"]),
                    createVNode(QInput, {
                      modelValue: unref(localModel).cancel_notes,
                      "onUpdate:modelValue": _cache[41] || (_cache[41] = ($event) => unref(localModel).cancel_notes = $event),
                      label: "Extra notes for the customer",
                      type: "textarea",
                      rows: "3",
                      outlined: "",
                      "bottom-slots": ""
                    }, null, 8, ["modelValue"]),
                    createVNode(QCheckbox, {
                      modelValue: unref(localModel).cancel_rebook,
                      "onUpdate:modelValue": _cache[42] || (_cache[42] = ($event) => unref(localModel).cancel_rebook = $event),
                      label: "Booking needs rescheduling"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(QCardActions, null, {
                  default: withCtx(() => [
                    withDirectives(createVNode(QBtn, {
                      flat: "",
                      color: "secondary",
                      label: "Close",
                      rounded: ""
                    }, null, 512), [
                      [ClosePopup]
                    ]),
                    createVNode(QSpace),
                    createVNode(QBtn, {
                      onClick: _cache[43] || (_cache[43] = ($event) => cancelOrder()),
                      disable: !unref(localModel).cancel_reason || loadingCancel.value,
                      loading: loadingCancel.value,
                      label: "Cancel Booking",
                      color: "primary",
                      rounded: ""
                    }, null, 8, ["disable", "loading"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"]),
        createVNode(QDialog, {
          modelValue: showChangesOrder.value,
          "onUpdate:modelValue": _cache[48] || (_cache[48] = ($event) => showChangesOrder.value = $event)
        }, {
          default: withCtx(() => [
            createVNode(QCard, { class: "modal" }, {
              default: withCtx(() => [
                createVNode(QToolbar, { class: "bg-primary text-white" }, {
                  default: withCtx(() => [
                    createVNode(QToolbarTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("Booking #" + toDisplayString(unref(localModel).display_id) + " - Changes", 1)
                      ]),
                      _: 1
                    }),
                    createVNode(QSpace),
                    withDirectives(createVNode(QBtn, {
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
                    !__props.model.scheduled_delivery_date ? (openBlock(), createElementBlock("div", _hoisted_62, [
                      createBaseVNode("div", _hoisted_63, [
                        _hoisted_64,
                        createBaseVNode("div", null, toDisplayString(changes.value.date_model), 1)
                      ]),
                      createBaseVNode("div", _hoisted_65, [
                        _hoisted_66,
                        !changes.value.agreed_time_model ? (openBlock(), createElementBlock("div", _hoisted_67, toDisplayString(unref(hourBookingDisplay)(changes.value.time_model)), 1)) : createCommentVNode("", true),
                        changes.value.agreed_time_model ? (openBlock(), createElementBlock("div", _hoisted_68, toDisplayString(unref(hourAgreedDisplay)(changes.value.agreed_time_model)), 1)) : createCommentVNode("", true)
                      ])
                    ])) : createCommentVNode("", true),
                    __props.model.scheduled_delivery_date || __props.model.scheduled_delivery_time ? (openBlock(), createElementBlock("div", _hoisted_69, [
                      createBaseVNode("div", _hoisted_70, [
                        _hoisted_71,
                        createBaseVNode("div", null, toDisplayString(changes.value.dateDelivery_model), 1)
                      ]),
                      createBaseVNode("div", _hoisted_72, [
                        _hoisted_73,
                        !changes.value.agreed_timeDelivery_model ? (openBlock(), createElementBlock("div", _hoisted_74, toDisplayString(unref(hourBookingDisplay)(changes.value.timeDelivery_model)), 1)) : createCommentVNode("", true),
                        changes.value.agreed_timeDelivery_model ? (openBlock(), createElementBlock("div", _hoisted_75, toDisplayString(unref(hourAgreedDisplay)(changes.value.agreed_timeDelivery_model)), 1)) : createCommentVNode("", true)
                      ])
                    ])) : createCommentVNode("", true),
                    createVNode(QSelect, {
                      modelValue: unref(localModel).changes_reason,
                      "onUpdate:modelValue": _cache[45] || (_cache[45] = ($event) => unref(localModel).changes_reason = $event),
                      label: "Reason for change",
                      outlined: "",
                      options: activeChangeReasons.value,
                      "bottom-slots": ""
                    }, null, 8, ["modelValue", "options"]),
                    createVNode(QInput, {
                      modelValue: unref(localModel).changes_notes,
                      "onUpdate:modelValue": _cache[46] || (_cache[46] = ($event) => unref(localModel).changes_notes = $event),
                      label: "Extra notes for the customer",
                      type: "textarea",
                      rows: "3",
                      outlined: "",
                      "bottom-slots": ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(QCardActions, null, {
                  default: withCtx(() => [
                    withDirectives(createVNode(QBtn, {
                      flat: "",
                      color: "secondary",
                      label: "Close",
                      rounded: ""
                    }, null, 512), [
                      [ClosePopup]
                    ]),
                    createVNode(QSpace),
                    createVNode(QBtn, {
                      onClick: _cache[47] || (_cache[47] = ($event) => doSave()),
                      disable: !unref(localModel).changes_reason || loadingChanges.value || !changes.value.date_model || !changes.value.time_model,
                      loading: loadingChanges.value,
                      label: "Update Booking",
                      color: "primary",
                      rounded: ""
                    }, null, 8, ["disable", "loading"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 64);
    };
  }
});
export { _sfc_main as default };
