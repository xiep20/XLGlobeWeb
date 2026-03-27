/**
 * 目录树与卡片数据结构说明（JSDoc 约束）
 *
 * 供各模块 config/cards.js 或 config/tree.js 引用，保证格式统一。
 * 实际数据由各模块自行维护，此处仅作类型与字段说明。
 */

/**
 * 目录树节点
 * @typedef {Object} TreeNode
 * @property {string} id - 唯一标识
 * @property {string} label - 节点名称
 * @property {string} [icon] - 可选图标类名
 * @property {TreeNode[]} [children] - 子节点
 * @property {CardItem[]} [cards] - 叶子节点下的卡片列表（无 children 时使用）
 */

/**
 * 卡片项
 * @typedef {Object} CardItem
 * @property {string} id - 卡片唯一标识
 * @property {string} title - 卡片标题
 * @property {string} [description] - 卡片描述
 * @property {string} [image] - 图片路径或占位图
 * @property {'demo'|'md'|'link'} type - 跳转类型：demo 示例页 / md 文档 / link 外链
 * @property {string} [component] - type=demo 时，示例组件路径
 * @property {string} [path] - type=md 时，Markdown 文件路径
 * @property {string} [link] - type=link 时，外部 URL
 * @property {string[]} [tags] - 标签列表
 */

/**
 * 将扁平卡片列表转换为带单一根节点的树（无多级目录时使用）
 *
 * @param {CardItem[]} cards - 卡片列表
 * @param {string} [rootLabel='全部'] - 根节点名称
 * @returns {TreeNode}
 */
export function flatCardsToTree(cards, rootLabel = '全部') {
  return {
    id: 'root',
    label: rootLabel,
    children: [],
    cards: cards || []
  }
}

export default {}
