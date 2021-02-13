import '../Styles/index.css';
// Import de main table
import MainTable from '../Components/MainTable';
//import MainTable from '../Components/PanelNotificaciones';
import AmbientePropietarioBase from '../Components/AmbientePropietarioBase.jsx';

const AmbientePropietarioClientes = () => (
  <AmbientePropietarioBase>
    <MainTable />
  </AmbientePropietarioBase>
);

export default AmbientePropietarioClientes;
