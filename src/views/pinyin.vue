<template>
    <div class="back">
      <el-input v-model="txt" style="width: 300px;" @input="search"></el-input>
    </div>
</template>

<script>
import { pinyin, match } from 'pinyin-pro';
import { unionBy } from 'lodash'

export default {
    props: {

    },
    data() {
        return {
          txt: '',

          list: [
            { name: '资源管理', menuUrl: '/aaa/bbb', id: 1 },
            { name: '自定义页面', menuUrl: '/ccc/ddd', id: 2 },
            { name: '混乱', menuUrl: '/eee/fff', id: 3 }
          ]
        };
    },
    mounted() {
      
    },
    methods: {
      search(txt) {
        console.log(this.searchFilter(txt, this.list));
      },
      searchFilter (inputValue, totalList) { // 工具类方法，从数组中过滤出汉字、拼音、拼音首字母相同的项
        if (inputValue === '') return []
        /* 输入内容拼音转换 */
        // 完整拼音
        const pyInput = pinyin(inputValue, { toneType: 'none', type: 'array' }).join('')
        // console.log('pyInput', pyInput)

        // 拼音首字母
        // const headerPyInput = pinyin(inputValue, { pattern: 'first', type: 'array' }).join('')
        // console.log('headerPyInput', headerPyInput)

        // 拼音首字母
        let headerPyInput = []

        return unionBy(totalList.filter(e => {
          // 列表中每项的拼音
          const pyE = pinyin(e.name, { toneType: 'none', type: 'array' }).join('').slice(0, pyInput.length)
          // console.log('pyE', pyE)

          // 列表中每项的拼音首字母
          // const headerPyE = pinyin(e.name, { pattern: 'first', type: 'array' }).join('').slice(0, headerPyInput.length)
          // console.log('headerPyE', headerPyE)

          const headerCu = match(e.name, inputValue)

          // 匹配默认首字母
          if (headerCu != null) {
            headerCu.forEach(item => {
              if (e.name.includes(e.name[item])) {
                headerPyInput.push(e)
              }
            })
          }

          // 过滤匹配
          return (e.name.includes(inputValue) && (pyE === pyInput)) || (e.menuUrl && e.menuUrl.includes(inputValue))
        }).concat(headerPyInput), 'id')
      },
    },
};
</script>

<style scoped lang="less">
  @background: rgb(33, 33, 44);
  .back {
    height: 100%;
    width: 100%;
    background-color: @background;
  }
  
</style>
