import { useRouter } from "vue-router"

  export const options = {
    responsive: true,
    maintainAspectRatio: false,
    onClick: function (event,elements) {

        
        router.push(`./${elements[0].index}`)
       //console.log(elements[0].index)
        console.log(this)
        
    }
  }
  