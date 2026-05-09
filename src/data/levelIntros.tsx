import type { ReactNode } from 'react';

export interface LevelIntro {
  levelNumber: number;
  title: string;
  body: ReactNode;
}

export const levelIntros: Record<string, LevelIntro> = {
  'level-1': {
    levelNumber: 1,
    title: '先会看句子骨架',
    body: (
      <>
        英文句子再长，第一步也先找它的核心骨架：<strong>谁 + 做/是 + 什么/怎么样</strong>。
        <br />
        <br />
        右侧术语急救卡不用背，卡住时看一眼，把术语翻成人话：<strong>主语 = 这句话说谁</strong>，
        <strong>谓语 = 它做什么/怎么样</strong>。看懂意思后立刻回到题目，不要陷进定义里。
      </>
    )
  },
  'level-2': {
    levelNumber: 2,
    title: '词性和位置判断',
    body: (
      <>
        选词填空不要一上来凭语感乱试。先看空格前后，判断它大概缺什么词，再用
        <strong>意思和形式</strong>收口。
      </>
    )
  },
  'level-3': {
    levelNumber: 3,
    title: '一个句子一个主发动机',
    body: (
      <>
        动词再多，也不要一上来乱抓。先找能和主语连起来、撑起整句话的<strong>主发动机</strong>，
        doing / done / to do 先别急着当主发动机。
      </>
    )
  },
  'level-4': {
    levelNumber: 4,
    title: '从句只分三大类就够了',
    body: (
      <>
        四六级不考你背从句分类表。我们只训练一个考场动作：看到一块从句，先判断它是在
        <strong>当一个东西</strong>、<strong>修饰一个东西</strong>，还是<strong>交代背景逻辑</strong>。
      </>
    )
  },
  'level-5': {
    levelNumber: 5,
    title: '非谓语三件套',
    body: (
      <>
        本关不讲完整语法体系，只训练够用判断：<strong>主动感</strong>、<strong>被动感</strong>、
        <strong>目的感</strong>。先把假动作降级，再回去抓主线。
      </>
    )
  },
  'level-6': {
    levelNumber: 6,
    title: '并列、转折、因果和让步',
    body: (
      <>
        本关只训练一件事：看到逻辑词，先判断作者是在<strong>同向补充</strong>、<strong>反向转折</strong>，
        还是在给出<strong>因果方向</strong>。读懂方向，阅读题会轻很多。
      </>
    )
  },
  'level-7': {
    levelNumber: 7,
    title: '修饰语和长难句压缩术',
    body: (
      <>
        长句不是一口气硬翻。本关只训练三个动作：<strong>先删修饰</strong>、<strong>压回主干</strong>、
        <strong>补回细节</strong>。先看懂句子骨架，再慢慢把细节放回去。
      </>
    )
  },
  'level-8': {
    levelNumber: 8,
    title: '时态、语态、主谓一致够用规则',
    body: (
      <>
        这一关不讲完整语法体系，只做写作和翻译最后的基础分检查：
        <strong>先定时间</strong>、<strong>再看主动被动</strong>、<strong>最后查主谓一致</strong>。
        目的很简单：句子读得懂，写出来不犯显眼低级错。
      </>
    )
  },
  'level-9': {
    levelNumber: 9,
    title: '高频特殊结构先还原成人话',
    body: (
      <>
        这一关只处理四类高频包装：<strong>比较</strong>、<strong>强调</strong>、<strong>倒装</strong>、<strong>形式 it</strong>。
        先认信号，再还原成普通句，最后回到“谁做了什么/什么怎么样”。
      </>
    )
  }
};
