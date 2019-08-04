import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './shared/layout';
import { HomeComponent } from './home/index';

import { AdminLayoutComponent } from './admin/views/shared/layoutAdmin';
import { AdminHomeComponent } from './admin/views/home/index';
import { AdminLoginComponent } from './admin/views/home/login';

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

const routes: Routes = [
	{ path: 'Admin', component: AdminLoginComponent, runGuardsAndResolvers: 'always' },
	{ path: 'Admin/Login', component: AdminLoginComponent, runGuardsAndResolvers: 'always' },

	{
		path: '',
		component: LayoutComponent,
		children: [
			//{ path: '', redirectTo: 'Home', pathMatch: 'full' },
			{ path: '', component: HomeComponent, pathMatch: 'full' },
		], runGuardsAndResolvers: 'always'
	},

	{
		path: '',
		component: AdminLayoutComponent,
		children: [
			{ path: 'Admin/Home', component: AdminHomeComponent },

			{ path: 'Admin/Category', component: AdminCategoryIndexComponent },
			{ path: 'Admin/Category/Index', component: AdminCategoryIndexComponent },
			{ path: 'Admin/Category/Insert', component: AdminCategoryInsertComponent },
			{ path: 'Admin/Category/Update/:id', component: AdminCategoryUpdateComponent },

			{ path: 'Admin/CategoryT', component: AdminCategoryTIndexComponent },
			{ path: 'Admin/CategoryT/Index', component: AdminCategoryTIndexComponent },
			{ path: 'Admin/CategoryT/Insert', component: AdminCategoryTInsertComponent },
			{ path: 'Admin/CategoryT/Update/:id', component: AdminCategoryTUpdateComponent },

			{ path: 'Admin/Content', component: AdminContentIndexComponent },
			{ path: 'Admin/Content/Index', component: AdminContentIndexComponent },
			{ path: 'Admin/Content/Insert', component: AdminContentInsertComponent },
			{ path: 'Admin/Content/Update/:id', component: AdminContentUpdateComponent },

			{ path: 'Admin/ContentT', component: AdminContentTIndexComponent },
			{ path: 'Admin/ContentT/Index', component: AdminContentTIndexComponent },
			{ path: 'Admin/ContentT/Insert', component: AdminContentTInsertComponent },
			{ path: 'Admin/ContentT/Update/:id', component: AdminContentTUpdateComponent },

			{ path: 'Admin/File', component: AdminFileIndexComponent },
			{ path: 'Admin/File/Index', component: AdminFileIndexComponent },
			{ path: 'Admin/File/Insert', component: AdminFileInsertComponent },
			{ path: 'Admin/File/Update/:id', component: AdminFileUpdateComponent },

			{ path: 'Admin/Picture', component: AdminPictureIndexComponent },
			{ path: 'Admin/Picture/Index', component: AdminPictureIndexComponent },
			{ path: 'Admin/Picture/Insert', component: AdminPictureInsertComponent },
			{ path: 'Admin/Picture/Update/:id', component: AdminPictureUpdateComponent },

			{ path: 'Admin/Translation', component: AdminTranslationIndexComponent },
			{ path: 'Admin/Translation/Index', component: AdminTranslationIndexComponent },
			{ path: 'Admin/Translation/Insert', component: AdminTranslationInsertComponent },
			{ path: 'Admin/Translation/Update/:id', component: AdminTranslationUpdateComponent },

			{ path: 'Admin/Users', component: AdminUsersIndexComponent },
			{ path: 'Admin/Users/Index', component: AdminUsersIndexComponent },
			{ path: 'Admin/Users/Insert', component: AdminUsersInsertComponent },
			{ path: 'Admin/Users/Update/:id', component: AdminUsersUpdateComponent },
		], runGuardsAndResolvers: 'always'
	},

	{ path: '**', redirectTo: '', runGuardsAndResolvers: 'always' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
	exports: [RouterModule]
})
export class AppRoutingModule { }
