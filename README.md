# Mailer-Q-Handlebars

[![npm version](https://img.shields.io/npm/v/mailer-q-handlebars.svg)](https://www.npmjs.com/package/mailer-q-handlebars)
[![npm downloads](https://img.shields.io/npm/dm/mailer-q-handlebars.svg)](https://www.npmjs.com/package/mailer-q-handlebars)
[![CI](https://github.com/Mailer-Q/Mailer-Q-Handlebars/actions/workflows/ci.yml/badge.svg)](https://github.com/Mailer-Q/Mailer-Q-Handlebars/actions/workflows/ci.yml)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-3178C6.svg)](https://www.typescriptlang.org/)
[![node](https://img.shields.io/node/v/mailer-q-handlebars.svg)](https://nodejs.org/)
[![license](https://img.shields.io/npm/l/mailer-q-handlebars.svg)](./LICENSE)

A [Handlebars](https://handlebarsjs.com/) template renderer for
[MailerQ](https://github.com/Mailer-Q/Mailer-Q). It lets MailerQ render email bodies from
`.hbs` template files instead of inline HTML.

A MailerQ renderer is any function `(templateFileName, locals) => htmlString`. This package
provides one backed by Handlebars.

## Installation

```bash
npm install mailer-q-handlebars --save
```

## Usage

Call the module with the directory that holds your email templates, then pass the result as
MailerQ's `renderer` option:

```javascript
const path = require("path");
const MailerQ = require("mailer-q").default;
// or, with ESM / TypeScript: import MailerQ from "mailer-q";
const MailerQHandlebars = require("mailer-q-handlebars");

const options = {
  // ...other MailerQ options
  renderer: MailerQHandlebars(path.join(__dirname, "./email_templates")),
};

module.exports = MailerQ(options);
```

Then reference a template by file name when building a message, passing template variables
through `locals`:

```javascript
MailerQ.contents({
  to: "recipient@example.com",
  subject: "Welcome!",
  templateFileName: "welcome.hbs",
  locals: { name: "Ada" },
}).deliverNow();
```

`email_templates/welcome.hbs`:

```html
<h1>Welcome, {{name}}!</h1>
```

## Development

This package is written in TypeScript and compiled to `dist/` with `tsc`.

```bash
npm run build   # compile TypeScript to dist/
npm test        # run the Vitest suite
npm run lint    # eslint
```

## Changelog

See [CHANGELOG.md](./CHANGELOG.md) for the notable changes in each release.

## License

[MIT](./LICENSE)
