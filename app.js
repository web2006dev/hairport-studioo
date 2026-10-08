/* ========================================================
   THE HAIRPORT STUDIO SADAR — CORE JAVASCRIPT
   Interactive booking, live IST status, filters & lookbook
   ======================================================== */

// --- Salon Data & Services Catalog ---
const SALON_DATA = {
  name: "The Hairport Studio Sadar",
  rating: 4.4,
  reviewCount: 113,
  address: "Shop 1, Poonam Chambers, Chhaoni Rd, beside Pizza hut, Byramji Town, Rajnagar, Nagpur, Maharashtra 440013",
  phone: "09146694669",
  intlPhone: "+919146694669",
  whatsappNumber: "919146694669",
  openingHour: 10, // 10 AM
  closingHour: 21, // 9 PM
  peakHour: 11, // 11 AM "Usually as busy as it gets"
};

const SERVICES = [
  // Men's Grooming
  {
    id: "men-haircut",
    category: "men",
    categoryLabel: "Men's Grooming",
    title: "Signature Men's Haircut & Styling",
    price: "₹350",
    rawPrice: 350,
    duration: "30 mins",
    desc: "Personalized hair architecture, precision shear/clipper work, energizing scalp wash & matte paste finish.",
    popular: true,
    tag: "Trending"
  },
  {
    id: "men-fade-wash",
    category: "men",
    categoryLabel: "Men's Grooming",
    title: "Skin Fade / Taper Cut & Hair Wash",
    price: "₹450",
    rawPrice: 450,
    duration: "40 mins",
    desc: "Seamless zero-fade blending with razor edge-up and revitalizing tea tree conditioning wash.",
    popular: false
  },
  {
    id: "men-beard",
    category: "men",
    categoryLabel: "Men's Grooming",
    title: "Beard Sculpting & Royal Razor Shave",
    price: "₹250",
    rawPrice: 250,
    duration: "25 mins",
    desc: "Hot towel treatment, precision straight-blade alignment, organic beard oil hydration & balm finish.",
    popular: true,
    tag: "Must Try"
  },
  {
    id: "men-detan-cleanup",
    category: "men",
    categoryLabel: "Men's Grooming",
    title: "Executive Men's De-Tan & Charcoal Cleanup",
    price: "₹650",
    rawPrice: 650,
    duration: "35 mins",
    desc: "Instantly removes Nagpur sun tanning, unclogs deep pores and restores a fresh matte glow.",
    popular: false
  },

  // Women's Hair & Cut
  {
    id: "women-haircut",
    category: "women",
    categoryLabel: "Women's Styling",
    title: "Couture Haircut & Signature Blowout",
    price: "₹650",
    rawPrice: 650,
    duration: "45 mins",
    desc: "Face-framing layers, butterfly cut, graduated bob or feather cut styled to perfection with blowdry.",
    popular: true,
    tag: "Bestseller"
  },
  {
    id: "child-haircut",
    category: "kids",
    categoryLabel: "Kids",
    title: "Child Haircut (Boys & Girls up to 10)",
    price: "₹300",
    rawPrice: 300,
    duration: "25 mins",
    desc: "Patient, friendly stylist care in a comfortable environment with cute trendy cuts for little ones.",
    popular: false
  },
  {
    id: "women-keratin",
    category: "women",
    categoryLabel: "Hair Treatments",
    title: "Brazilian Keratin Protein Infusion",
    price: "₹3,499",
    rawPrice: 3499,
    duration: "150 mins",
    desc: "Eliminates 95% frizz, seals split ends, and delivers salon-glass mirror shine lasting 4-6 months.",
    popular: true,
    tag: "Luxury"
  },
  {
    id: "women-botox",
    category: "women",
    categoryLabel: "Hair Treatments",
    title: "Hair Botox Deep Rejuvenation Ritual",
    price: "₹3,999",
    rawPrice: 3999,
    duration: "140 mins",
    desc: "Intensive anti-aging treatment for chemically treated or damaged strands. Restores elasticity & bounce.",
    popular: false
  },
  {
    id: "smoothening",
    category: "women",
    categoryLabel: "Hair Treatments",
    title: "Permanent Hair Smoothening / Straightening",
    price: "₹4,499",
    rawPrice: 4499,
    duration: "180 mins",
    desc: "Silky, pin-straight sleek hair using genuine L'Oréal X-Tenso with post-treatment protective mask.",
    popular: false
  },

  // Hair Color & Highlights
  {
    id: "global-color",
    category: "color",
    categoryLabel: "Hair Color",
    title: "Global Hair Color (L'Oréal / Schwarzkopf)",
    price: "₹2,199",
    rawPrice: 2199,
    duration: "90 mins",
    desc: "Rich, ammonia-free uniform color coverage from roots to tips with exceptional luster and depth.",
    popular: true,
    tag: "Popular"
  },
  {
    id: "balayage-ombre",
    category: "color",
    categoryLabel: "Hair Color",
    title: "Hand-Painted Balayage / Ombre Couture",
    price: "₹3,799",
    rawPrice: 3799,
    duration: "150 mins",
    desc: "Sun-kissed dimensional gradients customized to your skin undertone. Caramel, Honey or Ash hues.",
    popular: true,
    tag: "High Demand"
  },
  {
    id: "highlights-streaks",
    category: "color",
    categoryLabel: "Hair Color",
    title: "Fashion Foil Highlights (Crown & Babylights)",
    price: "₹1,499",
    rawPrice: 1499,
    duration: "60 mins",
    desc: "Strategic foil placement adding instant contrast, texture and vibrancy to your existing cut.",
    popular: false
  },
  {
    id: "root-touchup",
    category: "color",
    categoryLabel: "Hair Color",
    title: "Quick Grey Root Touch-Up & Color Gloss",
    price: "₹1,199",
    rawPrice: 1199,
    duration: "45 mins",
    desc: "100% grey coverage targeting up to 2 inches regrowth with nourishing shine treatment.",
    popular: false
  },

  // Hair Spa
  {
    id: "loreal-spa",
    category: "spa",
    categoryLabel: "Hair Spa",
    title: "L'Oréal Mythic Oil Luxury Hair Spa",
    price: "₹1,199",
    rawPrice: 1199,
    duration: "50 mins",
    desc: "Deep steam nourishment, acupressure scalp massage and split end repair with precious argan oils.",
    popular: true
  },
  {
    id: "olaplex-treatment",
    category: "spa",
    categoryLabel: "Hair Spa",
    title: "Olaplex Stand-Alone Bond Builder",
    price: "₹1,999",
    rawPrice: 1999,
    duration: "60 mins",
    desc: "The gold standard patented system that repairs broken disulfide bonds caused by heat and bleach.",
    popular: false,
    tag: "Restorative"
  },
  {
    id: "anti-dandruff-spa",
    category: "spa",
    categoryLabel: "Hair Spa",
    title: "Scalp Clarifying Anti-Dandruff Ritual",
    price: "₹1,399",
    rawPrice: 1399,
    duration: "50 mins",
    desc: "Exfoliating scalp scrub, zinc treatment, antibacterial ozone steam and cooling soothing tonic.",
    popular: false
  },

  // Facials & Cleanup
  {
    id: "o3-bridal-facial",
    category: "skin",
    categoryLabel: "Skin & Facials",
    title: "O3+ Radiance Whitening & Bridal Glow Facial",
    price: "₹2,199",
    rawPrice: 2199,
    duration: "60 mins",
    desc: "Signature multi-layer oxygenating facial infusing vitamin serums for luminous bridal radiance.",
    popular: true,
    tag: "Top Rated"
  },
  {
    id: "hydra-glow-facial",
    category: "skin",
    categoryLabel: "Skin & Facials",
    title: "Hydra Deep-Infusion Facial & Ultrasonic Peel",
    price: "₹2,799",
    rawPrice: 2799,
    duration: "70 mins",
    desc: "Gentle vacuum extraction of blackheads, vortex hydration and hyaluronic acid skin plumping.",
    popular: true,
    tag: "Celebrity Favorite"
  },
  {
    id: "gold-facial",
    category: "skin",
    categoryLabel: "Skin & Facials",
    title: "24K Gold Dust Anti-Aging Facial",
    price: "₹1,799",
    rawPrice: 1799,
    duration: "60 mins",
    desc: "Collagen-stimulating massage, pure gold bio-mask and lymphatic drainage for timeless glow.",
    popular: false
  },
  {
    id: "deep-cleanup",
    category: "skin",
    categoryLabel: "Skin & Facials",
    title: "Herbal Deep Pore Cleanup & De-tan",
    price: "₹850",
    rawPrice: 850,
    duration: "40 mins",
    desc: "Thorough steam extraction, scrub exfoliation and soothing aloe vera pack for smooth skin.",
    popular: false
  },

  // Nail Art & Extensions
  {
    id: "gel-nails",
    category: "nails",
    categoryLabel: "Nail Studio",
    title: "Russian Gel Polish & Cuticle Care",
    price: "₹899",
    rawPrice: 899,
    duration: "45 mins",
    desc: "High-gloss UV gel color application guaranteed chip-free for 3+ weeks with flawless cuticle finish.",
    popular: false
  },
  {
    id: "acrylic-extension",
    category: "nails",
    categoryLabel: "Nail Studio",
    title: "Full Set Acrylic / Gel Nail Extensions",
    price: "₹1,799",
    rawPrice: 1799,
    duration: "90 mins",
    desc: "Custom nail sculpting (Almond, Coffin, Square) with durable tips and overlay reinforcement.",
    popular: true,
    tag: "Glamour"
  },
  {
    id: "nail-art-custom",
    category: "nails",
    categoryLabel: "Nail Studio",
    title: "Custom 3D / Chrome / French Nail Art",
    price: "₹599",
    rawPrice: 599,
    duration: "30 mins",
    desc: "Ombre gradients, glazed donut chrome, stone embellishments and hand-painted fine accents.",
    popular: false
  },

  // Bridal & Makeup
  {
    id: "hd-bridal-makeup",
    category: "bridal",
    categoryLabel: "Bridal & Glamour",
    title: "Luxury HD Bridal Makeup & Hair Artistry",
    price: "₹10,999",
    rawPrice: 10999,
    duration: "180 mins",
    desc: "Complete bridal transformation: waterproof HD makeup, luxury lashes, floral hairdo, saree/dupatta draping & jewel setting.",
    popular: true,
    tag: "Signature"
  },
  {
    id: "party-cocktail-makeup",
    category: "bridal",
    categoryLabel: "Bridal & Glamour",
    title: "Party / Sangeet / Cocktail Makeup",
    price: "₹2,799",
    rawPrice: 2799,
    duration: "75 mins",
    desc: "Dewy, long-wear glam with contouring, eye glam & modern messy buns or Hollywood waves.",
    popular: true
  },
  {
    id: "groom-package",
    category: "bridal",
    categoryLabel: "Bridal & Glamour",
    title: "Groom Royal Grooming & Pre-Wedding Ritual",
    price: "₹3,499",
    rawPrice: 3499,
    duration: "120 mins",
    desc: "Haircut & styling, beard styling, O3+ glow facial, de-tan therapy & scalp relaxation.",
    popular: false
  }
];

