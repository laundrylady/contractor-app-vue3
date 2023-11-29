import { U as createComponent, r as ref, g as computed, w as watch, bj as injectProp, h, j as getCurrentInstance, aH as QDialog, B as defineComponent, m as openBlock, K as createBlock, L as withCtx, l as createVNode, O as QIcon, S as unref, q as createBaseVNode, H as withDirectives, R as QBtn, N as QInput } from "./index.769a5324.js";
import { Q as QDate } from "./QDate.c2014765.js";
import { C as ClosePopup } from "./ClosePopup.4f03ad0b.js";
import { m as moment } from "./axios.4891fd4d.js";
import { u as useAnchorProps, a as useAnchor, Q as QMenu } from "./QMenu.b82f56f8.js";
import { u as useQuasar } from "./use-quasar.a43d8db7.js";
var QPopupProxy = createComponent({
  name: "QPopupProxy",
  props: {
    ...useAnchorProps,
    breakpoint: {
      type: [String, Number],
      default: 450
    }
  },
  emits: ["show", "hide"],
  setup(props, { slots, emit, attrs }) {
    const { proxy } = getCurrentInstance();
    const { $q } = proxy;
    const showing = ref(false);
    const popupRef = ref(null);
    const breakpoint = computed(() => parseInt(props.breakpoint, 10));
    const { canShow } = useAnchor({ showing });
    function getType() {
      return $q.screen.width < breakpoint.value || $q.screen.height < breakpoint.value ? "dialog" : "menu";
    }
    const type = ref(getType());
    const popupProps = computed(
      () => type.value === "menu" ? { maxHeight: "99vh" } : {}
    );
    watch(() => getType(), (val) => {
      if (showing.value !== true) {
        type.value = val;
      }
    });
    function onShow(evt) {
      showing.value = true;
      emit("show", evt);
    }
    function onHide(evt) {
      showing.value = false;
      type.value = getType();
      emit("hide", evt);
    }
    Object.assign(proxy, {
      show(evt) {
        canShow(evt) === true && popupRef.value.show(evt);
      },
      hide(evt) {
        popupRef.value.hide(evt);
      },
      toggle(evt) {
        popupRef.value.toggle(evt);
      }
    });
    injectProp(proxy, "currentComponent", () => ({
      type: type.value,
      ref: popupRef.value
    }));
    return () => {
      const data = {
        ref: popupRef,
        ...popupProps.value,
        ...attrs,
        onShow,
        onHide
      };
      let component;
      if (type.value === "dialog") {
        component = QDialog;
      } else {
        component = QMenu;
        Object.assign(data, {
          target: props.target,
          contextMenu: props.contextMenu,
          noParentEvent: true,
          separateClosePopup: true
        });
      }
      return h(component, data, slots.default);
    };
  }
});
const _hoisted_1 = { class: "row items-center justify-end" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DateField",
  props: {
    label: null,
    placeholder: null,
    invalid: { type: Boolean },
    modelValue: null,
    fdc: { type: Boolean },
    disabled: { type: Boolean },
    dark: { type: Boolean },
    previous: null,
    after: null,
    samePrevious: null,
    borderless: { type: Boolean },
    outlined: { type: Boolean },
    hint: null,
    year: null,
    filled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const $q = useQuasar();
    const hintCurrent = ref();
    const qDateProxy = ref();
    const fromCalendar = (val) => {
      if (qDateProxy.value) {
        qDateProxy.value.hide();
      }
      emits("update:modelValue", val);
    };
    const handleChange = (val) => {
      emits("update:modelValue", val);
    };
    const checkDate = () => {
      hintCurrent.value = false;
      if (props.modelValue) {
        let dateStr = props.modelValue;
        dateStr = dateStr.replace("/", "");
        dateStr = dateStr.replace("/", "");
        dateStr = dateStr.replace(/\D/g, "");
        dateStr = dateStr.replace(" ", "");
        if (dateStr.length < 6) {
          emits("update:modelValue", null);
          hintCurrent.value = "Please enter a valid date";
        } else {
          const dFm = dateStr;
          const dFd = dateStr;
          const dFy = dateStr;
          let dSday = dFd.slice(0, 2);
          dSday += "/";
          let dSmonth = dFm.slice(2, 4);
          dSmonth += "/";
          let dSyear = dFy.slice(4, 8);
          if (dSyear.length !== 4) {
            dSyear = dSyear.slice(0, 2);
            if (props.year) {
              dSyear = props.year + dSyear;
            } else {
              dSyear = `20${dSyear}`;
            }
          }
          const newDateStr = dSday + dSmonth + dSyear;
          if (newDateStr && !newDateStr.match("undefined")) {
            const mNewDateStr = moment(newDateStr, "DD/MM/YYYY");
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            if (mNewDateStr.isValid()) {
              let validDate = true;
              let hint = null;
              if (props.fdc) {
                if (!mNewDateStr.isAfter(today) && !mNewDateStr.isSame(today)) {
                  validDate = false;
                  $q.dialog({
                    title: "Invalid date",
                    message: `Please enter a date on or after ${props.after}`
                  });
                }
              }
              if (props.after) {
                if (!mNewDateStr.isSameOrAfter(moment(props.after, "DD/MM/YYYY"))) {
                  validDate = false;
                  hint = `Please enter a date on or after ${props.after}`;
                }
              }
              if (props.previous) {
                if (mNewDateStr.isAfter(today)) {
                  validDate = false;
                  hint = "Please enter a previous date";
                }
              }
              if (props.samePrevious) {
                if (!mNewDateStr.endOf("day").isSameOrBefore(moment(today).endOf("day"))) {
                  validDate = false;
                  hint = "Please enter a previous date";
                }
              }
              hintCurrent.value = hint;
              if (validDate) {
                emits("update:modelValue", newDateStr);
              } else {
                emits("update:modelValue", null);
              }
            } else {
              emits("update:modelValue", null);
              hintCurrent.value = "Please enter a valid date";
            }
          }
        }
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QInput, {
        filled: __props.filled,
        outlined: __props.outlined,
        "model-value": __props.modelValue,
        mask: "##/##/####",
        error: __props.invalid,
        label: __props.label,
        "error-message": "DD/MM/YYYY",
        hint: "DD/MM/YYYY",
        "onUpdate:modelValue": handleChange,
        onBlur: _cache[0] || (_cache[0] = ($event) => checkDate())
      }, {
        append: withCtx(() => [
          createVNode(QIcon, {
            name: "event",
            class: "cursor-pointer"
          }, {
            default: withCtx(() => [
              createVNode(unref(QPopupProxy), {
                cover: "",
                "transition-show": "scale",
                "transition-hide": "scale",
                ref_key: "qDateProxy",
                ref: qDateProxy
              }, {
                default: withCtx(() => [
                  createVNode(QDate, {
                    "model-value": __props.modelValue,
                    "onUpdate:modelValue": fromCalendar,
                    mask: "DD/MM/YYYY",
                    color: "secondary"
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_1, [
                        withDirectives(createVNode(QBtn, {
                          label: "Close",
                          color: "primary",
                          flat: ""
                        }, null, 512), [
                          [ClosePopup]
                        ])
                      ])
                    ]),
                    _: 1
                  }, 8, ["model-value"])
                ]),
                _: 1
              }, 512)
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["filled", "outlined", "model-value", "error", "label"]);
    };
  }
});
export { _sfc_main as _ };
