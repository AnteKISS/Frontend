// export function castToType<T>(value: any, type: { new(): T }): T | null {
//   if (value === null || value === undefined) {
//     return null;
//   }
//   if (value instanceof type) {
//     return value as T;
//   } else {
//     return null;
//   }
// }

// export function castToType<T>(value: any): T | null {
//   if (value === null || value === undefined) {
//     return null;
//   }
//   const typedValue = value as unknown as T;
//   return typedValue;
// }

export function castToType<T extends object>(value: any): T | null {
  if (value === null || value === undefined) {
    return null;
  }

  const typedValue = value as T;

  // Check if the structure of the object matches the interface type
  const keys = Object.keys(typedValue as {}) as (keyof T)[];
  const isValid = keys.every(key => key in typedValue);

  return isValid ? typedValue : null;
}

// export function castToType<T>(obj: any, type: { new(): T }): T | null {
//   if (obj === null || obj === undefined) {
//     return null;
//   }
//   if (obj instanceof type) {
//     return obj as T;
//   } else {
//     return null;
//   }
// }

// export function castToType<T>(value: any, type: new () => T): T | null {
//   if (value === null || value === undefined) {
//     return null;
//   }
//   if (value instanceof type) {
//     return value as T;
//   } else {
//     return null;
//   }
// }