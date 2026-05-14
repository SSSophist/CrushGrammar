import type { LevelMeta } from '../types';

export const levels: LevelMeta[] = [
  { 
    id: 'level-1', number: 1, title: '先会看句子骨架', promise: '先抓谁做了什么', 
    group: { 'three-day': 'Day 1: 句子骨架', 'five-day': 'Day 1: 基础骨架与词性' }, 
    status: 'open' 
  },
  { 
    id: 'level-2', number: 2, title: '词性和位置判断', promise: '选词填空先看位置', 
    group: { 'three-day': 'Day 1: 句子骨架', 'five-day': 'Day 1: 基础骨架与词性' }, 
    status: 'open' 
  },
  { 
    id: 'level-3', number: 3, title: '一个句子一个主发动机', promise: '动词再多也先找主线', 
    group: { 'three-day': 'Day 1: 句子骨架', 'five-day': 'Day 2: 主干动作与从句' }, 
    status: 'open' 
  },
  { 
    id: 'level-4', number: 4, title: '从句只分三大类就够了', promise: '判断一坨句子在干嘛', 
    group: { 'three-day': 'Day 2: 扩展与长难句', 'five-day': 'Day 2: 主干动作与从句' }, 
    status: 'open' 
  },
  { 
    id: 'level-5', number: 5, title: '非谓语三件套', promise: '看懂 doing / done / to do', 
    group: { 'three-day': 'Day 2: 扩展与长难句', 'five-day': 'Day 3: 非谓语与句间逻辑' }, 
    status: 'open' 
  },
  { 
    id: 'level-6', number: 6, title: '并列、转折、因果和让步', promise: '读懂作者逻辑方向', 
    group: { 'three-day': 'Day 2: 扩展与长难句', 'five-day': 'Day 3: 非谓语与句间逻辑' }, 
    status: 'open' 
  },
  { 
    id: 'level-7', number: 7, title: '修饰语和长难句压缩术', promise: '把长句压回主干', 
    group: { 'three-day': 'Day 2: 扩展与长难句', 'five-day': 'Day 4: 长难句与写译基础' }, 
    status: 'open' 
  },
  { 
    id: 'level-8', number: 8, title: '时态、语态、主谓一致够用规则', promise: '写译少扣基础分', 
    group: { 'three-day': 'Day 3: 写译与考场冲刺', 'five-day': 'Day 4: 长难句与写译基础' }, 
    status: 'open' 
  },
  { 
    id: 'level-9', number: 9, title: '高频特殊结构速通', promise: '识别比较、强调、倒装等', 
    group: { 'three-day': 'Day 3: 写译与考场冲刺', 'five-day': 'Day 5: 特殊结构与总复盘' }, 
    status: 'open' 
  },
  { 
    id: 'level-10', number: 10, title: '总复盘：考场秒杀流程', promise: '考场固定检查顺序', 
    group: { 'three-day': 'Day 3: 写译与考场冲刺', 'five-day': 'Day 5: 特殊结构与总复盘' }, 
    status: 'open' 
  }
];
