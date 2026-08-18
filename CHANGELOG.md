# Changelog

All notable changes to this project are documented here. The format is based on
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [3.0.0] - 2026-08-17

### Changed

- Migrated the package to TypeScript. The renderer is compiled to `dist/` and now ships
  bundled type definitions (`.d.ts`). The CommonJS entry point is unchanged, so
  `require("mailer-q-handlebars")` still returns the callable renderer factory.
- Relicensed from ISC to MIT.
- Renamed the GitHub repository to `Mailer-Q-Handlebars` to match the MailerQ naming
  convention. The npm package name (`mailer-q-handlebars`) is unchanged.

### Added

- Vitest unit test suite.
- GitHub Actions CI (lint, build, and test across Node 20/22) and a tag-triggered npm
  publish workflow.

### Notes

- Pairs with MailerQ v3. The renderer contract — `(templateFileName, locals) => htmlString`
  — is unchanged, but the README usage examples target the v3 factory API. In v2, MailerQ
  was created with `require("mailer-q")()` and configured via `.config(options)`; see the
  [MailerQ v3 upgrade notes](https://github.com/Mailer-Q/Mailer-Q#upgrading-from-v2).

## [2.0.0] - 2024

### Changed

- Dependency and documentation updates.

## [1.x] - earlier

- Initial releases (1.0.0 – 1.0.2): the original Handlebars renderer for MailerQ.

[3.0.0]: https://github.com/Mailer-Q/Mailer-Q-Handlebars/releases/tag/v3.0.0
[2.0.0]: https://github.com/Mailer-Q/Mailer-Q-Handlebars/releases/tag/v2.0.0
