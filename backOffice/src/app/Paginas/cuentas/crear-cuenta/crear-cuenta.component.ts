import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/Servicios/cliente.service';
import { CuentaService } from 'src/app/Servicios/cuenta.service';
import { CreditoService } from 'src/app/Servicios/credito.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css']
})
export class CrearCuentaComponent implements OnInit {
  clienteIdentificacion = {
    'idCliente': "",
    'tipoIdentificacion': '',
    'numeroIdentificacion': '',
    'apellidos': '',
    'nombres': '',
    'razonSocial': '',
  };
  cliente = [{
    'idCliente': "",
    'tipoIdentificacion': '',
    'numeroIdentificacion': '',
    'apellidos': '',
    'nombres': '',
    'razonSocial': '',
  }];
  listTipoCuenta = [{
    "codTipoCuenta": "",
    "nombre": "",
  }];

  tipoCuenta = {
    "codTipoCuenta": "",
    "codTasaInteres": "",
    "tipoCapitalizacion": "",
    "formaCapitalizacion": "",
    "maximoNumeroIntervinientes": 0,
  };

  identFirst = true;
  identValidacion = false;
  mensajeValidacion = "";

  constructor(
    private serviceCliente: ClienteService,
    private serviceCuenta: CuentaService,
    private serviceCredito: CreditoService,
    private router: Router
  ) {
  }
  ngOnInit(): void {
    this.getCuentas();
    this.cliente.pop();
  }

  getCliente() {
    this.serviceCliente.buscarClientePorParametros(this.clienteIdentificacion.tipoIdentificacion, this.clienteIdentificacion.numeroIdentificacion).subscribe(
      (data) => {
        this.identFirst = false;
        this.identValidacion = true;
        if (data) {
          this.clienteIdentificacion = data;
        } else {
          this.identValidacion = false;
          this.mensajeValidacion = "Numero de Identificacion Incorrecta";
        }
      },
      (error) => {
        this.identValidacion = false;
        console.error('Error al hacer la solicitud:', error);
      }
    );
  }
  getCuentas() {
    this.serviceCuenta.getTipoCuentaAllAPI().subscribe(
      (data) => {
        if (data) {
          this.listTipoCuenta = data;
        }
      },
      (error) => {
        console.error('Error al hacer la solicitud:', error);
      }
    );
  }
  getCuentasId() {
    if (this.tipoCuenta.codTipoCuenta != "") {
      this.serviceCuenta.getTipoCuentaByIdAPI(this.tipoCuenta.codTipoCuenta).subscribe(
        (data) => {
          if (data) {
            this.tipoCuenta = data;
            //this.getTasaInteresById();
          }
        },
        (error) => {
          console.error('Error al hacer la solicitud:', error);
        }
      );
    }
  }

  addParticipante() {

    let tableBody = document.getElementById('tbParticipante') as HTMLTableElement;
    let numberOfRows = tableBody.rows.length;
    if (this.clienteIdentificacion.apellidos != "" && this.clienteIdentificacion.nombres != "" && numberOfRows <= this.tipoCuenta.maximoNumeroIntervinientes) {
      let objetoEncontrado = this.cliente.find(objeto => {
        return JSON.stringify(objeto) === JSON.stringify(this.clienteIdentificacion);
      });
      if (!objetoEncontrado) {
        this.cliente.push({ ...this.clienteIdentificacion });

        let row = document.createElement('tr');

        let cell = document.createElement('td');
        let textP = document.createElement('p');
        let cell1 = document.createElement('td');
        let textP1 = document.createElement('p');
        let cell2 = document.createElement('td');
        let textP2 = document.createElement('p');
        let cell3 = document.createElement('td');
        let textP3 = document.createElement('p');
        let cell4 = document.createElement('td');

        textP.innerHTML = numberOfRows.toString();
        cell.appendChild(textP);
        row.appendChild(cell);

        textP1.innerHTML = this.clienteIdentificacion.tipoIdentificacion;
        cell1.appendChild(textP1);
        row.appendChild(cell1);

        textP2.innerHTML = this.clienteIdentificacion.numeroIdentificacion;
        cell2.appendChild(textP2);
        row.appendChild(cell2);

        let texto = "";
        // texto = this.clienteIdentificacion.razonSocial == "" ? this.clienteIdentificacion.apellidos + " " + this.clienteIdentificacion.nombres : this.clienteIdentificacion.razonSocial;
        texto = this.clienteIdentificacion.apellidos + " " + this.clienteIdentificacion.nombres;
        textP3.innerHTML = texto;
        cell3.appendChild(textP3);
        row.appendChild(cell3);

        var boton = document.createElement("button");
        boton.type = "button";
        boton.className = "btn btn-dark w-100";

        boton.onclick = () => {
          this.EliminarFila(boton);
        };
        var icono = document.createElement("i");
        icono.className = "bi bi-x-lg";

        boton.appendChild(icono);
        cell4.appendChild(boton);
        row.appendChild(cell4);
        tableBody.appendChild(row);

        this.clienteIdentificacion = {
          'idCliente': '',
          'tipoIdentificacion': '',
          'numeroIdentificacion': '',
          'apellidos': '',
          'nombres': '',
          'razonSocial': '',
        };
        this.identValidacion = true;

      } else {
        this.identValidacion = false;
        this.mensajeValidacion = "El cliente ya se encuentra agregado";
      }
    } else {
      this.identValidacion = false;
      this.mensajeValidacion = "Solo se permite un maximo de " + this.tipoCuenta.maximoNumeroIntervinientes + " participantes";
    }
  }
  EliminarFila(event: any) {
    var fila = event.closest('tr');
    if (fila) {
      var cuartaColumnaElement = fila.querySelector('td:nth-child(3)');
      if (cuartaColumnaElement !== null) {
        var cuartaColumna = cuartaColumnaElement.textContent;

        let objetoLista = this.cliente.findIndex(objeto => {
          return JSON.stringify(objeto).includes(cuartaColumna);
        });
        if (objetoLista !== -1) {
          this.cliente.splice(objetoLista, 1);
        }
      }

    }
    fila.remove();
  }

