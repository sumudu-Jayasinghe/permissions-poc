import {Directive, Input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuthenticationService} from './authentication.service';

@Directive({
    selector: '[appHasPermissions]'
})
export class HasPermissionsDirective implements OnInit, OnChanges {

    @Input('appHasPermissions') permissionString: string;

    constructor(private _templateRef: TemplateRef<any>,
                private _container: ViewContainerRef,
                private _as: AuthenticationService) {
    }

    ngOnInit(): void {
        this.getPermisions();
    }

    ngOnChanges(changes: SimpleChanges): void {
       this.getPermisions();
    }

    private getPermisions(): void {
        if (this._as.hasPermissions(this.permissionString)) {
            this._container.createEmbeddedView(this._templateRef);
        } else {
            this._container.clear();
        }
    }

}
