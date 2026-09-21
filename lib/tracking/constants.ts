/**
 * 추적용 섹션 키 상수
 */
export const TRACKING_SECTIONS = {
  // 상담 관련
  /** PC 헤더 우측 CTA */
  CONSULTATION_BUTTON_NAV: 'consultation_button_nav',
  /** 모바일 사이드바 안 상담 버튼 */
  CONSULTATION_BUTTON_SIDEBAR: 'consultation_button_sidebar',
  CONSULTATION_BUTTON_BOTTOM: 'consultation_button_bottom',
  CONSULTATION_BUTTON_FLOATING: 'consultation_button_floating',
  CONSULTATION_PHONE_FLOATING: 'consultation_phone_floating',
  CONSULTATION_KAKAO_FLOATING: 'consultation_kakao_floating',
  CONSULTATION_MODAL_OPEN: 'consultation_modal_open',
  CONSULTATION_FORM_SUBMIT: 'consultation_form_submit',

  // 프로그램 관련
  PROGRAM_CARD_WELLNESS: 'program_card_wellness',
  PROGRAM_CARD_WELLNESS_PLUS: 'program_card_wellness_plus',
  PROGRAM_CARD_DR_WIM: 'program_card_dr_wim',

  // 프로모션 관련
  PROMOTION_CARD: 'promotion_card',
  PROMOTION_DETAIL_VIEW: 'promotion_detail_view',

  // 프로그램 페이지 CTA
  DEVICE_MANAGEMENT_HERO_CTA: 'device_management_hero_cta', // 기기관리 · 히어로 상담 신청

  // 네비게이션 — 헤더·사이드바 메뉴 클릭
  NAV_HOME: 'nav_home',
  NAV_BRAND_INTRO: 'nav_brand_intro',
  NAV_DIET_PROGRAM: 'nav_diet_program',
  NAV_RECOVERY: 'nav_recovery',
  NAV_PROGRAMS: 'nav_programs',
  NAV_PROMOTIONS: 'nav_promotions',
  NAV_TESTIMONIALS: 'nav_testimonials',
  NAV_STORE: 'nav_store',
  NAV_LOCATION: 'nav_location',
  /** 모바일 햄버거 메뉴 열기 */
  NAV_MENU_OPEN: 'nav_menu_open',

  // CTA 버튼
  CTA_PROGRAM_VIEW: 'cta_program_view',
  CTA_CONSULTATION: 'cta_consultation',

  // 감량 프로그램 페이지
  /** 플랜 카드의 상담 버튼 — 어느 플랜인지는 dietPlanTrackingKey() 로 나눈다 */
  DIET_PLAN_CTA: 'diet_plan_cta',
  /** 페이지 하단 최종 상담 CTA */
  DIET_FINAL_CTA: 'diet_final_cta',
  /** 기질 테스트로 이동 (/test/diet) */
  DIET_TYPE_TEST_CTA: 'diet_type_test_cta',
  DIET_TEST_RESULT_CONSULTATION_CTA: 'diet_test_result_consultation_cta',

  // 다이어트 유형 테스트 (/test/diet)
  /** 인트로 "내 유형 확인하기" */
  DIET_TEST_START: 'diet_test_start',
  /** 문항 응답 — 몇 번 문항인지는 dietTestAnswerKey() 로 나눈다 (이탈 지점 확인용) */
  DIET_TEST_ANSWER: 'diet_test_answer',
  /** 13문항을 모두 풀고 결과 화면 도달 */
  DIET_TEST_RESULT_VIEW: 'diet_test_result_view',
  /** 공유 링크(?a=)로 들어와 결과를 바로 봄 */
  DIET_TEST_SHARED_RESULT_VIEW: 'diet_test_shared_result_view',
  /** "내 다이어트 유형 공유하기" — 공유 창 열기 */
  DIET_TEST_SHARE_OPEN: 'diet_test_share_open',
  /** 공유 창 채널 선택 — 어느 채널인지는 dietTestShareKey() 로 나눈다 */
  DIET_TEST_SHARE_CHANNEL: 'diet_test_share',
  /** "테스트 다시 하기" */
  DIET_TEST_RESTART: 'diet_test_restart',
  /** 결과 화면 "전 페이지로 돌아가기" */
  DIET_TEST_GO_BACK: 'diet_test_go_back',
  /** 다이어트 사례로 이동 (/before-after) */
  DIET_TESTIMONIALS_CTA: 'diet_testimonials_cta',
  /** FAQ 문항을 펼침 */
  DIET_FAQ_OPEN: 'diet_faq_open',
  /** 검사 상세 모달 열기 — 몇 번째 검사인지는 dietTestDetailKey() 로 나눈다 */
  DIET_TEST_DETAIL: 'diet_test_detail',
  /** 관리 상세 모달 열기 — 몇 번째 관리인지는 dietCareDetailKey() 로 나눈다 */
  DIET_CARE_DETAIL: 'diet_care_detail',

  // 메인 페이지
  HOME_PROGRAM_CARD_DIET: 'home_program_card_diet',
  HOME_PROGRAM_CARD_RECOVERY: 'home_program_card_recovery',
  HOME_CONSULTATION_CTA: 'home_consultation_cta',

  // 브랜드 스토리 페이지
  BRAND_CONSULTATION_CTA: 'brand_consultation_cta',
  BRAND_PROGRAM_CTA: 'brand_program_cta',

  // 기기 프로그램 페이지
  RECOVERY_INSTAGRAM_CTA: 'recovery_instagram_cta',
  RECOVERY_PACKAGE_BOOKING_CTA: 'recovery_package_booking_cta',
  RECOVERY_FAQ_OPEN: 'recovery_faq_open',
  RECOVERY_TYPE_TEST_CTA: 'recovery_type_test_cta',
  RECOVERY_TEST_RESULT_BOOKING_CTA: 'recovery_test_result_booking_cta',
  RECOVERY_TEST_RESULT_CONSULTATION_CTA: 'recovery_test_result_consultation_cta',
  RECOVERY_BOTTOM_BOOKING_CTA: 'recovery_bottom_booking_cta',
  /** TODAY'S SESSION 탭 — 몇 번째 탭인지는 recoverySessionTabKey() 로 나눈다 */
  RECOVERY_SESSION_TAB: 'recovery_session_tab',
  /** 테마 체험가 탭 — 몇 번째 탭인지는 recoveryPackageTabKey() 로 나눈다 */
  RECOVERY_PACKAGE_TAB: 'recovery_package_tab',
  /** 회원 스토리 카드 — 몇 번째 카드인지는 recoveryStoryKey() 로 나눈다 */
  RECOVERY_STORY: 'recovery_story',

  // 리커버리 유형 테스트 (/test/recovery) — 다이어트 테스트와 같은 구성
  /** 인트로 시작 버튼 */
  RECOVERY_TEST_START: 'recovery_test_start',
  /** 문항 응답 — 몇 번 문항인지는 recoveryTestAnswerKey() 로 나눈다 (이탈 지점 확인용) */
  RECOVERY_TEST_ANSWER: 'recovery_test_answer',
  /** 모든 문항을 풀고 결과 화면 도달 */
  RECOVERY_TEST_RESULT_VIEW: 'recovery_test_result_view',
  /** 공유 링크(?a=)로 들어와 결과를 바로 봄 */
  RECOVERY_TEST_SHARED_RESULT_VIEW: 'recovery_test_shared_result_view',
  /** "내 결과 공유하기" — 공유 창 열기 */
  RECOVERY_TEST_SHARE_OPEN: 'recovery_test_share_open',
  /** 공유 창 채널 선택 — 어느 채널인지는 recoveryTestShareKey() 로 나눈다 */
  RECOVERY_TEST_SHARE_CHANNEL: 'recovery_test_share',
  /** "테스트 다시 하기" */
  RECOVERY_TEST_RESTART: 'recovery_test_restart',
  /** 결과 화면 "전 페이지로 돌아가기" */
  RECOVERY_TEST_GO_BACK: 'recovery_test_go_back',

  // BnA(감량 사례) 페이지
  /** 사례 카드 — 몇 번째 카드인지는 bnaCaseKey() 로 나눈다 */
  BNA_CASE_CARD: 'bna_case_card',
  /** 릴스 카드 — 몇 번째 카드인지는 bnaReelKey() 로 나눈다 */
  BNA_REEL: 'bna_reel',
  BNA_TYPE_TEST_CTA: 'bna_type_test_cta',
  /** 사례 상세 히어로 아래 밴드 — 감량 프로그램 페이지로 이동 */
  BNA_CASE_PROGRAM_CTA: 'bna_case_program_cta',
  /** 사례 상세 하단 밴드 — 상담 폼 열기 */
  BNA_CASE_BAND_CTA: 'bna_case_band_cta',
  BNA_FINAL_CTA: 'bna_final_cta',
  /** 후기 캐러셀 카드 "자세히 보기"(뒤집기) — 몇 번째 카드인지는 bnaTestimonialKey() 로 나눈다 */
  BNA_TESTIMONIAL_CARD: 'bna_testimonial_card',
  /** 후기 캐러셀 이전·다음 화살표와 점 */
  BNA_TESTIMONIAL_PREV: 'bna_testimonial_prev',
  BNA_TESTIMONIAL_NEXT: 'bna_testimonial_next',
  BNA_TESTIMONIAL_DOT: 'bna_testimonial_dot',

  // 찾아오는 길 페이지 — 값은 기존에 쓰던 location_{key} 그대로 둔다
  LOCATION_NAVER_MAP: 'location_naver_map',
  LOCATION_PHONE: 'location_phone',
  LOCATION_EMAIL: 'location_email',
  /** 지도 영역을 처음 누르거나 끌었을 때 (페이지당 한 번) */
  LOCATION_MAP_INTERACT: 'location_map_interact',

  // 공용 푸터
  FOOTER_HOME: 'footer_home',
  FOOTER_PRIVACY: 'footer_privacy',
  FOOTER_INSTAGRAM: 'footer_instagram',
  FOOTER_YOUTUBE: 'footer_youtube',
  FOOTER_NAVER_BLOG: 'footer_naver_blog',
  FOOTER_NAVER_CAFE: 'footer_naver_cafe'
} as const;

