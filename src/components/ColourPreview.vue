<script setup>
import { useColourStore } from './assets/stores/colourStore';

const colourStore = useColourStore()

function handleColourClick(colour){

  colourStore.setSelectedColour(colour)
  return colourStore.getSelectedColour._id
}

</script>


<template>
    <div>
      <p>Choose Colour</p>
      <div class="flex flex-wrap gap-2">
    <div
      v-for="colour in colourStore.getPalette"
      :key="colour._id"
      :title="colour.name"
      class="w-8 h-8 border border-black rounded cursor-pointer"
      :style="{ backgroundColor: colour.hex_code }"
      @click="handleColourClick(colour)"
    >
      <div v-if="colourStore.selectedColour?.hex_code === colour.hex_code" class="w-full h-full border-4 border-white rounded-full"></div>
      <!-- {{  console.log(colourStore.setSelectedColour(colour), '<< User Colour!') }} -->
    </div>
    
  </div>



      <!-- <p>{{ colourStore.getPalette[0].name }}</p> -->
  <!-- <p><input type="submit" value="Submit"></p> -->

      <!-- <h2>Current Selected Colour:</h2>
  
      <div v-if="colourStore.getSelectedColour">
        <p>{{ colourStore.getSelectedColour }}</p>
        <div
          :style="{
            backgroundColor: colourStore.getSelectedColour,
            width: '50px',
            height: '25px',
            border: '1px solid black',
            marginTop: '4px'
          }"
        ></div>
      </div>
      <p v-else>No colour selected</p>
  
      <h3>Pick a new colour:</h3>
      <ul>
        <li
          v-for="colour in colourStore.getPalette"
          :key="colour"
          @click="colourStore.setSelectedColour(colour)"
          style="cursor: pointer;"
        >
          {{ colour }}
        </li>
      </ul> -->
    </div>
  </template>