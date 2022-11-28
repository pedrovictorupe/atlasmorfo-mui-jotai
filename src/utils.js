export const assignToAllProperties = (obj, value) => {
  let result = {};

  for (const key in Object.keys(obj)) {
    if (Object.hasOwnProperty.call(obj, key)) {
      result[key] = value;
    }
  }

  return result;
};
