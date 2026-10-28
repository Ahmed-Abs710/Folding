import { Component, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Top Scroll-Driven Progress Bar -->
    <div class="fixed top-0 left-0 right-0 h-[2.5px] bg-white/5 z-[60] pointer-events-none">
      <div 
        class="h-full bg-gradient-to-r from-[#765A46] via-[#C9A982] to-[#F8F5F1] transition-all duration-75 ease-out shadow-[0_0_8px_rgba(201,169,130,0.8)]"
        [style.width.%]="scrollPercentage()">
      </div>
    </div>

    <!-- Top Micro Bar -->
    <header class="border-b border-[#C9A982]/15 bg-[#100F0E] text-xs text-[#C9A982]/80 py-2 px-3 sm:px-8">
      <div class="max-w-7xl mx-auto flex justify-between items-center gap-2">
        <div class="flex items-center gap-4 sm:gap-6">
          <a href="tel:+201000000000" class="flex items-center gap-1.5 sm:gap-2 hover:text-[#F8F5F1] transition">
            <span class="w-1.5 h-1.5 rounded-full bg-[#C9A982] animate-pulse"></span>
            <span dir="ltr" class="font-medium text-[11px] sm:text-xs">+20 100 000 0000</span>
            <span class="text-white/20 hidden sm:inline">|</span>
            <span class="text-white/60 hidden sm:inline">استشارات المعمار الفنية</span>
          </a>
          <span class="hidden md:flex items-center gap-2 text-white/50 text-[11px]">
            المصنع والمعرض الرئيسي - تنفيذ المشاريع والفلل
          </span>
        </div>
        <div class="flex items-center gap-2 sm:gap-4">
          <span class="champagne-badge px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-medium tracking-wide">
            ضمان كتابي 10 سنوات
          </span>
          <span class="hidden sm:inline text-white/40 text-[11px]">9:00 ص - 10:00 م</span>
        </div>
      </div>
    </header>

    <!-- Main Architectural Nav -->
    <nav class="sticky top-0 z-50 nav-atelier transition-all duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
        
        <!-- Logo -->
        <a href="#hero" class="flex items-center gap-3.5 group">
          <div class="w-11 h-11 rounded-xl bg-gradient-to-br from-[#C9A982] via-[#A88865] to-[#151413] p-0.5 shadow-lg group-hover:scale-105 transition-transform duration-300">
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
            <span class="text-base sm:text-xl font-bold tracking-tight text-[#F8F5F1] block leading-none">
              فولدينج <span class="text-[#C9A982] font-normal">للألومنيوم</span>
            </span>
            <span class="text-[8px] sm:text-[9.5px] text-white/40 tracking-[0.2em] sm:tracking-[0.25em] font-medium uppercase block mt-0.5 sm:mt-1">
              Architectural Systems
            </span>
          </div>
        </a>

        <!-- Desktop Links -->
        <div class="hidden lg:flex items-center gap-8 text-[13px] font-medium text-white/80">
          <a href="#hero" class="text-[#C9A982] font-semibold hover:text-[#F8F5F1] transition">الرئيسية</a>
          <a href="#collections" class="hover:text-[#C9A982] transition">المجموعات المعمارية</a>
          <a href="#kitchens" class="hover:text-[#C9A982] transition">مطابخ أوبسيديان</a>
          <a href="#windows" class="hover:text-[#C9A982] transition">أنظمة الفولدينج</a>
          <a href="#facades" class="hover:text-[#C9A982] transition">الواجهات والكلادينج</a>
          <a href="#gallery" class="hover:text-[#C9A982] transition">سجل الأعمال</a>
          <a href="#calculator" class="hover:text-[#C9A982] transition">حاسبة التكلفة</a>
        </div>

        <!-- Action Button & Mobile Toggle -->
        <div class="flex items-center gap-3">
          <a href="#contact" class="hidden sm:flex champagne-btn text-xs sm:text-sm px-5 py-2.5 rounded-xl items-center gap-2">
            <span>حجز استشارة وتصميم 3D</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"/>
            </svg>
          </a>

          <!-- Mobile Hamburger Toggle -->
          <button (click)="toggleMobileMenu()" class="lg:hidden p-2 rounded-xl text-white/70 hover:text-white bg-white/5 border border-white/10">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              @if (isMobileMenuOpen()) {
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              } @else {
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/>
              }
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Dropdown -->
      @if (isMobileMenuOpen()) {
        <div class="lg:hidden bg-[#151413]/98 border-b border-[#C9A982]/20 px-4 py-5 space-y-4 backdrop-blur-2xl max-h-[82vh] overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-300">
          <div class="flex flex-col gap-1 text-sm font-medium">
            <a (click)="closeMobileMenu()" href="#hero" class="text-[#C9A982] py-2.5 px-3 rounded-lg hover:bg-white/5 transition flex items-center justify-between">
              <span>الرئيسية</span>
              <span class="text-xs opacity-50">←</span>
            </a>
            <a (click)="closeMobileMenu()" href="#collections" class="text-white/85 hover:text-[#C9A982] py-2.5 px-3 rounded-lg hover:bg-white/5 transition flex items-center justify-between">
              <span>المجموعات المعمارية</span>
              <span class="text-xs opacity-50">←</span>
            </a>
            <a (click)="closeMobileMenu()" href="#kitchens" class="text-white/85 hover:text-[#C9A982] py-2.5 px-3 rounded-lg hover:bg-white/5 transition flex items-center justify-between">
              <span>مطابخ الأوبسيديان والكلادينج</span>
              <span class="text-xs opacity-50">←</span>
            </a>
            <a (click)="closeMobileMenu()" href="#windows" class="text-white/85 hover:text-[#C9A982] py-2.5 px-3 rounded-lg hover:bg-white/5 transition flex items-center justify-between">
              <span>أنظمة الفولدينج والبانوراما</span>
              <span class="text-xs opacity-50">←</span>
            </a>
            <a (click)="closeMobileMenu()" href="#facades" class="text-white/85 hover:text-[#C9A982] py-2.5 px-3 rounded-lg hover:bg-white/5 transition flex items-center justify-between">
              <span>الواجهات والكلادينج A2</span>
              <span class="text-xs opacity-50">←</span>
            </a>
            <a (click)="closeMobileMenu()" href="#gallery" class="text-white/85 hover:text-[#C9A982] py-2.5 px-3 rounded-lg hover:bg-white/5 transition flex items-center justify-between">
              <span>المعرض وسجل الأعمال</span>
              <span class="text-xs opacity-50">←</span>
            </a>
            <a (click)="closeMobileMenu()" href="#calculator" class="text-white/85 hover:text-[#C9A982] py-2.5 px-3 rounded-lg hover:bg-white/5 transition flex items-center justify-between">
              <span>حاسبة التكلفة الفورية</span>
              <span class="text-xs opacity-50">←</span>
            </a>
            <a (click)="closeMobileMenu()" href="#specs" class="text-white/85 hover:text-[#C9A982] py-2.5 px-3 rounded-lg hover:bg-white/5 transition flex items-center justify-between">
              <span>المواصفات الفنية وضمان 10 سنوات</span>
              <span class="text-xs opacity-50">←</span>
            </a>
          </div>
          <div class="pt-2 border-t border-white/10 flex flex-col gap-2">
            <a (click)="closeMobileMenu()" href="#contact" class="w-full champagne-btn text-xs py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg">
              <span>طلب استشارة وتصميم 3D</span>
              <span>↗</span>
            </a>
            <a href="https://wa.me/201000000000" target="_blank" class="w-full py-2.5 rounded-xl border border-[#C9A982]/30 bg-white/5 text-xs text-white flex items-center justify-center gap-2">
              <span>محادثة واتساب مباشرة</span>
              <span>💬</span>
            </a>
          </div>
        </div>
      }
    </nav>
  `
})
export class NavbarComponent {
  isMobileMenuOpen = signal<boolean>(false);
  scrollPercentage = signal<number>(0);

  @HostListener('window:scroll')
  onScroll() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    this.scrollPercentage.set(percent);
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen.update(v => !v);
  }

  closeMobileMenu() {
    this.isMobileMenuOpen.set(false);
  }
}
