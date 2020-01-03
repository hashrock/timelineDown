# TimelineDown

A funny wrapper for `gsap/TimelineMax`

# Usage

```
<script src="//cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js"></script>
<script src="https://unpkg.com/@hashrock/timelinedown@1.0.0/index.js"></script>
```

# Example

```
const str = "------------0----1--2";
const frames = [
  { x: 200 },
  { y: 200, ease: Bounce.easeOut },
  { opacity: 0 }
];

const tl = timelineDown("#obj", str, frames, {
  repeat: 99,
  frameDuration: 0.1
});
```
