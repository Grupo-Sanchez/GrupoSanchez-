(this.webpackJsonpgruposanchez = this.webpackJsonpgruposanchez || []).push([
  [0],
  {
    100: function (e, t, c) {
      'use strict';
      c.r(t);
      var a = c(0),
        n = c(2),
        r = c.n(n),
        i = c(26),
        o = c.n(i),
        s = (c(55), c(29)),
        d = c(14),
        l = (c(56), c(3)),
        j = c(101),
        u = c(102),
        b = c(103),
        h = c(104),
        m = c(105),
        p =
          (c(57),
          Object(d.e)(function (e) {
            var t = e.history,
              c = Object(n.useState)(''),
              r = Object(l.a)(c, 2),
              i = r[0],
              o = r[1],
              s = Object(n.useState)(''),
              d = Object(l.a)(s, 2);
            d[0], d[1];
            return Object(a.jsx)('div', {
              className: 'Login',
              children: Object(a.jsxs)(j.a, {
                children: [
                  Object(a.jsxs)(u.a, {
                    children: [
                      Object(a.jsx)(b.a, { for: 'exampleEmail', children: 'Email' }),
                      Object(a.jsx)(h.a, {
                        type: 'email',
                        name: 'email',
                        id: 'exampleEmail',
                        placeholder: 'with a placeholder',
                        value: i,
                        onChange: function (e) {
                          return (function (e) {
                            switch ((e.value, e.name)) {
                              case 'email':
                                o(e.value);
                            }
                          })(e.currentTarget);
                        },
                      }),
                    ],
                  }),
                  Object(a.jsxs)(u.a, {
                    children: [
                      Object(a.jsx)(b.a, { for: 'examplePassword', children: 'Password' }),
                      Object(a.jsx)(h.a, {
                        type: 'password',
                        name: 'password',
                        id: 'examplePassword',
                        placeholder: 'password placeholder',
                      }),
                    ],
                  }),
                  Object(a.jsx)(m.a, {
                    block: !0,
                    size: 'lg',
                    type: 'submit',
                    onClick: function () {
                      switch ((console.log('Correo: ', i), i)) {
                        case 'propietario':
                          t.push('/Propietario');
                          break;
                        case 'vendedor':
                          t.push('/Vendedor');
                          break;
                        case 'jefetienda':
                          t.push('/JefeTienda');
                          break;
                        case 'administrador':
                          t.push('/Administrador');
                      }
                    },
                    children: 'Login',
                  }),
                ],
              }),
            });
          })),
        x = c(111),
        O = c(112),
        g = c(113),
        v = (c(66), c.p + 'static/media/Notificacion.02413e91.svg'),
        f =
          (c.p,
          Object(d.e)(function (e) {
            var t = e.history,
              c = e.items,
              r = Object(n.useState)(!1),
              i = Object(l.a)(r, 2),
              o = i[0],
              s = i[1];
            function d(e) {
              t.push(e), console.log("Let's go to ".concat(e, '!'));
            }
            return Object(a.jsxs)('nav', {
              className: 'base-header',
              children: [
                Object(a.jsxs)('div', {
                  className: 'header-content',
                  children: [
                    Object(a.jsx)('button', {
                      className: 'sidenav-button',
                      onClick: function () {
                        return s(!o);
                      },
                      children: Object(a.jsx)('svg', {
                        style: { width: '1em', height: '1em', color: 'white' },
                        fill: 'none',
                        stroke: 'currentColor',
                        viewBox: '0 0 24 24',
                        xmlns: 'http://www.w3.org/2000/svg',
                        children: Object(a.jsx)('path', {
                          strokeLinecap: 'round',
                          strokeLinejoin: 'round',
                          strokeWidth: '2',
                          d: 'M4 6h16M4 12h16M4 18h16',
                        }),
                      }),
                    }),
                    Object(a.jsx)('span', { children: 'Grupo Sanchez' }),
                    Object(a.jsx)('img', {
                      src: v,
                      style: { width: '1.4em', height: '1.4em', color: 'white' },
                    }),
                  ],
                }),
                o &&
                  Object(a.jsx)('div', {
                    onClick: function () {
                      return s(!1);
                    },
                    className: 'sidenav-background',
                    children: Object(a.jsx)('div', {
                      onClick: function () {
                        return s(!1);
                      },
                      className: 'sidenav-background-content',
                    }),
                  }),
                Object(a.jsxs)('aside', {
                  className: 'sidenav '.concat(o ? 'sidenav-opened' : 'sidenav-closed'),
                  children: [
                    Object(a.jsxs)('div', {
                      onClick: function () {
                        return s(!o);
                      },
                      className: 'sidenav-header',
                      children: [
                        Object(a.jsx)('svg', {
                          style: {
                            width: '1em',
                            height: '1em',
                            cursor: 'pointer',
                            marginRight: '0.5rem',
                          },
                          fill: 'none',
                          stroke: 'currentColor',
                          viewBox: '0 0 24 24',
                          xmlns: 'http://www.w3.org/2000/svg',
                          children: Object(a.jsx)('path', {
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            strokeWidth: '2',
                            d: 'M4 6h16M4 12h16M4 18h16',
                          }),
                        }),
                        Object(a.jsx)('span', { children: 'Grupo Sanchez ' }),
                      ],
                    }),
                    Object(a.jsx)('div', {
                      className: 'sidenav-content',
                      children: c.map(function (e, t) {
                        var c = e.name,
                          n = e.to,
                          r = e.icon;
                        return Object(a.jsxs)(
                          'div',
                          {
                            className: 'sidenav-item',
                            onClick: d.bind(undefined, n),
                            children: [r, Object(a.jsx)('span', { children: c })],
                          },
                          t,
                        );
                      }),
                    }),
                    Object(a.jsx)('div', {
                      className: 'sidenav-footer',
                      children: 'Cerrar Sesion',
                    }),
                  ],
                }),
              ],
            });
          })),
        y = c(106),
        N = function (e) {
          return Object(a.jsx)('div', {
            children: Object(a.jsxs)(y.a, {
              body: !0,
              children: [
                e.icon,
                Object(a.jsx)(m.a, { color: 'primary', onClick: e.isOpen, children: e.titulo }),
              ],
            }),
          });
        },
        C = c(22),
        A = c(24),
        S = c(6),
        w = c.n(S),
        B = c(10),
        E = c(114),
        k = c(107),
        P = c(108),
        I = c(109),
        R = (c(68), c(11)),
        D = c.n(R);
      function T(e) {
        var t,
          c,
          r = Object(n.useState)(!1),
          i = Object(l.a)(r, 2),
          o = i[0],
          s = i[1],
          d = Object(n.useState)(!1),
          j = Object(l.a)(d, 2),
          p = j[0],
          x = j[1],
          O = Object(n.useState)(!1),
          g = Object(l.a)(O, 2),
          v = g[0],
          f = g[1],
          y = Object(n.useState)([]),
          N = Object(l.a)(y, 2),
          S = N[0],
          R = N[1],
          T = Object(n.useState)({
            nombre: '',
            area: '',
            codigos: [],
            proveedores: [],
            ubicacion: '',
            marca: '',
            precio: [],
            cantidad: '',
            descripcion_corta: '',
            descripcion_larga: '',
            cantidad_minima: '',
          }),
          U = Object(l.a)(T, 2),
          L = U[0],
          F = U[1],
          z = (function () {
            var e = Object(B.a)(
              w.a.mark(function e() {
                var t, c;
                return w.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (t = {
                            nombre: L.nombre,
                            area: L.area,
                            codigos: L.codigos,
                            proveedores: L.proveedores,
                            ubicacion: L.ubicacion,
                            marca: L.marca,
                            precios: L.precio,
                            cantidad: L.cantidad,
                            descripcion_corta: L.descripcion_corta,
                            descripcion_larga: L.descripcion_larga,
                            cantidad_minima: L.cantidad_minima,
                          }),
                          (e.next = 3),
                          D.a.post('http://localhost:3001/api/productos', t)
                        );
                      case 3:
                        (c = e.sent), console.log(c), alert('\xa1Producto Agregado!');
                      case 6:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            );
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          G = function (e) {
            var t = e.target,
              c = t.name,
              a = t.value;
            F(function (e) {
              return Object(A.a)(Object(A.a)({}, e), {}, Object(C.a)({}, c, a));
            });
          };
        return Object(a.jsxs)('div', {
          children: [
            Object(a.jsxs)(E.a, {
              isOpen: e.isOpen,
              className: 'text-center',
              style: { height: '95vh', 'overflow-y': 'auto', top: '20px' },
              children: [
                Object(a.jsx)(k.a, {
                  children: Object(a.jsx)('div', {
                    children: Object(a.jsx)('h3', { children: 'AGREGAR PRODUCTOS' }),
                  }),
                }),
                Object(a.jsxs)(P.a, {
                  children: [
                    Object(a.jsxs)('div', {
                      children: [
                        Object(a.jsx)(m.a, {
                          onClick: function () {
                            return x(!0);
                          },
                          color: 'primary',
                          children: 'Insertar Codigo',
                        }),
                        ' ',
                      ],
                    }),
                    Object(a.jsx)('div', { children: Object(a.jsx)('label', {}) }),
                    Object(a.jsxs)('div', {
                      children: [
                        Object(a.jsx)(m.a, {
                          onClick: function () {
                            return f(!0);
                          },
                          color: 'primary',
                          children: 'Insertar Proveedor',
                        }),
                        ' ',
                      ],
                    }),
                    Object(a.jsxs)(E.a, {
                      isOpen: p,
                      children: [
                        Object(a.jsx)(k.a, {
                          children: Object(a.jsx)('div', {
                            className: 'text-center',
                            children: Object(a.jsx)('h3', { children: 'Agregar C\xf3digos' }),
                          }),
                        }),
                        Object(a.jsx)(P.a, {
                          children: Object(a.jsxs)('div', {
                            className: 'form-group',
                            children: [
                              Object(a.jsx)('label', { children: 'codigo 1' }),
                              Object(a.jsx)('input', {
                                className: 'form-control',
                                type: 'text',
                                name: 'codigo1',
                                id: 'cod1',
                              }),
                              Object(a.jsx)('br', {}),
                              Object(a.jsx)('label', { children: 'codigo 2' }),
                              Object(a.jsx)('input', {
                                className: 'form-control',
                                type: 'text',
                                name: 'codigo2',
                                id: 'cod2',
                              }),
                              Object(a.jsx)('br', {}),
                              Object(a.jsx)('label', { children: 'codigo 3' }),
                              Object(a.jsx)('input', {
                                className: 'form-control',
                                type: 'text',
                                name: 'codigo3',
                                id: 'cod3',
                              }),
                              Object(a.jsx)('br', {}),
                              Object(a.jsx)('label', { children: 'codigo 4' }),
                              Object(a.jsx)('input', {
                                className: 'form-control',
                                type: 'text',
                                name: 'codigo4',
                                id: 'cod4',
                              }),
                              Object(a.jsx)('br', {}),
                              Object(a.jsx)('label', { children: 'codigo 5' }),
                              Object(a.jsx)('input', {
                                className: 'form-control',
                                type: 'text',
                                name: 'codigo5',
                                id: 'cod5',
                              }),
                              Object(a.jsx)('br', {}),
                              Object(a.jsx)('label', { children: 'codigo 6' }),
                              Object(a.jsx)('input', {
                                className: 'form-control',
                                type: 'text',
                                name: 'codigo6',
                                id: 'cod6',
                              }),
                              Object(a.jsx)('br', {}),
                              Object(a.jsx)('label', { children: 'codigo 7' }),
                              Object(a.jsx)('input', {
                                className: 'form-control',
                                type: 'text',
                                name: 'codigo7',
                                id: 'cod7',
                              }),
                              Object(a.jsx)('br', {}),
                            ],
                          }),
                        }),
                        Object(a.jsxs)(I.a, {
                          children: [
                            Object(a.jsx)('button', {
                              className: 'btn btn-primary',
                              onClick: function () {
                                return (
                                  L.codigos.push(document.getElementById('cod1').value),
                                  L.codigos.push(document.getElementById('cod2').value),
                                  L.codigos.push(document.getElementById('cod3').value),
                                  L.codigos.push(document.getElementById('cod4').value),
                                  L.codigos.push(document.getElementById('cod5').value),
                                  L.codigos.push(document.getElementById('cod6').value),
                                  L.codigos.push(document.getElementById('cod7').value),
                                  x(!1),
                                  void alert(L.codigos[0])
                                );
                              },
                              children: 'Agregar C\xf3digo',
                            }),
                            Object(a.jsx)('button', {
                              className: 'btn btn-danger',
                              onClick: function () {
                                return x(!1);
                              },
                              children: 'Cancelar',
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(a.jsxs)(E.a, {
                      isOpen: v,
                      children: [
                        Object(a.jsx)(k.a, {
                          children: Object(a.jsx)('div', {
                            children: Object(a.jsx)('h3', { children: 'Agregar Proveedores' }),
                          }),
                        }),
                        Object(a.jsx)(P.a, {
                          children: Object(a.jsxs)('div', {
                            className: 'form-group',
                            children: [
                              Object(a.jsx)('label', { children: 'proveedor 1' }),
                              Object(a.jsx)('input', {
                                className: 'form-control',
                                type: 'text',
                                name: 'proveedor1',
                                id: 'prov1',
                              }),
                              Object(a.jsx)('br', {}),
                              Object(a.jsx)('label', { children: 'proveedor 2' }),
                              Object(a.jsx)('input', {
                                className: 'form-control',
                                type: 'text',
                                name: 'proveedor2',
                                id: 'prov2',
                              }),
                              Object(a.jsx)('br', {}),
                              Object(a.jsx)('label', { children: 'proveedor 3' }),
                              Object(a.jsx)('input', {
                                className: 'form-control',
                                type: 'text',
                                name: 'proveedor3',
                                id: 'prov3',
                              }),
                              Object(a.jsx)('br', {}),
                              Object(a.jsx)('label', { children: 'proveedor 4' }),
                              Object(a.jsx)('input', {
                                className: 'form-control',
                                type: 'text',
                                name: 'proveedor4',
                                id: 'prov4',
                              }),
                              Object(a.jsx)('br', {}),
                              Object(a.jsx)('label', { children: 'proveedor 5' }),
                              Object(a.jsx)('input', {
                                className: 'form-control',
                                type: 'text',
                                name: 'proveedor5',
                                id: 'prov5',
                              }),
                              Object(a.jsx)('br', {}),
                              Object(a.jsx)('label', { children: 'proveedor 6' }),
                              Object(a.jsx)('input', {
                                className: 'form-control',
                                type: 'text',
                                name: 'proveedor6',
                                id: 'prov6',
                              }),
                              Object(a.jsx)('br', {}),
                              Object(a.jsx)('label', { children: 'proveedor 7' }),
                              Object(a.jsx)('input', {
                                className: 'form-control',
                                type: 'text',
                                name: 'proveedor7',
                                id: 'prov7',
                              }),
                              Object(a.jsx)('br', {}),
                            ],
                          }),
                        }),
                        Object(a.jsxs)(I.a, {
                          children: [
                            Object(a.jsx)('button', {
                              className: 'btn btn-primary',
                              onClick: function () {
                                return (
                                  L.proveedores.push(document.getElementById('prov1').value),
                                  L.proveedores.push(document.getElementById('prov2').value),
                                  L.proveedores.push(document.getElementById('prov3').value),
                                  L.proveedores.push(document.getElementById('prov4').value),
                                  L.proveedores.push(document.getElementById('prov5').value),
                                  L.proveedores.push(document.getElementById('prov6').value),
                                  L.proveedores.push(document.getElementById('prov7').value),
                                  f(!1),
                                  void alert(L.proveedores[0])
                                );
                              },
                              children: 'Agregar Proveedores',
                            }),
                            Object(a.jsx)('button', {
                              className: 'btn btn-danger',
                              onClick: function () {
                                return f(!1);
                              },
                              children: 'Cancelar',
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(a.jsxs)('div', {
                      children: [
                        Object(a.jsx)('h3', { children: 'Nombre' }),
                        Object(a.jsx)('input', {
                          className: 'form-control',
                          type: 'text',
                          name: 'nombre',
                          value: L ? L.nombre : '',
                          onChange: G,
                        }),
                      ],
                    }),
                    Object(a.jsxs)('div', {
                      children: [
                        Object(a.jsx)('h3', { children: '\xc1rea' }),
                        Object(a.jsx)('input', {
                          className: 'form-control',
                          type: 'text',
                          name: 'area',
                          value: L ? L.area : '',
                          onChange: G,
                        }),
                      ],
                    }),
                    Object(a.jsxs)('div', {
                      children: [
                        Object(a.jsx)('h3', { children: 'Ubicaci\xf3n' }),
                        Object(a.jsx)('input', {
                          className: 'form-control',
                          type: 'text',
                          name: 'ubicacion',
                          value: L ? L.ubicacion : '',
                          onChange: G,
                        }),
                      ],
                    }),
                    Object(a.jsxs)('div', {
                      children: [
                        Object(a.jsx)('h3', { children: 'Marca' }),
                        Object(a.jsx)('input', {
                          className: 'form-control',
                          type: 'text',
                          name: 'marca',
                          value: L ? L.marca : '',
                          onChange: G,
                        }),
                      ],
                    }),
                    Object(a.jsx)(m.a, {
                      onClick: function () {
                        return s(!0);
                      },
                      color: 'primary',
                      children: 'Precios',
                    }),
                    ' ',
                    Object(a.jsxs)('div', {
                      children: [
                        Object(a.jsx)('h3', { children: 'Cantidad' }),
                        Object(a.jsx)('input', {
                          className: 'form-control',
                          type: 'Number',
                          name: 'cantidad',
                          value: L ? L.cantidad : '',
                          onChange: G,
                        }),
                      ],
                    }),
                    Object(a.jsxs)('div', {
                      children: [
                        Object(a.jsx)('h3', { children: 'Cantidad M\xednima' }),
                        Object(a.jsx)('input', {
                          className: 'form-control',
                          type: 'Number',
                          name: 'cantidad',
                          value: L ? L.cantidad_minima : '',
                          onChange: G,
                        }),
                      ],
                    }),
                    Object(a.jsx)('div', {
                      children: Object(a.jsxs)('div', {
                        children: [
                          Object(a.jsx)('h3', { children: 'Descripci\xf3n corta' }),
                          Object(a.jsxs)(u.a, {
                            class: 'style',
                            children: [
                              Object(a.jsx)(b.a, { for: 'exampleText' }),
                              Object(a.jsx)(h.a, {
                                type: 'textarea',
                                name: 'text',
                                id: 'descripcion1',
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    Object(a.jsxs)('div', {
                      children: [
                        Object(a.jsx)('div', {
                          children: Object(a.jsx)('h3', { children: 'Descripci\xf3n larga ' }),
                        }),
                        Object(a.jsxs)('div', {
                          className: 'form-group',
                          children: [
                            Object(a.jsx)('label', { htmlFor: 'exampleFormControlTextarea1' }),
                            Object(a.jsx)('textarea', {
                              className: 'form-control',
                              id: 'descripcion2',
                              rows: '5',
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                Object(a.jsxs)(I.a, {
                  children: [
                    Object(a.jsx)('button', {
                      className: 'btn btn-primary',
                      onClick: function () {
                        return (function () {
                          var t = L,
                            c = S;
                          c.push(t),
                            R(c),
                            (L.descripcion_corta = document.getElementById('descripcion1').value),
                            (L.descripcion_larga = document.getElementById('descripcion2').value),
                            z(),
                            e.change();
                        })();
                      },
                      children: 'Agregar Producto',
                    }),
                    Object(a.jsx)('button', {
                      className: 'btn btn-danger',
                      onClick: e.change,
                      children: 'Cancelar',
                    }),
                  ],
                }),
              ],
            }),
            Object(a.jsxs)(E.a, {
              isOpen: o,
              children: [
                Object(a.jsx)(k.a, {
                  children: Object(a.jsx)('div', {
                    className: 'text-center',
                    children: Object(a.jsx)('h3', { children: 'Agregar Precios' }),
                  }),
                }),
                Object(a.jsx)(P.a, {
                  children: Object(a.jsxs)('div', {
                    className: 'form-group',
                    children: [
                      Object(a.jsx)('label', { children: 'Precio 1' }),
                      Object(a.jsx)('input', {
                        className: 'form-control',
                        type: 'text',
                        name: 'precio1',
                        id: 'precio1',
                      }),
                      Object(a.jsx)('br', {}),
                      Object(a.jsx)('label', { children: 'Precio 2' }),
                      Object(a.jsx)(
                        'input',
                        ((t = { className: 'form-control', type: 'text', name: 'Fecha' }),
                        Object(C.a)(t, 'name', 'precio2'),
                        Object(C.a)(t, 'id', 'precio2'),
                        t),
                      ),
                      Object(a.jsx)('br', {}),
                      Object(a.jsx)('label', { children: 'Precio 3' }),
                      Object(a.jsx)(
                        'input',
                        ((c = { className: 'form-control', type: 'text', name: 'Etiqueta' }),
                        Object(C.a)(c, 'name', 'precio3'),
                        Object(C.a)(c, 'id', 'precio3'),
                        c),
                      ),
                    ],
                  }),
                }),
                Object(a.jsxs)(I.a, {
                  children: [
                    Object(a.jsx)('button', {
                      className: 'btn btn-primary',
                      onClick: function () {
                        return (
                          L.precio.push(document.getElementById('precio1').value),
                          L.precio.push(document.getElementById('precio2').value),
                          L.precio.push(document.getElementById('precio3').value),
                          s(!1),
                          void alert(L.precio[0])
                        );
                      },
                      children: 'Agregar Producto',
                    }),
                    Object(a.jsx)('button', {
                      className: 'btn btn-danger',
                      onClick: function () {
                        return s(!1);
                      },
                      children: 'Cancelar',
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var U = c.p + 'static/media/AgregarProducto.d6d72e0f.svg',
        L = c.p + 'static/media/EditarProducto.98e56dcf.svg',
        F = (c.p, c.p + 'static/media/BuscarProducto.17e41df3.svg'),
        z = c(110);
      c(93);
      function G(e) {
        var t = Object(n.useState)(!1),
          c = Object(l.a)(t, 2),
          r = c[0],
          i = c[1],
          o = Object(n.useState)(!1),
          s = Object(l.a)(o, 2),
          d = s[0],
          j = s[1],
          p = Object(n.useState)(!1),
          x = Object(l.a)(p, 2),
          O = x[0],
          g = x[1],
          v = Object(n.useState)(!1),
          f = Object(l.a)(v, 2),
          y = f[0],
          N = f[1],
          S = Object(n.useState)(!1),
          R = Object(l.a)(S, 2),
          T = R[0],
          U = R[1],
          L = Object(n.useState)(!1),
          F = Object(l.a)(L, 2),
          G = F[0],
          M = F[1],
          H = Object(n.useState)(!1),
          Q = Object(l.a)(H, 2),
          V = Q[0],
          W = Q[1],
          q = Object(n.useState)(!1),
          Y = Object(l.a)(q, 2),
          Z = Y[0],
          J = Y[1],
          K = Object(n.useState)([]),
          X = Object(l.a)(K, 2),
          _ = X[0],
          $ = X[1],
          ee = Object(n.useState)({
            nombre: '',
            area: '',
            codigos: [],
            proveedores: [],
            ubicacion: '',
            marca: '',
            precios: [],
            cantidad: '',
            descripcion_corta: '',
            descripcion_larga: '',
            cantidad_minima: '',
          }),
          te = Object(l.a)(ee, 2),
          ce = te[0],
          ae = te[1];
        Object(n.useEffect)(function () {
          (function () {
            var e = Object(B.a)(
              w.a.mark(function e() {
                return w.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          D.a.get('http://localhost:3001/api/productos').then(function (e) {
                            $(e.data);
                          })
                        );
                      case 2:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            );
            return function () {
              return e.apply(this, arguments);
            };
          })()();
        }, []);
        var ne = function (e) {
            var t;
            $(
              _.filter(function (t) {
                return t._id !== e;
              }),
            ),
              (t = e),
              D.a.delete('http://localhost:3001/api/productos/'.concat(t));
          },
          re = Object(n.useState)(''),
          ie = Object(l.a)(re, 2),
          oe = ie[0],
          se = ie[1],
          de = Object(n.useState)(''),
          le = Object(l.a)(de, 2),
          je = le[0],
          ue = le[1],
          be = Object(n.useState)(''),
          he = Object(l.a)(be, 2),
          me = he[0],
          pe = he[1],
          xe = Object(n.useState)(''),
          Oe = Object(l.a)(xe, 2),
          ge = Oe[0],
          ve = Oe[1],
          fe = Object(n.useState)(''),
          ye = Object(l.a)(fe, 2),
          Ne = ye[0],
          Ce = ye[1],
          Ae = Object(n.useState)(''),
          Se = Object(l.a)(Ae, 2),
          we = Se[0],
          Be = Se[1],
          Ee = Object(n.useState)(''),
          ke = Object(l.a)(Ee, 2),
          Pe = ke[0],
          Ie = ke[1],
          Re = Object(n.useState)(''),
          De = Object(l.a)(Re, 2),
          Te = De[0],
          Ue = De[1],
          Le = Object(n.useState)(''),
          Fe = Object(l.a)(Le, 2),
          ze = Fe[0],
          Ge = Fe[1],
          Me = Object(n.useState)(''),
          He = Object(l.a)(Me, 2),
          Qe = He[0],
          Ve = He[1],
          We = Object(n.useState)(''),
          qe = Object(l.a)(We, 2),
          Ye = qe[0],
          Ze = qe[1],
          Je = Object(n.useState)(''),
          Ke = Object(l.a)(Je, 2),
          Xe = Ke[0],
          _e = Ke[1],
          $e = Object(n.useState)(''),
          et = Object(l.a)($e, 2),
          tt = et[0],
          ct = et[1],
          at = Object(n.useState)(''),
          nt = Object(l.a)(at, 2),
          rt = nt[0],
          it = nt[1],
          ot = Object(n.useState)(''),
          st = Object(l.a)(ot, 2),
          dt = st[0],
          lt = st[1],
          jt = Object(n.useState)(''),
          ut = Object(l.a)(jt, 2),
          bt = ut[0],
          ht = ut[1],
          mt = Object(n.useState)(''),
          pt = Object(l.a)(mt, 2),
          xt = pt[0],
          Ot = pt[1],
          gt = function (e) {
            var t = e.target,
              c = t.name,
              a = t.value;
            ae(function (e) {
              return Object(A.a)(Object(A.a)({}, e), {}, Object(C.a)({}, c, a));
            });
          };
        return Object(a.jsxs)('div', {
          children: [
            Object(a.jsxs)(E.a, {
              isOpen: e.isOpen,
              className: 'text-center',
              style: {
                maxWidth: '1700px',
                width: '80%',
                'text-align': 'center',
                'padding-top': '200px',
              },
              children: [
                Object(a.jsx)('h4', { class: 'text-center', children: 'PRODUCTOS EN INVENTARIO' }),
                Object(a.jsx)('input', {
                  type: 'text',
                  id: 'myInput',
                  onChange: function () {
                    return (function () {
                      var e,
                        t,
                        c,
                        a,
                        n = document.getElementById('myInput');
                      if (null != n)
                        for (
                          e = n.value.toUpperCase(),
                            t = document.getElementById('myTable').getElementsByTagName('tr'),
                            a = 0;
                          a < t.length;
                          a++
                        )
                          (c = t[a].getElementsByTagName('td')[1]) &&
                            ((c.textContent || c.innerText).toUpperCase().indexOf(e) > -1
                              ? (t[a].style.display = '')
                              : (t[a].style.display = 'none'));
                    })();
                  },
                  placeholder: 'Search for names..',
                  title: 'Type in a name',
                  style: {
                    'background-image': "url('".concat(
                      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAALCAAVABUBAREA/8QAGAAAAwEBAAAAAAAAAAAAAAAABgkKBQj/xAAmEAABBAMAAgEDBQAAAAAAAAAFBAYHCAECAwkRABITFRQWIUGh/9oACAEBAAA/AGyReNtH5qpKspJe9zLE0uoHCk+yBWmCI1qA4xEXTRPB2HlqQVIE1SrMigUeNDW0VcHfCNoskQj1T80Wu6fsnHLA6s05z2PXDazxfXsqnVGW7Ryndell7Vr9jSHH5YvsHPWRrlYJgNfDwFtZyyWIRCuknxvJAbX8cP7lR2CIgpv97gnD8wSzZ2UG65xvrrt6942xjbHvH9Zx7+TwNyIPIV4oZpsTpUarCC/tEbKTS7rFAYlZ8vNGIrEValaSv062TgQjSRdN2xI8SOA0iRkG6jF9eRUHr0+hVogVJyKlw8QW4sbdhg2jpr5RfJvSN0wPRGqT6egBjwtEkltudpchOS5cEDWYjtfaf9oCdm0SY6EN0Ui2m0GwUEmALnSDEudFK8vxSu6saM5Lj6Yo/Z8pRU8W9IEbv0APc7KerUJ8C7dcrfJ8vuoSgoinznTvw6Yxvy6899eSpEr4qUC9OlXpVKbicZxrvjH1a4zjP8+s4xnH+/MVyNluPJunmg7QAV0NN0hiTdczYcQtEabzib5lJ1QGAR0MR4qB5YOVQ9uyMgOW8OyVUn6b8+vPOM4zhcFEvFoyfHd1noBAc+zmMr7Msho5FjOuS0g1DLGroq3QKdHkHj4o8G27jisa7zK7mt64U9kPRIMCN9Au/NmEpRzGv//Z',
                      "')",
                    ),
                    'background-position': '10px 10px',
                    'background-repeat': 'no-repeat',
                    width: '100%',
                    'font-size': '16px',
                    padding: '12px 20px 12px 40px',
                    border: '1px solid #ddd',
                    'margin-bottom': '12px',
                  },
                }),
                Object(a.jsxs)(z.a, {
                  responsive: !0,
                  striped: !0,
                  bordered: !0,
                  hover: !0,
                  dark: !0,
                  align: 'center',
                  size: 'sm',
                  id: 'myTable',
                  style: { width: '500px' },
                  children: [
                    Object(a.jsx)('thead', {
                      children: Object(a.jsxs)('tr', {
                        children: [
                          Object(a.jsx)('th', { children: '#' }),
                          Object(a.jsx)('th', { children: 'Nombre' }),
                          Object(a.jsx)('th', { children: 'Area' }),
                          Object(a.jsx)('th', { children: 'Ubicaci\xf3n' }),
                          Object(a.jsx)('th', { children: 'Marca' }),
                          Object(a.jsx)('th', { children: 'Cantidad M\xednima' }),
                          Object(a.jsx)('th', { children: 'C\xf3digos' }),
                          Object(a.jsx)('th', { children: 'Proveedores ' }),
                          Object(a.jsx)('th', { children: 'Descripciones ' }),
                          Object(a.jsx)('th', { children: 'Precios' }),
                          Object(a.jsx)('th', { class: 'text-center', children: ' Acci\xf3n' }),
                        ],
                      }),
                    }),
                    Object(a.jsx)('tbody', {
                      children: _.map(function (e, t) {
                        return Object(a.jsxs)('tr', {
                          children: [
                            Object(a.jsx)('td', { children: (t += 1) }),
                            Object(a.jsx)('td', { children: e.nombre }),
                            Object(a.jsx)('td', { children: e.area }),
                            Object(a.jsx)('td', { children: e.ubicacion }),
                            Object(a.jsx)('td', { children: e.marca }),
                            Object(a.jsx)('td', { children: e.cantidad_minima }),
                            Object(a.jsx)('td', {
                              children: Object(a.jsx)(m.a, {
                                color: 'primary',
                                onClick: function () {
                                  return ae((t = e)), console.log(t.nombre), void i(!0);
                                  var t;
                                },
                                children: 'Ver',
                              }),
                            }),
                            Object(a.jsx)('td', {
                              children: Object(a.jsx)(m.a, {
                                color: 'primary',
                                onClick: function () {
                                  return ae(e), void j(!0);
                                },
                                children: 'Ver',
                              }),
                            }),
                            Object(a.jsx)('td', {
                              children: Object(a.jsx)(m.a, {
                                color: 'primary',
                                onClick: function () {
                                  return (function (e) {
                                    ae(e), g(!0);
                                  })(e);
                                },
                                children: 'Ver',
                              }),
                            }),
                            Object(a.jsx)('td', {
                              children: Object(a.jsx)(m.a, {
                                color: 'primary',
                                onClick: function () {
                                  return (function (e) {
                                    ae(e), J(!0);
                                  })(e);
                                },
                                children: 'Ver',
                              }),
                            }),
                            Object(a.jsxs)('td', {
                              children: [
                                Object(a.jsx)(m.a, {
                                  onClick: function () {
                                    return (function (e) {
                                      ae(e), console.log(e.nombre), N(!0);
                                    })(e);
                                  },
                                  color: 'success',
                                  children: 'Modificar',
                                }),
                                ' ',
                              ],
                            }),
                            Object(a.jsxs)('td', {
                              children: [
                                Object(a.jsx)(m.a, {
                                  onClick: function () {
                                    return ne(e._id);
                                  },
                                  color: 'danger',
                                  children: 'Eliminar',
                                }),
                                ' ',
                              ],
                            }),
                          ],
                        });
                      }),
                    }),
                  ],
                }),
                Object(a.jsx)(m.a, { color: 'danger', onClick: e.change, children: 'Cerrar' }),
              ],
            }),
            Object(a.jsxs)('div', {
              children: [
                Object(a.jsxs)(E.a, {
                  isOpen: y,
                  className: 'text-center',
                  style: { height: '95vh', 'overflow-y': 'auto', top: '20px' },
                  children: [
                    Object(a.jsx)(k.a, {
                      children: Object(a.jsx)('div', {
                        children: Object(a.jsx)('h3', {
                          className: 'text-center',
                          children: 'MODIFICAR PRODUCTOS',
                        }),
                      }),
                    }),
                    Object(a.jsxs)(P.a, {
                      children: [
                        Object(a.jsxs)('div', {
                          children: [
                            Object(a.jsx)(m.a, {
                              onClick: function () {
                                return (
                                  se(ce.codigos[0]),
                                  ue(ce.codigos[1]),
                                  pe(ce.codigos[2]),
                                  ve(ce.codigos[3]),
                                  Ce(ce.codigos[4]),
                                  Be(ce.codigos[5]),
                                  Ie(ce.codigos[6]),
                                  void U(!0)
                                );
                              },
                              color: 'primary',
                              children: 'Modificar C\xf3digos',
                            }),
                            ' ',
                          ],
                        }),
                        Object(a.jsx)('div', { children: Object(a.jsx)('label', {}) }),
                        Object(a.jsxs)('div', {
                          children: [
                            Object(a.jsx)(m.a, {
                              onClick: function () {
                                return (
                                  Ue(ce.proveedores[0]),
                                  Ge(ce.proveedores[1]),
                                  Ve(ce.proveedores[2]),
                                  Ze(ce.proveedores[3]),
                                  _e(ce.proveedores[4]),
                                  ct(ce.proveedores[5]),
                                  it(ce.proveedores[6]),
                                  void M(!0)
                                );
                              },
                              color: 'primary',
                              children: 'Modificar Proveedor',
                            }),
                            ' ',
                          ],
                        }),
                        Object(a.jsxs)(E.a, {
                          isOpen: T,
                          children: [
                            Object(a.jsx)(k.a, {
                              children: Object(a.jsx)('div', {
                                className: 'text-center',
                                children: Object(a.jsx)('h3', { children: 'Modificar C\xf3digos' }),
                              }),
                            }),
                            Object(a.jsx)(P.a, {
                              children: Object(a.jsxs)('div', {
                                className: 'form-group',
                                children: [
                                  Object(a.jsx)('label', { children: 'codigo 1' }),
                                  Object(a.jsx)('input', {
                                    className: 'form-control',
                                    type: 'text',
                                    name: 'mcodigo1',
                                    id: 'mcod1',
                                    value: oe,
                                    onChange: function (e) {
                                      return se(e.target.value);
                                    },
                                  }),
                                  Object(a.jsx)('br', {}),
                                  Object(a.jsx)('label', { children: 'codigo 2' }),
                                  Object(a.jsx)('input', {
                                    className: 'form-control',
                                    type: 'text',
                                    name: 'modcodigo2',
                                    id: 'modcod2',
                                    value: je,
                                    onChange: function (e) {
                                      return ue(e.target.value);
                                    },
                                  }),
                                  Object(a.jsx)('br', {}),
                                  Object(a.jsx)('label', { children: 'codigo 3' }),
                                  Object(a.jsx)('input', {
                                    className: 'form-control',
                                    type: 'text',
                                    name: 'modcodigo3',
                                    id: 'modcod3',
                                    value: me,
                                    onChange: function (e) {
                                      return pe(e.target.value);
                                    },
                                  }),
                                  Object(a.jsx)('br', {}),
                                  Object(a.jsx)('label', { children: 'codigo 4' }),
                                  Object(a.jsx)('input', {
                                    className: 'form-control',
                                    type: 'text',
                                    name: 'modcodigo4',
                                    id: 'modcod4',
                                    value: ge,
                                    onChange: function (e) {
                                      return ve(e.target.value);
                                    },
                                  }),
                                  Object(a.jsx)('br', {}),
                                  Object(a.jsx)('label', { children: 'codigo 5' }),
                                  Object(a.jsx)('input', {
                                    className: 'form-control',
                                    type: 'text',
                                    name: 'modcodigo5',
                                    id: 'modcod5',
                                    value: Ne,
                                    onChange: function (e) {
                                      return Ce(e.target.value);
                                    },
                                  }),
                                  Object(a.jsx)('br', {}),
                                  Object(a.jsx)('label', { children: 'codigo 6' }),
                                  Object(a.jsx)('input', {
                                    className: 'form-control',
                                    type: 'text',
                                    name: 'modcodigo6',
                                    id: 'modcod6',
                                    value: we,
                                    onChange: function (e) {
                                      return Be(e.target.value);
                                    },
                                  }),
                                  Object(a.jsx)('br', {}),
                                  Object(a.jsx)('label', { children: 'codigo 7' }),
                                  Object(a.jsx)('input', {
                                    className: 'form-control',
                                    type: 'text',
                                    name: 'modcodigo7',
                                    id: 'modcod7',
                                    value: Pe,
                                    onChange: function (e) {
                                      return Ie(e.target.value);
                                    },
                                  }),
                                  Object(a.jsx)('br', {}),
                                ],
                              }),
                            }),
                            Object(a.jsxs)(I.a, {
                              children: [
                                Object(a.jsx)('button', {
                                  className: 'btn btn-primary',
                                  onClick: function () {
                                    return (
                                      (e = ce),
                                      console.log(e.codigos[0]),
                                      (ce.codigos[0] = document.getElementById('mcod1').value),
                                      console.log(ce.codigos[0]),
                                      (ce.codigos[1] = document.getElementById('modcod2').value),
                                      (ce.codigos[2] = document.getElementById('modcod3').value),
                                      (ce.codigos[3] = document.getElementById('modcod4').value),
                                      (ce.codigos[4] = document.getElementById('modcod5').value),
                                      (ce.codigos[5] = document.getElementById('modcod6').value),
                                      (ce.codigos[6] = document.getElementById('modcod7').value),
                                      U(!1),
                                      void alert(ce.codigos[1])
                                    );
                                    var e;
                                  },
                                  children: 'Modificar C\xf3digo',
                                }),
                                Object(a.jsx)('button', {
                                  className: 'btn btn-danger',
                                  onClick: function () {
                                    return U(!1);
                                  },
                                  children: 'Cancelar',
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(a.jsxs)(E.a, {
                          isOpen: G,
                          children: [
                            Object(a.jsx)(k.a, {
                              children: Object(a.jsx)('div', {
                                children: Object(a.jsx)('h3', {
                                  children: 'Modificar Proveedores',
                                }),
                              }),
                            }),
                            Object(a.jsx)(P.a, {
                              children: Object(a.jsxs)('div', {
                                className: 'form-group',
                                children: [
                                  Object(a.jsx)('label', { children: 'proveedor 1' }),
                                  Object(a.jsx)('input', {
                                    className: 'form-control',
                                    type: 'text',
                                    name: 'modproveedor1',
                                    id: 'modprov1',
                                    placeholder: ce.proveedores[0],
                                    value: Te,
                                    onChange: function (e) {
                                      return Ue(e.target.value);
                                    },
                                  }),
                                  Object(a.jsx)('br', {}),
                                  Object(a.jsx)('label', { children: 'proveedor 2' }),
                                  Object(a.jsx)('input', {
                                    className: 'form-control',
                                    type: 'text',
                                    name: 'modproveedor2',
                                    id: 'modprov2',
                                    value: ze,
                                    onChange: function (e) {
                                      return Ge(e.target.value);
                                    },
                                  }),
                                  Object(a.jsx)('br', {}),
                                  Object(a.jsx)('label', { children: 'proveedor 3' }),
                                  Object(a.jsx)('input', {
                                    className: 'form-control',
                                    type: 'text',
                                    name: 'modproveedor3',
                                    id: 'modprov3',
                                    value: Qe,
                                    onChange: function (e) {
                                      return Ve(e.target.value);
                                    },
                                  }),
                                  Object(a.jsx)('br', {}),
                                  Object(a.jsx)('label', { children: 'proveedor 4' }),
                                  Object(a.jsx)('input', {
                                    className: 'form-control',
                                    type: 'text',
                                    name: 'modproveedor4',
                                    id: 'modprov4',
                                    value: Ye,
                                    onChange: function (e) {
                                      return Ze(e.target.value);
                                    },
                                  }),
                                  Object(a.jsx)('br', {}),
                                  Object(a.jsx)('label', { children: 'proveedor 5' }),
                                  Object(a.jsx)('input', {
                                    className: 'form-control',
                                    type: 'text',
                                    name: 'modproveedor5',
                                    id: 'modprov5',
                                    value: Xe,
                                    onChange: function (e) {
                                      return _e(e.target.value);
                                    },
                                  }),
                                  Object(a.jsx)('br', {}),
                                  Object(a.jsx)('label', { children: 'proveedor 6' }),
                                  Object(a.jsx)('input', {
                                    className: 'form-control',
                                    type: 'text',
                                    name: 'modproveedor6',
                                    id: 'modprov6',
                                    value: tt,
                                    onChange: function (e) {
                                      return ct(e.target.value);
                                    },
                                  }),
                                  Object(a.jsx)('br', {}),
                                  Object(a.jsx)('label', { children: 'proveedor 7' }),
                                  Object(a.jsx)('input', {
                                    className: 'form-control',
                                    type: 'text',
                                    name: 'modproveedor7',
                                    id: 'modprov7',
                                    value: rt,
                                    onChange: function (e) {
                                      return it(e.target.value);
                                    },
                                  }),
                                  Object(a.jsx)('br', {}),
                                ],
                              }),
                            }),
                            Object(a.jsxs)(I.a, {
                              children: [
                                Object(a.jsx)('button', {
                                  className: 'btn btn-primary',
                                  onClick: function () {
                                    return (
                                      (ce.proveedores[0] = document.getElementById(
                                        'modprov1',
                                      ).value),
                                      (ce.proveedores[1] = document.getElementById(
                                        'modprov2',
                                      ).value),
                                      (ce.proveedores[2] = document.getElementById(
                                        'modprov3',
                                      ).value),
                                      (ce.proveedores[3] = document.getElementById(
                                        'modprov4',
                                      ).value),
                                      (ce.proveedores[4] = document.getElementById(
                                        'modprov5',
                                      ).value),
                                      (ce.proveedores[5] = document.getElementById(
                                        'modprov6',
                                      ).value),
                                      (ce.proveedores[6] = document.getElementById(
                                        'modprov7',
                                      ).value),
                                      M(!1),
                                      void alert(ce.proveedores[0])
                                    );
                                  },
                                  children: 'Modificar Proveedores*',
                                }),
                                Object(a.jsx)('button', {
                                  className: 'btn btn-danger',
                                  onClick: function () {
                                    return M(!1);
                                  },
                                  children: 'Cancelar',
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(a.jsxs)('div', {
                          children: [
                            Object(a.jsx)('h3', { children: 'Nombre' }),
                            Object(a.jsx)('input', {
                              className: 'form-control',
                              type: 'text',
                              name: 'nombre',
                              id: 'modnombre',
                              value: ce ? ce.nombre : '',
                              onChange: gt,
                            }),
                          ],
                        }),
                        Object(a.jsxs)('div', {
                          children: [
                            Object(a.jsx)('h3', { children: '\xc1rea' }),
                            Object(a.jsx)('input', {
                              className: 'form-control',
                              type: 'text',
                              name: 'area',
                              id: 'modarea',
                              value: ce ? ce.area : '',
                              onChange: gt,
                            }),
                          ],
                        }),
                        Object(a.jsxs)('div', {
                          children: [
                            Object(a.jsx)('h3', { children: 'Ubicaci\xf3n' }),
                            Object(a.jsx)('input', {
                              className: 'form-control',
                              type: 'text',
                              name: 'ubicacion',
                              id: 'modubicacion',
                              value: ce ? ce.ubicacion : '',
                              onChange: gt,
                            }),
                          ],
                        }),
                        Object(a.jsxs)('div', {
                          children: [
                            Object(a.jsx)('h3', { children: 'Marca' }),
                            Object(a.jsx)('input', {
                              className: 'form-control',
                              type: 'text',
                              name: 'marca',
                              id: 'modmarca',
                              placeholder: ce.marca,
                              value: ce ? ce.marca : '',
                              onChange: gt,
                            }),
                          ],
                        }),
                        Object(a.jsx)(m.a, {
                          onClick: function () {
                            return (
                              lt(ce.precios[0]), ht(ce.precios[1]), Ot(ce.precios[2]), void W(!0)
                            );
                          },
                          color: 'primary',
                          children: 'Precios',
                        }),
                        ' ',
                        Object(a.jsxs)('div', {
                          children: [
                            Object(a.jsx)('h3', { children: 'Cantidad' }),
                            Object(a.jsx)('input', {
                              className: 'form-control',
                              type: 'Number',
                              name: 'cantidad',
                              id: 'modcantidad',
                              value: ce ? ce.cantidad : '',
                              onChange: gt,
                            }),
                          ],
                        }),
                        Object(a.jsxs)('div', {
                          children: [
                            Object(a.jsx)('h3', { children: 'Cantidad M\xednima' }),
                            Object(a.jsx)('input', {
                              className: 'form-control',
                              type: 'Number',
                              name: 'cantidad_minima',
                              id: 'modcantidad_minima',
                              value: ce ? ce.cantidad_minima : '',
                              onChange: gt,
                            }),
                          ],
                        }),
                        Object(a.jsx)('div', {
                          children: Object(a.jsxs)('div', {
                            children: [
                              Object(a.jsx)('h3', { children: 'Descripci\xf3n corta' }),
                              Object(a.jsxs)(u.a, {
                                class: 'style',
                                children: [
                                  Object(a.jsx)(b.a, { for: 'exampleText' }),
                                  Object(a.jsx)(h.a, {
                                    type: 'textarea',
                                    name: 'text',
                                    id: 'descripcion1',
                                    value: ce ? ce.descripcion_corta : '',
                                    onChange: gt,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        Object(a.jsxs)('div', {
                          children: [
                            Object(a.jsx)('div', {
                              children: Object(a.jsx)('h3', { children: 'Descripci\xf3n larga ' }),
                            }),
                            Object(a.jsxs)('div', {
                              className: 'form-group',
                              children: [
                                Object(a.jsx)('label', { htmlFor: 'exampleFormControlTextarea1' }),
                                Object(a.jsx)('textarea', {
                                  className: 'form-control',
                                  id: 'descripcion2',
                                  rows: '5',
                                  value: ce ? ce.descripcion_larga : '',
                                  onChange: gt,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(a.jsxs)(I.a, {
                      children: [
                        Object(a.jsx)('button', {
                          className: 'btn btn-primary',
                          onClick: function () {
                            return (
                              (e = ce._id),
                              N(!1),
                              void D.a
                                .put('http://localhost:3001/api/productos/'.concat(e), {
                                  nombre: document.getElementById('modnombre').value,
                                  area: document.getElementById('modarea').value,
                                  codigos: ce.codigos,
                                  proveedores: ce.proveedores,
                                  ubicacion: document.getElementById('modubicacion').value,
                                  marca: document.getElementById('modmarca').value,
                                  precios: ce.precios,
                                  cantidad: document.getElementById('modcantidad').value,
                                  descripcion_corta: document.getElementById('descripcion1').value,
                                  descripcion_larga: document.getElementById('descripcion2').value,
                                  cantidad_minima: document.getElementById('modcantidad_minima')
                                    .value,
                                })
                                .then(function (e) {
                                  console.log(e);
                                })
                                .catch(function (e) {
                                  console.log(e);
                                })
                            );
                            var e;
                          },
                          children: 'Guardar Cambios',
                        }),
                        Object(a.jsx)('button', {
                          className: 'btn btn-danger',
                          onClick: function () {
                            return N(!1);
                          },
                          children: 'Cancelar',
                        }),
                      ],
                    }),
                  ],
                }),
                Object(a.jsxs)(E.a, {
                  isOpen: V,
                  children: [
                    Object(a.jsx)(k.a, {
                      children: Object(a.jsx)('div', {
                        className: 'text-center',
                        children: Object(a.jsx)('h3', { children: 'Modificar Precios' }),
                      }),
                    }),
                    Object(a.jsx)(P.a, {
                      children: Object(a.jsxs)('div', {
                        className: 'form-group',
                        children: [
                          Object(a.jsx)('label', { children: 'Precio 1' }),
                          Object(a.jsx)('input', {
                            className: 'form-control',
                            type: 'text',
                            name: 'modprecio1',
                            id: 'modprecio1',
                            value: dt,
                            onChange: function (e) {
                              return lt(e.target.value);
                            },
                          }),
                          Object(a.jsx)('br', {}),
                          Object(a.jsx)('label', { children: 'Precio 2' }),
                          Object(a.jsx)('input', {
                            className: 'form-control',
                            type: 'text',
                            name: 'modprecio2',
                            id: 'modprecio2',
                            value: bt,
                            onChange: function (e) {
                              return ht(e.target.value);
                            },
                          }),
                          Object(a.jsx)('br', {}),
                          Object(a.jsx)('label', { children: 'Precio 3' }),
                          Object(a.jsx)('input', {
                            className: 'form-control',
                            type: 'text',
                            name: 'modprecio3',
                            id: 'modprecio3',
                            value: xt,
                            onChange: function (e) {
                              return Ot(e.target.value);
                            },
                          }),
                        ],
                      }),
                    }),
                    Object(a.jsxs)(I.a, {
                      children: [
                        Object(a.jsx)('button', {
                          className: 'btn btn-primary',
                          onClick: function () {
                            return (
                              (ce.precios[0] = document.getElementById('modprecio1').value),
                              (ce.precios[1] = document.getElementById('modprecio2').value),
                              (ce.precios[2] = document.getElementById('modprecio3').value),
                              W(!1),
                              void alert(ce.precios[0])
                            );
                          },
                          children: 'Modificar Precio',
                        }),
                        Object(a.jsx)('button', {
                          className: 'btn btn-danger',
                          onClick: function () {
                            return W(!1);
                          },
                          children: 'Cancelar',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            Object(a.jsxs)(E.a, {
              isOpen: r,
              children: [
                Object(a.jsx)(k.a, {
                  children: Object(a.jsx)('div', {
                    className: 'text-center',
                    children: Object(a.jsx)('h3', { children: 'Agregar Productos' }),
                  }),
                }),
                Object(a.jsx)(P.a, {
                  children: Object(a.jsxs)('div', {
                    className: 'form-group',
                    children: [
                      Object(a.jsx)('label', { children: 'codigo 1' }),
                      Object(a.jsx)('input', {
                        className: 'form-control',
                        type: 'text',
                        name: 'nombre',
                        value: ce.codigos[0],
                        readOnly: !0,
                      }),
                      Object(a.jsx)('br', {}),
                      Object(a.jsx)('label', { children: 'codigo 2' }),
                      Object(a.jsx)('input', {
                        className: 'form-control',
                        type: 'text',
                        name: 'Fecha',
                        value: ce.codigos[1],
                        readOnly: !0,
                      }),
                      Object(a.jsx)('br', {}),
                      Object(a.jsx)('label', { children: 'codigo 3' }),
                      Object(a.jsx)('input', {
                        className: 'form-control',
                        type: 'text',
                        name: 'Etiqueta',
                        value: ce.codigos[2],
                        readOnly: !0,
                      }),
                      Object(a.jsx)('br', {}),
                      Object(a.jsx)('label', { children: 'codigo 4' }),
                      Object(a.jsx)('input', {
                        className: 'form-control',
                        type: 'text',
                        name: 'Etiqueta',
                        value: ce.codigos[3],
                        readOnly: !0,
                      }),
                      Object(a.jsx)('br', {}),
                      Object(a.jsx)('label', { children: 'codigo 5' }),
                      Object(a.jsx)('input', {
                        className: 'form-control',
                        type: 'text',
                        name: 'Etiqueta',
                        value: ce.codigos[4],
                        readOnly: !0,
                      }),
                      Object(a.jsx)('br', {}),
                      Object(a.jsx)('label', { children: 'codigo 6' }),
                      Object(a.jsx)('input', {
                        className: 'form-control',
                        type: 'text',
                        name: 'Etiqueta',
                        value: ce.codigos[5],
                        readOnly: !0,
                      }),
                      Object(a.jsx)('br', {}),
                      Object(a.jsx)('label', { children: 'codigo 7' }),
                      Object(a.jsx)('input', {
                        className: 'form-control',
                        type: 'text',
                        name: 'Etiqueta',
                        value: ce.codigos[6],
                        readOnly: !0,
                      }),
                      Object(a.jsx)('br', {}),
                    ],
                  }),
                }),
                Object(a.jsx)(I.a, {
                  children: Object(a.jsx)('button', {
                    className: 'btn btn-primary',
                    onClick: function () {
                      return i(!1);
                    },
                    children: 'OK',
                  }),
                }),
              ],
            }),
            Object(a.jsxs)(E.a, {
              isOpen: d,
              children: [
                Object(a.jsx)(k.a, {
                  children: Object(a.jsx)('div', {
                    children: Object(a.jsx)('h3', { children: 'Modificar Productos' }),
                  }),
                }),
                Object(a.jsx)(P.a, {
                  children: Object(a.jsxs)('div', {
                    className: 'form-group',
                    children: [
                      Object(a.jsx)('label', { children: 'proveedor 1' }),
                      Object(a.jsx)('input', {
                        className: 'form-control',
                        type: 'text',
                        name: 'Apunte',
                        value: ce.proveedores[0],
                        readOnly: !0,
                      }),
                      Object(a.jsx)('br', {}),
                      Object(a.jsx)('label', { children: 'proveedor 2' }),
                      Object(a.jsx)('input', {
                        className: 'form-control',
                        type: 'text',
                        name: 'Fecha',
                        readOnly: !0,
                        value: ce.proveedores[1],
                      }),
                      Object(a.jsx)('br', {}),
                      Object(a.jsx)('label', { children: 'proveedor 3' }),
                      Object(a.jsx)('input', {
                        className: 'form-control',
                        type: 'text',
                        name: 'Etiqueta',
                        value: ce.proveedores[2],
                        readOnly: !0,
                      }),
                      Object(a.jsx)('br', {}),
                      Object(a.jsx)('label', { children: 'proveedor 4' }),
                      Object(a.jsx)('input', {
                        className: 'form-control',
                        type: 'text',
                        name: 'Etiqueta',
                        value: ce.proveedores[3],
                        readOnly: !0,
                      }),
                      Object(a.jsx)('br', {}),
                      Object(a.jsx)('label', { children: 'proveedor 5' }),
                      Object(a.jsx)('input', {
                        className: 'form-control',
                        type: 'text',
                        name: 'Etiqueta',
                        value: ce.proveedores[4],
                        readOnly: !0,
                      }),
                      Object(a.jsx)('br', {}),
                      Object(a.jsx)('label', { children: 'proveedor 6' }),
                      Object(a.jsx)('input', {
                        className: 'form-control',
                        type: 'text',
                        name: 'Etiqueta',
                        value: ce.proveedores[5],
                        readOnly: !0,
                      }),
                      Object(a.jsx)('br', {}),
                      Object(a.jsx)('label', { children: 'proveedor 7' }),
                      Object(a.jsx)('input', {
                        className: 'form-control',
                        type: 'text',
                        name: 'Etiqueta',
                        value: ce.proveedores[6],
                        readOnly: !0,
                      }),
                      Object(a.jsx)('br', {}),
                    ],
                  }),
                }),
                Object(a.jsx)(I.a, {
                  children: Object(a.jsx)('button', {
                    className: 'btn btn-primary',
                    onClick: function () {
                      return j(!1);
                    },
                    children: 'OK',
                  }),
                }),
              ],
            }),
            Object(a.jsxs)(E.a, {
              isOpen: O,
              children: [
                Object(a.jsx)(k.a, {}),
                Object(a.jsxs)(P.a, {
                  children: [
                    Object(a.jsxs)('div', {
                      children: [
                        Object(a.jsx)('div', {
                          children: Object(a.jsx)('h3', { children: 'Descripci\xf3n corta' }),
                        }),
                        Object(a.jsxs)(u.a, {
                          class: 'style',
                          children: [
                            Object(a.jsx)(b.a, { for: 'exampleText' }),
                            Object(a.jsx)(h.a, {
                              type: 'textarea',
                              name: 'text',
                              id: 'mostrarDescripcionCorta',
                              value: ce.descripcion_corta,
                              readOnly: !0,
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(a.jsxs)('div', {
                      children: [
                        Object(a.jsx)('div', {
                          children: Object(a.jsx)('h3', { children: 'Descripci\xf3n larga ' }),
                        }),
                        Object(a.jsxs)('div', {
                          className: 'form-group',
                          children: [
                            Object(a.jsx)('label', { htmlFor: 'exampleFormControlTextarea1' }),
                            Object(a.jsx)('textarea', {
                              className: 'form-control',
                              id: 'mostrarDescripcionLarga',
                              rows: '5',
                              value: ce.descripcion_larga,
                              readOnly: !0,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                Object(a.jsx)(I.a, {
                  children: Object(a.jsx)(m.a, {
                    color: 'primary',
                    onClick: function () {
                      return g(!1);
                    },
                    children: 'OK',
                  }),
                }),
              ],
            }),
            Object(a.jsxs)(E.a, {
              isOpen: Z,
              children: [
                Object(a.jsx)(k.a, {
                  children: Object(a.jsx)('div', {
                    className: 'text-center',
                    children: Object(a.jsx)('h3', { children: 'Modificar Precios' }),
                  }),
                }),
                Object(a.jsx)(P.a, {
                  children: Object(a.jsxs)('div', {
                    className: 'form-group',
                    children: [
                      Object(a.jsx)('label', { children: 'Precio 1' }),
                      Object(a.jsx)('input', {
                        className: 'form-control',
                        type: 'text',
                        name: 'modprecio1',
                        id: 'verprecio1',
                        value: ce.precios[0],
                        readOnly: !0,
                      }),
                      Object(a.jsx)('br', {}),
                      Object(a.jsx)('label', { children: 'Precio 2' }),
                      Object(a.jsx)('input', {
                        className: 'form-control',
                        type: 'text',
                        name: 'modprecio2',
                        id: 'verprecio2',
                        value: ce.precios[1],
                        readOnly: !0,
                      }),
                      Object(a.jsx)('br', {}),
                      Object(a.jsx)('label', { children: 'Precio 3' }),
                      Object(a.jsx)('input', {
                        className: 'form-control',
                        type: 'text',
                        name: 'modprecio3',
                        id: 'verprecio3',
                        value: ce.precios[2],
                        readOnly: !0,
                      }),
                    ],
                  }),
                }),
                Object(a.jsx)(I.a, {
                  children: Object(a.jsx)('button', {
                    className: 'btn btn-primary',
                    onClick: function () {
                      return J(!1);
                    },
                    children: 'OK',
                  }),
                }),
              ],
            }),
          ],
        });
      }
      var M = function () {
          var e = Object(n.useState)(!1),
            t = Object(l.a)(e, 2),
            c = t[0],
            r = t[1],
            i = Object(n.useState)(!1),
            o = Object(l.a)(i, 2),
            s = o[0],
            d = o[1],
            j = [
              {
                titulo: 'Agregar Productos',
                icon: Object(a.jsx)('img', {
                  src: U,
                  style: {
                    width: '220px',
                    height: 'auto',
                    paddingBottom: '20px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  },
                }),
                to: '/asd',
                isOpen: function () {
                  return r(!0);
                },
              },
              {
                titulo: 'Modificar / Eliminar Producto',
                icon: Object(a.jsx)('img', {
                  src: L,
                  style: {
                    width: '220px',
                    height: 'auto',
                    paddingBottom: '20px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  },
                }),
                to: '/asd',
                isOpen: function () {
                  return d(!0);
                },
              },
              {
                titulo: 'Buscar Producto',
                icon: Object(a.jsx)('img', {
                  src: F,
                  style: {
                    width: '220px',
                    height: 'auto',
                    paddingBottom: '20px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  },
                }),
                to: '/asd',
              },
            ];
          return Object(a.jsxs)(x.a, {
            children: [
              Object(a.jsx)(T, {
                isOpen: c,
                change: function () {
                  return r(!c);
                },
              }),
              Object(a.jsx)(G, {
                isOpen: s,
                change: function () {
                  return d(!s);
                },
              }),
              Object(a.jsx)('h1', {
                style: { textAlign: 'center', paddingTop: '25px' },
                children: 'Productos',
              }),
              Object(a.jsxs)(O.a, {
                md: '3',
                style: { paddingTop: '25px' },
                children: [
                  j.map(function (e, t) {
                    var c = e.titulo,
                      n = e.to,
                      r = e.icon,
                      i = e.isOpen;
                    return Object(a.jsx)(g.a, {
                      children: Object(a.jsx)(N, { titulo: c, to: n, icon: r, isOpen: i }),
                    });
                  }),
                  ';',
                ],
              }),
            ],
          });
        },
        H = function (e) {
          var t = e.onChange,
            c = e.onSubmit,
            n = e.form;
          return Object(a.jsx)('div', {
            className: 'container',
            children: Object(a.jsxs)('form', {
              onSubmit: c,
              children: [
                Object(a.jsx)('div', {
                  className: 'form-group',
                  children: Object(a.jsx)('input', {
                    type: 'text',
                    className: 'form-control',
                    placeholder: 'Numero de bodega',
                    name: 'numBodega',
                    onChange: t,
                    value: n.numBodega,
                  }),
                }),
                Object(a.jsx)('div', {
                  className: 'form-group',
                  children: Object(a.jsx)('input', {
                    type: 'text',
                    className: 'form-control',
                    placeholder: 'Descripcion de Bodega',
                    name: 'Description',
                    onChange: t,
                    value: n.Description,
                  }),
                }),
                Object(a.jsx)('div', {
                  className: 'form-group',
                  children: Object(a.jsx)('input', {
                    type: 'text',
                    className: 'form-control',
                    placeholder: 'Encargado de Bodega',
                    name: 'Encargado',
                    onChange: t,
                    value: n.Encargado,
                  }),
                }),
                Object(a.jsx)('div', {
                  className: 'form-group',
                  children: Object(a.jsx)('input', {
                    type: 'text',
                    className: 'form-control',
                    placeholder: 'Cantidad de pasillos',
                    name: 'CantPasillos',
                    onChange: t,
                    value: n.CantPasillos,
                  }),
                }),
              ],
            }),
          });
        },
        Q =
          (c(94),
          function (e) {
            var t = e.numBodega,
              c = e.Description,
              n = e.Encargado,
              r = e.CantPasillos;
            return Object(a.jsx)('div', {
              className: 'card-bodegas mx-auto Fitness-Card',
              children: Object(a.jsx)('div', {
                className: 'card-body',
                children: Object(a.jsxs)('div', {
                  className: 'row center',
                  children: [
                    Object(a.jsx)('div', {
                      className: 'col-6',
                      children: Object(a.jsx)('img', {
                        src:
                          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAACxQAAAsUBidZ/7wAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAABmISURBVHic7Z13fBTluse/u0k2jdRNqAmEUERAqvSW0BISQJCqeFE54lW5Ch/LsV2PWI7l3KNw5QhXRGkKSJEWklBCFQRBQEB6C6GGbCohPXv/GJLD7ry7s0lmk03Y7+cznw/MszvzZp7fzrzzPs/7vPDgEQUsAM4Cd+5tZ4BvgSE12C4ndqYV8AtgVNh2AS1qqI1O7EQ/wICy88u2NKBvjbTUier0BLKx3fll2x0k4TipxXQG0qm488u2TKBbtbfaiSp0woLz2/i7Gn8eHGi8Oamh8cakhsY1gwOND/m5WhKBAehYI39BNaCp6QbYifbADiDI3NBJ70ZSjJ5Ad63J/vSCUgZuMvBHepHoeLeBSOBPO7S1RtEqf6TW0RrYgsD5bfxdSYyWOx8g0F3L1hg97QNcRccMBrYDbVVua41T1wTQEumX38jc0NrPle0xehp4Wv6Tgz20JMUE0dZfKIL6SMKqU6+IdUkATYGtQGNzQ0tfV3bE6mnk5aJ4kPqeWrYM09PCVyiCJkgCa17FtjoMaglgOnCdyve2jfe+/3Ilzx8K7ATCzA1hPi4kxehpbIPzy2jiLX2nWT3hd0KBbUBIpVrqYKjRCeyPNHqmBkakd++9FfhOYyTntzI3hHq7sGt4EM19bHf+/VzMKWFAXBpXc0tE5rNABHCjUgd3ENS4A6g5YqahYoMv9ZF+jTLnN/KSfsWVdT5A+L27R0Nxv6H1vXPXr/QJHAA1BKBT4Rj3427j5/yBBOBhc0Owh5atw/S08hM+xytEaz9Xdg4PsiSCtkj9Dn2VT1RD1NZOoB/She9ibvDXaUmM1tNO/DpXKR7yc2XzMD16wesj0AHpThCo2gmrEfWu0n30HziY/pGDFT+3e/s2du/YVtHD+yK9jj1qbghw17JtmJ4uQW6KB7mVV8qSc3fRaODpVl4Ee1j/LXQIdGPzMD2D4w1kFpaamzsB8cBQpLhDraG23QHqIV3o7uYGXzcNidGBNjn/REYxHX9O5a+/ZfPGgWw6rEnlZGax4ve6BrmREB2Ij5uw79wD2AR4Kx7IgahNAvAENgB9zA1erho2RunpHqzcHTmbVczQBAO38v79K76ZV0rkpjSbRNCzvo7EaD31xCLoCyRSi0RQWwSgA1Yjjceb4OmqIS4qkP4NlZ1/LquYyE0GbtyVv9al5pUycFMap20QQe8GOhKi9Hi7WhTBWsBD8UAOQG0QgA5YA8TIDFoNqwcFENlI+cUh+U4JQxIMXBc4v4xbeaUMSTBwMcfyZ8ro21DH2iGBeLgIRTAEWIftbzQ1hqMLwAVYCgw3N+i0GlYPDiAmVPmHlpJbQuSmNJLvKDv26r3PXrZBBEOauLN2SCDuYhFEASsA5U5JDeLIAnABlgHjzQ1uWg0/DQpgRFPbnB8Rl8YlgUMbhYTSqIl8RPfKnRIGJxi4Jh4BNCE6xJ1lkQG4iq/kKCQBV340ys44qgC0wCIEznfRwOIB/oxqpuz8W3mlDLVwSw+q34AfNmxhecIOGjSSxY+4kF1MZLz1R0YZj4d5sNyyCCYA3+Og19ohGwXMBZ4y36nVwKIBATzRwlPxANY6dfrg+iyP306L1m0IC2/JioQd1G8oiyBzLquYgZsM3MyTvffLGNvck+/6+aMVR1cmI6WiO9z1drgGAf8F/Kf5Tg3wbT9/nmqp7Pzb+aUMjBe/1umD67MiYQet2vw7t6N5y9Ys3bCFwKBg2efP3HttTMtXFsHkVl5809ffUoTtWWAODpaF5YgCkGXyaIB/9fZjSmsvxS9nFpYSnWjgzwy58339/Fm8NsHE+WU81LY9y+K2ERAoH9Y/nl7E4HgDhgJlETz3kBfz+1kUwUvALMWDVCOOKAAZn3f35aW2ymMrWYWlDIk3cDhNntfn6+fPDxu30r6TLHxQTpv2Hfgxbhv+AfJh/T/uiSDdRhHM6ulnyTwd+ELxINWEwwvgk26+vNGhnuLnsouMDE1I55DA+T6+fixdv5kOXWThAxltO3Tix7ht+PkHyGxHDUXEbE4nu8ioeJzp7b35ooevJfOrwEzFg1QDDi2AD7v68HZHZefnFhsZsdnAb7cLZTYvb2++W72Rjo/KwgcWadexMwvXbMK7no/MdiC1kOgEAzk2iODVR+rxfhf5Me7xPvCuzY2yEzUqgJwcy4Gzdzv58F5nixevnNxiI8MSDey+KXb+4nWJdO9d8Qk+XXr0YuGaOLy85Y+eX1MLGbHFwN1iZRHM7GJVxB8j3Q1qjBoTwMH9+zhy6DehbUZ7bz5+VNn5ecVGRm5JZ4/A+R6enny3aiPdelU+Yal7n/4sXpcoFMGuG4WM3JJOng0i+KSbL29aFsE/gWmVbmQVqREBHD18iM3xG4W2l9t5W+tAlVNYamRsUgbbrxfIbG46HfN+WE2v/rLYUYXp1qsv3yxfi7uHfOAp6XoBj21NJ79EWQSfdvNlmrgjq0F6PXyhqm2tDNUugGNHfmfTujVglF+0Ka29+N9etjl/zLYM4lPyZTY3nY7/+3ENkVGy2FGl6TdwCN+uWCcUwdZrBYzemk6Bggg0wJzefrzwsEURzAWmqtDcClGtAjh14jhx69ZgFDj/6VZefGv5/bmcolIj45MyiLsid76rmxtzl65i0DBZ7KjK9B8cxTfLfkbnLg/wJV4tYOL2DIpKlUUwt48fU9sIxzM0wDxgkgrNtZlqE8DpkydYu2o5paXy9+hxzT1ZYHkYtZwSI0zelcn6ZLnzXVxcmL1gKUNiR6rVZBkRQ4fx1cJluLrJA3zrkvOZuD2DYoVhAg0wr48/k8Qjmi7AYmBi1VtrG9UigPNnz7B21Qqh8x8P87AWTSunxAiTd2aw4kKezObi4sKsBUsZPmaCWk22SPTIxyURuMrTKX++nM+TO5RFIAW0Apgojmm4AEsA+yn5PuwugIvnz7F6+VJKiuVDswqh1HJKjfDsrgyWCZyv1Wr55zeLGDnuCbWarEjMqLHM/v5HXFzkUd5Vl/L4y55MFJ4GuGhgyQB/Roqjmm7AKiBWheZaxa4CuHThPCt/XEyxwPlDrSdTlGMEXtybydLzcudrNBo+nj2P0RNlgUO7M/zx8Xz+9QK0WvklXHLuLs/ZIAI3rYZVgwKIFSe16JBEMFCF5lpEjUSFiHtbOc2ah6N1ceGnHxZRVCQfmh3U2J0NQwPxFOfUlWMEpu3N4pvTd2U2jUbDx7PmMukvssBhtdG2QycaNQklKSFO1rE9aiji2t0SRjTzsNqxddFoGB3mwa+pRaKkFTdgHLAPuKxm28vPr8IxIjATgJubG3t3baewUD5A07+hjk1RerxscP7L+7KYeypXZtNoNHz45b94auqLVWi2OrTr2Bn/QD27tibKbEcMRWQUlDJMIW3NTathbHNP9tws5Io8bc0NGIM0K/mqSs0uxy4CSDcYKCmRZ9L0rK8jwXJKtQlv/ZbN7BNy5wO89dHn/GXajMq01S50erQ7vv7+QhEcuF1EVmEp0SHWRaDTahgfblEE7kh3giSkWdSqYRcBiOisd2PLMD1+OuVuxzsHs/n82B2h7c0PPuXFV9+sYBPtT+duPfHx9WP3ts0y2/7UInKKjESFWE8S1mk1PB7mQdL1Aq7flb1KeCCJYBsqzkiuFgF0DHRjW6y4NIs57/2ewydHxc5//W8fM+2NdyrRxOqhS/deeHnXY8/2rTLbr6nS4zBCIYXdw0XDuHBPtl0r4IZYBKORJsWmqtFmuwugjb8rSTFBinPvAD44nMOHR3KEthnvzOSVt96rZBOrj649e1NaWsqBX3bLbLtuFOKqgf42iGB0mCcJKfmkylPRvIGxSFPkble1vXYVQGs/qTRLQxuqc3x5/A7vHBI7f+orr/HXmZ9UoYnVS6/+kRQVFXFw3x6ZbceNQtxdNPRTmMnk7Sp1DONT8rktFsEoYD2QUZW2VlUATYHZSHP1TWjp68rO4baVZpl9IpdXD4hzA6ZMm8F7n31ZxWZWP30iBlGQn8+hX+XFTpKuF+DlqqFPAwURuGkY1cyD9VcKyJCnovkiPQ7WIRW0rBRVEUAIUmkWWcGkpvVc2B4TRKi4xo4Jc/7MZcb+LKHt2Rdf4f1/zK5CE2uWvpGDybt7l9/375PZkq4VoPfQKk5o9dVpGR3mwbrkfDILZSNLfkgiWAuIL6IClRVAA6RXktbmhhBvF3baWJfnuzN3eWmvuN0Tn3mOj2Z9jUbjUFnUFaZv5GDS025z7PBBmS0xpYD6nlq6KYjAT6dlVJgnay/nkyUWQSzS/EnxM9QKlRGAxaKJDTylOnutbSjNsvDsXab+kolotHT85Cl8Ome+cJi1tqHRaIiMiiHt9i2OHz4ks8enFNDIy4WuCnUN/HVaYkM9WHM5X5SPqEeaP7kaqci1zVRUAP5IpVlktXODPbRsjw2irQ2lWZacu2sxYDJm0tP8Y+53dcL5ZWg0GgZGxZJ68zonjh6W2eNT8gn3daVjoHUR6D20DG/qwepLedyRp6IFIVUoWQXIAycWqIgA/JAGIbqaG/x1UlGmjnrlibCrL+UxeVcmogSa2NHj+GL+YmGUrbZTdie4cukCp/88bmIzAhuS82np58ojCiII8tAyNMSdVRfzyZNfxAZUUAS2XmlfpF++rHS6n07Lthi94i0MpHj5RAvx8mGPjeGrRcuFcfaKkJ2VyZplSzh+5HfCWrTE3b1qdRrUPJ5Wq2XI8Me4fOEcZ06eMLEZgfXJ+bT2c6W9gggaeLpIIrgkFEFDpNfylYA8YdIMW3pYXkgjT/3NDb5uGrbG2FaaZV1yPuOTxGlTUSNH8/Xin4SZNhUhOyuT2D5dSLl8CYBmzVsQt/d3fHyV8wyr43hllJSUMP3ZJ4n7eaXMVhYifsyG2c8HUgsZmmCwNFFlH1KNAqt9AqUHrScQh8D5FanLs9lKztyAIdHMWbi8ys4H2LBqebmzAJIvXSBujfwi19TxyijLYBocM0JmK8t53CjIeTSnh/XgWm+kH67VOXXWBKBKXZ6t1woYZSFrtt+gocxfvlaYaFkZ0lJvyfbdulH54Jnax7ufstT1gdHypJ/CUiNjt2WwSZD1bE5V6xVZEoAqdXms5c33jRxsMdX6QaEshT1i6DCZrbDUyDgL8x7MqUq9IpEAVKnLs/dWIaO2imfOdOvVl29WrMXDU3muf11H5+5ucRJLXrGREVvS2XlDWQSVrVdkLoAy5wtLsyyN8LepLs+vqYUMSzRwR9A56dqjN4vWxuPtrTzp80HB08uL71fH0aPvAJntbrGR4ZvThXMfzYkOcWd5ZABu4vz6UUg1l0xes7Rm/14EyNJrJecHMD5c+Rd7OK2I2M3pwtmznbv3ZMn6ROGs2wcdTy8vvlu1gU7deshs1mY/mzM6zINlkf6WMq3HAt9xn9/v/9jXVLEuz6G0IgbFG0SRKzp27caSdU7nW6Oejy9L1iUK6xhkFxmJSkgXFr8wx4Z6RV+V/adMAM8jmJxYkbo8Rw1FRCUICynTrmNnlqzfXOX35wcBXz9/lqzfTNsOnWS2zEKp6pmFlc1MUKhXNA2YApKP/YCLmJU7L6vLY0tpltOZxURsSjOpv1tGm3aPsCx+O4F6WemfKpGVmcHenUlcT7lSnnr+y/at7N2ZZPK5fgOH0DtiUKXOoXQ8nU5H49Cm9IkYhK+fLCWiSqQb0ngyZqBs2Bj+HXexsMKZCQvO3OX5PcKgmwEI1wCvIc1RN2F2Tz+mt1d2/ql7zk8VOL9Vm7asSNiBPli9RTXSUm/xzw//m9U/LqZYMOegJnDT6Rg/eQqvvfeRqkI33E5lQnQE58+cktkaeGrZGRtEG/EKZybMOnGHV/cLE25maJBCuybvIFPbeDG/r7Kiz2YVE2Gh+HJ4q4f4KXEnwQ0aKh7HVk7/eZxnx8Ry42qKasdUk5BmYSz6OZ6WD8kWMak0qTdvMCE6gkvnz8psjb1c2Blr28ooU3ZnsvCsbILNFg1wC7N1b46MDqaTQmTvQrbkfNGCSmHhLflp8y5hBc7KkpZ6ixH9uzms88sIaRbGxj2HhOXmKsvN69eYEDWA5EsX5Oe7tzBWuEICzqG0Irqtk+WQXtMCsnJYSoq6nFPCwHix8wFGTXxKVecD/M8H7zq88wGuJl/my4/+puoxGzZuwugnxPMfr+aWMNCGQtitfIUCCXRFWmC5wf17z2YV09nCHSAlt4SB8Wmi2St2IyszgzXLlsj2e3h40rb9IzU2opifl8efJ45RkG86Zr9i8QLe/PBT6vlYLBOnKsl3JBHsGh5EiLf4TnA2S+gvgytwCjMBzDuVK+wDXMstYeAmg7Dytj35Zcc2WYfPw8OT5156WVjUsTrp1W8AC+bNMRFBUWEhe3ckETVydLW14+K9u/LOWHEm9jzBHEvglBZpGRYTvj19l7cPZpuUQTuQWkj/uDTOZyuvqKE2V5Mvy/a169Cxxp0PEBCop237DrL9KcmXBJ+2L+eyihkQZzAplplbbOSvv2WLOoAAG1yRhn//G7NxgM/+uMOsE7k87O9Kal6pTWXT7YWosoiozlBNIWpLTbXvfHYx3dbdpom3C8EeWk5mFFMoLlRwG1iiRZpZ8rboEwUlRo4aiqw5Pw0pbGxXQsPkazWfPH6MzIx0e59akYx0A6dOHJPtF7XZDqxG8oGMa7klHDUUWXI+wJtAdll3fz7Qnoot3pyKFGYchTR/3W707h+Jm05H0X31BvLz81gwdw5t2z+Cv4qvXBUhI93AyRPHKCgwDdfq3N3p2S+iOppwAvgEaaWyioy2zQYWgmlo8BUgGfgU5XVuDiFFlpKRBGBXAoOCGT3xKVYu+d5kf35+HoctVButScZOero6+ydHkNYsXINgJVUzCpF++eXTrcyDhl8ADyHdEczzoUqAPUjRpB5Izq823vrwM+H6Po5G49CmvP7+36v7tJeRMrafQVp53fyZfROpBmFr7nM+iJeOvYS0YscLQBjSK+Id4Ao1uCxqYFAwi9cl8vSoaG5cU71Siio0CgllybpE1QNfNlKKVGNwMVKALxTwQXL+ZRBOwrKaFGpEEsN+pGdNja+J2/rhdmzad4SJzzyHm07tRcsrj87dnSeenUr8viOqxgGqQBaSz35F8qHFnqBdFo+2J4H6ID7717fUb9iIrz77yMTWt6FOccp1VfnlZiF7b5lm5rz02lvMeGemXc9rL2qdAMoQzR0c3Njd2gINqjDzcI5MAA62DlSFUGMGpixRzV2lPH8n9kcNAZjUQdFoNHTvI5tI5MRBUUsA04HrDRo15oMv5tC1Z28VDuukOlCrD/CV0Wick5yL8ppqNUBmYSkrL+YLs5VFBLhrmRDuYVNNw9pOre0E2kpmYSld1t6ucAj7H8dc+X1UUJ0XQd3+64DlF/Iqlb9wIbuYlReVJ2fWduq8AJRWIbHXd2sLdV4AE8I9bapYZk4LX1fG2TAVrrajVh9gukajebN+w0a89PrbPPNCRaLK9sVfp+Xw6GBWXsznYo5t2UwtfFwZH+6Brw1VzWs7agigP/ciTKk3b/DBG9Np36kLj/bso8Kh1cFfp+V58UpdDzxqPAJMFuU1Go384YAxeidi1BDAgfv/o9Fo6PSofIqz2ngJ6guIZiipjWguhK9f7Z30WmtHAkOahcn2/XQx364p6xeyi1l1UV5+L6SpvC21hVo7EtgnYhCubm4m8wXKBn3Gh3sQ7qPuGNeFHGlcwLwkm87dnd4Rdl3Yy67U2pFAP/8Axv/Hsyz7fr7J/szCUuYLVhmzF088M7XaZgDZg1o9DvD63z6mSdNmNXb+0LDmzHh3Zo2dXw1qtQACg4JZuGZTjYggNKw5i36OV3UWcE1QqwUAUp7gxj2HmPTcC9WSJ+im0zH5+Wls2H2QFq3b2P189qZOjAQG6oP4++x5vPXhZ+zdmcS1K8nlVT4P7vuFQ/tNl20JbRZGqNldIyX5MilXTDPdu/Xqy6O9pAGtoPoNCGkaRp/IQbX6mW9OnRoJ9PH1I3rk4yb7Zn8yUyaA5i1a0j9ysMm+3du3yQTQJ3IwM9553z6NdRDUeAT0vf8/RqORg3vlq2U5cUzUEIDswWs+V86J41LrO4FOqkatHQiqCleTk9m3Z5fJvhRBEYoHgQdSABcvnOPihXM13QyHwPkIeMCp8wKo36BRpb9bG6ajV5U6L4DhYydUqlxLs+YtiH18nB1a5FjU+T6Ar58/m/YeJm7NSlIuX7TpO02bt2D4mPF1asTPEnVeACCJ4Mkpz9d0MxySOv8IcGIdpwAecJwCeMBxCuABxymAB5yKzH1qDrwERN/7t/J6Mk6qk1yktZ8SgLmoWMdRg1RLuACp3Jhzc/wtH3hd5MzKMMsB/iDnVrntc4E/K8QYB/gjnFvVNvka9fdhrQ+gAc4ArawdwInDcxJoZ8loTQDdANk03+69+tC7XwT1fJxLwDoSd3Jy2Lt7Bwf37xOZOwNHRQZrr4FdzXc0DWvO0JgRTuc7IPV8fIiKGSFLd7+HfDHie1gTgKzgfeOQ0Eo0zUm1odFY8pHF8uXWBGAw33E9xfHX7XugMRq5Jl5bUbisDIBS9SSTGGpWViZ5+Xk0aNjIWQ/YwcjJyWbH1s2cPnlCZH4fad0AGUpvAaeQVhBxUnux+hagtGDEW6o3x0l1Y9WHSo+A00A9wFn9uXbyOVJcoMq8AeRR86Nazs22LQ94TehJM2wtobkP+AFpcQgfpEig4yza4wSkhb1OIS0a9TTSWoKK/D+36lPwxc1QLgAAAABJRU5ErkJggg==',
                        className: 'float-right',
                        alt: ' not found',
                      }),
                    }),
                    Object(a.jsxs)('div', {
                      className: 'col-6 Fitness-Card-Info',
                      children: [
                        Object(a.jsxs)('p', { children: ['# de Bodega: ', t] }),
                        Object(a.jsxs)('p', { children: ['Descripcion: ', c] }),
                        Object(a.jsxs)('p', { children: ['Encargado: ', n] }),
                        Object(a.jsxs)('p', { children: ['Cantidad de Pasillos: ', r] }),
                      ],
                    }),
                  ],
                }),
              }),
            });
          }),
        V = function (e) {
          var t = Object(n.useState)({
              numBodega: '',
              Description: '',
              Encargado: '',
              CantPasillos: '',
            }),
            c = Object(l.a)(t, 2),
            r = c[0],
            i = c[1];
          return Object(a.jsxs)(E.a, {
            isOpen: e.isOpen,
            className: 'text-center',
            style: { maxWidth: '1700px', width: '80%' },
            children: [
              Object(a.jsx)(k.a, {
                children: Object(a.jsx)('div', {
                  children: Object(a.jsx)('h3', { children: 'CREACION DE BODEGAS' }),
                }),
              }),
              Object(a.jsx)(P.a, {
                children: Object(a.jsxs)('div', {
                  className: 'row',
                  children: [
                    Object(a.jsx)('div', {
                      className: 'col-sm ',
                      children: Object(a.jsx)(Q, Object(A.a)({}, r)),
                    }),
                    Object(a.jsx)('div', {
                      className: 'col-sm',
                      children: Object(a.jsx)(H, {
                        onChange: function (e) {
                          i(
                            Object(A.a)(
                              Object(A.a)({}, r),
                              {},
                              Object(C.a)({}, e.target.name, e.target.value),
                            ),
                          );
                        },
                        form: r,
                      }),
                    }),
                  ],
                }),
              }),
              Object(a.jsxs)(I.a, {
                children: [
                  Object(a.jsx)('button', {
                    className: 'btn btn-primary',
                    children: 'CREAR BODEGA',
                  }),
                  Object(a.jsx)('button', {
                    className: 'btn btn-danger',
                    onClick: e.change,
                    children: 'CANCELAR',
                  }),
                ],
              }),
            ],
          });
        },
        W = function (e) {
          return Object(a.jsxs)(E.a, {
            isOpen: e.isOpen,
            className: 'text-center',
            children: [
              Object(a.jsx)(k.a, {
                children: Object(a.jsx)('div', {
                  children: Object(a.jsx)('h3', { children: 'LISTADO DE BODEGAS ' }),
                }),
              }),
              Object(a.jsx)(P.a, { children: Object(a.jsx)('div', {}) }),
              Object(a.jsx)(I.a, {
                children: Object(a.jsx)('button', {
                  className: 'btn btn-danger',
                  onClick: e.change,
                  children: 'CANCELAR',
                }),
              }),
            ],
          });
        },
        q = function (e) {
          return Object(a.jsxs)(E.a, {
            isOpen: e.isOpen,
            className: 'text-center',
            style: { maxWidth: '1700px', width: '80%' },
            children: [
              Object(a.jsx)(k.a, {
                children: Object(a.jsx)('div', {
                  children: Object(a.jsx)('h3', { children: 'CREACION DE BODEGAS' }),
                }),
              }),
              Object(a.jsx)(P.a, {
                children: Object(a.jsx)('div', {
                  children: Object(a.jsx)(z.a, {
                    responsive: !0,
                    striped: !0,
                    bordered: !0,
                    hover: !0,
                    dark: !0,
                    align: 'center',
                    size: 'sm',
                    id: 'myTable',
                    style: { width: '500px' },
                    children: Object(a.jsx)('thead', {
                      children: Object(a.jsxs)('tr', {
                        children: [
                          Object(a.jsx)('th', { children: '#' }),
                          Object(a.jsx)('th', { children: 'BODEGA' }),
                          Object(a.jsx)('th', { children: 'DESCRIPCION' }),
                          Object(a.jsx)('th', { children: 'ENCARGADO' }),
                          Object(a.jsx)('th', { children: 'CANTIDAD DE PASILLOS' }),
                          Object(a.jsx)('th', { class: 'text-center', children: ' Acci\xf3n' }),
                        ],
                      }),
                    }),
                  }),
                }),
              }),
              Object(a.jsx)(I.a, {
                children: Object(a.jsx)('button', {
                  className: 'btn btn-danger',
                  onClick: e.change,
                  children: 'CANCELAR',
                }),
              }),
            ],
          });
        },
        Y = c.p + 'static/media/CrearBodega.0bed5849.svg',
        Z = (c.p, c.p + 'static/media/EditarBodega.f9e1427f.svg'),
        J = c.p + 'static/media/ConsultarBodega.a348c650.svg',
        K = function () {
          var e = Object(n.useState)(!1),
            t = Object(l.a)(e, 2),
            c = t[0],
            r = t[1],
            i = Object(n.useState)(!1),
            o = Object(l.a)(i, 2),
            s = (o[0], o[1], Object(n.useState)(!1)),
            d = Object(l.a)(s, 2),
            j = d[0],
            u = d[1],
            b = Object(n.useState)(!1),
            h = Object(l.a)(b, 2),
            m = h[0],
            p = h[1],
            v = [
              {
                titulo: 'Crear Bodegas',
                icon: Object(a.jsx)('img', {
                  src: Y,
                  style: {
                    width: '240px',
                    height: 'auto',
                    paddingBottom: '20px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  },
                }),
                to: '/',
                isOpen: function () {
                  return r(!0);
                },
              },
              {
                titulo: 'Modificar/Eliminar Bodegas',
                icon: Object(a.jsx)('img', {
                  src: Z,
                  style: {
                    width: '240px',
                    height: 'auto',
                    paddingBottom: '20px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  },
                }),
                to: '/',
                isOpen: function () {
                  return p(!0);
                },
              },
              {
                titulo: 'Consultar Bodegas',
                icon: Object(a.jsx)('img', {
                  src: J,
                  style: {
                    width: '240px',
                    height: 'auto',
                    paddingBottom: '20px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  },
                }),
                to: '/',
                isOpen: function () {
                  return u(!0);
                },
              },
            ];
          return Object(a.jsxs)(x.a, {
            fluid: 'md',
            style: { padding: '0' },
            children: [
              Object(a.jsx)('h1', {
                style: { textAlign: 'center', paddingTop: '25px' },
                children: 'Bodegas',
              }),
              Object(a.jsx)(V, {
                isOpen: c,
                change: function () {
                  return r(!c);
                },
              }),
              Object(a.jsx)(W, {
                isOpen: j,
                change: function () {
                  return u(!j);
                },
              }),
              Object(a.jsx)(q, {
                isOpen: m,
                change: function () {
                  return p(!m);
                },
              }),
              Object(a.jsx)(O.a, {
                md: '3',
                style: { paddingTop: '25px' },
                children: v.map(function (e, t) {
                  var c = e.titulo,
                    n = e.to,
                    r = e.icon,
                    i = e.isOpen;
                  return Object(a.jsx)(g.a, {
                    children: Object(a.jsx)(N, { titulo: c, to: n, icon: r, isOpen: i }),
                  });
                }),
              }),
            ],
          });
        },
        X = c.p + 'static/media/Informes.0ae88d9c.svg',
        _ = c.p + 'static/media/Productos.47feaf03.svg',
        $ = c.p + 'static/media/Bodegas.99e88f49.svg',
        ee = c.p + 'static/media/Usuario.8cab7b59.svg',
        te = [
          {
            name: 'Productos',
            to: '/Propietario/Productos',
            icon: Object(a.jsx)('img', {
              src: _,
              style: { width: '2em', height: '2em', marginRight: '0.5rem' },
              alt: 'logo',
            }),
          },
          {
            name: 'Usuarios',
            to: '/Propietario/Usuarios',
            icon: Object(a.jsx)('img', {
              src: ee,
              style: { width: '2em', height: '2em', marginRight: '0.5rem' },
            }),
          },
          {
            name: 'Bodegas',
            to: '/Propietario/Bodegas',
            icon: Object(a.jsx)('img', {
              src: $,
              style: { width: '2em', height: '2em', marginRight: '0.5rem' },
              alt: 'logo',
            }),
          },
          {
            name: 'Reportes',
            to: '/EnConstruccion',
            icon: Object(a.jsx)('img', {
              src: X,
              style: { width: '2em', height: '2em', marginRight: '0.5rem' },
              alt: 'logo',
            }),
          },
          {
            name: 'Clientes',
            to: '/Propietario/Clientes',
            icon: Object(a.jsx)('img', {
              src: X,
              style: { width: '2em', height: '2em', marginRight: '0.5rem' },
              alt: 'logo',
            }),
          },
        ],
        ce = function () {
          return Object(a.jsxs)('div', {
            children: [
              Object(a.jsxs)(x.a, {
                fluid: !0,
                style: { padding: '0' },
                children: [
                  Object(a.jsx)(O.a, {
                    noGutters: !0,
                    children: Object(a.jsx)(g.a, { children: Object(a.jsx)(f, { items: te }) }),
                  }),
                  Object(a.jsx)(O.a, { noGutters: !0 }),
                ],
              }),
              Object(a.jsx)('h1', { children: 'Ambiente propietario' }),
            ],
          });
        },
        ae = (c.p, c.p + 'static/media/Facturar.49bbe6fe.svg'),
        ne = c.p + 'static/media/Devolucion.3211f23a.svg',
        re = [
          {
            name: 'Facturar',
            to: '/JefeTienda/Facturar',
            icon: Object(a.jsx)('img', {
              src: ae,
              style: { width: '2em', height: '2em', marginRight: '0.5rem' },
            }),
          },
          {
            name: 'Devoluciones',
            to: '/JefeTienda/Devoluciones',
            icon: Object(a.jsx)('img', {
              src: ne,
              style: { width: '2em', height: '2em', marginRight: '0.5rem' },
            }),
          },
        ],
        ie = function () {
          return Object(a.jsxs)('div', {
            children: [
              Object(a.jsxs)(x.a, {
                fluid: !0,
                style: { padding: '0' },
                children: [
                  Object(a.jsx)(O.a, {
                    noGutters: !0,
                    children: Object(a.jsx)(g.a, { children: Object(a.jsx)(f, { items: re }) }),
                  }),
                  Object(a.jsx)(O.a, { noGutters: !0 }),
                ],
              }),
              Object(a.jsx)('h1', { children: 'Ambiente Jefe De Tienda' }),
            ],
          });
        },
        oe = [
          {
            name: 'Facturar',
            to: '/Vendedor/Facturacion',
            icon: Object(a.jsx)('img', {
              src: ae,
              style: { width: '2em', height: '2em', marginRight: '0.5rem' },
            }),
          },
        ],
        se = function () {
          return Object(a.jsxs)('div', {
            children: [
              Object(a.jsxs)(x.a, {
                fluid: !0,
                style: { padding: '0' },
                children: [
                  Object(a.jsx)(O.a, {
                    noGutters: !0,
                    children: Object(a.jsx)(g.a, { children: Object(a.jsx)(f, { items: oe }) }),
                  }),
                  Object(a.jsx)(O.a, { noGutters: !0 }),
                ],
              }),
              Object(a.jsx)('h1', { children: 'Ambiente Vendedor' }),
            ],
          });
        },
        de = [
          {
            name: 'Facturar',
            to: '/EnConstruccion',
            icon: Object(a.jsx)('img', {
              src: ae,
              style: { width: '2em', height: '2em', marginRight: '0.5rem' },
            }),
          },
        ],
        le = function () {
          return Object(a.jsxs)('div', {
            children: [
              Object(a.jsxs)(x.a, {
                fluid: !0,
                style: { padding: '0' },
                children: [
                  Object(a.jsx)(O.a, {
                    noGutters: !0,
                    children: Object(a.jsx)(g.a, { children: Object(a.jsx)(f, { items: de }) }),
                  }),
                  Object(a.jsx)(O.a, { noGutters: !0 }),
                ],
              }),
              Object(a.jsx)('h1', { children: 'Ambiente Administrador' }),
            ],
          });
        },
        je = [
          {
            name: 'Productos',
            to: '/Propietario/Productos',
            icon: Object(a.jsx)('img', {
              src: _,
              style: { width: '2em', height: '2em', marginRight: '0.5rem' },
              alt: 'logo',
            }),
          },
          {
            name: 'Usuarios',
            to: '/Propietario/Usuarios',
            icon: Object(a.jsx)('img', {
              src: ee,
              style: { width: '2em', height: '2em', marginRight: '0.5rem' },
            }),
          },
          {
            name: 'Bodegas',
            to: '/Propietario/Bodegas',
            icon: Object(a.jsx)('img', {
              src: $,
              style: { width: '2em', height: '2em', marginRight: '0.5rem' },
              alt: 'logo',
            }),
          },
          {
            name: 'Reportes',
            to: '/EnConstruccion',
            icon: Object(a.jsx)('img', {
              src: X,
              style: { width: '2em', height: '2em', marginRight: '0.5rem' },
              alt: 'logo',
            }),
          },
        ],
        ue = function () {
          return Object(a.jsx)('div', {
            children: Object(a.jsxs)(x.a, {
              fluid: !0,
              style: { padding: '0' },
              children: [
                Object(a.jsx)(O.a, {
                  noGutters: !0,
                  children: Object(a.jsx)(g.a, { children: Object(a.jsx)(f, { items: je }) }),
                }),
                Object(a.jsx)(O.a, { noGutters: !0, children: Object(a.jsx)(M, {}) }),
              ],
            }),
          });
        },
        be = [
          {
            name: 'Productos',
            to: '/Propietario/Productos',
            icon: Object(a.jsx)('img', {
              src: _,
              style: { width: '2em', height: '2em', marginRight: '0.5rem' },
              alt: 'logo',
            }),
          },
          {
            name: 'Usuarios',
            to: '/Propietario/Usuarios',
            icon: Object(a.jsx)('img', {
              src: ee,
              style: { width: '2em', height: '2em', marginRight: '0.5rem' },
            }),
          },
          {
            name: 'Bodegas',
            to: '/Propietario/Bodegas',
            icon: Object(a.jsx)('img', {
              src: $,
              style: { width: '2em', height: '2em', marginRight: '0.5rem' },
              alt: 'logo',
            }),
          },
          {
            name: 'Reportes',
            to: '/EnConstruccion',
            icon: Object(a.jsx)('img', {
              src: X,
              style: { width: '2em', height: '2em', marginRight: '0.5rem' },
              alt: 'logo',
            }),
          },
        ],
        he = function () {
          return Object(a.jsx)('div', {
            children: Object(a.jsxs)(x.a, {
              fluid: !0,
              style: { padding: '0' },
              children: [
                Object(a.jsx)(O.a, {
                  noGutters: !0,
                  children: Object(a.jsx)(g.a, { children: Object(a.jsx)(f, { items: be }) }),
                }),
                Object(a.jsx)(O.a, { noGutters: !0, children: Object(a.jsx)(K, {}) }),
              ],
            }),
          });
        },
        me = c.p + 'static/media/CrearUsuario.b0f75f53.svg',
        pe = c.p + 'static/media/EliminarUsuario.172377b6.svg',
        xe = c.p + 'static/media/EditarUsuario.6c17a39b.svg',
        Oe = function () {
          var e = Object(n.useState)(!1),
            t = Object(l.a)(e, 2),
            c = (t[0], t[1]),
            r = [
              {
                titulo: 'Agregar Usuarios',
                icon: Object(a.jsx)('img', {
                  src: me,
                  style: {
                    width: '220px',
                    height: 'auto',
                    paddingBottom: '20px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  },
                }),
                to: '/asd',
                isOpen: function () {
                  return c(!0);
                },
              },
              {
                titulo: 'Eliminar Usuarios',
                icon: Object(a.jsx)('img', {
                  src: pe,
                  style: {
                    width: '220px',
                    height: 'auto',
                    paddingBottom: '20px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  },
                }),
                to: '/asd',
              },
              {
                titulo: 'Modificar Usuarios',
                icon: Object(a.jsx)('img', {
                  src: xe,
                  style: {
                    width: '220px',
                    height: 'auto',
                    paddingBottom: '20px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  },
                }),
                to: '/asd',
              },
            ];
          return Object(a.jsxs)(x.a, {
            children: [
              Object(a.jsx)('h1', {
                style: { textAlign: 'center', paddingTop: '25px' },
                children: 'Usuarios',
              }),
              Object(a.jsxs)(O.a, {
                md: '3',
                style: { paddingTop: '25px' },
                children: [
                  r.map(function (e, t) {
                    var c = e.titulo,
                      n = e.to,
                      r = e.icon,
                      i = e.isOpen;
                    return Object(a.jsx)(g.a, {
                      children: Object(a.jsx)(N, { titulo: c, to: n, icon: r, isOpen: i }),
                    });
                  }),
                  ';',
                ],
              }),
            ],
          });
        },
        ge = [
          {
            name: 'Productos',
            to: '/Propietario/Productos',
            icon: Object(a.jsx)('img', {
              src: _,
              style: { width: '2em', height: '2em', marginRight: '0.5rem' },
              alt: 'logo',
            }),
          },
          {
            name: 'Usuarios',
            to: '/Propietario/Usuarios',
            icon: Object(a.jsx)('img', {
              src: ee,
              style: { width: '2em', height: '2em', marginRight: '0.5rem' },
            }),
          },
          {
            name: 'Bodegas',
            to: '/Propietario/Bodegas',
            icon: Object(a.jsx)('img', {
              src: $,
              style: { width: '2em', height: '2em', marginRight: '0.5rem' },
              alt: 'logo',
            }),
          },
          {
            name: 'Reportes',
            to: '/EnConstruccion',
            icon: Object(a.jsx)('img', {
              src: X,
              style: { width: '2em', height: '2em', marginRight: '0.5rem' },
              alt: 'logo',
            }),
          },
        ],
        ve = function () {
          return Object(a.jsx)('div', {
            children: Object(a.jsxs)(x.a, {
              fluid: !0,
              style: { padding: '0' },
              children: [
                Object(a.jsx)(O.a, {
                  noGutters: !0,
                  children: Object(a.jsx)(g.a, { children: Object(a.jsx)(f, { items: ge }) }),
                }),
                Object(a.jsx)(O.a, { noGutters: !0, children: Object(a.jsx)(Oe, {}) }),
              ],
            }),
          });
        },
        fe = (c(95), c(25)),
        ye = c(18),
        Ne = c(19),
        Ce = c(21),
        Ae = c(20),
        Se =
          (c(96),
          function () {
            var e = Object(n.useState)(''),
              t = Object(l.a)(e, 2),
              c = t[0],
              r = t[1],
              i = Object(n.useState)(''),
              o = Object(l.a)(i, 2),
              s = o[0],
              d = o[1],
              p = Object(n.useState)(''),
              v = Object(l.a)(p, 2),
              f = v[0],
              y = v[1],
              N = Object(n.useState)(''),
              C = Object(l.a)(N, 2),
              A = C[0],
              S = C[1],
              E = Object(n.useState)(''),
              k = Object(l.a)(E, 2),
              P = k[0],
              I = k[1],
              R = Object(n.useState)(''),
              T = Object(l.a)(R, 2),
              U = T[0],
              L = T[1],
              F = Object(n.useState)(''),
              z = Object(l.a)(F, 2),
              G = z[0],
              M = z[1],
              H = Object(n.useState)(''),
              Q = Object(l.a)(H, 2),
              V = Q[0],
              W = Q[1],
              q = Object(n.useState)(''),
              Y = Object(l.a)(q, 2),
              Z = Y[0],
              J = Y[1],
              K = Object(n.useState)(''),
              X = Object(l.a)(K, 2),
              _ = X[0],
              $ = X[1],
              ee = Object(n.useState)(!1),
              te = Object(l.a)(ee, 2),
              ce = te[0],
              ae = te[1],
              ne = Object(n.useState)(!1),
              re = Object(l.a)(ne, 2),
              ie = re[0],
              oe = re[1],
              se = Object(n.useState)(!1),
              de = Object(l.a)(se, 2),
              le = de[0],
              je = de[1],
              ue = Object(n.useState)(!1),
              be = Object(l.a)(ue, 2),
              he = be[0],
              me = be[1],
              pe = Object(n.useState)(!1),
              xe = Object(l.a)(pe, 2),
              Oe = xe[0],
              ge = xe[1],
              ve = Object(n.useState)(!1),
              fe = Object(l.a)(ve, 2),
              ye = fe[0],
              Ne = fe[1],
              Ce = Object(n.useState)(!1),
              Ae = Object(l.a)(Ce, 2),
              Se = Ae[0],
              we = Ae[1],
              Be = Object(n.useState)(!1),
              Ee = Object(l.a)(Be, 2),
              ke = Ee[0],
              Pe = Ee[1],
              Ie = Object(n.useState)(!1),
              Re = Object(l.a)(Ie, 2),
              De = Re[0],
              Te = Re[1],
              Ue = Object(n.useState)(!1),
              Le = Object(l.a)(Ue, 2),
              Fe = Le[0],
              ze = Le[1],
              Ge = Object(n.useState)(!1),
              Me = Object(l.a)(Ge, 2),
              He = Me[0],
              Qe = Me[1],
              Ve = Object(n.useState)(!1),
              We = Object(l.a)(Ve, 2),
              qe = We[0],
              Ye = We[1],
              Ze = Object(n.useState)(!1),
              Je = Object(l.a)(Ze, 2);
            Je[0], Je[1];
            Object(n.useEffect)(function () {
              console.log('Se activ\xf3 por primera vez FormCliente');
            }, []);
            var Ke = function (e) {
                var t = '' === e.value;
                switch (e.name) {
                  case 'primerNombre':
                    r(e.value), ae(!t), oe(t);
                    break;
                  case 'segundoNombre':
                    d(e.value);
                    break;
                  case 'primerApellido':
                    y(e.value), je(!t), me(t);
                    break;
                  case 'segundoApellido':
                    S(e.value);
                    break;
                  case 'correo':
                    I(e.value);
                    break;
                  case 'telefono':
                    L(e.value), ge(!t), Ne(t);
                    break;
                  case 'profesion/oficio':
                    M(e.value);
                    break;
                  case 'id':
                    W(e.value), we(!t), Pe(t);
                    break;
                  case 'rtn':
                    J(e.value), Te(!t), ze(t);
                    break;
                  case 'fecha':
                    $(e.value), Qe(!t), Ye(t);
                }
              },
              Xe = (function () {
                var e = Object(B.a)(
                  w.a.mark(function e() {
                    var t, a;
                    return w.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (t = {
                                cedula: V,
                                nombre: c,
                                segundo_nombre: s,
                                primer_apellido: f,
                                segundo_apellido: A,
                                RTN: Z,
                                tel: U,
                                email: P,
                              }),
                              (e.next = 3),
                              D.a.post('http://localhost:3001/api/clientes', t)
                            );
                          case 3:
                            (a = e.sent), console.log(a);
                          case 5:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })();
            return Object(a.jsx)(a.Fragment, {
              children: Object(a.jsx)('div', {
                children: Object(a.jsx)(x.a, {
                  children: Object(a.jsx)(O.a, {
                    children: Object(a.jsx)(g.a, {
                      children: Object(a.jsxs)(j.a, {
                        id: 'NegocioForm',
                        children: [
                          Object(a.jsx)('h2', {
                            className: 'FormSubtitles',
                            children: 'Datos personales \ud83d\udcc4',
                          }),
                          Object(a.jsx)('hr', {}),
                          Object(a.jsxs)(u.a, {
                            row: !0,
                            children: [
                              Object(a.jsxs)(g.a, {
                                xs: '12',
                                sm: '6',
                                children: [
                                  Object(a.jsx)(b.a, {
                                    className: 'NegocioFormLabel',
                                    children: 'Primer nombre',
                                  }),
                                  Object(a.jsx)(h.a, {
                                    className: 'NegocioFormInput',
                                    name: 'primerNombre',
                                    id: 'primerNombre',
                                    placeholder: 'Juan',
                                    value: c,
                                    valid: ce,
                                    invalid: ie,
                                    onChange: function (e) {
                                      return Ke(e.currentTarget);
                                    },
                                  }),
                                ],
                              }),
                              Object(a.jsxs)(g.a, {
                                xs: '12',
                                sm: '6',
                                children: [
                                  Object(a.jsx)(b.a, {
                                    className: 'NegocioFormLabel',
                                    children: 'Segundo nombre',
                                  }),
                                  Object(a.jsx)(h.a, {
                                    className: 'NegocioFormInput',
                                    name: 'segundoNombre',
                                    id: 'segundoNombre',
                                    placeholder: 'Fernando',
                                    value: s,
                                    onChange: function (e) {
                                      return Ke(e.currentTarget);
                                    },
                                  }),
                                ],
                              }),
                            ],
                          }),
                          Object(a.jsxs)(u.a, {
                            row: !0,
                            children: [
                              Object(a.jsxs)(g.a, {
                                xs: '12',
                                sm: '6',
                                children: [
                                  Object(a.jsx)(b.a, {
                                    className: 'NegocioFormLabel',
                                    children: 'Primer apellido',
                                  }),
                                  Object(a.jsx)(h.a, {
                                    className: 'NegocioFormInput',
                                    name: 'primerApellido',
                                    id: 'primerApellido',
                                    placeholder: 'Per\xe9z',
                                    value: f,
                                    valid: le,
                                    invalid: he,
                                    onChange: function (e) {
                                      return Ke(e.currentTarget);
                                    },
                                  }),
                                ],
                              }),
                              Object(a.jsxs)(g.a, {
                                xs: '12',
                                sm: '6',
                                children: [
                                  Object(a.jsx)(b.a, {
                                    className: 'NegocioFormLabel',
                                    children: 'Segundo apellido',
                                  }),
                                  Object(a.jsx)(h.a, {
                                    className: 'NegocioFormInput',
                                    name: 'segundoApellido',
                                    id: 'segundoApellido',
                                    placeholder: 'L\xf3pez',
                                    value: A,
                                    onChange: function (e) {
                                      return Ke(e.currentTarget);
                                    },
                                  }),
                                ],
                              }),
                            ],
                          }),
                          Object(a.jsx)(u.a, {
                            row: !0,
                            children: Object(a.jsxs)(g.a, {
                              xs: '12',
                              sm: '5',
                              children: [
                                Object(a.jsx)(b.a, {
                                  className: 'NegocioFormLabel',
                                  children: 'Correo electr\xf3nico',
                                }),
                                Object(a.jsx)(h.a, {
                                  className: 'NegocioFormInput',
                                  name: 'correo',
                                  id: 'correo',
                                  placeholder: 'ejemplo@ejemplo.com',
                                  value: P,
                                  onChange: function (e) {
                                    return Ke(e.currentTarget);
                                  },
                                }),
                              ],
                            }),
                          }),
                          Object(a.jsx)(u.a, {
                            row: !0,
                            children: Object(a.jsxs)(g.a, {
                              xs: '12',
                              sm: '5',
                              children: [
                                Object(a.jsx)(b.a, {
                                  className: 'NegocioFormLabel',
                                  children: 'N\xfamero de telefono',
                                }),
                                Object(a.jsx)(h.a, {
                                  className: 'NegocioFormInput',
                                  name: 'telefono',
                                  id: 'telefono',
                                  placeholder: 'n\xfamero de telefono',
                                  value: U,
                                  valid: Oe,
                                  invalid: ye,
                                  onChange: function (e) {
                                    return Ke(e.currentTarget);
                                  },
                                }),
                              ],
                            }),
                          }),
                          Object(a.jsx)(u.a, {
                            row: !0,
                            children: Object(a.jsxs)(g.a, {
                              xs: '12',
                              sm: '8',
                              children: [
                                Object(a.jsx)(b.a, {
                                  className: 'NegocioFormLabel',
                                  children: 'Profesi\xf3n u oficio',
                                }),
                                Object(a.jsx)(h.a, {
                                  className: 'NegocioFormInput',
                                  name: 'profesion/oficio',
                                  id: 'profesion/oficio',
                                  placeholder: 'Profesi\xf3n u oficio',
                                  value: G,
                                  onChange: function (e) {
                                    return Ke(e.currentTarget);
                                  },
                                }),
                              ],
                            }),
                          }),
                          Object(a.jsxs)(u.a, {
                            row: !0,
                            children: [
                              Object(a.jsxs)(g.a, {
                                xs: '12',
                                sm: '6',
                                children: [
                                  Object(a.jsx)(b.a, {
                                    className: 'NegocioFormLabel',
                                    children: 'C\xe9dula de identidad',
                                  }),
                                  Object(a.jsx)(h.a, {
                                    className: 'NegocioFormInput',
                                    name: 'id',
                                    id: 'id',
                                    placeholder: 'ID',
                                    value: V,
                                    valid: Se,
                                    invalid: ke,
                                    onChange: function (e) {
                                      return Ke(e.currentTarget);
                                    },
                                  }),
                                ],
                              }),
                              Object(a.jsxs)(g.a, {
                                xs: '12',
                                sm: '6',
                                children: [
                                  Object(a.jsx)(b.a, {
                                    className: 'NegocioFormLabel',
                                    children: 'RTN',
                                  }),
                                  Object(a.jsx)(h.a, {
                                    className: 'NegocioFormInput',
                                    name: 'rtn',
                                    id: 'rtn',
                                    placeholder: 'rtn',
                                    value: Z,
                                    valid: De,
                                    invalid: Fe,
                                    onChange: function (e) {
                                      return Ke(e.currentTarget);
                                    },
                                  }),
                                ],
                              }),
                            ],
                          }),
                          Object(a.jsx)('h2', {
                            className: 'FormSubtitles',
                            children: 'Fecha de nacimiento \ud83d\uddd3',
                          }),
                          Object(a.jsx)('hr', {}),
                          Object(a.jsx)(u.a, {
                            row: !0,
                            children: Object(a.jsxs)(g.a, {
                              xs: '12',
                              sm: '3',
                              children: [
                                Object(a.jsx)(b.a, {
                                  className: 'NegocioFormLabel',
                                  children: 'Fecha de nacimiento',
                                }),
                                Object(a.jsx)(h.a, {
                                  type: 'date',
                                  className: 'NegocioFormInput',
                                  name: 'fecha',
                                  id: 'fecha',
                                  value: _,
                                  valid: He,
                                  invalid: qe,
                                  onChange: function (e) {
                                    return Ke(e.currentTarget);
                                  },
                                }),
                              ],
                            }),
                          }),
                          Object(a.jsx)(u.a, {
                            row: !0,
                            children: Object(a.jsx)('div', {
                              style: {
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                              },
                            }),
                          }),
                          Object(a.jsx)(m.a, {
                            onClick: function () {
                              Xe();
                            },
                            className: 'danger',
                            children: 'send to db test',
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              }),
            });
          }),
        we = (function (e) {
          Object(Ce.a)(c, e);
          var t = Object(Ae.a)(c);
          function c(e) {
            var a;
            return (
              Object(ye.a)(this, c),
              ((a = t.call(this, e)).toggle = function () {
                a.setState(function (e) {
                  return { modal: !e.modal };
                });
              }),
              (a.state = { modal: !1 }),
              a
            );
          }
          return (
            Object(Ne.a)(c, [
              {
                key: 'render',
                value: function () {
                  var e = Object(a.jsx)('button', {
                      className: 'close',
                      onClick: this.toggle,
                      children: '\xd7',
                    }),
                    t = this.props.buttonLabel,
                    c = '',
                    n = '';
                  return (
                    'Edit' === t
                      ? ((c = Object(a.jsx)(m.a, {
                          color: 'warning',
                          onClick: this.toggle,
                          style: { float: 'left', marginRight: '10px' },
                          children: t,
                        })),
                        (n = 'Editar cliente'))
                      : ((c = Object(a.jsx)(m.a, {
                          color: 'success',
                          onClick: this.toggle,
                          style: { float: 'left', marginRight: '10px' },
                          children: t,
                        })),
                        (n = 'agregar nuevo cliente')),
                    Object(a.jsxs)('div', {
                      children: [
                        c,
                        Object(a.jsxs)(E.a, {
                          isOpen: this.state.modal,
                          toggle: this.toggle,
                          className: this.props.className,
                          children: [
                            Object(a.jsx)(k.a, { toggle: this.toggle, close: e, children: n }),
                            Object(a.jsx)(P.a, {
                              children: Object(a.jsx)(Se, {
                                addItemToState: this.props.addItemToState,
                                updateState: this.props.updateState,
                                toggle: this.toggle,
                                item: this.props.item,
                              }),
                            }),
                          ],
                        }),
                      ],
                    })
                  );
                },
              },
            ]),
            c
          );
        })(n.Component),
        Be = (function (e) {
          Object(Ce.a)(c, e);
          var t = Object(Ae.a)(c);
          function c() {
            var e;
            Object(ye.a)(this, c);
            for (var a = arguments.length, n = new Array(a), r = 0; r < a; r++) n[r] = arguments[r];
            return (
              ((e = t.call.apply(t, [this].concat(n))).deleteItem = (function () {
                var t = Object(B.a)(
                  w.a.mark(function t(c) {
                    return w.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (!window.confirm('borrar el cliente para siempre?')) {
                              t.next = 4;
                              break;
                            }
                            return (
                              (t.next = 4),
                              D.a.delete('http://localhost:3001/api/clientes/'.concat(c))
                            );
                          case 4:
                            e.props.deleteItemFromState(c);
                          case 5:
                          case 'end':
                            return t.stop();
                        }
                    }, t);
                  }),
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })()),
              e
            );
          }
          return (
            Object(Ne.a)(c, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props.items.map(function (t) {
                      return Object(a.jsxs)(
                        'tr',
                        {
                          children: [
                            Object(a.jsx)('th', { scope: 'row', children: t.cedula }),
                            Object(a.jsx)('td', { children: t.nombre }),
                            Object(a.jsx)('td', { children: t.primer_apellido }),
                            Object(a.jsx)('td', { children: t.email }),
                            Object(a.jsx)('td', { children: t.tel }),
                            Object(a.jsx)('td', {
                              children: Object(a.jsxs)('div', {
                                style: { width: '110px' },
                                children: [
                                  Object(a.jsx)(we, {
                                    buttonLabel: 'Edit',
                                    item: t,
                                    updateState: e.props.updateState,
                                  }),
                                  ' ',
                                  Object(a.jsx)(m.a, {
                                    color: 'danger',
                                    onClick: function () {
                                      return e.deleteItem(t._id);
                                    },
                                    children: 'Del',
                                  }),
                                ],
                              }),
                            }),
                          ],
                        },
                        t._id,
                      );
                    });
                  return Object(a.jsxs)(z.a, {
                    responsive: !0,
                    hover: !0,
                    children: [
                      Object(a.jsx)('thead', {
                        children: Object(a.jsxs)('tr', {
                          children: [
                            Object(a.jsx)('th', { children: 'ID' }),
                            Object(a.jsx)('th', { children: 'First' }),
                            Object(a.jsx)('th', { children: 'Last' }),
                            Object(a.jsx)('th', { children: 'Email' }),
                            Object(a.jsx)('th', { children: 'tel' }),
                            Object(a.jsx)('th', { children: 'Acciones' }),
                          ],
                        }),
                      }),
                      Object(a.jsx)('tbody', { children: t }),
                    ],
                  });
                },
              },
            ]),
            c
          );
        })(n.Component),
        Ee = (function (e) {
          Object(Ce.a)(c, e);
          var t = Object(Ae.a)(c);
          function c() {
            var e;
            Object(ye.a)(this, c);
            for (var a = arguments.length, n = new Array(a), r = 0; r < a; r++) n[r] = arguments[r];
            return (
              ((e = t.call.apply(t, [this].concat(n))).state = { items: [] }),
              (e.getItems = Object(B.a)(
                w.a.mark(function t() {
                  var c;
                  return w.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), D.a.get('http://localhost:3001/api/clientes');
                        case 2:
                          (c = t.sent), e.setState({ items: c.data });
                        case 4:
                        case 'end':
                          return t.stop();
                      }
                  }, t);
                }),
              )),
              (e.addItemToState = function (t) {
                e.setState(function (e) {
                  return { items: [].concat(Object(fe.a)(e.items), [t]) };
                });
              }),
              (e.updateState = function (t) {
                var c = e.state.items.findIndex(function (e) {
                    return e._id === t._id;
                  }),
                  a = [].concat(
                    Object(fe.a)(e.state.items.slice(0, c)),
                    [t],
                    Object(fe.a)(e.state.items.slice(c + 1)),
                  );
                e.setState({ items: a });
              }),
              (e.deleteItemFromState = function (t) {
                var c = e.state.items.filter(function (e) {
                  return e.id !== t;
                });
                e.setState({ items: c });
              }),
              e
            );
          }
          return (
            Object(Ne.a)(c, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.getItems();
                },
              },
              {
                key: 'render',
                value: function () {
                  return Object(a.jsxs)(x.a, {
                    className: 'MainTable',
                    children: [
                      Object(a.jsx)(O.a, {
                        children: Object(a.jsx)(g.a, {
                          children: Object(a.jsx)('h1', {
                            style: { margin: '20px 0' },
                            children: 'Clientes',
                          }),
                        }),
                      }),
                      Object(a.jsx)(O.a, {
                        children: Object(a.jsx)(g.a, {
                          children: Object(a.jsx)(Be, {
                            items: this.state.items,
                            updateState: this.updateState,
                            deleteItemFromState: this.deleteItemFromState,
                          }),
                        }),
                      }),
                      Object(a.jsx)(O.a, {
                        children: Object(a.jsx)(g.a, {
                          children: Object(a.jsx)(we, {
                            buttonLabel: 'Add Item',
                            addItemToState: this.addItemToState,
                          }),
                        }),
                      }),
                    ],
                  });
                },
              },
            ]),
            c
          );
        })(n.Component),
        ke = [
          {
            name: 'Productos',
            to: '/Propietario/Productos',
            icon: Object(a.jsx)('img', {
              src: _,
              style: { width: '2em', height: '2em', marginRight: '0.5rem' },
              alt: 'logo',
            }),
          },
          {
            name: 'Usuarios',
            to: '/Propietario/Usuarios',
            icon: Object(a.jsx)('img', {
              src: ee,
              style: { width: '2em', height: '2em', marginRight: '0.5rem' },
            }),
          },
          {
            name: 'Bodegas',
            to: '/Propietario/Bodegas',
            icon: Object(a.jsx)('img', {
              src: $,
              style: { width: '2em', height: '2em', marginRight: '0.5rem' },
              alt: 'logo',
            }),
          },
          {
            name: 'Reportes',
            to: '/EnConstruccion',
            icon: Object(a.jsx)('img', {
              src: X,
              style: { width: '2em', height: '2em', marginRight: '0.5rem' },
              alt: 'logo',
            }),
          },
        ],
        Pe = function () {
          return Object(a.jsxs)('div', {
            children: [
              Object(a.jsxs)(x.a, {
                fluid: !0,
                style: { padding: '0' },
                children: [
                  Object(a.jsx)(O.a, {
                    noGutters: !0,
                    children: Object(a.jsx)(g.a, { children: Object(a.jsx)(f, { items: ke }) }),
                  }),
                  Object(a.jsx)(O.a, { noGutters: !0 }),
                ],
              }),
              Object(a.jsx)('h1', { children: 'Ambiente propietario clientes' }),
              Object(a.jsx)(Ee, {}),
            ],
          });
        },
        Ie = c(13),
        Re = c(27),
        De =
          (c(48),
          (function (e) {
            Object(Ce.a)(c, e);
            var t = Object(Ae.a)(c);
            function c(e) {
              var a;
              return (
                Object(ye.a)(this, c),
                ((a = t.call(this, e)).write = Object(B.a)(
                  w.a.mark(function e() {
                    var t;
                    return w.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (t = {
                                nombreCliente: a.state.nombreCliente,
                                identificacion: a.state.identificacion,
                                razonDevolucion: a.state.razonDevolucion,
                                Estado: a.state.Estado,
                                LugarDevolucion: a.state.LugarDevolucion,
                                productosDevueltos: a.state.productosDevolucion,
                              }),
                              (e.next = 3),
                              D.a.post('http://localhost:3001/api/devoluciones', t)
                            );
                          case 3:
                            window.location.reload();
                          case 4:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                (a.componentDidMount = Object(B.a)(
                  w.a.mark(function e() {
                    return w.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), a.getProductos();
                          case 2:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                (a.getProductos = Object(B.a)(
                  w.a.mark(function e() {
                    return w.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              D.a
                                .get('http://localhost:3001/api/productos')
                                .then(function (e) {
                                  for (var t = e.data, c = [], n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    c.push({
                                      indice: 0,
                                      name: r.nombre,
                                      value: r._id,
                                      codigos: r.codigos,
                                      proveedores: r.proveedores,
                                      precios: r.precios,
                                      area: r.area,
                                      ubicacion: r.ubicacion,
                                      marca: r.marca,
                                      _v: r._v,
                                      cantidad: r.cantidad,
                                      precioUnitario: 0,
                                      precioSumado: 0,
                                    });
                                  }
                                  var i = a.state;
                                  (i.productosEnBodega = c), a.setState(i);
                                })
                                .catch(function () {
                                  alert('Error');
                                })
                            );
                          case 2:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                (a.updateTool = (function () {
                  var e = Object(B.a)(
                    w.a.mark(function e(t) {
                      var c, n, r;
                      return w.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              (c = 0), (n = 0);
                            case 2:
                              if (!(n < a.state.productosEnBodega.length)) {
                                e.next = 10;
                                break;
                              }
                              if ((r = a.state.productosEnBodega[n]).value !== t) {
                                e.next = 7;
                                break;
                              }
                              return (
                                (c =
                                  Number(r.cantidad) +
                                  Number(a.state.productoSeleccionado.cantidad)),
                                e.abrupt('break', 10)
                              );
                            case 7:
                              n++, (e.next = 2);
                              break;
                            case 10:
                              D.a.put('http://localhost:3001/api/productos/'.concat(t), {
                                cantidad: c,
                              });
                            case 11:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    }),
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })()),
                (a.eliminarProducto = (function () {
                  var e = Object(B.a)(
                    w.a.mark(function e(t, c) {
                      var n, r, i, o, s;
                      return w.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (a.state.indice = 1), (n = 0), (e.next = 4), a.getProductos();
                            case 4:
                              r = 0;
                            case 5:
                              if (!(r < a.state.productosEnBodega.length)) {
                                e.next = 13;
                                break;
                              }
                              if ((i = a.state.productosEnBodega[r]).value !== t) {
                                e.next = 10;
                                break;
                              }
                              return (n = Number(i.cantidad) - Number(c)), e.abrupt('break', 13);
                            case 10:
                              r++, (e.next = 5);
                              break;
                            case 13:
                              D.a.put('http://localhost:3001/api/productos/'.concat(t), {
                                cantidad: n,
                              }),
                                (o = a.state.productosDevolucion.filter(function (e) {
                                  return e.value !== t;
                                })),
                                ((s = a.state).productosDevolucion = o),
                                a.setState(s);
                            case 18:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    }),
                  );
                  return function (t, c) {
                    return e.apply(this, arguments);
                  };
                })()),
                (a.addRow = a.addRow.bind(Object(Ie.a)(a))),
                (a.handleChange = a.handleChange.bind(Object(Ie.a)(a))),
                (a.b = a.b.bind(Object(Ie.a)(a))),
                (a.agregarProductoaTabla = a.agregarProductoaTabla.bind(Object(Ie.a)(a))),
                (a.handleQuantityChange = a.handleQuantityChange.bind(Object(Ie.a)(a))),
                (a.eliminarProducto = a.eliminarProducto.bind(Object(Ie.a)(a))),
                (a.state = {
                  productosDevolucion: [],
                  indice: 1,
                  quantity: 1,
                  productosEnBodega: [],
                  productoSeleccionado: [],
                  nombreCliente: '',
                  identificacion: '',
                  razonDevolucion: '',
                  Estado: '',
                  LugarDevolucion: '',
                }),
                a
              );
            }
            return (
              Object(Ne.a)(c, [
                {
                  key: 'addRow',
                  value: function (e) {
                    this.state.indice = 1;
                    var t = this.state;
                    t.productosDevolucion.push(e), this.setState(t);
                  },
                },
                {
                  key: 'b',
                  value: function (e) {
                    var t = this;
                    (this.state.indice = 1),
                      this.state.productosEnBodega.filter(function (c) {
                        return (
                          c.value === e &&
                            (t.state.productoSeleccionado = {
                              name: c.name,
                              value: c.value,
                              codigo: c.codigos,
                              cantidad: 1,
                              precioUnitario: c.precioUnitario,
                              precioSumado: c.precioSumado,
                            }),
                          0
                        );
                      });
                  },
                },
                {
                  key: 'handleChange',
                  value: function (e) {
                    (this.state.indice = 1), this.b(e);
                  },
                },
                {
                  key: 'handleQuantityChange',
                  value: function (e) {
                    this.state.indice = 1;
                    var t = this.state;
                    (t.quantity = e.target.value),
                      (t.productoSeleccionado.cantidad = t.quantity),
                      this.setState(t);
                  },
                },
                {
                  key: 'agregarProductoaTabla',
                  value: function () {
                    (this.state.indice = 1),
                      this.addRow({
                        name: this.state.productoSeleccionado.name,
                        codigo: this.state.productoSeleccionado.codigo,
                        cantidad: this.state.productoSeleccionado.cantidad,
                        value: this.state.productoSeleccionado.value,
                      }),
                      this.updateTool(this.state.productoSeleccionado.value);
                    var e = this.state;
                    (e.quantity = 1), this.setState(e);
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var e = this;
                    return Object(a.jsxs)('div', {
                      align: 'center',
                      children: [
                        Object(a.jsx)('h1', { align: 'center', children: 'DEVOLUCIONES' }),
                        Object(a.jsxs)('div', {
                          style: { display: 'inline-block', position: 'relative', width: '100%' },
                          children: [
                            Object(a.jsx)('div', {
                              align: 'center',
                              children: Object(a.jsx)(Re.a, {
                                options: this.state.productosEnBodega,
                                search: !0,
                                placeholder: 'Encuentre el Producto',
                                onChange: this.handleChange.bind(this),
                              }),
                            }),
                            Object(a.jsxs)('div', {
                              align: 'center',
                              children: [
                                Object(a.jsx)('h4', {
                                  style: { display: 'inline', float: 'center' },
                                  children: 'Cantidad:',
                                }),
                                Object(a.jsx)('input', {
                                  style: { float: 'center', marginLeft: '5px' },
                                  type: 'number',
                                  value: this.state.quantity,
                                  onChange: this.handleQuantityChange.bind(this),
                                }),
                                Object(a.jsx)(m.a, {
                                  style: { marginRight: '20px' },
                                  onClick: this.agregarProductoaTabla,
                                  children: 'Agregar',
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(a.jsx)('div', {
                          style: { maxHeight: '300px', overflowY: 'auto' },
                          children: Object(a.jsxs)(z.a, {
                            height: '50',
                            responsive: 'sm',
                            striped: !0,
                            bordered: !0,
                            hover: !0,
                            dark: !0,
                            align: 'center',
                            size: 'sm',
                            style: { 'padding-top': '500px' },
                            children: [
                              Object(a.jsx)('thead', {
                                children: Object(a.jsxs)('tr', {
                                  children: [
                                    Object(a.jsx)('td', {
                                      classname: 'channel-name',
                                      children: '#',
                                    }),
                                    Object(a.jsx)('td', {
                                      classname: 'channel-name',
                                      children: 'Nombre Producto',
                                    }),
                                    Object(a.jsx)('td', {
                                      classname: 'channel-description',
                                      children: 'Codigo',
                                    }),
                                    Object(a.jsx)('td', {
                                      classname: 'channel-description',
                                      children: 'Cantidad',
                                    }),
                                  ],
                                }),
                              }),
                              Object(a.jsx)('tbody', {
                                children: this.state.productosDevolucion.map(function (t) {
                                  return Object(a.jsxs)('tr', {
                                    children: [
                                      Object(a.jsx)('th', { children: e.state.indice++ }),
                                      Object(a.jsx)('th', { children: t.name }),
                                      Object(a.jsx)('th', { children: t.codigo[0] }),
                                      Object(a.jsx)('th', { children: t.cantidad }),
                                      Object(a.jsx)('th', {
                                        children: Object(a.jsx)(m.a, {
                                          style: { marginLeft: '10px' },
                                          classname: 'btn btn-danger',
                                          onClick: function () {
                                            return e.eliminarProducto(t.value, t.cantidad);
                                          },
                                          children: 'Eliminar',
                                        }),
                                      }),
                                    ],
                                  });
                                }),
                              }),
                            ],
                          }),
                        }),
                        Object(a.jsxs)(j.a, {
                          style: {
                            'padding-top': '10px',
                            height: '36px',
                            width: '500px',
                            'text-align': 'left',
                          },
                          children: [
                            Object(a.jsxs)(O.a, {
                              form: !0,
                              children: [
                                Object(a.jsx)(g.a, {
                                  md: 6,
                                  children: Object(a.jsxs)(u.a, {
                                    children: [
                                      Object(a.jsx)(b.a, {
                                        for: 'examplenameCliente',
                                        children: 'Nombre del Cliente',
                                      }),
                                      Object(a.jsx)(h.a, {
                                        type: 'text',
                                        name: 'text',
                                        id: 'examplenameCliente',
                                        placeholder: 'Nombre del Cliente',
                                        value: this.state.nombreCliente,
                                        onChange: function (t) {
                                          return e.setState({
                                            nombreCliente: t.target.value,
                                            indice: 1,
                                          });
                                        },
                                      }),
                                    ],
                                  }),
                                }),
                                Object(a.jsx)(g.a, {
                                  md: 6,
                                  children: Object(a.jsxs)(u.a, {
                                    children: [
                                      Object(a.jsx)(b.a, {
                                        for: 'exampleIdentificacion',
                                        children: 'Identificacion',
                                      }),
                                      Object(a.jsx)(h.a, {
                                        type: 'text',
                                        name: 'text',
                                        id: 'exampleIdentificacion',
                                        onChange: function (t) {
                                          return e.setState({
                                            identificacion: t.target.value,
                                            indice: 1,
                                          });
                                        },
                                        placeholder: 'Identificacion del Cliente',
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                            Object(a.jsxs)(u.a, {
                              row: !0,
                              align: 'center',
                              children: [
                                Object(a.jsx)(b.a, {
                                  for: 'exampleText',
                                  sm: 5,
                                  children: 'Razon de Devolucion',
                                }),
                                Object(a.jsx)(g.a, {
                                  sm: 12,
                                  children: Object(a.jsx)(h.a, {
                                    onChange: function (t) {
                                      return e.setState({
                                        razonDevolucion: t.target.value,
                                        indice: 1,
                                      });
                                    },
                                    type: 'textarea',
                                    name: 'text',
                                    id: 'exampleText',
                                  }),
                                }),
                              ],
                            }),
                            Object(a.jsx)(u.a, { row: !0 }),
                            Object(a.jsxs)(u.a, {
                              tag: 'fieldset',
                              row: !0,
                              children: [
                                Object(a.jsx)('legend', {
                                  classname: 'col-form-label col-sm-2',
                                  children: 'Estado',
                                }),
                                Object(a.jsxs)(g.a, {
                                  style: { display: 'inline', float: 'center' },
                                  sm: 10,
                                  children: [
                                    Object(a.jsxs)(u.a, {
                                      check: !0,
                                      children: [
                                        Object(a.jsxs)(b.a, {
                                          check: !0,
                                          children: [
                                            Object(a.jsx)(h.a, {
                                              onChange: function (t) {
                                                return e.setState({ Estado: 'Nuevo', indice: 1 });
                                              },
                                              type: 'radio',
                                              name: 'radio2',
                                            }),
                                            ' ',
                                            'Nuevo',
                                          ],
                                        }),
                                        Object(a.jsxs)(b.a, {
                                          style: { marginLeft: '25px' },
                                          check: !0,
                                          children: [
                                            Object(a.jsx)(h.a, {
                                              onChange: function (t) {
                                                return e.setState({ Estado: 'Usado', indice: 1 });
                                              },
                                              type: 'radio',
                                              name: 'radio2',
                                            }),
                                            ' ',
                                            'Usado',
                                          ],
                                        }),
                                        Object(a.jsxs)(b.a, {
                                          style: { marginLeft: '25px' },
                                          check: !0,
                                          children: [
                                            Object(a.jsx)(h.a, {
                                              onChange: function (t) {
                                                return e.setState({
                                                  Estado: 'Defectuoso',
                                                  indice: 1,
                                                });
                                              },
                                              type: 'radio',
                                              name: 'radio2',
                                            }),
                                            'Defectuoso',
                                          ],
                                        }),
                                      ],
                                    }),
                                    Object(a.jsxs)(u.a, {
                                      row: !0,
                                      children: [
                                        Object(a.jsx)('legend', {
                                          classname: 'col-form-label col-sm-2',
                                          children: 'Checkbox',
                                        }),
                                        Object(a.jsxs)(g.a, {
                                          style: {
                                            display: 'inline',
                                            float: 'center',
                                            marginRight: '25px',
                                          },
                                          sm: 10,
                                          children: [
                                            Object(a.jsxs)(u.a, {
                                              check: !0,
                                              children: [
                                                Object(a.jsxs)(b.a, {
                                                  check: !0,
                                                  children: [
                                                    Object(a.jsx)(h.a, {
                                                      onChange: function (t) {
                                                        return e.setState({
                                                          LugarDevolucion: 'Tienda',
                                                          indice: 1,
                                                        });
                                                      },
                                                      type: 'checkbox',
                                                      id: 'checkbox2',
                                                    }),
                                                    ' ',
                                                    'Tienda',
                                                  ],
                                                }),
                                                Object(a.jsxs)(b.a, {
                                                  style: { marginLeft: '25px' },
                                                  check: !0,
                                                  children: [
                                                    Object(a.jsx)(h.a, {
                                                      onChange: function (t) {
                                                        return e.setState({
                                                          LugarDevolucion: 'Bodega',
                                                          indice: 1,
                                                        });
                                                      },
                                                      type: 'checkbox',
                                                      id: 'checkbox1',
                                                    }),
                                                    ' ',
                                                    'Bodega',
                                                  ],
                                                }),
                                              ],
                                            }),
                                            Object(a.jsx)(m.a, {
                                              color: 'primary',
                                              style: {
                                                width: '100px',
                                                height: '50px',
                                                'font-weight': 'bold',
                                                position: 'absolute',
                                                marginLeft: '350px',
                                                top: '-40px',
                                              },
                                              onClick: this.write,
                                              children: 'Devolver',
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    });
                  },
                },
              ]),
              c
            );
          })(n.Component)),
        Te = [
          {
            name: 'Facturar',
            to: '/JefeTienda/Facturar',
            icon: Object(a.jsx)('img', {
              src: ae,
              style: { width: '2em', height: '2em', marginRight: '0.5rem' },
            }),
          },
          {
            name: 'Devoluciones',
            to: '/JefeTienda/Devoluciones',
            icon: Object(a.jsx)('img', {
              src: ne,
              style: { width: '2em', height: '2em', marginRight: '0.5rem' },
            }),
          },
        ],
        Ue = function () {
          return Object(a.jsx)('div', {
            children: Object(a.jsxs)(x.a, {
              fluid: !0,
              style: { padding: '0' },
              children: [
                Object(a.jsx)(O.a, {
                  noGutters: !0,
                  children: Object(a.jsx)(g.a, { children: Object(a.jsx)(f, { items: Te }) }),
                }),
                Object(a.jsx)(De, {}),
              ],
            }),
          });
        },
        Le = (function (e) {
          Object(Ce.a)(c, e);
          var t = Object(Ae.a)(c);
          function c(e) {
            var a;
            return (
              Object(ye.a)(this, c),
              ((a = t.call(this, e)).componentDidMount = Object(B.a)(
                w.a.mark(function e() {
                  return w.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), a.getProductos();
                        case 2:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              )),
              (a.getProductos = Object(B.a)(
                w.a.mark(function e() {
                  return w.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            D.a
                              .get('http://localhost:3001/api/productos')
                              .then(function (e) {
                                for (var t = e.data, c = [], n = 0; n < t.length; n++) {
                                  var r = t[n];
                                  c.push({
                                    indice: 0,
                                    name: r.nombre,
                                    value: r._id,
                                    codigos: r.codigos,
                                    proveedores: r.proveedores,
                                    precios: r.precios,
                                    area: r.area,
                                    ubicacion: r.ubicacion,
                                    marca: r.marca,
                                    _v: r._v,
                                    cantidad: r.cantidad,
                                    precioUnitario: r.precios,
                                    precioSumado: 0,
                                  });
                                }
                                var i = a.state;
                                (i.productosEnBodega = c), a.setState(i);
                              })
                              .catch(function () {
                                alert('Error');
                              })
                          );
                        case 2:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              )),
              (a.segundoPrecio = function (e) {
                var t = a.state;
                a.state.indice = 1;
                for (var c = 0; c < t.productosSeleccionado.length; c++) {
                  var n = t.productosSeleccionado[c];
                  if (n.codigo === e)
                    for (var r = 0; r < t.productosEnBodega.length; r++) {
                      var i = t.productosEnBodega[r];
                      if (n.codigo === i.codigos[0]) {
                        if (n.precioUnitario !== i.precioUnitario[1]) {
                          (n.precioUnitario = i.precioUnitario[1]),
                            (n.precioSumado = n.cantidad * n.precioUnitario),
                            a.setState(t),
                            alert('Segundo Precio Aplicado');
                          break;
                        }
                        alert('El segundo precio ya fue aplicado');
                        break;
                      }
                    }
                }
              }),
              (a.write = Object(B.a)(
                w.a.mark(function e() {
                  var t;
                  return w.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            '\r\n',
                            (t = {
                              subtotal: a.state.result,
                              impuesto: a.state.impuesto,
                              total: a.state.total,
                              productosSeleccionado: a.state.productosSeleccionado,
                            }),
                            (e.next = 4),
                            D.a.post('http://localhost:3001/api/facturas', t)
                          );
                        case 4:
                          window.location.reload();
                        case 5:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              )),
              (a.updateTool = (function () {
                var e = Object(B.a)(
                  w.a.mark(function e(t) {
                    var c, n, r;
                    return w.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            (c = 0), (n = 0);
                          case 2:
                            if (!(n < a.state.productosEnBodega.length)) {
                              e.next = 10;
                              break;
                            }
                            if ((r = a.state.productosEnBodega[n]).value !== t) {
                              e.next = 7;
                              break;
                            }
                            return (
                              (c =
                                Number(r.cantidad) - Number(a.state.productoSeleccionado.cantidad)),
                              e.abrupt('break', 10)
                            );
                          case 7:
                            n++, (e.next = 2);
                            break;
                          case 10:
                            D.a.put('http://localhost:3001/api/productos/'.concat(t), {
                              cantidad: c,
                            });
                          case 11:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (a.eliminarProducto = (function () {
                var e = Object(B.a)(
                  w.a.mark(function e(t, c) {
                    var n, r, i, o, s;
                    return w.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (n = 0), (e.next = 3), a.getProductos();
                          case 3:
                            r = 0;
                          case 4:
                            if (!(r < a.state.productosEnBodega.length)) {
                              e.next = 12;
                              break;
                            }
                            if ((i = a.state.productosEnBodega[r]).value !== t) {
                              e.next = 9;
                              break;
                            }
                            return (n = Number(i.cantidad) + Number(c)), e.abrupt('break', 12);
                          case 9:
                            r++, (e.next = 4);
                            break;
                          case 12:
                            D.a.put('http://localhost:3001/api/productos/'.concat(t), {
                              cantidad: n,
                            }),
                              (o = a.state.productosSeleccionado.filter(function (e) {
                                return e.value !== t;
                              })),
                              (s = a.state),
                              (a.state.result = 0),
                              (a.state.indice = 1),
                              (a.state.impuesto = 0),
                              (a.state.total = 0),
                              (s.productosSeleccionado = o),
                              a.setState(s);
                          case 21:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                return function (t, c) {
                  return e.apply(this, arguments);
                };
              })()),
              (a.addRow = a.addRow.bind(Object(Ie.a)(a))),
              (a.handleChange = a.handleChange.bind(Object(Ie.a)(a))),
              (a.segundoPrecio = a.segundoPrecio.bind(Object(Ie.a)(a))),
              (a.handleQuantityChange = a.handleQuantityChange.bind(Object(Ie.a)(a))),
              (a.agregarProductoaTabla = a.agregarProductoaTabla.bind(Object(Ie.a)(a))),
              (a.eliminarProducto = a.eliminarProducto.bind(Object(Ie.a)(a))),
              (a.state = {
                subtotal: 0,
                total: 0,
                impuesto: 0,
                indice: 1,
                result: 0,
                precios: [],
                quantity: 1,
                productosDevolucion: [],
                productosEnBodega: [
                  {
                    indice: 0,
                    name: '',
                    value: '',
                    codigo: '',
                    cantidad: 0,
                    precioUnitario: 0,
                    precioSumado: 0,
                  },
                ],
                productoSeleccionado: [],
                productosSeleccionado: [],
              }),
              a
            );
          }
          return (
            Object(Ne.a)(c, [
              {
                key: 'addRow',
                value: function (e) {
                  var t = this.state;
                  t.productosSeleccionado.push(e), this.setState(t);
                },
              },
              {
                key: 'b',
                value: function (e) {
                  var t = this;
                  this.state.productosEnBodega.filter(function (c) {
                    return (
                      c.value === e &&
                        (t.state.productoSeleccionado = {
                          name: c.name,
                          value: c.value,
                          codigo: c.codigos[0],
                          cantidad: 1,
                          precioUnitario: c.precioUnitario[0],
                          precioSumado: c.precioSumado,
                        }),
                      0
                    );
                  });
                },
              },
              {
                key: 'handleChange',
                value: function (e) {
                  (this.state.indice = 1), this.b(e);
                },
              },
              {
                key: 'handleQuantityChange',
                value: function (e) {
                  this.state.indice = 1;
                  var t = this.state;
                  (t.quantity = e.target.value),
                    (t.productoSeleccionado.cantidad = t.quantity),
                    this.setState(t);
                },
              },
              {
                key: 'agregarProductoaTabla',
                value: function () {
                  (this.state.indice = 1),
                    this.addRow({
                      name: this.state.productoSeleccionado.name,
                      value: this.state.productoSeleccionado.value,
                      codigo: this.state.productoSeleccionado.codigo,
                      cantidad: this.state.productoSeleccionado.cantidad,
                      precioUnitario: Number(this.state.productoSeleccionado.precioUnitario),
                      precioSumado:
                        this.state.productoSeleccionado.cantidad *
                        this.state.productoSeleccionado.precioUnitario,
                    }),
                    this.updateTool(this.state.productoSeleccionado.value);
                  var e = this.state;
                  (e.quantity = 1), this.setState(e);
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this;
                  return (
                    (this.state.result = this.state.productosSeleccionado.reduce(function (e, t) {
                      return e + t.precioSumado;
                    }, 0)),
                    (this.state.impuesto = 0.15 * this.state.result),
                    (this.state.total = this.state.result + this.state.impuesto),
                    Object(a.jsxs)('div', {
                      children: [
                        Object(a.jsx)('h1', { align: 'center', children: 'FACTURA' }),
                        Object(a.jsxs)('div', {
                          style: { display: 'inline-block', position: 'relative', width: '100%' },
                          children: [
                            Object(a.jsx)('div', {
                              align: 'center',
                              children: Object(a.jsx)(Re.a, {
                                search: !0,
                                placeholder: 'Encuentre el Producto a Facturar',
                                options: this.state.productosEnBodega,
                                onChange: this.handleChange,
                              }),
                            }),
                            Object(a.jsxs)('div', {
                              align: 'center',
                              children: [
                                Object(a.jsx)('h4', {
                                  style: { display: 'inline', float: 'center' },
                                  children: 'Cantidad:',
                                }),
                                Object(a.jsx)('input', {
                                  style: { float: 'center', marginLeft: '5px' },
                                  type: 'number',
                                  value: this.state.quantity,
                                  onChange: this.handleQuantityChange.bind(this),
                                }),
                                Object(a.jsx)(m.a, {
                                  style: { marginRight: '20px' },
                                  onClick: this.agregarProductoaTabla,
                                  children: 'Agregar',
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(a.jsx)('div', {
                          style: { maxHeight: '450px', overflowY: 'auto' },
                          children: Object(a.jsxs)(z.a, {
                            height: '50',
                            responsive: 'sm',
                            striped: !0,
                            bordered: !0,
                            hover: !0,
                            dark: !0,
                            align: 'center',
                            size: 'sm',
                            children: [
                              Object(a.jsx)('thead', {
                                children: Object(a.jsxs)('tr', {
                                  children: [
                                    Object(a.jsx)('th', { children: '#' }),
                                    Object(a.jsx)('th', { children: 'Nombre Producto' }),
                                    Object(a.jsx)('th', { children: 'Codigo' }),
                                    Object(a.jsx)('th', { children: 'Cantidad' }),
                                    Object(a.jsx)('th', { children: 'Precio Unitario' }),
                                    Object(a.jsx)('th', { children: 'Precio Sumado' }),
                                  ],
                                }),
                              }),
                              Object(a.jsx)('tbody', {
                                children: this.state.productosSeleccionado.map(function (t, c) {
                                  return Object(a.jsxs)(
                                    'tr',
                                    {
                                      children: [
                                        Object(a.jsx)('th', { children: e.state.indice++ }),
                                        Object(a.jsx)('th', { children: t.name }),
                                        Object(a.jsx)('th', { children: t.codigo }),
                                        Object(a.jsx)('th', { children: t.cantidad }),
                                        Object(a.jsx)('th', { children: t.precioUnitario }),
                                        Object(a.jsx)('th', { children: t.precioSumado }),
                                        Object(a.jsxs)('th', {
                                          children: [
                                            Object(a.jsx)(m.a, {
                                              onClick: function () {
                                                return e.segundoPrecio(t.codigo);
                                              },
                                              children: 'Autorizar 2do Precio',
                                            }),
                                            Object(a.jsx)(m.a, {
                                              style: { marginLeft: '10px' },
                                              className: 'btn btn-danger',
                                              onClick: function () {
                                                return e.eliminarProducto(t.value, t.cantidad);
                                              },
                                              children: 'Eliminar',
                                            }),
                                          ],
                                        }),
                                      ],
                                    },
                                    c,
                                  );
                                }),
                              }),
                            ],
                          }),
                        }),
                        Object(a.jsxs)('div', {
                          children: [
                            Object(a.jsxs)('h1', {
                              children: [
                                'Subtotal : ',
                                this.state.result.toLocaleString(),
                                ' Lps.',
                              ],
                            }),
                            Object(a.jsxs)('h2', {
                              children: [
                                'Impuesto 15% : ',
                                this.state.impuesto.toLocaleString(),
                                ' Lps.',
                              ],
                            }),
                            Object(a.jsxs)('h2', {
                              children: ['Total: ', this.state.total.toLocaleString(), ' Lps.'],
                            }),
                            Object(a.jsx)('div', {
                              style: { 'text-align': 'center' },
                              children: Object(a.jsx)(m.a, {
                                color: 'primary',
                                style: { width: '100px', height: '50px', 'font-weight': 'bold' },
                                onClick: this.write,
                                children: 'Facturar',
                              }),
                            }),
                          ],
                        }),
                      ],
                    })
                  );
                },
              },
            ]),
            c
          );
        })(n.Component),
        Fe = [
          {
            name: 'Facturar',
            to: '/JefeTienda/Facturar',
            icon: Object(a.jsx)('img', {
              src: ae,
              style: { width: '2em', height: '2em', marginRight: '0.5rem' },
            }),
          },
          {
            name: 'Devoluciones',
            to: '/JefeTienda/Devoluciones',
            icon: Object(a.jsx)('img', {
              src: ne,
              style: { width: '2em', height: '2em', marginRight: '0.5rem' },
            }),
          },
        ],
        ze = function () {
          return Object(a.jsx)('div', {
            children: Object(a.jsxs)(x.a, {
              fluid: !0,
              style: { padding: '0' },
              children: [
                Object(a.jsx)(O.a, {
                  noGutters: !0,
                  children: Object(a.jsx)(g.a, { children: Object(a.jsx)(f, { items: Fe }) }),
                }),
                Object(a.jsx)(Le, {}),
              ],
            }),
          });
        },
        Ge =
          (c(98),
          (function (e) {
            Object(Ce.a)(c, e);
            var t = Object(Ae.a)(c);
            function c(e) {
              var a;
              return (
                Object(ye.a)(this, c),
                ((a = t.call(this, e)).componentDidMount = Object(B.a)(
                  w.a.mark(function e() {
                    return w.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), a.getProductos();
                          case 2:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                (a.getProductos = Object(B.a)(
                  w.a.mark(function e() {
                    return w.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              D.a
                                .get('http://localhost:3001/api/productos')
                                .then(function (e) {
                                  for (var t = e.data, c = [], n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    c.push({
                                      indice: 0,
                                      name: r.nombre,
                                      value: r._id,
                                      codigos: r.codigos,
                                      proveedores: r.proveedores,
                                      precios: r.precios,
                                      area: r.area,
                                      ubicacion: r.ubicacion,
                                      marca: r.marca,
                                      _v: r._v,
                                      cantidad: r.cantidad,
                                      precioUnitario: r.precios,
                                      precioSumado: 0,
                                    });
                                  }
                                  var i = a.state;
                                  (i.productosEnBodega = c), a.setState(i);
                                })
                                .catch(function () {
                                  alert('Error');
                                })
                            );
                          case 2:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                (a.write = Object(B.a)(
                  w.a.mark(function e() {
                    var t;
                    return w.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (t = {
                                subtotal: a.state.result,
                                impuesto: a.state.impuesto,
                                total: a.state.total,
                                productosSeleccionado: a.state.productosSeleccionado,
                              }),
                              (e.next = 3),
                              D.a.post('http://localhost:3001/api/facturas', t)
                            );
                          case 3:
                            window.location.reload();
                          case 4:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                (a.updateTool = (function () {
                  var e = Object(B.a)(
                    w.a.mark(function e(t) {
                      var c, n, r;
                      return w.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              (c = 0), (n = 0);
                            case 2:
                              if (!(n < a.state.productosEnBodega.length)) {
                                e.next = 10;
                                break;
                              }
                              if ((r = a.state.productosEnBodega[n]).value !== t) {
                                e.next = 7;
                                break;
                              }
                              return (
                                (c =
                                  Number(r.cantidad) -
                                  Number(a.state.productoSeleccionado.cantidad)),
                                e.abrupt('break', 10)
                              );
                            case 7:
                              n++, (e.next = 2);
                              break;
                            case 10:
                              D.a.put('http://localhost:3001/api/productos/'.concat(t), {
                                cantidad: c,
                              });
                            case 11:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    }),
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })()),
                (a.eliminarProducto = (function () {
                  var e = Object(B.a)(
                    w.a.mark(function e(t, c) {
                      var n, r, i, o, s;
                      return w.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (n = 0), (e.next = 3), a.getProductos();
                            case 3:
                              r = 0;
                            case 4:
                              if (!(r < a.state.productosEnBodega.length)) {
                                e.next = 12;
                                break;
                              }
                              if ((i = a.state.productosEnBodega[r]).value !== t) {
                                e.next = 9;
                                break;
                              }
                              return (n = Number(i.cantidad) + Number(c)), e.abrupt('break', 12);
                            case 9:
                              r++, (e.next = 4);
                              break;
                            case 12:
                              D.a.put('http://localhost:3001/api/productos/'.concat(t), {
                                cantidad: n,
                              }),
                                (o = a.state.productosSeleccionado.filter(function (e) {
                                  return e.value !== t;
                                })),
                                ((s = a.state).productosSeleccionado = o),
                                (a.state.result = 0),
                                (a.state.indice = 1),
                                (a.state.impuesto = 0),
                                (a.state.total = 0),
                                a.setState(s);
                            case 21:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    }),
                  );
                  return function (t, c) {
                    return e.apply(this, arguments);
                  };
                })()),
                (a.addRow = a.addRow.bind(Object(Ie.a)(a))),
                (a.handleChange = a.handleChange.bind(Object(Ie.a)(a))),
                (a.handleQuantityChange = a.handleQuantityChange.bind(Object(Ie.a)(a))),
                (a.agregarProductoaTabla = a.agregarProductoaTabla.bind(Object(Ie.a)(a))),
                (a.eliminarProducto = a.eliminarProducto.bind(Object(Ie.a)(a))),
                (a.state = {
                  subtotal: 0,
                  total: 0,
                  impuesto: 0,
                  indice: 1,
                  result: 0,
                  precios: [],
                  quantity: 1,
                  productosDevolucion: [],
                  productosEnBodega: [
                    {
                      indice: 0,
                      name: '',
                      value: '',
                      codigo: '',
                      cantidad: 0,
                      precioUnitario: 0,
                      precioSumado: 0,
                    },
                  ],
                  productoSeleccionado: [],
                  productosSeleccionado: [],
                }),
                a
              );
            }
            return (
              Object(Ne.a)(c, [
                {
                  key: 'addRow',
                  value: function (e) {
                    var t = this.state;
                    t.productosSeleccionado.push(e), this.setState(t);
                  },
                },
                {
                  key: 'b',
                  value: function (e) {
                    var t = this;
                    this.state.productosEnBodega.filter(function (c) {
                      return (
                        c.value === e &&
                          (t.state.productoSeleccionado = {
                            name: c.name,
                            value: c.value,
                            codigo: c.codigos[0],
                            cantidad: 1,
                            precioUnitario: c.precioUnitario[0],
                            precioSumado: c.precioSumado,
                          }),
                        0
                      );
                    });
                  },
                },
                {
                  key: 'handleChange',
                  value: function (e) {
                    (this.state.indice = 1), this.b(e);
                  },
                },
                {
                  key: 'handleQuantityChange',
                  value: function (e) {
                    this.state.indice = 1;
                    var t = this.state;
                    (t.quantity = e.target.value),
                      (t.productoSeleccionado.cantidad = t.quantity),
                      this.setState(t);
                  },
                },
                {
                  key: 'agregarProductoaTabla',
                  value: function () {
                    (this.state.indice = 1),
                      this.addRow({
                        name: this.state.productoSeleccionado.name,
                        value: this.state.productoSeleccionado.value,
                        codigo: this.state.productoSeleccionado.codigo,
                        cantidad: this.state.productoSeleccionado.cantidad,
                        precioUnitario: Number(this.state.productoSeleccionado.precioUnitario),
                        precioSumado:
                          this.state.productoSeleccionado.cantidad *
                          this.state.productoSeleccionado.precioUnitario,
                      }),
                      this.updateTool(this.state.productoSeleccionado.value);
                    var e = this.state;
                    (e.quantity = 1), this.setState(e);
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var e = this;
                    return (
                      (this.state.result = this.state.productosSeleccionado.reduce(function (e, t) {
                        return e + t.precioSumado;
                      }, 0)),
                      (this.state.impuesto = 0.15 * this.state.result),
                      (this.state.total = this.state.result + this.state.impuesto),
                      Object(a.jsxs)('div', {
                        children: [
                          Object(a.jsx)('h1', { align: 'center', children: 'FACTURA' }),
                          Object(a.jsxs)('div', {
                            style: { display: 'inline-block', position: 'relative', width: '100%' },
                            children: [
                              Object(a.jsx)('div', {
                                align: 'center',
                                children: Object(a.jsx)(Re.a, {
                                  search: !0,
                                  placeholder: 'Encuentre el Producto a Facturar',
                                  options: this.state.productosEnBodega,
                                  onChange: this.handleChange,
                                }),
                              }),
                              Object(a.jsxs)('div', {
                                align: 'center',
                                children: [
                                  Object(a.jsx)('h4', {
                                    style: { display: 'inline', float: 'center' },
                                    children: 'Cantidad:',
                                  }),
                                  Object(a.jsx)('input', {
                                    style: { float: 'center', marginLeft: '5px' },
                                    type: 'number',
                                    value: this.state.quantity,
                                    onChange: this.handleQuantityChange.bind(this),
                                  }),
                                  Object(a.jsx)(m.a, {
                                    style: { marginRight: '20px' },
                                    onClick: this.agregarProductoaTabla,
                                    children: 'Agregar',
                                  }),
                                ],
                              }),
                            ],
                          }),
                          Object(a.jsx)('div', {
                            style: { maxHeight: '450px', overflowY: 'auto' },
                            children: Object(a.jsxs)(z.a, {
                              height: '50',
                              responsive: 'sm',
                              striped: !0,
                              bordered: !0,
                              hover: !0,
                              dark: !0,
                              align: 'center',
                              size: 'sm',
                              children: [
                                Object(a.jsx)('thead', {
                                  children: Object(a.jsxs)('tr', {
                                    children: [
                                      Object(a.jsx)('th', { children: '#' }),
                                      Object(a.jsx)('th', { children: 'Nombre Producto' }),
                                      Object(a.jsx)('th', { children: 'Codigo' }),
                                      Object(a.jsx)('th', { children: 'Cantidad' }),
                                      Object(a.jsx)('th', { children: 'Precio Unitario' }),
                                      Object(a.jsx)('th', { children: 'Precio Sumado' }),
                                    ],
                                  }),
                                }),
                                Object(a.jsx)('tbody', {
                                  children: this.state.productosSeleccionado.map(function (t, c) {
                                    return Object(a.jsxs)(
                                      'tr',
                                      {
                                        children: [
                                          Object(a.jsx)('th', { children: e.state.indice++ }),
                                          Object(a.jsx)('th', { children: t.name }),
                                          Object(a.jsx)('th', { children: t.codigo }),
                                          Object(a.jsx)('th', { children: t.cantidad }),
                                          Object(a.jsx)('th', { children: t.precioUnitario }),
                                          Object(a.jsx)('th', { children: t.precioSumado }),
                                          Object(a.jsx)('th', {
                                            children: Object(a.jsx)(m.a, {
                                              style: { marginLeft: '10px' },
                                              className: 'btn btn-danger',
                                              onClick: function () {
                                                return e.eliminarProducto(t.value, t.cantidad);
                                              },
                                              children: 'Eliminar',
                                            }),
                                          }),
                                        ],
                                      },
                                      c,
                                    );
                                  }),
                                }),
                              ],
                            }),
                          }),
                          Object(a.jsxs)('div', {
                            children: [
                              Object(a.jsxs)('h1', {
                                children: [
                                  'Subtotal : ',
                                  this.state.result.toLocaleString(),
                                  ' Lps.',
                                ],
                              }),
                              Object(a.jsxs)('h2', {
                                children: [
                                  'Impuesto 15% : ',
                                  this.state.impuesto.toLocaleString(),
                                  ' Lps.',
                                ],
                              }),
                              Object(a.jsxs)('h2', {
                                children: ['Total: ', this.state.total.toLocaleString(), ' Lps.'],
                              }),
                              Object(a.jsx)('div', {
                                style: { 'text-align': 'center' },
                                children: Object(a.jsx)(m.a, {
                                  color: 'primary',
                                  style: { width: '100px', height: '50px', 'font-weight': 'bold' },
                                  onClick: this.write,
                                  children: 'Facturar',
                                }),
                              }),
                            ],
                          }),
                        ],
                      })
                    );
                  },
                },
              ]),
              c
            );
          })(n.Component)),
        Me = [
          {
            name: 'Facturar',
            to: '/Vendedor/Facturacion',
            icon: Object(a.jsx)('img', {
              src: ae,
              style: { width: '2em', height: '2em', marginRight: '0.5rem' },
            }),
          },
        ],
        He = function () {
          return Object(a.jsxs)('div', {
            children: [
              Object(a.jsxs)(x.a, {
                fluid: !0,
                style: { padding: '0' },
                children: [
                  Object(a.jsx)(O.a, {
                    noGutters: !0,
                    children: Object(a.jsx)(g.a, { children: Object(a.jsx)(f, { items: Me }) }),
                  }),
                  Object(a.jsx)(Ge, {}),
                ],
              }),
              Object(a.jsx)('h1', { children: 'Ambiente Vendedor' }),
            ],
          });
        },
        Qe =
          (c.p,
          function () {
            return Object(a.jsx)('div', {
              children: Object(a.jsx)('h1', { children: 'PAGINA EN CONSTRUCCI\xd3N' }),
            });
          }),
        Ve = function () {
          return (
            console.log('Hola desde app.js'),
            Object(a.jsxs)(s.a, {
              children: [
                Object(a.jsx)(d.a, { exact: !0, path: '/', children: Object(a.jsx)(p, {}) }),
                Object(a.jsx)(d.a, { exact: !0, path: '/login' }),
                Object(a.jsx)(d.a, {
                  exact: !0,
                  path: '/Propietario',
                  children: Object(a.jsx)(ce, {}),
                }),
                Object(a.jsx)(d.a, {
                  exact: !0,
                  path: '/Propietario/Bodegas',
                  children: Object(a.jsx)(he, {}),
                }),
                Object(a.jsx)(d.a, {
                  exact: !0,
                  path: '/Propietario/Productos',
                  children: Object(a.jsx)(ue, {}),
                }),
                Object(a.jsx)(d.a, {
                  exact: !0,
                  path: '/Propietario/Usuarios',
                  children: Object(a.jsx)(ve, {}),
                }),
                Object(a.jsx)(d.a, {
                  exact: !0,
                  path: '/Propietario/Clientes',
                  children: Object(a.jsx)(Pe, {}),
                }),
                Object(a.jsx)(d.a, {
                  exact: !0,
                  path: '/Administrador',
                  children: Object(a.jsx)(le, {}),
                }),
                Object(a.jsx)(d.a, {
                  exact: !0,
                  path: '/JefeTienda',
                  children: Object(a.jsx)(ie, {}),
                }),
                Object(a.jsx)(d.a, {
                  exact: !0,
                  path: '/JefeTienda/Facturar',
                  children: Object(a.jsx)(ze, {}),
                }),
                Object(a.jsx)(d.a, {
                  exact: !0,
                  path: '/JefeTienda/Devoluciones',
                  children: Object(a.jsx)(Ue, {}),
                }),
                Object(a.jsx)(d.a, {
                  exact: !0,
                  path: '/Vendedor',
                  children: Object(a.jsx)(se, {}),
                }),
                Object(a.jsx)(d.a, {
                  exact: !0,
                  path: '/Vendedor/Facturacion',
                  children: Object(a.jsx)(He, {}),
                }),
                Object(a.jsx)(d.a, {
                  exact: !0,
                  path: '/EnConstruccion',
                  children: Object(a.jsx)(Qe, {}),
                }),
              ],
            })
          );
        };
      c(99);
      o.a.render(
        Object(a.jsx)(r.a.StrictMode, { children: Object(a.jsx)(Ve, {}) }),
        document.getElementById('root'),
      );
    },
    48: function (e, t, c) {},
    55: function (e, t, c) {},
    56: function (e, t, c) {},
    57: function (e, t, c) {},
    66: function (e, t, c) {},
    68: function (e, t, c) {},
    93: function (e, t, c) {},
    94: function (e, t, c) {},
    95: function (e, t, c) {},
    96: function (e, t, c) {},
    98: function (e, t, c) {},
  },
  [[100, 1, 2]],
]);
//# sourceMappingURL=main.6e04ce09.chunk.js.map
