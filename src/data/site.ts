import logo from "@/assets/logo.png.asset.json";
import hero from "@/assets/hero.jpg.asset.json";
import exterior from "@/assets/exterior.jpg.asset.json";
import exteriorBays from "@/assets/exterior-bays.jpg.asset.json";
import office from "@/assets/office.jpg.asset.json";
import reception from "@/assets/reception.jpg.asset.json";
import technicians from "@/assets/technicians.jpg.asset.json";
import diagnostics from "@/assets/diagnostics.jpg.asset.json";
import acService from "@/assets/ac-service.jpg.asset.json";
import carwash from "@/assets/carwash.jpg.asset.json";

export const images = {
  logo: logo.url,
  hero: hero.url,
  exterior: exterior.url,
  exteriorBays: exteriorBays.url,
  office: office.url,
  reception: reception.url,
  technicians: technicians.url,
  diagnostics: diagnostics.url,
  acService: acService.url,
  carwash: carwash.url,
};

export const company = {
  name: "T-CAT ph",
  legalName: "Thecheksons Autotech",
  tagline: "Car repairs done to meet customers satisfaction",
  addressLine1: "60 Trans-Amadi Industrial Layout",
  addressLine2: "Close to Nkpolgu Roundabout, Port Harcourt, Nigeria",
  phone: "0803 987 9315",
  phoneHref: "tel:+2348039879315",
  whatsappHref: "https://wa.me/2348039879315",
  email: "services@t-cat.tech",
  social: "t_cat.ph",
  instagram: "https://instagram.com/t_cat.ph",
  hours: "[OPENING HOURS TO BE CONFIRMED]",
};

export type Service = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  image: string;
  includes: string[];
};

export const services: Service[] = [
  {
    slug: "engine-diagnostics",
    name: "Engine Diagnostics",
    summary:
      "Fault codes read and interpreted against the actual symptoms, so the right repair is identified before any part is replaced.",
    description:
      "A warning light tells you something changed; it does not tell you what failed. Our technicians scan the vehicle, review live data and confirm the fault on the car itself before recommending work.",
    image: images.diagnostics,
    includes: [
      "Full system scan and fault code review",
      "Live data checks on the running engine",
      "Physical confirmation of the suspected fault",
      "Written explanation of findings before work starts",
    ],
  },
  {
    slug: "vehicle-inspection",
    name: "Full Vehicle Inspection",
    summary:
      "A structured check of the systems that affect safety, reliability and running cost, with findings explained in plain language.",
    description:
      "Useful before a long trip, before buying a used vehicle, or when you simply want to know the true condition of your car.",
    image: images.technicians,
    includes: [
      "Engine bay, fluids and leak check",
      "Brakes, tyres and suspension assessment",
      "Electrical and lighting check",
      "Prioritised list of what needs attention now and later",
    ],
  },
  {
    slug: "oil-and-engine-care",
    name: "Oil & Engine Care",
    summary:
      "Routine servicing carried out to schedule with the correct grades and filters for your vehicle.",
    description:
      "Consistent servicing is the cheapest maintenance you will ever do. We record what was done and when, so your service history stays clear.",
    image: images.acService,
    includes: [
      "Engine oil and filter replacement",
      "Air and cabin filter checks",
      "Fluid level and condition review",
      "Service interval recorded for your next visit",
    ],
  },
  {
    slug: "battery-and-electrical",
    name: "Battery & Electrical Services",
    summary:
      "Starting, charging and vehicle electrical faults traced properly instead of replaced by guesswork.",
    description:
      "Modern vehicles carry complex electrical architecture. We test the charging system and trace circuits rather than assuming the battery is the culprit.",
    image: images.diagnostics,
    includes: [
      "Battery condition and charging system test",
      "Starting fault investigation",
      "Wiring and circuit fault tracing",
      "Component testing before replacement",
    ],
  },
  {
    slug: "brake-and-safety",
    name: "Brake & Safety Services",
    summary:
      "Braking components inspected, measured and serviced so the vehicle stops the way it should.",
    description:
      "Brake work is checked and verified before the vehicle leaves the workshop. Nothing about stopping distance is left to chance.",
    image: images.technicians,
    includes: [
      "Pad, disc and fluid inspection",
      "Brake component replacement",
      "System bleed and pressure check",
      "Road verification before handover",
    ],
  },
  {
    slug: "repair-and-maintenance",
    name: "General Repair & Maintenance",
    summary:
      "Mechanical repair and scheduled maintenance for all brands and trims, handled through one workshop process.",
    description:
      "From a specific fault to a full service package, work is planned, carried out and verified with the same structured approach.",
    image: images.exteriorBays,
    includes: [
      "Mechanical repair across brands and trims",
      "Scheduled maintenance packages",
      "Parts sourcing and fitment",
      "Post-repair verification",
    ],
  },
  {
    slug: "electric-vehicle-service",
    name: "Electric Vehicle Repairs & Maintenance",
    summary:
      "Service and maintenance support for electric vehicles as T-CAT builds out its EV capability.",
    description:
      "Electric vehicles are arriving on Nigerian roads faster than the workshops equipped to look after them. T-CAT is developing the tooling and technician training to service them properly.",
    image: images.exterior,
    includes: [
      "EV maintenance and routine checks",
      "High-voltage system handling procedures",
      "Fault investigation and repair",
      "[EV SERVICE SCOPE TO BE CONFIRMED]",
    ],
  },
  {
    slug: "hybrid-vehicle-service",
    name: "Hybrid Vehicle Repairs & Maintenance",
    summary:
      "Maintenance and repair for hybrid vehicles, covering both the combustion and electric side of the drivetrain.",
    description:
      "Hybrids need a workshop comfortable with both engines and high-voltage systems. Work is carried out with the correct procedure for each side of the drivetrain.",
    image: images.acService,
    includes: [
      "Hybrid system checks",
      "Combustion-side servicing",
      "Battery and electrical assessment",
      "[HYBRID SERVICE SCOPE TO BE CONFIRMED]",
    ],
  },
];

