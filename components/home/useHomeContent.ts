import { useVariant } from "@/components/common/VariantProvider";
import {
  HOME_CONTENT_E,
  HOME_CONTENT_NEW,
  HOME_MANAGEMENT,
  HOME_MANAGEMENT_NEW,
} from "@/data/home";

/** 헤더의 기존안/개선안 스위치에 따라 홈 문구 세트를 돌려줍니다. 문구는 data/home.ts 상수에서 수정합니다. */
export function useHomeContent() {
  const { variant } = useVariant();
  return variant === "improved" ? HOME_CONTENT_NEW : HOME_CONTENT_E;
}


/** 관리(STEP 02) 섹션 문구 세트 */
export function useHomeManagement() {
  const { variant } = useVariant();
  return variant === "improved" ? HOME_MANAGEMENT_NEW : HOME_MANAGEMENT;
}
