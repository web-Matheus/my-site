import './index.scss'
import img1 from './img/imagem.png'




const SlideShow = ()=>{
    
    return(
      <div className='body'>
           <div class="card">
            <img src={img1} alt="Avatar"/>
            <div className='container'>
              <h4><b>Projetos em desenvolvimento</b></h4> 
              <p>Você pode verificar alguns dos meus projetos no github, lá você tem acesso ao código fonte como tambem no read.Md haverá um link para ver o projeto funcionando</p> 
              <a href='https://github.com/web-Matheus?tab=repositories'>Ver código</a>
            </div>
        </div>
        </div>
    )
  }

  export default SlideShow;