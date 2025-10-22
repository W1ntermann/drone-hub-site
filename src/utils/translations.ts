import type { NavigationItem, Feature, UseCase, PayloadSpec, NewsItem, OperatingZone } from "@/types"
import { navigationItems, features, useCases, payloads, newsItems, operatingZones } from "@/data/mock"

export const getTranslatedNavigationItems = (t: (key: string) => string): NavigationItem[] => {
  return navigationItems.map(item => {
    const cleanLabel = item.label.toLowerCase().replace(/\s+/g, '')
    
    // Special mapping for navigation items
    const navKeyMap: Record<string, string> = {
      'company': 'mock.navigation.company',
      'raybirduas': 'mock.navigation.raybird',
      'applications': 'mock.navigation.applications',
      'services': 'mock.navigation.services',
      'careers': 'mock.navigation.careers',
      'contacts': 'mock.navigation.contacts'
    }
    
    const translationKey = navKeyMap[cleanLabel] || `mock.navigation.${cleanLabel}`
    
    return {
      ...item,
      label: t(translationKey),
      dropdownItems: item.dropdownItems?.map(dropdownItem => ({
        ...dropdownItem,
        label: getDropdownTranslation(dropdownItem.label, t)
      }))
    }
  })
}

const getDropdownTranslation = (label: string, t: (key: string) => string): string => {
  const cleanLabel = label.toLowerCase()
    .replace(/\s+/g, '')
    .replace('&', '')
    .replace('precision', '')
    .replace('fire', '')
    .replace('control', '')
  
  const keyMap: Record<string, string> = {
    'aboutus': 'mock.navigation.about',
    'news': 'mock.navigation.news', 
    'mediaassets': 'mock.navigation.media',
    'deepreconnaissance': 'mock.navigation.reconnaissance',
    'targetingandprecisionfirecontrol': 'mock.navigation.targeting',
    'radiofrequencyintelligence': 'mock.navigation.rf',
    'datalinkextension': 'mock.navigation.datalink',
    'bordercontrol': 'mock.navigation.border',
    'maritimesurveillance': 'mock.navigation.maritime',
    'powerlineinspection': 'mock.navigation.powerlines',
    'pipelinemonitoring': 'mock.navigation.pipelines',
    'roadinspection': 'mock.navigation.roads',
    'wildfireprevention': 'mock.navigation.wildfire',
    'training': 'mock.navigation.training',
    'support': 'mock.navigation.support',
    'rent': 'mock.navigation.rent'
  }
  
  return keyMap[cleanLabel] ? t(keyMap[cleanLabel]) : label
}

export const getTranslatedFeatures = (t: (key: string) => string): Feature[] => {
  return features.map((feature, index) => {
    const keys = ['war_hardened', 'endurance', 'efficiency', 'versatile', 'resilience', 'speed']
    const key = keys[index]
    return {
      title: t(`mock.features.${key}`),
      description: t(`mock.features.${key}_desc`)
    }
  })
}

export const getTranslatedUseCases = (t: (key: string) => string): UseCase[] => {
  return useCases.map((useCase) => ({
    ...useCase,
    title: t(`mock.usecases.${useCase.number}.title`),
    description: t(`mock.usecases.${useCase.number}.desc`)
  }))
}

export const getTranslatedPayloads = (t: (key: string) => string): PayloadSpec[] => {
  return payloads.map(payload => {
    const baseKey = `mock.payloads.${payload.id}`
    return {
      ...payload,
      title: t(`${baseKey}.title`),
      specs: payload.specs.map((spec, index) => t(`${baseKey}.spec${index + 1}`))
    }
  })
}

export const getTranslatedOperatingZones = (t: (key: string) => string): OperatingZone[] => {
  return operatingZones.map((zone, index) => ({
    ...zone,
    description: t(`mock.operating.zone${index + 1}.desc`)
  }))
}

export const getTranslatedNewsItems = (t: (key: string) => string): NewsItem[] => {
  return newsItems.map((item, itemIndex) => ({
    ...item,
    title: t(`mock.news.item${itemIndex + 1}.title`),
    excerpt: t(`mock.news.item${itemIndex + 1}.excerpt`)
  }))
}
