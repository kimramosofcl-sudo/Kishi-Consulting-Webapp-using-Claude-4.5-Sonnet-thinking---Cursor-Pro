export interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

export interface TestimonialCardProps {
  rating: number;
  text: string;
  authorName: string;
  authorTitle: string;
  authorInitials: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  service?: string;
  message?: string;
}

export interface StatBoxProps {
  number: string;
  label: string;
}

export interface InfoItemProps {
  icon: string;
  title: string;
  content: string;
}

export interface NavLink {
  href: string;
  label: string;
}

