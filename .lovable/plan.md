## Swap Logo and "Coming Soon" Header Positions

### Goal
On the Coming Soon page, move the "Coming Soon" heading above the company logo (currently the logo is above the heading).

### Changes

**File: `src/pages/ComingSoon.tsx`**

1. Move the `<h1>Coming Soon</h1>` block above the `<img>` logo block.
2. Adjust bottom margin on the `<h1>` from `mb-6` to `mb-10` (since it now sits above the logo, it needs more breathing room).
3. Adjust bottom margin on the `<img>` from `mb-10` to `mb-6` (since it now sits below the heading, less margin is needed before the paragraph).

No other files are affected. The import path and logo asset remain unchanged.