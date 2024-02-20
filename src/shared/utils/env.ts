export function env(key: string): string {
  const environmentVariableValue = process.env[key]
  if (environmentVariableValue === undefined) throw new Error(`ENV variable load error: ${key}`)
  
  return environmentVariableValue
}
