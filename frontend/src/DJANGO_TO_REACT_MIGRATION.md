# Django to React: Animation Migration Guide

## For Django Developers Transitioning to React

This guide helps Django developers understand how animations in the Django version map to the React version.

---

## Quick Comparison: Django vs React

### Django Approach
```html
<!-- Django Template -->
<a href="/page">Link</a>
<button class="educate-btn">
  Button
  <span class="educate-btn__curve"></span>
</button>
```

**CSS (Django):**
```css
a {
  transition: all 0.5s ease;
}

a:hover {
  color: #0aa6d7;
}

.educate-btn:hover .educate-btn__curve {
  right: 0;
  width: 100%;
  transform: skewX(0deg);
}
```

### React Approach
```jsx
// React Component
<a href="/page">Link</a>
<button className="educate-btn">
  Button
  <span className="educate-btn__curve"></span>
</button>
```

**CSS (React - Identical!):**
```css
a {
  transition: all 0.5s ease;
}

a:hover {
  color: #0aa6d7;
}

.educate-btn:hover .educate-btn__curve {
  right: 0;
  width: 100%;
  transform: skewX(0deg);
}
```

**Key Difference:** CSS is exactly the same, HTML structure is almost identical!

---

## Animation Categories

### 1. Pure CSS Animations (No JavaScript Needed)

These work identically in Django and React:

#### Global Styles
```django
<!-- Django -->
<a href="#">Link</a>
```

```jsx
// React
<a href="#">Link</a>
```

**CSS (identical in both):**
```css
a:hover {
  color: #0aa6d7;
  transition: all 0.5s ease;
}
```

#### Button Animations
```django
<!-- Django -->
<button class="educate-btn">
  Click Me
  <span class="educate-btn__curve"></span>
</button>
```

```jsx
// React
<button className="educate-btn">
  Click Me
  <span className="educate-btn__curve"></span>
</button>
```

**CSS (identical):**
```css
.educate-btn:hover .educate-btn__curve {
  right: 0;
  width: 100%;
  transform: skewX(0deg);
}
```

### 2. JavaScript-Required Animations

These differ because React uses hooks instead of vanilla JavaScript:

#### Django Approach (Vanilla JS)
```javascript
// Django static/js/custom-cursor.js
document.addEventListener('mousemove', function(e) {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});
```

#### React Approach (Hook)
```javascript
// React hook
const useCustomCursor = (enabled = true) => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      if (cursorRef.current) {
        cursorRef.current.style.left = `${clientX}px`;
        cursorRef.current.style.top = `${clientY}px`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [enabled]);
};
```

**Key Differences:**
- Django: Global script files
- React: Reusable hooks
- Both: Same DOM manipulation
- React: Automatic cleanup (no memory leaks)

---

## Migration Checklist

### 1. Understanding Animation Structure

**Django CSS:**
```css
.educate-btn {
  transition: all ease 0.3s;  /* Animation timing */
}

.educate-btn:hover {
  color: #fefcfb;  /* Hover state */
}

.educate-btn:hover .educate-btn__curve {
  transform: skewX(0deg);  /* Animation effect */
}
```

**React CSS:**
Identical! No changes needed. Just copy the CSS.

### 2. HTML Structure Differences

**Django:**
```html
{% load static %}
<button class="educate-btn">
  Text
  <span class="educate-btn__curve"></span>
</button>
```

**React:**
```jsx
<button className="educate-btn">
  Text
  <span className="educate-btn__curve"></span>
</button>
```

**Changes:**
- `class` → `className`
- `{% load %}` → import statements
- Template tags → JSX

### 3. Importing CSS

**Django:**
```html
<!-- In base.html -->
<link rel="stylesheet" href="{% static 'css/app.css' %}">
```

**React:**
```javascript
// In App.jsx
import './styles/animations.css';
```

### 4. JavaScript/Hooks Mapping

**Django Custom Cursor:**
```javascript
// static/js/app.js
const cursor = document.querySelector('.custom-cursor__cursor');
document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});
```

**React Custom Cursor:**
```javascript
// hooks/useCustomCursor.js
const useCustomCursor = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);
};
```

---

## Concept Translation Table

| Django Concept | React Equivalent | Animation Type |
|---|---|---|
| Global CSS styles | `index.css` or imported CSS | Pure CSS |
| CSS classes | `className` prop | Pure CSS |
| Template filters | Component props | N/A |
| Static JS files | Custom hooks | JavaScript |
| Event listeners | `useEffect` hook | JavaScript |
| DOM manipulation | `useRef` hook | JavaScript |
| CSS transitions | `transition` property | Pure CSS |
| CSS animations | `@keyframes` rules | Pure CSS |

