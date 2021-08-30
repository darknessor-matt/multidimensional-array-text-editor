import { animate, state, style, transition, trigger } from '@angular/animations';

export function slideToRight() {
    return trigger('slideToRight', [
        state('show', style({
            transform: 'translateX(15px)'
        })),
        state('hidden', style({
            transform: 'translateX(-250px)'
        })),
        transition('show => hidden', [
            animate('1.5s ease-in-out')
        ]),
        transition('hidden => show', [
            animate('1.5s ease-in-out')
        ])
    ]);
}

export function slideShowAnimation() {
    return trigger('slideShowAnimation', [
        state('shown', style({ opacity: 1, transform: 'translateX(0%) translateY(0%)' })),
        state('no-animation', style({ opacity: 0 })),
        state('hidden', style({ opacity: 0 })),
        state('bottom', style({ opacity: 1, transform: 'translateY(100%)' })),
        state('top', style({ opacity: 1, transform: 'translateY(-100%)' })),
        state('left', style({ opacity: 1, transform: 'translateX(-100%)' })),
        state('right', style({ opacity: 1, transform: 'translateX(100%)' })),
        transition('shown => hidden', animate('0ms 500ms')),
        transition('hidden => shown', animate('500ms')),
        transition('bottom => shown', animate('500ms')),
        transition('top => shown', animate('500ms')),
        transition('left => shown', animate('500ms')),
        transition('right => shown', animate('500ms'))
    ]);
}