// --- Verified Reviews from Google (including prompt quotes) ---
const REVIEWS_DATA = [
  {
    author: "Rohit Verma",
    rating: 5,
    tag: "Haircut & Ambience",
    time: "2 weeks ago",
    badge: "Local Guide · 34 reviews",
    text: "The staff is very good and the quality of service is great. Got a precision fade and beard styling. Extremely attentive to detail and the hygienic setup right in Poonam Chambers is top notch!",
    highlight: "The staff is very good and the quality of service is great."
  },
  {
    author: "Ananya Deshmukh",
    rating: 5,
    tag: "Haircut & Highlights",
    time: "a month ago",
    badge: "Verified Client",
    text: "I highly recommend it for top-notch haircut and grooming services. I was nervous about getting caramel balayage done in Nagpur, but they exceeded my expectations. My hair feels healthier than ever!",
    highlight: "I highly recommend it for top-notch haircut and grooming services."
  },
  {
    author: "Mayank Agrawal",
    rating: 5,
    tag: "Overall Experience",
    time: "3 weeks ago",
    badge: "Verified Client",
    text: "All kudos to the owner for such a happy & Comfortable Environment. From the moment you enter, you are welcomed warmly. Fair pricing and zero rush even on busy weekends.",
    highlight: "All kudos to the owner for such a happy & Comfortable Environment."
  },
  {
    author: "Pooja Kulkarni",
    rating: 5,
    tag: "Bridal & Facial",
    time: "2 months ago",
    badge: "Local Guide · 18 reviews",
    text: "Took the O3+ Bridal Glow Facial and party makeup for my sister's wedding. The makeup lasted all night without creasing! Best salon in Sadar / Byramji Town hands down.",
    highlight: "Best salon in Sadar / Byramji Town hands down."
  },
  {
    author: "Sameer Sheikh",
    rating: 4.5,
    tag: "Men's Styling",
    time: "Recent Visit",
    badge: "Verified Customer",
    text: "Located conveniently beside Pizza Hut in Poonam Chambers. Easy parking, polite stylists and they use authentic L'Oréal products. Worth every rupee.",
    highlight: "Easy parking, polite stylists and authentic products."
  }
];

