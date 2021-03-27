import AmbientePropietarioBase from '../Components/AmbientePropietarioBase.jsx';
import Logo from '../Icons/grupoSanchezLogo.png';

//import '../Styles/LoginSignupCard.css';

const AmbientePropietario = () => (
  <AmbientePropietarioBase>
    <div
      style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <img src={Logo} alt="Logo" />
    </div>
  </AmbientePropietarioBase>
);

export default AmbientePropietario;
