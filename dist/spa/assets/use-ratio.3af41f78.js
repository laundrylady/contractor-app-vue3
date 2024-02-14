import { g as computed } from "./index.f5d83c29.js";
const useRatioProps = {
  ratio: [String, Number]
};
function useRatio(props, naturalRatio) {
  return computed(() => {
    const ratio = Number(
      props.ratio || (naturalRatio !== void 0 ? naturalRatio.value : void 0)
    );
    return isNaN(ratio) !== true && ratio > 0 ? { paddingBottom: `${100 / ratio}%` } : null;
  });
}
export { useRatio as a, useRatioProps as u };
