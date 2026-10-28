import { Component, inject, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../core/services/data.service';
import { ProjectItem, ProductCategory } from '../../core/models/project.model';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="gallery" class="py-24 bg-[#100F0E] border-y border-[#C9A982]/15 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-8">
        
        <!-- Section Header with Editorial Styling -->
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div class="space-y-3 max-w-2xl">
            <div class="eyebrow-container">
              <span class="eyebrow-line"></span>
              <span>SELECTED ARCHITECTURAL WORKS</span>
            </div>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8F5F1] leading-tight">
              <span>سجل المشاريع المنفذة</span>
              <span class="italic font-display text-[#C9A982] block text-2xl sm:text-3xl mt-1">
                Visual Portfolio & Case Studies
              </span>
            </h2>
            <p class="text-white/60 text-sm">
              معرض حي يوثق دقة التنفيذ لقطاعات الألومنيوم الهندسية والمطابخ والواجهات في أرقى الفلل والمجمعات السكنية والتجارية.
            </p>
          </div>

          <!-- Minimalist Filter Tabs -->
          <div class="flex flex-wrap gap-2 p-1.5 rounded-xl bg-[#1C1A18] border border-[#C9A982]/20 self-start md:self-auto">
            <button 
              (click)="setFilter('all')" 
              [class.bg-[#C9A982]]="activeCategory() === 'all'" 
              [class.text-[#151413]]="activeCategory() === 'all'"
              [class.text-white/70]="activeCategory() !== 'all'"
              class="px-4 py-2 rounded-lg text-xs font-bold transition">
              كافة الأعمال ({{ allCount() }})
            </button>
            <button 
              (click)="setFilter('kitchen')" 
              [class.bg-[#C9A982]]="activeCategory() === 'kitchen'" 
              [class.text-[#151413]]="activeCategory() === 'kitchen'"
              [class.text-white/70]="activeCategory() !== 'kitchen'"
              class="px-4 py-2 rounded-lg text-xs font-bold transition">
              مطابخ أوبسيديان
            </button>
            <button 
              (click)="setFilter('window')" 
              [class.bg-[#C9A982]]="activeCategory() === 'window'" 
              [class.text-[#151413]]="activeCategory() === 'window'"
              [class.text-white/70]="activeCategory() !== 'window'"
              class="px-4 py-2 rounded-lg text-xs font-bold transition">
              أنظمة الفولدينج والشبابيك
            </button>
            <button 
              (click)="setFilter('facade')" 
              [class.bg-[#C9A982]]="activeCategory() === 'facade'" 
              [class.text-[#151413]]="activeCategory() === 'facade'"
              [class.text-white/70]="activeCategory() !== 'facade'"
              class="px-4 py-2 rounded-lg text-xs font-bold transition">
              الواجهات والكلادينج
            </button>
          </div>
        </div>

        <!-- Staggered 9:16 Portrait Grid (Editorial Rhythm) -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 staggered-grid">
          @for (project of projects(); track project.id) {
            <div 
              (click)="openPreview(project)"
              class="group relative aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer shadow-2xl border border-white/10 hover:border-[#C9A982]/60 transition-all duration-500 flex flex-col justify-between">
              
              <!-- Background Image -->
              <img 
                [src]="project.imageUrl" 
                [alt]="project.title" 
                class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />

              <!-- Gradient Overlays for Readability -->
              <div class="absolute inset-0 bg-gradient-to-t from-[#151413] via-[#151413]/30 to-black/40"></div>

              <!-- Top Row: Badge & Project Number -->
              <div class="relative z-10 p-5 flex items-center justify-between">
                <span class="text-xs font-display italic text-[#C9A982] tracking-widest">
                  PROJECT {{ project.projectNumber }}
                </span>

                @if (project.badge) {
                  <span class="champagne-badge px-2.5 py-0.5 rounded text-[10px] font-bold">
                    {{ project.badge }}
                  </span>
                }
              </div>

              <!-- Bottom Row: Title, Metadata & Circular Arrow Button -->
              <div class="relative z-10 p-6 space-y-3">
                
                <div class="space-y-1">
                  <div class="text-[11px] text-[#C9A982] font-semibold flex items-center gap-1.5">
                    <span class="w-1 h-1 rounded-full bg-[#C9A982]"></span>
                    <span>{{ project.location }}</span>
                  </div>
                  <h3 class="text-lg font-bold text-white leading-snug group-hover:text-[#C9A982] transition">
                    {{ project.title }}
                  </h3>
                  <p class="text-xs text-white/60 line-clamp-2 leading-relaxed">
                    {{ project.description }}
                  </p>
                </div>

                <!-- Material Tags -->
                @if (project.materialTags) {
                  <div class="flex flex-wrap gap-1.5 pt-1">
                    @for (tag of project.materialTags; track tag) {
                      <span class="text-[10px] bg-black/60 backdrop-blur-md text-white/80 px-2 py-0.5 rounded border border-white/10">
                        {{ tag }}
                      </span>
                    }
                  </div>
                }

                <!-- Action Button Row -->
                <div class="pt-2 flex items-center justify-between">
                  <span class="text-[11px] text-white/50 group-hover:text-white transition">عرض التفاصيل المعمارية</span>
                  <div class="card-arrow-btn">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M7 17L17 7M17 7H7M17 7V17"/>
                    </svg>
                  </div>
                </div>

              </div>

            </div>
          }
        </div>

      </div>

      <!-- Cinematic Fullscreen Lightbox Modal -->
      @if (selectedProject()) {
        <div 
          (click)="closePreview()"
          class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-300">
          
          <div 
            (click)="$event.stopPropagation()"
            class="atelier-card max-w-4xl w-full rounded-3xl overflow-hidden border border-[#C9A982]/35 shadow-2xl relative flex flex-col md:flex-row max-h-[90vh]">
            
            <!-- Close Button -->
            <button 
              (click)="closePreview()" 
              class="absolute top-4 left-4 z-20 w-10 h-10 rounded-full bg-[#151413]/80 text-white hover:text-[#C9A982] flex items-center justify-center border border-white/15 transition">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>

            <!-- Lightbox 9:16 Photo Half -->
            <div class="md:w-1/2 relative bg-black aspect-[9/16] md:aspect-auto">
              <img 
                [src]="selectedProject()!.imageUrl" 
                [alt]="selectedProject()!.title" 
                class="w-full h-full object-cover">
              <div class="absolute inset-0 bg-gradient-to-t from-[#1C1A18] via-transparent to-transparent md:hidden"></div>
              
              <!-- Project Number Badge -->
              <div class="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded text-xs text-[#C9A982] font-display">
                PROJECT {{ selectedProject()!.projectNumber }}
              </div>
            </div>

            <!-- Lightbox Information Half -->
            <div class="md:w-1/2 p-6 sm:p-10 flex flex-col justify-between overflow-y-auto space-y-6">
              
              <div class="space-y-4">
                <div class="flex items-center gap-2">
                  <span class="champagne-badge px-3 py-0.5 rounded text-[11px] font-bold">
                    {{ selectedProject()!.collectionName }}
                  </span>
                  <span class="text-xs text-white/50">{{ selectedProject()!.location }}</span>
                </div>

                <h3 class="text-xl sm:text-2xl font-bold text-white">
                  {{ selectedProject()!.title }}
                </h3>

                <p class="text-xs sm:text-sm text-white/70 leading-relaxed">
                  {{ selectedProject()!.description }}
                </p>

                <!-- Technical Specs Checklist -->
                <div class="pt-2">
                  <h4 class="text-xs font-bold text-[#C9A982] uppercase tracking-wider mb-2.5">
                    المواصفات الفنية والهندسية:
                  </h4>
                  <div class="space-y-2">
                    @for (spec of selectedProject()!.specs; track spec) {
                      <div class="flex items-center gap-2.5 text-xs text-white/80 bg-[#151413] p-2.5 rounded-xl border border-white/5">
                        <span class="w-1.5 h-1.5 rounded-full bg-[#C9A982] flex-shrink-0"></span>
                        <span>{{ spec }}</span>
                      </div>
                    }
                  </div>
                </div>
              </div>

              <!-- Action Inquiry Button -->
              <div class="pt-4 border-t border-white/10 flex flex-col gap-2">
                <a 
                  (click)="closePreview()" 
                  href="#calculator" 
                  class="champagne-btn text-xs py-3.5 rounded-xl flex items-center justify-center gap-2">
                  <span>طلب تنفيذ مواصفة مماثلة في مشروعك</span>
                  <span class="text-sm">↗</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      }

    </section>
  `
})
export class GalleryComponent {
  private dataService = inject(DataService);

  activeCategory = this.dataService.activeCategory;
  projects = this.dataService.filteredProjects;
  allCount = () => this.dataService.projects().length;

  selectedProject = signal<ProjectItem | null>(null);

  setFilter(cat: ProductCategory | 'all') {
    this.dataService.setCategory(cat);
  }

  openPreview(project: ProjectItem) {
    this.selectedProject.set(project);
  }

  closePreview() {
    this.selectedProject.set(null);
  }

  @HostListener('window:keydown.escape')
  handleEscape() {
    this.closePreview();
  }
}
