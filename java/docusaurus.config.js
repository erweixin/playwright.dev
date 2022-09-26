const path = require("path");
const isProd = process.env.NODE_ENV === "production";

const hasStableVersion = require(path.join(__dirname, 'java/versions.json')).includes('stable');

let plugins = [
  [
    require.resolve("@docusaurus/plugin-content-docs"),
    {
      sidebarPath: require.resolve("./sidebars.js"),
      // Docusaurus crashes if we don't have a stable version and run docusaurus commands.
      // This is a workaround to make it work since during roll we temporarily remove the stable version.
      ...(hasStableVersion ? {
        versions: {
          stable: {
            badge: false,
          }
        }
      } : {}),
    },
  ],
  [
    'content-docs',
    /** @type {import('@docusaurus/plugin-content-docs').Options} */
    ({
      id: 'community',
      path: 'community',
      routeBasePath: 'community',
      sidebarPath: require.resolve('./sidebarCommunity.js'),
    }),
  ],
  require.resolve("@docusaurus/plugin-content-pages"),
  [
    require.resolve("@docusaurus/plugin-google-gtag"),
    {
      trackingID: 'G-4GZ4JRQ8QP',
      anonymizeIP: true,
    },
  ],
];

if (isProd) {
  plugins.push(require.resolve("@docusaurus/plugin-sitemap"));
}

module.exports = {
  title: "Playwright Java",
  tagline: "Fast and reliable end-to-end testing for modern web apps",
  // Repo config for GitHub Pages
  url: "https://playwright.pro",
  baseUrl: "/java/",
  organizationName: "microsoft",
  projectName: "playwright.pro",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  scripts: ["/java/js/redirection.js"],
  favicon: "img/playwright-logo.svg",
  themeConfig: {
    metadata: [{name: 'bytedance-verification-code', content: 'VHB9sPiZHJz5aEva9H7K'}],
    colorMode: {
      defaultMode: "dark",
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
      additionalLanguages: ['java', 'bash', 'batch', 'powershell'],
    },
    navbar: {
      title: "Playwright for Java",
      logo: {
        alt: "Playwright logo",
        src: "img/playwright-logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          label: "Docs",
          position: "left",
        },
        {
          type: "doc",
          docId: "api/class-playwright",
          label: "API",
          position: "left",
        },
        {
          href: "https://github.com/microsoft/playwright-java",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
        {
          label: 'Java',
          position: 'left',
          items: [
            {
              label: 'Java',
              'data-language-prefix': '/java/',
              href: '#',
            },
            {
              label: 'Node.js',
              'data-language-prefix': '/',
              href: '#',
            },
            {
              label: 'Python',
              'data-language-prefix': '/python/',
              href: '#',
            },
            {
              label: '.NET',
              'data-language-prefix': '/dotnet/',
              href: '#',
            },
          ],
        },
        {
          to: '/community/welcome',
          label: 'Community',
          position: 'left',
          activeBaseRegex: `/community/`,
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting started",
              to: "docs/intro",
            },
            {
              label: "API reference",
              to: "docs/api/class-playwright",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/playwright",
            },
            {
              label: "Slack",
              href: "https://aka.ms/playwright-slack",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/playwrightweb",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/microsoft/playwright-java",
            },
            {
              label: "YouTube",
              href: "https://www.youtube.com/channel/UC46Zj8pDH5tDosqm1gd7WTg",
            },
            {
              label: "Conference videos",
              href: "/community/conference-videos",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Microsoft`,
    },
    algolia: {
      indexName: 'playwright-java',
      appId: 'K09ICMCV6X',
      apiKey: 'a5b64422711c37ab6a0ce4d86d16cdd9',
    },
  },
  themes: [
    [
      require.resolve("@docusaurus/theme-classic"),
      {
        customCss: require.resolve("./src/css/custom.css"),
      },
    ],
    '@docusaurus/theme-search-algolia',
  ],
  plugins,
  customFields: {
    repositoryName: "playwright-java",
  },
  trailingSlash: false,
  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve('esbuild-loader'),
      options: {
        loader: 'tsx',
        target: isServer ? 'node12' : 'es2017',
      },
    }),
  }
};
