const classGenerator = (element, id) => {
  const thunder = [200, 201, 202, 210, 211, 212, 221, 230, 231, 232];
  const drizzle = [300, 301, 302, 310, 311, 312, 313, 314, 321];
  const ligthRain = [500, 501, 502, 503, 504];
  const freezRain = [511];
  const rain = [520, 521, 522, 531];
  const snow = [600, 601, 602, 611, 612, 613, 615, 616, 620, 621, 622];
  const mist = [701, 711, 721, 731, 741, 751, 761, 762, 771, 781];
  const clear = [800];
  const partialClouds = [801];
  const scatClouds = [802];
  const clouds = [803, 804];

  if (thunder.includes(id)) {
    element.classList.add('thumderstorm');
  }

  if (drizzle.includes(id)) {
    element.classList.add('rainsmall');
  }

  if (ligthRain.includes(id)) {
    element.classList.add('rainWsun');
  }

  if (freezRain.includes(id)) {
    element.classList.add('rainWsnow');
  }

  if (rain.includes(id)) {
    element.classList.add('rainyRain');
  }

  if (snow.includes(id)) {
    element.classList.add('snowing');
  }

  if (mist.includes(id)) {
    element.classList.add('misty');
  }
  if (clear.includes(id)) {
    element.classList.add('sunshine');
  }

  if (partialClouds.includes(id)) {
    element.classList.add('sunshineWclodus');
  }

  if (scatClouds.includes(id)) {
    element.classList.add('cloudspartial');
  }

  if (clouds.includes(id)) {
    element.classList.add('darkclouds');
  }
};

export { classGenerator as default };