---

## Common Patterns

### Pattern 1: Hover Effects

**Django:**
```html
<a href="#" class="link">Link</a>
```

```css
a.link:hover {
  color: #0aa6d7;
  transition: all 0.5s ease;
}
```

**React:**
```jsx
<a href="#" className="link">Link</a>
```

```css
/* CSS identical */
a.link:hover {
  color: #0aa6d7;
  transition: all 0.5s ease;
}
```

### Pattern 2: Button with Sub-element Animation

**Django:**
```html
<button class="educate-btn">
  Click
  <span class="educate-btn__curve"></span>
</button>
```

```css
.educate-btn:hover .educate-btn__curve {
  transform: skewX(0deg);
}
```

**React:**
```jsx
<button className="educate-btn">
  Click
  <span className="educate-btn__curve"></span>
</button>
```

```css
/* CSS identical */
.educate-btn:hover .educate-btn__curve {
  transform: skewX(0deg);
}
```

### Pattern 3: Interactive Element with Tracking

**Django:**
```html
<div class="custom-cursor__cursor"></div>
<script>
  document.addEventListener('mousemove', (e) => {
    document.querySelector('.custom-cursor__cursor').style.left = e.clientX;
  });
</script>
```

**React:**
```javascript
// Hook
const useCustomCursor = () => {
  const cursorRef = useRef(null);
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
      }
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return cursorRef;
};

// Component
function App() {
  useCustomCursor();
  return <div className="custom-cursor__cursor"></div>;
}
```

---

## Animation Flow: Django to React

### Step 1: Identify Animation Type
```
Is it pure CSS (hover, transition)?
  ↓ YES → Copy CSS as-is
  ↓ NO → Check if it needs JavaScript
  
Does it need JavaScript?
  ↓ YES → Convert to React hook
  ↓ NO → Keep as CSS
```

### Step 2: Map Django CSS

**Django:**
```css
.educate-btn {
  transition: all ease 0.3s;
}

.educate-btn:hover {
  color: #fefcfb;
}
```

**React:**
```css
/* Copy exactly - no changes! */
.educate-btn {
  transition: all ease 0.3s;
}

.educate-btn:hover {
  color: #fefcfb;
}
```

### Step 3: Convert JavaScript (if needed)

**Django:**
```javascript
// Global script
document.addEventListener('mousemove', handleMouseMove);
```

**React:**
```javascript
// Hook
const useMouseMove = () => {
  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);
};
```

---

## React-Specific Considerations

### 1. Class Names
**Django:**
```html
<button class="educate-btn">Button</button>
```

**React:**
```jsx
<button className="educate-btn">Button</button>
```

**Remember:** `class` → `className` (JavaScript reserved word)

### 2. CSS in JS (Optional)

While not recommended for animations (use CSS files), you can use CSS-in-JS:

```jsx
const buttonStyles = {
  transition: 'all ease 0.3s',
  backgroundColor: '#2bac44',
  '&:hover': {
    backgroundColor: '#0070c0'
  }
};
```

**Best Practice:** Keep animations in CSS files, not in JavaScript.

### 3. Component Props

```jsx
// Reusable button component
<Button variant="primary" size="sm">Click Me</Button>

// Component handles classes
<button className={`educate-btn educate-btn-${variant} ${size}`}>
  Click Me
  <span className="educate-btn__curve"></span>
</button>
```

### 4. Hooks Lifecycle

**Effect Dependencies:**
```javascript
useEffect(() => {
  // Runs once on mount
  document.addEventListener('mousemove', handler);
  
  // Cleanup on unmount
  return () => {
    document.removeEventListener('mousemove', handler);
  };
}, []); // Empty dependency array = mount/unmount only
```

---

## Performance Comparison

| Aspect | Django | React |
|--------|--------|-------|
| CSS Animations | Native browser | Native browser |
| DOM Queries | Direct via JS | Via refs |
| Event Delegation | Manual | Automatic |
| Memory Cleanup | Manual | Automatic (hook cleanup) |
| Re-renders | N/A | Optimized (useCallback) |

**React Advantages:**
- Automatic memory management
- Cleaner code with hooks
- Better optimization opportunities

---

## Common Issues & Solutions

### Issue 1: Animation not working

**Django:**
```css
.element:hover {
  color: #0aa6d7;
}
```

**React:** Same CSS works!

**If not working:**
```jsx
// Check if class is applied
<element className="element">  ← className, not class
```

