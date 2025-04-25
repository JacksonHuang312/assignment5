import './Featured.css';
import sing2 from '../assets/sing2.jpg';
import pacificRim from '../assets/pacificrim.jpg';
import karateKid from '../assets/karatekid.jpg';

function Featured() {
  return (
    <>
      <h1 className="featured-text">Featured</h1>
      <div className="feature-section">
        <img src={pacificRim} alt="Pacific Rim" />
        <img src={sing2} alt="Sing 2" />
        <img src={karateKid} alt="Karate Kid" />
      </div>
    </>
  );
}

export default Featured;