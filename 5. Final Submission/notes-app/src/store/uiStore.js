import create from "zustand";

const uiStore = create(set => ({
    isCreateModalOpen: false,
    isDetailModalOpen: false,
    toggleCreateModalOpen : () => set(state =>({isCreateModalOpen: !state.isCreateModalOpen})),
    toggleDetailModalOpen: () => set(state=>({isDetailModalOpen: !state.isDetailModalOpen}))
}))

export default uiStore;