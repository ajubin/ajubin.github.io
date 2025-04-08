import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import css from "@eslint/css";


export default defineConfig([
	{ files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser } },

	{ files: ["**/*.{json,jsonc,json5}"], plugins: { json }, language: "json/json", extends: ["json/recommended"], ignores: ["package-lock.json"] },
	{
		files: ["**/*.md"], plugins: { markdown }, language: "markdown/commonmark", extends: ["markdown/recommended"],
		rules: {
			"markdown/no-missing-label-refs": "off",
		},
	},
	{
		files: ["**/*.css"], plugins: { css }, language: "css/css", extends: ["css/recommended"], rules: { "css/use-baseline": "off" }
	},

	{
		ignores: ["package-lock.json"],
	},

]);
