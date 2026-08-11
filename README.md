# 와이어프레임 React / Next.js 코드

Next.js App Router + TypeScript 기준. 별도 라이브러리·Tailwind 불필요 (모두 인라인 스타일).

## 파일

```
app/wireframe-1/page.tsx        # 1번 와이어프레임 라우트
app/wireframe-2/page.tsx        # 2번 와이어프레임 라우트
components/wireframe/
  primitives.tsx                # Bar / ImgBox / Row / Stack / Section, 색상 토큰
  WireframeOne.tsx              # 1081px, 섹션 01~07
  WireframeTwo.tsx              # 792px, 헤더 + 섹션 01~07
```

프로젝트에 그대로 복사하면 `/wireframe-1`, `/wireframe-2`에서 열립니다.
`@/` 별칭을 안 쓰면 import 경로만 상대경로로 바꾸세요.

## 인터랙션 (`useState`)

**1번**
- 02 말풍선: 클릭 → 해당 말풍선만 강조, 다시 클릭 시 해제
- 03 로드맵: 6단계 클릭 → 아래 미리보기 크기 변경
- 06 요금 카드: 3종 중 선택
- 07 FAQ: 행 클릭 → 아코디언 펼침

**2번**
- 헤더 네비 선택
- 02 3M 원/우측 항목 클릭 연동
- 05 케어팀 원/하단 설명 클릭 연동
- 07 카드 4종 선택

## 리액트로 옮길 때 바뀐 점

- 반복 블록은 배열(`BUBBLES`, `PLANS`, `FAQS` 등) + `map`으로 정리했습니다. 개수·위치는 그 배열만 고치면 됩니다.
- 회색 바 / 이미지 자리 박스는 `Bar`, `ImgBox` 컴포넌트로 통일했습니다.
- 색상은 `primitives.tsx`의 `C` 객체에 모여 있습니다.
- 상태를 쓰는 컴포넌트에는 `"use client"`가 붙어 있습니다.
