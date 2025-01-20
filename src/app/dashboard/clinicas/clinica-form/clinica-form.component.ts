import { Component, EventEmitter, Input, OnInit, Output,ElementRef,ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { BehaviorSubject, forkJoin  } from 'rxjs';
import { Clinicas } from '../../../interfaces/clinicas';
import { Empresa } from '../../../interfaces/empresas';
import { Planes } from '../../../interfaces/planes';
import { PlanSeleccionado } from '../../../interfaces/interfaces';
import { map } from 'rxjs/operators';
import {NodeService} from '../../../servicios/node.service';

import { MyMenuItem } from '../../../interfaces/menu'; // Importamos la interfaz MenuItem desde el archivo creado
import { MegaMenuItem, MenuItem } from 'primeng/api';
import { ClinicasService } from '../../../servicios/clinicas.service'; // Reemplaza con la ruta correcta al servicio
import { EmpresasService } from '../../../servicios/empresas.service'; // Reemplaza "ruta-del-servicio" con la ruta correcta a tu servicio.
import { PlanesService } from '../../../servicios/planes.service'; 
import { TreeNode } from 'primeng/api'; // Importa la interfaz TreeNode directamente desde 'primeng/api'
import { Tree } from 'primeng/tree';
@Component({
  selector: 'app-clinicas-form',
  templateUrl: './clinica-form.component-1.html',
  styleUrls: [ './clinica-form.component.css',  ],

})

export class ClinicasFormComponent implements OnInit {
  @Input() initialState: BehaviorSubject<Clinicas> = new BehaviorSubject({});
  @Output() formValuesChanged = new EventEmitter<Clinicas>();
  @Output() formSubmitted = new EventEmitter<Clinicas>();
  @Output() cancelDialog = new EventEmitter<void>();
  @Input() buttonText: string = 'Guardar';
  @ViewChild('tree') tree: Tree | undefined;


  isEditMode: boolean = false;
  clinicaForm: FormGroup = new FormGroup({});
  arbol!: any[]; // Declara la variable 'arbol' con el tipo TreeNode
  coberturasControl!: FormControl;
  datosTrans!: any[];
  megaMenuItems: MegaMenuItem[] = [];
  panelMenuItems: MenuItem[] = [];
  opcionesMenuDesplegable: MenuItem[] = [];
  menuData: { data: MyMenuItem[] } = { data: [] };
  empresasData: { [x: string]: any[] } = {};
  empresas: Empresa[] = [];
  planesData: Planes[] = [];
  coberturasMenu: MenuItem[] = []; // Aquí guardaremos el menú generado
  showPanelMenu = true; 
  selectedCoberturas: any[] = []; // Aquí almacena las coberturas seleccionadas
  generated_ids: string[] = [];
  coberturasSeleccionadas:{ [x: string]: any[] } = {};
  label?: string;
   constructor(
    private fb: FormBuilder,
    private clinicasService: ClinicasService, 
    private empresasService: EmpresasService,
    private planesService: PlanesService,
    ) { 

    }
    get nombre() {
      const nombreControl = this.clinicaForm.get('nombre');
      if (nombreControl) {
        console.log('nombre:', nombreControl.value);
        return nombreControl.value;
      }
      return null;
    }
    
    get clinicas() {
      const clinicasControl = this.clinicaForm.get('entity');
      if (clinicasControl) {
        console.log('clinicas:', clinicasControl.value);
        return clinicasControl.value;
      }
      return null;
    }
    
    get cartillas() {
      const cartillasControl = this.clinicaForm.get('cartillas');
      if (cartillasControl) {
        console.log('cartillas:', cartillasControl.value);
        return cartillasControl.value;
      }
      return null;
    }
    
    get coberturas() {
      const coberturasControl = this.clinicaForm.get('coberturas');
      if (coberturasControl) {
        console.log('coberturas: 91', coberturasControl.value);
        
        return coberturasControl.value;
      }
      return null;
    }
    

 

     
ngOnInit() {
  // Suscribirse a los cambios en 'coberturas'
  this.clinicaForm.get('coberturas')?.valueChanges.subscribe((coberturasSeleccionadas) => {
    this.actualizar_MenuPanel();
  });
  this.clinicasService.getClinicas().pipe(
    map((clinicas: any[]) => {
      this.generated_ids = clinicas.map(clinica => clinica._id);    })
  ).subscribe();
   this.initialState.subscribe(clinica => {
      this.clinicaForm = this.fb.group({
        _id: [ clinica._id ],
        nombre: [ clinica.nombre ],
        entity: [ clinica.entity ],
        cartillas: [ clinica.cartillas ],
        coberturas: [clinica.coberturas],
        item_id: [ clinica.item_id],
        ubicacion: [ clinica.ubicacion],
        url: [ clinica.url],
        imagen: [ clinica.imagen],
        tipo: [ clinica.tipo],
        especialidades: [ clinica.especialidades],
        rating: [ clinica.rating],
        select: [ clinica.select],        
         


      });
      
      if (clinica._id) { // Verificar si initialState está vacío (null)
        this.isEditMode = true;
        const coberturasSeleccionadas = this.clinicaForm.get('coberturas')?.value;
        console.log('coberturasSeleccionadas  110',coberturasSeleccionadas);
        const idsSeleccionados = this.obtenerIDsSeleccionados();
        console.log('idsSeleccionados 123',idsSeleccionados);
        this.generateMenuLevelOne();
      } 
      

    });
  
    const currentClinicaState = this.clinicaForm.get('_id')
    // console.log('currentClinicaState  : ',currentClinicaState)
    
    this.mostrarCoberturas()

    this.clinicaForm.valueChanges.subscribe((val) => { this.formValuesChanged.emit(val); });
  }
 
  
  actualizar_MenuPanel() {
    const coberturasSeleccionadas = this.clinicaForm.get('coberturas')?.value;
    this.desarrollar_MenuPanel(coberturasSeleccionadas);
  }
  mostrarCoberturas() {
   



    this.showPanelMenu = !this.showPanelMenu; // Cambia el valor entre true y false
    this.generateMenuLevelOne();

  }
  
  
  generateMenuLevelOne(): void {
    // Log para saber que se está ejecutando la función
    console.log('Ejecutando generateMenuLevelOne()');
  
    // Llamar al servicio para obtener las empresas
    this.empresasService.getEmpresas().subscribe(empresas => {
      
      // Log para ver los datos que llegan del servicio
      // console.log('Datos recibidos de empresasService:', empresas);
  
      // Mapeamos las empresas para crear la estructura de menú
      this.menuData.data = empresas.map((empresa, index) => ({
        key: index.toString(),     // Usamos el índice como key (puedes poner un id aquí si existe)
        label: empresa.name,       // Usamos el campo 'name' de la empresa como label
        children: []               // Inicializamos el array de 'children' vacío
      }));
  
      // Log para verificar cómo se ve la estructura de 'menuData'
      console.log('Estructura de menuData:', this.menuData);
  
      // Si tienes datos en 'planesData', también puedes logearlos aquí
      // console.log('Planes de datos disponibles:', this.planesData);
  
      // Llamar a la función para generar el segundo nivel del menú
      
    }, error => {
      // Log para manejar posibles errores
      console.error('Error al obtener las empresas:', error);
    });
    this.generateMenuLevelTwo();
  }

generateMenuLevelTwo(): void {
  console.log('Ejecutando generateMenuLevelTwo()');
  this.planesService.getPlanes().subscribe(planes => {
    // console.log('Datos recibidos de planesService:', planes);

    planes.forEach((plan, planIndex) => {
      // Encontrar la empresa correspondiente en menuData
      const empresa = this.menuData.data.find(item => item.label === plan.empresa);
      // console.log('Datos empresa:', planes);

      if (empresa) {
        // Verificar si el plan tiene la propiedad "linea"
        if (plan.linea) {
          // Encontrar o crear el segundo nivel correspondiente a la línea
          const lineaItem = empresa.children?.find(item => item.label === plan.linea);
          if (lineaItem) {
            // Si la línea ya existe en el segundo nivel, agregar el plan como hijo si no existe con el mismo id
            if (!lineaItem.children?.some(item => item.id === plan.item_id)) {
              lineaItem.children?.push({
                key: `${lineaItem.key}-${lineaItem.children?.length ?? 0}`, // Usar la longitud del arreglo como índice
                id: plan.item_id || '',
                label: plan.name || ''
              });
            }
          } else {
            // Si la línea no existe en el segundo nivel, crearla y agregar el plan como hijo si no existe con el mismo id
           
            const nuevaLineaKey = `${empresa.key}-${empresa.children?.length ?? 0}`;
            empresa.children?.push({
              key: nuevaLineaKey,
              label: plan.linea,
              children: [
                {
                  key: `${nuevaLineaKey}-0`, // Reiniciar el índice a cero para el tercer nivel
                  id: plan.item_id || '',
                  label: plan.name || ''
                },
              ],
            });
          }
        } else {
          // Si el plan no tiene la propiedad "linea", agregarlo directamente al segundo nivel si no existe con el mismo id
          if (!empresa.children?.some(item => item.id === plan.item_id)) {
            empresa.children?.push({
              key: `${empresa.key}-${empresa.children?.length ?? 0}`, // Usar la longitud del arreglo como índice
              id: plan.item_id || '',
              label: plan.name || ''
            });
          }
        }
      }
    });

    

  }); 
   const menuLabels: { [x: string]: string | undefined } = {};

  this.menuData.data.forEach(item => {
    menuLabels[item.key] = item.label;
  });
  // console.log('menuLabels 202',menuLabels) 
   // console.log('this.menuData 203',this.menuData);
  this.arbol = [...this.menuData.data];
  console.log('this.menuData.data : 254',this.menuData.data)

  console.log('arbol : 254',this.arbol)
}
  generateArraysFromMenuLabels(menuLabels: { [x: string]: string }): { [x: string]: any[] } {
    const result: { [x: string]: any[] } = {};
  
    for (const key in menuLabels) {
      const label = menuLabels[key];
      result[`items${label.replace(/\s/g, '')}`] = [];
    }
  // console.log(result)
    return result;
  }




  
  // obtenerIDsSeleccionados(): string[] {
  //   const coberturasSeleccionadas = this.clinicaForm.get('coberturas')?.value;
  // console.log('esta es la linea 97 coberturasSeleccionadas' , coberturasSeleccionadas);
  //   const idsSeleccionados: string[] = [];
  
  //   if (coberturasSeleccionadas && Array.isArray(coberturasSeleccionadas)) {
  //     coberturasSeleccionadas.forEach((cobertura: any) => {
  // console.log('esta es la linea 229 coberturasSeleccionadas',cobertura);
  // console.log('esta es la linea 230 cobertura label ', cobertura.label);
  // console.log('esta es la linea 231 cobertura key ', cobertura.key);
  // console.log('esta es la linea 232 cobertura _id ', cobertura.id);



  //       if (cobertura && cobertura.id) {
  // console.log('esta es la linea 232 cobertura',cobertura);

  // console.log('esta es la linea 234 cobertura ID',cobertura.id);

  //         if (Array.isArray(cobertura.id)) {
  // console.log('esta es la linea 238 cobertura ID',cobertura.id);

  //           idsSeleccionados.push(...cobertura.id);
  //         } else {
  // console.log('esta es la linea 242 cobertura ID',cobertura.id);
  //           idsSeleccionados.push(cobertura.id);
  //         }
  //       }
  //     });
  //   }
  // console.log('idsSeleccionados 252',idsSeleccionados);
  //   this.desarrollar_MenuPanel(coberturasSeleccionadas);
  //   const datosTransformados = this.transformarDatos(coberturasSeleccionadas);
  //   this.datosTrans = datosTransformados;
  // console.log('datosTransformados  ',datosTransformados);
  //   this.clinicaForm.patchValue({ cartillas: idsSeleccionados });
  // console.log('Array de ids seleccionados:244 ' ,idsSeleccionados);
  // console.log('Array de coberturasSeleccionadas:245 ', coberturasSeleccionadas);
  // console.log('idsSeleccionados 260',idsSeleccionados);
  //   return idsSeleccionados;
  // }
  
  obtenerIDsSeleccionados(): string[] {
    const coberturasSeleccionadas = this.clinicaForm.get('coberturas')?.value;
    console.log('Coberturas seleccionadas: 266', coberturasSeleccionadas);
    
    const idsSeleccionados: string[] = [];
  
    // Verificamos si coberturasSeleccionadas es un arreglo válido
    if (Array.isArray(coberturasSeleccionadas)) {
      coberturasSeleccionadas.forEach((cobertura: any) => {
        console.log('Cobertura actual:', cobertura);
                // Si la cobertura tiene un array de 'children', los procesamos también
                if (Array.isArray(cobertura.children)) {
                  cobertura.children.forEach((child: any) => {
                    // Recursión para extraer ids de los hijos
                    if (child?.id) {
                      // console.log('ID del hijo encontrado:', child.id);
                      idsSeleccionados.push(child.id);
                    }
                  });
                }
        // // Si la cobertura tiene id, la agregamos
        // if (cobertura?._id) {
        //   // console.log('ID encontrado:', cobertura.id);
          
        //   // Si el id es un arreglo, agregamos todos sus elementos
        //   if (Array.isArray(cobertura._id)) {
        //     // console.log('ID es un arreglo, agregando varios IDs');
        //     idsSeleccionados.push(...cobertura._id);
        //   } else {
        //     // console.log('ID es un único valor, agregando');
        //     idsSeleccionados.push(cobertura._id);
        //   }
        // }
        

      });
    }
  
    // console.log('IDs seleccionados:', idsSeleccionados);
    console.log('coberturasSeleccionadas: 294', coberturasSeleccionadas);

    // Llamadas adicionales a otras funciones (puedes ajustarlas según necesites)
    this.desarrollar_MenuPanel(coberturasSeleccionadas);
    const datosTransformados = this.transformarDatos(coberturasSeleccionadas);
    this.datosTrans = datosTransformados;
    // console.log('Datos datosTrans:', this.datosTrans);
  
    // Se actualiza el formulario con los IDs seleccionados
    this.clinicaForm.patchValue({ cartillas: idsSeleccionados });
    // console.log('Array de IDs seleccionados actualizado:', idsSeleccionados);
  
    return idsSeleccionados;
  }
  onEmpresaSeleccionada(empresa: string): void {
    const empresaSeleccionada = this.menuData.data.find((item: MyMenuItem) => item.label === empresa);

    if (empresaSeleccionada) {
      const opcionesEmpresa = empresaSeleccionada.children || [];
      // console.log(opcionesEmpresa);
    } else {
      // console.log(`Empresa "${empresa}" no encontrada.`);
    }
  }
  
  
  
  transformarDatos(datos: any[]): any[] {
    const niveles: any[] = [];
  // console.log('datos :',datos)
    datos.forEach((item) => {
      const nivelActual = item.key.split('-').length - 1;
      const nivelAnterior = niveles[nivelActual - 1];
  
      if (nivelActual === 0) {
        niveles.push(item);
      } else {
        const parentKey = item.key.substring(0, item.key.lastIndexOf('-'));
        const parentItem = this.buscarItemPorKey(niveles[nivelAnterior], parentKey);
  
        if (parentItem) {
          if (!parentItem.children) {
            parentItem.children = [];
          }
          parentItem.children.push(item);
        }
      }
    });
  
    return niveles;
  }
  
  buscarItemPorKey(data: any[], key: string): any {
    if (data) {
      return data.find((item) => item.key === key);
    }
    return null;
  }
  

  
  

  
convertData(data: any[]): any[] {
  const convertedData: any[] = [];

  data.forEach((item) => {
    const newItem: any = {
      label: item.label,
      icon: `logo-${item.label.toLowerCase().replace(/\s/g, '')}`,
      items: []
    };

    if (item.children) {
      const childItems: any[] = [];

      item.children.forEach((child: any) => { 
        const childItem: any = {
          label: child.label
        };

        if (child.children) {
          childItem.items = child.children.map((grandchild: any) => ({ label: grandchild.label }));
        }

        childItems.push(childItem);
      });

      if (childItems.length === 1) {
        newItem.items.push([{ label: 'Planes', items: childItems[0].items }]);
      } else {
        newItem.items.push(childItems);
      }
    }

    convertedData.push(newItem);
  });

  return convertedData;
}


  desarrollar_MenuPanel(planesSeleccionados: { [x: string]: { label: string; key: string } }) {
    if (!planesSeleccionados) {
      return;
    }
    const itemsPorEmpresa = this.generarItemsPorEmpresa(Object.values(planesSeleccionados));
    console.log('this.menuData.data  410:',this.menuData.data)
    const menuLabels = this.generarMenuLabels(this.menuData.data);
    const menu = this.generarMenu(menuLabels, itemsPorEmpresa);
    console.log(' itemsPorEmpresa : 410 ',itemsPorEmpresa)    // Asignar el menú final a this.panelMenuItems

    console.log(' menuLabels : 411 ',menuLabels)    // Asignar el menú final a this.panelMenuItems

  console.log(' menu : 412 ',menu)    // Asignar el menú final a this.panelMenuItems
    
  this.panelMenuItems = menu;
  }
    
    
  submitForm() {
    const formValue = this.clinicaForm.value;
    console.log(this.isEditMode)
    // console.log(this.isEditMode)
    // Realizar acciones según el contexto (agregar o editar)
    if  (this.isEditMode === true) {
      // Acciones para editar clínica
      // ...
    
      formValue.coberturas.forEach((cobertura: { parent: any }) => {
        console.log('cobertura :',cobertura);
        console.log('cobertura.parent; :',cobertura.parent);
        delete cobertura.parent;
      });

      // console.log('Datos de clínica editados:', formValue);
    } else {
      // Acciones para agregar nueva clínica
      // ...
      const new_id = this.generate_id(24)
      this.clinicaForm.patchValue({_id: new_id });
      formValue._id = new_id; 
      // console.log('Nueva clínica agregada:', formValue);
    }

    // Emitir el evento de formulario enviado con los datos actualizados o agregados
    this.formSubmitted.emit(this.clinicaForm.value);

  }

  cancelarDialogo() {
    // Emitir el evento de cancelar diálogo
    this.cancelDialog.emit();
  }
  

// Primero, definimos una interfaz para el tipo de datos de los planes seleccionados

// Función para generar las constantes de items para cada empresa a partir de los planes seleccionados
generarItemsPorEmpresa(planesSeleccionados: PlanSeleccionado[]): { [x: string]: any[] } {
  const itemsPorEmpresa: { [x: string]: any[] } = {};
console.log('planesSeleccionados  473  :',planesSeleccionados)
  planesSeleccionados.forEach((plan) => {
    console.log('plan 520',plan)

    const empresa = plan.key.charAt(0);
    console.log('empresa 530',empresa)
    if (plan.hasOwnProperty('_id')) {
      if (!itemsPorEmpresa[empresa]) {
        itemsPorEmpresa[empresa] = [];
      }

      let label = plan.label;
      console.log('label 482',label)
      if (empresa === '2') {
        console.log('empresa 484',empresa)

        // Condición 1: Mantener solo los primeros 4 caracteres si son números
        const firstFourChars = label.slice(0, 4);
        if (/^\d+$/.test(firstFourChars)) {
          label = firstFourChars;
          console.log('label 490',label)

        } else {
          // Condición 2: Eliminar el octavo carácter si los primeros cuatro no son números
          label = label.slice(0, 7) + label.slice(8);
          console.log('label 495',label)

        }

        // Condición 3: Eliminar duplicados
        if (!itemsPorEmpresa[empresa].some((item) => item.label === label)) {
          itemsPorEmpresa[empresa].push({ label });
        }
      } else if (empresa === '0') {
        // Condición para la empresa "0": Eliminar el texto "c/copagos"
        label = label.replace('c/copagos', '');
        console.log('label 506',label)

        // Condición 4: Eliminar duplicados
        if (!itemsPorEmpresa[empresa].some((item) => item.label === label)) {
          console.log('label 510',label)

          itemsPorEmpresa[empresa].push({ label });
        }
      } else {
        // Para otras empresas, agregar el label sin modificaciones
        console.log('label 517s',label)

        itemsPorEmpresa[empresa].push({ label });
      }
    }
  });

  console.log('itemsPorEmpresa después de modificar:', JSON.stringify(itemsPorEmpresa));

  return itemsPorEmpresa;
}


// // Función para generar las constantes de items para cada empresa a partir de los planes seleccionados
// generarItemsPorEmpresa(planesSeleccionados: PlanSeleccionado[]): { [x: string]: any[] } {
//   const itemsPorEmpresa: { [x: string]: any[] } = {};  // Un objeto con claves string y valores arrays de labels
//   const seenLabels: { [key: string]: Set<string> } = {};  // Para verificar duplicados más eficientemente

//   // consle.log('planesSeleccionados 459', planesSeleccionados);

//   // Función recursiva para recorrer todo el objeto en busca de propiedades 'id'
//   const recorrerYBuscarId = (obj: any) => {
//     // Si el objeto tiene un 'id', lo procesamos
//     if (obj && obj.hasOwnProperty('id')) {
//       let label = obj.label;  // Usamos el 'label' de este objeto

//       // console.log('label encontrado', label);

//       // Determinamos la empresa (tomamos el primer caracter de 'key')
//       const empresa = obj.key.charAt(0);
//       // console.log('empresa', empresa);
//       if (empresa === '2') {
//         // Condición 1: Mantener solo los primeros 4 caracteres si son números
//         const firstFourChars = label.slice(0, 4);
//         if (/^\d+$/.test(firstFourChars)) {
//           label = firstFourChars;
//         } else {
//           // Condición 2: Eliminar el octavo carácter si los primeros cuatro no son números
//           label = label.slice(0, 7) + label.slice(8);
//         }

//         // Condición 3: Eliminar duplicados
//         if (!itemsPorEmpresa[empresa].some((item) => item.label === label)) {
//           itemsPorEmpresa[empresa].push({ label });
//         }
//       } else if (empresa === '0') {
//         // Condición para la empresa "0": Eliminar el texto "c/copagos"
//         label = label.replace('c/copagos', '');

//         // Condición 4: Eliminar duplicados
//         if (!itemsPorEmpresa[empresa].some((item) => item.label === label)) {
//           itemsPorEmpresa[empresa].push({ label });
//         }
//       } else {
//         // Para otras empresas, agregar el label sin modificaciones
//         itemsPorEmpresa[empresa].push({ label });
//       }
        
//       if (!itemsPorEmpresa[empresa]) {
//         itemsPorEmpresa[empresa] = [];  // Inicializamos el array para esa empresa si no existe
//         seenLabels[empresa] = new Set();  // Inicializamos el Set para la empresa
//       }

//       // Eliminamos duplicados
//       if (!seenLabels[empresa].has(label)) {
//         itemsPorEmpresa[empresa].push(label);  // Agregamos el label al array correspondiente
//         seenLabels[empresa].add(label);  // Marcamos el label como visto
//       }
//     }

//     // Recorrer todas las propiedades del objeto, buscando más objetos anidados
//     for (const key in obj) {
//       if (obj.hasOwnProperty(key) && typeof obj[key] === 'object') {
//         recorrerYBuscarId(obj[key]);  // Llamada recursiva
//       }
//     }
//   };

//   // Iniciar el recorrido sobre cada plan
//   planesSeleccionados.forEach((plan) => {
//     recorrerYBuscarId(plan);  // Comienza la búsqueda en cada plan
//   });

//   // console.log('itemsPorEmpresa después de modificar:', JSON.stringify(itemsPorEmpresa));

//   return itemsPorEmpresa;  // Ahora devolvemos un objeto con claves de empresa y valores como arrays de labels
// }



// Función para generar el objeto con las correspondencias entre keys y labels de menús
generarMenuLabels(menuData: MenuItem[]): { [x: string]: string } {
  console.log('menuData  : 440 ' ,menuData)

  const menuLabels: { [x: string]: string } = {};
// console.log('menuLabels  : 443 ' ,menuLabels)
  menuData.forEach((menuItem, index) => {
    const label = menuItem.label;
    if (typeof label === 'string') {
      menuLabels[index.toString()] = label;
    }
  });
  // console.log('menuLabels antes de modificar:448', JSON.stringify(menuLabels));

  return menuLabels;
}

// Función para generar el menú final a partir de las constantes de items y las correspondencias de labels
generarMenu(menuLabels: { [x: string]: string }, itemsPorEmpresa: { [x: string]: any[] }): MenuItem[] {
  const menu: MenuItem[] = [];

  Object.keys(itemsPorEmpresa).forEach((empresaKey) => {
    const empresaLabel = menuLabels[empresaKey];
    const menuItem: MenuItem = { label: empresaLabel, items: itemsPorEmpresa[empresaKey] };
    menu.push(menuItem);
  });
  // console.log('menu antes de modificar:533', JSON.stringify(menu));
  return menu;
}

generate_id(length: number): string {
  let number = '';
  for (let i = 0; i < length; i++) {
    const digit = Math.floor(Math.random() * 10);
    number += digit;
  }

  while (this.generated_ids.includes(number)) {
    number = ''; // Reinicia el número
    for (let i = 0; i < length; i++) {
      const digit = Math.floor(Math.random() * 10);
      number += digit;
    }
  }

  this.generated_ids.push(number);
  return number;
}

}

