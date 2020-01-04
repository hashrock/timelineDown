function timelineDown(el, str, frames, options) {
  var tl = new TimelineMax(options);
  var frameDuration =
    options && options.frameDuration ? options.frameDuration : 0.1;
  var time = 0;
  var totalTime = frameDuration * str.length;
  for (var i = 0; i < str.length; i++) {
    var ch = str[i];
    if (ch.match(/[0-9]/)) {
      var frameIndex = parseInt(ch, 10);
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
}
