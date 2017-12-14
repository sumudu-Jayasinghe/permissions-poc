import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(private _ls: AuthenticationService) {
    }

    ngOnInit() {
    }

    onLogin(type) {
        switch (type) {
            case 'A': {
                this._ls.doLogin(
                    {
                        'userName': 'admin',
                        'firstName': null,
                        'lastName': null,
                        'emailAddress': null,
                        'organization': null,
                        'department': null,
                        'uiPermissions': {
                            'rate': {
                                'view': true,
                                'add': false,
                                'apiBlacklist': {
                                    'view': true,
                                    'add': true,
                                    'delete': false
                                },
                                'spBlackList': {

                                    'view': true,
                                    'add': true,
                                    'delete': false
                                },
                                'assign': true
                            },
                            'application': {
                                'changeTiers': true,
                                'creditPlan': false,
                                'viewSelectedTier': false
                            },
                            'subscription': {
                                'changeTiers': true,
                                'operationRate': true,
                                'viewSelectedTier': true
                            },
                            'workFlowHistory': true,
                            'quota': {
                                'view': true,
                                'add': true
                            },
                            'whiteList': {
                                'view': true,
                                'add': true,
                                'delete': false
                            }
                        }

                    }
                );
                break;
            }

            case 'O': {
                this._ls.doLogin({
                    'userName': 'operator',
                    'firstName': null,
                    'lastName': null,
                    'emailAddress': null,
                    'organization': null,
                    'department': null,
                    'uiPermissions': {
                        'rate': {
                            'view': true,
                            'add': false,
                            'assign': true
                        },
                        'application': {
                            'changeTiers': true,
                            'creditPlan': false,
                            'viewSelectedTier': false
                        },
                        'subscription': {
                            'changeTiers': true,
                            'operationRate': true,
                            'viewSelectedTier': true
                        },
                        'workFlowHistory': true,
                        'quota': {
                            'view': true,
                            'add': true
                        }
                    }

                });
                break;
            }

            case 'U': {
                this._ls.doLogin(
                    {
                        'userName': 'user',
                        'firstName': null,
                        'lastName': null,
                        'emailAddress': null,
                        'organization': null,
                        'department': null,
                        'uiPermissions': {
                            'rate': {
                                'view': true,
                                'add': false,
                                'assign': true
                            },
                            'application': {
                                'changeTiers': true,
                                'creditPlan': false,
                                'viewSelectedTier': false
                            },
                            'whiteList': {
                                'view': true,
                                'add': true,
                                'delete': false
                            }
                        }

                    }
                );
                break;
            }
        }
    }

}
