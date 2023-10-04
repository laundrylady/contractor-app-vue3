import { f as computed } from "./index.8169762b.js";
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
