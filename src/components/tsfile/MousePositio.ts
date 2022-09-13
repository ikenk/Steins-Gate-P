//引入需要使用的Composition API
import { ref, onMounted, onUnmounted } from 'vue'
//实现鼠标追踪器功能
function useMousePosition(){
    
    //初始化x轴和y轴的值
    const x = ref(0)
    const y = ref(0)
    
    //获取鼠标点击后x轴和y轴的值
    const updateMouse = (e: MouseEvent) => {
        x.value = e.pageX
        y.value = e.pageY
    }
	
    //鼠标点击时执行updateMouse函数
    onMounted(() => {
        document.addEventListener('click', updateMouse)
    })
	
    //鼠标点击结束后对当前点击事件执行销毁操作
    onUnmounted(() => {
        document.removeEventListener('click', updateMouse)
    })
	
    //返回x和y的值
    return {x, y}
}

//导出函数
export default useMousePosition
