import { isValidHex } from "@/utils/validators";
import { defineStore } from "pinia";

export const useColourStore = defineStore('colour', {
    state: () => ({
        colourPalette: [],
        selectedColour: "hello",
        recentColours: [],
        colourError: null,
    }),



    getters: {
        getPalette: (state) => state.colourPalette,
        getSelectedColour: (state) => state.selectedColour,
        getRecentColours: (state) => state.recentColours,
        getColourError: (state) => state.colourError,
        getHexFromId: (state)=>{
            return (id) => state.colourPalette.find((col)=> col._id === id).hex_code
        }
        
    },

    actions: {
        
        setSelectedColour(colour) {
            if (this.colourPalette.includes(colour)) {
                this.selectedColour = colour;
            } else {
                console.warn('Invalid colour:', colour);
                this.colourError = `Invalid colour selected: ${colour}`


            }
        },

    
    }


})

