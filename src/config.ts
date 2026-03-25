/**
 * 사이트에 쓰는 링크·연락처는 여기서 수정하면 됩니다. (env 불필요)
 */
export const config = {
  /** public 기준 — `public/한큐 로고.png` */
  logoUrl: '/한큐 로고.png',

  downloadUrl:
    'https://drive.google.com/file/d/1BzHX9WmsYPO_3-7452AaM7fYFWg9SpEb/view?usp=drive_link',

  /** public 기준 경로 — `public/한큐 사용법.pdf` */
  manualPdfUrl: '/한큐 사용법.pdf',

  /** 유튜브 영상 ID — https://youtu.be/AEoypASqSAQ (사용자 매뉴얼) */
  youtubeVideoId: 'AEoypASqSAQ',

  /** 홍보 쇼츠 ID — https://youtube.com/shorts/5MamC1wVBFY */
  promoYoutubeShortId: '5MamC1wVBFY',

  /** 구입·유지보수 요금 (표기용) */
  /** 최초 구입 정가(취소선 표기) */
  priceFirstPurchasePrevious: '60만원',
  priceFirstPurchase: '40만원',
  priceAnnualMaintenance: '5만원',

  /** 카카오톡 1:1 오픈채팅 — https://open.kakao.com/o/sXqId5mi */
  kakaoOpenChatUrl: 'https://open.kakao.com/o/sXqId5mi',
  kakaoOpenChatName: 'HanQ',
  /** public 기준 — `public/한큐 qr코드.png` */
  kakaoQrImagePath: '/한큐 qr코드.png',

  /** 개발 표기 */
  developerBrand: '이창현수학',
  contactPhone: '010-9903-7949',

  /**
   * 오픈이벤트 팝업 — `오늘 하루 안 보기` 클릭 시 저장하는 localStorage 키
   * 값: 사용자 로컬 날짜 `YYYY-MM-DD`
   */
  eventPopupHideStorageKey: 'hanq-open-event-hide-date',
} as const
