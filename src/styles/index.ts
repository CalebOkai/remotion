const hexToRgb = (hex: string) => {
  let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  } : null;
}
export const functions = {
  rgba: (hex: string, alpha: number) => {
    const color = hexToRgb(hex);
    if (color)
      return `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
  },
  randomColor: () => {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  },
  colorLuminance: (hex: any, lum: number) => {
    // validate hex string
    hex = String(hex).replace(/[^0-9a-f]/gi, "");
    if (hex.length < 6) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    lum = lum || 0;

    // convert to decimal and change luminosity
    let rgb = "#", c, i;
    for (i = 0; i < 3; i++) {
      c = parseInt(hex.substr(i * 2, 2), 16);
      c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
      rgb += ("00" + c).substr(c.length);
    }
    return rgb;
  }
}

export const colors = {
  primary: "#061aff",
  secondary: "#8b6a03",
  white: "#fff",
  black: "#000",
}


export const snippets = {
  // Position Absolute Centering
  absoluteCenter: `
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  `,
  // Position Absolute Fill
  absoluteFill: `
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  `,
}
