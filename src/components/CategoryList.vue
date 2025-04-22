<script setup>
import { useSettings } from './assets/stores/localSettings';
import CategoryCard from './CategoryCard.vue';
const props = defineProps({
    categories: {
        type: Array,
        required: true,
    }
})

const settingsStore = useSettings()


</script>


<template>
    <div class="categoryList">
        <CategoryCard
        v-for="(category, index) in categories"
        :key="index"
        :id="category._id"
        :name="category.name"
        :amount="category.amount"
        :percentage="category.percentage"
        :hex_code="category.hex_code"
        :currency="settingsStore.currency"
        :locale="settingsStore.locale"
        />
    </div>
</template>