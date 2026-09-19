import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="not-found-mark" aria-hidden="true">404</div>
      <p className="not-found-eyebrow">SỔ GIA ĐÌNH CÔNG GIÁO</p>
      <h1>Không tìm thấy trang</h1>
      <p className="not-found-message">
        Đường dẫn hoặc phiếu gia đình bạn đang tìm không tồn tại.
      </p>
      <Link className="not-found-link" href="/">
        Về trang chính
      </Link>
    </main>
  );
}