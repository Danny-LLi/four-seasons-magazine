import React, { useState, useRef, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";

// replace these with your assets
import coverImage from "../assets/1.png";
import page1 from "../assets/2.png";
import page2 from "../assets/3.png";
import page3 from "../assets/4.png";
import page4 from "../assets/5.png";
import page5 from "../assets/6.png";

export default function ResponsiveFlipBook() {
  // We treat the last page in this array as the BACK COVER.
  const allPages = [
    { src: page1, alt: "Magazine Page 1" },
    { src: page2, alt: "Magazine Page 2" },
    { src: page3, alt: "Magazine Page 3" },
    { src: page4, alt: "Magazine Page 4" },
    { src: page5, alt: "Magazine Page 5 (Will be Back Cover)" },
  ];

  const contentPages = allPages.length > 1 ? allPages.slice(0, -1) : [];
  const backCoverPage = allPages.length > 0 ? allPages[allPages.length - 1] : null;

  const bookRef = useRef(null);

  // sizing state
  const [bookSize, setBookSize] = useState({ width: 370, height: 500 });
  const maxMeasured = useRef({ width: 0, height: 0 });
  const loadedCount = useRef(0);

  const maxAllowedWidth = 1200;
  const maxAllowedHeight = 1600;

  const expectedImageCount = 1 + contentPages.length + (backCoverPage ? 1 : 0);

  function handleImageLoad(e) {
    const img = e.target;
    const w = img.naturalWidth || img.width;
    const h = img.naturalHeight || img.height;

    if (w > maxMeasured.current.width) maxMeasured.current.width = w;
    if (h > maxMeasured.current.height) maxMeasured.current.height = h;

    loadedCount.current += 1;

    if (loadedCount.current >= expectedImageCount) {
      const finalW = Math.min(maxMeasured.current.width, maxAllowedWidth);
      const finalH = Math.min(maxMeasured.current.height, maxAllowedHeight);
      const clampedW = Math.max(320, finalW);
      const clampedH = Math.max(420, finalH);
      setBookSize({ width: clampedW, height: clampedH });
    }
  }

  useEffect(() => {
    maxMeasured.current = { width: 0, height: 0 };
    loadedCount.current = 0;
    setBookSize({ width: 370, height: 500 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allPages.length]);

  const goPrev = () => {
    if (bookRef.current) bookRef.current.pageFlip().flipPrev();
  };
  const goNext = () => {
    if (bookRef.current) bookRef.current.pageFlip().flipNext();
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, padding: 20 }}>
      <HTMLFlipBook
        ref={bookRef}
        width={bookSize.width}
        height={bookSize.height}
        maxShadowOpacity={0.5}
        drawShadow={true}
        showCover={true}
        size="fixed"
        className="flipbook-root"
      >
        {/* FRONT COVER */}
        <div className="page page-cover" data-density="hard">
          <div className="page-content">
            <img
              src={coverImage}
              alt="Front Cover"
              onLoad={handleImageLoad}
              style={{ maxWidth: "100%", height: "auto", display: "block" }}
            />
          </div>
        </div>

        {/* CONTENT PAGES (allPages[0..n-2]) */}
        {contentPages.map((p, i) => (
          <div className="page" key={`content-${i}`}>
            <div className="page-content">
              <img
                src={p.src}
                alt={p.alt}
                onLoad={handleImageLoad}
                style={{ maxWidth: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>
        ))}

        {/* BACK COVER */}
        {backCoverPage ? (
          <div className="page page-cover" data-density="hard">
            <div className="page-content">
              <img
                src={backCoverPage.src}
                alt="Back Cover"
                onLoad={handleImageLoad}
                style={{ maxWidth: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>
        ) : (
          <div className="page page-cover" data-density="hard">
            <div className="page-content">
              <img
                src={coverImage}
                alt="Back Cover Fallback"
                onLoad={handleImageLoad}
                style={{ maxWidth: "100%", height: "auto", display: "block", opacity: 0 }}
              />
            </div>
          </div>
        )}
      </HTMLFlipBook>

      <div style={{ display: "flex", gap: 12 }}>
        <button
          onClick={goPrev}
          aria-label="Previous page"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "10px 18px",
            borderRadius: 10,
            border: "1px solid rgba(0,0,0,0.08)",
            background: "rgba(0,0,0,0.04)",
            backdropFilter: "blur(6px)",
            cursor: "pointer",
            transition: "transform .12s ease, background .12s ease",
          }}
          onMouseDown={(e) => e.currentTarget.style.transform = "translateY(1px)"}
          onMouseUp={(e) => e.currentTarget.style.transform = "translateY(0)"}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18l-6-6 6-6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Prev
        </button>

        <button
          onClick={goNext}
          aria-label="Next page"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "10px 18px",
            borderRadius: 10,
            border: "1px solid rgba(0,0,0,0.08)",
            background: "rgba(0,0,0,0.04)",
            backdropFilter: "blur(6px)",
            cursor: "pointer",
            transition: "transform .12s ease, background .12s ease",
          }}
          onMouseDown={(e) => e.currentTarget.style.transform = "translateY(1px)"}
          onMouseUp={(e) => e.currentTarget.style.transform = "translateY(0)"}
        >
          Next
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 6l6 6-6 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <style>{`
        .flipbook-root { --rpf-shadow-opacity: 0.4; }
        .page { 
          box-sizing: border-box;
          padding: 0; 
          background: white; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
        }
        .page-content {
          width: 100%;
          height: 100%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .page-content img { 
          max-width: 100%;
          height: auto;
          display: block;
          object-fit: contain;
        }

        /* Cover styling */
        .page-cover { 
          background: linear-gradient(180deg, #f7f7f7 0%, #eaeaea 100%);
        }
      `}</style>
    </div>
  );
}
