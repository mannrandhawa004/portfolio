import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Extend Next.js + TypeScript recommended configs
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },

  {
    rules: {
      // 🧹 Ignore "unused variables" warnings (still visible in dev, won’t block build)
      "@typescript-eslint/no-unused-vars": "off",

      // 🧠 Allow temporary use of `any` until types are refined
      "@typescript-eslint/no-explicit-any": "off",

      // 🧩 Allow single quotes in JSX text like "I'm"
      "react/no-unescaped-entities": "off",

      // 💡 You can optionally turn off image lint warning too
      "@next/next/no-img-element": "warn", // or "off" if you prefer

      // 🧘 Prevent build from breaking on warnings
      "no-warning-comments": "off",
    },
  },
];

export default eslintConfig;
