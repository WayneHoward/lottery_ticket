<template>
    <div class="home">
      <div class="number">
        <ul class="ball" @click="copy(numRedStr + ' ' + numBlueStr + '\n' + (isSportsYellow ? '02 06 14 23 26 05 07' : '02 05 06 14 23 26 07'))" style="cursor: pointer;">
          <li v-for="(item, index) in numRed" :key="index">{{item | zero}}</li>
        </ul>
        <ul @click="copy(numRedStr + ' ' + numBlueStr + '\n' + (isSportsYellow ? '02 06 14 23 26 05 07' : '02 05 06 14 23 26 07'))" style="cursor: pointer;">
          <li v-for="(item, index) in numBlue" :key="index" class="numBlue">{{item | zero}}</li>
        </ul>
      </div>
      <div class="model">
        <button @click="startSportsLottery" v-bind:class="{'isActive': isSportsYellow}">体彩大乐透</button>
        <button @click="startWelfareLottery" v-bind:class="{'isActive': isWelfareYellow}">福彩双色球</button>
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

          isWelfareYellow: false,
          isSportsYellow: true,
        };
    },
    mounted() {
      this.startSportsLottery();
    },
    methods: {
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

        // this.copy(this.numRedStr + ' ' + this.numBlueStr)
      }, 

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

        // this.copy(this.numRedStr + ' ' + this.numBlueStr)
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
