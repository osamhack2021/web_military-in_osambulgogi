<p align="center"><img align="center" src="./document/logo.jpg"/></p><br/>

<p align="center">
  <a href="https://github.com/osamhack2021/web_military-in_osambulgogi/actions/workflows/cd.yml"><img src="https://github.com/osamhack2021/web_military-in_osambulgogi/workflows/cd/badge.svg?branch=main" alt="Deploy Status"></a>
  <a href="https://github.com/osamhack2021/web_military-in_osambulgogi"><img src="https://img.shields.io/github/repo-size/osamhack2021/web_military-in_osambulgogi" alt="Repo Size"></a>
  <a href="https://github.com/osamhack2021/web_military-in_osambulgogi/blob/main/LICENSE.md"><img src="https://img.shields.io/github/license/osamhack2021/web_military-in_osambulgogi" alt="License"></a>
  <a href="https://github.com/osamhack2021/web_military-in_osambulgogi/commits/main"><img src="https://img.shields.io/github/last-commit/osamhack2021/web_military-in_osambulgogi/main" alt="Last Commit"></a>
</p>
<br />

<p align="center">
  <a href="https://docs.military-in.kr"><img src="https://img.shields.io/static/v1?label=docs&message=gitbook&color=blue&style=for-the-badge" alt="GitBook"></a>
  <a href="https://night-fork-155.notion.site/in-c0c5c8585453431b8a082837fa0eca1f"><img src="https://img.shields.io/static/v1?label=docs&message=notion&color=979A9B&style=for-the-badge" alt="Notion"></a>
</p>
<br />

## 프로잭트 소개

군in은 군부대 장병들을 위한 부대 커뮤니티 서비스입니다. 일과 시간 이후 군 내 휴대폰 사용이 자유로운 요즘, 인트라넷 외부에서의 군 장병들 간 소통 수단을 제공하고자 시작한 프로젝트로, 대학교 커뮤니티 서비스인 '에브리타임'과 직장인 커뮤니티 서비스인 '블라인드'에서 영감을 받았습니다.

## 기능 설명

- 오픈 커뮤니티
- 장병 커뮤니티
- 부대 시설 예약
- 당직표
- 일정표

## 컴퓨터 구성 / 필수 조건 안내 (Prerequisites)

### Client

- ECMAScript 6 지원 브라우저 사용
- 권장: Google Chrome 버전 77 이상

### Server

- [Amazon EC2 t2.small 사양](https://aws.amazon.com/ko/ec2/instance-types/t2/#Product_Details) 이상

## 기술 스택 (Technique Used)

### Back-end

- Node.js
- Typescript
- Express
- Prisma
- Nginx
- PM2
- PostgreSQL
- TLS, HTTPS
- JWT(JSON Web Token)
- Bcrypt
- Gzip
- HTTP2

### Front-end

- Vue.js
- Nuxt.js
- Tailwind CSS
- Axios
- PWA(Progressive Web App)
- SSR(Server-Side Rendering)
- SEO(Search Engine Optimization)

### DevOps

- GitHub Actions
- GitHub Container Registry
- Docker
- Slack
- Notion
- GitBook
- Figma

## 설치 안내 (Installation Process)

Docker, Docker Compose를 설치한 이후 아래 명령어를 입력합니다.

- Docker 설치 방법: https://docs.docker.com/engine/install/
- Docker compose 설치 방법: https://docs.docker.com/compose/install/

```bash
wget https://raw.githubusercontent.com/osamhack2021/web_military-in_osambulgogi/main/docker-compose.yml
docker-compose up -d
```

## 프로젝트 사용법 (Getting Started)

### Backend

Node package를 설치하고, PostgreSQL database에 migration과 seed를 적용합니다.

```bash
yarn install
yarn prisma migrate dev
yarn prisma db seed
```

이후 Dev server를 시작하면 `localhost:4000`에서 접속할 수 있습니다.

```bash
yarn dev
```

### Frontend

Node package를 설치하고, Dev server를 시작하면 `localhost:3000`에서 접속할 수 있습니다.

```bash
yarn install
yarn dev
```

## 팀 정보 (Team Information)

- Jaemin Choi (hong999@gmail.com), Github ID: [dotoleeoak](https://github.com/dotoleeoak)
- Kangmin Seo (suji999@gmail.com), Github ID: [kangrnin](https://github.com/kangrnin)
- Juhyun Kim (juhy0987@gmail.com), GitHub ID: [juhy0987](https://github.com/juhy0987)

## 저작권 및 사용권 정보 (Copyleft / End User License)

This project is licensed under the terms of the [MIT license](https://github.com/osamhack2021/web_military-in_osambulgogi/blob/main/LICENSE.md).
