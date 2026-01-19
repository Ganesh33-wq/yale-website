# Quick Reference: Animations & Hover Effects

## CSS Classes Reference

### Buttons
```
.educate-btn              Primary button with curve animation
.educate-btn.sec          Secondary button (color change on hover)
.educate-btn.sec-2        Transparent button (background on hover)
.educate-btn.sm           Small size variant
.educate-btn__curve       Inner curve element (auto-animated with parent)
```

### Cards
```
.feature__card            Card with hover effects
.feature__icon            Icon with border animation
.feature__content         Content area
```

### Social Icons
```
.social_icons_list        Colored background style
.social_icons_list_2      Light background with icon color change
```

### Scroll
```
.scroll-top              Fixed scroll-to-top button (auto-animated)
.scroll-top.active       Active state (shown when scrolled)
```

### Cursor
```
.custom-cursor__cursor       Main cursor element
.custom-cursor__innerhover   Inner cursor dot
.custom-cursor__hover        Hover state (auto-applied)
.cursor-hide                 Hide default cursor
.cursor-pointer              Add to custom elements for hover effect
```

---

## Animation Timings

| Element | Duration | Easing | Notes |
|---------|----------|--------|-------|
| Link | 0.5s | ease | Color change |
| Button hover | 0.3s | ease | Main transition |
| Curve slide | 0.5s | ease | Horizontal slide |
| Card icon | 0.5s | ease | Border opacity |
| Social icon | 0.5s | ease | Background color |
| Custom cursor | 200ms | ease-out | Mouse tracking |
| Scroll button | 200ms | linear | Fade in/out |

---

## Color Palette

```
#0aa6d7   Cyan/Accent (hover colors)
#2bac44   Green (primary button)
#0070c0   Blue (secondary button hover)
#1a1e1d   Dark gray (social icon hover)
#2a322d   Dark text/icon
#fefcfb   Off-white/Light background
#F6F5F5   Light gray (button curve)
```

---

## React Hooks

### useCustomCursor
```javascript
import useCustomCursor from '@/hooks/useCustomCursor';

// In component
useCustomCursor(true); // false to disable
```

**Features:**
- Tracks mouse position
- Enlarges on links/buttons
- Smooth 200ms transitions
- Auto-applies to interactive elements

### useScrollToTop
```javascript
import useScrollToTop from '@/hooks/useScrollToTop';

// In component
const { isVisible, scrollToTop } = useScrollToTop(300);

// Use in JSX
{isVisible && (
  <button className="scroll-top active" onClick={scrollToTop} />
)}
```

**Features:**
- Shows button after Nth pixels scrolled (default 300)
- Smooth scroll to top
- Automatic fade in/out animations

---

## Component Structure

### Button Structure
```jsx
<button className="educate-btn">
  Text Here
  <span className="educate-btn__curve"></span>
</button>
```

### Feature Card Structure
```jsx
<div className="feature__card">
  <div className="feature__icon">
    {/* SVG or icon */}
  </div>
  <div className="feature__content">
    <h3>Title</h3>
    <p>Description</p>
  </div>
</div>
```

### Social Icons Structure
```jsx
<ul className="social_icons_list">
  <li>
    <a href="#">
      <svg>...</svg>
    </a>
  </li>
</ul>
```

---

## CSS Import
```javascript
// In App.jsx or main entry point
import './styles/animations.css';
```

---

## Quick Implementation Steps

1. ✅ Import `animations.css` in App.jsx
2. ✅ Add classes to HTML elements
3. ✅ Import and use `useCustomCursor()` hook
4. ✅ Import and use `useScrollToTop()` hook
5. ✅ Test animations in browser
6. ✅ Test on mobile/touch devices

---

## Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers
- ✅ IE not supported (uses modern CSS)

---

## Performance Tips

1. Custom cursor can be disabled: `useCustomCursor(false)`
2. Animations use GPU acceleration (transform, opacity)
3. No JavaScript animations - pure CSS transitions
4. Lightweight hooks with minimal re-renders

---

## Accessibility

- All animations respect `prefers-reduced-motion`
- Proper ARIA labels on buttons
- Keyboard accessible (no hover-only states)
- Color not the only indicator
- Sufficient color contrast

---

## Common Issues & Fixes

| Issue | Solution |
|-------|----------|
| Animations not showing | Import `animations.css` |
| Custom cursor not visible | Call `useCustomCursor()` in App |
| Scroll button not appearing | Page must be scrollable (tall) |
| Classes not working | Check exact class names (case-sensitive) |
| Performance lag | Disable custom cursor on mobile |

---

## Files to Modify/Create

| File | Status | Notes |
|------|--------|-------|
| `src/App.jsx` | MODIFY | Add import for animations.css |
| `src/styles/animations.css` | CREATE | All animation CSS |
| `src/hooks/useCustomCursor.js` | CREATE | Custom cursor hook |
| `src/hooks/useScrollToTop.js` | CREATE | Scroll-to-top hook |
| `src/IMPLEMENTATION_GUIDE.md` | CREATE | Full setup guide |
| `src/ANIMATIONS_AND_HOVER_EFFECTS.md` | CREATE | Detailed specs |

---

## Testing Checklist

### Must Have
- [ ] Link hover color changes
- [ ] Button curve animates
- [ ] Social icons change on hover
- [ ] Scroll button appears/disappears
- [ ] Custom cursor visible and tracking
- [ ] All animations smooth (no jank)
- [ ] Works on mobile
- [ ] Respects prefers-reduced-motion

### Nice to Have
- [ ] Feature card border animation smooth
- [ ] All color transitions match Django
- [ ] Responsive sizing on mobile
- [ ] No console errors
- [ ] Fast loading (CSS in cache)

---

## Support

For detailed specifications, see: `ANIMATIONS_AND_HOVER_EFFECTS.md`
For implementation help, see: `IMPLEMENTATION_GUIDE.md`