/** 헤더·사이드바 메뉴 경로별 추적 키. 목록에 없으면 추적하지 않는다. */
const NAV_TRACKING_BY_PATH: Record<string, string> = {
  '/': TRACKING_SECTIONS.NAV_HOME,
  '/brand-intro': TRACKING_SECTIONS.NAV_BRAND_INTRO,
  '/diet-program': TRACKING_SECTIONS.NAV_DIET_PROGRAM,
  '/recovery': TRACKING_SECTIONS.NAV_RECOVERY,
  '/programs': TRACKING_SECTIONS.NAV_PROGRAMS,
  '/before-after': TRACKING_SECTIONS.NAV_TESTIMONIALS,
  '/testimonials': TRACKING_SECTIONS.NAV_TESTIMONIALS,
  '/promotions': TRACKING_SECTIONS.NAV_PROMOTIONS,
  '/location': TRACKING_SECTIONS.NAV_LOCATION,
  'https://wimstore.co.kr/': TRACKING_SECTIONS.NAV_STORE
};

/** 메뉴 경로에 해당하는 추적 키를 돌려준다. */
export function navTrackingKey(href: string): string | undefined {
  return NAV_TRACKING_BY_PATH[href];
}

/** 다이어트 유형 테스트 문항 번호를 추적 키로 바꾼다. 1 → 'diet_test_answer_q01' */
export function dietTestAnswerKey(questionNumber: number): string {
  return `${TRACKING_SECTIONS.DIET_TEST_ANSWER}_q${String(questionNumber).padStart(2, '0')}`;
}

