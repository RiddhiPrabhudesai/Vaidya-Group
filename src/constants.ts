import { Project, Testimonial } from './types';
import { assetPath } from './lib/utils';

export const PROJECTS: Project[] = [
  {
    id: 'sagar',
    title: 'Sagar Society',
    tagline: 'Practical luxury and quiet living.',
    description: 'Efficiently planned premium homes in the heart of Pimpri, designed for long-term comfort and convenience.',
    status: 'Ongoing',
    category: ['Living', 'Investment', 'Future Growth'],
    location: 'Pimpri, Pune',
    image: assetPath('SagarSociety.jpg'),
    units: 42,
    highlight: '42 Premium 2 BHK Homes',
    configuration: 'Premium 2 BHK Homes',
    deliveredLine: 'Thoughtfully designed for modern professionals',
    timeline: [
      { time: '1 min', place: 'HA Ground', desc: 'Open spaces for morning walks and recreation' },
      { time: '2 mins', place: 'Tata Motors', desc: 'Minutes away from major industrial and tech hubs' },
      { time: '5 mins', place: 'DY Patil', desc: 'Easy access to top-tier educational institutions' },
      { time: '8 mins', place: 'Pimpri Metro', desc: 'Quick commutes across the city via the metro network' },
    ]
  },
  {
    id: 'aai-jagdamba',
    title: 'Aai Jagdamba Residency',
    tagline: '28 Flats | 1 BHK Homes',
    description: 'Successfully delivered and fully occupied. A completed community trusted by homeowners.',
    status: 'Completed',
    category: ['Living'],
    location: 'Near Bus Stand, Satara',
    image: assetPath('aaijagdamba.jpg'),
    units: 28,
    highlight: '28 Families Rooted in Comfort',
    configuration: '28 Flats | 1 BHK Homes',
    deliveredLine: 'Successfully delivered and fully occupied',
    timeline: [
      { time: '1 min', place: 'Shanbhag School', desc: 'Quality education right next to your home' },
      { time: '2 mins', place: 'Satara Bus Stand', desc: 'Seamless connectivity across the city and beyond' },
      { time: '3 mins', place: 'Local Markets', desc: 'Everything you need within walking distance' },
      { time: '5 mins', place: 'District Hospital', desc: 'Trusted healthcare just minutes away' },
      { time: '6 mins', place: 'Shahupuri Market', desc: 'Shopping, dining, and daily convenience nearby' },
      { time: '10 mins', place: 'NH-48 Highway', desc: 'Quick connectivity to Pune and major cities' },
    ]
  },
  {
    id: 'star-residency',
    title: 'Star Residency',
    tagline: '9 Flats | 1 BHK Homes',
    description: 'A completed community trusted by homeowners. Architectural transparency in a peaceful setting.',
    status: 'Completed',
    category: ['Living'],
    location: 'Tukaram Nagar, Satara',
    image: assetPath('starresidency.JPG'),
    units: 9,
    highlight: '9 Exclusive Urban Units',
    configuration: '9 Flats | 1 BHK Homes',
    deliveredLine: 'A completed community trusted by homeowners',
    timeline: [
      { time: '1 min', place: 'Daily Essentials', desc: 'Everyday needs just a short walk away' },
      { time: '2 mins', place: 'Schools', desc: 'Convenient access to quality education' },
      { time: '4 mins', place: 'Healthcare Clinics', desc: 'Quick access to trusted medical care' },
      { time: '5 mins', place: 'Main Market', desc: 'All your shopping and daily conveniences nearby' },
      { time: '7 mins', place: 'Satara Bus Stand', desc: 'Easy connectivity for everyday travel' },
      { time: '10 mins', place: 'NH-48 Highway', desc: 'Smooth connectivity to Pune and major cities' },
    ]
  },
  {
    id: 'aashirwad',
    title: 'Aashirwad Residency',
    tagline: '13 Flats | 2 BHK Homes',
    description: 'Successfully delivered and fully occupied. Premium homes designed for collective trust.',
    status: 'Completed',
    category: ['Living'],
    location: 'Satara',
    image: assetPath('aashirwad.JPG'),
    units: 13,
    highlight: '13 Premium Residences',
    configuration: '13 Flats | 2 BHK Homes',
    deliveredLine: 'Successfully delivered and fully occupied',
    timeline: [
      { time: '2 mins', place: 'Daily Essentials', desc: 'Everyday needs conveniently close' },
      { time: '4 mins', place: 'Schools', desc: 'Quality education within easy reach' },
      { time: '5 mins', place: 'Healthcare Facilities', desc: 'Reliable medical access nearby' },
      { time: '6 mins', place: 'Local Market', desc: 'Smooth access to shopping and daily conveniences' },
      { time: '8 mins', place: 'Satara Bus Stand', desc: 'Well-connected for daily commuting' },
      { time: '12 mins', place: 'NH-48 Highway', desc: 'Seamless travel to Pune and surrounding regions' },
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Patil',
    role: 'IT Professional',
    image: assetPath('maleavatar.png'),
    story: {
      before: 'Struggling with builders who never delivered on time.',
      decision: 'Chose Vaidya Group for their transparent cooperative model.',
      after: 'Finally living in a home built with integrity.'
    },
    quote: 'We build like someone will live here. They really lived by that.'
  },
  {
    id: '2',
    name: 'Anita Deshmukh',
    role: 'Business Owner',
    image: assetPath('femaleavatar.png'),
    story: {
      before: 'Worried about high margins and hidden costs.',
      decision: 'Trust was the deciding factor after meeting the team.',
      after: 'A sense of community that money can\'t buy.'
    },
    quote: 'The cooperative model change everything for us.'
  }
];
