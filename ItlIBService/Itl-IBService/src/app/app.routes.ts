import { Routes } from '@angular/router';
import { FaqsComponent } from'./layout/pages/faqs/faqs.component';
import { PageNotFoundComponent } from './layout/pages/page-not-found/page-not-found.component';
import { LayoutComponent } from './layout/layout.component';
import { ContactUsComponent } from './layout/pages/contact-us/contact-us.component';
import { PrivacyPolicyComponent } from './layout/pages/privacy-policy/privacy-policy.component';
import { TermsOfServiceComponent } from './layout/pages/terms-of-service/terms-of-service.component';
import { MainContentComponent } from './layout/main-content/main-content.component';

export const routes: Routes = [
    {path:'', component:MainContentComponent},
    {path: 'faqs', component: FaqsComponent},
    {path: 'contactus', component: ContactUsComponent},
    {path: 'privacypolicy', component: PrivacyPolicyComponent},
    {path: 'tos', component: TermsOfServiceComponent},   
    { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];
