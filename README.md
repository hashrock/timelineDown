# TimelineDown

A funny wrapper for `gsap/TimelineMax`

[![npm version](https://badge.fury.io/js/%40hashrock%2Ftimelinedown.svg)](https://badge.fury.io/js/%40hashrock%2Ftimelinedown)


![timelinedown](https://user-images.githubusercontent.com/3132889/71725657-20d4ed80-2e78-11ea-9905-4df8c23fd2fd.gif)


# Usage

## From CDN

```
<script src="//cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js"></script>
<script src="https://unpkg.com/@hashrock/timelinedown@1.0.2/index.js"></script>

<script>
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
</script>

```

## From npm

```
import timelineDown from "@hashrock/timelinedown";
import { Bounce } from "gsap";

const str = "------------0----1--2";
const frames = [
  { x: 200 },
  { y: 200, ease: Bounce.easeOut },
  { opacity: 0 }
];

timelineDown("#obj", str, frames, {
  repeat: 99,
  frameDuration: 0.1
});
```
