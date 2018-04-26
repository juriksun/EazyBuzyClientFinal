import {Injectable} from "@angular/core";
import {Http, Response} from '@angular/http'
import {Observable} from 'rxjs/Observable';
import {Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { TaskResponse } from "../models/tasks-response.model";
import { User } from "../models/user.model";
import { UserServiseModule } from "./user_mdl.component";
import { Url } from "../models/url.model";

@Injectable()
export class RouteServiseModule{

  private url: string = 'http://localhost:3000/';
  // private url: string = 'https://eazy-buzy-server.herokuapp.com/';
  // private url: string = Url().getUrl();
  public route: any;
  public staticRes: any = {"status":"true","data":{"_id":"5ade4c1faa633041246b3f6a","recommended_route": {
    "segments": [
        {
            "startPoint": {
                "address": "Ha-Gilgal St 59, Ramat Gan, Израиль",
                "place_id": "ChIJh_a-fjZKHRURbfWQ2nG9XpA",
                "geometry": {
                    "location": {
                        "lat": 32.0799162,
                        "lng": 34.824053700000036
                    }
                },
                "task_identifier": {
                    "name": "Start"
                }
            },
            "endPoint": {
                "geometry": {
                    "location": {
                        "lat": 32.07941450000001,
                        "lng": 34.815057
                    },
                    "viewport": {
                        "northeast": {
                            "lat": 32.08076477989272,
                            "lng": 34.81631727989272
                        },
                        "southwest": {
                            "lat": 32.07806512010728,
                            "lng": 34.81361762010727
                        }
                    }
                },
                "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/shopping-71.png",
                "id": "536d0704689edaeac72dcd3a5df8ef4c0d9ccf86",
                "name": "סופר-פארם כופר היישוב",
                "opening_hours": {
                    "open_now": true,
                    "weekday_text": []
                },
                "photos": [
                    {
                        "height": 3024,
                        "html_attributions": [
                            "<a href=\"https://maps.google.com/maps/contrib/116761068565218428792/photos\">Avihai Nizri<\/a>"
                        ],
                        "photo_reference": "CmRaAAAAJ1UOcdbdackY61AbqKPwkFSFwX7C3ENfcdf15y4IV5sbrk0UGuD_JP2XazA5EnFiN2yZbb9ebIlv43gUzZK5SZZH0VEbHzXm7Q3rcfu67wPaHrhKWt2NZ3Jkix7F1E1WEhAisbUd25Y5dultueLft_2AGhTBEhgNhRzLaEEPYyNq0cBIuc1gdQ",
                        "width": 4032
                    }
                ],
                "place_id": "ChIJoTVzmLVLHRURQVg7qxZ17nk",
                "rating": 4,
                "reference": "CmRbAAAAsJfweqHf-VX1YQt9gTeRrMEy7EjtKucxfRsIMMkDaKN41-F4U3xmfawcNO2AA4V3JOk2pk2XMJObAXcEutiyDyPbeABaQi3uK_MLo9R89A8-oDVY_vv1eRf6oqLOSpt3EhCdY6-JsK6wrxFcuh_9v7kVGhTGuEC1JDUXeTdGAgZ1d11yzvqPyA",
                "scope": "GOOGLE",
                "types": [
                    "pharmacy",
                    "store",
                    "health",
                    "point_of_interest",
                    "establishment"
                ],
                "vicinity": "ביאליק 10, רמת גן",
                "task_identifier": {
                    "id": "5adf610f6016683c583043f4",
                    "name": "acamol"
                }
            },
            "duration": 404,
            "distance": 1586,
            "polylines": [
                {
                    "start": {
                        "lat": 32.08006,
                        "lng": 34.82399
                    },
                    "end": {
                        "lat": 32.08,
                        "lng": 34.82375
                    }
                },
                {
                    "start": {
                        "lat": 32.08,
                        "lng": 34.82375
                    },
                    "end": {
                        "lat": 32.07998,
                        "lng": 34.82353
                    }
                },
                {
                    "start": {
                        "lat": 32.07998,
                        "lng": 34.82353
                    },
                    "end": {
                        "lat": 32.07998,
                        "lng": 34.82322
                    }
                },
                {
                    "start": {
                        "lat": 32.07998,
                        "lng": 34.82322
                    },
                    "end": {
                        "lat": 32.08025,
                        "lng": 34.82203
                    }
                },
                {
                    "start": {
                        "lat": 32.08025,
                        "lng": 34.82203
                    },
                    "end": {
                        "lat": 32.07995,
                        "lng": 34.82192
                    }
                },
                {
                    "start": {
                        "lat": 32.07995,
                        "lng": 34.82192
                    },
                    "end": {
                        "lat": 32.07971,
                        "lng": 34.82184
                    }
                },
                {
                    "start": {
                        "lat": 32.07971,
                        "lng": 34.82184
                    },
                    "end": {
                        "lat": 32.0793,
                        "lng": 34.82181
                    }
                },
                {
                    "start": {
                        "lat": 32.0793,
                        "lng": 34.82181
                    },
                    "end": {
                        "lat": 32.07932,
                        "lng": 34.82136
                    }
                },
                {
                    "start": {
                        "lat": 32.07932,
                        "lng": 34.82136
                    },
                    "end": {
                        "lat": 32.07937,
                        "lng": 34.82003
                    }
                },
                {
                    "start": {
                        "lat": 32.07937,
                        "lng": 34.82003
                    },
                    "end": {
                        "lat": 32.07941,
                        "lng": 34.81977
                    }
                },
                {
                    "start": {
                        "lat": 32.07941,
                        "lng": 34.81977
                    },
                    "end": {
                        "lat": 32.08037,
                        "lng": 34.82006
                    }
                },
                {
                    "start": {
                        "lat": 32.08037,
                        "lng": 34.82006
                    },
                    "end": {
                        "lat": 32.081,
                        "lng": 34.81859
                    }
                },
                {
                    "start": {
                        "lat": 32.081,
                        "lng": 34.81859
                    },
                    "end": {
                        "lat": 32.08131,
                        "lng": 34.81792
                    }
                },
                {
                    "start": {
                        "lat": 32.08131,
                        "lng": 34.81792
                    },
                    "end": {
                        "lat": 32.08162,
                        "lng": 34.81728
                    }
                },
                {
                    "start": {
                        "lat": 32.08162,
                        "lng": 34.81728
                    },
                    "end": {
                        "lat": 32.08184,
                        "lng": 34.81687
                    }
                },
                {
                    "start": {
                        "lat": 32.08184,
                        "lng": 34.81687
                    },
                    "end": {
                        "lat": 32.08211,
                        "lng": 34.81651
                    }
                },
                {
                    "start": {
                        "lat": 32.08211,
                        "lng": 34.81651
                    },
                    "end": {
                        "lat": 32.08226,
                        "lng": 34.81637
                    }
                },
                {
                    "start": {
                        "lat": 32.08226,
                        "lng": 34.81637
                    },
                    "end": {
                        "lat": 32.08246,
                        "lng": 34.81621
                    }
                },
                {
                    "start": {
                        "lat": 32.08246,
                        "lng": 34.81621
                    },
                    "end": {
                        "lat": 32.08257,
                        "lng": 34.81613
                    }
                },
                {
                    "start": {
                        "lat": 32.08257,
                        "lng": 34.81613
                    },
                    "end": {
                        "lat": 32.083,
                        "lng": 34.81581
                    }
                },
                {
                    "start": {
                        "lat": 32.083,
                        "lng": 34.81581
                    },
                    "end": {
                        "lat": 32.08288,
                        "lng": 34.8154
                    }
                },
                {
                    "start": {
                        "lat": 32.08288,
                        "lng": 34.8154
                    },
                    "end": {
                        "lat": 32.08281,
                        "lng": 34.81511
                    }
                },
                {
                    "start": {
                        "lat": 32.08281,
                        "lng": 34.81511
                    },
                    "end": {
                        "lat": 32.0827,
                        "lng": 34.81468
                    }
                },
                {
                    "start": {
                        "lat": 32.0827,
                        "lng": 34.81468
                    },
                    "end": {
                        "lat": 32.08214,
                        "lng": 34.81483
                    }
                },
                {
                    "start": {
                        "lat": 32.08214,
                        "lng": 34.81483
                    },
                    "end": {
                        "lat": 32.0816,
                        "lng": 34.81489
                    }
                },
                {
                    "start": {
                        "lat": 32.0816,
                        "lng": 34.81489
                    },
                    "end": {
                        "lat": 32.08094,
                        "lng": 34.81489
                    }
                },
                {
                    "start": {
                        "lat": 32.08094,
                        "lng": 34.81489
                    },
                    "end": {
                        "lat": 32.07942,
                        "lng": 34.81488
                    }
                }
            ]
        },
        {
            "startPoint": {
                "geometry": {
                    "location": {
                        "lat": 32.07941450000001,
                        "lng": 34.815057
                    },
                    "viewport": {
                        "northeast": {
                            "lat": 32.08076477989272,
                            "lng": 34.81631727989272
                        },
                        "southwest": {
                            "lat": 32.07806512010728,
                            "lng": 34.81361762010727
                        }
                    }
                },
                "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/shopping-71.png",
                "id": "536d0704689edaeac72dcd3a5df8ef4c0d9ccf86",
                "name": "סופר-פארם כופר היישוב",
                "opening_hours": {
                    "open_now": true,
                    "weekday_text": []
                },
                "photos": [
                    {
                        "height": 3024,
                        "html_attributions": [
                            "<a href=\"https://maps.google.com/maps/contrib/116761068565218428792/photos\">Avihai Nizri<\/a>"
                        ],
                        "photo_reference": "CmRaAAAAJ1UOcdbdackY61AbqKPwkFSFwX7C3ENfcdf15y4IV5sbrk0UGuD_JP2XazA5EnFiN2yZbb9ebIlv43gUzZK5SZZH0VEbHzXm7Q3rcfu67wPaHrhKWt2NZ3Jkix7F1E1WEhAisbUd25Y5dultueLft_2AGhTBEhgNhRzLaEEPYyNq0cBIuc1gdQ",
                        "width": 4032
                    }
                ],
                "place_id": "ChIJoTVzmLVLHRURQVg7qxZ17nk",
                "rating": 4,
                "reference": "CmRbAAAAsJfweqHf-VX1YQt9gTeRrMEy7EjtKucxfRsIMMkDaKN41-F4U3xmfawcNO2AA4V3JOk2pk2XMJObAXcEutiyDyPbeABaQi3uK_MLo9R89A8-oDVY_vv1eRf6oqLOSpt3EhCdY6-JsK6wrxFcuh_9v7kVGhTGuEC1JDUXeTdGAgZ1d11yzvqPyA",
                "scope": "GOOGLE",
                "types": [
                    "pharmacy",
                    "store",
                    "health",
                    "point_of_interest",
                    "establishment"
                ],
                "vicinity": "ביאליק 10, רמת גן",
                "task_identifier": {
                    "id": "5adf610f6016683c583043f4",
                    "name": "acamol"
                }
            },
            "endPoint": {
                "geometry": {
                    "location": {
                        "lat": 32.0840641,
                        "lng": 34.8073313
                    },
                    "viewport": {
                        "northeast": {
                            "lat": 32.08541392989272,
                            "lng": 34.80868112989273
                        },
                        "southwest": {
                            "lat": 32.08271427010728,
                            "lng": 34.80598147010728
                        }
                    }
                },
                "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/gas_station-71.png",
                "id": "68d8e5409d33390c48d1b3cfb7f7a113ccf2697e",
                "name": "פז",
                "opening_hours": {
                    "open_now": true,
                    "weekday_text": []
                },
                "photos": [
                    {
                        "height": 4176,
                        "html_attributions": [
                            "<a href=\"https://maps.google.com/maps/contrib/109424846836028108615/photos\">Леон Филиш<\/a>"
                        ],
                        "photo_reference": "CmRaAAAAuTGVyMHFmIPIb-SWxyKMaNUwJTw21nLCqLdk04PE1ItyAUkQ7Q99EsIjVZUd81mbyNGQwX2oeN2B90x-rjQlXqD8dx7iPDaOi-NLqPbB_TMsI9VLNscoA_zaSITUufReEhB7DnTy2nIrKq9EdWwLTNMxGhQZBeDNYvBUt284qnrM_oXmCpT-cw",
                        "width": 2366
                    }
                ],
                "place_id": "ChIJ47Jj48dLHRURQLNCgkpBSKw",
                "rating": 3.6,
                "reference": "CmRbAAAAffdDGdFtm1voqsklNwTGeK2rdVD-tkI9hVI-BBiFON6m_iv4AlCUzP_EEeW43dCli__q3Lc9WSFNw2uGIYno1gP8POxrx953Jy_pLsWxHj2wcil98gK24RCYmxF7ecnTEhCvjGi3uNkm2SUeH49w5iwZGhRkgn1IQRnsbf8TceT5sblXERheVw",
                "scope": "GOOGLE",
                "types": [
                    "gas_station",
                    "point_of_interest",
                    "establishment"
                ],
                "vicinity": "דרך זאב ז'בוטינסקי 37, רמת גן",
                "task_identifier": {
                    "id": "5adf62aecd48234780363a87",
                    "name": "fuel"
                }
            },
            "duration": 403,
            "distance": 1761,
            "polylines": [
                {
                    "start": {
                        "lat": 32.07942,
                        "lng": 34.81488
                    },
                    "end": {
                        "lat": 32.07918,
                        "lng": 34.81488
                    }
                },
                {
                    "start": {
                        "lat": 32.07918,
                        "lng": 34.81488
                    },
                    "end": {
                        "lat": 32.07925,
                        "lng": 34.81427
                    }
                },
                {
                    "start": {
                        "lat": 32.07925,
                        "lng": 34.81427
                    },
                    "end": {
                        "lat": 32.07941,
                        "lng": 34.81364
                    }
                },
                {
                    "start": {
                        "lat": 32.07941,
                        "lng": 34.81364
                    },
                    "end": {
                        "lat": 32.07975,
                        "lng": 34.81317
                    }
                },
                {
                    "start": {
                        "lat": 32.07975,
                        "lng": 34.81317
                    },
                    "end": {
                        "lat": 32.07991,
                        "lng": 34.81299
                    }
                },
                {
                    "start": {
                        "lat": 32.07991,
                        "lng": 34.81299
                    },
                    "end": {
                        "lat": 32.08045,
                        "lng": 34.81246
                    }
                },
                {
                    "start": {
                        "lat": 32.08045,
                        "lng": 34.81246
                    },
                    "end": {
                        "lat": 32.0809,
                        "lng": 34.81195
                    }
                },
                {
                    "start": {
                        "lat": 32.0809,
                        "lng": 34.81195
                    },
                    "end": {
                        "lat": 32.08098,
                        "lng": 34.81184
                    }
                },
                {
                    "start": {
                        "lat": 32.08098,
                        "lng": 34.81184
                    },
                    "end": {
                        "lat": 32.081,
                        "lng": 34.81172
                    }
                },
                {
                    "start": {
                        "lat": 32.081,
                        "lng": 34.81172
                    },
                    "end": {
                        "lat": 32.08102,
                        "lng": 34.81157
                    }
                },
                {
                    "start": {
                        "lat": 32.08102,
                        "lng": 34.81157
                    },
                    "end": {
                        "lat": 32.08095,
                        "lng": 34.81081
                    }
                },
                {
                    "start": {
                        "lat": 32.08095,
                        "lng": 34.81081
                    },
                    "end": {
                        "lat": 32.08095,
                        "lng": 34.81051
                    }
                },
                {
                    "start": {
                        "lat": 32.08095,
                        "lng": 34.81051
                    },
                    "end": {
                        "lat": 32.08099,
                        "lng": 34.8104
                    }
                },
                {
                    "start": {
                        "lat": 32.08099,
                        "lng": 34.8104
                    },
                    "end": {
                        "lat": 32.08106,
                        "lng": 34.81023
                    }
                },
                {
                    "start": {
                        "lat": 32.08106,
                        "lng": 34.81023
                    },
                    "end": {
                        "lat": 32.08118,
                        "lng": 34.81004
                    }
                },
                {
                    "start": {
                        "lat": 32.08118,
                        "lng": 34.81004
                    },
                    "end": {
                        "lat": 32.08161,
                        "lng": 34.80966
                    }
                },
                {
                    "start": {
                        "lat": 32.08161,
                        "lng": 34.80966
                    },
                    "end": {
                        "lat": 32.08163,
                        "lng": 34.80967
                    }
                },
                {
                    "start": {
                        "lat": 32.08163,
                        "lng": 34.80967
                    },
                    "end": {
                        "lat": 32.08165,
                        "lng": 34.80966
                    }
                },
                {
                    "start": {
                        "lat": 32.08165,
                        "lng": 34.80966
                    },
                    "end": {
                        "lat": 32.08166,
                        "lng": 34.80962
                    }
                },
                {
                    "start": {
                        "lat": 32.08166,
                        "lng": 34.80962
                    },
                    "end": {
                        "lat": 32.08164,
                        "lng": 34.80958
                    }
                },
                {
                    "start": {
                        "lat": 32.08164,
                        "lng": 34.80958
                    },
                    "end": {
                        "lat": 32.08163,
                        "lng": 34.80958
                    }
                },
                {
                    "start": {
                        "lat": 32.08163,
                        "lng": 34.80958
                    },
                    "end": {
                        "lat": 32.0816,
                        "lng": 34.80948
                    }
                },
                {
                    "start": {
                        "lat": 32.0816,
                        "lng": 34.80948
                    },
                    "end": {
                        "lat": 32.08154,
                        "lng": 34.80932
                    }
                },
                {
                    "start": {
                        "lat": 32.08154,
                        "lng": 34.80932
                    },
                    "end": {
                        "lat": 32.08147,
                        "lng": 34.80923
                    }
                },
                {
                    "start": {
                        "lat": 32.08147,
                        "lng": 34.80923
                    },
                    "end": {
                        "lat": 32.08128,
                        "lng": 34.80909
                    }
                },
                {
                    "start": {
                        "lat": 32.08128,
                        "lng": 34.80909
                    },
                    "end": {
                        "lat": 32.0812,
                        "lng": 34.809
                    }
                },
                {
                    "start": {
                        "lat": 32.0812,
                        "lng": 34.809
                    },
                    "end": {
                        "lat": 32.081,
                        "lng": 34.80874
                    }
                },
                {
                    "start": {
                        "lat": 32.081,
                        "lng": 34.80874
                    },
                    "end": {
                        "lat": 32.08095,
                        "lng": 34.80862
                    }
                },
                {
                    "start": {
                        "lat": 32.08095,
                        "lng": 34.80862
                    },
                    "end": {
                        "lat": 32.08094,
                        "lng": 34.80843
                    }
                },
                {
                    "start": {
                        "lat": 32.08094,
                        "lng": 34.80843
                    },
                    "end": {
                        "lat": 32.08097,
                        "lng": 34.80831
                    }
                },
                {
                    "start": {
                        "lat": 32.08097,
                        "lng": 34.80831
                    },
                    "end": {
                        "lat": 32.081,
                        "lng": 34.80825
                    }
                },
                {
                    "start": {
                        "lat": 32.081,
                        "lng": 34.80825
                    },
                    "end": {
                        "lat": 32.08116,
                        "lng": 34.80807
                    }
                },
                {
                    "start": {
                        "lat": 32.08116,
                        "lng": 34.80807
                    },
                    "end": {
                        "lat": 32.08125,
                        "lng": 34.80799
                    }
                },
                {
                    "start": {
                        "lat": 32.08125,
                        "lng": 34.80799
                    },
                    "end": {
                        "lat": 32.08141,
                        "lng": 34.8076
                    }
                },
                {
                    "start": {
                        "lat": 32.08141,
                        "lng": 34.8076
                    },
                    "end": {
                        "lat": 32.08153,
                        "lng": 34.80717
                    }
                },
                {
                    "start": {
                        "lat": 32.08153,
                        "lng": 34.80717
                    },
                    "end": {
                        "lat": 32.08177,
                        "lng": 34.80605
                    }
                },
                {
                    "start": {
                        "lat": 32.08177,
                        "lng": 34.80605
                    },
                    "end": {
                        "lat": 32.08199,
                        "lng": 34.80502
                    }
                },
                {
                    "start": {
                        "lat": 32.08199,
                        "lng": 34.80502
                    },
                    "end": {
                        "lat": 32.0821,
                        "lng": 34.80472
                    }
                },
                {
                    "start": {
                        "lat": 32.0821,
                        "lng": 34.80472
                    },
                    "end": {
                        "lat": 32.08248,
                        "lng": 34.8038
                    }
                },
                {
                    "start": {
                        "lat": 32.08248,
                        "lng": 34.8038
                    },
                    "end": {
                        "lat": 32.08257,
                        "lng": 34.80362
                    }
                },
                {
                    "start": {
                        "lat": 32.08257,
                        "lng": 34.80362
                    },
                    "end": {
                        "lat": 32.08268,
                        "lng": 34.80361
                    }
                },
                {
                    "start": {
                        "lat": 32.08268,
                        "lng": 34.80361
                    },
                    "end": {
                        "lat": 32.08277,
                        "lng": 34.80363
                    }
                },
                {
                    "start": {
                        "lat": 32.08277,
                        "lng": 34.80363
                    },
                    "end": {
                        "lat": 32.08284,
                        "lng": 34.80369
                    }
                },
                {
                    "start": {
                        "lat": 32.08284,
                        "lng": 34.80369
                    },
                    "end": {
                        "lat": 32.08331,
                        "lng": 34.80565
                    }
                },
                {
                    "start": {
                        "lat": 32.08331,
                        "lng": 34.80565
                    },
                    "end": {
                        "lat": 32.08386,
                        "lng": 34.80778
                    }
                },
                {
                    "start": {
                        "lat": 32.08386,
                        "lng": 34.80778
                    },
                    "end": {
                        "lat": 32.08398,
                        "lng": 34.80774
                    }
                },
                {
                    "start": {
                        "lat": 32.08398,
                        "lng": 34.80774
                    },
                    "end": {
                        "lat": 32.08395,
                        "lng": 34.80763
                    }
                },
                {
                    "start": {
                        "lat": 32.08395,
                        "lng": 34.80763
                    },
                    "end": {
                        "lat": 32.08398,
                        "lng": 34.8076
                    }
                },
                {
                    "start": {
                        "lat": 32.08398,
                        "lng": 34.8076
                    },
                    "end": {
                        "lat": 32.084,
                        "lng": 34.80755
                    }
                },
                {
                    "start": {
                        "lat": 32.084,
                        "lng": 34.80755
                    },
                    "end": {
                        "lat": 32.08399,
                        "lng": 34.80738
                    }
                },
                {
                    "start": {
                        "lat": 32.08399,
                        "lng": 34.80738
                    },
                    "end": {
                        "lat": 32.08399,
                        "lng": 34.80737
                    }
                }
            ]
        },
        {
            "startPoint": {
                "geometry": {
                    "location": {
                        "lat": 32.0840641,
                        "lng": 34.8073313
                    },
                    "viewport": {
                        "northeast": {
                            "lat": 32.08541392989272,
                            "lng": 34.80868112989273
                        },
                        "southwest": {
                            "lat": 32.08271427010728,
                            "lng": 34.80598147010728
                        }
                    }
                },
                "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/gas_station-71.png",
                "id": "68d8e5409d33390c48d1b3cfb7f7a113ccf2697e",
                "name": "פז",
                "opening_hours": {
                    "open_now": true,
                    "weekday_text": []
                },
                "photos": [
                    {
                        "height": 4176,
                        "html_attributions": [
                            "<a href=\"https://maps.google.com/maps/contrib/109424846836028108615/photos\">Леон Филиш<\/a>"
                        ],
                        "photo_reference": "CmRaAAAAuTGVyMHFmIPIb-SWxyKMaNUwJTw21nLCqLdk04PE1ItyAUkQ7Q99EsIjVZUd81mbyNGQwX2oeN2B90x-rjQlXqD8dx7iPDaOi-NLqPbB_TMsI9VLNscoA_zaSITUufReEhB7DnTy2nIrKq9EdWwLTNMxGhQZBeDNYvBUt284qnrM_oXmCpT-cw",
                        "width": 2366
                    }
                ],
                "place_id": "ChIJ47Jj48dLHRURQLNCgkpBSKw",
                "rating": 3.6,
                "reference": "CmRbAAAAffdDGdFtm1voqsklNwTGeK2rdVD-tkI9hVI-BBiFON6m_iv4AlCUzP_EEeW43dCli__q3Lc9WSFNw2uGIYno1gP8POxrx953Jy_pLsWxHj2wcil98gK24RCYmxF7ecnTEhCvjGi3uNkm2SUeH49w5iwZGhRkgn1IQRnsbf8TceT5sblXERheVw",
                "scope": "GOOGLE",
                "types": [
                    "gas_station",
                    "point_of_interest",
                    "establishment"
                ],
                "vicinity": "דרך זאב ז'בוטינסקי 37, רמת גן",
                "task_identifier": {
                    "id": "5adf62aecd48234780363a87",
                    "name": "fuel"
                }
            },
            "endPoint": {
                "address": "Anne Frank St 12, Ramat Gan, Израиль",
                "place_id": "ChIJnfFzOcRLHRURM9hDEucFhfs",
                "geometry": {
                    "location": {
                        "lat": 32.0900601,
                        "lng": 34.803569100000004
                    }
                },
                "task_identifier": {
                    "name": "End"
                }
            },
            "duration": 409,
            "distance": 1246,
            "polylines": [
                {
                    "start": {
                        "lat": 32.08399,
                        "lng": 34.80737
                    },
                    "end": {
                        "lat": 32.08396,
                        "lng": 34.80731
                    }
                },
                {
                    "start": {
                        "lat": 32.08396,
                        "lng": 34.80731
                    },
                    "end": {
                        "lat": 32.08392,
                        "lng": 34.80729
                    }
                },
                {
                    "start": {
                        "lat": 32.08392,
                        "lng": 34.80729
                    },
                    "end": {
                        "lat": 32.08386,
                        "lng": 34.80728
                    }
                },
                {
                    "start": {
                        "lat": 32.08386,
                        "lng": 34.80728
                    },
                    "end": {
                        "lat": 32.08382,
                        "lng": 34.80711
                    }
                },
                {
                    "start": {
                        "lat": 32.08382,
                        "lng": 34.80711
                    },
                    "end": {
                        "lat": 32.08369,
                        "lng": 34.80667
                    }
                },
                {
                    "start": {
                        "lat": 32.08369,
                        "lng": 34.80667
                    },
                    "end": {
                        "lat": 32.08346,
                        "lng": 34.80577
                    }
                },
                {
                    "start": {
                        "lat": 32.08346,
                        "lng": 34.80577
                    },
                    "end": {
                        "lat": 32.08341,
                        "lng": 34.80562
                    }
                },
                {
                    "start": {
                        "lat": 32.08341,
                        "lng": 34.80562
                    },
                    "end": {
                        "lat": 32.08365,
                        "lng": 34.80553
                    }
                },
                {
                    "start": {
                        "lat": 32.08365,
                        "lng": 34.80553
                    },
                    "end": {
                        "lat": 32.08397,
                        "lng": 34.80538
                    }
                },
                {
                    "start": {
                        "lat": 32.08397,
                        "lng": 34.80538
                    },
                    "end": {
                        "lat": 32.08397,
                        "lng": 34.80539
                    }
                },
                {
                    "start": {
                        "lat": 32.08397,
                        "lng": 34.80539
                    },
                    "end": {
                        "lat": 32.08399,
                        "lng": 34.80541
                    }
                },
                {
                    "start": {
                        "lat": 32.08399,
                        "lng": 34.80541
                    },
                    "end": {
                        "lat": 32.084,
                        "lng": 34.80541
                    }
                },
                {
                    "start": {
                        "lat": 32.084,
                        "lng": 34.80541
                    },
                    "end": {
                        "lat": 32.08403,
                        "lng": 34.80542
                    }
                },
                {
                    "start": {
                        "lat": 32.08403,
                        "lng": 34.80542
                    },
                    "end": {
                        "lat": 32.08409,
                        "lng": 34.8054
                    }
                },
                {
                    "start": {
                        "lat": 32.08409,
                        "lng": 34.8054
                    },
                    "end": {
                        "lat": 32.08413,
                        "lng": 34.80534
                    }
                },
                {
                    "start": {
                        "lat": 32.08413,
                        "lng": 34.80534
                    },
                    "end": {
                        "lat": 32.08464,
                        "lng": 34.80517
                    }
                },
                {
                    "start": {
                        "lat": 32.08464,
                        "lng": 34.80517
                    },
                    "end": {
                        "lat": 32.08512,
                        "lng": 34.80498
                    }
                },
                {
                    "start": {
                        "lat": 32.08512,
                        "lng": 34.80498
                    },
                    "end": {
                        "lat": 32.08533,
                        "lng": 34.80488
                    }
                },
                {
                    "start": {
                        "lat": 32.08533,
                        "lng": 34.80488
                    },
                    "end": {
                        "lat": 32.08544,
                        "lng": 34.80477
                    }
                },
                {
                    "start": {
                        "lat": 32.08544,
                        "lng": 34.80477
                    },
                    "end": {
                        "lat": 32.08562,
                        "lng": 34.80454
                    }
                },
                {
                    "start": {
                        "lat": 32.08562,
                        "lng": 34.80454
                    },
                    "end": {
                        "lat": 32.08574,
                        "lng": 34.80465
                    }
                },
                {
                    "start": {
                        "lat": 32.08574,
                        "lng": 34.80465
                    },
                    "end": {
                        "lat": 32.08603,
                        "lng": 34.80489
                    }
                },
                {
                    "start": {
                        "lat": 32.08603,
                        "lng": 34.80489
                    },
                    "end": {
                        "lat": 32.08627,
                        "lng": 34.8051
                    }
                },
                {
                    "start": {
                        "lat": 32.08627,
                        "lng": 34.8051
                    },
                    "end": {
                        "lat": 32.0867,
                        "lng": 34.80549
                    }
                },
                {
                    "start": {
                        "lat": 32.0867,
                        "lng": 34.80549
                    },
                    "end": {
                        "lat": 32.08725,
                        "lng": 34.80598
                    }
                },
                {
                    "start": {
                        "lat": 32.08725,
                        "lng": 34.80598
                    },
                    "end": {
                        "lat": 32.08745,
                        "lng": 34.80617
                    }
                },
                {
                    "start": {
                        "lat": 32.08745,
                        "lng": 34.80617
                    },
                    "end": {
                        "lat": 32.08753,
                        "lng": 34.80624
                    }
                },
                {
                    "start": {
                        "lat": 32.08753,
                        "lng": 34.80624
                    },
                    "end": {
                        "lat": 32.08766,
                        "lng": 34.8061
                    }
                },
                {
                    "start": {
                        "lat": 32.08766,
                        "lng": 34.8061
                    },
                    "end": {
                        "lat": 32.0878,
                        "lng": 34.80593
                    }
                },
                {
                    "start": {
                        "lat": 32.0878,
                        "lng": 34.80593
                    },
                    "end": {
                        "lat": 32.08809,
                        "lng": 34.80543
                    }
                },
                {
                    "start": {
                        "lat": 32.08809,
                        "lng": 34.80543
                    },
                    "end": {
                        "lat": 32.08834,
                        "lng": 34.8049
                    }
                },
                {
                    "start": {
                        "lat": 32.08834,
                        "lng": 34.8049
                    },
                    "end": {
                        "lat": 32.08841,
                        "lng": 34.80471
                    }
                },
                {
                    "start": {
                        "lat": 32.08841,
                        "lng": 34.80471
                    },
                    "end": {
                        "lat": 32.08845,
                        "lng": 34.80449
                    }
                },
                {
                    "start": {
                        "lat": 32.08845,
                        "lng": 34.80449
                    },
                    "end": {
                        "lat": 32.0885,
                        "lng": 34.80409
                    }
                },
                {
                    "start": {
                        "lat": 32.0885,
                        "lng": 34.80409
                    },
                    "end": {
                        "lat": 32.08893,
                        "lng": 34.80408
                    }
                },
                {
                    "start": {
                        "lat": 32.08893,
                        "lng": 34.80408
                    },
                    "end": {
                        "lat": 32.08894,
                        "lng": 34.8041
                    }
                },
                {
                    "start": {
                        "lat": 32.08894,
                        "lng": 34.8041
                    },
                    "end": {
                        "lat": 32.08895,
                        "lng": 34.80414
                    }
                },
                {
                    "start": {
                        "lat": 32.08895,
                        "lng": 34.80414
                    },
                    "end": {
                        "lat": 32.08901,
                        "lng": 34.80418
                    }
                },
                {
                    "start": {
                        "lat": 32.08901,
                        "lng": 34.80418
                    },
                    "end": {
                        "lat": 32.08908,
                        "lng": 34.80417
                    }
                },
                {
                    "start": {
                        "lat": 32.08908,
                        "lng": 34.80417
                    },
                    "end": {
                        "lat": 32.08909,
                        "lng": 34.80415
                    }
                },
                {
                    "start": {
                        "lat": 32.08909,
                        "lng": 34.80415
                    },
                    "end": {
                        "lat": 32.08928,
                        "lng": 34.80426
                    }
                },
                {
                    "start": {
                        "lat": 32.08928,
                        "lng": 34.80426
                    },
                    "end": {
                        "lat": 32.08976,
                        "lng": 34.80448
                    }
                },
                {
                    "start": {
                        "lat": 32.08976,
                        "lng": 34.80448
                    },
                    "end": {
                        "lat": 32.08986,
                        "lng": 34.80452
                    }
                },
                {
                    "start": {
                        "lat": 32.08986,
                        "lng": 34.80452
                    },
                    "end": {
                        "lat": 32.09015,
                        "lng": 34.80452
                    }
                },
                {
                    "start": {
                        "lat": 32.09015,
                        "lng": 34.80452
                    },
                    "end": {
                        "lat": 32.09016,
                        "lng": 34.80371
                    }
                },
                {
                    "start": {
                        "lat": 32.09016,
                        "lng": 34.80371
                    },
                    "end": {
                        "lat": 32.09006,
                        "lng": 34.80371
                    }
                }
            ]
        }
    ],
    "num_of_segments": 3,
    "sum_of_durations": 1216,
    "sum_of_distance": 4593,
    "tasks": [
        {
            "name": "Start",
            "duration": 4.949574464444629,
            "place": {
                "location": {
                    "lat": 32.0799162,
                    "lng": 34.824053700000036
                },
                "id": "ChIJh_a-fjZKHRURbfWQ2nG9XpA",
                "address": "Ha-Gilgal St 59, Ramat Gan, Израиль"
            }
        },
        {
            "name": "acamol",
            "duration": 7.1882463565451316,
            "place": {
                "location": {
                    "lat": 32.07941450000001,
                    "lng": 34.815057
                },
                "name": "סופר-פארם כופר היישוב",
                "id": "ChIJoTVzmLVLHRURQVg7qxZ17nk",
                "address": "ביאליק 10, רמת גן"
            }
        },
        {
            "name": "fuel",
            "duration": 9.775442818159583,
            "place": {
                "location": {
                    "lat": 32.0840641,
                    "lng": 34.8073313
                },
                "name": "פז",
                "id": "ChIJ47Jj48dLHRURQLNCgkpBSKw",
                "address": "דרך זאב ז'בוטינסקי 37, רמת גן"
            }
        },
        {
            "name": "End",
            "duration": 2.7198481772900474,
            "place": {
                "location": {
                    "lat": 32.0900601,
                    "lng": 34.803569100000004
                },
                "id": "ChIJnfFzOcRLHRURM9hDEucFhfs",
                "address": "Anne Frank St 12, Ramat Gan, Израиль"
            }
        }
    ]
},"all_tasks":[{"_id":"5adca4ddc8965c4734dd3d86","user_token_id":"5ad63c8f869a7648bc6a2d6b","name":"leumi","type":"bank","task_place":{"_id":"5adca4ddc8965c4734dd3d87","place_type":"bank","place_key_word":"leumi"},"__v":0},{"_id":"5adca4eec8965c4734dd3d89","user_token_id":"5ad63c8f869a7648bc6a2d6b","name":"acamol","type":"pharmacy","task_place":{"_id":"5adca4eec8965c4734dd3d8a","place_type":"pharmacy","place_key_word":"acamol"},"__v":0},{"_id":"5adcb2d48c71eb0ac054640c","user_token_id":"5ad63c8f869a7648bc6a2d6b","name":"fuil","type":"gas_station","task_place":{"_id":"5adcb2d48c71eb0ac054640d","place_type":"gas_station","place_key_word":"fuil"},"__v":0}],"__v":0}};
  constructor(
    private http: Http,
    private userServiseModule: UserServiseModule
  ) {
    this.route = this.staticRes.data.recommended_route;
  }

  createRoute(routeInitData):Observable<any> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    // console.log(this.userServiseModule.getUserFromLocalStorege());
    console.log(JSON.stringify(routeInitData));
    // console.log(this.url);
    return this.http.post(
        `${this.url}create_route`,
        {
            user: JSON.stringify(this.userServiseModule.getUserFromLocalStorege()),
            route_init_data: JSON.stringify(routeInitData)
        },
        options
    ).map(this.extractData).catch(this.handleError);
  }

  getImageStatic(imgUrl):Observable<any> {
    console.log(imgUrl);
    return this.http.get(imgUrl).map(this.extractData).catch(this.handleError);
  }

  private extractData(res: Response) {
    console.log(res.json());
    return res.json() || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.log("errMsg")
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}