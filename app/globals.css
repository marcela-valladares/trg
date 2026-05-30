@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --deep: #1e3a5f;
  --ink: #092235;
  --gold: #d4af37;
  --cream: #f2ede6;
  --porcelain: #fbf8f3;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  color: var(--ink);
  background:
    radial-gradient(circle at top left, rgba(212, 175, 55, 0.1), transparent 28rem),
    linear-gradient(180deg, #fffaf4 0%, var(--cream) 44%, #fff 100%);
  font-family: var(--font-montserrat), Arial, sans-serif;
}

body::before {
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  content: "";
  opacity: 0.34;
  background-image:
    linear-gradient(rgba(30, 58, 95, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(30, 58, 95, 0.035) 1px, transparent 1px);
  background-size: 44px 44px;
  mask-image: linear-gradient(to bottom, black, transparent 82%);
}

::selection {
  color: white;
  background: var(--deep);
}

.section-shell {
  width: min(1180px, calc(100% - 32px));
  margin-inline: auto;
}

.eyebrow {
  display: flex;
  align-items: center;
  gap: 14px;
  color: #a06a18;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.36em;
  text-transform: uppercase;
}

.eyebrow::after {
  width: 74px;
  height: 1px;
  content: "";
  background: linear-gradient(90deg, var(--gold), transparent);
}

.gold-script {
  color: #b87a20;
  font-family: var(--font-playfair), Georgia, serif;
  font-style: italic;
}

.gold-line {
  background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.95), transparent);
}

.navy-panel {
  color: white;
  background:
    radial-gradient(circle at 18% 20%, rgba(212, 175, 55, 0.18), transparent 32%),
    linear-gradient(135deg, #061927 0%, #0b2a40 52%, #1e3a5f 100%);
}

.glass-panel {
  border: 1px solid rgba(212, 175, 55, 0.34);
  background: rgba(255, 255, 255, 0.62);
  box-shadow: 0 18px 70px rgba(9, 34, 53, 0.1);
  backdrop-filter: blur(18px);
}

.ornament {
  position: absolute;
  width: 180px;
  height: 180px;
  pointer-events: none;
  opacity: 0.54;
}

.ornament::before,
.ornament::after {
  position: absolute;
  width: 92px;
  height: 1px;
  content: "";
  background: var(--gold);
  transform: rotate(-42deg);
  transform-origin: left center;
}

.ornament::after {
  top: 34px;
  left: 28px;
  width: 72px;
  transform: rotate(-64deg);
}

.leaf {
  position: absolute;
  width: 28px;
  height: 52px;
  border: 1px solid var(--gold);
  border-radius: 100% 0 100% 0;
  transform: rotate(34deg);
}

.leaf:nth-child(1) {
  top: 18px;
  left: 72px;
}

.leaf:nth-child(2) {
  top: 48px;
  left: 112px;
}

.leaf:nth-child(3) {
  top: 74px;
  left: 48px;
}

.leaf:nth-child(4) {
  top: 108px;
  left: 92px;
}

.soft-focus {
  filter: saturate(0.94) contrast(1.03);
}

.focus-ring:focus-visible {
  outline: 3px solid rgba(212, 175, 55, 0.68);
  outline-offset: 4px;
}

.art-page {
  min-height: 100vh;
  background: #061927;
}

.art-section {
  position: relative;
  width: min(100%, 1024px);
  margin: 0 auto;
  line-height: 0;
  background: #061927;
}

.art-image {
  display: block;
  width: 100%;
  height: auto;
  user-select: none;
}

.art-hotspot {
  position: absolute;
  z-index: 5;
  display: block;
  border-radius: 999px;
  line-height: 1;
  cursor: pointer;
}

.art-hotspot:focus-visible {
  outline: 2px solid rgba(255, 255, 255, 0.92);
  outline-offset: 2px;
  background: rgba(212, 175, 55, 0.18);
}

.art-anchor {
  position: absolute;
  top: 0;
  left: 0;
  width: 1px;
  height: 1px;
}

@media (max-width: 768px) {
  .section-shell {
    width: min(100% - 24px, 680px);
  }

  .eyebrow {
    gap: 10px;
    font-size: 0.64rem;
    letter-spacing: 0.24em;
  }

  .eyebrow::after {
    width: 46px;
  }
}
