import { useState } from 'react'

import { projects } from '@/common'

export const usePortfolio = () => {
  const [project, setProject] = useState(projects)
  const handleMouseEnter = (id: string) => {
    setProject(projects.map(el => (el.id === id ? { ...el, isShowLink: true } : el)))
  }

  const handleMouseLeave = (id: string) => {
    setProject(projects.map(el => (el.id === id ? { ...el, isShowLink: false } : el)))
  }

  return {
    handleMouseEnter,
    handleMouseLeave,
    project,
  }
}
