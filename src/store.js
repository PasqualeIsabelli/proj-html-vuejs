import { reactive } from "vue";

export const store = reactive({
  
});


// export function getImg(img) {
//   return new URL(img, import.meta.url).href
// }

export function onClick(imageIndex) {
  console.log(imageIndex)
}