import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-specs',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="specs" class="py-24 px-4 sm:px-8 max-w-7xl mx-auto">
      
      <!-- Section Header -->
      <div class="max-w-3xl mb-16 space-y-4">
        <div class="eyebrow-container">
          <span class="eyebrow-line"></span>
          <span>ENGINEERING INTEGRITY & STANDARDS</span>
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8F5F1] leading-tight">
          <span>المعايير الهندسية ودقة التصنيع</span>
          <span class="italic font-display text-[#C9A982] block text-2xl sm:text-3xl mt-1">
            Engineered for Generations
          </span>
        </h2>
        <p class="text-white/60 text-sm sm:text-base leading-relaxed">
          نجمع بين خامات الألومنيوم العالمية المعتمدة وأحدث ماكينات التصنيع الإيطالية لنضمن أداءً ميكانيكياً يدوم لعقود.
        </p>
      </div>

      <!-- Feature Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <!-- Spec 1 -->
        <div class="atelier-card p-8 rounded-2xl space-y-4">
          <div class="w-12 h-12 rounded-xl bg-[#C9A982]/10 border border-[#C9A982]/30 flex items-center justify-center text-[#C9A982] font-display text-lg">
            01
          </div>
          <h4 class="text-base font-bold text-white">ضمان رسمي 10 سنوات</h4>
          <p class="text-xs text-white/60 leading-relaxed">
            شهادة ضمان موثقة تشمل ثبات الدهانات، صلابة القطاعات، والإكسسوارات الميكانيكية ضد التآكل وعيوب الصناعة.
          </p>
        </div>

        <!-- Spec 2 -->
        <div class="atelier-card p-8 rounded-2xl space-y-4">
          <div class="w-12 h-12 rounded-xl bg-[#C9A982]/10 border border-[#C9A982]/30 flex items-center justify-center text-[#C9A982] font-display text-lg">
            02
          </div>
          <h4 class="text-base font-bold text-white">ماكينات CNC الإيطالية</h4>
          <p class="text-xs text-white/60 leading-relaxed">
            قص وحفر وتجميع ميكانيكي بالملليمتر لمنع أي تسريب هوائي أو صوتي وضمان انزلاق فائق السلاسة لأبواب الفولدينج.
          </p>
        </div>

        <!-- Spec 3 -->
        <div class="atelier-card p-8 rounded-2xl space-y-4">
          <div class="w-12 h-12 rounded-xl bg-[#C9A982]/10 border border-[#C9A982]/30 flex items-center justify-center text-[#C9A982] font-display text-lg">
            03
          </div>
          <h4 class="text-base font-bold text-white">عزل حراري وتوفير طاقة</h4>
          <p class="text-xs text-white/60 leading-relaxed">
            أنظمة ثيرمال بريك وزجاج دبل معالج تخفض انتقال الحرارة والضوضاء بنسبة تصل إلى 80% لتوفير استهلاك التكييف.
          </p>
        </div>

        <!-- Spec 4 -->
        <div class="atelier-card p-8 rounded-2xl space-y-4">
          <div class="w-12 h-12 rounded-xl bg-[#C9A982]/10 border border-[#C9A982]/30 flex items-center justify-center text-[#C9A982] font-display text-lg">
            04
          </div>
          <h4 class="text-base font-bold text-white">تصميم ثلاثي الأبعاد 3D</h4>
          <p class="text-xs text-white/60 leading-relaxed">
            نقدم محاكاة بصرية واقعية 3D لمشروعك بالمقاسات والألوان وتوزيع الإضاءة والخزائن قبل البدء في التصنيع.
          </p>
        </div>

      </div>

      <!-- Partner Certifications Banner -->
      <div class="mt-12 atelier-card p-6 sm:p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="flex items-center gap-4">
          <span class="w-2.5 h-2.5 rounded-full bg-[#C9A982] animate-pulse"></span>
          <div>
            <h4 class="text-sm font-bold text-white">الاعتماد الرسمي لأرقى القطاعات العالمية</h4>
            <p class="text-xs text-white/50">توريد وتصنيع معتمد وفق الكود الهندسي الأوروبي والمصري.</p>
          </div>
        </div>
        <div class="flex flex-wrap items-center gap-6 text-xs text-white/60 font-semibold tracking-widest uppercase">
          <span class="text-white hover:text-[#C9A982] transition">ALUMIL</span>
          <span class="text-white/20">•</span>
          <span class="text-white hover:text-[#C9A982] transition">SCHÜCO</span>
          <span class="text-white/20">•</span>
          <span class="text-white hover:text-[#C9A982] transition">TECHNAL</span>
          <span class="text-white/20">•</span>
          <span class="text-white hover:text-[#C9A982] transition">JUMBO</span>
        </div>
      </div>

    </section>
  `
})
export class SpecsComponent {}
