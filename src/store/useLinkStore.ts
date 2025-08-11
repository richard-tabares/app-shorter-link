import { create } from "zustand";
import { persist } from "zustand/middleware";

type linkData = {
    idLink: string,
    url: string,
    shortLink: string
}
type linkState = {
    links: linkData[],
    addLink: (data: linkData) => void
}


export const useLinkStore = create<linkState>()(
    persist(
        (set) => ({
            links: [],
            addLink: (data) => set((state) => ({
                links: [data, ...state.links]
            }))
        }), { name: 'shortlinks' }))