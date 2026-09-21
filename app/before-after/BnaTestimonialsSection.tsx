'use client';

/**
 * Before & After 후기 목록 — wim-homepage-2 의 BnaTestimonialsSection 을 한 파일로 옮긴 것.
 * 원본과 다른 점: 클릭 추적 없음, embla 대신 스크롤 스냅으로 캐러셀을 굴린다.
 */

import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

/* ───────────────────────── 문구 ───────────────────────── */

const COPY = {
  closeLabel: '상세 닫기',
  memberInfoLabel: '회원 정보',
  programLabel: '프로그램',
  periodLabel: '관리 기간',
  beforeLabel: 'BEFORE',
  afterLabel: 'AFTER',
  weightLabel: '체중',
  bodyFatLabel: '체지방',
  waistLabel: '복부둘레',
  visceralFatLabel: '내장지방',
  memberReviewAuthor: '실제 회원 후기',
  managerReviewAuthor: '윔센터 담당 매니저',
  ctaLabel: '해당 프로그램 살펴보기',
  ctaHref: '/diet-program'
} as const;

/* ───────────────────────── 데이터 ───────────────────────── */

const TESTIMONIALS = [
  {
    id: 1,
    name: '박**',
    gender: '여성',
    age: 32,
    program: 'Wellness Plus Max',
    period: '26주',
    hook: '마운자로가 시작을 도왔다면, 남은 건 습관이었습니다',
    comboImage: '/images/bna/testimonials/ba-1.webp',
    beforeImageLarge: '/images/bna/testimonials/1_before.webp',
    afterImageLarge: '/images/bna/testimonials/1_after.webp',
    weightBefore: 94.2,
    weightAfter: 73.4,
    bodyFatBefore: 42.1,
    bodyFatAfter: 25.2,
    waistBefore: 120.0,
    waistAfter: 92.0,
    visceralFatBefore: 184.5,
    visceralFatAfter: 114.3,
    comment: `다이어트할 때 마운자로나 위고비를 많이 사용하더라고요. 저도 마운자로를 시작한 뒤 식욕과 체중이 빠르게 줄었지만, 투약 주기를 놓치자 식욕이 크게 올라가는 걸 경험하고 약을 끊는 것이 두려워졌어요. 결국 요요를 막으려면 약에만 의존하지 않고 생활 습관을 제 것으로 만들어야 했어요. 윔센터에서는 투약 중 필요한 단백질과 수분 섭취량, 혈당 반응, 활동량을 제 생활에 맞춰 코칭해주셨는데 그 덕분에 용량을 조금씩 조절하는 과정에서도 만들어놓은 생활 습관을 어렵지 않게 유지할 수 있었어요. 마운자로가 감량의 시작을 도왔다면, 윔센터는 그 시간을 활용해 약 없이도 이어갈 수 있는 생활 패턴을 만드는 과정이었어요.`,
    managerFeedback: `투약으로 섭취량이 감소한 시기에도 영양 불균형과 근손실이 발생하지 않도록 단백질·수분 섭취를 우선 관리하고, 혈당 반응과 활동량을 기반으로 약물 이후에도 유지할 수 있는 생활 패턴 형성에 집중함.`
  },
  {
    id: 2,
    name: '김**',
    gender: '남성',
    age: 19,
    program: 'Wellness Plus Max',
    period: '26주',
    hook: '먹는 걸로 풀던 스트레스, 이제는 운동으로 풉니다',
    comboImage: '/images/bna/testimonials/ba-2.webp',
    beforeImageLarge: '/images/bna/testimonials/2_before.webp',
    afterImageLarge: '/images/bna/testimonials/2_after.webp',
    weightBefore: 108.1,
    weightAfter: 77.0,
    bodyFatBefore: 35.8,
    bodyFatAfter: 14.7,
    waistBefore: 111.5,
    waistAfter: 83.7,
    visceralFatBefore: 143.6,
    visceralFatAfter: 59.3,
    comment: `고3 때 공부 스트레스로 배달음식을 많이 먹고 활동량도 거의 없다 보니 살이 많이 쪘습니다.

부모님이 걱정하셔서 권유해주신 게 계기가 되어 윔을 시작했는데, 처음에는 그냥 살 좀 빼보자는 생각이었습니다.

그런데 스트레스를 받을 때마다 먹는 걸로 풀던 습관이 줄고, 이제는 운동이나 다른 활동으로 스트레스를 풀게 된 게 가장 큰 변화였습니다.

살이 빠지니까 몸도 가벼워지고 자신감도 생겨서 친구들과 약속도 더 많이 잡게 됐고, 대학 생활도 기대됩니다.

고등학교 친구들이 살 빠졌다고 신기해하고, 무엇보다 걱정하시던 부모님이 이제는 걱정 안 해도 되겠다며 칭찬해주셔서 저도 뿌듯했습니다.`,
    managerFeedback: `식사량을 강하게 제한하기보다 스트레스와 음식 섭취가 연결되는 상황을 파악하고, 음식 외의 해소 활동을 늘려 감정적 식사를 대체하는 방향으로 관리함.`
  },
  {
    id: 3,
    name: '김**',
    gender: '여성',
    age: 32,
    program: 'Medi-WIM Plus',
    period: '18주',
    hook: '드레스는 하루, 돌아오는 법은 평생 남았습니다',
    comboImage: '/images/bna/testimonials/ba-3.webp',
    beforeImageLarge: '/images/bna/testimonials/3_before.webp',
    afterImageLarge: '/images/bna/testimonials/3_after.webp',
    weightBefore: 76.9,
    weightAfter: 62.4,
    bodyFatBefore: 34.2,
    bodyFatAfter: 25.1,
    waistBefore: 93.5,
    waistAfter: 87.0,
    visceralFatBefore: 159.0,
    visceralFatAfter: 131.9,
    comment: `결혼을 준비하며 평생 한 번뿐인 순간을 가장 예쁘고 건강한 모습으로 남기고 싶었어요.

특히 드레스를 입었을 때 신경 쓰이는 승모근과 팔뚝, 옆구리 라인이 고민이였는데 그날의 몸 상태에 맞춰 달라지는 기기 관리와 전담 매니저님의 세심한 피드백 덕분에 조급해하지 않고 안정적으로 감량할 수 있었어요.

단순히 결혼식까지 체중을 줄이는 것이 아니라, 이후에도 유지하고 회복하는 방법까지 함께 배워서 이제는 신혼여행을 다녀와도 생활이 잠시 달라져도 다시 제 리듬을 찾을 수 있다는 자신감이 생겼어요.`,
    managerFeedback: `결혼식 일정에 맞춰 감량 속도를 설정하되, 드레스 착용 시 고민되는 승모근·팔뚝·옆구리 라인을 중심으로 운동과 기기 관리를 병행함. 본식 이후 일정까지 고려해 부종 관리와 회복 기준도 함께 설정함.`
  },
  {
    id: 6,
    name: '이**',
    gender: '여성',
    age: 28,
    program: 'Wellness',
    period: '12주',
    hook: '제 인생의 마지막 다이어트였습니다',
    comboImage: '/images/bna/testimonials/ba-4.webp',
    beforeImageLarge: '/images/bna/testimonials/6_before.webp',
    afterImageLarge: '/images/bna/testimonials/6_after.webp',
    weightBefore: 82.9,
    weightAfter: 72.0,
    bodyFatBefore: 39.8,
    bodyFatAfter: 31.8,
    waistBefore: 95.2,
    waistAfter: 86.1,
    visceralFatBefore: 191.4,
    visceralFatAfter: 157.5,
    comment: `30대가 되면서 단순히 식사량을 줄이고 많이 운동을 하는 다이어트로는 오래 버틸 수 없다는 걸 느꼈어요.

직장에서의 불규칙한 식사와 야근, 스트레스는 결국 야식과 폭식으로 이어졌고요. 윔센터에서는 적게 먹는 법보다 제 식욕이 높아지는 원인과 생활 패턴을 먼저 분석해주셨어요. 제게 맞는 식사량과 간격, 일상에서 실천할 수 있는 활동을 찾아가자 체중뿐만 아니라 식욕과 컨디션까지 안정되기 시작했어요. 감량도 감량이지만, 반복적으로 살이 찌던 원인도 함께 바꿀 수 있었기에 이제는 잠시 흐트러져도 다시 제 리듬으로 돌아올 수 있어요. 윔센터에서 제 인생의 마지막 다이어트를 마무리 한 것 같아요.`,
    managerFeedback: `야근과 불규칙한 식사로 공복이 길어지면서 저녁 섭취가 커지는 패턴을 핵심 요인으로 설정함. 업무 일정에 맞춰 최소 식사 기준과 간편식 활용법을 만들고, 출퇴근과 업무 중 가능한 활동을 분산 배치함.`
  },
  {
    id: 7,
    name: '주**',
    gender: '여성',
    age: 26,
    program: 'Medi-WIM Plus',
    period: '18주',
    hook: '다낭성 탓인 줄 알았던 정체기, 원인은 데이터에 있었습니다',
    comboImage: '/images/bna/testimonials/ba-5.webp',
    beforeImageLarge: '/images/bna/testimonials/7_before.webp',
    afterImageLarge: '/images/bna/testimonials/7_after.webp',
    weightBefore: 73.0,
    weightAfter: 59.5,
    bodyFatBefore: 35.8,
    bodyFatAfter: 22.6,
    waistBefore: 96.6,
    waistAfter: 80.5,
    visceralFatBefore: 193.2,
    visceralFatAfter: 112.8,
    comment: `다낭성 진단을 받고 나서 예전보다 아무리 열심히 해도 살이 잘 안 빠지는 것 같았습니다.

쉐이크 다이어트도 해보고 운동도 꾸준히 했는데, 노력한 만큼 결과가 나오지 않아서 답답했습니다.

윔에서는 제 데이터를 분석해서 지금 왜 그런지 찾아준다고 해서 오게 됐는데, 병원이 아닌데도 혈당과 식단을 같이 분석해준다는 게 신기했습니다.

운동도 전문운동매니저가 제 몸 상태와 생활패턴을 보고 지금 어떤 운동을 어떻게 해야 효율적인지 알려줘서 도움이 됐습니다.

막연히 다낭성 때문이라고 생각했는데, 제가 놓치고 있던 생활습관이나 환경적인 부분을 알게 됐고 지금 제 상황에서 어떤 방향으로 관리해야 하는지도 명확해졌습니다.`,
    managerFeedback: `질환 자체만을 감량 정체의 원인으로 단정하지 않고 혈당 반응, 식사 간격, 수면과 활동량을 함께 분석함. 현재 체력과 생활 패턴에 맞는 운동 강도 및 빈도를 설정하고, 지속 가능한 대사 관리에 집중함.`
  },
  {
    id: 8,
    name: '김**',
    gender: '남성',
    age: 25,
    program: 'Medi-WIM Plus',
    period: '18주',
    hook: '굶지 않았고, 술자리도 피하지 않았습니다',
    comboImage: '/images/bna/testimonials/ba-6.webp',
    beforeImageLarge: '/images/bna/testimonials/8_before.webp',
    afterImageLarge: '/images/bna/testimonials/8_after.webp',
    weightBefore: 107.0,
    weightAfter: 87.6,
    bodyFatBefore: 36.7,
    bodyFatAfter: 21.4,
    waistBefore: 109.6,
    waistAfter: 93.1,
    visceralFatBefore: 149.6,
    visceralFatAfter: 85.6,
    comment: `대학교 들어오고 나서 사람 만날 일도 많아지고 사진 찍을 일도 많아지다 보니, 예전보다 제 몸이나 외모를 신경 쓰게 됐습니다.

운동이나 식단도 혼자 해봤는데 며칠 하다가 다시 돌아가는 게 반복돼서 친누나가 권유해준 걸 계기로 윔을 시작했습니다.

무조건 굶는 방식이 아니라 평소 먹는 음식이나 술자리에서도 어떻게 먹어야 하는지 알려줘서 생각보다 생활하면서 지키기 편했습니다.

살이 빠지니까 옷 입는 것도 편해지고 사진 찍을 때도 예전처럼 신경 쓰이지 않았습니다.

일단 지금은 알바하면서 돈을 좀 모으고, 빠진 체중 유지 잘하다가 여유 생기면 더 감량하러 다시 오려고 합니다.`,
    managerFeedback: `약속과 음주를 제한하기보다 실제 대학생활에서 적용할 수 있는 외식·술자리 선택 기준을 교육함. 평상시 관리와 약속 이후 회복 방법을 구분해 프로그램 종료 후에도 스스로 조절할 수 있도록 관리함.`
  }] as const;

