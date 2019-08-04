import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from "@angular/core";
import { Validators, FormControl } from "@angular/forms";
let AdminLoginComponent = class AdminLoginComponent {
    constructor(service, formBuilder, router) {
        this.service = service;
        this.formBuilder = formBuilder;
        this.router = router;
    }
    ngOnInit() {
        this.girisForm = this.formBuilder.group({
            username: new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(25)]),
            password: new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(25)])
        });
    }
    onSubmit() {
        $("#imgLoading").fadeIn("slow");
        this.loginData = new Object();
        this.loginData.Username = this.girisForm.get("username").value;
        this.loginData.Password = this.girisForm.get("password").value;
        this.service.postLogin(this.loginData)
            .subscribe((answer) => {
            if (answer == true) {
                this.router.navigate(['/Admin/Home']);
            }
            else {
                this.hataMesaj = "Lütfen kullanıcı adı ve şifrenizi kontrol ediniz.";
                $(".alert-error").fadeIn("slow");
                $("#imgLoading").fadeOut("slow");
            }
        }, resError => this.errorMsg = resError);
    }
    onKeyPress(event) {
        if (event.keyCode == "13") {
            this.onSubmit();
        }
    }
};
AdminLoginComponent = tslib_1.__decorate([
    Component({
        templateUrl: './login.html',
        styleUrls: [
            '../../../../../Content/admin/css/bootstrap.min.css',
            '../../../../../Content/admin/css/bootstrap-responsive.min.css',
            '../../../../../Content/admin/css/matrix-login.css',
            '../../../../../Content/admin/css/font-awesome/css/font-awesome.css'
        ],
        styles: [
            '#imgLoading { float: left; margin: 5px 5px 0px 0px; height: 20px; display: none; }'
        ],
        encapsulation: ViewEncapsulation.None
    })
], AdminLoginComponent);
export { AdminLoginComponent };
//# sourceMappingURL=login.js.map