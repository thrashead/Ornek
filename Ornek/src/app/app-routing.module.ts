import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './views/shared/layout';
import { IndexComponent } from './views/home/index';

import { AdminLayoutComponent } from './admin/views/shared/layoutAdmin';
import { AdminIndexComponent } from './admin/views/home/index';
import { AdminLoginComponent } from './admin/views/home/login';

import { AdminCategoryIndexComponent } from './admin/views/category';
import { AdminCategoryInsertComponent } from './admin/views/category/insert';
import { AdminCategoryUpdateComponent } from './admin/views/category/update';

import { AdminContentIndexComponent } from './admin/views/content';
import { AdminContentInsertComponent } from './admin/views/content/insert';
import { AdminContentUpdateComponent } from './admin/views/content/update';

const routes: Routes = [
	{ path: 'Admin/Login', component: AdminLoginComponent, runGuardsAndResolvers: 'always' },

	{
		path: '',
		component: LayoutComponent,
		children: [
			//{ path: '', redirectTo: 'Index', pathMatch: 'full' },
			{ path: '', component: IndexComponent, pathMatch: 'full' },
		], runGuardsAndResolvers: 'always'
	},

	{
		path: '',
		component: AdminLayoutComponent,
		children: [
			{ path: 'Admin', component: AdminIndexComponent },
			{ path: 'Admin/Index', component: AdminIndexComponent },

			{ path: 'Admin/Category', component: AdminCategoryIndexComponent },
			{ path: 'Admin/Category/Index', component: AdminCategoryIndexComponent },
			{ path: 'Admin/Category/Insert', component: AdminCategoryInsertComponent },
			{ path: 'Admin/Category/Update/:id', component: AdminCategoryUpdateComponent },

			{ path: 'Admin/Content', component: AdminContentIndexComponent },
			{ path: 'Admin/Content/Index', component: AdminContentIndexComponent },
			{ path: 'Admin/Content/Insert', component: AdminContentInsertComponent },
			{ path: 'Admin/Content/Update/:id', component: AdminContentUpdateComponent },
		], runGuardsAndResolvers: 'always'
	},

	{ path: '**', redirectTo: '', runGuardsAndResolvers: 'always' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
	exports: [RouterModule]
})
export class AppRoutingModule { }
