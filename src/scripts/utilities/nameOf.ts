export function nameOf<T extends {name:S}, S extends string>(funcOrClass: T): S {
  return funcOrClass.name;
}