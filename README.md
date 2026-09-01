# WIM 센터 웹 목업

Next.js App Router + TypeScript + Tailwind CSS v4.

한 페이지마다 **버전1(기존안)과 버전2(개선안)** 두 벌이 있고, 헤더 오른쪽 스위치로 전환합니다.
선택은 `localStorage`에 저장되어 새로고침해도 유지됩니다.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run lint
```

---

## 폴더 규칙

세 폴더가 각각 **어디에 붙나 / 어떻게 보이나 / 무엇이 들어가나**를 맡습니다.

```
app/           라우트. 폴더 이름이 곧 URL
components/    화면을 그리는 코드 (.tsx)
data/          화면에 들어갈 값 (.ts)
public/        이미지·아이콘
```

### 라우트 이름은 페이지 성격으로

`wireframe-1` 같은 작업용 이름을 쓰지 않습니다.

| URL | 페이지 |
|---|---|
| `/` | 메인 |
| `/brand` | 브랜드 소개 |
| `/diet-program` | 감량 프로그램 |
| `/recovery` | 기기관리(리커버리) |
| `/before-after` | 다이어트 사례 |
| `/promotion` | 프로모션 |
| `/contact` | 상담 문의 |

### 셋이 라우트 이름으로 1:1 대응

`/diet-program` 하나를 고치려면 세 곳만 보면 됩니다.

```
app/diet-program/page.tsx                    라우트
components/diet-program/DietLanding.tsx      화면 — 버전1
components/diet-program/DietLandingNew.tsx   화면 — 버전2
data/diet.ts                                 문구 — 버전1
data/diet-new.ts                             문구 — 버전2
```

### 버전1 / 버전2 는 이름으로 구분

| | 버전1 (기존안) | 버전2 (개선안) |
|---|---|---|
| 컴포넌트 | `XLanding.tsx` | `XLanding**New**.tsx` |
| 데이터 | `x.ts` | `x**-new**.ts` |

### components 와 data 의 경계

|  | `components/` | `data/` |
|---|---|---|
| 확장자 | `.tsx` (JSX 있음) | `.ts` (JSX 없음) |
| 내용 | 마크업·레이아웃·상태·이벤트 | 문구, 이미지 경로, 카드 배열 |

**`data/` 에는 React 코드를 두지 않습니다.** 문구만 고칠 때 컴포넌트를 열지 않아도 되도록 나눈 것입니다.

```ts
// data/home-new.ts — 값만
export const WIM_NEW_COPY = { ... };
export const WIM_NEW_TESTS = [ ... ];

// components/home/WimMainNew.tsx — 그 값으로 화면을 만든다
import { WIM_NEW_COPY, WIM_NEW_TESTS } from "@/data/home-new";
```

`components/common/` 에는 **두 페이지 이상이 쓰는 것만** 둡니다. 한 페이지 전용이면 그 페이지 폴더로 내립니다.

---

## 디자인 시스템

### 컬러 — `app/globals.css` 의 `@theme`

피그마 `center_*` 변수의 확정값입니다. **raw hex 대신 토큰 유틸리티로 씁니다.**

```
primary-main   #155e35      primary-sub-01~03
gray-00~03                  black  white
```

```tsx
<div className="bg-primary-main text-white" />   // O
<div className="bg-[#155e35]" />                 // X
```

코어 팔레트에 없지만 시안에서 반복되는 표면색(`primary-deep`, `review-surface` 등)은 같은 파일의 **확장 블록**에 따로 모여 있습니다.

### 타이포 — `app/typography.css`

클래스 하나에 **서체 · 굵기 · 크기 · 줄높이 · 자간**이 모두 들어 있습니다.

```
PC     text-{서체}-{굵기}-{스타일}       text-pretendard-bold-title-01      28px
모바일  text-mo-{서체}-{굵기}-{스타일}    text-mo-pretendard-bold-title-01   30px
```

PC와 모바일은 **스타일 이름 체계가 다릅니다.** 모바일에는 Display 가 없고 Title 이 01~03 입니다.
같은 이름이라도 크기가 다르므로 세트를 섞지 않습니다. 섞을 때는 모바일을 기본값에 두고 PC로 덮어씁니다.

```tsx
<h2 className="text-mo-pretendard-bold-title-01 dt:text-pretendard-bold-display-01" />
```

| 서체 | 굵기 | 자간 |
|---|---|---|
| `pretendard` | regular · medium · bold (+ semibold · extrabold는 시안 전용) | **-2%** |
| `franklin` | book · medium · demi | 0 |
| `garamond` | medium | 0 |

### 브레이크포인트 — 3단계

Tailwind 기본 `sm/md/lg/xl` 은 제거했습니다. 이 셋만 씁니다.

```
(없음)   ~767px      모바일
tb:      768~1199px  태블릿
dt:      1200px~     PC
```

---

## 알아두면 좋은 것

- **버전 스위치**는 `components/common/VariantProvider.tsx` 가 관리합니다. 첫 렌더는 항상 버전1이고, 마운트 후 `localStorage` 를 읽어 전환합니다(하이드레이션 불일치 방지). 그래서 버전2를 보려면 헤더 스위치를 한 번 눌러야 합니다.
- **헤더는 한 벌입니다.** `components/common/HeaderMain.tsx` 를 두 버전이 함께 씁니다. 메뉴는 `data/navigation.ts` 의 `NAVIGATION_MAIN` 에서 수정합니다.
- **메인의 STEP 01·02 섹션**(`TestsSection`, `CaresSection`)은 `WimMainNew.tsx` 에서 export 되어 감량 페이지에서도 그대로 씁니다. 문구를 고치면 두 페이지에 함께 반영됩니다.
- **이미지 경로**는 `data/home-new.ts` 의 `WIM_NEW_IMAGES` / `WIM_NEW_ICONS` 한 곳에 모여 있습니다. 같은 이름으로 파일만 덮어쓰면 코드 수정이 필요 없습니다.
