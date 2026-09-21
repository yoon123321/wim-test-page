import { cn } from '@/lib/utils';

/** 리뉴얼 페이지 공통 컨테이너. 1280 컨테이너가 여백을 갖기 전(wide)까지는 px-5 를 유지한다. */
export function Container({
  children,
  className = ''
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('mx-auto w-full max-w-[1280px] px-5 wide:px-0', className)}>
      {children}
    </div>
  );
}

/**
 * 문구 한 벌. 모바일과 PC의 줄바꿈이 다르면 { mobile, desktop } 으로 적는다.
 *   result: '한 줄로 쓰고 \n 으로 끊기'
 *   result: { mobile: '모바일용\n줄바꿈', desktop: 'PC용\n줄바꿈' }
 */
export type BreakText = string | { mobile: string; desktop: string };

function SplitLines({ text }: { text: string }) {
  const lines = text.split('\n');
  if (lines.length === 1) return <>{text}</>;
  return (
    <>
      {lines.map((line, index) => (
        <span key={line}>
          {index > 0 && <br />}
          {line}
        </span>
      ))}
    </>
  );
}

/** 문자열 안의 \n 을 줄바꿈으로 렌더한다. 줄바꿈 위치는 data/diet-program.ts 에서 조정한다. */
export function LineBreaks({ text }: { text: BreakText }) {
  if (typeof text === 'string') return <SplitLines text={text} />;
  return (
    <>
      <span className="tb:hidden">
        <SplitLines text={text.mobile} />
      </span>
      <span className="hidden tb:inline">
        <SplitLines text={text.desktop} />
      </span>
    </>
  );
}

/**
 * 문자열 안의 \n 을 모바일에서만 줄바꿈으로 렌더한다. PC 는 한 줄로 이어 붙인다.
 * 줄바꿈 위치는 data/diet-program.ts 문구의 \n 으로 조정한다.
 */
export function MobileLineBreaks({ text }: { text: string }) {
  const lines = text.split('\n');
  if (lines.length === 1) return <>{text}</>;
  return (
    <>
      {lines.map((line, index) => (
        <span key={line}>
          {index > 0 && <br className="tb:hidden" />}
          {index > 0 && ' '}
          {line}
        </span>
      ))}
    </>
  );
}