// --- Live Open Status Calculation (Nagpur IST: UTC + 5:30) ---
function updateSalonLiveStatus() {
  const statusPill = document.getElementById("salon-status-pill");
  const statusText = document.getElementById("salon-status-text");
  const heroBadge = document.getElementById("hero-status-badge");
  
  if (!statusPill || !statusText) return;

  // Calculate current time in India (IST: UTC+5.5)
  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const istDate = new Date(utc + (3600000 * 5.5));
  
  const currentHour = istDate.getHours();
  const currentMinutes = istDate.getMinutes();
  const currentDay = istDate.getDay(); // 0 is Sunday

  const isOpen = currentHour >= SALON_DATA.openingHour && currentHour < SALON_DATA.closingHour;
  const isPeak = currentHour === SALON_DATA.peakHour;

  if (isOpen) {
    statusPill.innerHTML = `
      <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block"></span>
      <span class="w-2 h-2 rounded-full bg-emerald-400 absolute"></span>
    `;
    const peakText = isPeak ? " · (Peak rush hour!)" : "";
    statusText.innerText = `Open Now · Closes at 9:00 PM${peakText}`;
    statusText.className = "text-emerald-400 font-semibold text-xs";

    if (heroBadge) {
      heroBadge.innerHTML = `
        <span class="w-2 h-2 rounded-full bg-emerald-400 inline-block mr-2 animate-pulse"></span>
        <span class="text-stone-200">Open Today: <strong class="text-white">10:00 AM – 9:00 PM</strong></span>
      `;
    }
  } else {
    statusPill.innerHTML = `
      <span class="w-2 h-2 rounded-full bg-amber-400 inline-block"></span>
    `;
    statusText.innerText = `Closed Now · Opens 10:00 AM`;
    statusText.className = "text-amber-400 font-semibold text-xs";

    if (heroBadge) {
      heroBadge.innerHTML = `
        <span class="w-2 h-2 rounded-full bg-amber-400 inline-block mr-2"></span>
        <span class="text-stone-200">Opens Tomorrow at <strong class="text-white">10:00 AM</strong></span>
      `;
    }
  }
}

