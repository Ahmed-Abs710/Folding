import { Injectable, signal, computed } from '@angular/core';
import { ProjectItem, CuratedCollection, ProductCategory, QuoteParameters, QuoteResult } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // Selected filter signal for the gallery
  readonly activeCategory = signal<ProductCategory | 'all'>('all');

  // Curated Architectural Collections (Inspired by Kitchique's Style Collections)
  readonly collections = signal<CuratedCollection[]>([
    {
      id: 'col-kitchens',
      number: '01',
      title: 'مجموعة الأوبسيديان المعمارية',
      titleAccent: 'Contemporary Obsidian',
      subtitle: 'مطابخ ألومنيوم كلادينج إيطالي فائق الدقة',
      description: 'تصاميم مطابخ حصرية تجمع بين متانة شاسيه الألومنيوم المقاوم للرطوبة ودرف الكلادينج الأسود المات المقاوم للبصمات مع بروفايلات المقابض الإيطالية المخفية.',
      category: 'kitchen',
      bannerImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=900&h=1600&q=85',
      tags: ['كلادينج أسود مات', 'إضاءة 3000K دافئة', 'بروفايل Gola مخفي', 'زجاج مضلع Fluted']
    },
    {
      id: 'col-windows',
      number: '02',
      title: 'أنظمة الفولدينج والبانوراما',
      titleAccent: 'Seamless Bi-Fold Systems',
      subtitle: 'انعدام تام للحدود بين الصالون والطبيعة الخارجية',
      description: 'أنظمة شبابيك وأبواب ألومنيوم قابلة للطي والسحب الكامل مع عتبة غاطسة مستوية مع الأرضية (Zero-Step Threshold) وزجاج مزدوج عازل للصوت والحرارة.',
      category: 'window',
      bannerImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&h=1600&q=85',
      tags: ['عتبة غاطسة فلاش', 'طي جانبي 100%', 'ثيرمال بريك ألماني', 'عزل صوتي تام']
    },
    {
      id: 'col-facades',
      number: '03',
      title: 'الواجهات الهيكلية والكلادينج',
      titleAccent: 'Architectural Glazing & Cladding',
      subtitle: 'هندسة الستائر الزجاجية وتجاليد المباني الكبرى',
      description: 'واجهات كيرتن وول Curtain Wall إنشائية وتكسيات كلادينج ألومنيوم A2 معتمدة مقاومة للحرائق مع دراسة أحمال الرياح وكاسرات الشمس الألومنيوم المعمارية.',
      category: 'facade',
      bannerImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&h=1600&q=85',
      tags: ['ستراكشر جليزنج', 'كلادينج A2 ضد الحريق', 'كاسرات شمس Louvers', 'قطاعات تكنال وشوتكو']
    }
  ]);

  // Gallery Projects with 9:16 Portrait Ratio & Architectural Metadata
  readonly projects = signal<ProjectItem[]>([
    {
      id: 'k1',
      projectNumber: '01',
      collectionId: 'col-kitchens',
      collectionName: 'Obsidian Collection',
      collectionArabic: 'المجموعة المعاصرة',
      title: 'مطبخ الجزيرة بالكلادينج الأسود المات',
      titleAccent: 'Matte Obsidian & Quartz',
      category: 'kitchen',
      categoryLabel: 'مطابخ ألومنيوم',
      location: 'فيلا خاصة - الشيخ زايد',
      description: 'مطبخ كامل مصنع بهيكل ألومنيوم إيطالي غير قابل للتآكل أو امتصاص الرطوبة، مع درف كلادينج نانو أسود مطفي مانع لآثار البصمات وأسطح كوارتز بإنارة ليد مخفية 3000K.',
      specs: ['قطاع بروفايل مقبض مخفي Gola', 'كلادينج نانو مضاد للبصمات', 'مفصلات بلوم هيدروليكية', 'أسطح كوارتز سوداء مقاومة للحرارة'],
      materialTags: ['كلادينج مات', 'كوارتز نانو', 'هيدروليك بلوم'],
      imageUrl: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=900&h=1600&q=85',
      badge: 'مشروع العام للمطابخ'
    },
    {
      id: 'w1',
      projectNumber: '02',
      collectionId: 'col-windows',
      collectionName: 'Bi-Fold Systems',
      collectionArabic: 'أنظمة الفولدينج',
      title: 'نظام فولدينج بانورامي 6 درف مع عتبة مستوية',
      titleAccent: 'Flush Zero-Step Bi-Fold',
      category: 'window',
      categoryLabel: 'شبابيك وأبواب',
      location: 'فيلا فاخرة - بالم هيلز',
      description: 'أبواب ألومنيوم قابلة للطي بزاوية انزلاق ميكانيكية فائقة السلاسة تفتح الواجهة بالكامل على الحديقة والمسبح بدون أي عتبة بارزة تعيق الحركة.',
      specs: ['عتبة غاطسة Flush مساوية للأرضية', 'زجاج دبل جلاس 28 مم عازل للصوت', 'عجلات ستانلس ستيل 316 إيطالية', 'كاوتش EPDM ألماني مزدوج'],
      materialTags: ['فولدينج 6 درف', 'عتبة فلاش', 'زجاج 28 مم'],
      imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&h=1600&q=85',
      badge: 'العزل الكامل والانفتاح'
    },
    {
      id: 'f1',
      projectNumber: '03',
      collectionId: 'col-facades',
      collectionName: 'Curtain Wall Facades',
      collectionArabic: 'الواجهات المعمارية',
      title: 'واجهة كيرتن وول وزجاج ستراكشر لمقر إداري',
      titleAccent: 'Structural Glazing Tower',
      category: 'facade',
      categoryLabel: 'واجهات وكلادينج',
      location: 'العاصمة الإدارية الجديدة',
      description: 'تنفيذ واجهات زجاجية هيكلية بدون إطارات ألومنيوم ظاهرة مع زجاج معالج عاكس لأشعة الشمس والحرارة ومقاوم لأعلى أحمال الرياح.',
      specs: ['قطاعات شوتكو الألمانية Schüco', 'زجاج سيكوريت دبل عاكس', 'سيليكون إنشائي معتمد Dow Corning', 'مقاومة أحمال الرياح حتى 160 كم/س'],
      materialTags: ['كيرتن وول', 'شوتكو ألماني', 'عزل Low-E'],
      imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&h=1600&q=85',
      badge: 'مشروع إداري متكامل'
    },
    {
      id: 'k2',
      projectNumber: '04',
      collectionId: 'col-kitchens',
      collectionName: 'Timeless Collection',
      collectionArabic: 'المجموعة الكلاسيكية الهادئة',
      title: 'مطبخ الترافنتين والشامبين بالألومنيوم المطفي',
      titleAccent: 'Champagne Travertine Elegance',
      category: 'kitchen',
      categoryLabel: 'مطابخ ألومنيوم',
      location: 'شقة بنتهاوس - التجمع الخامس',
      description: 'تناغم دافئ بين قطاعات الألومنيوم المعالجة أنودايز بلون الشامبين الخافت مع درف أوف وايت رخامية ووحدات زجاج سموكي عاكس معتم.',
      specs: ['ألومنيوم شامبين مؤكسد Anodized', 'أسطح بورسلين عريض أسباني', 'أرفف داخلية ألومنيوم لا تصدأ', 'إضاءات بروفايل مخفية دافئة'],
      materialTags: ['شامبين أنودايز', 'بورسلين أسباني', 'زجاج سموكي'],
      imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&h=1600&q=85',
      badge: 'الأكثر فخامة وهدوءاً'
    },
    {
      id: 'w2',
      projectNumber: '05',
      collectionId: 'col-windows',
      collectionName: 'Panoramic Systems',
      collectionArabic: 'الأنظمة البانورامية',
      title: 'واجهات شبابيك جامبو سحاب ثيرمال بريك',
      titleAccent: 'Jumbo Minimal Sightline',
      category: 'window',
      categoryLabel: 'شبابيك وأبواب',
      location: 'فيلا معمارية - الساحل الشمالي',
      description: 'شبابيك سحاب بنظام المقاطع النحيفة (Slim Sightline) تضمن أكبر مساحة رؤية زجاجية مع عزل تام لرطوبة البحر والأملاح والرياح.',
      specs: ['قطاع ثيرمال بريك عازل للحرارة 100%', 'زجاج تريبل ثلاثي الطبقات', 'دهانات خاصة مقاومة للملوحة البحرية', 'قفل إلكتروني ذكي مدمج'],
      materialTags: ['ثيرمال بريك', 'زجاج ثلاثي', 'مقاوم للملوحة'],
      imageUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&h=1600&q=85',
      badge: 'إطلالة بحرية نقية'
    },
    {
      id: 'f2',
      projectNumber: '06',
      collectionId: 'col-facades',
      collectionName: 'Architectural Cladding',
      collectionArabic: 'الواجهات والكلادينج',
      title: 'تكسية فيلا معمارية بألواح الكلادينج واللوفرز',
      titleAccent: 'Modern Parametric Villa',
      category: 'facade',
      categoryLabel: 'واجهات وكلادينج',
      location: 'مدينة 6 أكتوبر',
      description: 'دمج ألواح الكلادينج ألومنيوم A2 المقاومة للاشتعال مع شرائح وكاسرات شمس ألومنيوم طولية (Louvers) تمنح خصوصية وجمالاً هندسياً ثلاثي الأبعاد.',
      specs: ['كلادينج A2 معتمد ضد الحريق', 'كاسرات شمس ألومنيوم متحركة', 'شاسيهات حديد مجلفن معزولة حرارياً', 'إضاءات ليد خطية مدمجة بالواجهة'],
      materialTags: ['كلادينج A2', 'لوفرز ألومنيوم', 'تصميم 3D'],
      imageUrl: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=900&h=1600&q=85',
      badge: 'حداثة معمارية مطلقة'
    }
  ]);

  // Filtered projects computed signal
  readonly filteredProjects = computed(() => {
    const currentCategory = this.activeCategory();
    if (currentCategory === 'all') {
      return this.projects();
    }
    return this.projects().filter(p => p.category === currentCategory);
  });

  setCategory(category: ProductCategory | 'all') {
    this.activeCategory.set(category);
  }

  // Cost Estimator with luxury architectural specifications
  calculateQuote(params: QuoteParameters): QuoteResult {
    let basePricePerUnit = 4800;
    let unitLabel = 'متر مربع';
    let typeLabel = '';

    switch (params.type) {
      case 'kitchen':
        unitLabel = 'متر طولي';
        typeLabel = 'مطابخ ألومنيوم كلادينج وبروفايل إيطالي';
        basePricePerUnit = params.tier === 'luxury' ? 8200 : (params.tier === 'premium' ? 6200 : 4700);
        break;
      case 'window':
        unitLabel = 'متر مربع';
        typeLabel = 'شبابيك ألومنيوم دبل جلاس عازلة';
        basePricePerUnit = params.tier === 'luxury' ? 4900 : (params.tier === 'premium' ? 3800 : 2900);
        break;
      case 'folding':
        unitLabel = 'متر مربع';
        typeLabel = 'أنظمة أبواب فولدينج وسلايدنج بانورامية';
        basePricePerUnit = params.tier === 'luxury' ? 7400 : (params.tier === 'premium' ? 5700 : 4400);
        break;
      case 'facade':
        unitLabel = 'متر مربع';
        typeLabel = 'واجهات كيرتن وول وتجاليد كلادينج A2';
        basePricePerUnit = params.tier === 'luxury' ? 6600 : (params.tier === 'premium' ? 4900 : 3800);
        break;
    }

    const tierLabels = {
      standard: 'المعيار المعماري (قطاعات معتمدة + ضمان 10 سنوات)',
      premium: 'البريميوم الإيطالي (قطاع ثقيل + إكسسوارات بلوم + زجاج دبل معالج)',
      luxury: 'الألترا لاكشري (ثيرمال بريك ألماني + عتبة فلاش + زجاج سمارت / عاكس)'
    };

    const min = Math.round(params.area * basePricePerUnit * 0.95);
    const max = Math.round(params.area * basePricePerUnit * 1.15);

    return {
      minPrice: min,
      maxPrice: max,
      unitLabel,
      tierLabel: tierLabels[params.tier],
      typeLabel,
      summary: `التقدير المبدئي لـ ${params.area} ${unitLabel} بنظام ${typeLabel} بمواصفات ${tierLabels[params.tier]} يتراوح بين ${min.toLocaleString('en-US')} إلى ${max.toLocaleString('en-US')} ج.م.`
    };
  }
}
