import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { TreeNode } from 'primeng/api';
    
@Injectable()
export class NodeService {
  constructor(private http: HttpClient) { }
  async getFilesMenu() {
    const res = await this.http.get<any>('../assets/data/menu.json')
        .toPromise();
      return <TreeNode[]>res.data;
    }
  // getFilesMenu() {
  //   return this.http.get<TreeNode<any>[]>("../assets/data/menu.json");
  // }

    getLazyFilesMEnu() {
    return this.http.get<any>('assets/files-lazy.json')
      .toPromise()
      .then(res => <TreeNode[]>res.data);
    }
    getTreeNodesMenuPrepagas(){
    return [
		{
		  "key": "0",
		  "label": "Avalian",
		  "children": [
			{
			  "key": "0-0",
			  "id": "Av_AS100",
			  "label": "AS100"
			},
			{
			  "key": "0-1",
			  "id": "Av_AS200",
			  "label": "AS200"
			},
			{
			  "key": "0-2",
			  "id": "Av_AS204",
			  "label": "AS204"
			},
			{
			  "key": "0-3",
			  "id": "Av_AS300",
			  "label": "AS300"
			},
			{
			  "key": "0-4",
			  "id": "Av_AS400",
			  "label": "AS400"
			},
			{
			  "key": "0-5",
			  "id": "Av_AS500",
			  "label": "AS500"
			},
			{
			  "key": "0-6",
			  "id": "Av_PMO",
			  "label": "PMO"
			}
		  ]
		},
		{
		  "key": "1",
		  "label": "Fosdic",
		  "children": [
			{
			  "key": "1-0",
			  "id": "Fo_1000",
			  "label": "1000"
			},
			{
			  "key": "1-1",
			  "id": "Fo_2000",
			  "label": "2000"
			},
			{
			  "key": "1-2",
			  "id": "Fo_3000",
			  "label": "3000"
			},
			{
			  "key": "1-3",
			  "id": "Fo_500",
			  "label": "500"
			},
			{
			  "key": "1-4",
			  "id": "Fo_RAS",
			  "label": "RAS"
			}
		  ]
		},
		{
		  "key": "2",
		  "label": "Galeno",
		  "children": [
			{
			  "key": "2-0",
			  "id": "Ga_220 AZUL",
			  "label": "220 AZUL"
			},
			{
			  "key": "2-1",
			  "id": "Ga_330 PLATA",
			  "label": "330 PLATA"
			},
			{
			  "key": "2-2",
			  "id": "Ga_440 ORO",
			  "label": "440 ORO"
			},
			{
			  "key": "2-3",
			  "id": "Ga_550 ORO",
			  "label": "550 ORO"
			}
		  ]
		},
		{
		  "key": "3",
		  "label": "Hominis",
		  "children": [
			{
			  "key": "3-0",
			  "id": "Ho_Vita",
			  "label": "Vita"
			}
		  ]
		},
		{
		  "key": "4",
		  "label": "Medife",
		  "children": [
			{
			  "key": "4-0",
			  "id": "Me_Bronce",
			  "label": "Bronce"
			},
			{
			  "key": "4-1",
			  "id": "Me_Oro",
			  "label": "Oro"
			},
			{
			  "key": "4-2",
			  "id": "Me_Plata",
			  "label": "Plata"
			}
		  ]
		},
		{
		  "key": "5",
		  "label": "OMINT",
		  "children": [
			{
			  "key": "5-0",
			  "id": "OM_1500 20",
			  "label": "1500 20"
			},
			{
			  "key": "5-1",
			  "id": "OM_1500 22",
			  "label": "1500 22"
			},
			{
			  "key": "5-2",
			  "id": "OM_1500 20 S",
			  "label": "1500 20 S"
			},
			{
			  "key": "5-3",
			  "id": "OM_1500 22 S",
			  "label": "1500 22 S"
			},
			{
			  "key": "5-4",
			  "id": "OM_2500 20",
			  "label": "2500 20"
			},
			{
			  "key": "5-5",
			  "id": "OM_2500 20 S",
			  "label": "2500 20 S"
			},
			{
			  "key": "5-6",
			  "id": "OM_2500 24",
			  "label": "2500 24"
			},
			{
			  "key": "5-7",
			  "id": "OM_2500 24 S",
			  "label": "2500 24 S"
			},
			{
			  "key": "5-8",
			  "id": "OM_4021 20",
			  "label": "4021 20"
			},
			{
			  "key": "5-9",
			  "id": "OM_4021 20 S",
			  "label": "4021 20 S"
			},
			{
			  "key": "5-10",
			  "id": "OM_4021 22",
			  "label": "4021 22"
			},
			{
			  "key": "5-11",
			  "id": "OM_4021 23",
			  "label": "4021 23"
			},
			{
			  "key": "5-12",
			  "id": "OM_4021 22 S",
			  "label": "4021 22 S"
			},
			{
			  "key": "5-13",
			  "id": "OM_4500 20",
			  "label": "4500 20"
			},
			{
			  "key": "5-14",
			  "id": "OM_4500 20 S",
			  "label": "4500 20 S"
			},
			{
			  "key": "5-15",
			  "id": "OM_4500 23",
			  "label": "4500 23"
			},
			{
			  "key": "5-16",
			  "id": "OM_4500 23 S",
			  "label": "4500 23 S"
			},
			{
			  "key": "5-17",
			  "id": "OM_4500 24",
			  "label": "4500 24"
			},
			{
			  "key": "5-18",
			  "id": "OM_4500 24 S",
			  "label": "4500 24 S"
			},
			{
			  "key": "5-19",
			  "id": "OM_6500 20",
			  "label": "6500 20"
			},
			{
			  "key": "5-20",
			  "id": "OM_6500 20 S",
			  "label": "6500 20 S"
			},
			{
			  "key": "5-21",
			  "id": "OM_6500 21",
			  "label": "6500 21"
			},
			{
			  "key": "5-22",
			  "id": "OM_6500 21 S",
			  "label": "6500 21 S"
			},
			{
			  "key": "5-23",
			  "id": "OM_6500 22",
			  "label": "6500 22"
			},
			{
			  "key": "5-24",
			  "id": "OM_6500 22 S",
			  "label": "6500 22 S"
			},
			{
			  "key": "5-25",
			  "id": "OM_8500 21",
			  "label": "8500 21"
			},
			{
			  "key": "5-26",
			  "id": "OM_8500 21 S",
			  "label": "8500 21 S"
			},
			{
			  "key": "5-27",
			  "id": "OM_8500 22",
			  "label": "8500 22"
			},
			{
			  "key": "5-28",
			  "id": "OM_8500 22 S",
			  "label": "8500 22 S"
			},
			{
			  "key": "5-29",
			  "id": "OM_MIDOC10",
			  "label": "MIDOC10"
			},
			{
			  "key": "5-30",
			  "id": "OM_MIDOC10S",
			  "label": "MIDOC10S"
			}
		  ]
		},
		{
		  "key": "6",
		  "label": "OSDE",
		  "children": [
			{
			  "key": "6-0",
			  "id": "OS_210",
			  "label": "210"
			},
			{
			  "key": "6-1",
			  "id": "OS_310",
			  "label": "310"
			},
			{
			  "key": "6-2",
			  "id": "OS_410",
			  "label": "410"
			},
			{
			  "key": "6-3",
			  "id": "OS_450",
			  "label": "450"
			},
			{
			  "key": "6-4",
			  "id": "OS_510",
			  "label": "510"
			}
		  ]
		},
		{
		  "key": "7",
		  "label": "Premedic",
		  "children": [
			{
			  "key": "7-0",
			  "id": "Pr_200",
			  "label": "200"
			},
			{
			  "key": "7-1",
			  "id": "Pr_300",
			  "label": "300"
			},
			{
			  "key": "7-2",
			  "id": "Pr_400",
			  "label": "400"
			},
			{
			  "key": "7-3",
			  "id": "Pr_500",
			  "label": "500"
			},
			{
			  "key": "7-4",
			  "id": "Pr_PMO",
			  "label": "PMO"
			}
		  ]
		},
		{
		  "key": "8",
		  "label": "Prevencion Salud",
		  "children": [
			{
			  "key": "8-0",
			  "id": "PS_A1",
			  "label": "A1"
			},
			{
			  "key": "8-1",
			  "id": "PS_A2",
			  "label": "A2"
			},
			{
			  "key": "8-2",
			  "id": "PS_A4",
			  "label": "A4"
			},
			{
			  "key": "8-3",
			  "id": "PS_A5",
			  "label": "A5"
			}
		  ]
		},
		{
		  "key": "9",
		  "label": "Salud Central",
		  "children": [
			{
			  "key": "9-0",
			  "id": "SC_SC30",
			  "label": "SC30"
			},
			{
			  "key": "9-1",
			  "id": "SC_SC70",
			  "label": "SC70"
			}
		  ]
		},
		{
		  "key": "10",
		  "label": "SanCor Salud",
		  "children": [
			{
			  "key": "10-0",
			  "id": "SS_F800",
			  "label": "F800"
			},
			{
			  "key": "10-1",
			  "id": "SS_1000B c/copagos",
			  "label": "1000B c/copagos"
			},
			{
			  "key": "10-2",
			  "id": "SS_1000B",
			  "label": "1000B"
			},
			{
			  "key": "10-3",
			  "id": "SS_1500B c/copagos",
			  "label": "1500B c/copagos"
			},
			{
			  "key": "10-4",
			  "id": "SS_1500B",
			  "label": "1500B"
			},
			{
			  "key": "10-5",
			  "id": "SS_3000B",
			  "label": "3000B"
			},
			{
			  "key": "10-6",
			  "id": "SS_3500",
			  "label": "3500"
			},
			{
			  "key": "10-7",
			  "id": "SS_4000",
			  "label": "4000"
			},
			{
			  "key": "10-8",
			  "id": "SS_4500",
			  "label": "4500"
			},
			{
			  "key": "10-9",
			  "id": "SS_F700",
			  "label": "F700"
			},
			{
			  "key": "10-10",
			  "id": "SS_5000",
			  "label": "5000"
			},
			{
			  "key": "10-11",
			  "id": "SS_6000",
			  "label": "6000"
			}
		  ]
		},
		{
		  "key": "11",
		  "label": "Swiss Medical",
		  "children": [
			{
			  "key": "11-0",
			  "id": "SM_S1",
			  "label": "S1"
			},
			{
			  "key": "11-1",
			  "id": "SM_S2",
			  "label": "S2"
			},
			{
			  "key": "11-2",
			  "id": "SM_SMG01",
			  "label": "SMG01"
			},
			{
			  "key": "11-3",
			  "id": "SM_SMG02",
			  "label": "SMG02"
			},
			{
			  "key": "11-4",
			  "id": "SM_SMG10",
			  "label": "SMG10"
			},
			{
			  "key": "11-5",
			  "id": "SM_SMG20",
			  "label": "SMG20"
			},
			{
			  "key": "11-6",
			  "id": "SM_SMG40",
			  "label": "SMG40"
			},
			{
			  "key": "11-7",
			  "id": "SM_SMG50",
			  "label": "SMG50"
			},
			{
			  "key": "11-8",
			  "id": "SM_SMG60",
			  "label": "SMG60"
			},
			{
			  "key": "11-9",
			  "id": "SM_SMG70",
			  "label": "SMG70"
			}
		  ]
		}
	  ]}

