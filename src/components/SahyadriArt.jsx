import React from 'react'

export default function SahyadriArt({ variant = 'hero' }) {
  if (variant === 'fort') return <div className="fort-art" aria-hidden="true"><div className="fort-moon"/><div className="fort-silhouette"><span/><span/><span/><span/><span/></div><div className="mountain m1"/><div className="mountain m2"/><div className="mountain m3"/></div>
  return <div className="sahyadri-art" aria-hidden="true"><div className="sun-haze"/><div className="ridge ridge-back"/><div className="ridge ridge-mid"/><div className="ridge ridge-front"/><div className="fort-tower"><i/><i/><i/></div><div className="mist mist-one"/><div className="mist mist-two"/></div>
}
