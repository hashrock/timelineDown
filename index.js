const TimelineMax = require("gsap").TimelineMax;

module.exports = function timelineDown(el, str, frames, options) {
  const tl = new TimelineMax(options);
  const frameDuration =
    options && options.frameDuration ? options.frameDuration : 0.1;
  const time = 0;
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (ch.match(/[0-9]/)) {
      const frameIndex = parseInt(ch, 10);
      tl.to(el, time, frames[frameIndex]);
      time = 0;
    }
    time += frameDuration;
  }
  return tl;
};
