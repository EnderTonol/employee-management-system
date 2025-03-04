import DecryptedText from './ReactBits/DecryptedText/DecryptedText';
import Particles from './ReactBits/Particles/Particles';
import logo from "./assets/images/lambo.svg";
import TiltedCard from './ReactBits/TiltedCard/TiltedCard';
import SpotlightCard from './ReactBits/SpotlightCard/SpotlightCard';
import './App.css';


function App(){


  return(
    <>  
<header className='flex items-center justify-center h-8 font-sans font-bold bg-slate-950'>
  <DecryptedText text="Re-Imagine Lambo" 
  animateOn="view"
  revealDirection="right" 
  className='text-white Akira tracking-widest' />
</header>
<div className='flex items-center justify-center h-[100vh] bg-slate-950'>
  <Particles
  particleColors={['#ffffff', '#ffffff']}
  particleCount={200}
  particleSpread={10}
  speed={0.1}
  particleBaseSize={50}
  
  alphaParticles={false}
  disableRotation={false}
  >
  </Particles>
<div className='absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-4v h-4v flex flex-col items-center justify-center'>
<TiltedCard
  imageSrc={logo}
  altText="ReImagine Lambo"
  captionText="ReImagine Lambo"
  containerHeight="300px"
  containerWidth="300px"
  imageHeight="300px"
  imageWidth="300px"
  rotateAmplitude={12}
  scaleOnHover={1.05}
  showMobileWarning={false}
  showTooltip={true}
  displayOverlayContent={true}
/>
<p className='Akira text-6xl text-white '>Lamborghini</p>
{/* <SpotlightCard spotlightColor='#3c096c'>
  <p className='text-white'>We Are Dreams but, We Are Also Reality!</p>
</SpotlightCard> */}
</div>

</div>
    </>
  )
}

export default App;