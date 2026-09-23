/**
 * 감량 사례 상세 (회원 B). 문구·수치·사진 경로는 아래 DETAIL 에서 고친다.
 * 섹션 부품은 ../caseDetail 에 있다. 히어로는 모바일 순서가 달라 Case02HeroSection 을 쓴다.
 */

import {
  Case02HeroSection,
  CaseDetailPage,
  type BnaCaseDetail
} from '../caseDetail';

const DETAIL: BnaCaseDetail = {
  slug: 'case-02',
  // 숫자 자리는 000 으로 비워뒀고, 사진 경로는 case-02-*.webp 규칙만 잡아뒀다.

  card: {
    title: '30kg 감량',
    message: '95kg였던 개발자\n약 30kg 감량',
    image: '/images/bna/card-02.webp',
    imageMobile: '/images/bna/card-02-mobile.webp',
    alt: '감량 후 회원님의 모습'
  },

  intro: {
    eyebrow: 'Before & After',
    title: '감량 사례',
    description: '요요 없는 감량으로 몸과 일상을 모두 되찾은\n회원들의 이야기를 들려드립니다.'
  },

  hero: {
    eyebrow: '김가빈(가명) | 개발자',
    accent: '',
    // 첫 줄은 보통 굵기, 나머지 줄은 굵게 나온다
    titleLines: [
      '82kg였던 개발자,',
      '30kg 감량 후',
      '모태 마름으로 오해 받는 중'
    ],
    watermark: '-30',
    watermarkUnit: 'kg',
    images: [
      {
        src: '/images/bna/case-02-hero.webp',
        alt: '노트북을 들고 선 회원님의 감량 후 모습'
      }
    ],
    summaryLines: ['감량 후 계속 유지 중'],
    before: { label: 'Before', value: '82.4', unit: 'kg' },
    after: { label: 'After', value: '52.2', unit: 'kg' }
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
      value: '82.4',
      unit: 'kg',
      image: '/images/bna/case-02-change-before.webp',
      alt: '회원님의 감량 전 모습'
    },
    after: {
      label: 'After',
      value: '52.2',
      unit: 'kg',
      image: '/images/bna/case-02-change-after.webp',
      alt: '회원님의 감량 후 모습'
    },
    measures: [
      { label: '체중', before: '82.4kg', after: '52.2kg' },
      { label: '복부 둘레', before: '88.2cm', after: '66.6cm' },
      { label: 'BMI', before: '29.2kg/m²', after: '19.0kg/m²' }
    ]
  },

  metrics: {
    title: '회원님의 신체 변화',
    beforeLabel: 'Before',
    afterLabel: 'After',
    cards: [
      {
        title: '체지방',
        delta: '-22.1',
        unit: 'kg',
        before: 32.6,
        after: 10.5,
        afterBarBoostPercent: 20
      },
      {
        title: '내장지방',
        delta: '-97.1',
        unit: 'cm²',
        before: 133.5,
        after: 36.4,
        chart: 'vfa',
        age: 37,
        image: '/images/bna/case-02-vfa.webp',
        imageAlt: '나이별 내장지방 분포에서 감량 전 133.5cm², 감량 후 36.4cm² 위치'
      },
      { title: '골격근', delta: '-4.7', unit: 'kg', before: 27.8, after: 23.1 }
    ]
  },

  stories: [
    {
      title: '다이어트 50번은 한 것 같아요.',
      sectionLabel: 'BEFORE',
      paragraphs: [
        '유정님은 음식으로 스트레스를 해소하고, 폭식과 극단적으로 빼기를 반복하셨대요.\n저탄고지, 저지방, 1일 1식 등 유행하는 다이어트는 다 해봤지만 항상 요요가 왔다고 합니다.'
      ],
      images: ['/images/bna/case-02-before-1.webp'],
      imageSide: 'right',
      imagePlaceholder: '과거 비포 사진'
    },
    {
      title: '안 먹고 빼는 게 얼마나 위험한지 그땐 몰랐어요.',
      paragraphs: [
        '20대 초반에는 키토 식단을 하며 탄수화물을 극단적으로 줄였다가 색소성 양진이라는 질병까지 얻으셨대요.\n온몸이 붉은 발진으로 뒤덮여 가렵고 따가운 염증성 피부질환이었습니다.'
      ],
      images: ['/images/bna/case-02-before-2.webp'],
      imageSide: 'left',
      imagePlaceholder: '20대 초반 당시 사진'
    },
    {
      title: '아무리 빼도 계속 원점으로 돌아왔어요.',
      paragraphs: [
        '피부 질환까지 얻으며 살을 뺐지만 업무가 과중해지면 술과 야식으로 스트레스를 풀다 보니 금세 다시 체중이 올랐대요.\n그렇게 찌고 빼고 다시 찌는 일이 수년에 걸쳐 반복됐습니다.'
      ],
      images: ['/images/bna/case-02-before-3-wide.webp'],
      imageSide: 'left',
      wideLayout: 'full',
      imagePlaceholder: '직장생활 당시 일상 사진'
    },
    {
      title: '제가 무너지는 패턴을 찾아주셨어요.',
      sectionLabel: 'WIM SOLUTION',
      paragraphs: [
        '유정님은 의지가 부족한 분이 아니었어요.\n하지만 자극 추구가 높은 기질을 갖고 계셨고, 음식 말고는 다른 스트레스 해소 방법을 아시지 못하는 상황이었어요.\n그래서 WIM은 유정님의 생활 패턴부터 함께 분석하고 그간 왜 그렇게 요요를 반복하셨는지 그 원인을 찾아드렸습니다.'
      ],
      images: ['/images/bna/case-02-solution-1.webp'],
      imageSide: 'left',
      imagePlaceholder: '윔 레포트 사진'
    },
    {
      title: '제 강박이 저를 더 망치고 있었다는 걸 깨달았어요.',
      paragraphs: [
        '게다가 유정님은 반복된 실패로 다이어트에 심각한 강박을 갖고 계셨어요.\n조금이라도 먹게 되면 ‘또 망했다’는 생각이 들어 더 심한 폭식으로 이어졌구요.\n그래서 매니저님은 유정님이 강박적 사고로부터 벗어날 수 있도록 계속해서 사고 전환을 도우셨다고 해요.'
      ],
      images: ['/images/bna/case-02-solution-2.webp'],
      imageSide: 'right',
      imagePlaceholder: '센터에서 이야기 나누는 일상 사진'
    },
    {
      title: '참는 게 아니라 선택하는 거라는 걸, 마침내 체득했어요.',
      paragraphs: [
        '유정님에게 필요한 건 새로운 금지 목록이 아니었어요.\n잠시 일탈을 즐겨도 언제나 다시 건강한 일상으로 돌아올 수 있도록, 지킬 수 없는 완벽함보다 지속할 수 있는 기준과 돌아오는 방법을 담당 매니저님과 함께 만들어나갔습니다.'
      ],
      images: ['/images/bna/case-02-solution-3.webp'],
      imageSide: 'left',
      wideLayout: 'full',
      imagePlaceholder: '식사 기록 / 일상 사진'
    },
    {
      title: '평생 유지하는 법을 이제야 알 것 같아요.',
      sectionLabel: 'AFTER',
      sectionLayout: 'zigzag',
      paragraphs: [
        'WIM과 함께한 후 유정님은 이전과는 다른 편안한 마음으로 먹고, 일하고, 쉬는 생활을 이어가고 계신대요.\n다이어트를 성공과 실패로 나누지 않고, 나를 위한 선택을 조금 더 자주 하는 방법을 이제야 알 것 같다구요.'
      ],
      images: ['/images/bna/case-02-after-1.webp'],
      imageSide: 'left',
      imagePlaceholder: '애프터 일상 사진'
    },
    {
      title: '진정으로 달라진 제 모습을 제대로 남기고 싶었어요.',
      paragraphs: [
        '체지방 9kg. 유정님을 처음 만나는 분들은 유정님이 모태 마름인 줄 아신대요.\n이 변화를 기념하기 위해 WIM에서 스튜디오 촬영을 지원해드렸어요.\n카메라 앞에서 더 이상 위축되지 않고 당당하게 아무런 포즈를 취할 수 있다며 너무나 기뻐하셨습니다:)'
      ],
      images: ['/images/bna/case-02-after-2.webp'],
      imageSide: 'right',
      imagePlaceholder: '애프터 스튜디오 사진'
    },
    {
      title: '다이어트가 더 이상 제 삶을 지배하지 않아서 너무 좋아요!',
      paragraphs: [
        '수없이 찌고 빼기를 반복했던 유정님에게 가장 큰 변화는 무엇보다 ‘평생 유지할 수 있다는 자신감’ 이래요.\n스트레스가 많은 날에는 여전히 맛있는 음식을 먹곤 하지만, 그 한 번으로 완전히 무너지지 않게 되었고 일상 생활 안에서 다시 균형 잡는 법을 체득했다고 하십니다.'
      ],
      images: ['/images/bna/case-02-after-3.webp'],
      imageSide: 'right',
      wideLayout: 'full',
      imagePlaceholder: '밝은 애프터 전신 사진'
    }
  ],


  ctaBand: {
    quote: '유정님처럼 마지막 다이어트를 하는 방법이 궁금하다면?',
    description:
      '상담을 통해 내가 왜 다이어트를 계속 반복하는지 원인을 확인해 보세요.',
    label: '나에게 맞는 감량 상담받기'
  }
};

export default function Page() {
  return (
    <CaseDetailPage detail={DETAIL} hero={<Case02HeroSection hero={DETAIL.hero} />} />
  );
}
