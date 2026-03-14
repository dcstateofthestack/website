# Sessionize CFP Embed Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Embed the Sessionize CFP submission form on the speakers page as a new section above the speaker grid.

**Architecture:** Add a single HTML section with an iframe to the existing `speakers.astro` page. No new components, dependencies, or config changes.

**Tech Stack:** Astro, Tailwind CSS

**Spec:** `docs/superpowers/specs/2026-03-14-sessionize-cfp-embed-design.md`

---

## File Structure

- Modify: `src/pages/speakers.astro` — add CFP section, update fallback text

No new files.

---

## Chunk 1: Embed CFP and Update Fallback

### Task 1: Add CFP Section to Speakers Page

**Files:**
- Modify: `src/pages/speakers.astro:15-21` (insert new section after the header `</div>`, before the speaker grid conditional)

- [ ] **Step 1: Add the CFP section between the page header and the speaker grid**

In `src/pages/speakers.astro`, insert the following block after the closing `</div>` of the `text-center mb-12` header div (line 21) and before the `{speakers.length > 0 ?` conditional (line 23):

```html
			<div class="mb-12">
				<h2 class="text-2xl font-bold text-navy mb-2">Call for Speakers</h2>
				<p class="text-gray-500 mb-6">Interested in speaking? Submit your talk proposal through Sessionize. The CFP closes June 8, 2026.</p>
				<iframe
					src="https://sessionize.com/dc-stateofthestack-2026/"
					width="100%"
					height="800"
					loading="lazy"
					title="Sessionize Call for Speakers"
					sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
					class="rounded-2xl border border-gray-200"
				></iframe>
			</div>
```

- [ ] **Step 2: Update the empty-state fallback text**

On line 44 (after the insertion), change:

```html
<p class="text-gray-500 text-lg text-center">Stay tuned for our Call for Proposals!</p>
```

to:

```html
<p class="text-gray-500 text-lg text-center">Speakers will be announced soon.</p>
```

- [ ] **Step 3: Verify the dev server renders correctly**

Run: `npm run dev`

Open `http://localhost:4321/speakers` in a browser. Verify:
- "Call for Speakers" heading appears below the page header
- Sessionize iframe loads below the description text
- "Speakers will be announced soon." appears below the iframe (when no speakers exist)
- Page styling is consistent (navy heading, gray description text, rounded iframe border)

- [ ] **Step 4: Commit**

```bash
git add src/pages/speakers.astro
git commit -m "feat: embed Sessionize CFP form on speakers page"
```
