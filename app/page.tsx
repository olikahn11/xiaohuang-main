import Image from "next/image";
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
    image: {
      src: "/world-cup-2026-entry.jpg",
      alt: "2026 世界杯专题入口图，包含 New York New Jersey Stadium、Lionel Messi 和 Kylian Mbappe 的真实照片拼版",
    },
  },
];

const imageCredits = [
  {
    label: "MetLife Stadium",
    href: "https://commons.wikimedia.org/wiki/File:Metlife_stadium_(Aerial_view).jpg",
    credit: "Anthony Quintano, CC BY 2.0",
  },
  {
    label: "Lionel Messi",
    href: "https://commons.wikimedia.org/wiki/File:Lionel-Messi-Argentina-2022-FIFA-World-Cup.jpg",
    credit: "Hossein Zohrevand, CC BY 4.0",
  },
  {
    label: "Kylian Mbappe",
    href: "https://commons.wikimedia.org/wiki/File:Kylian_Mbappe_2017.jpg",
    credit: "Biser Todorov, CC BY 4.0",
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
          <p className={styles.kicker}>xiaohuang365</p>
          <h1>实用工具、专题内容和站点导航。</h1>
          <p>
            这里是 xiaohuang365.com 的主站入口。当前重点维护 2026
            世界杯专题，后续会把不同方向的内容放到各自的二级域名里独立更新。
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
              主站负责统一导航和基础统计；二级域名负责各自专题内容，互不混在一个代码库里。
            </p>
          </div>
          <div className={styles.domainGrid}>
            {domains.map((domain) => (
              <a className={styles.domainCard} href={domain.href} key={domain.href}>
                {domain.image ? (
                  <Image
                    className={styles.domainImage}
                    src={domain.image.src}
                    alt={domain.image.alt}
                    width={1672}
                    height={941}
                    sizes="(max-width: 720px) calc(100vw - 48px), 536px"
                  />
                ) : null}
                <span>{domain.label}</span>
                <strong>{domain.title}</strong>
                <p>{domain.description}</p>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <span>WC2026 入口图使用真实授权照片：</span>
        {imageCredits.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}（{item.credit}）
          </a>
        ))}
      </footer>
    </div>
  );
}
