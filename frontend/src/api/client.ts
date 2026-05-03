/**
 * API client placeholder for MView. FE-001 does not call the real backend.
 * Future: central fetch wrapper, auth headers, 401 handling.
 */
export const API_BASE = '/api'

export function createApiUrl(path: string): string {
  const p = path.startsWith('/') ? path : `/${path}`
  return `${API_BASE}${p}`
}
