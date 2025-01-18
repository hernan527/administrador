import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { TreeNode } from 'primeng/api';

@Injectable()
export class CustomService {

    constructor(private http: HttpClient) { }

    async getFiles() {
    const res = await this.http.get<any>('../../assets/files.json')
        .toPromise();
      return <TreeNode[]>res.data;
    }

    async getLazyFiles() {
    const res = await this.http.get<any>('../../files-lazy.json')
        .toPromise();
      return <TreeNode[]>res.data;
    }
}