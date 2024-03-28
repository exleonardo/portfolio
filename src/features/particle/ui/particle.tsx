import { useParticle } from '@/features/particle'
import Particles from '@tsparticles/react'

export const Particle = () => {
  const { init, options, particlesLoaded } = useParticle()

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
