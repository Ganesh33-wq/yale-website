# Implementation Guide: Add Missing Animations to React

This guide walks through adding all missing animations and hover effects from the Django version to the React version.

## Table of Contents
1. [Quick Start](#quick-start)
2. [CSS Implementation](#css-implementation)
3. [React Component Updates](#react-component-updates)
4. [Custom Cursor Setup](#custom-cursor-setup)
5. [Scroll-to-Top Setup](#scroll-to-top-setup)
6. [Testing Checklist](#testing-checklist)

---

## Quick Start

### Step 1: Import the animations CSS file
Add to your main `App.jsx` or `index.js`:

```javascript
import './styles/animations.css';
```

### Step 2: Apply animations to components

The animations are CSS-based and automatically apply to elements with the right classes. See examples below.

---

## CSS Implementation

### 1. Global Link Animations
**Already configured in `styles/animations.css`**

All `<a>` tags will automatically get a cyan color on hover:
```css
a:hover {
  color: #0aa6d7; /* Cyan */
}
```

---

### 2. Button Animations

#### Use the `.educate-btn` class for buttons with curve animation:

```jsx
// Primary button
<button className="educate-btn">
  Click Me
  <span className="educate-btn__curve"></span>
</button>

// Secondary button (darker on hover)
<button className="educate-btn sec">
  Secondary
  <span className="educate-btn__curve"></span>
</button>

// Secondary button 2 (transparent background)
<button className="educate-btn sec-2">
  Transparent
  <span className="educate-btn__curve"></span>
</button>

// Small button
<button className="educate-btn sm">
  Small
  <span className="educate-btn__curve"></span>
</button>
```

**Button Animation Effect:** The `.educate-btn__curve` element animates from right to left on hover with a skew transform.

---

### 3. Feature Card Animations

```jsx
<div className="feature__card">
  <div className="feature__icon">
    {/* Your icon/SVG here */}
    <svg>/* icon */</svg>
  </div>
  <div className="feature__content">
    <h3>Feature Title</h3>
    <p>Feature description</p>
  </div>
</div>
```

**Card Animation Effect:** Icon border becomes more opaque on hover (0.5s transition).

---

### 4. Social Icons

#### Style 1: Colored background circles
```jsx
<ul className="social_icons_list">
  <li>
    <a href="#facebook" title="Facebook">
      <svg>/* Facebook icon */</svg>
    </a>
  </li>
  <li>
    <a href="#twitter" title="Twitter">
      <svg>/* Twitter icon */</svg>
    </a>
  </li>
</ul>
```

**Animation:** Background changes from cyan (#0aa6d7) to dark (#1a1e1d) on hover.

#### Style 2: Light background with icon color change
```jsx
<ul className="social_icons_list_2">
  <li>
    <a href="#facebook" title="Facebook">
      <svg>
        <path fill="#2a322d"><!-- icon path --></path>
      </svg>
    </a>
  </li>
  <li>
    <a href="#twitter" title="Twitter">
      <svg>
        <path fill="#2a322d"><!-- icon path --></path>
      </svg>
    </a>
  </li>
</ul>
```

**Animation:** 
- Background changes from light (#fefcfb) to cyan (#0aa6d7) on hover
- Icon path color changes from dark (#2a322d) to light (#fefcfb) on hover

---

## React Component Updates

### 1. Update Button Components

If you have a custom Button component, ensure it supports the `.educate-btn` class:

```jsx
// components/Button.jsx
export const EducateButton = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  onClick,
  ...props 
}) => {
  const getClassNames = () => {
    let classes = 'educate-btn';
    
    if (variant === 'secondary') classes += ' sec';
    if (variant === 'secondary-2') classes += ' sec-2';
    if (size === 'small') classes += ' sm';
    
    return classes;
  };

  return (
    <button className={getClassNames()} onClick={onClick} {...props}>
      {children}
      <span className="educate-btn__curve"></span>
    </button>
  );
};
```

Usage:
```jsx
<EducateButton variant="primary">Primary</EducateButton>
<EducateButton variant="secondary">Secondary</EducateButton>
<EducateButton variant="secondary-2">Transparent</EducateButton>
<EducateButton size="small">Small</EducateButton>
```

---

### 2. Create Card Component with Animation

```jsx
// components/FeatureCard.jsx
export const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="feature__card">
      <div className="feature__icon">
        <Icon />
      </div>
      <div className="feature__content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
```

---

### 3. Create Social Icons Component

```jsx
// components/SocialIcons.jsx
export const SocialIcons = ({ style = 'list-1' }) => {
  const iconLinks = [
    { name: 'Facebook', url: '#facebook', icon: FacebookIcon },
    { name: 'Twitter', url: '#twitter', icon: TwitterIcon },
    { name: 'LinkedIn', url: '#linkedin', icon: LinkedInIcon },
  ];

  const className = style === 'list-2' ? 'social_icons_list_2' : 'social_icons_list';

  return (
    <ul className={className}>
      {iconLinks.map(({ name, url, icon: Icon }) => (
        <li key={name}>
          <a href={url} title={name} aria-label={name}>
            <Icon />
          </a>
        </li>
      ))}
    </ul>
  );
};
```

---

## Custom Cursor Setup

The custom cursor provides a branded cursor that tracks mouse movement and enlarges on interactive elements.

### Step 1: Import the hook in your App

```jsx
// App.jsx
import useCustomCursor from '@/hooks/useCustomCursor';

function App() {
  useCustomCursor(true); // Set to false to disable

  return (
    <div>
      {/* Your app content */}
    </div>
  );
}
```

### Step 2: The hook automatically:
- Creates custom cursor elements
- Hides default browser cursor
- Tracks mouse position
- Enlarges cursor on hover of links/buttons
- Applies smooth 200ms transitions

### Step 3: Optional - Add custom cursor class to elements

To apply hover effect to custom elements:

```jsx
<div className="cursor-pointer">
  This div will trigger cursor hover effect
</div>
```

### Customization

Edit `hooks/useCustomCursor.js` to customize:

```javascript
// Change cursor color
border: 1px solid #0aa6d7;  // Change this hex color

// Change cursor size
width: 25px;
height: 25px;

// Change transition speed
transition: all 200ms ease-out;  // Modify timing
```

---

## Scroll-to-Top Setup

Adds an animated button that appears when user scrolls down and smoothly returns to top.

### Step 1: Import the hook

```jsx
// App.jsx or in your main layout component
import useScrollToTop from '@/hooks/useScrollToTop';

function App() {
  const { isVisible, scrollToTop } = useScrollToTop(300); // 300px threshold

  return (
    <>
      <YourContent />
      
      {isVisible && (
        <button 
          className="scroll-top active"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          title="Back to top"
        />
      )}
    </>
  );
}
```

### Step 2: The button automatically:
- Appears when scrolled more than 300px down (configurable)
- Animates in with fade + slide up
- Animates out with fade + slide down
- Uses smooth scroll behavior
- Accessible with ARIA labels

### Customization

```javascript
// Change threshold (pixels before button appears)
const { isVisible, scrollToTop } = useScrollToTop(500);

// Change scroll behavior in hook
behavior: 'smooth' // or 'auto' for instant
```

---

## File Structure After Implementation

```
yale_new/frontend/src/
├── hooks/
│   ├── useCustomCursor.js       (NEW)
│   ├── useScrollToTop.js        (NEW)
│   └── ... existing hooks
├── styles/
│   ├── animations.css           (NEW - all animations)
│   ├── Blog.css
│   ├── Contact.css
│   └── ... existing styles
├── components/
│   ├── Button.jsx               (UPDATED with .educate-btn)
│   ├── FeatureCard.jsx          (UPDATED with animation)
│   ├── SocialIcons.jsx          (NEW or UPDATED)
│   └── ... existing components
├── App.css
├── App.jsx                       (UPDATED - import animations.css)
├── index.css
└── index.js
```

---

## Testing Checklist

### Visual Animations
- [ ] Link text turns cyan (#0aa6d7) on hover
- [ ] Button curve element slides from right to left on hover
- [ ] Feature card icon border becomes more opaque on hover
- [ ] Social icons change color on hover
- [ ] Scroll-to-top button fades in/out smoothly

### Functional Behavior
- [ ] All transitions are smooth (200-500ms)
- [ ] Custom cursor appears and follows mouse
- [ ] Custom cursor enlarges on interactive elements
- [ ] Scroll-to-top button appears after 300px scroll
- [ ] Clicking scroll-to-top smoothly returns to top

### Accessibility
- [ ] Animations respect `prefers-reduced-motion` setting
- [ ] All buttons have proper ARIA labels
- [ ] Keyboard navigation works correctly
- [ ] Color changes have sufficient contrast

### Responsiveness
- [ ] Buttons look good on mobile (smaller padding)
- [ ] Social icons stack properly on mobile
- [ ] Scroll-to-top button positioned correctly on mobile
- [ ] Custom cursor disabled on touch devices (optional)

### Browser Compatibility
- [ ] Works in Chrome/Edge (latest)
- [ ] Works in Firefox (latest)
- [ ] Works in Safari (latest)
- [ ] Works in mobile browsers

---

## Troubleshooting

### Custom Cursor not appearing
1. Check `console` for errors
2. Verify `useCustomCursor()` is called in App component
3. Verify `animations.css` is imported
4. Check if custom cursor CSS is loaded (DevTools > Styles)

### Animations not working
1. Clear browser cache (Ctrl+Shift+Delete)
2. Verify CSS file is imported
3. Check class names match exactly (case-sensitive)
4. Verify no CSS conflicts in other stylesheets

### Scroll-to-top button not appearing
1. Check `useScrollToTop` is imported and called
2. Verify threshold value (300px default)
3. Check if page content is tall enough to scroll
4. Verify button element is rendered in DOM

### Performance issues
1. Custom cursor has smooth tracking - may impact performance on low-end devices
2. Consider disabling custom cursor: `useCustomCursor(false)`
3. Reduce animation durations if needed
4. Check for conflicting animations in other CSS files

---

## Color Reference

| Element | Color | Hex |
|---------|-------|-----|
| Link hover | Cyan | #0aa6d7 |
| Button primary | Green | #2bac44 |
| Button secondary hover | Blue | #0070c0 |
| Icon fill | Dark | #2a322d |
| Background | Light | #fefcfb |
| Hover dark | Dark Gray | #1a1e1d |
| Cursor border | Cyan | #0aa6d7 |

---

## Additional Notes

- All animations follow the 200-500ms standard for quick feedback
- Color scheme uses Django's original colors for consistency
- Animations are hardware-accelerated for smooth performance
- Proper vendor prefixes are included in animations.css for older browsers
- Mobile/touch device support is built into hooks
- Accessibility (prefers-reduced-motion) is respected

For questions or issues, refer to the `ANIMATIONS_AND_HOVER_EFFECTS.md` document for detailed animation specifications.
