## 2026-02-05 - Navigation Accessibility Pattern
**Learning:** Using `routerLinkActive` variable export (`#rla="routerLinkActive"`) allows binding `aria-current` dynamically without complex logic.
**Action:** Always use `[attr.aria-current]="rla.isActive ? 'page' : null"` on navigation links.