    getTreeNodesData() {
        return [
            {
                key: '0',
                label: 'Documents',
                data: 'Documents Folder',
                icon: 'pi pi-fw pi-inbox',
                children: [
                    {
                        key: '0-0',
                        label: 'Work',
                        data: 'Work Folder',
                        icon: 'pi pi-fw pi-cog',
                        children: [
                            { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                            { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
                        ]
                    },
                    {
                        key: '0-1',
                        label: 'Home',
                        data: 'Home Folder',
                        icon: 'pi pi-fw pi-home',
                        children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
                    }
                ]
            },
            {
                key: '1',
                label: 'Events',
                data: 'Events Folder',
                icon: 'pi pi-fw pi-calendar',
                children: [
                    { key: '1-0', label: 'Meeting', icon: 'pi pi-fw pi-calendar-plus', data: 'Meeting' },
                    { key: '1-1', label: 'Product Launch', icon: 'pi pi-fw pi-calendar-plus', data: 'Product Launch' },
                    { key: '1-2', label: 'Report Review', icon: 'pi pi-fw pi-calendar-plus', data: 'Report Review' }
                ]
            },
            {
                key: '2',
                label: 'Movies',
                data: 'Movies Folder',
                icon: 'pi pi-fw pi-star-fill',
                children: [
                    {
                        key: '2-0',
                        icon: 'pi pi-fw pi-star-fill',
                        label: 'Al Pacino',
                        data: 'Pacino Movies',
                        children: [
                            { key: '2-0-0', label: 'Scarface', icon: 'pi pi-fw pi-video', data: 'Scarface Movie' },
                            { key: '2-0-1', label: 'Serpico', icon: 'pi pi-fw pi-video', data: 'Serpico Movie' }
                        ]
                    },
                    {
                        key: '2-1',
                        label: 'Robert De Niro',
                        icon: 'pi pi-fw pi-star-fill',
                        data: 'De Niro Movies',
                        children: [
                            { key: '2-1-0', label: 'Goodfellas', icon: 'pi pi-fw pi-video', data: 'Goodfellas Movie' },
                            { key: '2-1-1', label: 'Untouchables', icon: 'pi pi-fw pi-video', data: 'Untouchables Movie' }
                        ]
                    }
                ]
            }
        ];
    }

    getTreeTableNodesData() {
        return [
            {
                key: '0',
                data: {
                    name: 'Applications',
                    size: '100kb',
                    type: 'Folder'
                },
                children: [
                    {
                        key: '0-0',
                        data: {
                            name: 'React',
                            size: '25kb',
                            type: 'Folder'
                        },
                        children: [
                            {
                                key: '0-0-0',
                                data: {
                                    name: 'react.app',
                                    size: '10kb',
                                    type: 'Application'
                                }
                            },
                            {
                                key: '0-0-1',
                                data: {
                                    name: 'native.app',
                                    size: '10kb',
                                    type: 'Application'
                                }
                            },
                            {
                                key: '0-0-2',
                                data: {
                                    name: 'mobile.app',
                                    size: '5kb',
                                    type: 'Application'
                                }
                            }
                        ]
                    },
                    {
                        key: '0-1',
                        data: {
                            name: 'editor.app',
                            size: '25kb',
                            type: 'Application'
                        }
                    },
                    {
                        key: '0-2',
                        data: {
                            name: 'settings.app',
                            size: '50kb',
                            type: 'Application'
                        }
                    }
                ]
            },
            {
                key: '1',
                data: {
                    name: 'Cloud',
                    size: '20kb',
                    type: 'Folder'
                },
                children: [
                    {
                        key: '1-0',
                        data: {
                            name: 'backup-1.zip',
                            size: '10kb',
                            type: 'Zip'
                        }
                    },
                    {
                        key: '1-1',
                        data: {
                            name: 'backup-2.zip',
                            size: '10kb',
                            type: 'Zip'
                        }
                    }
                ]
            },
            {
                key: '2',
                data: {
                    name: 'Desktop',
                    size: '150kb',
                    type: 'Folder'
                },
                children: [
                    {
                        key: '2-0',
                        data: {
                            name: 'note-meeting.txt',
                            size: '50kb',
                            type: 'Text'
                        }
                    },
                    {
                        key: '2-1',
                        data: {
                            name: 'note-todo.txt',
                            size: '100kb',
                            type: 'Text'
                        }
                    }
                ]
            },
            {
                key: '3',
                data: {
                    name: 'Documents',
                    size: '75kb',
                    type: 'Folder'
                },
                children: [
                    {
                        key: '3-0',
                        data: {
                            name: 'Work',
                            size: '55kb',
                            type: 'Folder'
                        },
                        children: [
                            {
                                key: '3-0-0',
                                data: {
                                    name: 'Expenses.doc',
                                    size: '30kb',
                                    type: 'Document'
                                }
                            },
                            {
                                key: '3-0-1',
                                data: {
                                    name: 'Resume.doc',
                                    size: '25kb',
                                    type: 'Resume'
                                }
                            }
                        ]
                    },
                    {
                        key: '3-1',
                        data: {
                            name: 'Home',
                            size: '20kb',
                            type: 'Folder'
                        },
                        children: [
                            {
                                key: '3-1-0',
                                data: {
                                    name: 'Invoices',
                                    size: '20kb',
                                    type: 'Text'
                                }
                            }
                        ]
                    }
                ]
            },
            {
                key: '4',
                data: {
                    name: 'Downloads',
                    size: '25kb',
                    type: 'Folder'
                },
                children: [
                    {
                        key: '4-0',
                        data: {
                            name: 'Spanish',
                            size: '10kb',
                            type: 'Folder'
                        },
                        children: [
                            {
                                key: '4-0-0',
                                data: {
                                    name: 'tutorial-a1.txt',
                                    size: '5kb',
                                    type: 'Text'
                                }
                            },
                            {
                                key: '4-0-1',
                                data: {
                                    name: 'tutorial-a2.txt',
                                    size: '5kb',
                                    type: 'Text'
                                }
                            }
                        ]
                    },
                    {
                        key: '4-1',
                        data: {
                            name: 'Travel',
                            size: '15kb',
                            type: 'Text'
                        },
                        children: [
                            {
                                key: '4-1-0',
                                data: {
                                    name: 'Hotel.pdf',
                                    size: '10kb',
                                    type: 'PDF'
                                }
                            },
                            {
                                key: '4-1-1',
                                data: {
                                    name: 'Flight.pdf',
                                    size: '5kb',
                                    type: 'PDF'
                                }
                            }
                        ]
                    }
                ]
            },
            {
                key: '5',
                data: {
                    name: 'Main',
                    size: '50kb',
                    type: 'Folder'
                },
                children: [
                    {
                        key: '5-0',
                        data: {
                            name: 'bin',
                            size: '50kb',
                            type: 'Link'
                        }
                    },
                    {
                        key: '5-1',
                        data: {
                            name: 'etc',
                            size: '100kb',
                            type: 'Link'
                        }
                    },
                    {
                        key: '5-2',
                        data: {
                            name: 'var',
                            size: '100kb',
                            type: 'Link'
                        }
                    }
                ]
            },
            {
                key: '6',
                data: {
                    name: 'Other',
                    size: '5kb',
                    type: 'Folder'
                },
                children: [
                    {
                        key: '6-0',
                        data: {
                            name: 'todo.txt',
                            size: '3kb',
                            type: 'Text'
                        }
                    },
                    {
                        key: '6-1',
                        data: {
                            name: 'logo.png',
                            size: '2kb',
                            type: 'Picture'
                        }
                    }
                ]
            },
            {
                key: '7',
                data: {
                    name: 'Pictures',
                    size: '150kb',
                    type: 'Folder'
                },
                children: [
                    {
                        key: '7-0',
                        data: {
                            name: 'barcelona.jpg',
                            size: '90kb',
                            type: 'Picture'
                        }
                    },
                    {
                        key: '7-1',
                        data: {
                            name: 'primeng.png',
                            size: '30kb',
                            type: 'Picture'
                        }
                    },
                    {
                        key: '7-2',
                        data: {
                            name: 'prime.jpg',
                            size: '30kb',
                            type: 'Picture'
                        }
                    }
                ]
            },
            {
                key: '8',
                data: {
                    name: 'Videos',
                    size: '1500kb',
                    type: 'Folder'
                },
                children: [
                    {
                        key: '8-0',
                        data: {
                            name: 'primefaces.mkv',
                            size: '1000kb',
                            type: 'Video'
                        }
                    },
                    {
                        key: '8-1',
                        data: {
                            name: 'intro.avi',
                            size: '500kb',
                            type: 'Video'
                        }
                    }
                ]
            }
        ];
    }

    getLazyNodesData() {
        return [
            {
                "label": "Lazy Node 0",
                "data": "Node 0",
                "expandedIcon": "pi pi-folder-open",
                "collapsedIcon": "pi pi-folder",
                "leaf": false
            },
            {
                "label": "Lazy Node 1",
                "data": "Node 1",
                "expandedIcon": "pi pi-folder-open",
                "collapsedIcon": "pi pi-folder",
                "leaf": false
            },
            {
                "label": "Lazy Node 1",
                "data": "Node 2",
                "expandedIcon": "pi pi-folder-open",
                "collapsedIcon": "pi pi-folder",
                "leaf": false
            }
        ]
    }

    getFileSystemNodesData() {
        return [  
            {  
                "data":{  
                    "name":"Applications",
                    "size":"200mb",
                    "type":"Folder"
                },
                "children":[  
                    {  
                        "data":{  
                            "name":"Angular",
                            "size":"25mb",
                            "type":"Folder"
                        },
                        "children":[  
                            {  
                                "data":{  
                                    "name":"angular.app",
                                    "size":"10mb",
                                    "type":"Application"
                                }
                            },
                            {  
                                "data":{  
                                    "name":"cli.app",
                                    "size":"10mb",
                                    "type":"Application"
                                }
                            },
                            {  
                                "data":{  
                                    "name":"mobile.app",
                                    "size":"5mb",
                                    "type":"Application"
                                }
                            }
                        ]
                    },
                    {  
                        "data":{  
                            "name":"editor.app",
                            "size":"25mb",
                            "type":"Application"
                        }
                    },
                    {  
                        "data":{  
                            "name":"settings.app",
                            "size":"50mb",
                            "type":"Application"
                        }
                    }
                ]
            },
            {  
                "data":{  
                    "name":"Cloud",
                    "size":"20mb",
                    "type":"Folder"
                },
                "children":[  
                    {  
                        "data":{  
                            "name":"backup-1.zip",
                            "size":"10mb",
                            "type":"Zip"
                        }
                    },
                    {  
                        "data":{  
                            "name":"backup-2.zip",
                            "size":"10mb",
                            "type":"Zip"
                        }
                    }
                ]
            },
            {  
                "data": {  
                    "name":"Desktop",
                    "size":"150kb",
                    "type":"Folder"
                },
                "children":[  
                    {  
                        "data":{  
                            "name":"note-meeting.txt",
                            "size":"50kb",
                            "type":"Text"
                        }
                    },
                    {  
                        "data":{  
                            "name":"note-todo.txt",
                            "size":"100kb",
                            "type":"Text"
                        }
                    }
                ]
            },
            {  
                "data":{  
                    "name":"Documents",
                    "size":"75kb",
                    "type":"Folder"
                },
                "children":[
                    {  
                        "data":{  
                            "name":"Work",
                            "size":"55kb",
                            "type":"Folder"
                        },
                        "children":[  
                            {  
                                "data":{  
                                    "name":"Expenses.doc",
                                    "size":"30kb",
                                    "type":"Document"
                                }
                            },
                            {  
                                "data":{  
                                    "name":"Resume.doc",
                                    "size":"25kb",
                                    "type":"Resume"
                                }
                            }
                        ]
                    },
                    {  
                        "data":{  
                            "name":"Home",
                            "size":"20kb",
                            "type":"Folder"
                        },
                        "children":[  
                            {  
                                "data":{  
                                    "name":"Invoices",
                                    "size":"20kb",
                                    "type":"Text"
                                }
                            }
                        ]
                    }
                ]
            },
            {  
                "data": {  
                    "name":"Downloads",
                    "size":"25mb",
                    "type":"Folder"
                },
                "children":[  
                    {  
                        "data": {  
                            "name":"Spanish",
                            "size":"10mb",
                            "type":"Folder"
                        },
                        "children":[  
                            {  
                                "data":{  
                                    "name":"tutorial-a1.txt",
                                    "size":"5mb",
                                    "type":"Text"
                                }
                            },
                            {  
                                "data":{  
                                    "name":"tutorial-a2.txt",
                                    "size":"5mb",
                                    "type":"Text"
                                }
                            }
                        ]
                    },
                    {  
                        "data":{  
                            "name":"Travel",
                            "size":"15mb",
                            "type":"Text"
                        },
                        "children":[  
                            {  
                                "data":{  
                                    "name":"Hotel.pdf",
                                    "size":"10mb",
                                    "type":"PDF"
                                }
                            },
                            {  
                                "data":{  
                                    "name":"Flight.pdf",
                                    "size":"5mb",
                                    "type":"PDF"
                                }
                            }
                        ]
                    }
                ]
            },
            {  
                "data": {  
                    "name":"Main",
                    "size":"50mb",
                    "type":"Folder"
                },
                "children":[  
                    {  
                        "data":{  
                            "name":"bin",
                            "size":"50kb",
                            "type":"Link"
                        }
                    },
                    {  
                        "data":{  
                            "name":"etc",
                            "size":"100kb",
                            "type":"Link"
                        }
                    },
                    {  
                        "data":{  
                            "name":"var",
                            "size":"100kb",
                            "type":"Link"
                        }
                    }
                ]
            },
            {  
                "data":{  
                    "name":"Other",
                    "size":"5mb",
                    "type":"Folder"
                },
                "children":[  
                    {  
                        "data":{  
                            "name":"todo.txt",
                            "size":"3mb",
                            "type":"Text"
                        }
                    },
                    {  
                        "data":{  
                            "name":"logo.png",
                            "size":"2mb",
                            "type":"Picture"
                        }
                    }
                ]
            },
            {  
                "data":{  
                    "name":"Pictures",
                    "size":"150kb",
                    "type":"Folder"
                },
                "children":[  
                    {  
                        "data":{  
                            "name":"barcelona.jpg",
                            "size":"90kb",
                            "type":"Picture"
                        }
                    },
                    {  
                        "data":{  
                            "name":"primeng.png",
                            "size":"30kb",
                            "type":"Picture"
                        }
                    },
                    {  
                        "data":{  
                            "name":"prime.jpg",
                            "size":"30kb",
                            "type":"Picture"
                        }
                    }
                ]
            },
            {  
                "data":{  
                    "name":"Videos",
                    "size":"1500mb",
                    "type":"Folder"
                },
                "children":[  
                    {  
                        "data":{  
                            "name":"primefaces.mkv",
                            "size":"1000mb",
                            "type":"Video"
                        }
                    },
                    {  
                        "data":{  
                            "name":"intro.avi",
                            "size":"500mb",
                            "type":"Video"
                        }
                    }
                ]
            }
        ]
    }
    
    getTreeTableNodes() {
        return Promise.resolve(this.getTreeTableNodesData());
    }

    getTreeNodes() {
        return Promise.resolve(this.getTreeNodesData());
    }

    getFiles() {
        return Promise.resolve(this.getTreeNodesData());
    }

    getLazyFiles() {
        return Promise.resolve(this.getLazyNodesData());
    }

    getFilesystem() {
        return Promise.resolve(this.getFileSystemNodesData());
    }
    
};