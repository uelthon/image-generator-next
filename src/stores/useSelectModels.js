import { create } from 'zustand'

export const useStoreModels = create((set) => ({
  value: ['dalle', 'stablediff'],
  add: (model) => set((state) => ({
    value: [
      ...state.value,
      model
    ]
  })),
  remove: (model) => set((state) => ({
    value: state.value.filter(m => m !== model)
  }))
}))

const useSelectModels = () => {
  const models = useStoreModels((state) => state.value)
  const add = useStoreModels((state) => state.add)
  const remove = useStoreModels((state) => state.remove)

  return {
    models,
    add,
    remove
  }
}

export default useSelectModels
