/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 张泽涛
 * @LastEditors: 张泽涛
 * @LastEditTime: 2021-04-26 20:05:16
 */
import vue from 'vue';
import dayjs from 'dayjs'
vue.filter('date',(value, format = 'YYYY-MM-DD')=>{
  return dayjs(value).format(format)
})