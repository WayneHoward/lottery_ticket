<template>
    <div class="home">
      <div class="number">
        <!-- 大乐透/双色球 -->
        <ul v-if="!isSeven && !isHappyEight" class="ball" @click="copy(numRedStr + ' ' + numBlueStr + '\n' + (isSportsYellow ? '02 06 14 23 26 05 07' : '02 05 06 14 23 26 07'))" style="cursor: pointer;">
          <li v-for="(item, index) in numRed" :key="index">{{item | zero}}</li>
        </ul>
        <ul v-if="!isSeven && !isHappyEight" @click="copy(numRedStr + ' ' + numBlueStr + '\n' + (isSportsYellow ? '02 06 14 23 26 05 07' : '02 05 06 14 23 26 07'))" style="cursor: pointer;">
          <li v-for="(item, index) in numBlue" :key="index" class="numBlue">{{item | zero}}</li>
        </ul>
        <!-- 7星彩 -->
        <ul v-if="isSeven" class="ball" @click="copy(numRedStr + ' ' + numBlueStr + '\n' + '0 0 2 0 3 6 7')" style="cursor: pointer;">
          <li v-for="(item, index) in numRed" :key="index">{{item}}</li>
        </ul>
        <ul v-if="isSeven" @click="copy(numRedStr + ' ' + numBlueStr + '\n' + '0 0 2 0 3 6 7')" style="cursor: pointer;">
          <li v-for="(item, index) in numBlue" :key="index" class="numBlue">{{item}}</li>
        </ul>
        <!-- 快乐8 -->
        <ul v-if="isHappyEight" class="ball" @click="copy(numRedStr)" style="cursor: pointer;">
          <li v-for="(item, index) in numRed" :key="index">{{item}}</li>
        </ul>
      </div>
      <div class="model">
        <button @click="startSportsLottery" v-bind:class="{'isActive': isSportsYellow}">体彩大乐透</button>
        <button @click="startWelfareLottery" v-bind:class="{'isActive': isWelfareYellow}">福彩双色球</button>
        <button @click="startSeven" v-bind:class="{'isActive': isSeven}">7星彩</button>
        <button @click="happyEight" v-bind:class="{'isActive': isHappyEight}">快乐8</button>
        <div>
          <!-- <button
            v-clipboard:copy="numRedStr + ' ' + numBlueStr"
          >复制</button> -->
        </div>
      </div>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
          numRed: [],
          numBlue: [],
          numRedStr: '',
          numBlueStr: '',

          isWelfareYellow: false, // 双色球
          isSportsYellow: true, // 大乐透
          isSeven: false, // 七星彩
          isHappyEight: false // 快乐8
        };
    },
    mounted() {
      this.startSportsLottery();
    },
    methods: {
      // 双色球
      startWelfareLottery() {
        let redArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33];
        let redRes = [];
        for (let i = 0; i < 6; i++) {
          let index = parseInt(Math.random() * (redArr.length));
          redRes.push(redArr[index]);
          this.numRed = redRes.sort(function(a, b){return a - b});
          redArr.splice(index, 1)
          
          let arr = []
          this.numRed.forEach((item, index) => {
            arr[index] = String(item)
            if (arr[index] < 10) {
              arr[index] = '0' + item
            }
          })
          this.numRedStr = arr.join(' ')
        }

        let blueArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
        let blueRes = [];
        for (let i = 0; i < 1; i++) {
          let index = parseInt(Math.random() * (blueArr.length));
          blueRes.push(blueArr[index]);
          this.numBlue = blueRes.sort(function(a, b){return a - b});
          blueArr.splice(index, 1)

          let arr = []
          this.numBlue.forEach((item, index) => {
            arr[index] = String(item)
            if (arr[index] < 10) {
              arr[index] = '0' + item
            }
          })
          this.numBlueStr = arr.join(' ')
        }

        this.isWelfareYellow = true;
        this.isSportsYellow = false;
        this.isSeven = false;
        this.isHappyEight = false;

        // this.copy(this.numRedStr + ' ' + this.numBlueStr)
      }, 

      // 大乐透
      startSportsLottery() {
        let redArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35];
        let redRes = [];
        for (let i = 0; i < 5; i++) {
          let index = parseInt(Math.random() * (redArr.length));
          redRes.push(redArr[index]);
          this.numRed = redRes.sort(function(a, b){return a - b});
          redArr.splice(index, 1)

          let arr = []
          this.numRed.forEach((item, index) => {
            arr[index] = String(item)
            if (arr[index] < 10) {
              arr[index] = '0' + item
            }
          })
          this.numRedStr = arr.join(' ')
        }

        let blueArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        let blueRes = [];
        for (let i = 0; i < 2; i++) {
          let index = parseInt(Math.random() * (blueArr.length));
          blueRes.push(blueArr[index]);
          this.numBlue = blueRes.sort(function(a, b){return a - b});
          blueArr.splice(index, 1)
          let arr = []
          this.numBlue.forEach((item, index) => {
            arr[index] = String(item)
            if (arr[index] < 10) {
              arr[index] = '0' + item
            }
          })
          this.numBlueStr = arr.join(' ')
        }

        this.isWelfareYellow = false;
        this.isSportsYellow = true;
        this.isSeven = false;
        this.isHappyEight = false;

        // this.copy(this.numRedStr + ' ' + this.numBlueStr)
      },

      // 7星彩
      startSeven() {
        // 生成一个000000-999999之间的数字，然后转换为字符串
        let sixDigits = Math.floor(Math.random() * 1000000).toString().padStart(6, '0').split('')

        this.numRed = sixDigits

        this.numRedStr = sixDigits.join(' ')
        
        // 生成一个0-14之间的数字
        let lastDigit = Math.floor(Math.random() * 15).toString();
        
        this.numBlue = [lastDigit]

        this.numBlueStr = this.numBlue.join(' ')

        // let arr = [...sixDigits, ...[lastDigit]]

        this.isSeven = true
        this.isWelfareYellow = false
        this.isSportsYellow = false
        this.isHappyEight = false
      },
      
      // 快乐8
      happyEight() {
        // 确定随机选取的数字个数，范围从8到10
        const count = Math.floor(Math.random() * 3) + 8;
        
        // 创建一个空数组用于存放生成的数字
        let numbers = [];

        // 当数组长度小于随机确定的数字个数时，继续生成随机数字并添加到数组
        while (numbers.length < count) {
          const num = Math.floor(Math.random() * 80) + 1; // 生成1到80之间的随机数字
          // 确保生成的数字不重复
          if (!numbers.includes(num)) {
            numbers.push(num);
          }
        }

        // 对数组进行排序，可选步骤，根据需要决定是否需要
        numbers.sort((a, b) => a - b);

        this.isWelfareYellow = false;
        this.isSportsYellow = false;
        this.isSeven = false;
        this.isHappyEight = true;

        this.numRed = numbers
        this.numRedStr = numbers.join(' ')

        console.log(this.numRedStr);
      },

      copy(str) {
        this.$copyText(str).then(_ => {
          this.$message({
            type: 'success',
            message: 'Copy success!'
          })
        })
      }
    },
    filters: {
      zero(item) {
        if (item < 10) {
          return '0' + item
        } else {
          return item
        }
      }
    }
};
</script>

<style scoped lang="less">
  @background: rgb(33, 33, 44);
  @red: rgb(186, 59, 59);
  @blue: rgb(43, 92, 161);
  @gray: rgb(178, 178, 178);
  @yellow: rgb(246, 187, 105) !important;

  .home {
    height: 100%;
    width: 100%;
    padding: 0;
    background-color: @background;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;

    .number {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 50px;
      font-weight: bold;
      color: @red;

      ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
  
        li {
          text-align: center;
          margin-left: 10px;
          margin-right: 10px;
          width: 150px;
          height: 150px;
          line-height: 150px;
          border: 10px solid @red;
          border-radius: 50%;
        }
  
        .numBlue {
          color: @blue;
          border: 10px solid @blue;
        }
      }
    }

    .model {
      margin-top: 40px;
      display: flex;
      justify-content: center;
      button {
        width: 140px;
        height: 40px;
        outline: none;
        color: @gray;
        border: 3px solid @gray;
        font-size: 20px;
        font-weight: bold;
        background: none;
        border-radius: 15px;
        margin-right: 30px;
        margin-left: 30px;
        cursor: pointer;
      }
    }

    .isActive {
      color: @yellow;
      border: 3px solid @yellow;
    }
  }
</style>
