# 실버케어 파트너스 구현 절차 (TASK Checklist)

본 문서는 `PRD.md`에 명시된 요구사항을 바탕으로, 실제 웹사이트(SPA)를 구현하기 위한 개발 절차를 단계별로 나눈 체크리스트입니다.

## 1. 프로젝트 초기 설정 (Project Setup)
- [ ] 작업 디렉토리 구성 (CSS, JS, 메인 HTML 파일 생성)
- [ ] GitHub 로컬 저장소 초기화 및 원격 연결 (`git init`, `git remote`)
- [ ] 기초 HTML 구조 명세 (`<!DOCTYPE html>`, `<html>`, `<body>`) 작성
- [ ] `<head>` 내 메타 태그(Meta description), 파비콘(Favicon) 기본 설정 
- [ ] Noto Sans KR, Inter 등 폰트 리소스 연결 (Google Fonts)
- [ ] 아이콘 리소스(FontAwesome 등) CDN 연동

## 2. 검색엔진 최적화 (SEO & 비기능 요구사항 I)
- [ ] `PRD 7.3` 기준에 맞춰 타겟 키워드 중심의 `<title>` 속성 설정
- [ ] Open Graph (`og:image`, `og:title`, `og:description`) 구현
- [ ] HTML5 시맨틱 태그(`header`, `main`, `nav`, `section`, `footer`) 틀잡기
- [ ] 스크린 리더를 위한 `aria-label` 부여 전략 기획 및 이미지 필수 `alt` 속성 표기 원칙 준비

## 3. 공통 스타일 및 테마 구성 (Global Styling)
- [ ] CSS 초기화(Reset) 및 박스 사이징 적용 (`box-sizing: border-box`)
- [ ] 루트(`:root`)에 테마 색상 변수 지정 
  - [ ] 주조색: 따뜻한 파스텔 핑크/베이지 (`#ffe4e1` 계열 등)
  - [ ] 보조색: 블루 및 그린
- [ ] 색상과 가독성을 고려한 전역 폰트 크기 및 타이포그래피 설정
- [ ] 버튼(`btn-primary`, `btn-outline` 등) 및 폼 공통 UI 컴포넌트 클래스 작성
- [ ] 기본 마이크로 애니메이션(`fade-in` 등)용 CSS/Keyframes 마련

## 4. 메인 컴포넌트 개발 단계 1 (Header & Hero)
- [ ] **헤더 (Header / Navigation)**
  - [ ] 로고 공간, 시니어 친화적인 GNB(Global Navigation Bar) 항목 추가
  - [ ] 스크롤 시 헤더 고정 또는 배경 변경 로직 (JS)
  - [ ] 모바일 햄버거 메뉴 및 드롭다운 토글 기능 (반응형 대응)
- [ ] **히어로 섹션 (Hero Section)**
  - [ ] 시각적 안정성을 담은 부모님 이미지(Placeholder) 세팅 
  - [ ] 메인 슬로건 텍스트 레이아웃 배치 ("당신이 받은 사랑...")
  - [ ] [무료 상담 신청] 콜투액션(CTA) 버튼 구성

## 5. 메인 컴포넌트 개발 단계 2 (About, Services, Packages)
- [ ] **회사 소개 (About Us)**
  - [ ] 설립 연도, 직원 규모, 지역 등의 회사 정보를 카드/텍스트 뷰로 구조화
- [ ] **서비스 소개 (Services)**
  - [ ] CSS Grid/Flexbox를 이용해 7가지 핵심 서비스 항목을 카드 인터페이스로 나열
  - [ ] 자녀 입장을 대변하는 감성적 카피라이팅 삽입
- [ ] **서비스 패키지 (Pricing & Packages)**
  - [ ] 사랑방, 든든한 동행, 존엄한 여정 패키지를 비교하기 쉬운 3단 요금표/카드 UI로 배치

## 6. 메인 컴포넌트 개발 단계 3 (Why Us, Testimonials, Team)
- [ ] **왜 실버케어인가 (Why Us)**
  - [ ] 차별화 요인 3가지를 강조하는 아이콘 박스 UI 생성
- [ ] **고객 후기 (Testimonials)**
  - [ ] 자녀 고객/시니어 고객의 실제 후기를 캐러셀(Carousel) 또는 그리드 형태로 표출
- [ ] **팀 소개 (Team)**
  - [ ] 대표 및 주요 팀원의 프로필 사진 및 안심을 주는 텍스트 소개 레이아웃 추가

## 7. 컨택 폼 및 푸터 (Contact & Footer)
- [ ] **상담 예약 폼 (Contact Form)**
  - [ ] 보호자 이름, 연락처, 필요한 서비스 선택 박스, 문의 글 텍스트 영역 폼 설계
  - [ ] 입력값 검증 (특수문자 제외, 이메일/전화 형식 검사 - `PRD 보안 7.1` 기반 JS 작성)
- [ ] **푸터 (Footer)**
  - [ ] 이용약관, 개인정보 취급방침 및 약관 동의 관련 명시 레이아웃 (`PRD 7.1`)
  - [ ] 회사 정보 텍스트 (사업자 번호, 주소, 대표명 등) 하단 고정

## 8. 최적화 및 성능 개선 (Performance & UX)
- [ ] 스마트폰 / 아이패드 등 기기별 미디어 쿼리(Media Query) 디자인 조정 확인
- [ ] CSS 및 JS 파일 로드 최적화 (하단 또는 렌더 차단 방지)
- [ ] `IntersectionObserver` 등을 활용, 화면 위치에 도달할 때 요소들이 서서히 나타나는 효과 적용
- [ ] 최종 LCP, CLS 등 성능 지표 검토 (Placeholder 이미지의 `width`, `height` 강제 고정 등)

## 9. 최종 빌드 및 검수 (Verification & Deploy)
- [ ] 브라우저 환경 교차 테스트 (Chrome, Edge, Safari 등)
- [ ] W3C 마크업 유효성 검사 및 웹 접근성 최소 표준 점검 
- [ ] Git 커밋 전 코드 포맷팅 정리 및 최종 `git push`
