import { create } from "zustand";

type linkData = {
    idLink: string,
    url: string,
    shortLink: string
}
type linkState = {
    links: linkData[],
    addLink: (data: linkData) => void
}


export const useLinkStore = create<linkState>((set) => ({
    links: [],
    addLink: (data) => set((state) => ({
        links: [ ...state.links, data ]
    }))
 }))