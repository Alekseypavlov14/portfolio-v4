export type Selector<T> = (item: T) => number

export class Comparisons {
  static getMaximumBy<T>(items: T[], selector: Selector<T>) {
    let maximumItem: T = items[0]

    items.forEach(item => {
      if (selector(item) > selector(maximumItem)) maximumItem = item
    })

    return maximumItem
  }
  
  static getMinimumBy<T>(items: T[], selector: Selector<T>): T {
    let minimumItem: T = items[0]
  
    items.forEach(item => {
      if (selector(item) < selector(minimumItem)) minimumItem = item
    })
  
    return minimumItem
  }

  static filterByGreaterThan<T>(items: T[], selector: Selector<T>, value: number) {
    return items.filter(item => selector(item) > value)
  }

  static filterByGreaterOrEqualThan<T>(items: T[], selector: Selector<T>, value: number) {
    return items.filter(item => selector(item) >= value)
  }
  
  static filterByLessThan<T>(items: T[], selector: Selector<T>, value: number) {
    return items.filter(item => selector(item) < value)
  }
  
  static filterByLessOrEqualThan<T>(items: T[], selector: Selector<T>, value: number) {
    return items.filter(item => selector(item) <= value)
  }

  static withinDiapason(min: number, value: number, max: number): number {
    if (value > max) return max
    if (value < min) return min
    return value
  }

  static sortAscendingBy<T>(items: T[], selector: Selector<T>) {
    return items.toSorted((a, b) => selector(a) - selector(b))
  }

  static sortDescendingBy<T>(items: T[], selector: Selector<T>) {
    return Comparisons.sortAscendingBy(items, selector).toReversed()
  }
}