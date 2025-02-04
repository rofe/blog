import { createTag } from '../block-helpers.js';

export default function decorate($block) {
  const $header = document.querySelector('header');
  const $div = $block.firstChild;
  const $a = $block.querySelector('a');
  const $close = createTag('a', { class: 'sticky-header-close' });
  const $closeIcon = createTag('img', { class: 'sticky-header-close-icon', src: '/blocks/sticky-header/close.svg' });

  $header.parentNode.insertBefore($block, $header.nextSibling);

  $a.classList.add('button');
  $a.target = '_blank';

  $close.addEventListener('click', () => {
    $block.remove();
  });

  $div.append($close);
  $close.append($closeIcon);
}
