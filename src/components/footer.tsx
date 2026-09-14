import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <div><strong>Taufik Triantono</strong><span>Backend &amp; Platform Engineering</span></div>
        <p>Built with Next.js and deployed on Vercel.</p>
        <Link href="#top">Back to top ↑</Link>
      </div>
    </footer>
  );
}
