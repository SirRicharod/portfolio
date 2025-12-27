import { trigger, transition, style, query, animate } from '@angular/animations';

export const fadeAnimation = trigger('routeAnimations', [
  transition('* <=> *', [
    // 1. Initial state: hide the new page
    query(':enter', [
      style({ opacity: 0, transform: 'translateY(10px)' })
    ], { optional: true }),

    // 2. Animate the new page in
    query(':enter', [
      animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
    ], { optional: true })
  ])
]);