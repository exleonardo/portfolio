import { useEffect, useMemo, useState } from 'react'

import { type Container, type ISourceOptions } from '@tsparticles/engine'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

export const Particle = () => {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async engine => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])
  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container)
  }
  const options: ISourceOptions = useMemo(
    () => ({
      detectRetina: true,
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: 'repulse',
            parallax: { enable: true, smooth: 200 },
          },
        },
        modes: {
          push: {
            quantity: 1,
          },
          repulse: {
            distance: 50,
            duration: 1,
          },
        },
      },
      particles: {
        color: {
          value: 'rgb(123,142,178)',
        },
        effect: { fill: true },
        links: {
          color: 'rgb(82,238,191)',
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: 'none',
          enable: false,
          outModes: {
            default: 'split',
          },
          random: true,
          speed: 500,
        },
        number: {
          density: {
            enable: true,
          },
          value: 200,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          fill: true,
          type: 'circle',
        },
        size: {
          value: { max: 5, min: 1 },
        },
      },
      smooth: true,
    }),
    []
  )

  if (init) {
    return (
      <Particles
        id={'tsparticles'}
        options={options}
        particlesLoaded={particlesLoaded}
        style={{ position: 'relative', zIndex: -1 }}
      />
    )
  }

  return <></>
}