export const processSteps = [
  { n: "01", title: "Book", body: "Tell us what your vehicle needs, by phone, WhatsApp or the service request form." },
  { n: "02", title: "Inspect", body: "The vehicle is assessed on arrival before any work is agreed." },
  { n: "03", title: "Diagnose", body: "Relevant systems are checked so the actual fault is identified, not guessed." },
  { n: "04", title: "Service", body: "The agreed maintenance or repair is carried out by our technicians." },
  { n: "05", title: "Verify", body: "The vehicle is checked again before it is handed back to you." },
];

export const faqs = [
  {
    q: "What should I do if a warning light comes on?",
    a: "Note when the light appeared and what the vehicle was doing at the time, then book a diagnostics check. A warning light indicates a system has reported a fault; a scan and physical inspection are needed to identify what actually failed.",
  },
  {
    q: "Do you service hybrid vehicles?",
    a: "Yes. Hybrid repair and maintenance is one of our service areas, covering both the combustion and electric side of the drivetrain. Call us with your make and model so we can confirm scope before you come in.",
  },
  {
    q: "Do you service electric vehicles?",
    a: "Yes. Electric vehicle repair and maintenance is part of our service offering as we continue to build EV capability. Contact us with your vehicle details so we can confirm what we can carry out for your model.",
  },
  {
    q: "Should I book before bringing my vehicle in?",
    a: "Booking ahead helps us allocate a bay and a technician to your vehicle, which usually means less waiting. You can book by phone, WhatsApp, or through the service request form on this site.",
  },
  {
    q: "What happens during a vehicle inspection?",
    a: "We check the systems that affect safety, reliability and running cost, then explain the findings and separate what needs attention now from what can wait.",
  },
  {
    q: "Which vehicle brands do you work on?",
    a: "T-CAT carries out car repair and maintenance for all brands and trims.",
  },
  {
    q: "How long will my repair take?",
    a: "It depends on the fault and parts availability. We give you a time estimate once the vehicle has been assessed. [TURNAROUND POLICY TO BE CONFIRMED]",
  },
  {
    q: "Do you offer a warranty on repairs?",
    a: "[WARRANTY POLICY TO BE CONFIRMED BY T-CAT]",
  },
];

export const gallery = [
  { src: images.exterior, alt: "T-CAT ph workshop exterior on Trans-Amadi, Port Harcourt", category: "Workshop" },
  { src: images.technicians, alt: "T-CAT technicians working on a vehicle with the bonnet raised", category: "Technicians" },
  { src: images.diagnostics, alt: "T-CAT technician operating diagnostic equipment on a vehicle", category: "Diagnostics" },
  { src: images.reception, alt: "T-CAT reception desk beneath the illuminated T-CAT ph sign", category: "Customer Experience" },
  { src: images.exteriorBays, alt: "Open service bays at the T-CAT ph workshop", category: "Workshop" },
  { src: images.acService, alt: "Technician servicing a vehicle air conditioning system", category: "Maintenance" },
  { src: images.office, alt: "T-CAT service adviser at the front office desk", category: "Customer Experience" },
  { src: images.carwash, alt: "Vehicle being washed under the T-CAT car wash canopy", category: "Vehicles" },
  { src: images.hero, alt: "Two T-CAT technicians carrying out a check under the bonnet", category: "Technicians" },
];
