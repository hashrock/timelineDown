function attachTimeline(document) {
  function parseDataAttrs(keyframe) {
    const raw = keyframe.split(",").map(i => i.split(":"));
    const pair = raw.reduce((result, current) => {
      result[current[0].trim()] = JSON.parse(
        current[1].trim().replace(/'/g, '"')
      );
      return result;
    }, {});
    return pair;
  }

  const els = document.querySelectorAll("*[data-timeline]");
  for (let el of els) {
    const timeline = el.dataset.timeline;
    const keyframes = [];
    for (let i = 0; i < 10; i++) {
      const keyframe = el.dataset["keyframe-" + i];
      if (keyframe === undefined) {
        break;
      }
      keyframes.push(parseDataAttrs(keyframe));
    }
    const options = el.dataset["timelineOptions"];
    const optionsObj = options ? parseDataAttrs(options) : {};
    timelineDown(el, timeline, keyframes, optionsObj);
  }
}

attachTimeline(document);
