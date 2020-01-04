import gsap from "gsap";

function addKeyframe(tl, el, time, frame) {
  tl.to(el, time, { ...frame });
}

export default function timelineDown(el, str, frames, options) {
  const tl = gsap.timeline(options);
  const frameDuration =
    options && options.frameDuration ? options.frameDuration : 0.1;
  let time = 0;
  var totalTime = frameDuration * str.length;
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (ch.match(/[0-9]/)) {
      const frameIndex = parseInt(ch, 10);
      addKeyframe(tl, el, time, frames[frameIndex]);
      totalTime -= time;
      time = 0;
    }
    time += frameDuration;
  }
  //Wait until timeline end
  addKeyframe(tl, el, totalTime, frames[str.length - 1]);

  return tl;
}
