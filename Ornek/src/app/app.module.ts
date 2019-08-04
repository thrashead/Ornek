import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app';

import { LayoutComponent } from './shared/layout';
import { HomeComponent } from './home/index';
import { ScriptsComponent } from './shared/controls/scripts';

import { AdminLoginComponent } from './admin/views/home/login';
import { AdminLayoutComponent } from './admin/views/shared/layoutAdmin';
import { AdminHomeComponent } from './admin/views/home/index';
import { AdminHeaderComponent } from './admin/views/shared/controls/header';
import { AdminLeftMenuComponent } from './admin/views/shared/controls/leftmenu';
import { AdminScriptsComponent } from './admin/views/shared/controls/scripts';
import { AdminCopyDeleteComponent } from './admin/views/shared/controls/copydelete';
import { AdminFooterComponent } from './admin/views/shared/controls/footer';

import { AdminCategoryIndexComponent } from './admin/views/category';
import { AdminCategoryInsertComponent } from './admin/views/category/insert';
import { AdminCategoryUpdateComponent } from './admin/views/category/update';

import { AdminCategoryTIndexComponent } from './admin/views/categoryt';
import { AdminCategoryTInsertComponent } from './admin/views/categoryt/insert';
import { AdminCategoryTUpdateComponent } from './admin/views/categoryt/update';

import { AdminContentIndexComponent } from './admin/views/content';
import { AdminContentInsertComponent } from './admin/views/content/insert';
import { AdminContentUpdateComponent } from './admin/views/content/update';

import { AdminContentTIndexComponent } from './admin/views/contentt';
import { AdminContentTInsertComponent } from './admin/views/contentt/insert';
import { AdminContentTUpdateComponent } from './admin/views/contentt/update';

import { AdminFileIndexComponent } from './admin/views/file';
import { AdminFileInsertComponent } from './admin/views/file/insert';
import { AdminFileUpdateComponent } from './admin/views/file/update';

import { AdminPictureIndexComponent } from './admin/views/picture';
import { AdminPictureInsertComponent } from './admin/views/picture/insert';
import { AdminPictureUpdateComponent } from './admin/views/picture/update';

import { AdminTranslationIndexComponent } from './admin/views/translation';
import { AdminTranslationInsertComponent } from './admin/views/translation/insert';
import { AdminTranslationUpdateComponent } from './admin/views/translation/update';

import { AdminUsersIndexComponent } from './admin/views/users';
import { AdminUsersInsertComponent } from './admin/views/users/insert';
import { AdminUsersUpdateComponent } from './admin/views/users/update';

import { SharedService } from './admin/services/shared';

import { CategoryService } from './admin/services/category';
import { CategoryTService } from './admin/services/categoryt';
import { ContentService } from './admin/services/content';
import { ContentTService } from './admin/services/contentt';
import { FileService } from './admin/services/file';
import { PictureService } from './admin/services/picture';
import { TranslationService } from './admin/services/translation';
import { UsersService } from './admin/services/users';

@NgModule({
	declarations: [
		AppComponent,

		LayoutComponent,
		HomeComponent,
		ScriptsComponent,

		AdminLoginComponent,
		AdminLayoutComponent,
		AdminHomeComponent,
		AdminHeaderComponent,
		AdminLeftMenuComponent,
		AdminScriptsComponent,
		AdminCopyDeleteComponent,
		AdminFooterComponent,

		AdminCategoryIndexComponent,
		AdminCategoryInsertComponent,
		AdminCategoryUpdateComponent,

		AdminCategoryTIndexComponent,
		AdminCategoryTInsertComponent,
		AdminCategoryTUpdateComponent,

		AdminContentIndexComponent,
		AdminContentInsertComponent,
		AdminContentUpdateComponent,

		AdminContentTIndexComponent,
		AdminContentTInsertComponent,
		AdminContentTUpdateComponent,

		AdminFileIndexComponent,
		AdminFileInsertComponent,
		AdminFileUpdateComponent,

		AdminPictureIndexComponent,
		AdminPictureInsertComponent,
		AdminPictureUpdateComponent,

		AdminTranslationIndexComponent,
		AdminTranslationInsertComponent,
		AdminTranslationUpdateComponent,

		AdminUsersIndexComponent,
		AdminUsersInsertComponent,
		AdminUsersUpdateComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
		HttpClientModule
	],
	//'/' -> '/Ornek/' Bu şekilde değişecek
	providers: [{ provide: APP_BASE_HREF, useValue: '/Ornek/' },
		SharedService,
		CategoryService,
		CategoryTService,
		ContentService,
		ContentTService,
		FileService,
		PictureService,
		TranslationService,
		UsersService
	],
	bootstrap: [AppComponent]
})

export class AppModule { }
