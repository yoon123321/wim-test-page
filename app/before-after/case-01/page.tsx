/**
 * 감량 사례 상세 (회원 A). 문구·수치·사진 경로는 아래 DETAIL 에서 고친다.
 * 섹션 부품은 ../caseDetail 에 있다.
 */

import {
  CaseDetailPage,
  CaseHeroSection,
  type BnaCaseDetail
} from '../caseDetail';

const DETAIL: BnaCaseDetail = {
  slug: 'case-01',

  card: {
    title: '000kg 감량',
    message: '의지가 아니라 설계로 뺍니다.',
    image: '/images/bna/case-01-card.webp',
    imageMobile: '/images/bna/case-01-card.webp',
    alt: '감량 후 회원님의 모습'
  },

  intro: {
    eyebrow: 'Before & After',
    title: '감량 사례',
    description: '요요 없는 감량으로 몸과 일상을 모두 되찾은\n회원들의 이야기를 들려드립니다.'
  },

  hero: {
    eyebrow: '박민아님(가명) | 무용가 · 안무가',
    accent: '',
    titleLines: ['83.5kg 였던 무용수,', '다시 무대 위에서 빛나다.'],
    watermark: '-14',
    watermarkUnit: 'kg',
    images: [
      {
        src: '/images/bna/case-01-hero.webp',
        alt: '회원님의 감량 전(왼쪽)과 감량 후(오른쪽) 모습'
      }
    ],
    summaryLines: ['윔과 함께 몸도, 일상도,', '자신감도 달라지고 있습니다.'],
    before: { label: 'Before', value: '83.5', unit: 'kg' },
    after: { label: 'After', value: '69.1', unit: 'kg' }
  },

  heroCta: {
    quote: '회원님이 받고 있는 프로그램이 궁금하세요?',
    label: '프로그램 보러가기',
    href: '/diet-program'
  },

  video: {
    titleLines: ['회원님의 감량 기록', '윔과 함께한 변화의 과정'],
    youtubeId: '',
    poster: '/images/diet-program/coaching-process-bg.webp',
    posterAlt: '감량 과정을 담은 영상 자리'
  },

  change: {
    before: {
      label: 'Before',
      value: '83.5',
      unit: 'kg',
      image: '/images/bna/case-01-change-before.webp',
      alt: '회원님의 감량 전 모습'
    },
    after: {
      label: 'After',
      value: '69.1',
      unit: 'kg',
      image: '/images/bna/case-01-change-after.webp',
      alt: '회원님의 감량 후 모습'
    },
    measures: [
      { label: '체중', before: '83.5kg', after: '69.1kg' },
      { label: '복부 둘레', before: '94.2cm', after: '80.6cm' },
      { label: 'BMI', before: '28.9kg/m²', after: '23.9kg/m²' }
    ]
  },

  metrics: {
    title: '회원님의 신체 변화',
    beforeLabel: 'Before',
    afterLabel: 'After',
    cards: [
      {
        title: '체지방',
        delta: '-11.3',
        unit: 'kg',
        before: 30.5,
        after: 19.2
      },
      {
        title: '내장지방',
        delta: '-56.8',
        unit: 'cm²',
        before: 130.2,
        after: 73.4,
        chart: 'vfa',
        age: 37,
        image: '/images/bna/case-01-vfa.webp',
        imageAlt: '나이별 내장지방 분포에서 감량 전 130.2cm², 감량 후 73.4cm² 위치'
      },
      { title: '골격근', delta: '-2', unit: 'kg', before: 29.5, after: 27.5 }
    ]
  },

  stories: [
    {
      title: '무조건 굶어야 한다고 생각했어요.',
      sectionLabel: 'BEFORE',
      paragraphs: [
        {
          mobile: '회원님은 중학생 때부터 무용을 하며 수없이 다이어트를\n반복하셨대요. 입시 때가 되면 굶고, 끝나면 다시 찌고…\n무대가 생기면 또 굶는 생활의 반복.',
          desktop: '회원님은 중학생 때부터 무용을 하며 수없이 다이어트를 반복하셨대요.\n입시 때가 되면 굶고, 끝나면 다시 찌고… 무대가 생기면 또 굶는 생활의 반복.'
        }
      ],
      images: ['/images/bna/case-01-before-1.webp'],
      imageSide: 'right',
      imagePlaceholder: '비포 일상 사진'
    },
    {
      title: '끊으면 다시 찌는 건 아닐까?',
      paragraphs: [
        '결혼 후 83.5kg까지 찌고 삭센다, 위고비, 마운자로까지 다 맞아봤지만 빼는 것보다 어려웠던 건 다시 찌지 않는 거였다고 해요.'
      ],
      images: ['/images/bna/case-01-before-2.webp'],
      imageSide: 'left',
      imagePlaceholder: '비포 스튜디오 사진'
    },
    {
      title: '운동은 이미 누구보다 많이 하고 있었습니다.',
      paragraphs: [
        '아침 운동에 무용 연습까지. 움직임이 부족한 사람은 아니었어요.',
        '그런데 아무리 열심히 운동을 해도 살은 빠지지 않고 오히려 붓기만 하셨대요.'
      ],
      images: ['/images/bna/case-01-before-3-wide.webp'],
      imageSide: 'left',
      wideLayout: 'full',
      imagePlaceholder: '운동하는 일상 사진'
    },
    {
      title: '더 줄이는 대신, 제대로 먹기 시작했습니다.',
      paragraphs: [
        '분명 더 적게 먹으라고 할 줄 알았는데 매니저님은 오히려 더 많이, 제대로 챙겨 먹으라고 하셨대요. 그래서 부족했던 영양을 채우고, 가짜 배고픔과 음식에 대한 갈망부터 줄여나갔습니다.'
      ],
      images: ['/images/bna/case-01-solution-1.webp'],
      imageSide: 'left',
      imagePlaceholder: '상담 받는 사진 혹은 카톡 대화 스크린샷',
      sectionLabel: 'WIM SOLUTION'
    },
    {
      title: '배가 부르니까, 간식이 당기지 않더라고요.',
      paragraphs: [
        '처음엔 이렇게 먹으면서 정말 빠질까 의심도 많이 하셨대요.',
        '그런데 잘 먹기 시작하자 간식을 억지로 참는 일도, 야식 생각도 서서히 사라졌다고 해요.'
      ],
      images: ['/images/bna/case-01-solution-2.webp'],
      imageSide: 'right',
      imagePlaceholder: '중간 일상 사진'
    },
    {
      title: '제대로 회복하니 그제야 몸이 제 말을 들어주는 것 같았어요.',
      paragraphs: [
        '매주 센터에 방문해서 그날 컨디션에 맞게 기기관리를 받고 나면 항상 체중이 쑥 내려갔대요.',
        '억지로 운동하며 스트레스만 받았던 지난 시간들이 어이가 없을 지경이라고 하시더라고요.'
      ],
      images: ['/images/bna/case-01-solution-3.webp'],
      imageSide: 'left',
      imagePlaceholder: '중간 기기관리 사진',
      wideLayout: 'full'
    },
    {
      title: '몸이 다시 가벼워졌어요.',
      paragraphs: [
        '회원님은 무엇보다 굶지 않고 살이 빠진 게 가장 신기하다고 하세요. 몸이 다시 가벼워지니 무용도, 일상도 더욱 활기차졌고요.'
      ],
      images: ['/images/bna/case-01-after-1.webp'],
      imageSide: 'left',
      imagePlaceholder: '애프터 일상 사진',
      sectionLabel: 'AFTER',
      sectionLayout: 'zigzag'
    },
    {
      title: '예전에 입던 옷도 커져서\n옷을 전부 다시 샀어요.',
      paragraphs: [
        '한동안 멀리했던 몸에 붙는 옷도 자연스럽게 찾게 됐대요. 예전에 잘 입던 옷이 다시 편해지던 순간, 너무나 뿌듯했다고 하셨어요.'
      ],
      images: ['/images/bna/case-01-after-2.webp'],
      imageSide: 'right',
      imagePlaceholder: '애프터 스튜디오 사진'
    },
    {
      title: '무대가 다시 편해졌어요.',
      paragraphs: [
        '이제는 무릎이 아프지도 않고 예전처럼 금방 지치지도 않으신대요.',
        '그래서 회원님의 목표는 가장 말랐던 몸으로 돌아가는 게 아닙니다.',
        {
          mobile: '무대 위에서 오래도록 편히 움직일 수 있는\n건강하고 예쁜 몸을 유지하는 것.',
          desktop: '무대 위에서 오래도록 편히 움직일 수 있는 건강하고 예쁜 몸을 유지하는 것.'
        },
        'WIM에서 배운 모든 것들이 회원님의 삶을 지탱해 줄 거예요.'
      ],
      images: ['/images/bna/case-01-after-3.webp'],
      imageSide: 'right',
      imagePlaceholder: '무대 사진',
      wideLayout: 'full'
    }
  ],

  ctaBand: {
    quote: '회원님처럼 쉽고 건강하게 감량하고 싶다면?',
    description:
      '내가 다시 찌는 이유를 찾고, 내 라이프스타일에 맞는 감량 방법을 설계합니다.',
    label: '나에게 맞는 감량 상담받기'
  }
};

export default function Page() {
  return (
    <CaseDetailPage detail={DETAIL} hero={<CaseHeroSection hero={DETAIL.hero} />} />
  );
}