/** 공유 채널을 추적 키로 바꾼다. 'kakao' → 'diet_test_share_kakao' */
export function dietTestShareKey(channel: string): string {
  return `${TRACKING_SECTIONS.DIET_TEST_SHARE_CHANNEL}_${channel}`;
}

/** 리커버리 유형 테스트 문항 번호를 추적 키로 바꾼다. 1 → 'recovery_test_answer_q01' */
export function recoveryTestAnswerKey(questionNumber: number): string {
  return `${TRACKING_SECTIONS.RECOVERY_TEST_ANSWER}_q${String(questionNumber).padStart(2, '0')}`;
}

/** 공유 채널을 추적 키로 바꾼다. 'kakao' → 'recovery_test_share_kakao' */
export function recoveryTestShareKey(channel: string): string {
  return `${TRACKING_SECTIONS.RECOVERY_TEST_SHARE_CHANNEL}_${channel}`;
}

/** 세션 탭 번호를 추적 키로 바꾼다. 1 → 'recovery_session_tab_1' */
export function recoverySessionTabKey(tabNumber: number): string {
  return `${TRACKING_SECTIONS.RECOVERY_SESSION_TAB}_${tabNumber}`;
}

/** 체험가 탭 번호를 추적 키로 바꾼다. 1 → 'recovery_package_tab_1' */
export function recoveryPackageTabKey(tabNumber: number): string {
  return `${TRACKING_SECTIONS.RECOVERY_PACKAGE_TAB}_${tabNumber}`;
}

/** 스토리 카드 번호를 추적 키로 바꾼다. 1 → 'recovery_story_1' */
export function recoveryStoryKey(storyNumber: number): string {
  return `${TRACKING_SECTIONS.RECOVERY_STORY}_${storyNumber}`;
}

/** 검사 카드 번호를 추적 키로 바꾼다. 1 → 'diet_test_detail_1' */
export function dietTestDetailKey(testNumber: number): string {
  return `${TRACKING_SECTIONS.DIET_TEST_DETAIL}_${testNumber}`;
}

/** 관리 카드 번호를 추적 키로 바꾼다. 1 → 'diet_care_detail_1' */
export function dietCareDetailKey(careNumber: number): string {
  return `${TRACKING_SECTIONS.DIET_CARE_DETAIL}_${careNumber}`;
}

/** 사례 카드 번호를 추적 키로 바꾼다. 1 → 'bna_case_card_1' */
export function bnaCaseKey(caseNumber: number): string {
  return `${TRACKING_SECTIONS.BNA_CASE_CARD}_${caseNumber}`;
}

/** 후기 카드 번호를 추적 키로 바꾼다. 1 → 'bna_testimonial_card_1' */
export function bnaTestimonialKey(cardNumber: number): string {
  return `${TRACKING_SECTIONS.BNA_TESTIMONIAL_CARD}_${cardNumber}`;
}

/** 릴스 카드 번호를 추적 키로 바꾼다. 1 → 'bna_reel_1' */
export function bnaReelKey(reelNumber: number): string {
  return `${TRACKING_SECTIONS.BNA_REEL}_${reelNumber}`;
}

/** 플랜 이름을 추적 키로 바꾼다. 'Wellness Lite' → 'diet_plan_cta_wellness_lite' */
export function dietPlanTrackingKey(planName: string): string {
  const slug = planName
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_|_$/g, '');
  return `${TRACKING_SECTIONS.DIET_PLAN_CTA}_${slug}`;
}
