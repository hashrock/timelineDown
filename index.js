const TimelineMax = require("gsap").TimelineMax;

module.exports = function timelineDown(el, str, frames, options) {
  const tl = new TimelineMax(options);
  const frameDuration =
    options && options.frameDuration ? options.frameDuration : 0.1;
  let time = 0;
  var totalTime = frameDuration * str.length;
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (ch.match(/[0-9]/)) {
      const frameIndex = parseInt(ch, 10);
      tl.to(el, time, frames[frameIndex]);
      totalTime -= time;
      time = 0;
    }
    time += frameDuration;
  }
  //Wait until timeline end
  const last = { ...frames[str.length - 1] };
  tl.to(el, totalTime, last);

  return tl;
};
