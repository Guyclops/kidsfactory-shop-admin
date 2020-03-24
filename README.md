### 키즈팩토리 점주용 페이지

- env 파일은 올리지 않아서 동작은 안한다.(front의 storybook은 볼 수 있음)

#

#### 프로젝트 구조

- lerna를 사용한 monorepo

- 혼자 개발해야하는 환경이라 packages에 server와 front를 같이 두었음

#### 공통 사용

- 언어 : Typescript

- 버전 관리 : git

- 코딩 컨벤션 : eslint, prettier, commitlint, lint-staged

- Editor : Visual Studio Code(setting sync로 환경 공유)

#### 데이터 베이스

- mysql

#### server 스택

- node, express

- orm 사용(sequelize)

#### front 스택

- gatsbyjs(react)

- mobx

- storybook

- cypress

#### 실행

```
npm run init

npm run postinstall

npm run start
```

#### 테스트

- server는 mocha chai를 사용

- front는 storybook으로 ui 테스트, cypress로 E2E 테스트만 작성했다.

```
npm run test
```
