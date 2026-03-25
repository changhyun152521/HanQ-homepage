import { useCallback, type MouseEvent } from 'react'
import { config } from './config'
import { resolveDownloadHref } from './utils/drive'
import './App.css'

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

/** public 한글 파일명 등을 안전하게 URL로 사용 */
function publicAssetUrl(path: string): string {
  if (!path.startsWith('/')) return encodeURI(`/${path}`)
  return encodeURI(path)
}

export default function App() {
  const downloadHref = resolveDownloadHref(config.downloadUrl)
  const manualPdfSrc = config.manualPdfUrl
    ? publicAssetUrl(config.manualPdfUrl)
    : ''

  const kakaoQrSrc = config.kakaoQrImagePath
    ? publicAssetUrl(config.kakaoQrImagePath)
    : ''

  const logoSrc = config.logoUrl ? publicAssetUrl(config.logoUrl) : ''

  const onNavClick = useCallback((e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    scrollToId(id)
  }, [])

  return (
    <div className="page">
      <header className="header">
        <div className="header__inner">
          <a
            href="#top"
            className="logo"
            onClick={(e) => onNavClick(e, 'top')}
          >
            {logoSrc ? (
              <img
                className="logo__img"
                src={logoSrc}
                alt="HanQ"
                width={128}
                height={32}
                decoding="async"
              />
            ) : (
              'HanQ'
            )}
          </a>
          <nav className="nav" aria-label="주요 메뉴">
            <a
              href="#manual"
              className="nav__link"
              onClick={(e) => onNavClick(e, 'manual')}
            >
              사용자 매뉴얼
            </a>
            <a
              href="#download"
              className="nav__link"
              onClick={(e) => onNavClick(e, 'download')}
            >
              다운로드
            </a>
            <a
              href="#contact"
              className="nav__link"
              onClick={(e) => onNavClick(e, 'contact')}
            >
              구입문의
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section id="top" className="hero">
          <p className="hero__eyebrow">한글 문서 기반 문제은행</p>
          <h1 className="hero__title">HanQ</h1>
          <p className="hero__lead">
            교재와 기출문제를 직접 구성해 나만의 문제 은행을 만드는 데스크톱
            프로그램입니다. 한글 문서를 중심으로 학습 자료를 정리하고 활용해 보세요.
          </p>

          {config.promoYoutubeShortId ? (
            <div className="hero__promo">
              <p className="hero__promo-label">프로그램 소개 쇼츠</p>
              <div className="hero-short">
                <div className="hero-short__frame">
                  <iframe
                    title="HanQ 홍보 쇼츠"
                    src={`https://www.youtube.com/embed/${config.promoYoutubeShortId}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          ) : null}
        </section>

        <section id="manual" className="section section--alt" aria-labelledby="manual-heading">
          <div className="section__inner">
            <h2 id="manual-heading" className="section__title">
              사용자 매뉴얼
            </h2>
            <p className="section__desc section__desc--manual">
              아래에서 PDF를 바로 읽을 수 있습니다. 화면이 좁으면 새 탭에서
              여는 것을 권장합니다.
            </p>

            {manualPdfSrc ? (
              <div className="pdf-panel">
                <div className="pdf-panel__toolbar">
                  <div className="pdf-panel__label">
                    <span className="pdf-panel__title">문서 매뉴얼</span>
                    <span className="pdf-panel__hint">
                      화면 구성·DB 구성 등 (PDF)
                    </span>
                  </div>
                  <div className="pdf-panel__actions">
                    <a
                      className="btn btn--toolbar"
                      href={manualPdfSrc}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      새 탭에서 보기
                    </a>
                    <a
                      className="btn btn--toolbar btn--toolbar-primary"
                      href={manualPdfSrc}
                      download="HanQ-manual.pdf"
                    >
                      파일 받기
                    </a>
                  </div>
                </div>
                <div className="pdf-frame-shell">
                  <iframe
                    className="pdf-frame"
                    title="HanQ 사용자 매뉴얼 PDF"
                    src={`${manualPdfSrc}#view=FitH`}
                  />
                </div>
              </div>
            ) : (
              <p className="card__muted manual-fallback">
                PDF 경로는 <code className="inline-code">config.ts</code>의{' '}
                <code className="inline-code">manualPdfUrl</code>에 넣으면
                표시됩니다.
              </p>
            )}

            <div className="manual-video">
              <h3 className="manual-video__heading">사용법 영상</h3>
              {config.youtubeVideoId ? (
                <div className="card card--video">
                  <div className="video-wrap">
                    <iframe
                      title="HanQ 사용법"
                      src={`https://www.youtube.com/embed/${config.youtubeVideoId}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                </div>
              ) : (
                <p className="card__muted">
                  영상 ID를 <code className="inline-code">config.ts</code>의{' '}
                  <code className="inline-code">youtubeVideoId</code>에 넣으면
                  재생창이 나타납니다.
                </p>
              )}
            </div>
          </div>
        </section>

        <section id="download" className="section" aria-labelledby="download-heading">
          <div className="section__inner section__inner--narrow">
            <h2 id="download-heading" className="section__title">
              다운로드
            </h2>
            <p className="section__desc">
              프로그램은 ZIP으로 제공됩니다. 압축을 푼 뒤 안내에 따라 실행하세요.
            </p>
            <a
              className="btn btn--primary"
              href={downloadHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Drive에서 받기
            </a>
          </div>
        </section>

        <section id="contact" className="section section--alt" aria-labelledby="contact-heading">
          <div className="section__inner section__inner--contact">
            <h2 id="contact-heading" className="section__title">
              구입문의
            </h2>

            <div className="pricing-card" aria-labelledby="pricing-heading">
              <h3 id="pricing-heading" className="pricing-card__title">
                이용 요금
              </h3>
              <dl className="pricing-list">
                <div className="pricing-list__item">
                  <dt className="pricing-list__term">최초 구입</dt>
                  <dd className="pricing-list__body">
                    <span className="pricing-list__amount">
                      {config.priceFirstPurchase}
                    </span>
                    <span className="pricing-list__note">
                      프로그램을 처음 이용하실 때 1회 납부합니다.
                    </span>
                  </dd>
                </div>
                <div className="pricing-list__item">
                  <dt className="pricing-list__term">연간 유지보수</dt>
                  <dd className="pricing-list__body">
                    <span className="pricing-list__amount">
                      연 {config.priceAnnualMaintenance}
                    </span>
                    <span className="pricing-list__note">
                      첫해 이후 매년 적용됩니다. 서버 유지 비용 및 업데이트
                      버전 제공 비용이 포함됩니다.
                    </span>
                  </dd>
                </div>
              </dl>
              <p className="pricing-card__footnote">
                첫해에는 유지보수 비용을 납부하지 않으며, 최초 구입비만
                납부하시면 됩니다.
              </p>
            </div>

            <p className="section__desc section__desc--contact">
              구입·결제 문의는 카카오톡{' '}
              <strong>{config.kakaoOpenChatName}</strong> 1:1 오픈채팅 또는{' '}
              <br />
              전화(
              <a
                className="section__desc__tel"
                href={`tel:${config.contactPhone.replace(/-/g, '')}`}
              >
                {config.contactPhone}
              </a>
              )로 연락해 주세요.
            </p>

            <div className="kakao-panel">
              {kakaoQrSrc ? (
                <a
                  className="kakao-panel__qr"
                  href={config.kakaoOpenChatUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={kakaoQrSrc}
                    alt={`${config.kakaoOpenChatName} 카카오톡 오픈채팅 QR 코드`}
                    width={220}
                    height={220}
                    decoding="async"
                  />
                </a>
              ) : null}
              <p className="kakao-panel__room">
                오픈채팅방 <span className="kakao-panel__room-name">{config.kakaoOpenChatName}</span>
              </p>
              <a
                className="btn btn--primary kakao-panel__cta"
                href={config.kakaoOpenChatUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                1:1 오픈채팅 참여하기
              </a>
              <p className="kakao-panel__hint">
                모바일은 QR을 스캔하거나 위 버튼을 눌러 주세요. PC에서는 버튼으로
                입장할 수 있습니다.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p className="footer__line">
          <span>© {new Date().getFullYear()} HanQ</span>
          <span className="footer__dot" aria-hidden>
            ·
          </span>
          <span>developed by {config.developerBrand}</span>
          <span className="footer__dot" aria-hidden>
            ·
          </span>
          <a
            className="footer__link"
            href={`tel:${config.contactPhone.replace(/-/g, '')}`}
          >
            {config.contactPhone}
          </a>
        </p>
      </footer>
    </div>
  )
}
