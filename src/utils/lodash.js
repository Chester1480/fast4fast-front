import { 
    add, 
    subtract,
    multiply,
    divide
} from 'lodash';

import isEmpty from 'lodash/isEmpty'

export function isEmpty (value){
    return isEmpty(value)
}

/**
 * 相加
 * @param {*} number1 
 * @param {*} number2 
 * @returns 
 */
export function add ( number1,number2) {
    return add(number1,number2)
}

/**
 * 相減
 * @param {*} number1 
 * @param { 被減掉的數字 } number2 
 * @returns 
 */
export function subtract ( number1,number2){
    return subtract(number1,number2)
}

/**
 * 相乘 
 * @param {*} number1 
 * @param {*} number2 
 * @returns 
 */
export function multiply ( number1,number2) {
    return multiply(number1,number2)
}

/**
 * 相除
 * @param {*} number1 
 * @param {*} number2 
 * @returns 
 */
export function divide ( number1,number2) {
    return divide(number1,number2)
}

/**
 * 四捨五入 預設兩位
 * @param { 數字 } number 
 * @param { 精度 } precision 
 * @returns 
 */
export function ceil (number,precision = 2) {
    return ceil(number,precision)
}