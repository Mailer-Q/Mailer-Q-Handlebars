import { describe, expect, it, vi } from "vitest";
import fs from "fs";
import path from "path";
import MailerQHandlebars from "../src/index";

const fixtures = path.join(__dirname, "fixtures");

describe("mailer-q-handlebars", () => {
  it("renders a template with its locals interpolated", () => {
    const render = MailerQHandlebars(fixtures);
    expect(render("hello.hbs", { name: "Ada" })).toBe("<h1>Hello Ada</h1>");
  });

  it("returns a string", () => {
    const render = MailerQHandlebars(fixtures);
    expect(typeof render("hello.hbs", { name: "Ada" })).toBe("string");
  });

  it("resolves the template relative to the configured directory", () => {
    const spy = vi.spyOn(fs, "readFileSync");
    MailerQHandlebars(fixtures)("hello.hbs", { name: "Ada" });
    expect(spy).toHaveBeenCalledWith(path.join(fixtures, "hello.hbs"), "utf8");
    spy.mockRestore();
  });

  it("uses the locals passed to each call (no shared state)", () => {
    const render = MailerQHandlebars(fixtures);
    expect(render("hello.hbs", { name: "Ada" })).toBe("<h1>Hello Ada</h1>");
    expect(render("hello.hbs", { name: "Grace" })).toBe("<h1>Hello Grace</h1>");
  });

  it("throws when the template file does not exist", () => {
    expect(() => MailerQHandlebars(fixtures)("missing.hbs", {})).toThrow();
  });
});
