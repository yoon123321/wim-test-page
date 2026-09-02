/**
 * 감량 랜딩 버전3 — "검사지 한 장이 코칭이 되기까지" 코칭 스토리 데이터.
 * 자주 나오는 유형(CaseDeck) 자리를 대신하는, 한 사람의 검사 결과를 따라가는 4스텝.
 * 수치·문구는 실제 WIM-I / WIM-Scale 검사 항목으로 구성한 예시 사례.
 */

export type CoachingBar = { label: string; value: string; percent: number };

export const DIET_COACHING = {
  kicker: "HOW WE COACH",
  title: "검사지 한 장이, 코칭이 되기까지",
  subLines: ["40대 여성 회원 한 분의 검사 결과를", "그대로 따라가 보세요."],
  note: "＊ 실제 검사 항목으로 구성한 예시 사례입니다",
  steps: [
    {
      tag: "STEP 1 · 타고난 기질 — WIM-I",
      title: "타고난 반응부터 확인합니다",
      bars: [
        { label: "스트레스 내성", value: "낮음", percent: 20 },
        { label: "부정적 충동성", value: "높음", percent: 80 },
      ],
      comment:
        "스트레스를 받으면 참는 대신, 안 좋은 방향으로 충동적으로 풀어버리는 기질이에요. 의지 문제가 아니라 타고난 반응 패턴입니다.",
      connector: "그리고 지금",
    },
    {
      tag: "STEP 2 · 지금의 생활 — WIM-Scale",
      title: "현재 상태를 겹쳐 봅니다",
      bars: [
        { label: "스트레스 지수", value: "높음", percent: 80 },
        { label: "보상적 식사", value: "높음", percent: 80 },
      ],
      comment:
        "실제로 지금 스트레스가 높은 상태예요. 그리고 그 스트레스를 ‘먹는 것’으로 풀고 계십니다. 기질과 생활이 맞물린 거예요.",
      connector: "무엇으로 풀고 있을까요",
    },
    {
      tag: "STEP 3 · 식습관 타입 — WIM-Scale",
      title: "무엇을, 언제 먹는지 확인합니다",
      habitsStrong: ["음료·에이드", "디저트", "야식"],
      habitsSoft: ["과식"],
      bars: [{ label: "음식 중독 (FA)", value: "높음", percent: 80 }],
      comment:
        "달달한 라떼, 디저트, 야식과 폭식. 특정 음식에 이미 중독 패턴이 잡혀 있어요. 무작정 끊으면 실패합니다. 대체할 설계가 필요해요.",
      connector: "그래서, 이분의 코칭은",
    },
  ],
  solution: {
    tag: "MAIN SOLUTION",
    title: "이렇게 코칭이 나갑니다",
    items: [
      { no: "1", title: "스트레스 관리부터", desc: "식단을 조이기 전에, 충동을 만드는 스트레스부터 낮춥니다." },
      { no: "2", title: "충동이 오는 상황 예측", desc: "기록으로 무너지는 시간대를 찾아, 그 순간을 미리 대비합니다." },
      { no: "3", title: "끊지 않고 바꾸기", desc: "초코라떼는 대체 음료로, 야식 시간대는 다른 보상 루틴으로 바꿉니다." },
    ],
    closing: "같은 80%여도, 기질이 다르면 코칭이 다릅니다.",
  },
} as const;
