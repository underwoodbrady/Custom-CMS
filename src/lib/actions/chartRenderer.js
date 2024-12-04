//importing chartjs from node_modules
import { Chart } from 'chart.js/auto';
//here we are exporting const variable, which is an arrow function,
//and the arrow function takes one argument called node
export const chartRender = (node, options) => {
 const _chart = new Chart (node, options)
    return {
        update(updatedoptions) {
            _chart.data = updatedoptions.data
            _chart.update()
        },
        destroy(){
            console.log("Destroy function is called:")
            _chart.destroy()
        }
    }
}