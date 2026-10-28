import { Component, signal, HostListener, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Pinned Scroll Track: Extended to 480vh for a luxurious, deep Angular-style scroll journey -->
    <section id="hero-track" class="relative h-[480vh] bg-[#151413]">
      
      <!-- Sticky Fullscreen Viewport: Calibrated to fit 100% inside any screen without bottom clipping -->
      <div class="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between atelier-bg select-none py-2 sm:py-4">
        
        <!-- Ambient Background Lighting & CAD Grid -->
        <div class="absolute inset-0 pointer-events-none z-0">
          <!-- Dynamic Expanding Glow Sphere -->
          <div 
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#C9A982]/12 rounded-full blur-[150px] transition-transform duration-300"
            [style.transform]="'translate(-50%, -50%) scale(' + (1 + smoothProgress() * 0.7) + ')'">
          </div>
          <div 
            class="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#765A46]/18 rounded-full blur-[130px] transition-transform duration-300"
            [style.transform]="'scale(' + (1 + smoothProgress() * 0.4) + ')'">
          </div>

          <!-- Subtle Precision CAD Grid & Timeline Watermark -->
          <div 
            class="absolute inset-0 opacity-20 transition-opacity duration-500"
            [style.opacity]="cadOpacity()">
            <div class="absolute inset-0 bg-[linear-gradient(to_right,#C9A98212_1px,transparent_1px),linear-gradient(to_bottom,#C9A98212_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
            <div class="absolute bottom-6 right-8 text-[#C9A982]/60 text-[10px] font-mono tracking-widest hidden md:block">+ CNC TOLERANCE: ±0.2mm • DBL GLAZE LOW-E</div>
          </div>
        </div>

        <!-- 1. Top HUD Status Bar -->
        <div class="relative z-20 max-w-7xl mx-auto px-3 sm:px-8 w-full flex items-center justify-between border-b border-white/10 pb-2">
          <!-- Phase Pill -->
          <div class="flex items-center gap-2.5">
            <span class="w-2 h-2 rounded-full bg-[#C9A982] animate-pulse"></span>
            <span class="text-[9.5px] sm:text-xs text-[#C9A982] font-semibold tracking-wider font-mono truncate max-w-[190px] sm:max-w-none">
              {{ currentPhaseData().title }}
            </span>
          </div>

          <!-- Live Engineering Metric Tickers -->
          <div class="hidden lg:flex items-center gap-6 text-[11px] text-white/50">
            <div class="flex items-center gap-1.5">
              <span class="text-white/30">عزل الضوضاء:</span>
              <span class="text-[#C9A982] font-bold font-display">-42 dB</span>
            </div>
            <div class="flex items-center gap-1.5">
              <span class="text-white/30">توفير الطاقة:</span>
              <span class="text-[#C9A982] font-bold font-display">45% Low-E</span>
            </div>
            <div class="flex items-center gap-1.5">
              <span class="text-white/30">دقة CNC:</span>
              <span class="text-white font-bold font-display">±0.2 mm</span>
            </div>
          </div>

          <!-- Step Badge -->
          <div class="flex items-center gap-2">
            <span class="text-[10px] text-white/40">مسار التمرير:</span>
            <span class="champagne-badge px-2.5 py-0.5 rounded text-[11px] font-mono font-bold">
              {{ currentPhaseData().step }}
            </span>
          </div>
        </div>

        <!-- 2. Center Stage (Headline + 3D Cards + Phase 3 CTAs) -->
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 w-full flex-1 flex flex-col justify-center items-center my-auto">
          
          <!-- Dynamic Headline Area (Fixed Height to eliminate jumpiness and overlap) -->
          <div class="text-center max-w-3xl mx-auto mb-2 sm:mb-4 min-h-[68px] sm:h-[85px] flex flex-col justify-center">
            <div class="eyebrow-container mb-1.5 justify-center">
              <span class="eyebrow-line"></span>
              <span class="text-[10px] sm:text-xs tracking-widest">{{ currentPhaseData().eyebrow }}</span>
              <span class="eyebrow-line"></span>
            </div>

            <h1 class="text-lg sm:text-3xl lg:text-4xl font-extrabold text-[#F8F5F1] leading-snug tracking-tight">
              <span>{{ currentPhaseData().mainText }}</span>
              <span class="italic font-display text-[#C9A982] block text-sm sm:text-xl lg:text-2xl mt-0.5 font-normal">
                {{ currentPhaseData().subText }}
              </span>
            </h1>
          </div>

          <!-- Laser Architectural Dimension Bar (Safe spacing, no overlap) -->
          <div 
            class="w-full max-w-3xl flex items-center justify-between text-[8px] sm:text-[10px] text-[#C9A982] font-mono border-t border-dashed border-[#C9A982]/35 pt-1 mb-2 transition-all duration-300 z-30"
            [style.opacity]="specTagsOpacity()"
            [style.transform]="'translateY(' + (1 - specTagsOpacity()) * -10 + 'px)'">
            <span>|◄ 0.00m</span>
            <span class="bg-[#151413]/90 backdrop-blur px-3 py-0.5 text-[#E2CEB9] border border-[#C9A982]/30 rounded-full font-bold shadow-lg">
              انفراج بانورامي للمنظومات: 8.50m
            </span>
            <span>►|</span>
          </div>

          <!-- 3D Transform Stage Container -->
          <div 
            class="relative w-full max-w-5xl h-[310px] sm:h-[350px] lg:h-[370px] flex items-center justify-center"
            style="perspective: 1200px; transform-style: preserve-3d;">

            <!-- CARD 1: Left Card (Panoramic Bi-Fold Systems) -->
            <div 
              class="absolute w-44 sm:w-56 lg:w-64 h-[280px] sm:h-[330px] lg:h-[350px] rounded-2xl overflow-hidden transition-all duration-300 ease-out z-10 border border-white/15 group cursor-pointer"
              [style.transform]="leftCardTransform()"
              [style.boxShadow]="leftCardShadow()"
              (click)="scrollToTarget('windows')">
              
              <img 
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&h=1200&q=85" 
                alt="أنظمة الفولدينج" 
                class="w-full h-full object-cover brightness-95 group-hover:scale-105 transition-transform duration-500">
              <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

              <!-- Top Floating Spec Tag -->
              <div 
                class="absolute top-3 inset-x-2.5 bg-[#151413]/90 backdrop-blur-md border border-[#C9A982]/40 rounded-xl p-2 text-right transition-all duration-300 shadow-xl"
                [style.opacity]="specTagsOpacity()">
                <div class="text-[9.5px] sm:text-[10px] text-[#C9A982] font-bold flex items-center gap-1 justify-end">
                  <span>عتبة فلاش Zero-Step</span>
                  <span class="w-1.5 h-1.5 rounded-full bg-[#C9A982]"></span>
                </div>
                <div class="text-[8px] sm:text-[8.5px] text-white/80">انعدام تام للحدود مع الحديقة</div>
              </div>

              <!-- Bottom Tag -->
              <div class="absolute bottom-3 inset-x-3 flex items-center justify-between">
                <div>
                  <span class="text-[8px] sm:text-[9px] text-[#C9A982] font-bold uppercase tracking-wider block">منظومة 02</span>
                  <h4 class="text-xs sm:text-sm font-bold text-white">أنظمة الفولدينج</h4>
                </div>
                <div class="card-arrow-btn !w-7 !h-7 sm:!w-8 sm:!h-8 text-[10px]">↗</div>
              </div>
            </div>

            <!-- CARD 2: Center Dominant Card (Obsidian Italian Luxury Kitchen) -->
            <div 
              class="relative w-48 sm:w-60 lg:w-72 h-[300px] sm:h-[350px] lg:h-[370px] rounded-2xl overflow-hidden transition-all duration-300 ease-out z-20 border border-[#C9A982]/60 group cursor-pointer"
              [style.transform]="centerCardTransform()"
              [style.boxShadow]="centerCardShadow()"
              (click)="scrollToTarget('kitchens')">
              
              <!-- Ultra-Luxury Obsidian Kitchen Interior -->
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&h=1400&q=85" 
                alt="مطابخ ألومنيوم أوبسيديان" 
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
              <div class="absolute inset-0 bg-gradient-to-t from-[#151413] via-black/20 to-transparent"></div>

              <!-- Dynamic Specular Metallic Light Sweep driven by scroll -->
              <div 
                class="absolute inset-0 pointer-events-none opacity-40 bg-gradient-to-tr from-transparent via-[#C9A982]/30 to-transparent transition-transform duration-75"
                [style.transform]="'translateX(' + (-100 + smoothProgress() * 200) + '%)'">
              </div>

              <!-- Top Floating Spec Tag -->
              <div 
                class="absolute top-3 inset-x-3 bg-[#151413]/95 backdrop-blur-md border border-[#C9A982]/50 rounded-xl p-2.5 text-right transition-all duration-300 shadow-2xl"
                [style.opacity]="specTagsOpacity()">
                <div class="text-[10px] sm:text-[11px] text-[#C9A982] font-bold flex items-center gap-1.5 justify-end">
                  <span>كلادينج نانو إيطالي</span>
                  <span class="w-1.5 h-1.5 rounded-full bg-[#C9A982] animate-ping"></span>
                </div>
                <div class="text-[8.5px] sm:text-[9px] text-white/90">مقاوم للبصمات • شاسيه ألومنيوم 100%</div>
              </div>

              <!-- Bottom Tag -->
              <div class="absolute bottom-3 inset-x-3.5 flex items-center justify-between">
                <div>
                  <span class="champagne-badge px-2 py-0.5 rounded text-[8px] sm:text-[9px] font-bold inline-block mb-0.5">
                    المجموعة المعاصرة
                  </span>
                  <h4 class="text-xs sm:text-sm font-bold text-white">مطابخ الأوبسيديان</h4>
                </div>
                <div class="card-arrow-btn !w-8 !h-8 sm:!w-9 sm:!h-9 text-xs">↗</div>
              </div>
            </div>

            <!-- CARD 3: Right Card (Curtain Wall Architectural Facade) -->
            <div 
              class="absolute w-44 sm:w-56 lg:w-64 h-[280px] sm:h-[330px] lg:h-[350px] rounded-2xl overflow-hidden transition-all duration-300 ease-out z-10 border border-white/15 group cursor-pointer"
              [style.transform]="rightCardTransform()"
              [style.boxShadow]="rightCardShadow()"
              (click)="scrollToTarget('facades')">
              
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&h=1200&q=85" 
                alt="الواجهات المعمارية الزجاجية" 
                class="w-full h-full object-cover brightness-95 group-hover:scale-105 transition-transform duration-500">
              <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

              <!-- Top Floating Spec Tag -->
              <div 
                class="absolute top-3 inset-x-2.5 bg-[#151413]/90 backdrop-blur-md border border-[#C9A982]/40 rounded-xl p-2 text-right transition-all duration-300 shadow-xl"
                [style.opacity]="specTagsOpacity()">
                <div class="text-[9.5px] sm:text-[10px] text-[#C9A982] font-bold flex items-center gap-1 justify-end">
                  <span>ستراكشر Low-E</span>
                  <span class="w-1.5 h-1.5 rounded-full bg-[#C9A982]"></span>
                </div>
                <div class="text-[8px] sm:text-[8.5px] text-white/80">مقاومة رياح حتى 160 كم/س</div>
              </div>

              <!-- Bottom Tag -->
              <div class="absolute bottom-3 inset-x-3 flex items-center justify-between">
                <div>
                  <span class="text-[8px] sm:text-[9px] text-[#C9A982] font-bold uppercase tracking-wider block">منظومة 03</span>
                  <h4 class="text-xs sm:text-sm font-bold text-white">الواجهات الهيكلية</h4>
                </div>
                <div class="card-arrow-btn !w-7 !h-7 sm:!w-8 sm:!h-8 text-[10px]">↗</div>
              </div>
            </div>

          </div>

          <!-- Bottom Action Buttons in Phase 3 (Guaranteed on-screen visibility) -->
          <div 
            class="mt-2.5 sm:mt-4 flex flex-col sm:flex-row items-center justify-center gap-2.5 w-full max-w-sm sm:max-w-none mx-auto transition-all duration-300 min-h-[42px]"
            [style.opacity]="actionsOpacity()"
            [style.pointer-events]="actionsOpacity() > 0.5 ? 'auto' : 'none'"
            [style.transform]="'translateY(' + (1 - actionsOpacity()) * 12 + 'px)'">
            <a href="#gallery" class="w-full sm:w-auto champagne-btn text-xs sm:text-sm px-6 py-2.5 rounded-xl flex items-center justify-center gap-2 shadow-lg">
              <span>تصفح كافة المشاريع وسجل الأعمال</span>
              <span>↓</span>
            </a>
            <a href="#calculator" class="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-[#C9A982]/40 bg-[#1C1A18]/90 hover:bg-[#24211E] text-[#F8F5F1] font-semibold text-xs sm:text-sm transition flex items-center justify-center gap-2">
              <span>حاسبة التكلفة الفورية</span>
              <span class="text-[#C9A982]">↗</span>
            </a>
          </div>

        </div>

        <!-- 3. Bottom Controller: Continuous 3-Stage Progress Gauge & Scroll Prompt -->
        <div class="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 w-full pt-1.5 flex flex-col items-center gap-1.5 border-t border-white/10">
          
          <!-- Continuous 3-Stage Progress Gauge -->
          <div class="w-full max-w-md bg-white/10 h-1.5 rounded-full overflow-hidden relative">
            <div 
              class="h-full bg-gradient-to-r from-[#765A46] via-[#C9A982] to-[#F8F5F1] transition-all duration-75 ease-out shadow-[0_0_12px_rgba(201,169,130,0.9)]"
              [style.width.%]="smoothProgress() * 100">
            </div>
          </div>

          <div class="flex items-center justify-between w-full max-w-md text-[10px] font-mono">
            <span [class.text-[#C9A982]]="smoothProgress() < 0.35" class="transition-colors text-white/40">01 • التكوين الأولي</span>
            <span [class.text-[#C9A982]]="smoothProgress() >= 0.35 && smoothProgress() < 0.75" class="transition-colors text-white/40">02 • كشف المواصفات</span>
            <span [class.text-[#C9A982]]="smoothProgress() >= 0.75" class="transition-colors text-white/40">03 • بوابة المجموعات</span>
          </div>

          <!-- Scroll Down Guidance -->
          <button 
            (click)="scrollToCollections()" 
            class="text-[9.5px] text-[#C9A982]/85 hover:text-white transition flex items-center gap-1.5 font-mono tracking-wider focus:outline-none">
            <span>واصل التمرير لاستكشاف المجموعات الهندسية</span>
            <span class="animate-bounce text-xs">↓</span>
          </button>
        </div>

      </div>
    </section>
  `
})
export class HeroComponent {
  scrollProgress = signal<number>(0);
  windowWidth = signal<number>(typeof window !== 'undefined' ? window.innerWidth : 1200);

  @HostListener('window:resize')
  onResize() {
    this.windowWidth.set(window.innerWidth);
  }

  // Smooth smoothed progress signal for organic transitions
  smoothProgress = computed(() => {
    return Math.min(Math.max(this.scrollProgress(), 0), 1);
  });

  @HostListener('window:scroll')
  onScroll() {
    const track = document.getElementById('hero-track');
    if (!track) return;
    const rect = track.getBoundingClientRect();
    const scrollableDistance = rect.height - window.innerHeight;
    if (scrollableDistance <= 0) return;
    // Calculate exact scroll progress
    const progress = Math.min(Math.max(-rect.top / scrollableDistance, 0), 1);
    this.scrollProgress.set(progress);
  }

  // 3-Stage Dynamic Content Mapping with Smooth Plateaus
  currentPhaseData = computed(() => {
    const p = this.smoothProgress();
    if (p < 0.32) {
      return {
        step: 'المرحلة 01 / 03',
        title: 'STAGE 01 • INITIAL MONOLITHIC COMPOSITION',
        eyebrow: 'FOLDING ARCHITECTURAL ATELIER • EST. 2011',
        mainText: 'صياغة معمارية استثنائية بالألومنيوم',
        subText: 'Sculpted Aluminum Architecture & Engineering'
      };
    } else if (p < 0.75) {
      return {
        step: 'المرحلة 02 / 03',
        title: 'STAGE 02 • 3D SPATIAL SPLIT & ENGINEERING SPECS',
        eyebrow: 'THREE CORE MANUFACTURING SECTORS',
        mainText: 'ثلاث منظومات هندسية متكاملة لفيلاك',
        subText: 'Bi-Fold Systems • Obsidian Kitchens • Curtain Walls'
      };
    } else {
      return {
        step: 'المرحلة 03 / 03',
        title: 'STAGE 03 • GATEWAY TO CURATED ARCHITECTURAL WORKS',
        eyebrow: 'EXPLORE BESPOKE INSTALLATIONS',
        mainText: 'جاهزون لتحويل رؤيتك المعمارية إلى واقع',
        subText: 'Tailored to Materials, Atmosphere & Precision'
      };
    }
  });

  cadOpacity = computed(() => {
    const p = this.smoothProgress();
    return Math.min(0.35, 0.12 + p * 0.25);
  });

  specTagsOpacity = computed(() => {
    const p = this.smoothProgress();
    if (p < 0.25) return 0;
    if (p >= 0.25 && p < 0.42) return (p - 0.25) / 0.17;
    return 1;
  });

  actionsOpacity = computed(() => {
    const p = this.smoothProgress();
    if (p < 0.72) return 0;
    return Math.min(1, (p - 0.72) / 0.18);
  });

  // Left Card: 3D Leftward Fan-out with true perspective depth
  leftCardTransform = computed(() => {
    const p = this.smoothProgress();
    const isMobile = this.windowWidth() < 640;
    const maxOffset = isMobile ? 160 : 350;
    const xOffset = -p * maxOffset;
    const yOffset = p * 10;
    const zOffset = -p * 40;
    const rotY = p * 22;
    const rotZ = -3 - p * 4;
    const scale = 0.94 + p * 0.06;
    return `translateX(${xOffset}px) translateY(${yOffset}px) translateZ(${zOffset}px) rotateY(${rotY}deg) rotateZ(${rotZ}deg) scale(${scale})`;
  });

  leftCardShadow = computed(() => {
    const p = this.smoothProgress();
    return `0 ${15 + p * 25}px ${25 + p * 35}px rgba(0, 0, 0, ${0.5 + p * 0.35})`;
  });

  // Right Card: 3D Rightward Fan-out with true perspective depth
  rightCardTransform = computed(() => {
    const p = this.smoothProgress();
    const isMobile = this.windowWidth() < 640;
    const maxOffset = isMobile ? 160 : 350;
    const xOffset = p * maxOffset;
    const yOffset = p * 10;
    const zOffset = -p * 40;
    const rotY = -p * 22;
    const rotZ = 3 + p * 4;
    const scale = 0.94 + p * 0.06;
    return `translateX(${xOffset}px) translateY(${yOffset}px) translateZ(${zOffset}px) rotateY(${rotY}deg) rotateZ(${rotZ}deg) scale(${scale})`;
  });

  rightCardShadow = computed(() => {
    const p = this.smoothProgress();
    return `0 ${15 + p * 25}px ${25 + p * 35}px rgba(0, 0, 0, ${0.5 + p * 0.35})`;
  });

  // Center Dominant Card: Elevates forward in Z-space with warm halo
  centerCardTransform = computed(() => {
    const p = this.smoothProgress();
    const scale = 1 + p * 0.08;
    const zOffset = p * 60; // pushes forward in 3D space toward viewer
    return `scale(${scale}) translateZ(${zOffset}px)`;
  });

  centerCardShadow = computed(() => {
    const p = this.smoothProgress();
    const glow = 20 + p * 35;
    return `0 25px 60px rgba(0, 0, 0, 0.85), 0 0 ${glow}px rgba(201, 169, 130, ${0.3 + p * 0.35})`;
  });

  scrollToTarget(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToCollections() {
    const track = document.getElementById('hero-track');
    const target = document.getElementById('collections');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    } else if (track) {
      window.scrollTo({ top: track.offsetTop + track.offsetHeight, behavior: 'smooth' });
    }
  }
}
