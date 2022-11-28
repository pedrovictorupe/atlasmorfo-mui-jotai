export const stringifyMap = (map: Map<any, any>) =>
  JSON.stringify(Array.from(map.entries()));

export const parseMap = (map: string) => new Map(JSON.parse(map ? map : "{}"));

//   export const mergeMaps = (map1: Map<any, any>, map2: Map<any, any>) => new Map([...map1, ])
