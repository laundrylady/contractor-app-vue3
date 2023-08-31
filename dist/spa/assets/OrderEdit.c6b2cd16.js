import { Q as QTab } from "./QTab.b779a109.js";
import { Q as QTabs } from "./QTabs.e3976c00.js";
import { S as createComponent, ab as useDarkProps, af as useFormProps, ac as useDark, bp as useFormAttrs, r as ref, f as computed, w as watch, D as nextTick, b0 as position, V as hSlot, h, g as getCurrentInstance, ah as useFormInject, bf as vmIsDestroyed, H as Transition, G as withDirectives, P as QBtn, A as defineComponent, i as inject, B as reactive, o as onMounted, l as openBlock, m as createElementBlock, p as createBaseVNode, F as Fragment, bc as renderList, s as normalizeClass, aG as createTextVNode, aH as toDisplayString, R as unref, y as createCommentVNode, k as createVNode, bG as createSlots, K as withCtx, M as QInput, bu as QSeparator, N as QIcon, J as createBlock, Q as QCard, L as QCardSection, aa as QCardActions, aE as QDialog, bw as resolveComponent, ai as QToggle, bd as QCheckbox } from "./index.09db86c6.js";
import { Q as QSelect } from "./QSelect.b914fb42.js";
import { T as TouchPan } from "./TouchPan.ed51a2bc.js";
import { u as useDatetimeProps, a as useDatetimeEmits, b as useDatetime, _ as __splitDate, g as getDayHash, f as formatDate } from "./QDate.089f4805.js";
import { p as pad } from "./format.3e32b8d9.js";
import { Q as QExpansionItem } from "./QExpansionItem.45704644.js";
import { a as QItem, Q as QItemSection } from "./QItemSection.0ff59c1c.js";
import { Q as QList } from "./QList.ea43f186.js";
import { Q as QItemLabel } from "./selection.b097d85c.js";
import { Q as QSpace } from "./QSpace.00179aa5.js";
import { u as useVuelidate, r as required } from "./index.esm.6d4c12da.js";
import { a as api } from "./axios.a630860f.js";
import { _ as _sfc_main$3 } from "./UserAvatar.52903f46.js";
import { _ as _sfc_main$8 } from "./AuditTimeline.b50171e4.js";
import { _ as _sfc_main$5 } from "./AddressSearch.f63bd426.js";
import { _ as _sfc_main$7 } from "./CountryField.9a73afe3.js";
import { _ as _sfc_main$4 } from "./DateField.cda1c79b.js";
import { _ as _sfc_main$6 } from "./PostcodeRegionField.d5ebf897.js";
import { Q as QMenu } from "./QMenu.f4a75668.js";
import { Q as QToolbar, a as QToolbarTitle } from "./QToolbarTitle.7a90d5c5.js";
import { C as ClosePopup } from "./ClosePopup.a0d8d2e6.js";
import { u as useMixinDebug } from "./debug.ffa51329.js";
import { q as groupBy, g as currencyFormat, t as dateTimeTz, c as confirmDelete, d as doNotify, b as hourBookingOptions, f as hourAgreedDisplay, e as displayDateDay, h as hourBookingDisplay } from "./help.43e74e3a.js";
import { _ as _sfc_main$2 } from "./GlobalNotes.d21c2feb.js";
import { _ as _sfc_main$9 } from "./GlobalNotifications.3d9ab2e2.js";
import { u as useMixinSecurity } from "./security.97007843.js";
import { p as productCategoriesVisibleBooking } from "./helpers.d110a097.js";
import { u as useI18n } from "./vue-i18n.runtime.esm-bundler.29e2b259.js";
import "./QResizeObserver.a19e64c4.js";
import "./rtl.b51694b1.js";
import "./touch.3df10340.js";
import "./use-cache.b0833c75.js";
import "./QSlideTransition.ce9f3a23.js";
import "./QImg.094f3ced.js";
import "./use-ratio.c4701a1c.js";
import "./QTable.ee3cea18.js";
import "./QMarkupTable.319b04dd.js";
import "./QLinearProgress.251b2a6a.js";
import "./use-fullscreen.197d76b4.js";
import "./use-quasar.27d9d9da.js";
import "./QBadge.604c1aaa.js";
function getViewByModel(model, withSeconds) {
  if (model.hour !== null) {
    if (model.minute === null) {
      return "minute";
    } else if (withSeconds === true && model.second === null) {
      return "second";
    }
  }
  return "hour";
}
function getCurrentTime() {
  const d = new Date();
  return {
    hour: d.getHours(),
    minute: d.getMinutes(),
    second: d.getSeconds(),
    millisecond: d.getMilliseconds()
  };
}
var QTime = createComponent({
  name: "QTime",
  props: {
    ...useDarkProps,
    ...useFormProps,
    ...useDatetimeProps,
    mask: {
      default: null
    },
    format24h: {
      type: Boolean,
      default: null
    },
    defaultDate: {
      type: String,
      validator: (v) => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(v)
    },
    options: Function,
    hourOptions: Array,
    minuteOptions: Array,
    secondOptions: Array,
    withSeconds: Boolean,
    nowBtn: Boolean
  },
  emits: useDatetimeEmits,
  setup(props, { slots, emit }) {
    const vm = getCurrentInstance();
    const { $q } = vm.proxy;
    const isDark = useDark(props, $q);
    const { tabindex, headerClass, getLocale, getCurrentDate } = useDatetime(props, $q);
    const formAttrs = useFormAttrs(props);
    const injectFormInput = useFormInject(formAttrs);
    let draggingClockRect, dragCache;
    const clockRef = ref(null);
    const mask = computed(() => getMask());
    const locale = computed(() => getLocale());
    const defaultDateModel = computed(() => getDefaultDateModel());
    const model = __splitDate(
      props.modelValue,
      mask.value,
      locale.value,
      props.calendar,
      defaultDateModel.value
    );
    const view = ref(getViewByModel(model));
    const innerModel = ref(model);
    const isAM = ref(model.hour === null || model.hour < 12);
    const classes = computed(
      () => `q-time q-time--${props.landscape === true ? "landscape" : "portrait"}` + (isDark.value === true ? " q-time--dark q-dark" : "") + (props.disable === true ? " disabled" : props.readonly === true ? " q-time--readonly" : "") + (props.bordered === true ? " q-time--bordered" : "") + (props.square === true ? " q-time--square no-border-radius" : "") + (props.flat === true ? " q-time--flat no-shadow" : "")
    );
    const stringModel = computed(() => {
      const time = innerModel.value;
      return {
        hour: time.hour === null ? "--" : computedFormat24h.value === true ? pad(time.hour) : String(
          isAM.value === true ? time.hour === 0 ? 12 : time.hour : time.hour > 12 ? time.hour - 12 : time.hour
        ),
        minute: time.minute === null ? "--" : pad(time.minute),
        second: time.second === null ? "--" : pad(time.second)
      };
    });
    const computedFormat24h = computed(() => props.format24h !== null ? props.format24h : $q.lang.date.format24h);
    const pointerStyle = computed(() => {
      const forHour = view.value === "hour", divider = forHour === true ? 12 : 60, amount = innerModel.value[view.value], degrees = Math.round(amount * (360 / divider)) - 180;
      let transform = `rotate(${degrees}deg) translateX(-50%)`;
      if (forHour === true && computedFormat24h.value === true && innerModel.value.hour >= 12) {
        transform += " scale(.7)";
      }
      return { transform };
    });
    const minLink = computed(() => innerModel.value.hour !== null);
    const secLink = computed(() => minLink.value === true && innerModel.value.minute !== null);
    const hourInSelection = computed(() => props.hourOptions !== void 0 ? (val) => props.hourOptions.includes(val) : props.options !== void 0 ? (val) => props.options(val, null, null) : null);
    const minuteInSelection = computed(() => props.minuteOptions !== void 0 ? (val) => props.minuteOptions.includes(val) : props.options !== void 0 ? (val) => props.options(innerModel.value.hour, val, null) : null);
    const secondInSelection = computed(() => props.secondOptions !== void 0 ? (val) => props.secondOptions.includes(val) : props.options !== void 0 ? (val) => props.options(innerModel.value.hour, innerModel.value.minute, val) : null);
    const validHours = computed(() => {
      if (hourInSelection.value === null) {
        return null;
      }
      const am = getValidValues(0, 11, hourInSelection.value);
      const pm = getValidValues(12, 11, hourInSelection.value);
      return { am, pm, values: am.values.concat(pm.values) };
    });
    const validMinutes = computed(() => minuteInSelection.value !== null ? getValidValues(0, 59, minuteInSelection.value) : null);
    const validSeconds = computed(() => secondInSelection.value !== null ? getValidValues(0, 59, secondInSelection.value) : null);
    const viewValidOptions = computed(() => {
      switch (view.value) {
        case "hour":
          return validHours.value;
        case "minute":
          return validMinutes.value;
        case "second":
          return validSeconds.value;
      }
    });
    const positions = computed(() => {
      let start, end, offset = 0, step = 1;
      const values = viewValidOptions.value !== null ? viewValidOptions.value.values : void 0;
      if (view.value === "hour") {
        if (computedFormat24h.value === true) {
          start = 0;
          end = 23;
        } else {
          start = 0;
          end = 11;
          if (isAM.value === false) {
            offset = 12;
          }
        }
      } else {
        start = 0;
        end = 55;
        step = 5;
      }
      const pos = [];
      for (let val = start, index = start; val <= end; val += step, index++) {
        const actualVal = val + offset, disable = values !== void 0 && values.includes(actualVal) === false, label = view.value === "hour" && val === 0 ? computedFormat24h.value === true ? "00" : "12" : val;
        pos.push({ val: actualVal, index, disable, label });
      }
      return pos;
    });
    const clockDirectives = computed(() => {
      return [[
        TouchPan,
        onPan,
        void 0,
        {
          stop: true,
          prevent: true,
          mouse: true
        }
      ]];
    });
    watch(() => props.modelValue, (v) => {
      const model2 = __splitDate(
        v,
        mask.value,
        locale.value,
        props.calendar,
        defaultDateModel.value
      );
      if (model2.dateHash !== innerModel.value.dateHash || model2.timeHash !== innerModel.value.timeHash) {
        innerModel.value = model2;
        if (model2.hour === null) {
          view.value = "hour";
        } else {
          isAM.value = model2.hour < 12;
        }
      }
    });
    watch([mask, locale], () => {
      nextTick(() => {
        updateValue();
      });
    });
    function setNow() {
      const date = {
        ...getCurrentDate(),
        ...getCurrentTime()
      };
      updateValue(date);
      Object.assign(innerModel.value, date);
      view.value = "hour";
    }
    function getValidValues(start, count, testFn) {
      const values = Array.apply(null, { length: count + 1 }).map((_, index) => {
        const i = index + start;
        return {
          index: i,
          val: testFn(i) === true
        };
      }).filter((v) => v.val === true).map((v) => v.index);
      return {
        min: values[0],
        max: values[values.length - 1],
        values,
        threshold: count + 1
      };
    }
    function getWheelDist(a, b, threshold) {
      const diff = Math.abs(a - b);
      return Math.min(diff, threshold - diff);
    }
    function getNormalizedClockValue(val, { min, max, values, threshold }) {
      if (val === min) {
        return min;
      }
      if (val < min || val > max) {
        return getWheelDist(val, min, threshold) <= getWheelDist(val, max, threshold) ? min : max;
      }
      const index = values.findIndex((v) => val <= v), before = values[index - 1], after = values[index];
      return val - before <= after - val ? before : after;
    }
    function getMask() {
      return props.calendar !== "persian" && props.mask !== null ? props.mask : `HH:mm${props.withSeconds === true ? ":ss" : ""}`;
    }
    function getDefaultDateModel() {
      if (typeof props.defaultDate !== "string") {
        const date = getCurrentDate(true);
        date.dateHash = getDayHash(date);
        return date;
      }
      return __splitDate(props.defaultDate, "YYYY/MM/DD", void 0, props.calendar);
    }
    function shouldAbortInteraction() {
      return vmIsDestroyed(vm) === true || viewValidOptions.value !== null && (viewValidOptions.value.values.length === 0 || view.value === "hour" && computedFormat24h.value !== true && validHours.value[isAM.value === true ? "am" : "pm"].values.length === 0);
    }
    function getClockRect() {
      const clock = clockRef.value, { top, left, width } = clock.getBoundingClientRect(), dist = width / 2;
      return {
        top: top + dist,
        left: left + dist,
        dist: dist * 0.7
      };
    }
    function onPan(event) {
      if (shouldAbortInteraction() === true) {
        return;
      }
      if (event.isFirst === true) {
        draggingClockRect = getClockRect();
        dragCache = updateClock(event.evt, draggingClockRect);
        return;
      }
      dragCache = updateClock(event.evt, draggingClockRect, dragCache);
      if (event.isFinal === true) {
        draggingClockRect = false;
        dragCache = null;
        goToNextView();
      }
    }
    function goToNextView() {
      if (view.value === "hour") {
        view.value = "minute";
      } else if (props.withSeconds && view.value === "minute") {
        view.value = "second";
      }
    }
    function updateClock(evt, clockRect, cacheVal) {
      const pos = position(evt), height = Math.abs(pos.top - clockRect.top), distance = Math.sqrt(
        Math.pow(Math.abs(pos.top - clockRect.top), 2) + Math.pow(Math.abs(pos.left - clockRect.left), 2)
      );
      let val, angle = Math.asin(height / distance) * (180 / Math.PI);
      if (pos.top < clockRect.top) {
        angle = clockRect.left < pos.left ? 90 - angle : 270 + angle;
      } else {
        angle = clockRect.left < pos.left ? angle + 90 : 270 - angle;
      }
      if (view.value === "hour") {
        val = angle / 30;
        if (validHours.value !== null) {
          const am = computedFormat24h.value !== true ? isAM.value === true : validHours.value.am.values.length !== 0 && validHours.value.pm.values.length !== 0 ? distance >= clockRect.dist : validHours.value.am.values.length !== 0;
          val = getNormalizedClockValue(
            val + (am === true ? 0 : 12),
            validHours.value[am === true ? "am" : "pm"]
          );
        } else {
          val = Math.round(val);
          if (computedFormat24h.value === true) {
            if (distance < clockRect.dist) {
              if (val < 12) {
                val += 12;
              }
            } else if (val === 12) {
              val = 0;
            }
          } else if (isAM.value === true && val === 12) {
            val = 0;
          } else if (isAM.value === false && val !== 12) {
            val += 12;
          }
        }
        if (computedFormat24h.value === true) {
          isAM.value = val < 12;
        }
      } else {
        val = Math.round(angle / 6) % 60;
        if (view.value === "minute" && validMinutes.value !== null) {
          val = getNormalizedClockValue(val, validMinutes.value);
        } else if (view.value === "second" && validSeconds.value !== null) {
          val = getNormalizedClockValue(val, validSeconds.value);
        }
      }
      if (cacheVal !== val) {
        setModel[view.value](val);
      }
      return val;
    }
    const setView = {
      hour() {
        view.value = "hour";
      },
      minute() {
        view.value = "minute";
      },
      second() {
        view.value = "second";
      }
    };
    function setAmOnKey(e) {
      e.keyCode === 13 && setAm();
    }
    function setPmOnKey(e) {
      e.keyCode === 13 && setPm();
    }
    function onClick(evt) {
      if (shouldAbortInteraction() !== true) {
        if ($q.platform.is.desktop !== true) {
          updateClock(evt, getClockRect());
        }
        goToNextView();
      }
    }
    function onMousedown(evt) {
      if (shouldAbortInteraction() !== true) {
        updateClock(evt, getClockRect());
      }
    }
    function onKeyupHour(e) {
      if (e.keyCode === 13) {
        view.value = "hour";
      } else if ([37, 39].includes(e.keyCode)) {
        const payload = e.keyCode === 37 ? -1 : 1;
        if (validHours.value !== null) {
          const values = computedFormat24h.value === true ? validHours.value.values : validHours.value[isAM.value === true ? "am" : "pm"].values;
          if (values.length === 0) {
            return;
          }
          if (innerModel.value.hour === null) {
            setHour(values[0]);
          } else {
            const index = (values.length + values.indexOf(innerModel.value.hour) + payload) % values.length;
            setHour(values[index]);
          }
        } else {
          const wrap = computedFormat24h.value === true ? 24 : 12, offset = computedFormat24h.value !== true && isAM.value === false ? 12 : 0, val = innerModel.value.hour === null ? -payload : innerModel.value.hour;
          setHour(offset + (24 + val + payload) % wrap);
        }
      }
    }
    function onKeyupMinute(e) {
      if (e.keyCode === 13) {
        view.value = "minute";
      } else if ([37, 39].includes(e.keyCode)) {
        const payload = e.keyCode === 37 ? -1 : 1;
        if (validMinutes.value !== null) {
          const values = validMinutes.value.values;
          if (values.length === 0) {
            return;
          }
          if (innerModel.value.minute === null) {
            setMinute(values[0]);
          } else {
            const index = (values.length + values.indexOf(innerModel.value.minute) + payload) % values.length;
            setMinute(values[index]);
          }
        } else {
          const val = innerModel.value.minute === null ? -payload : innerModel.value.minute;
          setMinute((60 + val + payload) % 60);
        }
      }
    }
    function onKeyupSecond(e) {
      if (e.keyCode === 13) {
        view.value = "second";
      } else if ([37, 39].includes(e.keyCode)) {
        const payload = e.keyCode === 37 ? -1 : 1;
        if (validSeconds.value !== null) {
          const values = validSeconds.value.values;
          if (values.length === 0) {
            return;
          }
          if (innerModel.value.seconds === null) {
            setSecond(values[0]);
          } else {
            const index = (values.length + values.indexOf(innerModel.value.second) + payload) % values.length;
            setSecond(values[index]);
          }
        } else {
          const val = innerModel.value.second === null ? -payload : innerModel.value.second;
          setSecond((60 + val + payload) % 60);
        }
      }
    }
    function setHour(hour) {
      if (innerModel.value.hour !== hour) {
        innerModel.value.hour = hour;
        verifyAndUpdate();
      }
    }
    function setMinute(minute) {
      if (innerModel.value.minute !== minute) {
        innerModel.value.minute = minute;
        verifyAndUpdate();
      }
    }
    function setSecond(second) {
      if (innerModel.value.second !== second) {
        innerModel.value.second = second;
        verifyAndUpdate();
      }
    }
    const setModel = {
      hour: setHour,
      minute: setMinute,
      second: setSecond
    };
    function setAm() {
      if (isAM.value === false) {
        isAM.value = true;
        if (innerModel.value.hour !== null) {
          innerModel.value.hour -= 12;
          verifyAndUpdate();
        }
      }
    }
    function setPm() {
      if (isAM.value === true) {
        isAM.value = false;
        if (innerModel.value.hour !== null) {
          innerModel.value.hour += 12;
          verifyAndUpdate();
        }
      }
    }
    function verifyAndUpdate() {
      if (hourInSelection.value !== null && hourInSelection.value(innerModel.value.hour) !== true) {
        innerModel.value = __splitDate();
        view.value = "hour";
        return;
      }
      if (minuteInSelection.value !== null && minuteInSelection.value(innerModel.value.minute) !== true) {
        innerModel.value.minute = null;
        innerModel.value.second = null;
        view.value = "minute";
        return;
      }
      if (props.withSeconds === true && secondInSelection.value !== null && secondInSelection.value(innerModel.value.second) !== true) {
        innerModel.value.second = null;
        view.value = "second";
        return;
      }
      if (innerModel.value.hour === null || innerModel.value.minute === null || props.withSeconds === true && innerModel.value.second === null) {
        return;
      }
      updateValue();
    }
    function updateValue(obj) {
      const date = Object.assign({ ...innerModel.value }, obj);
      const val = props.calendar === "persian" ? pad(date.hour) + ":" + pad(date.minute) + (props.withSeconds === true ? ":" + pad(date.second) : "") : formatDate(
        new Date(
          date.year,
          date.month === null ? null : date.month - 1,
          date.day,
          date.hour,
          date.minute,
          date.second,
          date.millisecond
        ),
        mask.value,
        locale.value,
        date.year,
        date.timezoneOffset
      );
      date.changed = val !== props.modelValue;
      emit("update:modelValue", val, date);
    }
    function getHeader() {
      const label = [
        h("div", {
          class: "q-time__link " + (view.value === "hour" ? "q-time__link--active" : "cursor-pointer"),
          tabindex: tabindex.value,
          onClick: setView.hour,
          onKeyup: onKeyupHour
        }, stringModel.value.hour),
        h("div", ":"),
        h(
          "div",
          minLink.value === true ? {
            class: "q-time__link " + (view.value === "minute" ? "q-time__link--active" : "cursor-pointer"),
            tabindex: tabindex.value,
            onKeyup: onKeyupMinute,
            onClick: setView.minute
          } : { class: "q-time__link" },
          stringModel.value.minute
        )
      ];
      if (props.withSeconds === true) {
        label.push(
          h("div", ":"),
          h(
            "div",
            secLink.value === true ? {
              class: "q-time__link " + (view.value === "second" ? "q-time__link--active" : "cursor-pointer"),
              tabindex: tabindex.value,
              onKeyup: onKeyupSecond,
              onClick: setView.second
            } : { class: "q-time__link" },
            stringModel.value.second
          )
        );
      }
      const child = [
        h("div", {
          class: "q-time__header-label row items-center no-wrap",
          dir: "ltr"
        }, label)
      ];
      computedFormat24h.value === false && child.push(
        h("div", {
          class: "q-time__header-ampm column items-between no-wrap"
        }, [
          h("div", {
            class: "q-time__link " + (isAM.value === true ? "q-time__link--active" : "cursor-pointer"),
            tabindex: tabindex.value,
            onClick: setAm,
            onKeyup: setAmOnKey
          }, "AM"),
          h("div", {
            class: "q-time__link " + (isAM.value !== true ? "q-time__link--active" : "cursor-pointer"),
            tabindex: tabindex.value,
            onClick: setPm,
            onKeyup: setPmOnKey
          }, "PM")
        ])
      );
      return h("div", {
        class: "q-time__header flex flex-center no-wrap " + headerClass.value
      }, child);
    }
    function getClock() {
      const current = innerModel.value[view.value];
      return h("div", {
        class: "q-time__content col relative-position"
      }, [
        h(Transition, {
          name: "q-transition--scale"
        }, () => h("div", {
          key: "clock" + view.value,
          class: "q-time__container-parent absolute-full"
        }, [
          h("div", {
            ref: clockRef,
            class: "q-time__container-child fit overflow-hidden"
          }, [
            withDirectives(
              h("div", {
                class: "q-time__clock cursor-pointer non-selectable",
                onClick,
                onMousedown
              }, [
                h("div", { class: "q-time__clock-circle fit" }, [
                  h("div", {
                    class: "q-time__clock-pointer" + (innerModel.value[view.value] === null ? " hidden" : props.color !== void 0 ? ` text-${props.color}` : ""),
                    style: pointerStyle.value
                  }),
                  positions.value.map((pos) => h("div", {
                    class: `q-time__clock-position row flex-center q-time__clock-pos-${pos.index}` + (pos.val === current ? " q-time__clock-position--active " + headerClass.value : pos.disable === true ? " q-time__clock-position--disable" : "")
                  }, [h("span", pos.label)]))
                ])
              ]),
              clockDirectives.value
            )
          ])
        ])),
        props.nowBtn === true ? h(QBtn, {
          class: "q-time__now-button absolute",
          icon: $q.iconSet.datetime.now,
          unelevated: true,
          size: "sm",
          round: true,
          color: props.color,
          textColor: props.textColor,
          tabindex: tabindex.value,
          onClick: setNow
        }) : null
      ]);
    }
    vm.proxy.setNow = setNow;
    return () => {
      const child = [getClock()];
      const def = hSlot(slots.default);
      def !== void 0 && child.push(
        h("div", { class: "q-time__actions" }, def)
      );
      if (props.name !== void 0 && props.disable !== true) {
        injectFormInput(child, "push");
      }
      return h("div", {
        class: classes.value,
        tabindex: -1
      }, [
        getHeader(),
        h("div", { class: "q-time__main col overflow-auto" }, child)
      ]);
    };
  }
});
const _hoisted_1$1 = { class: "q-pl-sm q-pr-sm" };
const _hoisted_2$1 = { class: "col-xs-7 col-sm-9" };
const _hoisted_3$1 = { class: "text-grey q-mr-sm" };
const _hoisted_4$1 = ["onClick"];
const _hoisted_5$1 = {
  key: 0,
  class: "col-xs-5 col-sm-3"
};
const _hoisted_6$1 = { key: 0 };
const _hoisted_7$1 = { class: "text-right" };
const _hoisted_8$1 = { class: "text-h6" };
const _hoisted_9$1 = {
  key: 1,
  class: "q-mt-md"
};
const _hoisted_10$1 = { class: "row q-col-gutter-md items-center" };
const _hoisted_11$1 = { class: "col-xs-12 col-sm-6" };
const _hoisted_12$1 = { class: "row" };
const _hoisted_13$1 = { class: "text-h6 q-pa-sm bg-grey-2" };
const _hoisted_14$1 = { class: "text-primary" };
const _hoisted_15$1 = { class: "text-grey" };
const _hoisted_16$1 = {
  key: 0,
  class: "col-xs-12 col-sm-6"
};
const _hoisted_17$1 = { class: "flex q-mt-sm items-center q-pb-xs" };
const _hoisted_18$1 = { key: 0 };
const _hoisted_19$1 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
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
    const sendPaymentModal = ref({ show: false, content: null });
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
    const canEdit = computed(() => {
      if (localModel.value.xero_override) {
        return true;
      }
      if (localModel.value.status === "DRAFT") {
        return true;
      }
      return false;
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
    const manualQty = () => {
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
        sendPaymentRequestSms();
      } else {
        sendPaymentModal.value.content = null;
        sendPaymentModal.value.show = true;
      }
    };
    const sendPaymentRequest = () => {
      confirmDelete("PLEASE NOTE: You will not be able to edit this order after it has been sent for payment.").onOk(() => {
        sendingPaymentRequest.value = true;
        api.post(`/public/invoice/sendpaymentrequest/${localModel.value.id}`, { content: sendPaymentModal.value.content }).then(() => {
          doNotify("positive", "Invoice sent for payment");
          sendingPaymentRequest.value = false;
          emits("update:order");
          sendPaymentModal.value = { show: false, content: null };
        }).catch((error) => {
          sendingPaymentRequest.value = false;
          useMixinDebug(error, bus);
        });
      });
    };
    const sendPaymentRequestSms = () => {
      confirmDelete("PLEASE NOTE: You will not be able to edit this order after it has been sent for payment.").onOk(() => {
        sendingPaymentRequest.value = true;
        api.post(`/public/invoice/sendpaymentrequestsms/${localModel.value.id}`).then(() => {
          doNotify("positive", "Invoice sent for payment");
          sendingPaymentRequest.value = false;
          emits("update:order");
        }).catch((error) => {
          sendingPaymentRequest.value = false;
          useMixinDebug(error, bus);
        });
      });
    };
    onMounted(() => {
      api.get("/public/product/index").then((response) => {
        rawProductList.value = response.data;
        productList.value = groupBy(response.data.filter((o) => props.categories.find((p) => p.id === o.product_category_id) || o.productcategory.name === "Delivery"), "productcategory.name");
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
              nonEditableProducts.value.indexOf(p.product_id) === -1 && nonEditableProductCategories.value.indexOf(p.product.product_category_id) === -1 ? (openBlock(), createElementBlock("div", _hoisted_5$1, [
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
          unref(localModel).id ? (openBlock(), createElementBlock("div", _hoisted_6$1, [
            createVNode(QSeparator, { class: "q-mb-sm" }),
            createBaseVNode("div", _hoisted_7$1, [
              createBaseVNode("div", null, "Subtotal: " + toDisplayString(unref(currencyFormat)(unref(localModel).grand_total_price)), 1),
              createBaseVNode("div", null, "Total GST: " + toDisplayString(unref(currencyFormat)(unref(localModel).total_price_gst)), 1),
              createBaseVNode("div", _hoisted_8$1, "Total: " + toDisplayString(unref(currencyFormat)(unref(localModel).grand_total_price)), 1)
            ])
          ])) : createCommentVNode("", true),
          unref(canEdit) ? (openBlock(), createElementBlock("div", _hoisted_9$1, [
            createBaseVNode("div", _hoisted_10$1, [
              createBaseVNode("div", _hoisted_11$1, [
                createVNode(QBtn, {
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
                        createBaseVNode("div", _hoisted_12$1, [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(productListFiltered), (p) => {
                            return openBlock(), createElementBlock("div", {
                              class: "col-xs-12",
                              key: p.key
                            }, [
                              createBaseVNode("div", _hoisted_13$1, [
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
                                            createBaseVNode("div", _hoisted_14$1, toDisplayString(d.name), 1),
                                            createBaseVNode("div", _hoisted_15$1, toDisplayString(unref(currencyFormat)(d.unit_price)) + " per " + toDisplayString(d.unit_measurement), 1)
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
              unref(localModel).total_price > 0 ? (openBlock(), createElementBlock("div", _hoisted_16$1, [
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
            ])
          ])) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_17$1, [
            unref(localModel).sent_for_payment && unref(localModel).status !== "PAID" ? (openBlock(), createElementBlock("div", _hoisted_18$1, [
              createTextVNode(" Sent for payment: " + toDisplayString(unref(dateTimeTz)(unref(localModel).sent_for_payment)), 1),
              _hoisted_19$1,
              createTextVNode("Due: " + toDisplayString(unref(localModel).due_date), 1)
            ])) : createCommentVNode("", true),
            createVNode(QSpace),
            createBaseVNode("div", null, [
              unref(localModel).total_price > 0 && !unref(localModel).sent_for_payment ? (openBlock(), createBlock(QBtn, {
                key: 0,
                onClick: _cache[2] || (_cache[2] = ($event) => doSendPaymentRequest("email")),
                icon: "mail",
                title: "Send Payment Request",
                flat: "",
                disable: sendingPaymentRequest.value,
                round: ""
              }, null, 8, ["disable"])) : createCommentVNode("", true),
              unref(localModel).total_price > 0 && !unref(localModel).sent_for_payment ? (openBlock(), createBlock(QBtn, {
                key: 1,
                onClick: _cache[3] || (_cache[3] = ($event) => doSendPaymentRequest("sms")),
                icon: "chat",
                title: "Send SMS Payment Request",
                flat: "",
                disable: sendingPaymentRequest.value,
                round: ""
              }, null, 8, ["disable"])) : createCommentVNode("", true)
            ])
          ])
        ]),
        createVNode(QDialog, {
          modelValue: sendPaymentModal.value.show,
          "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => sendPaymentModal.value.show = $event)
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
                    createVNode(QInput, {
                      modelValue: sendPaymentModal.value.content,
                      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => sendPaymentModal.value.content = $event),
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
                      label: "Cancel"
                    }, null, 512), [
                      [ClosePopup]
                    ]),
                    createVNode(QSpace),
                    createVNode(QBtn, {
                      onClick: _cache[5] || (_cache[5] = ($event) => sendPaymentRequest()),
                      color: "primary",
                      label: "Send via email",
                      disable: sendingPaymentRequest.value
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
const _hoisted_2 = { class: "row q-col-gutter-md q-mb-md" };
const _hoisted_3 = {
  key: 0,
  class: "col-xs-6 col-sm-4"
};
const _hoisted_4 = { class: "text-bold text-grey q-mt-md" };
const _hoisted_5 = { class: "col-xs-6" };
const _hoisted_6 = { class: "text-bold text-grey q-mt-md" };
const _hoisted_7 = { key: 0 };
const _hoisted_8 = {
  key: 0,
  class: "row q-col-gutter-md"
};
const _hoisted_9 = { class: "col-xs-12 col-sm-8" };
const _hoisted_10 = { class: "row q-col-gutter-md q-mb-md" };
const _hoisted_11 = { key: 0 };
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("div", { class: "text-bold text-grey q-mt-md" }, "PICKUP FROM", -1);
const _hoisted_13 = { key: 1 };
const _hoisted_14 = { key: 2 };
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("div", { class: "text-bold text-grey q-mt-md" }, "PRODUCTS", -1);
const _hoisted_16 = {
  key: 0,
  class: "col-xs-12 col-sm-4"
};
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("div", { class: "text-bold text-grey q-mb-xs" }, "AGREED PICKUP TIME", -1);
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("p", null, "The time below has been agreed upon by the customer and contractor.", -1);
const _hoisted_19 = { key: 0 };
const _hoisted_20 = { key: 1 };
const _hoisted_21 = { key: 1 };
const _hoisted_22 = {
  key: 0,
  class: "q-pa-md"
};
const _hoisted_23 = { class: "row q-col-gutter-md q-mb-sm" };
const _hoisted_24 = { class: "col-xs-12 col-sm-6" };
const _hoisted_25 = { class: "row q-col-gutter-md" };
const _hoisted_26 = { class: "q-mt-md text-right" };
const _hoisted_27 = { key: 0 };
const _hoisted_28 = { key: 1 };
const _hoisted_29 = { class: "text-grey-7 text-caption" };
const _hoisted_30 = { key: 0 };
const _hoisted_31 = {
  key: 0,
  class: "q-ml-xs q-mr-xs"
};
const _hoisted_32 = { class: "text-grey-7" };
const _hoisted_33 = {
  key: 0,
  class: "q-mr-sm"
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
    const invoiceTab = ref("products");
    const bookingTab = ref("details");
    const tax = ref();
    const showTimePicker = ref(false);
    const localModel = computed(() => props.model);
    const { user } = useMixinSecurity();
    const rules = {
      team_id: { required },
      scheduled_pickup_date: { required },
      scheduled_pickup_time: { required },
      status: { required },
      productcategories: { required }
    };
    const loading = ref(false);
    const $v = useVuelidate(rules, localModel, { $scope: false });
    const canEdit = computed(() => {
      if (["awaiting_payment", "PAID", "ready_for_delivery", "completed"].indexOf(props.model.status) !== -1 && !props.model.recurring) {
        return false;
      }
      return true;
    });
    const save = () => {
      loading.value = true;
      api.put(`/public/order/${props.model.id}`, localModel.value).then(() => {
        doNotify("positive", "Saved");
        emits("update:order");
        bus.emit("getDashboardStats");
        loading.value = false;
      }).catch((error) => {
        loading.value = false;
        useMixinDebug(error, bus);
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
    onMounted(async () => {
      categories.value = await productCategoriesVisibleBooking();
      api.get("/public/setting/tax").then((response) => {
        tax.value = { tax_enabled: response.data.tax_enabled, tax_rate: response.data.tax_rate };
      }).catch((error) => {
        useMixinDebug(error);
      });
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
                  "header-class": "text-h6",
                  caption: "Update the booking details",
                  onClick: _cache[10] || (_cache[10] = ($event) => bookingTab.value = "details")
                }, {
                  default: withCtx(() => [
                    createVNode(QCard, null, {
                      default: withCtx(() => [
                        createVNode(QCardSection, null, {
                          default: withCtx(() => [
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
                            bookingTab.value === "notes" ? (openBlock(), createBlock(_sfc_main$2, {
                              key: 0,
                              notable_id: unref(localModel).id,
                              notable_type: "Order",
                              nobox: true
                            }, null, 8, ["notable_id"])) : createCommentVNode("", true),
                            bookingTab.value === "details" ? (openBlock(), createElementBlock("div", _hoisted_1, [
                              createVNode(QInput, {
                                modelValue: unref(localModel).special_instructions,
                                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(localModel).special_instructions = $event),
                                label: "Special Instruction",
                                outlined: "",
                                type: "textarea",
                                autogrow: "",
                                class: "q-mt-md",
                                disable: !unref(canEdit)
                              }, null, 8, ["modelValue", "disable"]),
                              createBaseVNode("div", _hoisted_2, [
                                unref(localModel).team.name ? (openBlock(), createElementBlock("div", _hoisted_3, [
                                  createBaseVNode("div", _hoisted_4, toDisplayString(_ctx.$t("team.name").toUpperCase()), 1),
                                  createBaseVNode("div", null, toDisplayString(unref(localModel).team.name), 1),
                                  createBaseVNode("div", null, [
                                    createBaseVNode("div", null, toDisplayString(unref(localModel).team.type), 1),
                                    createBaseVNode("div", null, toDisplayString(unref(localModel).team.payment_terms === "Credit Card" ? "Credit Card" : "Account"), 1)
                                  ])
                                ])) : createCommentVNode("", true),
                                createBaseVNode("div", _hoisted_5, [
                                  createBaseVNode("div", _hoisted_6, toDisplayString(_ctx.$t("contractor.name").toUpperCase()), 1),
                                  unref(localModel).contractor ? (openBlock(), createElementBlock("div", _hoisted_7, [
                                    createVNode(_sfc_main$3, {
                                      user: unref(localModel).contractor,
                                      class: "q-mr-xs"
                                    }, null, 8, ["user"]),
                                    createTextVNode(" " + toDisplayString(unref(localModel).contractor.first_name) + " " + toDisplayString(unref(localModel).contractor.last_name), 1)
                                  ])) : createCommentVNode("", true)
                                ])
                              ]),
                              unref(localModel).team_id ? (openBlock(), createElementBlock("div", _hoisted_8, [
                                createBaseVNode("div", _hoisted_9, [
                                  createBaseVNode("div", _hoisted_10, [
                                    createVNode(_sfc_main$4, {
                                      modelValue: unref(localModel).scheduled_pickup_date,
                                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(localModel).scheduled_pickup_date = $event),
                                      label: _ctx.$t("order.scheduledPickupDate"),
                                      outlined: true,
                                      invalid: unref($v).scheduled_pickup_date.$invalid,
                                      class: "col-xs-6",
                                      disable: !unref(canEdit)
                                    }, null, 8, ["modelValue", "label", "invalid", "disable"]),
                                    createVNode(QSelect, {
                                      modelValue: unref(localModel).scheduled_pickup_time,
                                      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(localModel).scheduled_pickup_time = $event),
                                      label: _ctx.$t("order.scheduledPickupTime"),
                                      invalid: unref($v).scheduled_pickup_time,
                                      options: unref(hourBookingOptions),
                                      "emit-value": "",
                                      "map-options": "",
                                      class: "col-xs-6",
                                      disable: !unref(canEdit),
                                      outlined: ""
                                    }, null, 8, ["modelValue", "label", "invalid", "options", "disable"])
                                  ]),
                                  !unref(localModel).recurring_parent_id ? (openBlock(), createElementBlock("div", _hoisted_11, [
                                    createVNode(QToggle, {
                                      modelValue: unref(localModel).recurring_order,
                                      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => unref(localModel).recurring_order = $event),
                                      label: _ctx.$t("order.recurring"),
                                      disable: !unref(canEdit)
                                    }, null, 8, ["modelValue", "label", "disable"]),
                                    unref(localModel).recurring_order ? (openBlock(), createBlock(QSelect, {
                                      key: 0,
                                      modelValue: unref(localModel).recurring,
                                      "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => unref(localModel).recurring = $event),
                                      label: _ctx.$t("order.recurringFrequency"),
                                      options: ["Week", "Fortnite", "Month"],
                                      "bottom-slots": "",
                                      disable: !unref(canEdit),
                                      outlined: ""
                                    }, null, 8, ["modelValue", "label", "disable"])) : createCommentVNode("", true)
                                  ])) : createCommentVNode("", true),
                                  _hoisted_12,
                                  unref(localModel).address1 ? (openBlock(), createElementBlock("div", _hoisted_13, toDisplayString(unref(localModel).address1), 1)) : createCommentVNode("", true),
                                  createBaseVNode("div", null, toDisplayString(unref(localModel).address2), 1),
                                  unref(localModel).suburbpostcoderegion ? (openBlock(), createElementBlock("div", _hoisted_14, toDisplayString(unref(localModel).suburbpostcoderegion.locality) + " " + toDisplayString(unref(localModel).suburbpostcoderegion.state) + " " + toDisplayString(unref(localModel).suburbpostcoderegion.postcode), 1)) : createCommentVNode("", true),
                                  _hoisted_15,
                                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(localModel).productcategories, (c) => {
                                    return openBlock(), createElementBlock("div", {
                                      key: c.id
                                    }, [
                                      c.meta ? (openBlock(), createBlock(QCheckbox, {
                                        key: 0,
                                        modelValue: c.meta.pivot_active,
                                        "onUpdate:modelValue": ($event) => c.meta.pivot_active = $event,
                                        label: c.name,
                                        disable: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])) : createCommentVNode("", true)
                                    ]);
                                  }), 128))
                                ]),
                                unref(canEdit) || unref(localModel).agreed_pickup_time ? (openBlock(), createElementBlock("div", _hoisted_16, [
                                  _hoisted_17,
                                  _hoisted_18,
                                  unref(localModel).agreed_pickup_time ? (openBlock(), createElementBlock("div", _hoisted_19, [
                                    createVNode(QIcon, { name: "history" }),
                                    createTextVNode(" Time: " + toDisplayString(unref(hourAgreedDisplay)(unref(localModel).agreed_pickup_time)), 1),
                                    unref(localModel).agreed_pickup_time && unref(canEdit) ? (openBlock(), createElementBlock("a", {
                                      key: 0,
                                      onClick: _cache[6] || (_cache[6] = ($event) => unref(localModel).agreed_pickup_time = null),
                                      class: "link q-ml-sm"
                                    }, "Reset")) : createCommentVNode("", true)
                                  ])) : createCommentVNode("", true),
                                  unref(canEdit) ? (openBlock(), createElementBlock("div", _hoisted_20, [
                                    createBaseVNode("div", null, [
                                      createBaseVNode("a", {
                                        onClick: _cache[7] || (_cache[7] = ($event) => showTimePicker.value = !showTimePicker.value),
                                        class: "link"
                                      }, "Choose a time")
                                    ]),
                                    showTimePicker.value ? (openBlock(), createBlock(QTime, {
                                      key: 0,
                                      modelValue: unref(localModel).agreed_pickup_time,
                                      "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => unref(localModel).agreed_pickup_time = $event),
                                      color: "secondary",
                                      class: "q-mt-xs"
                                    }, null, 8, ["modelValue"])) : createCommentVNode("", true)
                                  ])) : createCommentVNode("", true)
                                ])) : createCommentVNode("", true)
                              ])) : createCommentVNode("", true)
                            ])) : createCommentVNode("", true)
                          ]),
                          _: 1
                        }),
                        unref(canEdit) && bookingTab.value === "details" ? (openBlock(), createBlock(QCardActions, {
                          key: 0,
                          align: "right"
                        }, {
                          default: withCtx(() => [
                            createVNode(QBtn, {
                              disable: loading.value || unref($v).$invalid,
                              label: _ctx.$t("actions.update"),
                              color: "primary",
                              onClick: _cache[9] || (_cache[9] = ($event) => save()),
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
                }, 8, ["label"]),
                createVNode(QExpansionItem, {
                  group: "orderEdit",
                  label: `${_ctx.$t("order.invoice")}${unref(localModel).invoice ? ` - #${unref(localModel).invoice.display_id}` : ""}`,
                  caption: " Create, update and delete products",
                  "header-class": "text-h6",
                  "default-opened": "",
                  onClick: _cache[21] || (_cache[21] = ($event) => invoiceTab.value = "products")
                }, {
                  default: withCtx(() => [
                    createVNode(QCard, null, {
                      default: withCtx(() => [
                        !unref(localModel).invoice ? (openBlock(), createBlock(QCardSection, { key: 0 }, {
                          default: withCtx(() => [
                            createBaseVNode("p", null, "No invoice has been created for this " + toDisplayString(_ctx.$t("order.name")) + ".", 1),
                            createVNode(QBtn, {
                              label: "Create invoice",
                              onClick: _cache[11] || (_cache[11] = ($event) => createInvoice()),
                              color: "primary",
                              icon: "add_circle",
                              rounded: ""
                            })
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        unref(localModel).invoice ? (openBlock(), createElementBlock("div", _hoisted_21, [
                          createVNode(QTabs, {
                            modelValue: invoiceTab.value,
                            "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => invoiceTab.value = $event),
                            align: "left"
                          }, {
                            default: withCtx(() => [
                              createVNode(QTab, {
                                name: "products",
                                label: `Products (${unref(localModel).invoice.products.length})`
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
                          invoiceTab.value === "notes" ? (openBlock(), createElementBlock("div", _hoisted_22, [
                            createVNode(_sfc_main$2, {
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
                              createBaseVNode("div", _hoisted_23, [
                                createBaseVNode("div", _hoisted_24, [
                                  createVNode(_sfc_main$4, {
                                    modelValue: unref(localModel).invoice.invoice_date,
                                    "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => unref(localModel).invoice.invoice_date = $event),
                                    label: _ctx.$t("invoice.invoiceDate")
                                  }, null, 8, ["modelValue", "label"])
                                ]),
                                createVNode(QInput, {
                                  modelValue: unref(localModel).invoice.invoice_po,
                                  "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => unref(localModel).invoice.invoice_po = $event),
                                  label: _ctx.$t("team.invoicePo"),
                                  class: "col-xs-12 col-sm-6",
                                  "bottom-slots": ""
                                }, null, 8, ["modelValue", "label"])
                              ]),
                              createVNode(QInput, {
                                modelValue: unref(localModel).invoice.invoice_name,
                                "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => unref(localModel).invoice.invoice_name = $event),
                                label: _ctx.$t("team.invoiceName"),
                                "bottom-slots": ""
                              }, null, 8, ["modelValue", "label"]),
                              createVNode(_sfc_main$5, {
                                model: unref(localModel).invoice,
                                addressfields: { address1: "invoice_address1", address2: "invoice_address2", suburb_postcode_region_id: "invoice_address_suburb_postcode_region_id", lat: "lat", lng: "lng", country_id: "invoice_address_country_id" },
                                placeholder: _ctx.$t("address.search"),
                                filled: true
                              }, null, 8, ["model", "placeholder"]),
                              createVNode(QInput, {
                                modelValue: unref(localModel).invoice.invoice_address1,
                                "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => unref(localModel).invoice.invoice_address1 = $event),
                                label: _ctx.$t("address.line1"),
                                "bottom-slots": ""
                              }, null, 8, ["modelValue", "label"]),
                              createVNode(QInput, {
                                modelValue: unref(localModel).invoice.invoice_address2,
                                "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => unref(localModel).invoice.invoice_address2 = $event),
                                label: _ctx.$t("address.line2"),
                                "bottom-slots": ""
                              }, null, 8, ["modelValue", "label"]),
                              createBaseVNode("div", _hoisted_25, [
                                createVNode(_sfc_main$6, {
                                  modelValue: unref(localModel).invoice.invoice_address_suburb_postcode_region_id,
                                  "onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => unref(localModel).invoice.invoice_address_suburb_postcode_region_id = $event),
                                  label: _ctx.$t("address.suburb"),
                                  class: "col-xs-12 col-sm-6"
                                }, null, 8, ["modelValue", "label"]),
                                createVNode(_sfc_main$7, {
                                  modelValue: unref(localModel).invoice.invoice_address_country_id,
                                  "onUpdate:modelValue": _cache[19] || (_cache[19] = ($event) => unref(localModel).invoice.invoice_address_country_id = $event),
                                  label: _ctx.$t("address.country"),
                                  class: "col-xs-12 col-sm-6"
                                }, null, 8, ["modelValue", "label"])
                              ]),
                              createBaseVNode("div", _hoisted_26, [
                                createVNode(QBtn, {
                                  disable: loading.value || unref($v).$invalid,
                                  label: _ctx.$t("actions.update"),
                                  color: "primary",
                                  onClick: _cache[20] || (_cache[20] = ($event) => saveInvoice()),
                                  rounded: ""
                                }, null, 8, ["disable", "label"])
                              ])
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          invoiceTab.value === "audit" ? (openBlock(), createBlock(_sfc_main$8, {
                            key: 3,
                            auditable_type: "Invoice",
                            auditable_id: unref(localModel).invoice_id,
                            nobox: true
                          }, null, 8, ["auditable_id"])) : createCommentVNode("", true),
                          invoiceTab.value === "mail" ? (openBlock(), createBlock(_sfc_main$9, {
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
                }, 8, ["label"])
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
                              createTextVNode(toDisplayString(unref(displayDateDay)(o.scheduled_pickup_date)) + " " + toDisplayString(o.scheduled_pickup_date) + " (", 1),
                              !o.agreed_pickup_time ? (openBlock(), createElementBlock("span", _hoisted_27, toDisplayString(unref(hourBookingDisplay)(o.scheduled_pickup_time)), 1)) : createCommentVNode("", true),
                              o.agreed_pickup_time ? (openBlock(), createElementBlock("span", _hoisted_28, toDisplayString(unref(hourAgreedDisplay)(o.agreed_pickup_time)), 1)) : createCommentVNode("", true),
                              createTextVNode(")")
                            ]),
                            _: 2
                          }, 1032, ["to"])
                        ]),
                        createVNode(QSpace),
                        createBaseVNode("div", _hoisted_29, [
                          createVNode(QIcon, {
                            name: "settings",
                            color: "grey-7"
                          }),
                          createTextVNode(),
                          o.productcategories ? (openBlock(), createElementBlock("span", _hoisted_30, [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(o.productcategories, (c, index) => {
                              return openBlock(), createElementBlock("span", {
                                key: c.id
                              }, [
                                createTextVNode(toDisplayString(c.name), 1),
                                index + 1 !== o.productcategories.length ? (openBlock(), createElementBlock("span", _hoisted_31, "&")) : createCommentVNode("", true)
                              ]);
                            }), 128)),
                            createTextVNode(" pickup with " + toDisplayString(o.team.name), 1)
                          ])) : createCommentVNode("", true)
                        ]),
                        createBaseVNode("div", _hoisted_32, [
                          createVNode(QIcon, {
                            name: "place",
                            color: "grey-7"
                          }),
                          createTextVNode(),
                          o.team.suburbpostcoderegion ? (openBlock(), createElementBlock("span", _hoisted_33, toDisplayString(o.team.suburbpostcoderegion.locality) + " " + toDisplayString(o.team.suburbpostcoderegion.state), 1)) : createCommentVNode("", true)
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
