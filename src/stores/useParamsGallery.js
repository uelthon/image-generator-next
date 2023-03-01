import { create } from 'zustand'

const useParamsStore = create((set) => ({
  params: {
    limit: 8,
    search: '',
    orderby: 'name',
    dir: -1,
    modelos: ['Dall-E', 'Stable Diffusion']
  },
  setParams: (param, value) => set((state) => ({
    params: {
      ...state.params,
      [param]: value
    }
  }))
}))

const useParamsGallery = () => {
  const params = useParamsStore((state) => state.params)
  const setParams = useParamsStore((state) => state.setParams)

  return {
    params,
    setParams
  }
}

export default useParamsGallery
