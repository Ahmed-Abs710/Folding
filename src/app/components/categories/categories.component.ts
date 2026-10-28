import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../core/services/data.service';
import { ProductCategory } from '../../core/models/project.model';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="collections" class="py-24 px-4 sm:px-8 max-w-7xl mx-auto relative">
      
      <!-- Section Editorial Eyebrow & Title -->
      <div class="max-w-3xl mb-16 space-y-4">
        <div class="eyebrow-container">
          <span class="eyebrow-line"></span>
          <span>CURATED ARCHITECTURAL COLLECTIONS</span>
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8F5F1] leading-tight">
          <span>المجموعات المعمارية المصممة</span>
          <span class="italic font-display text-[#C9A982] block text-2xl sm:text-3xl mt-1">
            Tailored to Materials & Atmosphere
          </span>
        </h2>
        <p class="text-white/60 text-sm sm:text-base leading-relaxed">
          نصنف أعمالنا إلى مجموعات أسلوبية تحاكي هوية المكان، وتجمع بين دقة قطاعات الألومنيوم الهندسية وفخامة المواد المعاصرة.
        </p>
      </div>

      <!-- Collections Detailed Presentation Cards -->
      <div class="space-y-16">
        @for (col of collections(); track col.id) {
          <div 
            [id]="col.category === 'kitchen' ? 'kitchens' : (col.category === 'window' ? 'windows' : 'facades')"
            class="atelier-card rounded-3xl p-6 sm:p-10 relative overflow-hidden group">
            
            <!-- Translucent Watermark Number in Corner -->
            <div class="absolute -top-6 left-6 watermark-number">
              {{ col.number }}
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              <!-- Information Column (Col 1-7) -->
              <div class="lg:col-span-7 space-y-5">
                
                <div class="flex items-center gap-3">
                  <span class="champagne-badge px-3 py-1 rounded text-xs font-bold font-display">
                    COLLECTION {{ col.number }}
                  </span>
                  <span class="text-xs text-[#C9A982] tracking-wider uppercase font-medium">
                    {{ col.titleAccent }}
                  </span>
                </div>

                <h3 class="text-2xl sm:text-3xl font-bold text-white">
                  {{ col.title }}
                </h3>

                <p class="text-sm text-white/70 leading-relaxed font-normal">
                  {{ col.description }}
                </p>

                <!-- Architectural Material Tags -->
                <div class="pt-2">
                  <span class="text-[11px] text-white/40 block mb-2 uppercase tracking-wider">الخامات والمواصفات:</span>
                  <div class="flex flex-wrap gap-2">
                    @for (tag of col.tags; track tag) {
                      <span class="text-xs bg-[#151413] border border-[#C9A982]/20 text-[#E2CEB9] px-3 py-1 rounded-lg">
                        {{ tag }}
                      </span>
                    }
                  </div>
                </div>

                <!-- Explore Link -->
                <div class="pt-4">
                  <button 
                    (click)="filterAndScroll(col.category)" 
                    class="inline-flex items-center gap-3 text-xs sm:text-sm font-bold text-[#C9A982] hover:text-[#F8F5F1] transition group/btn">
                    <span>مشاهدة مشاريع المجموعة في سجل الأعمال</span>
                    <div class="w-8 h-8 rounded-full bg-[#151413] border border-[#C9A982]/30 flex items-center justify-center group-hover/btn:border-[#C9A982] transition">
                      <span class="text-xs transform group-hover/btn:translate-x-[-2px] transition">←</span>
                    </div>
                  </button>
                </div>

              </div>

              <!-- Visual 9:16 Preview Column (Col 8-12) -->
              <div class="lg:col-span-5 flex justify-center lg:justify-end">
                <div 
                  (click)="filterAndScroll(col.category)"
                  class="relative w-full sm:w-80 aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl cursor-pointer border border-[#C9A982]/20 group-hover:border-[#C9A982]/60 transition-colors duration-500">
                  <img 
                    [src]="col.bannerImage" 
                    [alt]="col.title" 
                    class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-[#151413]/90 via-transparent to-transparent"></div>

                  <!-- Hover Action Circular Arrow -->
                  <div class="absolute bottom-5 left-5">
                    <div class="card-arrow-btn">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M7 17L17 7M17 7H7M17 7V17"/>
                      </svg>
                    </div>
                  </div>

                  <div class="absolute bottom-5 right-5">
                    <span class="text-xs font-bold text-[#F8F5F1] block">{{ col.subtitle }}</span>
                    <span class="text-[10px] text-[#C9A982]">استعراض الكتالوج المخصص</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        }
      </div>

    </section>
  `
})
export class CategoriesComponent {
  private dataService = inject(DataService);
  collections = this.dataService.collections;

  filterAndScroll(category: ProductCategory) {
    this.dataService.setCategory(category);
    const el = document.getElementById('gallery');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
