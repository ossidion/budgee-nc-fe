import { computed } from 'vue'

export function useCurrencyFormatter(amount, currency, locale) {
  return computed(() => {
    const formatter = new Intl.NumberFormat(locale || 'en-GB', {
      style: 'currency',
      currency: currency || 'GBP',
    })
    return formatter.format(amount || 0)
  })
}
