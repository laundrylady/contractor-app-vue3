import { Q as QLinearProgress } from "./QLinearProgress.a4b46bca.js";
import { A as defineComponent, r as ref, o as onMounted, w as watch, l as openBlock, m as createElementBlock, J as createBlock, y as createCommentVNode, K as withCtx, F as Fragment, bc as renderList, s as normalizeClass, k as createVNode, p as createBaseVNode, aH as toDisplayString, bs as QRadio, R as unref, P as QBtn } from "./index.0a73f961.js";
import { a as QItem, Q as QItemSection } from "./selection.0f6039c3.js";
import { Q as QList } from "./QList.79d8c960.js";
import { a as api } from "./axios.753e2493.js";
import { u as useMixinDebug } from "./debug.ffa51329.js";
import { _ as _sfc_main$1 } from "./UserAvatar.44d6fe9f.js";
import { h as hourBookingDisplay } from "./help.4d339a4c.js";
const _hoisted_1 = {
  key: 0,
  style: { "min-height": "100px" }
};
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "q-ml-sm q-mt-sm" }, "Finding available ladies / lads...", -1);
const _hoisted_3 = { key: 1 };
const _hoisted_4 = { class: "flex" };
const _hoisted_5 = { class: "q-ml-sm" };
const _hoisted_6 = { class: "text-primary" };
const _hoisted_7 = {
  key: 1,
  class: "q-mt-md"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "OrderContractorManagement",
  props: {
    modelValue: null,
    team_id: null,
    scheduled_pickup_date: null,
    scheduled_pickup_time: null,
    productcategories: null,
    disabled: { type: Boolean },
    reassign: { type: Boolean },
    suburb_postcode_region_id: null
  },
  emits: ["update:modelValue", "update:modelValueTime"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const loadingContractors = ref(false);
    const tmpContractorUserId = ref();
    const tmpTimeSelection = ref();
    const contractors = ref();
    const findAvailableContractors = () => {
      loadingContractors.value = true;
      api.post("/public/order/findcontractorstimes", {
        team_id: props.team_id,
        scheduled_pickup_date: props.scheduled_pickup_date,
        productcategories: props.productcategories,
        suburb_postcode_region_id: props.suburb_postcode_region_id
      }).then((response) => {
        contractors.value = response.data;
        loadingContractors.value = false;
        if (tmpContractorUserId.value) {
          if (!response.data.find((o) => o.key === tmpContractorUserId.value)) {
            emits("update:modelValue", null);
            tmpContractorUserId.value = null;
          }
        }
      });
    };
    const emitUpdate = () => {
      if (tmpTimeSelection.value) {
        const [contractorUserId, time] = tmpTimeSelection.value.split("|");
        tmpContractorUserId.value = contractorUserId ? parseFloat(contractorUserId) : null;
        emits("update:modelValue", tmpContractorUserId.value);
        emits("update:modelValueTime", time);
      }
    };
    const reAssign = () => {
      tmpContractorUserId.value = null;
      tmpTimeSelection.value = null;
      emits("update:modelValue", null);
      emits("update:modelValueTime", null);
      findAvailableContractors();
    };
    onMounted(() => {
      tmpContractorUserId.value = null;
      if (props.modelValue && props.scheduled_pickup_time) {
        api.get(`/public/user/contractor/details/${props.modelValue}`).then((response) => {
          if (props.scheduled_pickup_time) {
            contractors.value = [{
              key: response.data.id,
              data: [{
                user: response.data,
                id: 0,
                time: props.scheduled_pickup_time
              }]
            }];
            tmpContractorUserId.value = response.data.id;
            tmpTimeSelection.value = `${response.data.id}|${props.scheduled_pickup_time}`;
          }
        }).catch((error) => {
          useMixinDebug(error);
        });
      } else {
        findAvailableContractors();
      }
    });
    watch(() => props.scheduled_pickup_date, (newVal) => {
      if (newVal) {
        findAvailableContractors();
      }
    });
    watch(() => props.productcategories, (newVal, oldVal) => {
      if (newVal && oldVal && JSON.stringify(newVal) !== JSON.stringify(oldVal)) {
        findAvailableContractors();
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        loadingContractors.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
          loadingContractors.value ? (openBlock(), createBlock(QLinearProgress, {
            key: 0,
            indeterminate: ""
          })) : createCommentVNode("", true),
          _hoisted_2
        ])) : createCommentVNode("", true),
        contractors.value && !loadingContractors.value ? (openBlock(), createElementBlock("div", _hoisted_3, [
          contractors.value.length ? (openBlock(), createBlock(QList, {
            key: 0,
            separator: ""
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(contractors.value, (c) => {
                return openBlock(), createBlock(QItem, {
                  key: c.key,
                  class: normalizeClass({ "bg-pink-1": c.key === tmpContractorUserId.value })
                }, {
                  default: withCtx(() => [
                    createVNode(QItemSection, null, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_4, [
                          createVNode(_sfc_main$1, {
                            user: {
                              id: c.data[0].user.id,
                              first_name: c.data[0].user.first_name,
                              last_name: c.data[0].user.last_name,
                              fullname: c.data[0].user.fullname,
                              avatar: c.data[0].user.avatar
                            }
                          }, null, 8, ["user"]),
                          createBaseVNode("div", _hoisted_5, [
                            createBaseVNode("div", _hoisted_6, toDisplayString(c.data[0].user.fullname), 1),
                            (openBlock(true), createElementBlock(Fragment, null, renderList(c.data, (d) => {
                              return openBlock(), createElementBlock("div", {
                                key: d.id
                              }, [
                                createVNode(QRadio, {
                                  modelValue: tmpTimeSelection.value,
                                  "onUpdate:modelValue": [
                                    _cache[0] || (_cache[0] = ($event) => tmpTimeSelection.value = $event),
                                    emitUpdate
                                  ],
                                  val: `${d.user.id}|${d.time}`,
                                  label: `Pickup between ${unref(hourBookingDisplay)(d.time)}`
                                }, null, 8, ["modelValue", "val", "label"])
                              ]);
                            }), 128))
                          ])
                        ])
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["class"]);
              }), 128))
            ]),
            _: 1
          })) : createCommentVNode("", true),
          __props.reassign && __props.modelValue ? (openBlock(), createElementBlock("div", _hoisted_7, [
            createVNode(QBtn, {
              flat: "",
              onClick: _cache[1] || (_cache[1] = ($event) => reAssign()),
              label: "Choose a different lady/lad",
              color: "primary",
              icon: "sync",
              rounded: ""
            })
          ])) : createCommentVNode("", true)
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
export { _sfc_main as _ };
