import create from "zustand";

const uiStore = create(set => ({
    isCreateModalOpen: false,
    isDetailModalOpen: false,
    createModalBackgroundColor: 'orange',
    toggleCreateModalOpen : () => set(state =>({isCreateModalOpen: !state.isCreateModalOpen})),
    toggleDetailModalOpen: () => set(state=>({isDetailModalOpen: !state.isDetailModalOpen})),
    changeCreateModalBackgroundColor: (newColor) =>set({createModalBackgroundColor: newColor}) 
}))

export default uiStore;