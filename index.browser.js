function timelineDown(el, str, frames, options) {
  var tl = new TimelineMax(options);
  var frameDuration =
    options && options.frameDuration ? options.frameDuration : 0.1;
  var time = 0;
  for (var i = 0; i < str.length; i++) {
    var ch = str[i];
    if (ch.match(/[0-9]/)) {
      var frameIndex = parseInt(ch, 10);
      tl.to(el, time, frames[frameIndex]);
      time = 0;
    }
    time += frameDuration;
  }
  return tl;
}
