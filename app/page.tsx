"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

const qrFallback =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='96' height='96'><rect width='96' height='96' fill='%23fff'/><text x='48' y='52' text-anchor='middle' font-size='13' fill='%23e9353a'>QR</text></svg>";

const logoFallback =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='72' height='72'><rect width='72' height='72' rx='16' fill='%23e9353a'/><text x='36' y='43' text-anchor='middle' font-size='18' font-weight='700' fill='white'>小黄</text></svg>";

export default function Home() {
  const [qrPreview, setQrPreview] = useState<string | null>(null);

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setQrPreview(null);
      }
    }

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  function copyWechat() {
    void navigator.clipboard?.writeText("sunnydream17");
    alert("微信号 sunnydream17 已成功复制！请前往微信添加好友。");
  }

  return (
    <>
      <div className={styles.topAlert}>
        <div className={`${styles.wrap} ${styles.alertContent}`}>
          <span className={styles.alertText}>
            🔥 加入2026世界杯足球交流群，足球赛事免费看！
          </span>
          <div className={styles.alertWechat}>
            <img
              src="/assets/wechat-qr.png"
              alt="微信群二维码"
              className={styles.alertQr}
              onClick={(event) => setQrPreview(event.currentTarget.src)}
              onError={(event) => {
                event.currentTarget.src = qrFallback;
              }}
            />
            <span>
              加微信进群:{" "}
              <button className={styles.copyId} type="button" onClick={copyWechat}>
                sunnydream17
              </button>{" "}
              <span className={styles.copyHint}>(点击复制)</span>
            </span>
          </div>
        </div>
      </div>

      <header className={styles.header}>
        <div className={`${styles.wrap} ${styles.nav}`}>
          <Link href="/" className={styles.brand}>
            <img
              src="/assets/logo.png"
              alt="小黄应用图标"
              onError={(event) => {
                event.currentTarget.src = logoFallback;
              }}
            />
            <span>小黄365</span>
          </Link>
          <nav className={styles.navLinks} aria-label="主导航">
            <a href="https://wc2026.xiaohuang365.com" className={styles.highlight}>
              🏆 2026世界杯推演
            </a>
            <a href="#tools">小黄系列软件</a>
          </nav>
        </div>
      </header>

      <section className={styles.hero} id="top">
        <div className={styles.wrap}>
          <h1>决战美加墨 2026</h1>
          <p>48强世纪扩军！实时大树动态更新 · 宿命对决精准预测 · 沉浸式夺冠路线推演</p>

          <div className={styles.heroLayout}>
            <div className={styles.wcBannerWrapper}>
              <a
                href="https://wc2026.xiaohuang365.com"
                className={styles.wcBanner}
                title="点击进入世界杯推演系统"
              >
                <img src="/assets/wc-banner.jpg" alt="2026世界杯实时对阵与推演系统" />
                <div className={styles.bannerOverlayText}>点击进入推演系统 👆</div>
              </a>
            </div>

            <div className={styles.recruitWrapper}>
              <h3 className={styles.recruitTitle}>
                <span>👑</span> 诚招本市独家冠名
              </h3>

              <div className={styles.adPlaceholder}>
                [预留广告图片位置]
                <span>全城精准球迷流量，适合酒吧、餐饮、球鞋周边商户曝光。</span>
              </div>

              <div className={styles.contactCard}>
                <img
                  src="/assets/wechat-qr.png"
                  alt="微信二维码"
                  onClick={(event) => setQrPreview(event.currentTarget.src)}
                  onError={(event) => {
                    event.currentTarget.src = qrFallback;
                  }}
                />
                <div>
                  <div className={styles.contactTitle}>扫码添加微信</div>
                  <div className={styles.contactNote}>备注：合作</div>
                  <div className={styles.wechatId}>
                    微信号：<span>sunnydream17</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className={styles.wrap} id="tools">
        <div className={styles.sectionTitle}>
          <h2>小黄系列软件</h2>
          <p>为普通电脑与电视用户打造，拒绝复杂，简单好用</p>
        </div>

        <div className={styles.gridTools}>
          <article className={styles.productCard}>
            <div className={styles.productHeader}>
              <img
                src="/assets/logo.png"
                alt="格式小黄管家图标"
                onError={(event) => {
                  event.currentTarget.src = logoFallback;
                }}
              />
              <div>
                <h3>格式小黄管家</h3>
                <div className={styles.tagList}>
                  <span>视频转换</span>
                  <span>图片压缩</span>
                  <span>GIF生成</span>
                  <span>Windows/macOS</span>
                </div>
              </div>
            </div>
            <p>
              本地全能格式管家。自媒体创作者剪辑球星集锦、日常办公处理图片大小无损压缩的好帮手。
            </p>
            <a href="https://format.xiaohuang365.com" className={`${styles.btn} ${styles.primary}`}>
              了解并下载
            </a>
          </article>

          <article className={styles.productCard}>
            <div className={styles.productHeader}>
              <div className={styles.tvIcon}>TV</div>
              <div>
                <h3>小黄影视 TV</h3>
                <div className={styles.tagList}>
                  <span>大屏看球</span>
                  <span>直播源接入</span>
                  <span>Android TV</span>
                </div>
              </div>
            </div>
            <p>
              客厅看球、看片神器。内置丰富稳定接口，超清无广告。世界杯期间畅享赛事直播源，告别卡顿。
            </p>
            <button
              className={`${styles.btn} ${styles.tv}`}
              type="button"
              onClick={() => alert("即将接入高速网盘下载链接，站长正在配置中，敬请期待！")}
            >
              前往网盘下载 TVBox
            </button>
          </article>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.wrap}>
          <span>Copyright © 2026 小黄应用 (xiaohuang365.com) | 畅享数字生活与精彩赛事</span>
        </div>
      </footer>

      {qrPreview ? (
        <div
          className={styles.qrModal}
          aria-hidden="false"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setQrPreview(null);
            }
          }}
        >
          <div className={styles.closeHint}>点击空白处或按 Esc 关闭</div>
          <img src={qrPreview} alt="二维码放大预览" />
        </div>
      ) : null}
    </>
  );
}
