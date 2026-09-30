import type { SVGProps } from 'react'

type P = SVGProps<SVGSVGElement>

export const IconeWhatsapp = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.98L2 22l5.2-1.36A9.9 9.9 0 1 0 12.04 2Zm0 1.8a8.1 8.1 0 1 1-4.3 14.96l-.3-.18-3.08.8.82-3-.2-.32A8.1 8.1 0 0 1 12.04 3.8Zm-3.2 3.9c-.2 0-.5.07-.76.35-.25.28-1 1-1 2.4s1.02 2.8 1.16 3c.15.2 2 3.17 4.9 4.3 2.4.95 2.9.76 3.42.7.52-.05 1.68-.68 1.92-1.35.23-.66.23-1.23.16-1.35-.07-.12-.26-.2-.55-.33-.28-.15-1.68-.83-1.94-.92-.26-.1-.45-.14-.64.14-.19.29-.73.92-.9 1.1-.16.2-.33.22-.6.08a7.5 7.5 0 0 1-2.2-1.36 8.3 8.3 0 0 1-1.53-1.9c-.16-.28 0-.43.12-.57l.42-.5c.14-.16.19-.28.28-.47.1-.2.05-.35-.02-.5-.07-.14-.64-1.55-.88-2.12-.23-.55-.47-.48-.64-.49h-.55Z" />
  </svg>
)

export const IconeInstagram = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
  </svg>
)

export const IconeSeta = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export const IconeBrilho = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M12 2c.6 4.7 2.3 6.4 7 7-4.700.6-6.400 2.300-7 7-.6-4.700-2.300-6.400-7-7 4.700-.6 6.400-2.300 7-7Zm7 12c.3 2.200 1.100 3 3 3.300-1.900.3-2.700 1.100-3 3.300-.3-2.200-1.100-3-3-3.300 1.900-.3 2.700-1.100 3-3.300Z" />
  </svg>
)

/** Coração do monograma (centrado na origem, ~22px de largura). */
export const CORACAO = 'M0 9C-11 0 -12 -8 -6 -11C-3 -12.400 0 -10.500 0 -7.500C0 -10.500 3 -12.400 6 -11C12 -8 11 0 0 9Z'
