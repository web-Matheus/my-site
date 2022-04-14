import {Slide} from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import './index.scss'
import img1 from './img/imagem.png'
import img2 from './img/codingame.png'

const SlideShow = ()=>{
    const slideImages =[
       img1,
       img2
      ]

      const properties = {
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        arrows: true
      }
    
    return(
      <div className='cards'>
      <Slide {...properties}>
      <div className="each-slide">
        <div style={{'backgroundImage': `url(${slideImages[0]})`}} className="card-front">
          <div className='card-back'>
          <span>Slide 1</span>
          <p>esse paragrafo é para ter display none q quando o mouse hover o e elemento aparecer</p>
          </div>
        </div>
      </div>
      <div className="each-slide">
        <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
          <span>Slide 2</span>
          <p>esse paragrafo é para ter display none q quando o mouse hover o e elemento aparecer</p>
        </div>
      </div>
      <div className="each-slide">
        <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
          <span>Slide 3</span>
          <p>esse paragrafo é para ter display none q quando o mouse hover o e elemento aparecer</p>
        </div>
      </div>
    </Slide>
    </div>)
  }

  export default SlideShow;