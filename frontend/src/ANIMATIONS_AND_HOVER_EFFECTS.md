# Missing Animations and Hover Effects - React vs Django

## Overview
This document lists all animations, transitions, and hover effects present in the Django version that are missing from the React version.

---

## 1. GLOBAL ANIMATIONS & TRANSITIONS

### 1.1 Link Animations
**Django:**
```css
a {
  display: inline-block;
  text-decoration: none;
  color: unset;
  transition: all 0.5s ease;
}
a:hover {
  color: #0aa6d7;  /* Cyan/Light Blue */
  transition: all 0.5s ease;
}
```
**React Status:** ❌ MISSING
**Implementation:** Add to `index.css`

### 1.2 Custom Cursor
**Django:**
```css
.custom-cursor__cursor {
  width: 25px;
  height: 25px;
  border-radius: 100%;
  border: 1px solid #0aa6d7;
  transition: all 200ms ease-out;
  position: fixed;
  pointer-events: none;
  /* animated to follow mouse */
}

.custom-cursor__hover {
  width: 30px;
  height: 30px;
  /* animates on hover */
}

.custom-cursor__innerhover {
  width: 8px;
  height: 8px;
  /* inner cursor animation */
}
```
**React Status:** ❌ MISSING
**Note:** Requires JavaScript to track mouse position

---

## 2. BUTTON ANIMATIONS

### 2.1 Main Button (.educate-btn)
**Django:**
```css
.educate-btn {
  background-color: #2bac44;  /* Green */
  color: #fefcfb;             /* Off-white */
  transition: all ease 0.3s;
  overflow: hidden;
  position: relative;
}

.educate-btn .educate-btn__curve {
  position: absolute;
  right: -15px;
  top: 0;
  width: 33px;
  height: 100%;
  background: #F6F5F5;
  opacity: 0.2;
  z-index: 0;
  transform: skewX(-22deg);
  transition: all 0.5s ease;
}

.educate-btn:hover {
  color: #fefcfb;
}

.educate-btn:hover .educate-btn__curve {
  right: 0;
  width: 100%;
  transform: skewX(0deg);  /* Skewed curve animates to straight */
}
```
**React Status:** ❌ MISSING
**Animation Effect:** Skewed background element slides from right to left on hover
**Variant 1 - Secondary Button (.educate-btn.sec):**
- Hover: Background changes from #2bac44 to #0070c0, border changes to #0aa6d7

**Variant 2 - Secondary Button 2 (.educate-btn.sec-2):**
- Hover: Background changes from transparent to #0aa6d7, text color changes to #fefcfb

---

## 3. CARD ANIMATIONS

### 3.1 Feature Card Animation
**Django:**
```css
.feature__card .feature__icon {
  transition: all 0.5s ease;
  border: 5px solid rgba(10, 166, 215, 0.2);
}

.feature__card:hover .feature__icon {
  border: 5px solid rgba(10, 166, 215, 0.4);  /* Border becomes more opaque */
  transition: all 0.5s ease;
}
```
**React Status:** ❌ MISSING
**Animation Effect:** Icon border opacity increases on card hover

### 3.2 Social Icons List
**Django:**
```css
.social_icons_list li a {
  padding: 9px;
  background: #0aa6d7;  /* Cyan */
  border-radius: 10px;
  transition: all 0.5s ease;
}

.social_icons_list li:hover a {
  background: #1a1e1d;  /* Dark color */
}

.social_icons_list_2 li a {
  background: #fefcfb;
  transition: all 0.5s ease;
  border-radius: 50%;
}

.social_icons_list_2 li a svg path {
  fill: #2a322d;
  transition: all 0.5s ease;
}

.social_icons_list_2 li a:hover {
  background: #0aa6d7;
  transition: all 0.5s ease;
}

.social_icons_list_2 li a:hover svg path {
  fill: #fefcfb;
  transition: all 0.5s ease;
}
```
**React Status:** ❌ MISSING
**Animation Effects:** 
- Background color transition on hover (0.5s)
- Icon fill color transition on hover (0.5s)

