import './index.scss'
import img1 from './img/imagem.png'
import img2 from './img/codingame.png'



const SlideShow = ()=>{

    return(
      <div className='body'>
           <div class="card">
            <img src={img1} alt="Avatar"/>
            <div className='container'>
              <h4><b>Caderno de anotações</b></h4> 
              <p>Uma aplicação fullstack com NODE e REACT </p> 
            </div>
          </div> 
        </div>
    )
  }

  export default SlideShow;