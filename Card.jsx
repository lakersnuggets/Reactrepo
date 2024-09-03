import profilePic from './assets/photopass.jpg' 

function Card() {

return(
    <div className="card">
      <img className="card-image" src={profilePic} alt="profile picture"></img>
      <h2 className='card-title'>Sourabh Vishwakarma</h2>
      <p className='card-text'>I work as a software engineer and, I Love to play Basketball.</p>

    </div>
  );

}
export default Card 