import { computed } from "vue"

export function toPrettyDate(date){
    const date_ = new Date(date)
    return computed(()=> date_.getUTCDate() + "/" + (date_.getUTCMonth() + 1) + "/" + date_.getUTCFullYear())
}