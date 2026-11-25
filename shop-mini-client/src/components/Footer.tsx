export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <p>© {year} ShopMini · Bài tập môn Công nghệ lập trình hiện đại</p>
        <p>Hotline: 1900 0000 · Email: hotro@shopmini.vn</p>
        <p>Nguyễn Thị Lan Anh - D23C01A2293</p>
      </div>
    </footer>
  );
}