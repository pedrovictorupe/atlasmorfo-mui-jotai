export const assignToAllProperties = (obj, value) => {
  let result = {};

  for (const key in Object.keys(obj)) {
    if (Object.hasOwnProperty.call(obj, key)) {
      result[key] = value;
    }
  }

  return result;
};

export const getTextStrokeStyle = (fontColor, strokeColor) => ({
  color: fontColor,
  textShadow: `-1px -1px 0 ${strokeColor}, 1px -1px 0 ${strokeColor}, -1px 1px 0 ${strokeColor}, 1px 1px 0 ${strokeColor}`,
  letterSpacing: "0.2em",
});
