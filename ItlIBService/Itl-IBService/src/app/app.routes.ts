import { Routes } from '@angular/router';
import { FaqsComponent } from './layout/pages/faqs/faqs.component';
import { PageNotFoundComponent } from './layout/pages/page-not-found/page-not-found.component';
import { LayoutComponent } from './layout/layout.component';
import { ContactUsComponent } from './layout/pages/contact-us/contact-us.component';
import { PrivacyPolicyComponent } from './layout/pages/privacy-policy/privacy-policy.component';
import { TermsOfServiceComponent } from './layout/pages/terms-of-service/terms-of-service.component';
import { MainContentComponent } from './layout/main-content/main-content.component';
import { SonalikaLandingComponent } from './layout/pages/Sonalika/sonalika-landing/sonalika-landing.component';
import { SolisLandingComponent } from './layout/pages/Solis/solis-landing/solis-landing.component';
import { MaintenanceComponent } from './layout/pages/Sonalika/maintenance/maintenance.component';
import { OperatorManualsComponent } from './layout/pages/Sonalika/operator-manuals/operator-manuals.component';
import { ServiceManualsComponent } from './layout/pages/Sonalika/service-manuals/service-manuals.component';
import { TrainingManualsComponent } from './layout/pages/Sonalika/training-manuals/training-manuals.component';
import { ServiceCircularsComponent } from './layout/pages/Sonalika/service-circulars/service-circulars.component';
import { TechnicalBulletinComponent } from './layout/pages/Sonalika/technical-bulletin/technical-bulletin.component';
import { PartCircularComponent } from './layout/pages/Sonalika/part-circular/part-circular.component';
import { SonalikaMainContentComponent } from './layout/pages/Sonalika/sonalika-main-content/sonalika-main-content.component';

export const routes: Routes = [
    {
        path: '',
        component: MainContentComponent
    },
    {
        path: 'faqs',
        component: FaqsComponent
    },
    {
        path: 'contactus',
        component: ContactUsComponent
    },
    {
        path: 'privacypolicy',
        component: PrivacyPolicyComponent
    },
    {
        path: 'tos',
        component: TermsOfServiceComponent
    },
    {
        path: "sonalika",
        component: SonalikaLandingComponent,
        children: [
                    {
                        path: 'operator-manuals',
                        component: OperatorManualsComponent
                    },
                    {
                        path: 'service-manuals',
                        component: ServiceManualsComponent
                    },
                    {
                        path: 'training-manuals',
                        component: TrainingManualsComponent
                    },
                    {
                        path: 'service-circulars',
                        component: ServiceCircularsComponent
                    },
                    {
                        path: 'technical-bulletin',
                        component: TechnicalBulletinComponent
                    },
                    {
                        path: 'part-circular',
                        component: PartCircularComponent
                    },
                    {
                        path: 'maintenance',
                        component: MaintenanceComponent
                    },
                    // {
                    //     path:'maintenance', component:MaintenanceComponent
                    // },

        ]
    },
    {
        path: "solis", 
        component: SolisLandingComponent,
        children: [
            {
                path: 'operator-manuals', component: OperatorManualsComponent
            },
            {
                path: 'service-manuals', component: ServiceManualsComponent
            },
            {
                path: 'training-manuals', component: TrainingManualsComponent
            },
            {
                path: 'service-circulars', component: ServiceCircularsComponent
            },
            {
                path: 'technical-bulletin', component: TechnicalBulletinComponent
            },
            {
                path: 'part-circular', component: PartCircularComponent
            },
            {
                path: 'maintenance', component: MaintenanceComponent
            },
            // {
            //     path:'maintenance', component:MaintenanceComponent
            // },
        ]
    },
    {
        path: '**', component: PageNotFoundComponent
    },  // Wildcard route for a 404 page
];
