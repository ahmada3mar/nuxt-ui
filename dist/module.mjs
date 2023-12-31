import { addTemplate, useNuxt, defineNuxtModule, createResolver, installModule, addPlugin, addComponentsDir, addImportsDir } from '@nuxt/kit';
import defaultColors from 'tailwindcss/colors.js';
import { defaultExtractor as defaultExtractor$1 } from 'tailwindcss/lib/lib/defaultExtractor.js';
import { iconsPlugin, getIconCollections } from '@egoist/tailwindcss-icons';
import { kebabCase, upperFirst, camelCase } from 'scule';
import { dirname } from 'pathe';



// -- Unbuild CommonJS Shims --
import __cjs_url__ from 'url';
import __cjs_path__ from 'path';
import __cjs_mod__ from 'module';
const __filename = __cjs_url__.fileURLToPath(import.meta.url);
const __dirname = __cjs_path__.dirname(__filename);
const require = __cjs_mod__.createRequire(import.meta.url);
const name = "@nuxt/ui";
const version = "2.9.0";

function omit(object, keysToOmit) {
  const result = { ...object };
  for (const key of keysToOmit) {
    delete result[key];
  }
  return result;
}

const colorsToExclude = [
  "inherit",
  "transparent",
  "current",
  "white",
  "black",
  "slate",
  "gray",
  "zinc",
  "neutral",
  "stone",
  "cool"
];
const safelistByComponent = {
  alert: (colorsAsRegex2) => [{
    pattern: new RegExp(`bg-(${colorsAsRegex2})-50`)
  }, {
    pattern: new RegExp(`bg-(${colorsAsRegex2})-400`),
    variants: ["dark"]
  }, {
    pattern: new RegExp(`bg-(${colorsAsRegex2})-500`)
  }, {
    pattern: new RegExp(`text-(${colorsAsRegex2})-400`),
    variants: ["dark"]
  }, {
    pattern: new RegExp(`text-(${colorsAsRegex2})-500`)
  }, {
    pattern: new RegExp(`ring-(${colorsAsRegex2})-400`),
    variants: ["dark"]
  }, {
    pattern: new RegExp(`ring-(${colorsAsRegex2})-500`)
  }],
  avatar: (colorsAsRegex2) => [{
    pattern: new RegExp(`bg-(${colorsAsRegex2})-400`),
    variants: ["dark"]
  }, {
    pattern: new RegExp(`bg-(${colorsAsRegex2})-500`)
  }],
  badge: (colorsAsRegex2) => [{
    pattern: new RegExp(`bg-(${colorsAsRegex2})-50`)
  }, {
    pattern: new RegExp(`bg-(${colorsAsRegex2})-400`),
    variants: ["dark"]
  }, {
    pattern: new RegExp(`bg-(${colorsAsRegex2})-500`)
  }, {
    pattern: new RegExp(`text-(${colorsAsRegex2})-400`),
    variants: ["dark"]
  }, {
    pattern: new RegExp(`text-(${colorsAsRegex2})-500`)
  }, {
    pattern: new RegExp(`ring-(${colorsAsRegex2})-400`),
    variants: ["dark"]
  }, {
    pattern: new RegExp(`ring-(${colorsAsRegex2})-500`)
  }],
  button: (colorsAsRegex2) => [{
    pattern: new RegExp(`bg-(${colorsAsRegex2})-50`),
    variants: ["hover", "disabled"]
  }, {
    pattern: new RegExp(`bg-(${colorsAsRegex2})-100`),
    variants: ["hover"]
  }, {
    pattern: new RegExp(`bg-(${colorsAsRegex2})-400`),
    variants: ["dark", "dark:disabled"]
  }, {
    pattern: new RegExp(`bg-(${colorsAsRegex2})-500`),
    variants: ["disabled", "dark:hover"]
  }, {
    pattern: new RegExp(`bg-(${colorsAsRegex2})-600`),
    variants: ["hover"]
  }, {
    pattern: new RegExp(`bg-(${colorsAsRegex2})-900`),
    variants: ["dark:hover"]
  }, {
    pattern: new RegExp(`bg-(${colorsAsRegex2})-950`),
    variants: ["dark", "dark:hover", "dark:disabled"]
  }, {
    pattern: new RegExp(`text-(${colorsAsRegex2})-400`),
    variants: ["dark", "dark:disabled"]
  }, {
    pattern: new RegExp(`text-(${colorsAsRegex2})-500`),
    variants: ["dark:hover", "disabled"]
  }, {
    pattern: new RegExp(`text-(${colorsAsRegex2})-600`),
    variants: ["hover"]
  }, {
    pattern: new RegExp(`outline-(${colorsAsRegex2})-400`),
    variants: ["dark:focus-visible"]
  }, {
    pattern: new RegExp(`outline-(${colorsAsRegex2})-500`),
    variants: ["focus-visible"]
  }, {
    pattern: new RegExp(`ring-(${colorsAsRegex2})-400`),
    variants: ["dark:focus-visible"]
  }, {
    pattern: new RegExp(`ring-(${colorsAsRegex2})-500`),
    variants: ["focus-visible"]
  }],
  input: (colorsAsRegex2) => [{
    pattern: new RegExp(`text-(${colorsAsRegex2})-400`),
    variants: ["dark"]
  }, {
    pattern: new RegExp(`text-(${colorsAsRegex2})-500`)
  }, {
    pattern: new RegExp(`ring-(${colorsAsRegex2})-400`),
    variants: ["dark", "dark:focus"]
  }, {
    pattern: new RegExp(`ring-(${colorsAsRegex2})-500`),
    variants: ["focus"]
  }],
  radio: (colorsAsRegex2) => [{
    pattern: new RegExp(`text-(${colorsAsRegex2})-400`),
    variants: ["dark"]
  }, {
    pattern: new RegExp(`text-(${colorsAsRegex2})-500`)
  }, {
    pattern: new RegExp(`ring-(${colorsAsRegex2})-400`),
    variants: ["dark:focus-visible"]
  }, {
    pattern: new RegExp(`ring-(${colorsAsRegex2})-500`),
    variants: ["focus-visible"]
  }],
  checkbox: (colorsAsRegex2) => [{
    pattern: new RegExp(`text-(${colorsAsRegex2})-400`),
    variants: ["dark"]
  }, {
    pattern: new RegExp(`text-(${colorsAsRegex2})-500`)
  }, {
    pattern: new RegExp(`ring-(${colorsAsRegex2})-400`),
    variants: ["dark:focus-visible"]
  }, {
    pattern: new RegExp(`ring-(${colorsAsRegex2})-500`),
    variants: ["focus-visible"]
  }],
  toggle: (colorsAsRegex2) => [{
    pattern: new RegExp(`bg-(${colorsAsRegex2})-400`),
    variants: ["dark"]
  }, {
    pattern: new RegExp(`bg-(${colorsAsRegex2})-500`)
  }, {
    pattern: new RegExp(`text-(${colorsAsRegex2})-400`),
    variants: ["dark"]
  }, {
    pattern: new RegExp(`text-(${colorsAsRegex2})-500`)
  }, {
    pattern: new RegExp(`ring-(${colorsAsRegex2})-400`),
    variants: ["dark:focus-visible"]
  }, {
    pattern: new RegExp(`ring-(${colorsAsRegex2})-500`),
    variants: ["focus-visible"]
  }],
  range: (colorsAsRegex2) => [{
    pattern: new RegExp(`bg-(${colorsAsRegex2})-400`),
    variants: ["dark"]
  }, {
    pattern: new RegExp(`bg-(${colorsAsRegex2})-500`)
  }, {
    pattern: new RegExp(`text-(${colorsAsRegex2})-400`),
    variants: ["dark"]
  }, {
    pattern: new RegExp(`text-(${colorsAsRegex2})-500`)
  }, {
    pattern: new RegExp(`ring-(${colorsAsRegex2})-400`),
    variants: ["dark:focus-visible"]
  }, {
    pattern: new RegExp(`ring-(${colorsAsRegex2})-500`),
    variants: ["focus-visible"]
  }],
  notification: (colorsAsRegex2) => [{
    pattern: new RegExp(`bg-(${colorsAsRegex2})-400`),
    variants: ["dark"]
  }, {
    pattern: new RegExp(`bg-(${colorsAsRegex2})-500`)
  }, {
    pattern: new RegExp(`text-(${colorsAsRegex2})-400`),
    variants: ["dark"]
  }, {
    pattern: new RegExp(`text-(${colorsAsRegex2})-500`)
  }]
};
const safelistComponentAliasesMap = {
  "USelect": "UInput",
  "USelectMenu": "UInput",
  "UTextarea": "UInput"
};
const colorsAsRegex = (colors) => colors.join("|");
const excludeColors = (colors) => {
  return Object.entries(omit(colors, colorsToExclude)).filter(([, value]) => typeof value === "object").map(([key]) => kebabCase(key));
};
const generateSafelist = (colors, globalColors) => {
  const baseSafelist = Object.keys(safelistByComponent).flatMap((component) => safelistByComponent[component](colorsAsRegex(colors)));
  const formsSafelist = ["input", "radio", "checkbox", "toggle", "range"].flatMap((component) => safelistByComponent[component](colorsAsRegex(["red"])));
  return [
    ...baseSafelist,
    ...formsSafelist,
    // Ensure all global colors are safelisted for the Notification (toast.add)
    ...safelistByComponent["notification"](colorsAsRegex(globalColors)),
    // Gray safelist for Avatar & Notification
    "bg-gray-500",
    "dark:bg-gray-400",
    "text-gray-500",
    "dark:text-gray-400"
  ];
};
const customSafelistExtractor = (prefix, content, colors, safelistColors) => {
  const classes = [];
  const regex = /<([A-Za-z][A-Za-z0-9]*(?:-[A-Za-z][A-Za-z0-9]*)*)\s+(?![^>]*:color\b)[^>]*\bcolor=["']([^"']+)["'][^>]*>/gs;
  const matches = content.matchAll(regex);
  const components = Object.keys(safelistByComponent).map((component) => `${prefix}${component.charAt(0).toUpperCase() + component.slice(1)}`);
  for (const match of matches) {
    const [, component, color] = match;
    const camelComponent = upperFirst(camelCase(component));
    if (!colors.includes(color) || safelistColors.includes(color)) {
      continue;
    }
    let name = safelistComponentAliasesMap[camelComponent] ? safelistComponentAliasesMap[camelComponent] : camelComponent;
    if (!components.includes(name)) {
      continue;
    }
    name = name.replace(prefix, "").toLowerCase();
    const matchClasses = safelistByComponent[name](color).flatMap((group) => {
      return ["", ...group.variants || []].flatMap((variant) => {
        const matches2 = group.pattern.source.match(/\(([^)]+)\)/g);
        return matches2.map((match2) => {
          const colorOptions = match2.substring(1, match2.length - 1).split("|");
          return colorOptions.map((color2) => `${variant ? variant + ":" : ""}` + group.pattern.source.replace(match2, color2));
        }).flat();
      });
    });
    classes.push(...matchClasses);
  }
  return classes;
};

