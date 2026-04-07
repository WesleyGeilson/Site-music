import { useState, useRef } from 'react' // 1. Adicionado o useRef
import './style.css'

function home() {
  const [count, setCount] = useState(0)
  
  // 2. Criada a referência para o elemento
  const contentRef = useRef(null) 

  // 3. Função fundamental para calcular a rotação 3D baseada no mouse
  const handleMouseMove = (e) => {
    const el = contentRef.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    // O valor '15' define o limite do ângulo de inclinação (ajuste se quiser mais forte)
    const rotateX = ((y - centerY) / centerY) * -15 
    const rotateY = ((x - centerX) / centerX) * 15

    // Aplica o scale(1.05) que você já tinha + a rotação 3D com perspectiva
    el.style.transform = `perspective(1000px) scale(1.05) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }

  // 4. Função fundamental para voltar ao normal quando o mouse sair
  const handleMouseLeave = () => {
    const el = contentRef.current
    if (el) {
      el.style.transform = `perspective(1000px) scale(1) rotateX(0deg) rotateY(0deg)`
    }
  }

  return (
    <>
      {/* ==================PARTE QUE FICA EM CIMA DO SITE - HOME, MUSICAS, PLAYLIST, GITHUB====================================================================== */}
      <header>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Musicas</a></li>
            <li><a href="#">Playlists</a></li>
            <li><a href="#">GitHub</a></li>
          </ul>
        </nav>
      </header>

      {/* ========================================================================================== */}

      <div className="mastercontent">
        {/* 5. Adicionada a ref e os eventos do mouse SOMENTE AQUI */}
        <content 
          ref={contentRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <img src="src\assets\bacoexubluesman.webp" alt="Capa da Música" className="capa_music" /> 
          <div className="title_music">
            <h1>Girassóis de van gogh</h1>
          </div>
          {/* Aqui provalmente aparecerá o player de áudio que terá controles de reprodução */}
        </content>
      </div>


      {/* ========================================================================================== */}
      <div className='masterlyrics'>
        <div className='lyrics'><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae ex praesentium optio, dolore atque voluptatum quod ratione consequatur sed architecto sit asperiores laudantium magni maxime, dicta minima ipsa nam expedita.</p></div>
      </div>

      <div className="mastercontrols">
        <div className="controls">
          <button className='prev'>
            <img src="src\assets\setas.png" alt="prev" className="prev" />
          </button>

          <button className='next'>
            <img src="src\assets\setas.png" alt="next" className="next" />
          </button>
        </div>
      </div>

    </>
  )
}

export default home