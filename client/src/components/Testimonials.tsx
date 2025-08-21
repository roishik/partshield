import { Star, Clock } from "lucide-react";

const testimonials = [
  {
    name: "John M.",
    location: "Arizona • Shop Owner",
    content:
      "I run a 20-man machine shop. Scrap used to kill my margins. With PartShield, I finally bid without padding my prices.",
    timeAgo: "2 weeks ago",
    avatar:
      "https://sdmntpreastus.oaiusercontent.com/files/00000000-c208-61f9-a637-4658437d0e63/raw?se=2025-08-21T15%3A12%3A52Z&sp=r&sv=2024-08-04&sr=b&scid=45f363b3-9d48-552d-b968-5937a5375685&skoid=a3412ad4-1a13-47ce-91a5-c07730964f35&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-20T20%3A54%3A13Z&ske=2025-08-21T20%3A54%3A13Z&sks=b&skv=2024-08-04&sig=eDoaezjXX5F8X2DZM%2BDaPRsr07HRR2i6ieWTrPkovFI%3D",
  },
  {
    name: "Maria R.",
    location: "Ohio • Production Manager",
    content:
      "We used to lose jobs to bigger shops because our quotes were higher. PartShield gave us the confidence to go leaner.",
    timeAgo: "1 month ago",
    avatar:
      "https://sdmntpreastus2.oaiusercontent.com/files/00000000-5648-61f6-8fb7-760c4f3bf372/raw?se=2025-08-21T15%3A17%3A41Z&sp=r&sv=2024-08-04&sr=b&scid=d8ae5e27-3e1c-546f-b1e4-cf6b30894234&skoid=a3412ad4-1a13-47ce-91a5-c07730964f35&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-20T20%3A54%3A06Z&ske=2025-08-21T20%3A54%3A06Z&sks=b&skv=2024-08-04&sig=C5mqKgLesqjm0X5cQVOgmjt9WxrOnDOxO3/JOsUIlqQ%3D",
  },
  {
    name: "Dave T.",
    location: "Michigan • Operations Director",
    content:
      "Unexpected scrap always hit our cash flow. Now, we can plan projects knowing our revenue is safe.",
    timeAgo: "3 weeks ago",
    avatar:
      "https://sdmntpreastus.oaiusercontent.com/files/00000000-c208-61f9-a637-4658437d0e63/raw?se=2025-08-21T15%3A12%3A52Z&sp=r&sv=2024-08-04&sr=b&scid=45f363b3-9d48-552d-b968-5937a5375685&skoid=a3412ad4-1a13-47ce-91a5-c07730964f35&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-20T20%3A54%3A13Z&ske=2025-08-21T20%3A54%3A13Z&sks=b&skv=2024-08-04&sig=eDoaezjXX5F8X2DZM%2BDaPRsr07HRR2i6ieWTrPkovFI%3D",
  },
  {
    name: "Ethan L.",
    location: "Texas • Workshop Manager",
    content:
      "Insurance for scrap sounded strange at first, but it works. Our quoting is sharper and we've landed more repeat clients.",
    timeAgo: "2 months ago",
    avatar:
      "https://sdmntpreastus.oaiusercontent.com/files/00000000-c208-61f9-a637-4658437d0e63/raw?se=2025-08-21T15%3A12%3A52Z&sp=r&sv=2024-08-04&sr=b&scid=45f363b3-9d48-552d-b968-5937a5375685&skoid=a3412ad4-1a13-47ce-91a5-c07730964f35&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-20T20%3A54%3A13Z&ske=2025-08-21T20%3A54%3A13Z&sks=b&skv=2024-08-04&sig=eDoaezjXX5F8X2DZM%2BDaPRsr07HRR2i6ieWTrPkovFI%3D",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-steel-900 sm:text-4xl">
            What Shop Owners Are Saying
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-steel-500">
            Real reviews from machine shop owners who transformed their business
            with PartShield
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-lg shadow-sm p-6"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={`${testimonial.name} - Shop Owner`}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-3">
                  <div className="text-sm font-medium text-steel-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-steel-500">
                    {testimonial.location}
                  </div>
                </div>
                <div className="ml-auto flex items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-steel-600">"{testimonial.content}"</p>
              <div className="mt-4 text-xs text-steel-400 flex items-center">
                <Clock className="h-3 w-3 mr-1" />
                {testimonial.timeAgo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
