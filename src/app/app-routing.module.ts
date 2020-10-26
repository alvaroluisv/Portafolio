import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AboutComponent } from './pages/about/about.component';
import { DocumentationComponent } from './pages/documentation/documentation.component';
import { DesingComponent } from './pages/desing/desing.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductoComponent } from './pages/producto/producto.component';


const routes: Routes = [
  
  {
    path: 'home', component: PortafolioComponent
  },
  {
    path: 'blog', component: BlogComponent
  },
  {
  path: 'about', component: AboutComponent
  },
  {
    path: 'documentation', component: DocumentationComponent
  },
  {
    path: 'design', component: DesingComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'producto', component: ProductoComponent
  },
  {
    path: '**', pathMatch: 'full', redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
