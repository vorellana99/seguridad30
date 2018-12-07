import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { routerTransition } from '../router.animations';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import {LoginService} from '../shared/services/login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    // closeResult: string;
    user: string = "";
    password:string = "";
    roles:Rol[];
    @ViewChild('content')content:ElementRef;
    constructor(
        private translate: TranslateService,
        public router: Router,
        private modalService:NgbModal,
        private loginService :LoginService
        ) {
            this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
            this.translate.setDefaultLang('en');
            const browserLang = this.translate.getBrowserLang();
            this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');
    }

    ngOnInit() {

    }

    onLoggedin() {
        // console.log(this.user);
        // console.log(this.password);
        if(this.user.trim() === '' || this.password.trim() === ''){
            const modalRef = this.modalService.open(this.content);
        }else{

            if(this.user == 'admin' && this.password == '123456'){
                localStorage.setItem('isLoggedin', 'true');
                localStorage.setItem('userName', this.user);
                this.router.navigate(['/dashboard']);
            }else{
                const modalRef = this.modalService.open(this.content);
            }

            //this.getInfo();
        }
    }
    // onLoggedin() {
    //     localStorage.setItem('isLoggedin', 'true');
    // }

    // FORMA IDEAL
    // getInfo():void{
    //     this.loginService.getData_02()
    //         .subscribe(roles => this.roles = roles);
    // }

    // ESTE MÉTODO SI FUNCIONA Y CONECTA
    getInfo():void{
        this.loginService.getData_02()
            .subscribe(roles => {
                this.roles = roles;
                console.log('Test Get 03');
                console.log(this.roles);
                console.log(this.roles[4].name);
            });
    }
}

class Rol {
    description: string;
    permissions: string;
    id: string;
    name: string;
    normalizedName: string;
    concurrencyStamp: string;
  }