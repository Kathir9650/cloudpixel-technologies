import { Check, ArrowUpRight } from 'lucide-react';
const plans=[
 {name:'Launch',price:'₹4,999',desc:'A polished online starting point for a new or small business.',items:['Up to 3 pages','Responsive design','Contact / WhatsApp button','Basic on-page SEO','One deployment'],featured:false},
 {name:'Growth',price:'₹9,999',desc:'More room to tell your story and generate enquiries.',items:['Up to 5 pages','Custom visual direction','Subtle animations','Contact form integration','Basic analytics setup'],featured:true},
 {name:'Premium',price:'₹19,999+',desc:'A more tailored experience for advanced business needs.',items:['Up to 10 pages','Advanced UI interactions','Custom functionality','Performance optimization','Deployment guidance'],featured:false}
import { Check, ArrowUpRight, Zap, Star, Crown } from 'lucide-react';
const plans = [
  {
    name: 'Launch',
    icon: Zap,
    iconColor: 'var(--accent-2)',
    price: '₹4,999',
    sub: 'starting from',
    desc: 'The perfect digital launchpad for a new or small business that wants a professional online presence fast.',
    items: [
      'Up to 3 beautifully designed pages',
      'Fully responsive, mobile-first design',
      'Contact form & WhatsApp button',
      'On-page SEO foundation',
      'One deployment included',
      'Handover with documentation',
    ],
    featured: false,
  },
  {
    name: 'Growth',
    icon: Star,
    iconColor: '#c084fc',
    price: '₹9,999',
    sub: 'starting from',
    desc: 'More room to tell your story, generate more enquiries, and make a lasting impression on every visitor.',
    items: [
      'Up to 5 pages with custom visual direction',
      'Smooth animations & micro-interactions',
      'Contact form + WhatsApp integration',
      'Google Analytics setup',
      'Blog or portfolio section',
      'Deployment + 30-day support',
    ],
    featured: true,
  },
  {
    name: 'Premium',
    icon: Crown,
    iconColor: '#f59e0b',
    price: '₹19,999+',
    sub: 'starting from',
    desc: 'A fully tailored digital experience for ambitious businesses with advanced functionality and performance needs.',
    items: [
