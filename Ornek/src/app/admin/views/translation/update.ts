import { Component } from "@angular/core";
import { Subscription } from "rxjs";
import { TranslationService } from "../../services/translation";
import { CategoryTService } from '../../services/categoryt';
import { ContentTService } from '../../services/contentt';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import * as $ from "jquery";

@Component({
	templateUrl: './update.html'
})

export class AdminTranslationUpdateComponent {
	errorMsg: string;
	id: string;

	updateForm: FormGroup;
	data: any;

	model: any;

	callTable: boolean;

	uploadData: any;
	imageFlag: any;

	private subscription: Subscription = new Subscription();

	constructor(private service: TranslationService, private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private serviceCategoryT: CategoryTService, private serviceContentT: ContentTService) {
	}

	ngOnInit() {
		this.data = new Object();

		this.callTable = true;
		this.FillData();

		this.updateForm = this.formBuilder.group({
			ID: new FormControl(null, [Validators.required, Validators.min(0)]),
			TransName: new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			ShortName: new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			Flag: new FormControl(null),
			Active: new FormControl(null),
		});
	}

	FillData() {
		if (this.callTable == true) {
			this.route.params.subscribe((params: Params) => {
				this.id = params['id'];
				this.subscription = this.service.getUpdate(this.id).subscribe((answer) => {
					this.model = answer;
					this.callTable = false;

					setTimeout(() => {
						$(".data-table").dataTable({
							"bJQueryUI": true,
							"sPaginationType": "full_numbers",
							"sDom": '<""l>t<"F"fp>'
						});

						if ($(".dropdown-menu").first().find("a").length <= 0) {
							$(".btn-group").remove();
						}

						$(document)
							.off("click", ".fg-button")
							.on("click", ".fg-button", () => {
								setTimeout(() => {
									this.FillData();
								}, 1);
							});

						$(document)
							.off("click", "a.cpyLink")
							.on("click", "a.cpyLink", function () {
								$(this).addClass("active-cpy");
								$("a.cpy-yes").attr("data-id", $(this).attr("data-id"));
								$("a.cpy-yes").attr("data-link", $(this).attr("data-controller"));
							});

						$(document)
							.off("click", "a.dltLink")
							.on("click", "a.dltLink", function () {
								$(this).addClass("active-dlt");
								$("a.dlt-yes").attr("data-id", $(this).attr("data-id"));
								$("a.dlt-yes").attr("data-link", $(this).attr("data-controller"));
							});

						$(document)
							.off("click", "a.cpy-yes[data-link='CategoryT']")
							.on("click", "a.cpy-yes[data-link='CategoryT']", () => {
								let id: string = $("a.cpy-yes").attr("data-id");
								this.onCategoryTCopy(id);
							});

						$(document)
							.off("click", "a.dlt-yes[data-link='CategoryT']")
							.on("click", "a.dlt-yes[data-link='CategoryT']", () => {
								let id: string = $("a.dlt-yes").attr("data-id");
								this.onCategoryTDelete(id);
							});

						$(document)
							.off("click", "a.rmvLink")
							.on("click", "a.rmvLink", function () {
								$(this).addClass("active-rmv");
								$("a.rmv-yes").attr("data-id", $(this).attr("data-id"));
								$("a.rmv-yes").attr("data-link", $(this).attr("data-controller"));
							});

						$(document)
							.off("click", "a.rmv-yes[data-link='CategoryT']")
							.on("click", "a.rmv-yes[data-link='CategoryT']", () => {
								let id: string = $("a.rmv-yes").attr("data-id");
								this.onCategoryTRemove(id);
							});

						$(document)
							.off("click", "a.cpy-yes[data-link='ContentT']")
							.on("click", "a.cpy-yes[data-link='ContentT']", () => {
								let id: string = $("a.cpy-yes").attr("data-id");
								this.onContentTCopy(id);
							});

						$(document)
							.off("click", "a.dlt-yes[data-link='ContentT']")
							.on("click", "a.dlt-yes[data-link='ContentT']", () => {
								let id: string = $("a.dlt-yes").attr("data-id");
								this.onContentTDelete(id);
							});

						$(document)
							.off("click", "a.rmv-yes[data-link='ContentT']")
							.on("click", "a.rmv-yes[data-link='ContentT']", () => {
								let id: string = $("a.rmv-yes").attr("data-id");
								this.onContentTRemove(id);
							});
					}, 1);
				}, resError => this.errorMsg = resError, () => { this.subscription.unsubscribe(); });
			});
		}

		setTimeout(() => {
			if ($(".dropdown-menu").first().find("a").length <= 0) {
				$(".btn-group").remove();
			}
		}, 1);
	}

