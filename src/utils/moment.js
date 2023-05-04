import moment from "moment";

/**
 * 取得今天時間
 * @param { 格式化的規格 例如: "YYYY-MM-DD" } formatString 
 * @returns 
 */
export function todayFormat(formatString = "YYYY-MM-DD"/*如果不給參數 預設就會是這個格式*/){
    return moment(moment().valueOf()).format(formatString);
}

/**
 * 計算日期相隔幾天
 * @param { 這邊放比較早的日期 } date1 
 * @param { 這邊放比較晚的日期 } date2 
 * @returns 
 */
export function diffTime (date1,date2){
    const date1TimeStamp = moment(date1); 
    let date2TimeStamp = moment(date2); 
    return date2TimeStamp.diff(date1,"day")
}

/**
 * 取得日期加上天數後的日期 ex: "2019-08-08" , 1 = "2019-08-09"
 * @param { 要加上的日期 格式: "YYYY-MM-DD" } date 
 * @param { 要加的天數 格式:1 } addDay 
 * @returns 
 */
export function dateAddDay(date,addDay){
    const dateTimeStamp = moment(date); 
    const newDate = moment(dateTimeStamp).add(addDay,"days").format("YYYY-MM-DD");
    return newDate;
}