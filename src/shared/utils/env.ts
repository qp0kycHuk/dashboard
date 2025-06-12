export enum EnvKey {
  API_ROOT_URL = "VITE_API_ROOT_URL",
}

export function env(name: EnvKey) {
  return import.meta.env[name]
}
