import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Award, Users, Building, Leaf, Shield, Star, ArrowRight } from "lucide-react"

export default function AboutUsSection() {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-orange-50 to-red-50 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(251,146,60,0.1),transparent_50%)]"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <Badge className="bg-orange-100 text-orange-800 border border-orange-200 mb-6 sm:mb-8 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium">
            About NYRA SUNTERRA
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-6 sm:mb-8 tracking-tight">
            Building Dreams with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Purpose</span>
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-full mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
            {/* Content will be updated based on the image you provide */}
            At NYRA SUNTERRA, we believe luxury and sustainability can coexist beautifully. Our vision is to create
            homes that not only provide unparalleled comfort but also contribute to a greener future.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 sm:mb-20">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">Our Story & Vision</h3>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg font-light">
                {/* This content will be updated based on your image */}
                Founded with a commitment to excellence and sustainability, NYRA SUNTERRA represents the future of
                luxury living. We combine cutting-edge solar technology with premium construction to deliver homes that
                are both environmentally responsible and exceptionally beautiful.
              </p>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg font-light">
                Every villa is designed with meticulous attention to detail, ensuring that our residents enjoy zero
                electricity bills while living in spaces that reflect their success and values.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                { icon: Award, label: "15+ Years", desc: "Industry Experience" },
                { icon: Building, label: "500+", desc: "Homes Delivered" },
                { icon: Users, label: "1000+", desc: "Happy Families" },
                { icon: Leaf, label: "100%", desc: "Green Living" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 sm:p-6 bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg border border-orange-100"
                >
                  <div className="p-3 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl mb-4 mx-auto w-fit">
                    <stat.icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900 mb-1">{stat.label}</div>
                  <div className="text-sm text-slate-600 font-medium">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Placeholder for the image you'll provide */}
            <div className="aspect-[4/5] bg-gradient-to-br from-orange-100 via-white to-red-100 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-orange-200">
              <img src="/building1.webp" alt="About NYRA SUNTERRA" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-orange-400/20 to-red-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-red-400/20 to-orange-500/20 rounded-full blur-2xl"></div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              icon: Leaf,
              title: "Sustainability First",
              description:
                "Every decision we make prioritizes environmental responsibility without compromising on luxury or comfort.",
              color: "green",
            },
            {
              icon: Shield,
              title: "Quality Assurance",
              description:
                "We maintain the highest standards in construction, materials, and craftsmanship to ensure lasting value.",
              color: "blue",
            },
            {
              icon: Star,
              title: "Customer Excellence",
              description:
                "Our commitment extends beyond construction to creating lasting relationships with our residents.",
              color: "purple",
            },
          ].map((value, index) => (
            <Card
              key={index}
              className="border-0 shadow-xl bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <CardContent className="p-6 sm:p-8 text-center">
                <div
                  className={`p-4 bg-gradient-to-br from-${value.color}-100 to-${value.color}-50 rounded-2xl mb-6 mx-auto w-fit`}
                >
                  <value.icon className={`h-8 w-8 text-${value.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed font-light">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 px-8 sm:px-12 py-4 sm:py-6 rounded-2xl text-lg font-semibold shadow-2xl"
          >
            Learn More About Our Journey
            <ArrowRight className="h-5 w-5 ml-3" />
          </Button>
        </div>
      </div>
    </section>
  )
}
