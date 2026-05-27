export interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "Engineering Manager",
    company: "TechCorp International",
    image: "/images/testimonials/sarah-chen.jpg",
    content: "Moe-Kyaw is one of the most impactful Android developers I've worked with. He architected our Jetpack Compose migration and reduced our crash rate by over 40%.",
    rating: 5
  },
  {
    name: "David Thompson",
    role: "CTO",
    company: "Digital Solutions Ltd",
    image: "/images/testimonials/david-thompson.jpg",
    content: "We hired Moe-Kyaw to lead our delivery platform Android development. He delivered a robust offline-first architecture that handled 50K+ daily drivers reliably.",
    rating: 5
  }
];