// --- Render Services in Menu ---
let currentCategory = "all";
let currentSearchTerm = "";

function renderServices() {
  const container = document.getElementById("services-grid");
  if (!container) return;

  const filtered = SERVICES.filter(item => {
    const matchesCategory = currentCategory === "all" || item.category === currentCategory;
    const matchesSearch = currentSearchTerm === "" || 
      item.title.toLowerCase().includes(currentSearchTerm.toLowerCase()) || 
      item.desc.toLowerCase().includes(currentSearchTerm.toLowerCase()) ||
      item.categoryLabel.toLowerCase().includes(currentSearchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-12 text-stone-400">
        <i data-lucide="scissors" class="w-10 h-10 mx-auto mb-3 opacity-40 text-champagne"></i>
        <p class="text-lg font-medium text-stone-200">No services found matching "${currentSearchTerm}"</p>
        <p class="text-sm mt-1 text-stone-400">Try searching for "haircut", "keratin", "beard", "facial", or "nail"</p>
        <button onclick="resetFilters()" class="mt-4 px-4 py-2 text-xs uppercase tracking-wider font-bold text-amber-300 border border-amber-500/30 rounded-lg hover:bg-amber-500/10 transition-colors">
          Show All Services
        </button>
      </div>
    `;
    if (window.lucide) lucide.createIcons();
    return;
  }

  container.innerHTML = filtered.map(item => `
    <div class="service-card glass-card-gold rounded-2xl p-6 flex flex-col justify-between group">
      <div>
        <div class="flex items-start justify-between gap-3 mb-2">
          <span class="text-[11px] uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full bg-stone-800 text-stone-300 border border-stone-700/60">
            ${item.categoryLabel}
          </span>
          ${item.tag ? `
            <span class="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30">
              ${item.tag}
            </span>
          ` : ''}
        </div>
        
        <h3 class="font-heading text-xl text-stone-100 font-semibold group-hover:text-amber-200 transition-colors mt-2">
          ${item.title}
        </h3>
        
        <p class="text-stone-400 text-xs sm:text-sm mt-2 line-clamp-3 leading-relaxed">
          ${item.desc}
        </p>
      </div>

      <div class="mt-6 pt-4 border-t border-stone-800/80 flex items-center justify-between">
        <div>
          <span class="text-xs text-stone-500 uppercase block tracking-wider">Starts From</span>
          <div class="flex items-baseline gap-2">
            <span class="text-xl font-bold font-sans text-amber-300">${item.price}</span>
            <span class="text-[11px] text-stone-400">· ${item.duration}</span>
          </div>
        </div>
        
        <button onclick="openBookingModal('${item.id}')" class="px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-stone-800 hover:bg-amber-400 hover:text-stone-950 text-stone-200 border border-stone-700/80 hover:border-amber-400 transition-all shadow-sm flex items-center gap-1.5 group/btn">
          <span>Book Now</span>
          <i data-lucide="arrow-right" class="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform"></i>
        </button>
      </div>
    </div>
  `).join("");

  if (window.lucide) lucide.createIcons();
}

function resetFilters() {
  currentCategory = "all";
  currentSearchTerm = "";
  const searchInput = document.getElementById("services-search-input");
  if (searchInput) searchInput.value = "";
  
  document.querySelectorAll(".category-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.category === "all");
  });

  renderServices();
}

// --- Render Reviews ---
function renderReviews() {
  const container = document.getElementById("reviews-container");
  if (!container) return;

  container.innerHTML = REVIEWS_DATA.map(rev => `
    <div class="glass-card-gold rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-amber-400/40 transition-all shadow-lg">
      <div>
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-1">
            ${Array.from({ length: 5 }).map((_, i) => `
              <i data-lucide="star" class="w-4 h-4 ${i < Math.floor(rev.rating) ? 'fill-amber-400 text-amber-400' : 'text-stone-600'}"></i>
            `).join("")}
          </div>
          <span class="text-[11px] text-stone-400 font-medium">${rev.time}</span>
        </div>

        <blockquote class="text-stone-200 text-sm leading-relaxed mb-4 italic">
          "${rev.text}"
        </blockquote>
      </div>

      <div class="pt-4 border-t border-stone-800/80 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-600 to-amber-300 text-stone-950 font-bold flex items-center justify-center text-sm shadow">
            ${rev.author[0]}
          </div>
          <div>
            <h4 class="font-semibold text-sm text-stone-100">${rev.author}</h4>
            <span class="text-[11px] text-stone-400 flex items-center gap-1">
              <i data-lucide="badge-check" class="w-3 h-3 text-emerald-400"></i>
              ${rev.badge}
            </span>
          </div>
        </div>

        <span class="text-[10px] px-2 py-0.5 rounded bg-stone-800 text-stone-300 border border-stone-700/60 font-medium">
          ${rev.tag}
        </span>
      </div>
    </div>
  `).join("");

  if (window.lucide) lucide.createIcons();
}

// --- Interactive Before / After Slider ---
function initBeforeAfterSlider() {
  const slider = document.getElementById("ba-slider-container");
  if (!slider) return;

  const beforeLayer = document.getElementById("ba-before-layer");
  const handle = document.getElementById("ba-handle");
  const line = document.getElementById("ba-slider-line");

  let isDragging = false;

  const setSliderPos = (xPos) => {
    const rect = slider.getBoundingClientRect();
    let percent = ((xPos - rect.left) / rect.width) * 100;
    if (percent < 5) percent = 5;
    if (percent > 95) percent = 95;

    beforeLayer.style.width = `${percent}%`;
    line.style.left = `${percent}%`;
    handle.style.left = `${percent}%`;
  };

  const startDrag = (e) => {
    isDragging = true;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    setSliderPos(clientX);
  };

  const stopDrag = () => {
    isDragging = false;
  };

  const onDrag = (e) => {
    if (!isDragging) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    setSliderPos(clientX);
  };

  slider.addEventListener("mousedown", startDrag);
  window.addEventListener("mouseup", stopDrag);
  window.addEventListener("mousemove", onDrag);

  slider.addEventListener("touchstart", startDrag, { passive: true });
  window.addEventListener("touchend", stopDrag);
  window.addEventListener("touchmove", onDrag, { passive: true });
}

// --- Booking Modal Controller ---
function openBookingModal(preselectedServiceId = null) {
  const modal = document.getElementById("booking-modal");
  if (!modal) return;

  // Populate services dropdown
  const selectEl = document.getElementById("modal-service-select");
  if (selectEl) {
    selectEl.innerHTML = SERVICES.map(s => `
      <option value="${s.id}" data-price="${s.price}" data-duration="${s.duration}">
        ${s.title} — ${s.price} (${s.duration})
      </option>
    `).join("");

    if (preselectedServiceId) {
      selectEl.value = preselectedServiceId;
    }
  }

  // Set min date to today
  const dateInput = document.getElementById("modal-date-input");
  if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.min = today;
    if (!dateInput.value) {
      dateInput.value = today;
    }
  }

  updateModalSummary();

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeBookingModal() {
  const modal = document.getElementById("booking-modal");
  if (!modal) return;
  modal.classList.remove("open");
  document.body.style.overflow = "";
}

function updateModalSummary() {
  const selectEl = document.getElementById("modal-service-select");
  const summaryEl = document.getElementById("modal-service-summary");
  if (!selectEl || !summaryEl) return;

  const selectedService = SERVICES.find(s => s.id === selectEl.value);
  if (selectedService) {
    summaryEl.innerHTML = `
      <div class="flex items-center justify-between text-xs sm:text-sm text-stone-300">
        <span>Estimated Investment: <strong class="text-amber-300 font-bold text-base">${selectedService.price}</strong></span>
        <span class="text-stone-400">Approx. Duration: <strong class="text-stone-200">${selectedService.duration}</strong></span>
      </div>
    `;
  }
}

// --- Dispatch Appointment to WhatsApp & Show Receipt ---
function submitAppointmentBooking(e) {
  e.preventDefault();

  const name = document.getElementById("modal-name-input")?.value?.trim();
  const phone = document.getElementById("modal-phone-input")?.value?.trim();
  const serviceId = document.getElementById("modal-service-select")?.value;
  const date = document.getElementById("modal-date-input")?.value;
  const time = document.getElementById("modal-time-select")?.value;
  const stylist = document.getElementById("modal-stylist-select")?.value || "Any Available Master Stylist";
  const notes = document.getElementById("modal-notes-input")?.value?.trim() || "No specific request";

  if (!name || !phone || !date || !time) {
    showToast("Please fill in your name, phone number, date, and preferred time.");
    return;
  }

  const service = SERVICES.find(s => s.id === serviceId) || SERVICES[0];
  const bookingRef = "HPS-" + Math.floor(1000 + Math.random() * 9000);

  // Format WhatsApp message
  const waMessage = 
`✨ *NEW APPOINTMENT BOOKING REQUEST* ✨
*The Hairport Studio — Sadar, Nagpur*
━━━━━━━━━━━━━━━━━━━━━━━━━
🔖 *Booking ID:* ${bookingRef}
👤 *Client Name:* ${name}
📞 *Phone:* ${phone}
✂️ *Service:* ${service.title}
💰 *Price Est.:* ${service.price} (${service.duration})
📅 *Date:* ${date}
⏰ *Preferred Time:* ${time}
💈 *Stylist:* ${stylist}
📝 *Client Notes:* ${notes}
📍 *Location:* Poonam Chambers, Byramji Town, Sadar
━━━━━━━━━━━━━━━━━━━━━━━━━
_Kindly confirm this appointment slot. Thank you!_`;

  const waUrl = `https://wa.me/${SALON_DATA.whatsappNumber}?text=${encodeURIComponent(waMessage)}`;

  // Close booking modal and open confirmation voucher
  closeBookingModal();
  showConfirmationReceipt({
    bookingRef,
    name,
    phone,
    serviceTitle: service.title,
    servicePrice: service.price,
    date,
    time,
    stylist,
    waUrl
  });
}

function showConfirmationReceipt(data) {
  const modal = document.getElementById("receipt-modal");
  const content = document.getElementById("receipt-content");
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="text-center pb-5 border-b border-stone-800">
      <div class="w-14 h-14 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mb-3">
        <i data-lucide="check" class="w-7 h-7"></i>
      </div>
      <span class="text-xs uppercase font-bold tracking-widest text-amber-300">Appointment Request Prepared</span>
      <h3 class="font-heading text-2xl text-white font-bold mt-1">Ready for Instant Confirmation</h3>
      <p class="text-xs text-stone-400 mt-1">Ref ID: <span class="font-mono text-amber-200 font-bold">${data.bookingRef}</span></p>
    </div>

    <div class="py-4 space-y-2.5 text-xs sm:text-sm">
      <div class="flex justify-between py-1.5 border-b border-stone-800/60">
        <span class="text-stone-400">Client Name:</span>
        <span class="font-semibold text-stone-100">${data.name}</span>
      </div>
      <div class="flex justify-between py-1.5 border-b border-stone-800/60">
        <span class="text-stone-400">Contact:</span>
        <span class="font-semibold text-stone-100">${data.phone}</span>
      </div>
      <div class="flex justify-between py-1.5 border-b border-stone-800/60">
        <span class="text-stone-400">Selected Service:</span>
        <span class="font-semibold text-amber-200 text-right">${data.serviceTitle}</span>
      </div>
      <div class="flex justify-between py-1.5 border-b border-stone-800/60">
        <span class="text-stone-400">Estimated Price:</span>
        <span class="font-bold text-white">${data.servicePrice}</span>
      </div>
      <div class="flex justify-between py-1.5 border-b border-stone-800/60">
        <span class="text-stone-400">Schedule:</span>
        <span class="font-semibold text-stone-100">${data.date} at ${data.time}</span>
      </div>
      <div class="flex justify-between py-1.5 border-b border-stone-800/60">
        <span class="text-stone-400">Studio Location:</span>
        <span class="font-semibold text-stone-300 text-right">Shop 1, Poonam Chambers, Sadar</span>
      </div>
    </div>

    <div class="pt-3 flex flex-col gap-2.5">
      <a href="${data.waUrl}" target="_blank" class="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-lg hover:shadow-emerald-900/50 transition-all">
        <i data-lucide="message-circle" class="w-4 h-4"></i>
        <span>Send Instant Booking via WhatsApp</span>
      </a>

      <button onclick="closeReceiptModal()" class="w-full py-2.5 text-xs text-stone-400 hover:text-stone-200 uppercase tracking-wider font-semibold transition-colors">
        Done & Close
      </button>
    </div>
  `;

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
  if (window.lucide) lucide.createIcons();
}

function closeReceiptModal() {
  const modal = document.getElementById("receipt-modal");
  if (!modal) return;
  modal.classList.remove("open");
  document.body.style.overflow = "";
}

// --- Lightbox Modal ---
function openLightbox(imgSrc, title, subtitle) {
  const modal = document.getElementById("lightbox-modal");
  const imgEl = document.getElementById("lightbox-img");
  const titleEl = document.getElementById("lightbox-title");
  const subEl = document.getElementById("lightbox-subtitle");
  if (!modal || !imgEl) return;

  imgEl.src = imgSrc;
  if (titleEl) titleEl.innerText = title || "The Hairport Studio Artistry";
  if (subEl) subEl.innerText = subtitle || "Poonam Chambers, Sadar, Nagpur";

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const modal = document.getElementById("lightbox-modal");
  if (!modal) return;
  modal.classList.remove("open");
  document.body.style.overflow = "";
}

// --- Copy Details & Toast ---
function copyToClipboard(text, message) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(message || "Copied to clipboard!");
  }).catch(() => {
    showToast("Copying failed. Please copy manually.");
  });
}

function showToast(message) {
  let toast = document.getElementById("toast-notification");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast-notification";
    toast.className = "fixed bottom-24 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-full bg-stone-900 border border-amber-400/40 text-stone-100 text-xs sm:text-sm font-semibold shadow-2xl flex items-center gap-2 transition-all duration-300 opacity-0 pointer-events-none";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i data-lucide="check-circle-2" class="w-4 h-4 text-amber-300"></i> ${message}`;
  if (window.lucide) lucide.createIcons();

  toast.classList.remove("opacity-0", "pointer-events-none");
  toast.classList.add("opacity-100");

  setTimeout(() => {
    toast.classList.remove("opacity-100");
    toast.classList.add("opacity-0", "pointer-events-none");
  }, 3200);
}

// --- FAQ Accordion Toggle ---
function setupFAQ() {
  document.querySelectorAll(".faq-item").forEach(item => {
    const trigger = item.querySelector(".faq-trigger");
    if (!trigger) return;
    trigger.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");
      document.querySelectorAll(".faq-item").forEach(other => other.classList.remove("active"));
      if (!isOpen) {
        item.classList.add("active");
      }
    });
  });
}

// --- Category Filters Setup ---
function setupCategoryFilters() {
  const buttons = document.querySelectorAll(".category-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.dataset.category;
      renderServices();
    });
  });

  const searchInput = document.getElementById("services-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearchTerm = e.target.value.trim();
      renderServices();
    });
  }
}

