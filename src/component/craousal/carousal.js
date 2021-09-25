import cover1 from '../../assest/cover1.jpg'
import cover2 from '../../assest/cover2.jpg'
import cover3 from '../../assest/cover3.jpg'
import './css/craousal.css'
function Craousal(){
    return(<>

<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">

        <div className="carousel-inner">
        
          <div className="carousel-item  active">
            <img src={cover1} className="cover " alt="..." />
            <div className="intro">
              <h1 className="name">Hellow my name is Umair</h1>
              and i am mernStack developer
            </div>
          </div>
          
          <div className="carousel-item">
            <img src={cover2} className="cover" alt="..." />
            <div className="intro">
              <h1 className="name">Hellow my name is Umair</h1>
              and i am mernStack developer
            </div>
          </div>
          <div className="carousel-item">
            <img src={cover3} className="cover " alt="..." />
            <div className="intro">
              <h1 className="name">Hellow my name is Umair</h1>
              and i am mernStack developer
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>






    </>);
}
export default Craousal;