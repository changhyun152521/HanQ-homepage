/**
 * 구글 드라이브 공유 링크에서 file id를 추출해 직접 다운로드 URL로 변환합니다.
 * 이미 다른 형태의 URL이면 그대로 반환합니다.
 */
export function resolveDownloadHref(url: string): string {
  const trimmed = url.trim()
  const fromPath = trimmed.match(/\/file\/d\/([a-zA-Z0-9_-]+)/)
  if (fromPath) {
    return `https://drive.google.com/uc?export=download&id=${fromPath[1]}`
  }
  const fromOpen = trimmed.match(/[?&]id=([a-zA-Z0-9_-]+)/)
  if (fromOpen && trimmed.includes('drive.google.com')) {
    return `https://drive.google.com/uc?export=download&id=${fromOpen[1]}`
  }
  return trimmed
}
