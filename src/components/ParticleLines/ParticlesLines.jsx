import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import { useCallback } from 'react';
import particlesConfig from './particles-config';
const ParticlesLines = () => {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await container;
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={particlesConfig}
    />
  );
};

export default ParticlesLines; 
