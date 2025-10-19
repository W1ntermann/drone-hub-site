export interface NavigationItem {
  label: string
  hasDropdown: boolean
  href?: string
  dropdownItems?: DropdownItem[]
}

export interface DropdownItem {
  label: string
  href: string
}

export interface Feature {
  title: string
  description: string
}

export interface UseCase {
  number: string
  title: string
  description: string
  image: string
}

export interface PayloadSpec {
  id: string
  title: string
  number: string
  image: string
  specs: string[]
}

export interface NewsItem {
  title: string
  excerpt: string
  date: string
  readTime: string
  image: string
}

export interface OperatingZone {
  range: string
  description: string
  image: string
  highlighted: boolean
}
