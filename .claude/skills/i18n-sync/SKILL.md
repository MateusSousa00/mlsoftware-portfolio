---
name: i18n-sync
description: Add, update, remove, or audit translation keys across the three locale files (src/messages/en.json, es.json, pt.json) keeping them key-parallel. Use whenever copy/text changes, a new translation key is needed, or you suspect the locale files have drifted out of sync.
---

# i18n key sync

This project keeps **three locale files that must stay key-parallel** (identical key trees, same ordering):

- `src/messages/en.json` — English (default locale)
- `src/messages/es.json` — Spanish
- `src/messages/pt.json` — Portuguese (pt-BR)

Locales and localized routes are defined in `src/i18n/routing.ts`. Translations are consumed via `useTranslations` (client) / `getTranslations` (server). Any change to one file almost always must be mirrored in the other two — a key present in one but missing in another is a bug.

## When to use

- Adding a new translation key (a new section, label, button, metadata field).
- Editing existing copy (still mirror the key across all three; only the values differ per language).
- Removing a key (delete from all three).
- Auditing / fixing drift ("are the locale files in sync?").

## How to do it

1. **Read all three files first.** Establish the current key tree from `en.json` (the reference) and confirm `es.json` / `pt.json` match it.
2. **Locate the target.** Keys are dot-paths into the JSON (e.g. `experience.resume`, `metadata.title`). Find the right nested object and the position of sibling keys.
3. **Apply the same structural edit to all three files** at the same position, so ordering stays identical across files. Only the string *values* differ by language; keys, nesting, and order must match exactly.
   - If the user only provides English copy, add the key to all three but flag that `es`/`pt` need real translations (do not leave a key missing in a file).
   - Preserve existing formatting: 2-space indent, double quotes, no trailing commas, files currently ~217 lines each.
4. **Special case — `resume`:** the `experience.resume` value is a locale-specific PDF path, not translatable text: `en` → `/mateus-resume.pdf`, `es` → `/mateus-curriculum.pdf`, `pt` → `/mateus-curriculo.pdf`. Keep these distinct.
5. **Run a parity check** after editing — confirm the three files have the identical set of dot-path keys.

## Parity check

Run from the repo root (compares the full set of leaf key-paths across the three files; prints nothing if they are in sync):

```bash
node -e '
const fs=require("fs");
const flat=(o,p="")=>Object.entries(o).flatMap(([k,v])=>v&&typeof v==="object"?flat(v,p+k+"."):[p+k]);
const f=l=>new Set(flat(JSON.parse(fs.readFileSync("src/messages/"+l+".json","utf8"))));
const [en,es,pt]=["en","es","pt"].map(f);
const diff=(a,b,an,bn)=>[...a].filter(k=>!b.has(k)).forEach(k=>console.log(`in ${an} but not ${bn}: ${k}`));
diff(en,es,"en","es");diff(es,en,"es","en");diff(en,pt,"en","pt");diff(pt,en,"pt","en");
console.log("checked",en.size,"keys");
'
```

Any line of `in X but not Y` output means the files have drifted and must be reconciled.
