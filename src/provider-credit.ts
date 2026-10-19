const creditNumber = new Intl.NumberFormat('en-US', {
  maximumFractionDigits: 2,
})

/**
 * Append one provider's remaining credit to the model-picker heading.
 *
 * The provider id stays untouched; only the adapter's presentation name gains
 * the suffix. Unknown and unavailable balances keep the original heading.
 */
export function providerDisplayNameWithCredit(
  displayName: string,
  remaining: number | 'unlimited' | undefined,
): string {
  if (remaining === undefined) return displayName
  if (remaining === 'unlimited') return `${displayName} · ∞`
  if (!Number.isFinite(remaining)) return displayName
  return `${displayName} · ${creditNumber.format(Math.max(0, remaining))}`
}