type Testimonial = (typeof TESTIMONIALS)[number];

/* ───────────────────────── 상세 모달 ───────────────────────── */

/** 사진 옆에서 이전·다음 사례로 넘기는 동그란 화살표 */
function StepArrow({
  direction,
  onClick
}: {
  direction: 'prev' | 'next';
  onClick: () => void;
}) {
  const isPrev = direction === 'prev';
  return (
    <button
      type="button"
      aria-label={isPrev ? '이전 사례' : '다음 사례'}
      onClick={(event) => {
        event.stopPropagation();
        onClick();
      }}
      className={`absolute top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-primary-main text-white shadow-md transition-colors hover:bg-primary-main/90 ${
        isPrev ? 'left-0' : 'right-0'
      }`}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d={isPrev ? 'M15 18l-6-6 6-6' : 'M9 18l6-6-6-6'} />
      </svg>
    </button>
  );
}

/** 태블릿 이하는 전체 화면, PC(dt·1200px~)는 가운데 900px 모달 */
function TestimonialDetailModal({
  testimonial,
  onPrev,
  onNext,
  onClose
}: {
  testimonial: Testimonial;
  onPrev: () => void;
  onNext: () => void;
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);
  const {
    name,
    age,
    gender,
    program,
    period,
    comment,
    managerFeedback,
    weightBefore,
    weightAfter
  } = testimonial;
  /** 프로그램명은 데이터 값이 아니라 관리 기간으로 정한다 — 18주 이하면 Wellness */
  const periodWeeks = Number.parseInt(period, 10);
  const displayProgram = Number.isNaN(periodWeeks)
    ? program
    : periodWeeks <= 18
      ? 'Wellness'
      : 'Wellness Signature';
  const shortGender = gender === '여성' ? '여' : gender === '남성' ? '남' : gender;

  useEffect(() => setMounted(true), []);

  // 상세가 열려 있는 동안 뒤 페이지 스크롤을 잠근다.
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  // ESC 로도 닫는다
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  if (!mounted) return null;

  const deltas = [
    [COPY.weightLabel, weightBefore, weightAfter, 'kg'],
    [COPY.bodyFatLabel, testimonial.bodyFatBefore, testimonial.bodyFatAfter, 'kg'],
    [COPY.waistLabel, testimonial.waistBefore, testimonial.waistAfter, 'cm'],
    [COPY.visceralFatLabel, testimonial.visceralFatBefore, testimonial.visceralFatAfter, '㎠']
  ] as const;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex bg-white font-pretendard text-black dt:items-center dt:justify-center dt:bg-black/50 dt:p-6"
      onClick={(event) => {
        // PC에서 바깥 어두운 영역을 누르면 닫는다
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className="relative flex h-full w-full flex-col bg-white dt:h-auto dt:max-h-[90vh] dt:max-w-[900px] dt:overflow-hidden dt:rounded-2xl dt:shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-label={`${name} 감량 사례 상세`}
      >
        <button
          type="button"
          aria-label={COPY.closeLabel}
          className="absolute right-5 top-5 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#E8E8E8] text-white transition-colors hover:bg-gray-02 tb:right-10 tb:top-8 dt:right-6 dt:top-6"
          onClick={(event) => {
            event.stopPropagation();
            onClose();
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="flex-1 overflow-y-auto">
          {/* 모바일은 좌우 여백을 두고, 태블릿 이상은 가운데 정렬만으로 충분하다 */}
          <div className="mx-auto flex min-h-full w-full max-w-[750px] flex-col items-center px-5 pb-14 pt-20 tb:px-0 tb:pb-20 tb:pt-20 dt:pb-14 dt:pt-16">
            <div className="flex items-center justify-center gap-3 text-[24px] font-extrabold leading-[1.5] dt:text-[48px] dt:leading-[1.4]">
              <span className="text-[#A1A0A1]">{weightBefore.toFixed(1)}kg</span>
              <span className="text-[18px] text-primary-main dt:text-[22px]">▶</span>
              <strong className="font-extrabold text-primary-main">{weightAfter.toFixed(1)}kg</strong>
            </div>

            <div className="mt-5 h-[4px] w-full max-w-[560px] bg-primary-main" />

            <dl className="mt-4 flex w-full max-w-[560px] flex-wrap items-center gap-x-5 gap-y-2 whitespace-nowrap text-[14px] font-medium leading-[1.5] dt:text-[18px]">
              <div className="flex gap-2">
                <dt className="font-bold">{COPY.memberInfoLabel}</dt>
                <dd>
                  {age}세({shortGender})
                </dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-bold">{COPY.programLabel}</dt>
                <dd>{displayProgram}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-bold">{COPY.periodLabel}</dt>
                <dd>{period}</dd>
              </div>
            </dl>

            {/* 사진 좌우로 이전·다음 사례를 넘긴다. 글 영역과 겹치지 않도록 사진 줄 안에 둔다 */}
            <div className="relative mt-10 flex w-full max-w-[750px] justify-center tb:mt-9">
              <StepArrow direction="prev" onClick={onPrev} />
              <StepArrow direction="next" onClick={onNext} />

            {/* 합성 사진은 좌우 절반이 각각 전·후라 라벨 두 칸이 그대로 맞는다 */}
            <figure className="w-full max-w-[560px] overflow-hidden">
              <div className="relative aspect-[1240/670] w-full overflow-hidden bg-[#F4F4F4]">
                <img
                  src={testimonial.comboImage}
                  alt={`${name} 감량 전·후`}
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="grid grid-cols-2">
                <span className="bg-[#DEDEDC] py-2 text-center text-[15px] font-medium text-white">
                  {COPY.beforeLabel}
                </span>
                <span className="bg-primary-main py-2 text-center text-[15px] font-bold text-white">
                  {COPY.afterLabel}
                </span>
              </figcaption>
            </figure>
            </div>

            <div className="mt-9 grid w-full max-w-[560px] grid-cols-4">
              {deltas.map(([label, before, after, unit], index) => (
                <div
                  key={label}
                  className={`text-center text-primary-main ${index > 0 ? 'border-l-2 border-primary-main' : ''}`}
                >
                  <p className="text-[13px] font-bold leading-[1.5] tb:text-[16px] dt:text-[24px]">{label}</p>
                  <p className="mt-1 text-[13px] font-medium leading-[1.5] tb:text-[16px] dt:text-[24px]">
                    -{(before - after).toFixed(1)}
                    {unit}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 w-full max-w-[560px] rounded-[42px] border border-[#E3E3E3] bg-[#FAFAFA] p-5 text-[14px] leading-[1.65]">
              <p className="whitespace-pre-line text-[14px] font-medium leading-[1.5] dt:text-[16px]">{comment}</p>
              <p className="mt-3 text-right text-[12px] font-semibold text-primary-main">{COPY.memberReviewAuthor}</p>
            </div>

            {managerFeedback && (
              <div className="mt-5 w-full max-w-[560px] rounded-[42px] bg-primary-main p-5 text-[14px] leading-[1.65] text-white">
                <p className="whitespace-pre-line text-[14px] font-medium leading-[1.5] dt:text-[16px]">
                  {managerFeedback}
                </p>
                <p className="mt-3 text-right text-[12px] font-semibold">{COPY.managerReviewAuthor}</p>
              </div>
            )}

            <a
              href={COPY.ctaHref}
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary-main px-5 py-3 text-[14px] font-semibold text-white shadow-md transition-transform hover:scale-[1.02]"
            >
              {COPY.ctaLabel} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

/* ───────────────────────── 카드 ───────────────────────── */

/** 74 → '74.0kg' — 감량 전후 체중을 같은 자릿수로 맞춘다 */
const formatWeight = (value: number) => `${value.toFixed(1)}kg`;
/** '여성' 32 → '여/32세' — 이름 옆에 붙이는 짧은 표기 */
const formatWho = (gender: string, age: number) => `${gender.charAt(0)}/${age}세`;

/**
 * 감량 전·후가 한 장으로 합쳐진 사진 아래에
 * 체중 변화 한 줄, 회원 정보 한 줄, 후킹 문구 한 줄을 둔다.
 */
function TestimonialCard({
  testimonial,
  onDetailOpen
}: {
  testimonial: Testimonial;
  /** 카드를 누르면 불린다 — 목록이 상세를 연다 */
  onDetailOpen: () => void;
}) {
  const { name, age, gender } = testimonial;

  return (
    <article className="text-left">
      <button
        type="button"
        aria-label={`${name} 감량 사례 상세 보기`}
        className="block w-full cursor-pointer text-left"
        onClick={onDetailOpen}
      >
        <div className="relative aspect-[1240/670] overflow-hidden rounded-xl bg-gray-00 transition-shadow hover:shadow-lg tb:rounded-2xl">
          <img
            src={testimonial.comboImage}
            alt={`${name} ${COPY.beforeLabel} · ${COPY.afterLabel}`}
            className="h-full w-full object-cover"
          />
        </div>

        <h3 className="mt-5 break-keep text-[16px] font-bold leading-[1.5] text-black tb:text-[20px]">
          [{formatWeight(testimonial.weightBefore)} → {formatWeight(testimonial.weightAfter)}] {name}님
          {/* 성별·나이는 이름 옆에 작게 붙인다 */}
          <span className="ml-2 text-[13px] font-medium text-gray-02 tb:text-[15px]">
            {formatWho(gender, age)}
          </span>
        </h3>
        <p className="mt-2 break-keep text-[14px] font-medium leading-[1.5] text-gray-03 tb:text-[16px]">
          {testimonial.hook}
        </p>
      </button>

    </article>
  );
}

/* ───────────────────────── 캐러셀 ───────────────────────── */

/**
 * 후기 목록 — 한 화면에 두 장씩(모바일 한 장) 보여주고 좌우로 넘긴다.
 * embla 없이 스크롤 스냅으로 굴리고, 스크롤 위치로 현재 쪽을 센다.
 */
export default function BnaTestimonialsSection({ compact = false }: { compact?: boolean }) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  /** 상세를 연 사례의 순번. 모달은 하나만 두고 좌우로 넘긴다 */
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const openTestimonial = openIndex === null ? null : TESTIMONIALS[openIndex];

  /** 끝에서 넘기면 반대쪽 끝으로 돈다 */
  const stepTo = (step: 1 | -1) =>
    setOpenIndex((current) =>
      current === null ? current : (current + step + TESTIMONIALS.length) % TESTIMONIALS.length
    );

  const sync = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const { scrollLeft, clientWidth, scrollWidth } = viewport;
    setPageCount(Math.max(1, Math.round(scrollWidth / clientWidth)));
    setSelectedIndex(Math.round(scrollLeft / clientWidth));
  }, []);

  useEffect(() => {
    sync();
    window.addEventListener('resize', sync);
    return () => window.removeEventListener('resize', sync);
  }, [sync]);

  /** 한 번에 한 화면씩 넘긴다 */
  const scrollByPage = (direction: 1 | -1) => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    viewport.scrollBy({ left: direction * viewport.clientWidth, behavior: 'smooth' });
  };

  const scrollToPage = (index: number) => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    viewport.scrollTo({ left: index * viewport.clientWidth, behavior: 'smooth' });
  };

  return (
    <section className="overflow-hidden bg-white pb-16 pt-16 tb:pb-20 tb:pt-24">
      <div className={`mx-auto px-4 text-center tb:px-8 ${compact ? 'max-w-[1100px]' : 'max-w-[1280px]'}`}>
        <span className="mb-4 inline-block rounded-full bg-primary-sub-02 px-5 py-2 text-sm font-bold text-primary-main shadow-sm">
          Before &amp; After
        </span>
        <h2 className="mb-6 break-keep text-[28px] font-bold leading-[1.4] text-primary-main tb:text-[44px]">
          놀라운 변화,<br className="block tb:hidden" /> 검증된 성과
        </h2>
        <p className="mx-auto max-w-3xl text-[15px] leading-[1.6] text-gray-03 tb:text-[18px]">
          WIM의 맞춤형 프로그램으로 건강하게 체중 관리에 성공한
          <br className="hidden tb:block" /> 고객들의 실제 결과를 확인하세요
        </p>
      </div>

      <div className={`mx-auto mt-12 w-full px-4 tb:px-8 ${compact ? 'max-w-[1100px]' : 'max-w-[1200px]'}`}>
        <div
          ref={viewportRef}
          onScroll={sync}
          aria-label="고객 후기 캐러셀"
          className="flex snap-x snap-mandatory gap-0 overflow-x-auto scroll-smooth pb-8 pt-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {/* 한 화면에 두 장씩 — 모바일은 한 장씩 */}
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="min-w-0 shrink-0 basis-full snap-start px-2 tb:basis-1/2 tb:px-3"
            >
              <TestimonialCard
                testimonial={testimonial}
                onDetailOpen={() => setOpenIndex(index)}
              />
            </div>
          ))}
        </div>

        {pageCount > 1 && (
          <div className="mt-4 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => scrollByPage(-1)}
              className="rounded-full bg-primary-sub-03 p-2 text-primary-main transition-colors hover:bg-primary-sub-02"
              aria-label="이전 후기"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex justify-center gap-3">
              {Array.from({ length: pageCount }, (_, index) => (
                <button
                  type="button"
                  key={index}
                  onClick={() => scrollToPage(index)}
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${
                    index === selectedIndex
                      ? 'scale-125 bg-primary-main shadow-sm'
                      : 'bg-gray-02 opacity-70 hover:opacity-100'
                  }`}
                  aria-label={`${index + 1}번째 후기 보기`}
                  aria-current={index === selectedIndex ? 'true' : undefined}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => scrollByPage(1)}
              className="rounded-full bg-primary-sub-03 p-2 text-primary-main transition-colors hover:bg-primary-sub-02"
              aria-label="다음 후기"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {openTestimonial && (
        <TestimonialDetailModal
          testimonial={openTestimonial}
          onPrev={() => stepTo(-1)}
          onNext={() => stepTo(1)}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </section>
  );
}