function createTemplates(nuxt = useNuxt()) {
  const template = addTemplate({
    filename: "ui.colors.mjs",
    getContents: () => `export default ${JSON.stringify(nuxt.options.appConfig.ui.colors)};`,
    write: true
  });
  const typesTemplate = addTemplate({
    filename: "ui.colors.d.ts",
    getContents: () => `declare module '#ui-colors' { const defaultExport: ${JSON.stringify(nuxt.options.appConfig.ui.colors)}; export default defaultExport; }`,
    write: true
  });
  nuxt.options.alias["#ui-colors"] = dirname(template.dst);
  nuxt.hook("prepare:types", (opts) => {
    opts.references.push({ path: typesTemplate.dst });
  });
}

const defaultExtractor = defaultExtractor$1({ tailwindConfig: { separator: ":" } });
delete defaultColors.lightBlue;
delete defaultColors.warmGray;
delete defaultColors.trueGray;
delete defaultColors.coolGray;
delete defaultColors.blueGray;
const module = defineNuxtModule({
  meta: {
    name,
    version,
    configKey: "ui",
    compatibility: {
      nuxt: "^3.0.0-rc.8"
    }
  },
  defaults: {
    prefix: "U",
    icons: ["heroicons"],
    safelistColors: ["primary"]
  },
  async setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);
    const runtimeDir = resolve("./runtime");
    nuxt.options.build.transpile.push(runtimeDir);
    nuxt.options.build.transpile.push("@popperjs/core", "@headlessui/vue");
    nuxt.options.alias["#ui"] = runtimeDir;
    nuxt.options.css.push(resolve(runtimeDir, "ui.css"));
    nuxt.hook("tailwindcss:config", function(tailwindConfig) {
      const globalColors = {
        ...tailwindConfig.theme.colors || defaultColors,
        ...tailwindConfig.theme.extend?.colors
      };
      tailwindConfig.theme.extend.colors = tailwindConfig.theme.extend.colors || {};
      globalColors.primary = tailwindConfig.theme.extend.colors.primary = {
        50: "rgb(var(--color-primary-50) / <alpha-value>)",
        100: "rgb(var(--color-primary-100) / <alpha-value>)",
        200: "rgb(var(--color-primary-200) / <alpha-value>)",
        300: "rgb(var(--color-primary-300) / <alpha-value>)",
        400: "rgb(var(--color-primary-400) / <alpha-value>)",
        500: "rgb(var(--color-primary-500) / <alpha-value>)",
        600: "rgb(var(--color-primary-600) / <alpha-value>)",
        700: "rgb(var(--color-primary-700) / <alpha-value>)",
        800: "rgb(var(--color-primary-800) / <alpha-value>)",
        900: "rgb(var(--color-primary-900) / <alpha-value>)",
        950: "rgb(var(--color-primary-950) / <alpha-value>)",
        DEFAULT: "rgb(var(--color-primary-DEFAULT) / <alpha-value>)"
      };
      if (globalColors.gray) {
        globalColors.cool = tailwindConfig.theme.extend.colors.cool = defaultColors.gray;
      }
      globalColors.gray = tailwindConfig.theme.extend.colors.gray = {
        50: "rgb(var(--color-gray-50) / <alpha-value>)",
        100: "rgb(var(--color-gray-100) / <alpha-value>)",
        200: "rgb(var(--color-gray-200) / <alpha-value>)",
        300: "rgb(var(--color-gray-300) / <alpha-value>)",
        400: "rgb(var(--color-gray-400) / <alpha-value>)",
        500: "rgb(var(--color-gray-500) / <alpha-value>)",
        600: "rgb(var(--color-gray-600) / <alpha-value>)",
        700: "rgb(var(--color-gray-700) / <alpha-value>)",
        800: "rgb(var(--color-gray-800) / <alpha-value>)",
        900: "rgb(var(--color-gray-900) / <alpha-value>)",
        950: "rgb(var(--color-gray-950) / <alpha-value>)"
      };
      const colors = excludeColors(globalColors);
      nuxt.options.appConfig.ui = {
        primary: "green",
        gray: "cool",
        colors,
        strategy: "merge"
      };
      tailwindConfig.safelist = tailwindConfig.safelist || [];
      tailwindConfig.safelist.push(...generateSafelist(options.safelistColors, colors));
      tailwindConfig.plugins = tailwindConfig.plugins || [];
      tailwindConfig.plugins.push(iconsPlugin({ collections: getIconCollections(options.icons) }));
    });
    createTemplates(nuxt);
    await installModule("@nuxtjs/color-mode", { classSuffix: "" });
    await installModule("@nuxtjs/tailwindcss", {
      exposeConfig: true,
      config: {
        darkMode: "class",
        plugins: [
          require("@tailwindcss/forms")({ strategy: "class" }),
          require("@tailwindcss/aspect-ratio"),
          require("@tailwindcss/typography"),
          require("@tailwindcss/container-queries"),
          require("@headlessui/tailwindcss")
        ],
        content: {
          files: [
            resolve(runtimeDir, "components/**/*.{vue,mjs,ts}"),
            resolve(runtimeDir, "*.{mjs,js,ts}")
          ],
          transform: {
            vue: (content) => {
              return content.replaceAll(/(?:\r\n|\r|\n)/g, " ");
            }
          },
          extract: {
            vue: (content) => {
              return [
                ...defaultExtractor(content),
                ...customSafelistExtractor(options.prefix, content, nuxt.options.appConfig.ui.colors, options.safelistColors)
              ];
            }
          }
        }
      }
    });
    addPlugin({
      src: resolve(runtimeDir, "plugins", "colors")
    });
    addComponentsDir({
      path: resolve(runtimeDir, "components", "elements"),
      prefix: options.prefix,
      global: options.global,
      watch: false
    });
    addComponentsDir({
      path: resolve(runtimeDir, "components", "forms"),
      prefix: options.prefix,
      global: options.global,
      watch: false
    });
    addComponentsDir({
      path: resolve(runtimeDir, "components", "data"),
      prefix: options.prefix,
      global: options.global,
      watch: false
    });
    addComponentsDir({
      path: resolve(runtimeDir, "components", "layout"),
      prefix: options.prefix,
      global: options.global,
      watch: false
    });
    addComponentsDir({
      path: resolve(runtimeDir, "components", "navigation"),
      prefix: options.prefix,
      global: options.global,
      watch: false
    });
    addComponentsDir({
      path: resolve(runtimeDir, "components", "overlays"),
      prefix: options.prefix,
      global: options.global,
      watch: false
    });
    addImportsDir(resolve(runtimeDir, "composables"));
  }
});

export { module as default };