---

## 4. SCROLL ANIMATIONS

### 4.1 Scroll-to-Top Button
**Django:**
```css
.scroll-top {
  position: fixed;
  right: 30px;
  bottom: 30px;
  transition: all 200ms linear;
  opacity: 0;
  visibility: hidden;
  transform: translateY(15px);
}

.scroll-top::after {
  /* arrow animation */
}
```
**React Status:** ❌ MISSING
**Animation Effect:** Fade in and slide up when visible, fade out and slide down when hidden

---

## 5. KEYFRAME ANIMATIONS

### 5.1 Page Flip Animations (Pages 0-18)
**Django:** 18 different page flip keyframe animations
```css
@keyframes page-0 { /* ... */ }
@keyframes page-1 { /* ... */ }
/* ... etc */
@keyframes page-18 { /* ... */ }
```
**React Status:** ❌ MISSING
**Note:** These appear to be for an interactive book/page flip effect

### 5.2 Book Rotation Animation
**Django:**
```css
@keyframes book {
  4% { transform: rotateZ(-90deg); }
  10%, 40% { transform: rotateZ(0deg); transform-origin: 2px 2px; }
  40.01%, 59.99% { transform-origin: 30px 2px; }
  46%, 54% { transform: rotateZ(90deg); }
  60%, 90% { transform: rotateZ(0deg); transform-origin: 2px 2px; }
  96% { transform: rotateZ(-90deg); }
}
```
**React Status:** ❌ MISSING
**Animation Duration:** 6.8s infinite

### 5.3 Left Rotation Animation
**Django:**
```css
@keyframes left {
  4%, 46%, 96% { transform: rotateZ(90deg); }
  10%, 40%, 60%, 90% { transform: rotateZ(0deg); }
  54% { transform: rotateZ(90deg); }
}
```
**React Status:** ❌ MISSING
**Animation Duration:** 6.8s infinite

### 5.4 Right Rotation Animation
**Django:**
```css
@keyframes right {
  4%, 46%, 96% { transform: rotateZ(-90deg); }
  10%, 40%, 60%, 90% { transform: rotateZ(0deg); }
  54% { transform: rotateZ(-90deg); }
}
```
**React Status:** ❌ MISSING
**Animation Duration:** 6.8s infinite

---

## 6. TRANSITION DURATIONS & EASING SUMMARY

| Animation Type | Duration | Easing |
|---|---|---|
| Link hover | 0.5s | ease |
| Button hover | 0.3s | ease |
| Curve animation (button) | 0.5s | ease |
| Card hover | 0.5s | ease |
| Social icon hover | 0.5s | ease |
| Custom cursor | 200ms | ease-out |
| Scroll top | 200ms | linear |
| Book/Page animations | 6.8s | ease infinite |

---

## 7. COLOR SCHEME FOR ANIMATIONS

### Hover Colors
- **Cyan/Light Blue:** #0aa6d7
- **Dark Text:** #1a1e1d, #2a322d
- **Green (Primary):** #2bac44
- **Blue (Secondary):** #0070c0
- **Light Background:** #fefcfb

---

## Implementation Priority

### High Priority
1. ✅ Link hover color change (#0aa6d7)
2. ✅ Button .educate-btn with curve animation
3. ✅ Social icons hover animations
4. ✅ Card icon border animation

### Medium Priority
5. ⚠️ Custom cursor (requires mouse tracking)
6. ⚠️ Scroll-to-top button fade animation

### Lower Priority (Special Effects)
7. ⏸️ Page flip keyframes (book animations)
8. ⏸️ Book/left/right rotation animations (6.8s loops)

---

## Notes
- All transitions use cubic-bezier or standard easing functions
- Multiple vendor prefixes (-webkit-, -moz-, -ms-, -o-) are used in Django for broader compatibility
- React version should simplify to modern standards (no prefixes needed for modern browsers)
- Animation durations are consistently fast (200ms-500ms) except for special effects (6.8s)
