import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import GitHubStarButton from '../components/GitHubStarButton';
import styles from "./styles.module.css";

const features = [
  {
    title: "任意浏览器 \u2022 全平台 \u2022 同一套 API",
    description: <>
      <p>
        <b>跨浏览器。</b> Playwright 支持所有现代渲染引擎，包括： Chromium、WebKit 和 Firefox。
      </p>
      <p>
        <b>跨平台。</b> 适用于 Windows、Linux、macOS、本地运行、 CI、headless 和 headed。
      </p>
      <p>
        <b>跨语言。</b> 在 <a
        href="https://playwright.dev/docs/intro">TypeScript</a>, <a
        href="https://playwright.dev/docs/intro">JavaScript</a>, <a
        href="https://playwright.dev/python/docs/intro">Python</a>, <a
        href="https://playwright.dev/dotnet/docs/intro">.NET</a>, <a
        href="https://playwright.dev/java/docs/intro">Java</a> 中使用 Playwright API
      </p>
      <p>
        <b>测试移动端 Web 。</b> 对 Android 和 Mobile Safari 的 Google Chrome 原生移动端模拟。与你的移动端和云端应用采用相同的渲染引擎。
      </p>
    </>,
  },
  {
  },
  {
  },
  {
    title: "强适应性 \u2022 测试不再容易失效",
    description: (
      <>
        <p>
          <b>自动等待（auto-waits）。</b> Playwright 能够自动等待元素达到可操作的状态，外加一系列丰富的内置事件。不用再人工定义超时（timeouts） —— 这是测试容易失效的主要原因。
        </p>
        <p>
          <b>Web 优先的断言。</b> Playwright 断言专门为动态加载的 web 应用设计。能够在满足需要的条件前自动重试。
        </p>
        <p>
          <b>可追踪。</b> 通过配置重试策略，采用捕捉执行轨迹、视频、截图来解决测试容易失效的问题。
        </p>
      </>
    ),
  },
  {
    title: "不用再权衡取舍 \u2022 不再有限制",
    description: (
      <>
        <p>
          浏览器在不同进程中运行属于不同来源的 Web 内容。
          Playwright 与现代浏览器架构保持一致，并在进程外运行测试。
          这使 Playwright 摆脱了典型的进程内测试运行程序限制。
        </p>
        <p>
          <b>一切并行。</b> 跨越多个 <b>tabs</b>, 多个 <b>origins</b> 和多个 <b>users</b> 的测试场景。
          在一个测试中能够为不同的用户创建具有不同上下文的场景，并能在你的服务器上运行。
        </p>
        <p>
          <b>可信事件。</b> 元素悬停（hover）、动态控件的交互、生产可信事件。Playwright 使用与真实用户一致的输入方式（pipeline）。
        </p>
        <p>
          <b>测试 frames，穿透 Shadow DOM。</b> Playwright 的选择器能够穿透 shadowDOM 和允许无缝输入 frame。
        </p>
      </>
    ),
  },
  {
  },
  {
  },
  {
    title: "完全隔离 \u2022 快速执行",
    description: (
      <>
        <p>
          <b>浏览器上下文。</b> Playwright 为每个测试创建一个浏览器上下文。浏览器上下文相当于一个全新的浏览器配置文件。这提供了零开销的完整测试隔离。 创建一个新的浏览器上下文只需要几毫秒。
        </p>
        <p>
          <b>一次登录。</b> 保存上下文的身份验证状态并在所有测试中重用它。
            这绕过了每个测试中的重复登录操作，但提供了独立测试的完全隔离。
        </p>
      </>
    ),
  },
  {
    title: "强大的工具",
    description: (
      <>
        <p>
          <b>Codegen 。</b> 通过记录您的操作来生成测试。 将它们保存为各种语言。
        </p>
        <p>
          <b>Playwright inspector 。</b> 检查页面，生成选择器，逐步执行测试，查看点击点，浏览执行日志。
        </p>
        <p>
          <b>Trace Viewer 。</b> 捕获所有的信息来调查失败了的测试，Playwright 追踪包含测试运行截屏视频、实时 DOM 快照、动作浏览器、测试源等信息。
        </p>
      </>
    ),
  },
];

type FeatureProps = {
  imageUrl?: string
  title: string
  description: React.ReactElement
  link: string
}

const Feature: React.FC<FeatureProps> = ({ imageUrl, title, description, link }) => {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--6", styles.feature)} style={{ marginTop: 40 }}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

type FeatureRowProps = {
  title: string
  description: string
  videoUrl: string
  isImageLeft: boolean
}

const FeatureRow: React.FC<FeatureRowProps> = ({ title, description, videoUrl, isImageLeft }) => {
  const textColumn = (
    <div className={"col col--5"}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
  const imageColumn = (
    <div className={"col col--7"}>
      <video muted controls loop>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
  return (
    <section
      className={clsx(!isImageLeft ? styles.featureContainerAlt : undefined)}
    >
      <div className={"container"}>
        <div
          className={clsx(
            "row",
            styles.featureRow,
            !isImageLeft ? styles.featureRowAlt : undefined
          )}
        >
          {imageColumn}
          {textColumn}
        </div>
      </div>
    </section>
  );
}

const logos = [
  { imageUrl: "img/logos/VSCode.png", href: "https://code.visualstudio.com" },
  { imageUrl: "img/logos/Bing.png", href: "https://bing.com" },
  { imageUrl: "img/logos/Outlook.png", href: "https://outlook.com" },
  { imageUrl: "img/logos/DHotstar.jpg", href: "https://www.hotstar.com/" },
  {
    imageUrl: "img/logos/MUI.png",
    href: "https://github.com/mui-org/material-ui",
  },
  { imageUrl: "img/logos/ING.png", href: "https://github.com/ing-bank/lion" },
  {
    imageUrl: "img/logos/Adobe2.png",
    href: "https://github.com/adobe/spectrum-web-components",
  },
  {
    imageUrl: "img/logos/ReactNavigation.png",
    href: "https://github.com/react-navigation/react-navigation",
  },
  {
    imageUrl: "img/logos/accessibilityinsights.png",
    href: "https://accessibilityinsights.io/",
  },
];

const Home: React.FC = () => {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={siteConfig.tagline}
      description="Cross-browser end-to-end testing for modern web apps"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className={clsx("hero__title", styles.heroTitle)}>
            <span className={styles.highlight}>Playwright</span> 为现代 web 应用提供可靠的端到端测试
          </h1>
          <div className={styles.buttons}>
            <Link
              className={styles.getStarted}
              to={useBaseUrl("docs/intro")}
            >
              快速入门
            </Link>
            <GitHubStarButton owner="microsoft" repo={siteConfig.customFields.repositoryName}/>
          </div>
        </div>
      </header>
      <br></br>
      <main>
        <br></br>
        <br></br>
        <center>
          <img src="img/logos/Browsers.png" width="40%"></img>
        </center>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {features.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>

        <section className={styles.logosSection}>
          <div className="container">
            <div className="row">
              <div className={clsx("col col--12", styles.logosColumn)}>
                <h2>应用于各大公司和开源项目</h2>
                <ul className={styles.logosList}>
                  {logos.map(({ imageUrl, href }, idx) => (
                    <li key={idx}>
                      <a href={href} target="_blank">
                        <img src={imageUrl} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
