# Sessionize CFP Embed on Speakers Page

## Summary

Embed the Sessionize Call for Speakers submission form on the speakers page (`/speakers`) via iframe, placed as a new section between the page header and the existing speaker grid.

## Motivation

The CFP for DC State of the Stack 2026 is open (closes June 8, 2026). Embedding the submission form directly on the speakers page makes it easy for potential speakers to submit talks without leaving the site. The CFP is time-sensitive and should be prominent.

## Design

### Page Layout (top to bottom)

1. **Page header** (existing) — "Speakers" title, pink divider, subtitle text
2. **CFP section** (new) — heading, description with deadline, Sessionize iframe
3. **Speaker grid** (existing) — speaker cards or "Stay tuned" fallback, unchanged

### CFP Section Details

- **Heading:** "Call for Speakers" (navy, consistent with site headings)
- **Description:** "Interested in speaking? Submit your talk proposal through Sessionize. The CFP closes June 8, 2026."
- **iframe:**
  - `src="https://sessionize.com/dc-stateofthestack-2026/"`
  - `width="100%"`, `height="800px"`
  - `loading="lazy"` for performance
  - `title="Sessionize Call for Speakers"` for accessibility
  - Styled: `rounded-2xl border border-gray-200` to match existing card aesthetic

### File Changes

- **Modified:** `src/pages/speakers.astro` — add CFP section between header and speaker grid
- **No new files, dependencies, or config changes**

### Out of Scope

- No automatic show/hide based on CFP deadline (manual removal when CFP closes)
- No JavaScript-based iframe resizing (fixed 800px height)
- No changes to the speaker grid or content collection
