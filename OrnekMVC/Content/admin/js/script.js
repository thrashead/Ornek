$(document).ready(function () {
	if ($("#Description").length > 0) {
		ClassicEditor
			.create(document.querySelector('#Description'), {
			})
			.then(editor => {
				window.editor = editor;
			});
	}

	/* Login Sayfası*/
	if ($("#loginbox").length > 0) {
		$("#txtUserName").focus();

		$("#btnGiris").click(function () {
			GirisYap();
		});

		$("button.close").click(function () {
			$(".alert-error").fadeOut("slow");
		});

		$("#txtUserName, #txtPassword").keyup(function (event) {
			if (event.keyCode == 13) {
				GirisYap();
			}
		});
	}
	/* Login Sayfası*/

	/* Logout Olayı*/
	if ($("a.logout").length > 0) {
		$("a.logout").click(function () {
			$.ajax({
				type: 'GET',
				url: AdminAjaxPath + "/Logout",
				success: function (answer) {
					if (answer == true) {
						window.location = AdminPath + "/Home/Login";
					}
				}
			});
		});
	}
	/* Logout Olayı*/

	if (Urling.controller != undefined) {
		var activeLi = $("#sidebar li[data-url='" + Urling.controller + "']");
		var submenuLi = activeLi.parent("ul").parent("li");

		$("#sidebar li").removeClass("active");
		activeLi.addClass("active");

		if (submenuLi.hasClass("submenu")) {
			if ($("body").width() > 970 || $("body").width() <= 480) {
				submenuLi.addClass("open");
			}
			submenuLi.addClass("active");
		}
	}
});

function GirisYap() {
	$("#imgLoading").fadeIn("slow");

	var username = $("#txtUserName").val();
	var password = $("#txtPassword").val();

	if (!isValid(username, "username")) {
		$("#hataMesaj").text("Lütfen geçerli bir kullanıcı adı giriniz.");
		$(".alert-error").fadeIn("slow");

		$("#imgLoading").fadeOut("slow");
		return false;
	}

	if (!isValid(password, "password")) {
		$("#hataMesaj").text("Lütfen geçerli bir şifre giriniz.");
		$(".alert-error").fadeIn("slow");

		$("#imgLoading").fadeOut("slow");
		return false;
	}

	var loginInfo = new Object();
	loginInfo.Username = username;
	loginInfo.Password = password;

	$.ajax({
		type: "POST",
		url: AdminAjaxPath + "/Login",
		data: "{ login: '" + JSON.stringify(loginInfo) + "' }",
		dataType: "json",
		contentType: "application/json; charset=utf-8",
		success: function (answer) {
			if (answer == true) {
				window.location = AdminPath;
			}
			else {
				$("#hataMesaj").text("Lütfen kullanıcı adı ve şifrenizi kontrol ediniz.");
				$(".alert-error").fadeIn("slow");

				$("#imgLoading").fadeOut("slow");
			}
		}
	});
}

