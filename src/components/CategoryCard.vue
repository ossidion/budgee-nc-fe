<script setup>
import { changeHSL, shadeColor } from '@/utils/chartData'
import { computed, reactive ,ref} from 'vue'
import { RouterLink } from 'vue-router'
import { useCurrencyFormatter } from '@/utils/useCurrencyFormatter';
import { deleteCategory }  from '@/api/requests'

import { useStore } from '@/components/assets/stores/currentBudgetData'

const store = useStore();



const {id,name, amount, percentage,confirmed, hex_code,currency, locale} = defineProps({
  id:String,
  name: String,
  confirmed: Boolean,
  amount: Number,
  percentage: Number,
  hex_code:String,


})
const toDeleteCategoryName = ref('')
const isDeleting = ref(true)



const borderRad = computed(()=>{
  return confirmed ? "10px 10px 10px":"10px 10px 10px 10px"
})

const bgColor = computed(()=>{
  return confirmed ? changeHSL(hex_code,{s:100,l:80}) : "#BBBBBB"
})

const detailsColor = computed(()=>{
  return confirmed ? changeHSL(hex_code,{s:100,l:30}) : "#000000"

})
const width = computed(()=>{
  return confirmed ? "100%" : "80%"

})


const styleObject = reactive({
  width:width,
  "border-radius": borderRad,
  color: detailsColor,
  backgroundColor: bgColor,
  "border-style": "solid",
  "border-color":detailsColor,
  "border-width" :"2px",
})

const styleObjectDark = reactive({
  backGround: changeHSL(hex_code,{s:100,l:30}),
  color: changeHSL(hex_code,{s:100,l:80}),
  "border-style": "solid",
  "border-color":changeHSL(hex_code,{s:100,l:80}),
  "border-width" :"2px",
})
const deleteButtonStyle = computed(() => ({
  width: '30px',
  height: '30px',
  borderRadius: '50%',
  backgroundColor: '#ff4d4f',
  color: 'white',
  border: 'none',
  fontWeight: 'bold',
  cursor: 'pointer',
}))

const formattedAmount = useCurrencyFormatter(amount,currency,locale)


  async function deleteCat(category_id) {
  try {
    const confirmDelete = confirm('Are you sure you want to delete this category?')

    if (!confirmDelete) return; 

    toDeleteCategoryName.value = name
    const response = await deleteCategory(category_id)
    console.log(response, 'Deleted successfully')
    alert('Category deleted successfully!')
    store.deleteCategoryHandler(category_id);
  } catch (err) {
    console.error(err)
    alert('Failed to delete category!')
  }
}


</script>

<template>
    <RouterLink :to="/expenses/+id" class="categoryCard" :style="styleObject">

    
      <p class="category-card-name">{{ name }}</p>
      
      <p>{{ formattedAmount }}</p>
      <div >
        <p class="category-card-percentage" >{{ percentage }}%</p>
      </div>
      

      <button v-if="isDeleting" class="deleteCategoryButton" :style="deleteButtonStyle" @click.stop.prevent="deleteCat(id)">
        ×
      </button>
  </RouterLink>
  
</template>


<style scoped>



</style>



