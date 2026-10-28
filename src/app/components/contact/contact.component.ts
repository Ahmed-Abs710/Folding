import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact" class="py-24 px-4 sm:px-8 max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <!-- Left: Editorial Content & Contact (Col 1-6) -->
        <div class="lg:col-span-6 space-y-6">
          <div class="eyebrow-container">
            <span class="eyebrow-line"></span>
            <span>CONSULTATION & SITE SURVEY</span>
          </div>

          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8F5F1] leading-tight">
            <span>ابدأ بتجسيد رؤيتك المعمارية</span>
            <span class="italic font-display text-[#C9A982] block text-2xl sm:text-3xl mt-1">
              Complimentary Architectural Survey
            </span>
          </h2>

          <p class="text-white/70 text-sm sm:text-base leading-relaxed">
            مهندسونا مستعدون لزيارة موقعك لرفع المقاسات الإنشائية بدقة ومناقشة تفاصيل الخامات وتوزيع المساحات واقتراح أنسب القطاعات.
          </p>

          <div class="space-y-4 pt-4">
            
            <a href="tel:+201000000000" class="flex items-center gap-4 p-4 rounded-2xl bg-[#1C1A18] border border-[#C9A982]/20 hover:border-[#C9A982] transition group">
              <div class="w-11 h-11 rounded-xl bg-[#C9A982]/10 text-[#C9A982] flex items-center justify-center group-hover:scale-105 transition">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </div>
              <div>
                <div class="text-[11px] text-white/40">المكتب الفني والمبيعات المباشرة</div>
                <div class="text-sm sm:text-base font-bold text-white group-hover:text-[#C9A982] transition" dir="ltr">
                  +20 100 000 0000 / +20 120 000 0000
                </div>
              </div>
            </a>

            <a href="https://wa.me/201000000000" target="_blank" class="flex items-center gap-4 p-4 rounded-2xl bg-[#1C1A18] border border-[#C9A982]/20 hover:border-[#C9A982] transition group">
              <div class="w-11 h-11 rounded-xl bg-[#C9A982]/10 text-[#C9A982] flex items-center justify-center group-hover:scale-105 transition">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </div>
              <div>
                <div class="text-[11px] text-white/40">الاستشارة المعمارية الفورية عبر واتساب</div>
                <div class="text-sm sm:text-base font-bold text-white group-hover:text-[#C9A982] transition">
                  تحدث مباشرة مع مهندس المشروع
                </div>
              </div>
            </a>

          </div>
        </div>

        <!-- Right: Form (Col 7-12) -->
        <div class="lg:col-span-6">
          <div class="atelier-card p-8 sm:p-10 rounded-3xl border border-[#C9A982]/25 shadow-2xl relative">
            <h3 class="text-xl font-bold text-white mb-2">طلب معاينة وتصميم 3D</h3>
            <p class="text-xs text-white/50 mb-6">سجل بياناتك وسيقوم المهندس المختص بالتنسيق معك لزيارة الموقع.</p>

            @if (isSubmitted()) {
              <div class="p-6 rounded-2xl bg-[#C9A982]/15 border border-[#C9A982]/40 text-[#E2CEB9] space-y-2 animate-in fade-in duration-300">
                <div class="flex items-center gap-2 font-bold text-sm">
                  ✓ تم استلام طلب المعاينة بنجاح
                </div>
                <p class="text-xs leading-relaxed text-white/80">
                  شكراً لاهتمامك بشركة فولدينج. سيقوم مهندس العمليات بالاتصال بك خلال ساعة لتأكيد موعد المعاينة.
                </p>
                <button (click)="isSubmitted.set(false)" class="text-xs text-[#C9A982] underline pt-2 font-semibold">
                  تسجيل طلب إضافي
                </button>
              </div>
            } @else {
              <form (ngSubmit)="submitForm()" class="space-y-4">
                <div>
                  <label class="block text-xs font-semibold text-white/70 mb-1">الاسم الكريم</label>
                  <input 
                    type="text" 
                    name="fullName"
                    [(ngModel)]="formData.name" 
                    required 
                    placeholder="الاسم بالكامل" 
                    class="w-full bg-[#151413] border border-[#C9A982]/25 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#C9A982] transition"
                  />
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs font-semibold text-white/70 mb-1">رقم الهاتف / واتساب</label>
                    <input 
                      type="tel" 
                      name="phone"
                      [(ngModel)]="formData.phone" 
                      required 
                      placeholder="01xxxxxxxxx" 
                      class="w-full bg-[#151413] border border-[#C9A982]/25 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#C9A982] transition"
                      dir="ltr"
                    />
                  </div>
                  <div>
                    <label class="block text-xs font-semibold text-white/70 mb-1">المدينة / الحي</label>
                    <input 
                      type="text" 
                      name="city"
                      [(ngModel)]="formData.city" 
                      placeholder="مثال: الشيخ زايد / التجمع" 
                      class="w-full bg-[#151413] border border-[#C9A982]/25 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#C9A982] transition"
                    />
                  </div>
                </div>

                <div>
                  <label class="block text-xs font-semibold text-white/70 mb-1">المنظومة المطلوبة</label>
                  <select 
                    name="service"
                    [(ngModel)]="formData.service" 
                    class="w-full bg-[#151413] border border-[#C9A982]/25 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-[#C9A982] transition cursor-pointer">
                    <option value="kitchen">مطابخ ألومنيوم كلادينج أوبسيديان</option>
                    <option value="windows">أنظمة فولدينج وسلايدنج بانورامية</option>
                    <option value="facade">واجهة كيرتن وول وتجاليد كلادينج A2</option>
                    <option value="full-villa">تشطيب معماري متكامل لفيلا / قصر</option>
                  </select>
                </div>

                <div>
                  <label class="block text-xs font-semibold text-white/70 mb-1">ملاحظات أو مواصفات خاصة (اختياري)</label>
                  <textarea 
                    name="notes"
                    [(ngModel)]="formData.notes" 
                    rows="3" 
                    placeholder="أي تفاصيل عن نوع القطاع المفضل أو موعد المعاينة المقترح..." 
                    class="w-full bg-[#151413] border border-[#C9A982]/25 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#C9A982] transition"></textarea>
                </div>

                <button 
                  type="submit" 
                  class="w-full champagne-btn text-xs sm:text-sm py-4 rounded-xl transition duration-300 flex items-center justify-center gap-2">
                  <span>تأكيد طلب المعاينة الهندسية</span>
                  <span>↗</span>
                </button>
              </form>
            }
          </div>
        </div>

      </div>
    </section>
  `
})
export class ContactComponent {
  isSubmitted = signal<boolean>(false);

  formData = {
    name: '',
    phone: '',
    city: '',
    service: 'kitchen',
    notes: ''
  };

  submitForm() {
    if (!this.formData.name || !this.formData.phone) return;
    this.isSubmitted.set(true);
  }
}