/* Validation Control */
function isValid(text, type) {
	var pattern;

	switch (type) {
		case "username": pattern = new RegExp(/^[a-z0-9_-]{3,16}$/); break;
		case "password": pattern = new RegExp(/^[a-z0-9_-]{3,18}$/); break;
		case "hex": pattern = new RegExp(/^#?([a-f0-9]{6}|[a-f0-9]{3})$/); break;
		case "rewrite": pattern = new RegExp(/^[a-z0-9-]+$/); break;
		case "email": pattern = new RegExp(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/); break;
		case "url": pattern = new RegExp(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/); break;
		case "ipaddress": pattern = new RegExp(/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/); break;
		case "htmltag": pattern = new RegExp(/^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/); break;
		default: pattern = new RegExp(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/); break;
	}

	return pattern.test(text);
}

function KelimeAra(txtValue) {
	switch (txtValue) {
		case "Category":
			window.location.href = AdminPath + "/Category";
			break;
		case "Content":
			window.location.href = AdminPath + "/Content";
			break;
		default:
			$.gritter.add({
				title: 'Arama Sonuç',
				text: 'Aradığınız kelimeye uygun sonuç bulunamadı...',
				sticky: false
			});
			break;
	}
}

$(function () {
	if($('#search input[type=text]').length > 0)
	{
		$('#search input[type=text]').typeahead({
			source: [
				'Category',
				'Content',
			],
			items: 4
		});
	}

	$(document).on("keyup", "#txtMainSearch", function () {
		if (event.keyCode == 13) {
			KelimeAra($("#txtMainSearch").val());
		}
	});

	$(document).on("click", "#btnMainSearch", function () {
		KelimeAra($("#txtMainSearch").val());
	});

	$(document).on("change", "input[type=file]", function () {
		var fileid = "#" + $(this).attr("id");
		$(fileid).val($(this).val().replace("C:\\fakepath\\", ""));
	});

	$(document).on("click", "a.cpyLink, a.btn-copy", function () {
		$(".cpy-yes").attr("data-id", $(this).attr("data-id"));
		$(".cpy-yes").attr("data-link", $(this).attr("data-link"));
	});
	$(document).on("click", "a.cpy-yes", function () {
		var link = $(this);
		var url = link.attr("data-link");
		var dataID = parseInt(link.attr("data-id"));

		$.ajax({
			type: 'POST',
			url: AdminPath + "/" + url + "/Copy",
			data: "{ id: " + dataID + " }",
			dataType: "json",
			contentType: "application/json; charset=utf-8",
			success: function (answer) {
				if (answer == true) {
					$.gritter.add({
						title: 'Sonuç',
						text: 'İlgili veri kopyalandı.',
						sticky: false
					});

					setTimeout(function () {
						window.location.href = Url;
					}, 2000);
				}
				else {
					$.gritter.add({
						title: 'Sonuç',
						text: 'İlgili veri kopyalanamadı.',
						sticky: false
					});
				}
			}
		});
	});
	$(document).on("click", "a.cpy-no", function () {
		$(".cpy-yes").removeAttr("data-id");
		$(".cpy-yes").removeAttr("data-link");
	});
	$(document).on("click", "a.dltLink", function () {
		$(this).addClass("active-dlt");
		$(".dlt-yes").attr("data-id", $(this).attr("data-id"));
		$(".dlt-yes").attr("data-link", $(this).attr("data-link"));
	});

	$(document).on("click", "a.dlt-yes", function () {
		var link = $(this);
		var url = link.attr("data-link");
		var dataID = parseInt(link.attr("data-id"));

		$.ajax({
			type: 'POST',
			url: AdminPath + "/" + url + "/Delete",
			data: "{ id: " + dataID + " }",
			dataType: "json",
			contentType: "application/json; charset=utf-8",
			success: function (answer) {
				if (answer == true) {
					$.gritter.add({
						title: 'Sonuç',
						text: 'İlgili veri silindi.',
						sticky: false
					});

					$("a.dltLink.active-dlt").parent("li").parent("ul").parent("div").parent("td").parent("tr").fadeOut("slow", function () {
						$(this).remove();
					});
				}
				else {
					$.gritter.add({
						title: 'Sonuç',
						text: 'İlgili veri silinemedi.',
						sticky: false
					});
				}
			}
		});
	});

	$(document).on("click", "a.dlt-no", function () {
		$(".dlt-yes").removeAttr("data-id");
		$(".dlt-yes").removeAttr("data-link");
		$("a.dltLink").removeClass("active-dlt");
	});

	$(document).on("click", "a.rmvLink", function () {
		$(this).addClass("active-rmv");
		$(".rmv-yes").attr("data-id", $(this).attr("data-id"));
		$(".rmv-yes").attr("data-link", $(this).attr("data-link"));
	});

	$(document).on("click", "a.rmv-yes", function () {
		var link = $(this);
		var url = link.attr("data-link");
		var dataID = parseInt(link.attr("data-id"));

		$.ajax({
			type: 'POST',
			url: AdminPath + "/" + url + "/Remove",
			data: "{ id: " + dataID + " }",
			dataType: "json",
			contentType: "application/json; charset=utf-8",
			success: function (answer) {
				if (answer == true) {
					$.gritter.add({
						title: 'Sonuç',
						text: 'İlgili veri kaldırıldı.',
						sticky: false
					});

					$("a.rmvLink.active-rmv").parent("li").parent("ul").parent("div").parent("td").parent("tr").fadeOut("slow", function () {
						$(this).remove();
					});
				}
				else {
					$.gritter.add({
						title: 'Sonuç',
						text: 'İlgili veri kaldırılamadı.',
						sticky: false
					});
				}
			}
		});
	});

	$(document).on("click", "a.rmv-no", function () {
		$(".rmv-yes").removeAttr("data-id");
		$(".rmv-yes").removeAttr("data-link");
		$("a.rmvLink").removeClass("active-rmv");
	});

	$(document).on("click", ".dropdown-toggle", function () {
		$(this).parent().addClass("open");
	});
});
