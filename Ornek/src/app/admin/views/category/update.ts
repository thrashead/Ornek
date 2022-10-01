import { Component } from "@angular/core";
import { Subscription } from "rxjs";
import { CategoryService } from "../../services/category";
import { ContentService } from '../../services/content';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import ClassicEditor from "../../../../../Content/admin/js/ckeditor/ckeditor.js";
import * as $ from "jquery";

@Component({
	templateUrl: './update.html'
})

export class AdminCategoryUpdateComponent {
	errorMsg: string;
	id: string;

	updateForm: FormGroup;
	data: any;

	model: any;

	callTable: boolean;

	private subscription: Subscription = new Subscription();

	constructor(private service: CategoryService, private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private serviceContent: ContentService) {
	}

	ngOnInit() {
		this.data = new Object();

		this.callTable = true;
		this.FillData();

		setTimeout(function () {
			ClassicEditor
				.create(document.querySelector('#Description'), {
				})
				.then(editor => {
					console.log(editor);
				});

		}, 1000);

		this.updateForm = this.formBuilder.group({
			ID: new FormControl(null, [Validators.required, Validators.min(0)]),
			Title: new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			ShortText: new FormControl(null),
			Description: new FormControl(null),
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
							.off("click", "a.cpy-yes[data-link='Content']")
							.on("click", "a.cpy-yes[data-link='Content']", () => {
								let id: string = $("a.cpy-yes").attr("data-id");
								this.onContentCopy(id);
							});

						$(document)
							.off("click", "a.dlt-yes[data-link='Content']")
							.on("click", "a.dlt-yes[data-link='Content']", () => {
								let id: string = $("a.dlt-yes").attr("data-id");
								this.onContentDelete(id);
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

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}

	onSubmit() {
		this.data.ID = this.updateForm.get("ID").value;
		this.data.Title = this.updateForm.get("Title").value;
		this.data.ShortText = this.updateForm.get("ShortText").value;
		this.data.Description = $(".ck-content").html().replace("<p>", "").replace("</p>", "");
		this.data.Active = this.updateForm.get("Active").value;

		this.service.postUpdate(this.data)
			.subscribe((answer) => {
				if (answer.Mesaj == null) {
					this.router.navigate(['/Admin/Category']);
				}
				else {
					$(".alertMessage").text(answer.Mesaj);
					$(".alert-error").fadeIn("slow");
				}
			},
				resError => this.errorMsg = resError);
	}

	onContentCopy(id) {
		this.subscription = this.serviceContent.getCopy(id).subscribe((answer) => {
			$("a.cpyLink.active-cpy").removeClass("active-cpy");

			if (answer == true) {
				this.ShowAlert("Copy");

				let currentUrl = this.router.url;
				this.router.navigate(['/Ornek/'], { skipLocationChange: true }).then(() => { this.router.navigate([currentUrl]) });
			}
			else {
				this.ShowAlert("CopyNot");
			}
		}, resError => this.errorMsg = resError, () => { this.subscription.unsubscribe(); });
	}

	onContentDelete(id) {
		this.subscription = this.serviceContent.getDelete(id).subscribe((answer) => {
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

	ShowAlert(type: string) {
		$("#tdAlertMessage li.tdAlert" + type).fadeIn("slow");

		setInterval(function () {
			$("#tdAlertMessage li.tdAlert" + type).fadeOut("slow");
		}, 2000);
	}
}
