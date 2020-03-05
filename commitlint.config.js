/**
 * ref: https://commitlint.js.org/#/reference-rules

 * type: ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'revert', 'chore'...]
 * feat     : 기능 추가, API 변경(하위 호환)
 * fix      : Bug Fix, API 변경 사항 없이 내부 수정
 * docs     : 문서
 * refactor : 내부적인 리팩토링
 * test     : 테스트 코드
 * chore    : 자잘한 수정 사항
 * ex) type(scope): message
 */

const lernaScopesConfig = require("@commitlint/config-lerna-scopes");
const scopes = ["release"];
const getScopes = (initialEnum = []) =>
  lernaScopesConfig.utils
    .getPackages()
    .then(packageList => initialEnum.concat(packageList))
    .then(scopeList => [2, "always", scopeList]);

module.exports = {
  rules: {
    "scope-enum": () => getScopes(scopes),
    "type-enum": [
      2,
      "always",
      [
        "build",
        "ci",
        "chore",
        "docs",
        "feat",
        "fix",
        "perf",
        "refactor",
        "revert",
        "style",
        "test",
      ],
    ],
  },
};
