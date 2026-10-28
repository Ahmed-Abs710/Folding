import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="border-t border-[#C9A982]/15 bg-[#0D0C0B] pt-20 pb-12 px-4 sm:px-8 text-white/50 text-xs">
      <div class="max-w-7xl mx-auto space-y-16">
        
        <!-- Main Footer Columns -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          <!-- Brand Bio (Col 1-5) -->
          <div class="lg:col-span-5 space-y-5">
            <div class="flex items-center gap-3.5">
              <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C9A982] to-[#765A46] p-0.5 shadow-md">
                <div class="w-full h-full bg-[#151413] rounded-[10px] flex items-center justify-center">
                  <svg class="w-6 h-6" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="brandGoldBright" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#FFF5E8"/>
                    <stop offset="40%" stop-color="#DEBE97"/>
                    <stop offset="100%" stop-color="#B88E5E"/>
                  </linearGradient>
                  <linearGradient id="brandGoldShadow" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#8F6A40"/>
                    <stop offset="100%" stop-color="#5E4122"/>
                  </linearGradient>
                </defs>
                <path d="M 33 27 L 46 27 L 46 101 L 33 101 Z" fill="url(#brandGoldBright)"/>
                <path d="M 33 27 L 30 30 L 30 98 L 33 101 Z" fill="url(#brandGoldShadow)"/>
                <line x1="36.5" y1="30" x2="36.5" y2="98" stroke="#FFFFFF" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round"/>
                <polygon points="46,27 71,36 71,51 46,42" fill="url(#brandGoldShadow)"/>
                <polygon points="71,36 98,27 98,42 71,51" fill="url(#brandGoldBright)"/>
                <line x1="46" y1="27" x2="71" y2="36" stroke="#FFFFFF" stroke-opacity="0.9" stroke-width="2.2" stroke-linecap="round"/>
                <line x1="71" y1="36" x2="98" y2="27" stroke="#FFFFFF" stroke-opacity="0.9" stroke-width="2.2" stroke-linecap="round"/>
                <polygon points="46,59 66,66 66,78 46,71" fill="url(#brandGoldShadow)"/>
                <polygon points="66,66 87,59 87,71 66,78" fill="url(#brandGoldBright)"/>
                <line x1="46" y1="59" x2="66" y2="66" stroke="#FFFFFF" stroke-opacity="0.85" stroke-width="2" stroke-linecap="round"/>
                <line x1="66" y1="66" x2="87" y2="59" stroke="#FFFFFF" stroke-opacity="0.85" stroke-width="2" stroke-linecap="round"/>
                <circle cx="71" cy="43.5" r="2.8" fill="#141312" stroke="#FFF2E2" stroke-width="1.2"/>
                <circle cx="66" cy="72" r="2.4" fill="#141312" stroke="#FFF2E2" stroke-width="1"/>
              </svg>
                </div>
              </div>
              <div>
                <span class="text-base font-bold text-white block">فولدينج للألومنيوم المعماري</span>
                <span class="text-[9px] text-[#C9A982] tracking-[0.2em] uppercase font-medium">Architectural Systems Atelier</span>
              </div>
            </div>
            
            <p class="text-white/60 text-xs leading-relaxed max-w-md">
              دار تصنيع وهندسة متخصصة في تنفيذ مطابخ الألومنيوم العصرية، أنظمة الفولدينج والبانوراما، والواجهات المعمارية الزجاجية والكلادينج بأعلى مواصفات الجودة الأوروبية.
            </p>

            <div class="champagne-badge inline-block px-3 py-1 rounded text-[11px] font-medium tracking-wide">
              ضمان كتابي معتمد 10 سنوات
            </div>
          </div>

          <!-- Quick Links: Systems (Col 6-8) -->
          <div class="lg:col-span-4 space-y-3">
            <h4 class="text-xs font-bold text-white uppercase tracking-wider font-display text-[#C9A982]">
              المجموعات والأنظمة
            </h4>
            <ul class="space-y-2.5 text-xs text-white/70">
              <li><a href="#kitchens" class="hover:text-[#C9A982] transition">مطابخ الأوبسيديان والكلادينج الأسود</a></li>
              <li><a href="#kitchens" class="hover:text-[#C9A982] transition">مجموعة الترافنتين والشامبين المؤكسد</a></li>
              <li><a href="#windows" class="hover:text-[#C9A982] transition">أنظمة فولدينج بانورامية مع عتبة غاطسة</a></li>
              <li><a href="#windows" class="hover:text-[#C9A982] transition">شبابيك ثيرمال بريك الألمانية Schüco</a></li>
              <li><a href="#facades" class="hover:text-[#C9A982] transition">واجهات كيرتن وول Curtain Wall</a></li>
              <li><a href="#facades" class="hover:text-[#C9A982] transition">تكسيات كلادينج ألومنيوم A2 ضد الحريق</a></li>
            </ul>
          </div>

          <!-- Contact Details (Col 9-12) -->
          <div class="lg:col-span-3 space-y-3">
            <h4 class="text-xs font-bold text-white uppercase tracking-wider font-display text-[#C9A982]">
              المكتب الفني والمعرض
            </h4>
            <p class="text-white/60 text-xs leading-relaxed">
              المصنع الهندسي وصالة العرض: المنطقة الصناعية - خدمة التوريد والتركيب لكافة المشاريع الكبرى بالمحافظات.
            </p>
            <div class="space-y-1.5 text-white/80 font-medium pt-2">
              <div>هاتف: <span dir="ltr" class="text-white">+20 100 000 0000</span></div>
              <div>واتساب: <span dir="ltr" class="text-white">+20 120 000 0000</span></div>
              <div>البريد: info&#64;folding-aluminum.com</div>
            </div>
          </div>

        </div>

        <!-- Copyright -->
        <div class="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-white/40 text-[11px]">
          <div>
            جميع الحقوق محفوظة © 2026 - شركة فولدينج لأنظمة الألومنيوم والمعمار الحديث.
          </div>
          <div class="flex items-center gap-6">
            <span>دقة التصنيع CNC</span>
            <span>•</span>
            <span>معتمدون هندسياً</span>
            <span>•</span>
            <button (click)="scrollToTop()" class="hover:text-[#C9A982] transition flex items-center gap-1">
              <span>للأعلى</span>
              <span>↑</span>
            </button>
          </div>
        </div>

      </div>

      <!-- Floating WhatsApp VIP Button -->
      <a 
        href="https://wa.me/201000000000" 
        target="_blank" 
        class="fixed bottom-6 left-6 z-40 w-14 h-14 rounded-full bg-[#C9A982] hover:bg-[#DFCCA4] text-[#151413] flex items-center justify-center shadow-2xl shadow-[#C9A982]/30 hover:scale-110 transition-transform duration-300"
        title="تواصل مع المستشار المعماري عبر واتساب">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      </a>
    </footer>
  `
})
export class FooterComponent {
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
