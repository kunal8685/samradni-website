import React from 'react'

const base = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' }
export const ArrowUpRight = ({ size = 20 }) => <svg {...base} width={size} height={size}><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
export const ArrowRight = ({ size = 20 }) => <svg {...base} width={size} height={size}><path d="M5 12h13"/><path d="m13 6 6 6-6 6"/></svg>
export const Menu = ({ size = 22 }) => <svg {...base} width={size} height={size}><path d="M4 7h16M4 12h16M4 17h16"/></svg>
export const Close = ({ size = 22 }) => <svg {...base} width={size} height={size}><path d="m6 6 12 12M18 6 6 18"/></svg>
export const Instagram = ({ size = 20 }) => <svg {...base} width={size} height={size}><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/></svg>
export const Mail = ({ size = 20 }) => <svg {...base} width={size} height={size}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
export const Phone = ({ size = 20 }) => <svg {...base} width={size} height={size}><path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3.1 5.2 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.7l.4 2.5a2 2 0 0 1-.6 1.7L8.5 10.2a16 16 0 0 0 5.3 5.3l1.3-1.3a2 2 0 0 1 1.7-.6l2.5.4a2 2 0 0 1 1.7 1.9Z"/></svg>
