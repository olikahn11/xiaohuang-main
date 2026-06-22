import styles from "./page.module.css";

const domains = [
  {
    label: "主站",
    href: "https://xiaohuang365.com",
    title: "xiaohuang365.com",
    description: "由本项目维护，已在根布局接入 Vercel Web Analytics。",
  },
  {
    label: "世界杯专题",
    href: "https://wc2026.xiaohuang365.com",
    title: "wc2026.xiaohuang365.com",
    description:
      "独立 Vercel 项目，本项目只保留入口和统计接入说明，不维护专题内容。",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <a className={styles.brand} href="https://xiaohuang365.com">
          xiaohuang365
        </a>
        <nav className={styles.nav} aria-label="站点导航">
          <a href="https://xiaohuang365.com">主站</a>
          <a href="https://wc2026.xiaohuang365.com">WC2026</a>
        </nav>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <p className={styles.kicker}>网站总项目</p>
          <h1>xiaohuang365 的整体入口与访问统计中心。</h1>
          <p>
            这个项目负责承载 xiaohuang365.com 的总入口，并接入 Vercel
            Analytics。当前重点观察 wc2026.xiaohuang365.com
            的访问数据，后续各个二级域名的具体内容可以拆到独立项目里继续做。
          </p>
          <div className={styles.actions}>
            <a className={styles.primary} href="https://wc2026.xiaohuang365.com">
              访问 WC2026 专题
            </a>
            <a className={styles.secondary} href="https://xiaohuang365.com">
              打开主站
            </a>
          </div>
        </section>

        <section className={styles.domains} aria-labelledby="domains-title">
          <div className={styles.sectionHeader}>
            <h2 id="domains-title">站点入口与统计边界</h2>
            <p>
              主站访问数据在 xiaohuang-main 项目的 Vercel Analytics
              中查看；未来二级域名保持独立项目，各自接入并在对应项目查看。
            </p>
          </div>
          <div className={styles.domainGrid}>
            {domains.map((domain) => (
              <a className={styles.domainCard} href={domain.href} key={domain.href}>
                <span>{domain.label}</span>
                <strong>{domain.title}</strong>
                <p>{domain.description}</p>
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
