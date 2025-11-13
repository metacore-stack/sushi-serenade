# Sushi Serenade

## Overview

Sushi Serenade is an immersive microsite that stages the atmosphere of a contemporary omakase bar. Guests are guided through a narrative journey that blends origin stories, chef philosophies, and seasonal pairings while showcasing how design, motion, and copy can work together to elevate a dining brand.

## Core Experience

- Story-led navigation introduces each course as a chapter in the restaurant’s culinary tale.
- Tailored layouts for mobile and desktop keep typography, imagery, and pacing balanced across devices.
- Atmosphere-driven motion cues highlight transitions between scenes without overwhelming content.
- Locale-aware messaging serves localized copy, typography, and spacing to celebrate cultural nuance.

## Interaction Blueprint

1. Hero sequences invite visitors to explore the tasting menu through animated photo compositions.
2. Scroll-triggered reveals choreograph content using Framer Motion timelines for smooth sequences.
3. Menu, testimonials, and reservation prompts draw from structured JSON data for fast iteration.
4. Contextual CTAs evolve throughout the experience, guiding visitors from discovery to booking.

## Technical Notes

- Built with TypeScript, Next.js 14 App Router, and Tailwind CSS for rapid layout iteration.
- Global styles lean on CSS variables and utility layers to coordinate palettes and spacing tokens.
- Swiper powers the gallery carousel with custom navigation controls and progress indicators.
- Static assets are optimized through Next.js image tooling to preserve retina clarity at minimal weight.

## Accessibility & Performance

- Semantic page regions, logical tab order, and ARIA labeling ensure keyboard and screen reader compatibility.
- Scroll-driven interactions respect reduced-motion preferences and hold contrast ratios above WCAG AA.
- Metadata templates generate Open Graph and Twitter cards for every locale and major section.
- Lighthouse profiling is used to track core web vitals and catch regressions during iteration.

## Visual Reference

Project captures live in `screenshots/` document layout tests for both language variants, plus structural diagrams for onboarding new collaborators.

## Getting Started

```bash
npm install
npm run dev
```

Visit the local development URL printed in the terminal to review the interactive experience. Adjust configuration files in `src/settings/` and content JSON in `src/data/` to stage new menu items, testimonials, or seasonal campaigns.

## Roadmap Ideas

- Expand the storytelling arc with chef interviews and ambient soundscapes.
- Introduce a reservation flow that syncs with third-party booking providers.
- Layer in analytics events to monitor engagement on key narrative beats.

