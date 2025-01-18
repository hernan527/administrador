import {Component, OnInit} from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import {CustomService} from '../../../servicios/customservice';

@Component({
  selector: 'app-tree',
  templateUrl: './primeng-tree.html',
  styleUrls: ['./primeng-tree.scss'],
  styles: [`
      :host ::ng-deep .p-treeselect {
          width:20rem;
          display: inline-flex;
      }
  `],
  providers: [MessageService]
})
export class PrimengAppComponent {
    arbol: any[] | undefined; 

    arbol1: any[] | undefined;

    arbol2: any[] | undefined;

    arbol3: any[] | undefined;

    selectedNodes1: any[] = [];

    selectedNodes2: any[] = [];

    selectedNode: any;

    constructor(public customService: CustomService) { }

    ngOnInit() {
        this.customService.getFiles().then(files => this.arbol = files);

        this.customService.getFiles().then(files => this.arbol1 = files);
        this.customService.getFiles().then(files => this.arbol2 = files);
        this.customService.getFiles().then(files => this.arbol3 = files);
    }    
}
