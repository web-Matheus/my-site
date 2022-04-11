import {Zoom} from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import img1 from './img/imagem.png'

const SlideShow = ()=>{
    const Images =[
       img1
      ]
    
    return(
        <div className="slide-container">
        <Zoom scale={0.4}>
          {
            Images.map((each, index) => <img key={index} style={{width: "50%"}} src={each} alt={index}/>)
          }
        </Zoom>
      </div> )
  }

  export default SlideShow;