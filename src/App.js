import "bootstrap/dist/css/bootstrap.min.css";
import Profile from './Components/Profile';
import './App.css';
function App() {
  const myProfile = [
    {
      id: "0",
      myName: "Sara",
      Proffesion: "Webmaster",
      Bio: "developpeur web au sein de grand cabinet de communication",
      img: "https://img.freepik.com/vecteurs-premium/belle-fille-aux-cheveux-bleus-avatar-femme-pour-reseau-social_499739-618.jpg?w=2000",
    },];

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'}}>

      {myProfile.map((pp) => (
      <Profile name={pp.myName} profession={pp.Proffesion} bio={pp.Bio} image={pp.img}/>
      ))}
    </div>
    
  );
}

export default App;
