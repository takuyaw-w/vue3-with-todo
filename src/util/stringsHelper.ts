/**
 * 頭文字を小文字に変換する
 */
export const toLowerFirst = (str: string) => {
  return str.charAt(0).toLowerCase() + str.slice(1)
}
