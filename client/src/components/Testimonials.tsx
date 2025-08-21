import { Star, Clock } from "lucide-react";

const testimonials = [
  {
    name: "John M.",
    location: "Arizona • Shop Owner",
    content: "I run a 20-man machine shop. Scrap used to kill my margins. With PartShield, I finally bid without padding my prices.",
    timeAgo: "2 weeks ago",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  },
  {
    name: "Maria R.",
    location: "Ohio • Shop Owner",
    content: "We used to lose jobs to bigger shops because our quotes were higher. PartShield gave us the confidence to go leaner.",
    timeAgo: "1 month ago",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  },
  {
    name: "Dave T.",
    location: "Michigan • Shop Owner",
    content: "Unexpected scrap always hit our cash flow. Now, we can plan projects knowing our revenue is safe.",
    timeAgo: "3 weeks ago",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  },
  {
    name: "Ethan L.",
    location: "Texas • Shop Owner",
    content: "Insurance for scrap sounded strange at first, but it works. Our quoting is sharper and we've landed more repeat clients.",
    timeAgo: "2 months ago",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  }
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
            Real reviews from machine shop owners who transformed their business with PartShield
          </p>
        </div>
        
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={`${testimonial.name} - Shop Owner`} 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-3">
                  <div className="text-sm font-medium text-steel-900">{testimonial.name}</div>
                  <div className="text-sm text-steel-500">{testimonial.location}</div>
                </div>
                <div className="ml-auto flex items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-steel-600">
                "{testimonial.content}"
              </p>
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
