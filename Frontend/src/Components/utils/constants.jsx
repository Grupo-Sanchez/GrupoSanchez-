import {
  faUser,
  faBox,
  faClipboardList,
  faTruck,
  faWarehouse,
  faTag,
  faAddressBook,
  faFileInvoice,
  faTasks,
} from '@fortawesome/free-solid-svg-icons';

import productos from '../../Icons/productos.png';
import bodegas from '../../Icons/bodega.png';
import proveedores from '../../Icons/proveedores.png';
import reportes from '../../Icons/reporte.png';
import notificacion from '../../Icons/notificacion.png';
import clientes from '../../Icons/clientes.png';
import usuarios from '../../Icons/users.png';
import tags from '../../Icons/tags.png';

//jefe de tienda icons
import factura from '../../Icons/factura.png';
import devoluciones from '../../Icons/devoluciones.png';

export const rutasPropietario = [
  {
    name: 'Productos',
    to: '/Propietario/Productos',
    icon: productos,
  },
  {
    name: 'Usuarios',
    to: '/Propietario/Usuarios',
    icon: usuarios,
  },
  {
    name: 'Bodegas',
    to: '/Propietario/Bodegas',
    icon: bodegas,
  },
  {
    name: 'Marcas',
    to: '/Propietario/Marcas',
    icon: tags,
  },
  {
    name: 'Proveedores',
    to: '/Propietario/Proveedores',
    icon: proveedores,
  },
  {
    name: 'Clientes',
    to: '/Propietario/Clientes',
    icon: clientes,
  },
  {
    name: 'Reportes',
    to: '/EnConstruccion',
    icon: reportes,
  },
  {
    name: 'Notificaciones',
    to: '/Propietario/Notificaciones',
    icon: notificacion,
  },
];

export const rutasJefeTienda = [
  {
    name: 'Facturar',
    to: '/JefeTienda/Facturar',
    icon: factura,
  },
  {
    name: 'Devoluciones',
    to: '/JefeTienda/Devoluciones',
    icon: devoluciones,
  },
];

export default {};
