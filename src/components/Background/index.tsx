import { Carousel } from 'react-responsive-carousel';

import landingImg from '../../assets/landing.png';

import { Container } from './styles';

export default function Background() {

  const slides = [
    {
      id: 1,
      title: 'Marcenas mattis egestas',
      paragraph: 'Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.',
    },
    {
      id: 2,
      title: '02-Marcenas mattis egestas',
      paragraph: 'Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.',
    },
    {
      id: 3,
      title: '03-Marcenas mattis egestas',
      paragraph: 'Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.',
    },
    {
      id: 4,
      title: '04-Marcenas mattis egestas',
      paragraph: 'Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.',
    }
  ]

  return (
    <Container>
      <Carousel
        className="carousel"
        autoPlay
        infiniteLoop
        interval={5000}
        showIndicators={true}
        showArrows={false}
        showThumbs={false}
        showStatus={false}
      >
        {slides.map(slide => (
          <div key={slide.id}>
            <img src={landingImg} alt="landing page" />
            <h1>{slide.title}</h1>
            <p>
              {slide.paragraph}
            </p>
          </div>
        ))}
         
      </Carousel>
    </Container>
  )
}