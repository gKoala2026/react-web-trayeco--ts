
export const getSumByKey = (arr:any, key:string) => {
    return arr.reduce((accumulator: number, current: any) => accumulator + Number(current[key]), 0)
}