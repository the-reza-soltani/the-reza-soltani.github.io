import type { ISourceOptions } from '@tsparticles/engine'
import Particles, { ParticlesProvider } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { useMemo } from 'react'

const PARTICLE_OPTIONS: ISourceOptions = {
  background: {
    color: {
      value: 'transparent',
    },
  },
  fullScreen: {
    enable: false,
    zIndex: 0,
  },
  fpsLimit: 60,
  detectRetina: true,
  smooth: true,
  interactivity: {
    detectsOn: 'window',
    events: {
      onHover: {
        enable: false,
      },
      onClick: {
        enable: false,
      },
      resize: {
        enable: true,
      },
    },
  },
  particles: {
    number: {
      value: 58,
      density: {
        enable: true,
        width: 1100,
        height: 900,
      },
    },
    color: {
      value: ['#22c55e', '#4ade80', '#16a34a'],
    },
    shape: {
      type: 'circle',
    },
    opacity: {
      value: { min: 0.28, max: 0.5 },
      animation: {
        enable: true,
        speed: 0.35,
        sync: false,
      },
    },
    size: {
      value: { min: 1, max: 2.2 },
    },
    links: {
      enable: true,
      distance: 130,
      color: '#22c55e',
      opacity: 0.22,
      width: 0.6,
      triangles: {
        enable: false,
      },
    },
    move: {
      enable: true,
      speed: { min: 0.15, max: 0.35 },
      direction: 'none',
      random: false,
      straight: false,
      outModes: {
        default: 'bounce',
      },
    },
  },
}

function AmbientLayers() {
  return (
    <>
      <div className="infra-noise" />
      <div className="infra-mesh" />
      <div className="infra-dot-grid" />
      <div className="infra-vignette" />
    </>
  )
}

function NeuralParticles() {
  const options = useMemo(() => PARTICLE_OPTIONS, [])

  return (
    <Particles id="neural-particles" className="infra-particles-canvas" options={options} />
  )
}

export function InfrastructureBackground() {
  return (
    <div className="infra-bg" aria-hidden>
      <AmbientLayers />
      <ParticlesProvider init={loadSlim}>
        <NeuralParticles />
      </ParticlesProvider>
    </div>
  )
}