	onFlagFileSelect(event) {
		if (event.target.files.length > 0) {
			this.data.Flag = event.target.files[0].name;
			this.data.FlagHasFile = true;
			this.imageFlag = event.target.files[0];
		}
	}

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}

	onSubmit() {
		this.uploadData = new FormData();
		this.uploadData.append("file", this.imageFlag);

		this.subscription = this.service.postUpdateUpload(this.uploadData).subscribe((answerUpload) => {
			if (answerUpload.Mesaj == null)
			{
				this.data.ID = this.updateForm.get("ID").value;
				this.data.TransName = this.updateForm.get("TransName").value;
				this.data.ShortName = this.updateForm.get("ShortName").value;

				if (this.data.FlagHasFile) {
					this.data.OldFlag = this.updateForm.get("Flag").value;
				}
				else {
					this.data.Flag = this.updateForm.get("Flag").value;
				}

				this.data.Active = this.updateForm.get("Active").value;

				this.service.postUpdate(this.data)
					.subscribe((answer) => {
						if (answer.Mesaj == null) {
							this.router.navigate(['/Admin/Translation']);
						}
						else {
							$(".alertMessage").text(answer.Mesaj);
							$(".alert-error").fadeIn("slow");
						}
					},
						resError => this.errorMsg = resError);
			}
			else
			{
				$(".alertMessage").text(answerUpload.Mesaj);
				$(".alert-error").fadeIn("slow");
			}
		}, resError => this.errorMsg = resError, () => { this.subscription.unsubscribe(); });
	}

	onCategoryTCopy(id) {
		this.subscription = this.serviceCategoryT.getCopy(id).subscribe((answer) => {
			$("a.cpyLink.active-cpy").removeClass("active-cpy");

			if (answer == true) {
				this.ShowAlert("Copy");

				let currentUrl = this.router.url;
				this.router.navigate(['/'], { skipLocationChange: true }).then(() => { this.router.navigate([currentUrl]) });
			}
			else {
				this.ShowAlert("CopyNot");
			}
		}, resError => this.errorMsg = resError, () => { this.subscription.unsubscribe(); });
	}

	onCategoryTDelete(id) {
		this.subscription = this.serviceCategoryT.getDelete(id).subscribe((answer) => {
			if (answer == true) {
				this.ShowAlert("Delete");

				$("a.dltLink.active-dlt").parent("li").parent("ul").parent("div").parent("td").parent("tr").fadeOut("slow", function () {
					$(this).remove();
				});
			}
			else {
				this.ShowAlert("DeleteNot");
			}
		}, resError => this.errorMsg = resError,
			() => { this.subscription.unsubscribe(); });
	}

	onCategoryTRemove(id) {
		this.subscription = this.serviceCategoryT.getRemove(id).subscribe((answer) => {
			if (answer == true) {
				this.ShowAlert("Remove");

				$("a.rmvLink.active-rmv").parent("li").parent("ul").parent("div").parent("td").parent("tr").fadeOut("slow", function () {
					$(this).remove();
				});
			}
			else {
				this.ShowAlert("RemoveNot");
			}
		}, resError => this.errorMsg = resError,
			() => { this.subscription.unsubscribe(); });
	}

	onContentTCopy(id) {
		this.subscription = this.serviceContentT.getCopy(id).subscribe((answer) => {
			$("a.cpyLink.active-cpy").removeClass("active-cpy");

			if (answer == true) {
				this.ShowAlert("Copy");

				let currentUrl = this.router.url;
				this.router.navigate(['/'], { skipLocationChange: true }).then(() => { this.router.navigate([currentUrl]) });
			}
			else {
				this.ShowAlert("CopyNot");
			}
		}, resError => this.errorMsg = resError, () => { this.subscription.unsubscribe(); });
	}

	onContentTDelete(id) {
		this.subscription = this.serviceContentT.getDelete(id).subscribe((answer) => {
			if (answer == true) {
				this.ShowAlert("Delete");

				$("a.dltLink.active-dlt").parent("li").parent("ul").parent("div").parent("td").parent("tr").fadeOut("slow", function () {
					$(this).remove();
				});
			}
			else {
				this.ShowAlert("DeleteNot");
			}
		}, resError => this.errorMsg = resError,
			() => { this.subscription.unsubscribe(); });
	}

	onContentTRemove(id) {
		this.subscription = this.serviceContentT.getRemove(id).subscribe((answer) => {
			if (answer == true) {
				this.ShowAlert("Remove");

				$("a.rmvLink.active-rmv").parent("li").parent("ul").parent("div").parent("td").parent("tr").fadeOut("slow", function () {
					$(this).remove();
				});
			}
			else {
				this.ShowAlert("RemoveNot");
			}
		}, resError => this.errorMsg = resError,
			() => { this.subscription.unsubscribe(); });
	}

	ShowAlert(type: string) {
		$("#tdAlertMessage li.tdAlert" + type).fadeIn("slow");

		setInterval(function () {
			$("#tdAlertMessage li.tdAlert" + type).fadeOut("slow");
		}, 2000);
	}
}
