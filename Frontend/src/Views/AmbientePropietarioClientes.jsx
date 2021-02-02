import '../Styles/index.css';

// Import de main table
import MainTable from '../Components/MainTable';
import AmbientePropietarioBase from '../Components/AmbientePropietarioBase.jsx';

const AmbientePropietarioClientes = () => (
  <AmbientePropietarioBase>
    <MainTable />
  </AmbientePropietarioBase>
);

export default AmbientePropietarioClientes;
