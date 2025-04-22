import { computed } from 'vue'

export function useCurrencyFormatter(amount, currency, locale) {
  return computed(() => {
    const formatter = new Intl.NumberFormat(locale.value || 'en-GB', {
      style: 'currency',
      currency: currency.value || 'GBP',
    })
    return formatter.format(amount.value || 0)
  })
}
