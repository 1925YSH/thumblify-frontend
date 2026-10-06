import { PLANS } from "../config/plans";

const Pricing = () => {
  return (
    <section className="py-28 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="px-4 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-sm">
            Pricing
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-white text-center">
          Simple Pricing
        </h2>
        <p className="mt-4 text-gray-400 text-center max-w-2xl mx-auto">
          Choose the plan that fits your creation schedule. Cancel anytime.
        </p>

        {/* Cards */}
        <div className="mt-20 grid gap-10 md:grid-cols-3">

          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl p-8 transition-all duration-300
                ${
                  plan.popular
                    ? "scale-105 border border-pink-500 bg-gradient-to-b from-pink-600/30 via-pink-500/10 to-black"
                    : "border border-pink-500/20 bg-gradient-to-b from-white/5 to-black hover:border-pink-500/50"
                }
              `}
            >
              {/* Glow overlay */}
              <div className="absolute inset-0 rounded-3xl bg-pink-500/10 blur-2xl opacity-30 -z-10"></div>

              {/* Popular badge */}
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 text-xs rounded-full bg-pink-500 text-white">
                  Most Popular
                </span>
              )}

              {/* Title */}
              <h3 className="text-xl font-semibold text-white">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mt-4">
                <span className="text-4xl font-extrabold text-white">
                  {plan.price}
                </span>
                <span className="ml-2 text-gray-400 text-sm">
                  / {plan.duration}
                </span>
              </div>

              {/* Credits */}
              <p className="mt-4 text-gray-300 text-sm">
                {plan.credits} credits included
              </p>

              {/* Features */}
              <ul className="mt-6 space-y-3 text-sm text-gray-300">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-pink-500">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`mt-8 w-full py-3 rounded-xl font-semibold transition
                  ${
                    plan.popular
                      ? "bg-white text-black hover:bg-gray-100"
                      : "bg-pink-500 text-white hover:bg-pink-600"
                  }
                `}
              >
                Buy Now
              </button>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Pricing;
