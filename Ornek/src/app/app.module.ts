import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app';

import { LayoutComponent } from './views/shared/layout';
import { IndexComponent } from './views/home/index';
import { ScriptsComponent } from './views/shared/controls/scripts';

import { AdminLoginComponent } from './admin/views/home/login';
import { AdminLayoutComponent } from './admin/views/shared/layoutAdmin';
import { AdminIndexComponent } from './admin/views/home/index';
import { AdminHeaderComponent } from './admin/views/shared/controls/header';
import { AdminLeftMenuComponent } from './admin/views/shared/controls/leftmenu';
import { AdminScriptsComponent } from './admin/views/shared/controls/scripts';
import { AdminCopyDeleteComponent } from './admin/views/shared/controls/copydelete';
import { AdminFooterComponent } from './admin/views/shared/controls/footer';

import { AdminCategoryIndexComponent } from './admin/views/category';
import { AdminCategoryInsertComponent } from './admin/views/category/insert';
import { AdminCategoryUpdateComponent } from './admin/views/category/update';

import { AdminContentIndexComponent } from './admin/views/content';
import { AdminContentInsertComponent } from './admin/views/content/insert';
import { AdminContentUpdateComponent } from './admin/views/content/update';

import { SharedService } from './admin/services/shared';

import { CategoryService } from './admin/services/category';
import { ContentService } from './admin/services/content';

@NgModule({
	declarations: [
		AppComponent,

		LayoutComponent,
		IndexComponent,
		ScriptsComponent,

		AdminLoginComponent,
		AdminLayoutComponent,
		AdminIndexComponent,
		AdminHeaderComponent,
		AdminLeftMenuComponent,
		AdminScriptsComponent,
		AdminCopyDeleteComponent,
		AdminFooterComponent,

		AdminCategoryIndexComponent,
		AdminCategoryInsertComponent,
		AdminCategoryUpdateComponent,

		AdminContentIndexComponent,
		AdminContentInsertComponent,
		AdminContentUpdateComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
		HttpClientModule
	],
	//'/Ornek/' -> '/' Bu şekilde değişecek
	providers: [{ provide: APP_BASE_HREF, useValue: '/Ornek/' },
		SharedService,
		CategoryService,
		ContentService
	],
	bootstrap: [AppComponent]
})

export class AppModule { }
