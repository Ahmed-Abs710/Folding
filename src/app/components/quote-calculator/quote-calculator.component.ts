import { Component, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../core/services/data.service';
import { ProductCategory } from '../../core/models/project.model';

@Component({
  selector: 'app-quote-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="calculator" class="py-24 px-4 sm:px-8 max-w-7xl mx-auto relative">
      <div class="atelier-card rounded-3xl p-6 sm:p-12 relative overflow-hidden border border-[#C9A982]/25 shadow-2xl">
        
        <!-- Subtle Ambient Lighting -->
        <div class="absolute -right-24 -bottom-24 w-96 h-96 bg-[#C9A982]/10 rounded-full blur-3xl pointer-events-none"></div>

        <!-- Header -->
        <div class="max-w-3xl mb-12 space-y-3 relative z-10">
          <div class="eyebrow-container">
            <span class="eyebrow-line"></span>
            <span>INSTANT PROJECT ESTIMATOR</span>
          </div>
          <h2 class="text-2xl sm:text-4xl font-extrabold text-[#F8F5F1]">
            احسب التكلفة التقديرية لمشروعك المعماري
          </h2>
          <p class="text-white/60 text-xs sm:text-sm">
            نظام تسعير هندسي فوري يحدد الميزانية المتوقعة بحسب نوع المنظومة والمساحة وفئة القطاعات الألمانية والإيطالية.
          </p>
        </div>

        <!-- Inputs Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          
          <!-- Field 1 -->
          <div class="space-y-2">
            <label class="block text-xs font-bold text-white/80">1. المنظومة أو المنتج المعماري</label>
            <select 
              [ngModel]="selectedType()" 
              (ngModelChange)="selectedType.set($event)"
              class="w-full bg-[#151413] border border-[#C9A982]/30 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#C9A982] transition cursor-pointer">
              <option value="kitchen">مطابخ ألومنيوم كلادينج وبروفايل إيطالي</option>
              <option value="window">شبابيك ألومنيوم دبل جلاس عازلة للحرارة</option>
              <option value="folding">أنظمة فولدينج وسلايدنج بانورامية</option>
              <option value="facade">واجهات كيرتن وول وتجاليد كلادينج A2</option>
            </select>
          </div>

          <!-- Field 2 -->
          <div class="space-y-2">
            <label class="block text-xs font-bold text-white/80">
              2. المساحة أو المقاس التقريبي ({{ unitLabel() }})
            </label>
            <div class="relative">
              <input 
                type="number" 
                min="1" 
                max="500" 
                [ngModel]="area()" 
                (ngModelChange)="area.set($event || 1)"
                class="w-full bg-[#151413] border border-[#C9A982]/30 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#C9A982] transition"
              />
              <span class="absolute left-4 top-3.5 text-xs text-[#C9A982] font-semibold">{{ unitLabel() }}</span>
            </div>
          </div>

          <!-- Field 3 -->
          <div class="space-y-2">
            <label class="block text-xs font-bold text-white/80">3. فئة القطاع والمواصفات الميكانيكية</label>
            <select 
              [ngModel]="selectedTier()" 
              (ngModelChange)="selectedTier.set($event)"
              class="w-full bg-[#151413] border border-[#C9A982]/30 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#C9A982] transition cursor-pointer">
              <option value="premium">البريميوم الإيطالي (قطاع ثقيل + إكسسوارات بلوم)</option>
              <option value="standard">المعيار المعماري (قطاعات معتمدة + ضمان 10 سنوات)</option>
              <option value="luxury">الألترا لاكشري (ثيرمال بريك + عتبة فلاش + زجاج سمارت)</option>
            </select>
          </div>

        </div>

        <!-- Calculated Result Box -->
        <div class="mt-10 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 bg-[#151413]/90 p-6 sm:p-8 rounded-2xl border border-[#C9A982]/20 relative z-10">
          
          <div class="space-y-1 text-center md:text-right w-full md:w-auto">
            <span class="text-xs text-white/50">الميزانية التقديرية المبدئية:</span>
            <div class="text-2xl sm:text-4xl font-display font-bold text-[#C9A982]">
              {{ quote().minPrice.toLocaleString('en-US') }} - {{ quote().maxPrice.toLocaleString('en-US') }} <span class="text-base sm:text-xl font-normal text-white/70">ج.م</span>
            </div>
            <p class="text-[11px] text-white/40">
              * تشمل التكلفة التصنيع بالـ CNC الإيطالي، الزجاج المزدوج، النقل، التركيب وضمان كتابي 10 سنوات.
            </p>
          </div>

          <!-- Actions -->
          <div class="flex flex-wrap items-center gap-3 w-full md:w-auto justify-center md:justify-end">
            <button 
              (click)="sendViaWhatsApp()" 
              class="champagne-btn text-xs sm:text-sm px-6 py-3.5 rounded-xl flex items-center gap-2.5 w-full sm:w-auto justify-center">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>إرسال تفاصيل المقايسة لواتساب</span>
            </button>

            <a 
              href="#contact" 
              class="px-5 py-3.5 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white font-bold text-xs sm:text-sm transition flex items-center justify-center gap-2 w-full sm:w-auto">
              <span>طلب معاينة فنية مجانية</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  `
})
export class QuoteCalculatorComponent {
  private dataService = inject(DataService);

  selectedType = signal<ProductCategory | 'folding'>('kitchen');
  area = signal<number>(8);
  selectedTier = signal<'standard' | 'premium' | 'luxury'>('premium');

  unitLabel = computed(() => {
    return this.selectedType() === 'kitchen' ? 'متر طولي' : 'متر مربع';
  });

  quote = computed(() => {
    return this.dataService.calculateQuote({
      type: this.selectedType(),
      area: this.area(),
      tier: this.selectedTier()
    });
  });

  sendViaWhatsApp() {
    const q = this.quote();
    const message = `مرحباً، أود حجز استشارة ومقايسة معمارية من شركة فولدينج للألومنيوم:%0A` +
      `🏛️ *المنظومة:* ${q.typeLabel}%0A` +
      `📐 *المساحة:* ${this.area()} ${q.unitLabel}%0A` +
      `✨ *فئة المواصفة:* ${q.tierLabel}%0A` +
      `💰 *التقدير الأولي:* ${q.minPrice.toLocaleString('en-US')} - ${q.maxPrice.toLocaleString('en-US')} ج.م%0A` +
      `يرجى التنسيق لمعاينة الموقع ورفع المقاسات الهندسية.`;

    window.open(`https://wa.me/201000000000?text=${message}`, '_blank');
  }
}