### Issue 2: Hook not initializing

**Problem:**
```jsx
// Forgot to call hook
function App() {
  return <div>...</div>;
}
```

**Solution:**
```jsx
// Call hook in component
function App() {
  useCustomCursor();  ← Add this
  return <div>...</div>;
}
```

### Issue 3: Memory leak warning

**Problem:**
```javascript
useEffect(() => {
  document.addEventListener('mousemove', handler);
  // Missing cleanup!
}, []);
```

**Solution:**
```javascript
useEffect(() => {
  document.addEventListener('mousemove', handler);
  return () => {
    document.removeEventListener('mousemove', handler);  ← Cleanup
  };
}, []);
```

---

## Migration Workflow

### Phase 1: Assessment
- [ ] Identify all animations in Django
- [ ] Categorize as CSS or JavaScript
- [ ] List color values and timings

### Phase 2: Preparation
- [ ] Export CSS from Django
- [ ] Organize CSS by component
- [ ] Create React hook structure

### Phase 3: Implementation
- [ ] Copy CSS files
- [ ] Update class → className
- [ ] Convert JS to hooks
- [ ] Test in React

### Phase 4: Optimization
- [ ] Remove unused CSS
- [ ] Optimize hook performance
- [ ] Add React components wrapper
- [ ] Document for team

### Phase 5: Testing
- [ ] Test all animations in React
- [ ] Compare with Django visually
- [ ] Test on mobile devices
- [ ] Performance check

---

## Code Examples

### Example 1: Simple Hover Animation

**Django:**
```html
<a href="/about" class="link">About Us</a>
```

**React:**
```jsx
<a href="/about" className="link">About Us</a>
```

**CSS (Identical):**
```css
.link {
  transition: all 0.5s ease;
}

.link:hover {
  color: #0aa6d7;
}
```

### Example 2: Button with Curve Animation

**Django:**
```html
<button class="educate-btn">
  Get Started
  <span class="educate-btn__curve"></span>
</button>
```

**React:**
```jsx
<button className="educate-btn">
  Get Started
  <span className="educate-btn__curve"></span>
</button>
```

**CSS (Identical):**
```css
.educate-btn {
  transition: all ease 0.3s;
  overflow: hidden;
  position: relative;
}

.educate-btn__curve {
  position: absolute;
  right: -15px;
  transform: skewX(-22deg);
  transition: all 0.5s ease;
}

.educate-btn:hover .educate-btn__curve {
  right: 0;
  width: 100%;
  transform: skewX(0deg);
}
```

### Example 3: Custom Cursor

**Django:**
```html
<div class="custom-cursor__cursor"></div>
<script src="{% static 'js/custom-cursor.js' %}"></script>
```

```javascript
// static/js/custom-cursor.js
document.addEventListener('mousemove', (e) => {
  const cursor = document.querySelector('.custom-cursor__cursor');
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});
```

**React:**
```jsx
// App.jsx
import useCustomCursor from '@/hooks/useCustomCursor';

function App() {
  useCustomCursor();
  return <div>Your app</div>;
}
```

```javascript
// hooks/useCustomCursor.js
const useCustomCursor = () => {
  const cursorRef = useRef(null);
  
  useEffect(() => {
    if (!cursorRef.current) {
      const cursor = document.createElement('div');
      cursor.className = 'custom-cursor__cursor';
      document.body.appendChild(cursor);
      cursorRef.current = cursor;
    }
    
    const handleMouseMove = (e) => {
      cursorRef.current.style.left = e.clientX + 'px';
      cursorRef.current.style.top = e.clientY + 'px';
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);
};
```

---

## Key Takeaways

1. **CSS is identical** - Copy Django CSS directly to React
2. **HTML structure is similar** - Just change `class` → `className`
3. **JavaScript becomes hooks** - More organized and cleaner
4. **Automatic cleanup** - React hooks handle event listener cleanup
5. **Better component reusability** - Hooks can be shared across components

---

## Resources

- **React Hooks Documentation:** https://react.dev/reference/react
- **CSS Transitions & Animations:** https://developer.mozilla.org/en-US/docs/Web/CSS
- **useEffect Hook:** https://react.dev/reference/react/useEffect
- **useRef Hook:** https://react.dev/reference/react/useRef

---

## Next Steps

1. Review the provided `styles/animations.css`
2. Understand the hook implementations
3. Copy files to your React project
4. Apply the classes to your components
5. Test thoroughly
6. Share knowledge with team

---

**Remember:** React animations follow the same principles as Django - just more organized! 🎉