  restDatosClientes() {
    this.identValidacion = true;
    this.clienteIdentificacion.idCliente = '';
    this.clienteIdentificacion.apellidos = '';
    this.clienteIdentificacion.nombres = '';
    this.clienteIdentificacion.razonSocial = '';
  }

  fechaActual() {
    let fechaActual = new Date();
    let año = fechaActual.getFullYear();
    let mes = fechaActual.getMonth() + 1; // Los meses son indexados desde 0, así que sumamos 1
    let dia = fechaActual.getDate();

    let fechaFormateada = `${año}-${mes < 10 ? '0' + mes : mes}-${dia < 10 ? '0' + dia : dia}`;
    return fechaFormateada;
  }
  crearCuenta() {
    if (this.cliente.length > 0 && this.tipoCuenta.codTipoCuenta != "" || true) { //CAMBIAR ESTO ****************
      let nuevaCuenta = 
      {
        "codTipoCuenta": this.tipoCuenta.codTipoCuenta,
        "codCliente": "this.cliente[0].idCliente", ///CODIGO DEL CLIENTE HAY QUE CAMBIAR ***********************
        "montoMaximoRetiro": 3000,
      }

      /*************Borrar esto******************/
      this.cliente.push({
        'idCliente': "this.cliente[0].idCliente",
        'tipoIdentificacion': 'asd',
        'numeroIdentificacion': 'asd',
        'apellidos': 'asd',
        'nombres': 'asd',
        'razonSocial': 'asd',
      });

      this.serviceCuenta.postCuentaAPI(nuevaCuenta).subscribe(
        (data) => {
          if (data) {
            let tipoInterviniente = "TIT"
            this.cliente.forEach((participante) => {
              let cuentaIntervinientes = 
              {
                "codCuenta": data.codCuenta,
                "codCliente": "this.cliente[0].idCliente", /***********************BORRAR ESTO ****************/
                "tipoInterviniente": tipoInterviniente,
                "estado": "ACT"
              } 
              tipoInterviniente = "COT";
              this.serviceCuenta.postCuentaParticipantesAPI(cuentaIntervinientes).subscribe(
                (data) => {
                  console.log("Creado");
                },
                (error) => {
                  console.error('Error al hacer la solicitud:', error);
                }
              );
            });
            Swal.fire({
              icon: "success",
              title: "Listo",
              text: "La cuenta se ha creado satisfactoriamente NUMERO DE CUENTA: " + data.numeroCuenta,
              showConfirmButton: true,
            }).then((result) => {
              if (result.isConfirmed) {
                this.router.navigate(["cuentas/crear"]);
              }
            });
          }
        },
        (error) => {
          console.error('Error al hacer la solicitud:', error);
        }
      );
    } else {
      Swal.fire({
        icon: "error",
        title: "Completar los datos",
        text: "Todos los campos obligatorios deben ser llenados",
        showConfirmButton: false,
        timer: 2500
      });
    }
  }
  regresar() {
    this.router.navigate(["cuentas"]);
  }
}
