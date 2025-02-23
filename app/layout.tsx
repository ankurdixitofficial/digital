import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ankur Dixit | Portfolio',
  description: 'Software engineer specializing in building exceptional digital experiences',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="cursor" id="cursor"></div>
        <div className="cursor-follower" id="cursor-follower"></div>
        <script dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', () => {
              const cursor = document.getElementById('cursor');
              const follower = document.getElementById('cursor-follower');
              let mouseX = 0, mouseY = 0;
              let followerX = 0, followerY = 0;

              document.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
                
                // Update main cursor immediately
                cursor.style.transform = \`translate3d(\${mouseX}px, \${mouseY}px, 0)\`;
                
                // Update follower with slight delay
                requestAnimationFrame(() => {
                  followerX += (mouseX - followerX) * 0.2;
                  followerY += (mouseY - followerY) * 0.2;
                  follower.style.transform = \`translate3d(\${followerX}px, \${followerY}px, 0)\`;
                });
              });
            });
          `
        }} />
        <main>{children}</main>
      </body>
    </html>
  );
} 