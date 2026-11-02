(() => {
  const money = (amount, currency) => new Intl.NumberFormat(document.documentElement.lang || 'de', {
    style: 'currency', currency: currency || 'EUR'
  }).format(amount / 100);

  function refresh(section) {
    const picker = section.querySelector('variant-radios, variant-selects');
    if (!picker) return;
    const source = picker.querySelector('script[type="application/json"]');
    if (!source) return;
    let variants;
    try { variants = JSON.parse(source.textContent); } catch { return; }
    const fields = [...picker.querySelectorAll('fieldset, .product-form__input--dropdown')];
    const selected = fields.map(field => field.querySelector('input:checked, select')?.value);
    const current = variants.find(variant => variant.options.every((value, i) => value === selected[i]));
    const summary = section.querySelector('[data-spieltz-pack-summary]');
    const currency = summary?.dataset.currency || document.querySelector('[data-spieltz-currency]')?.dataset.spieltzCurrency || 'EUR';
    fields.forEach((field, i) => {
      const color = field.querySelector('[data-spieltz-selected-color]');
      if (color) color.textContent = selected[i] || '';
      field.querySelectorAll('input[type="radio"]').forEach(input => {
        const value = input.value;
        const match = variants.find(variant => variant.options.every((option, j) => option === (j === i ? value : selected[j])));
        const price = input.nextElementSibling?.querySelector('[data-spieltz-option-price]');
        if (price) price.textContent = match ? money(match.price, currency) : '—';
      });
    });
    if (!summary) return;
    if (!current || !current.available) {
      summary.dataset.state = current ? 'sold-out' : 'unavailable';
      summary.textContent = '⚠ ' + (current ? summary.dataset.soldOut : summary.dataset.unavailable);
      return;
    }
    const packField = fields.find(field => field.querySelector('[data-spieltz-option-price]'));
    const size = Number(packField?.querySelector('input:checked, select')?.value);
    const quantity = section.querySelector('input[name="quantity"]');
    const count = quantity?.valueAsNumber ?? Number(quantity?.value);
    if (!Number.isInteger(size) || size <= 0 || !Number.isInteger(count) || count <= 0) {
      summary.textContent = '';
      return;
    }
    summary.dataset.state = 'available';
    summary.textContent = summary.dataset.template.replace('Packung(en)', count === 1 ? 'Packung' : 'Packungen')
      .replace('pack(s)', count === 1 ? 'pack' : 'packs').replace('[packs]', count).replace('[size]', size)
      .replace('[pieces]', count * size).replace('[price]', money(current.price * count, currency));
  }

  const update = event => {
    const section = event.target.closest('[id^="MainProduct-"]');
    if (section) refresh(section);
  };
  document.addEventListener('change', update);
  document.addEventListener('input', update);
  const init = () => document.querySelectorAll('[id^="MainProduct-"]').forEach(refresh);
  let unsubscribe;
  const subscribeToVariants = () => {
    if (!unsubscribe && typeof subscribe === 'function' && typeof PUB_SUB_EVENTS !== 'undefined') {
      unsubscribe = subscribe(PUB_SUB_EVENTS.variantChange, init);
    }
  };
  document.addEventListener('shopify:section:load', init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => { init(); subscribeToVariants(); });
  else { init(); subscribeToVariants(); }
})();
