import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

export const notyf = new Notyf({
  duration: 3000,
  dismissible: true,
  ripple: true,
  position: {
    x: 'right',
    y: 'top',
  },
});

