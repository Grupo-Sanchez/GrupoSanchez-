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
  faFolder,
} from '@fortawesome/free-solid-svg-icons';

export const rutasPropietario = [
  {
    name: 'Productos',
    to: '/Propietario/Productos',
    icon: faBox,
  },
  {
    name: 'Usuarios',
    to: '/Propietario/Usuarios',
    icon: faUser,
  },
  {
    name: 'Bodegas',
    to: '/Propietario/Bodegas',
    icon: faWarehouse,
  },
  {
    name: 'Marcas',
    to: '/Propietario/Marcas',
    icon: faTag,
  },
  {
    name: 'Departamentos',
    to: '/Propietario/Departamentos',
    icon: faFolder,
  },
  {
    name: 'Proveedores',
    to: '/Propietario/Proveedores',
    icon: faTruck,
  },
  {
    name: 'Clientes',
    to: '/Propietario/Clientes',
    icon: faAddressBook,
  },
  {
    name: 'Reportes',
    to: '/EnConstruccion',
    icon: faClipboardList,
  },
  {
    name: 'Notificaciones',
    to: '/Propietario/Notificaciones',
    icon: faClipboardList,
  },
];

export const rutasJefeTienda = [
  {
    name: 'Facturar',
    to: '/JefeTienda/Facturar',
    icon: faFileInvoice,
  },
  {
    name: 'Devoluciones',
    to: '/JefeTienda/Devoluciones',
    icon: faTasks,
  },
];

export default {};
