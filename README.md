## URL

**toast-bank.vercel.app**
(샘플 계정: user1@email.com // 87654321)

## 아키텍처

![Architecture](https://github.com/no-support/toast-bank/assets/50227723/f2d6c158-341d-4150-8c20-e62c628946f4)

## 사용 라이브러리

![next](https://img.shields.io/badge/nextjs-444444?style=for-the-badge&logo=next.js) ![typescript](https://img.shields.io/badge/typescript-444444?style=for-the-badge&logo=typescript) ![react](https://img.shields.io/badge/react-444444?style=for-the-badge&logo=react) ![redux-tool-kit](https://img.shields.io/badge/redux_tool_kit-444444?style=for-the-badge&logo=redux) ![react-query](https://img.shields.io/badge/react_query-444444?style=for-the-badge&logo=react-query) ![react-hook-form](https://img.shields.io/badge/react_hook_form-444444?style=for-the-badge&logo=react-hook-form) ![tailwind-css](https://img.shields.io/badge/tailwind_css-444444?style=for-the-badge&logo=tailwind-css) ![prisma](https://img.shields.io/badge/prisma-444444?style=for-the-badge&logo=prisma) ![framer](https://img.shields.io/badge/framer-444444?style=for-the-badge&logo=framer) ![eslint](https://img.shields.io/badge/eslint-444444?style=for-the-badge&logo=eslint) ![prettier](https://img.shields.io/badge/prettier-444444?style=for-the-badge&logo=prettier)

## 기능별 사용 기술

| 기능                                                     | 기술                                                 |
| -------------------------------------------------------- | ---------------------------------------------------- |
| 회원 가입 완료 시 폭죽 효과 및 3초 후 로그인 페이지 이동 | react-confetti-boom 라이브러리, useEffect            |
| 회원 가입, 로그인 폼                                     | react-hook-form 라이브러리                           |
| 테마 토글                                                | redux-toolkit 라이브러리                             |
| FAQ page 페이지                                          | ISR                                                  |
| 오시는 길                                                | KAKAO map api                                        |
| 자산 페이지 및 신용 점수 시각화                          | visx 라이브러리                                      |
| 거래 내역 필터 및 조회                                   | use-query 라이브러리                                 |
| 로그인 여부 확인                                         | next-auth 라이브러리                                 |
| 미로그인 시 모달 안내                                    | useModal 커스텀 훅                                   |
| 추천 카드 조회 및 무한 스크롤                            | framer 애니메이션 라이브러리, react-query 라이브러리 |
| 추천 카드 검색                                           | useDebounce 커스텀 훅                                |

### patch log

- forEach, map은 비동기 순서를 보장하지 않아, db seeding 작업 시 for of문 사용(2024.04.11.)
- 로그인된 상태에서 Navbar 회원가입/로그인 버튼이 빠르게 보였다 사라지는 이슈 해결(2024.04.17.)
- 배포 환경에서 로그인, 로그아웃 기능이 해당 버튼을 두 번씩 눌러야 작동하는 이슈 해결 (참고: [next-auth csrf 이슈](https://github.com/nextauthjs/next-auth/issues/2426))

### todo

- 반복 사용되고 있는 ui 컴포넌트화
- tree-shaking 및 코드 정리로 번들 크기 개선
- Lazy Loading 적용
- Meta Data로 SEO 개선
- skeleton ui 적용
- error boundary 적용
- 테스트 코드 작성
- 테마 변경 새로고침 시 flicker 현상 수정
