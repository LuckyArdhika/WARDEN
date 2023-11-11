// add key to each obj
export function addKeyToNestedObjArr<T extends {}>(arr: T[], keys: any){
  return arr.map(x => {
    Object.assign(x, keys);

    Object.keys(x).forEach((key: string) => {
      if (Array.isArray(x[key as keyof T])){
        // @ts-ignore
        x[key] = addKeyToNestedObjArr(x[key as keyof T] as unknown as T[], keys);
      }
    });

    return x;
  });  
}

// add leveling for each object
export function addObjLevelFunction(arr: any[]) {
  // Recursive helper function
  function addObjectLevel(obj: any, level: number) {
    // Add the 'level' field to the current object
    obj.level = level;

    // Recursively handle nested objects or arrays
    for (const key in obj) {
      if (Array.isArray(obj)) {
        addObjectLevel(obj[key as any], level + 1);
      }
    }
  }

  // Iterate through each object in the array
  for (const obj of arr) {
    addObjectLevel(obj, 1);
  }

  return arr;
}