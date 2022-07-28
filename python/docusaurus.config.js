const path = require("path");
const isProd = process.env.NODE_ENV === "production";

let plugins = [
  [
    require.resolve("@docusaurus/plugin-content-docs"),
    {
      sidebarPath: require.resolve("./sidebars.js"),
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
  [
    require.resolve("@docusaurus/plugin-content-blog"),
    {
      showReadingTime: true,
      editUrl:
        "https://github.com/microsoft/playwright.dev/edit/master/",
    },
  ],
  require.resolve("@docusaurus/plugin-content-pages"),
  require.resolve("./plugins/playwright-analytics-integration/lib/index.js"),
];

if (isProd) {
  plugins.push(require.resolve("@docusaurus/plugin-sitemap"));
}

module.exports = {
  title: "Playwright Python",
  tagline: "Fast and reliable end-to-end testing for modern web apps",
  // Repo config for GitHub Pages
  url: "https://playwright.dev",
  baseUrl: "/python/",
  organizationName: "microsoft",
  projectName: "playwright.dev",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  scripts: ["/python/js/redirection.js"],
  favicon: "img/playwright-logo.svg",
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
    },
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
      additionalLanguages: ['python', 'bash', 'batch', 'powershell'],
    },
    navbar: {
      title: "Playwright for Python",
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
          href: "https://github.com/microsoft/playwright-python",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
        {
          label: 'Python',
          position: 'left',
          items: [
            {
              label: 'Python',
              'data-language-prefix': '/python/',
              href: '#',
            },
            {
              label: 'Node.js',
              'data-language-prefix': '/',
              href: '#',
            },
            {
              label: 'Java',
              'data-language-prefix': '/java/',
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
          type: 'dropdown',
          label: 'Community',
          position: 'left',
          items: [
            {
              to: 'community/welcome',
              label: 'Welcome',
            },
            {
              to: 'community/ambassadors',
              label: 'Ambassadors',
            },
            {
              to: 'community/conference-videos',
              label: 'Conference Videos',
            },
            {
              to: 'community/live-streams',
              label: 'Live Streams',
            },
            {
              to: 'community/feature-videos',
              label: 'Feature Videos',
            },
            {
              to: 'community/Release-videos',
              label: 'release Videos',
            },
          ],
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
              href: "https://github.com/microsoft/playwright-python",
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
      indexName: 'playwright-python',
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
    repositoryName: "playwright-python",
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
