

## Create a dedicated "Courses" page

Move the existing courses section into its own route at `/courses` and wire up navigation so the "COURSES" link in the header takes users there.

### What will change

1. **New page** `src/pages/Courses.tsx`
   - Renders `<Header />`, the `<CoursesSection />`, and `<Footer />` so the page feels consistent with the home page.
   - Wraps content in a `min-h-screen` container, matching `Index.tsx`.
   - Adds top padding so the section is not hidden behind the absolutely-positioned header.

2. **Route registration** in `src/App.tsx`
   - Add `<Route path="/courses" element={<Courses />} />` above the catch-all `*` route.

3. **Header navigation** in `src/components/Header.tsx`
   - Replace the plain `<a href="#...">` anchors with React Router `<Link>` components so clicking "COURSES" navigates to `/courses` and "HOME" navigates to `/`.
   - Map each nav label to a route:
     - HOME → `/`
     - COURSES → `/courses`
     - ABOUT, PAGES, BLOG, CONTACTS → `/` (kept as in-page anchors or home for now, since no other pages exist yet)
   - Mobile nav gets the same treatment and still closes on click.

### Out of scope

- No changes to `CoursesSection.tsx` itself — it is reused as-is on the new page.
- No new content, styling, or course data changes.
- Other nav links (ABOUT, PAGES, BLOG, CONTACTS) are not turned into separate pages in this change.

