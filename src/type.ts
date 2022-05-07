export type OptionsRules = [
  test: string | RegExp,
  fn: (pixels: number, parsedVal: number, prop: string) => string
][]

export interface Options {
  /**
   * 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件:
   * - 如果值是一个正则表达式，那么匹配这个正则的文件会被忽略;
   * - 如果传入的值是一个数组，那么数组里的值必须为正则;
   */
  exclude?: RegExp | RegExp[]
  /**
   * 如果设置了include，那将只有匹配到的文件才会被转换，例如只转换 'src/mobile' 下的文件 (include: /\/src\/mobile\//):
   * - 如果值是一个正则表达式，将包含匹配的文件，否则将排除该文件;
   * - 如果传入的值是一个数组，那么数组里的值必须为正则;
   */
  include?: RegExp | RegExp[]
  /**
   * 字体使用的视口单位
   *
   * @default 'vw'
   */
  fontViewportUnit?: string
  /**
   * 是否添加根据 landscapeWidth 生成的媒体查询条件;
   * @media (orientation: landscape)
   * @default false
   */
  landscape?: boolean
  /**
   * 横屏时使用的单位;
   *
   * @default 'vw'
   */
  landscapeUnit?: string
  /**
   * 横屏时使用的视口宽度;
   *
   * @default 568
   */
  landscapeWidth?: number
  /**
   * 媒体查询里的单位是否需要转换单位;
   *
   * @default false
   */
  mediaQuery?: boolean | RegExp | RegExp[]
  /**
   * 设置最小的转换数值，如果为1的话，只有大于1的值会被转换;
   *
   * @default 1
   */
  minPixelValue?: number
  /**
   * 能转化为vw的属性列表:
   * - 传入特定的CSS属性;
   * - 可以传入通配符""去匹配所有属性，例如：[''];
   * - 在属性的前或后添加"*",可以匹配特定的属性. (例如['position'] 会匹配 background-position-y);
   * - 在特定属性前加 "!"，将不转换该属性的单位 . 例如: ['*', '!letter-spacing']，将不转换letter-spacing;
   * - "!" 和 ""可以组合使用， 例如: ['', '!font*']，将不转换font-size以及font-weight等属性;
   *
   * @default ['*']
   */
  propList?: string[]
  /**
   * 自定义转换规则配置项;
   *
   * @example
   * ```js
   * { rules: [ ['path', () => {}] ] }
   * ```
   */
  rules?: OptionsRules
  /**
   * 是否直接更换属性值，而不添加备用属性;
   *
   * @default true
   */
  replace?: boolean
  /**
   * 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位:
   * - 如果传入的值为字符串的话，只要选择器中含有传入值就会被匹配;
   *    - 例如 selectorBlackList 为 ['body'] 的话，那么 .body-class 就会被忽略;
   * - 如果传入的值为正则表达式的话，那么就会依据CSS选择器是否匹配该正则;
   *    - 例如 selectorBlackList 为 [/^body$/], 那么 body 会被忽略，而 .body 不会;
   */
  selectorBlackList?: (string | RegExp)[]
  /**
   * 需要转换的单位，默认为"px";
   *
   * @default 'px'
   */
  unitToConvert?: string
  /**
   * 单位转换后保留的精度;
   *
   * @default 5
   */
  unitPrecision?: number
  /**
   * 希望使用的视口单位;
   *
   * @default 'vw'
   */
  viewportUnit?: string
  /**
   * 设计稿的视口宽度;
   *
   * @default 320
   */
  viewportWidth?: number
  viewportHeight?: number
}
