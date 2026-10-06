export const PLANS = [
  {
    id: "free",
    name: "Starter",
    price: "₹0",
    duration: "Forever",
    credits: 5,
    features: [
      "5 AI thumbnails",
      "Basic styles",
      "Standard resolution",
    ],
    cta: "Get Started",
    popular: false,
    clerkPlanId: null, // 👈 later add Clerk ID
  },
  {
    id: "pro",
    name: "Pro",
    price: "₹499",
    duration: "per month",
    credits: 100,
    features: [
      "100 AI thumbnails",
      "All styles",
      "HD resolution",
      "Priority generation",
    ],
    cta: "Upgrade to Pro",
    popular: true,
    clerkPlanId: "pro_monthly", // 👈 placeholder
  },
  {
    id: "ultra",
    name: "Ultra",
    price: "₹999",
    duration: "per month",
    credits: 300,
    features: [
      "300 AI thumbnails",
      "Premium styles",
      "Ultra HD",
      "Fastest generation",
      "Priority support",
    ],
    cta: "Upgrade to Ultra",
    popular: false,
    clerkPlanId: "ultra_monthly", // 👈 placeholder
  },
];