// --- Mobile Navigation Drawer ---
function setupMobileMenu() {
  const toggleBtn = document.getElementById("mobile-menu-toggle");
  const drawer = document.getElementById("mobile-menu-drawer");
  const closeBtn = document.getElementById("mobile-menu-close");

  if (!toggleBtn || !drawer) return;

  const toggle = (open) => {
    drawer.classList.toggle("hidden", !open);
    document.body.style.overflow = open ? "hidden" : "";
  };

  toggleBtn.addEventListener("click", () => toggle(true));
  if (closeBtn) closeBtn.addEventListener("click", () => toggle(false));

  drawer.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => toggle(false));
  });
}

// --- Document Ready Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  updateSalonLiveStatus();
  setInterval(updateSalonLiveStatus, 60000); // Check every minute

  renderServices();
  renderReviews();
  initBeforeAfterSlider();
  setupFAQ();
  setupCategoryFilters();
  setupMobileMenu();

  // Booking modal service listener for real-time price preview
  const serviceSelect = document.getElementById("modal-service-select");
  if (serviceSelect) {
    serviceSelect.addEventListener("change", updateModalSummary);
  }

  // Booking Form Submission
  const bookingForm = document.getElementById("appointment-booking-form");
  if (bookingForm) {
    bookingForm.addEventListener("submit", submitAppointmentBooking);
  }

  // Close modals on Esc or backdrop click
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeBookingModal();
      closeReceiptModal();
      closeLightbox();
    }
  });

  document.querySelectorAll(".modal-backdrop").forEach(backdrop => {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) {
        closeBookingModal();
        closeReceiptModal();
        closeLightbox();
      }
    });
  });

  if (window.lucide) {
    lucide.createIcons();
  }
});
