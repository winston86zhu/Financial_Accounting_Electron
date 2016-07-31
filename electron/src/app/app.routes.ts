import { provideRouter, RouterConfig }  from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { OperationsComponent } from './operations/operations.component';
import { OperationDetailComponent } from './operations/operation-detail.component';
import { OperationImportFileComponent } from './operations/import/operation-import-file.component';
import { TagsComponent } from './tags/tags.component';
import { AccountsComponent } from './accounts/accounts.component';

const routes: RouterConfig = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'operations', component: OperationsComponent },
    { path: 'operations/detail', component: OperationDetailComponent },
    { path: 'operations/detail/:id', component: OperationDetailComponent },
    { path: 'operations/import/file/:plugin', component: OperationImportFileComponent },
    { path: 'tags', component: TagsComponent },
    { path: 'accounts', component: AccountsComponent }
];

export const appRouterProviders = [
    provideRouter(routes)
];
