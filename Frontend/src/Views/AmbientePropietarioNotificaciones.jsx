import '../Styles/index.css';
// Import de main table
//import MainTable from '../Components/MainTable';
import PanelNotificaciones from '../Components/PanelNotificaciones';
import AmbientePropietarioBase from '../Components/AmbientePropietarioBase.jsx';

const AmbientePropietarioNotificaciones = () => (
  <AmbientePropietarioBase>
    <PanelNotificaciones />
  </AmbientePropietarioBase>
);

export default AmbientePropietarioNotificaciones;
