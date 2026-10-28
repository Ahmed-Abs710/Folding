import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { QuoteCalculatorComponent } from './components/quote-calculator/quote-calculator.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { SpecsComponent } from './components/specs/specs.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    CategoriesComponent,
    QuoteCalculatorComponent,
    GalleryComponent,
    SpecsComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'فولدينج للألومنيوم | تصنيع المطابخ والشبابيك والواجهات الحديثة';
}
