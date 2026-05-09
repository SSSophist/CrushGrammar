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
        <strong>本关怎么用：</strong>不要一上来逐词翻译，先把句子压成
        <strong>谁 + 做/是 + 什么/怎么样</strong>。只要骨架稳住，长句就不会散。
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
        <strong>本关怎么用：</strong>选词填空不要先凭语感乱试。先看空格前后，判断这里大概缺名词、动词、形容词还是副词，
        再用<strong>意思和形式</strong>收口。
        <br />
        <br />
        这一关练的是“先缩小范围”，不是背词性定义。
      </>
    )
  },
  'level-3': {
    levelNumber: 3,
    title: '一个句子一个主发动机',
    body: (
      <>
        <strong>本关怎么用：</strong>看到一串动词不要慌，先找能和主语连起来、撑起整句话的
        <strong>主发动机</strong>。doing / done / to do 先降级看待。
        <br />
        <br />
        目标是先知道“真正推动句子的动作是谁”，再处理旁边的小动作。
      </>
    )
  },
  'level-4': {
    levelNumber: 4,
    title: '从句只分三大类就够了',
    body: (
      <>
        <strong>本关怎么用：</strong>看到一坨从句，先问它在句子里干嘛：
        <strong>当一个东西</strong>、<strong>修饰一个东西</strong>，还是<strong>交代背景逻辑</strong>。
        <br />
        <br />
        四六级不需要你背完整分类表，先会判断功能就够用。
      </>
    )
  },
  'level-5': {
    levelNumber: 5,
    title: '非谓语三件套',
    body: (
      <>
        <strong>本关怎么用：</strong>看到 doing / done / to do，先别急着把它当主句动词。只问三件事：
        <strong>主动感</strong>、<strong>被动感</strong>、<strong>目的感</strong>。
        <br />
        <br />
        它们多数时候是在补充主线，不是在抢主线。
      </>
    )
  },
  'level-6': {
    levelNumber: 6,
    title: '并列、转折、因果和让步',
    body: (
      <>
        <strong>本关怎么用：</strong>看到逻辑词，先判断作者是在
        <strong>同向补充</strong>、<strong>反向转折</strong>，还是给出<strong>因果方向</strong>。
        <br />
        <br />
        这一关的重点不是翻译连接词，而是读懂作者把信息往哪边推。
      </>
    )
  },
  'level-7': {
    levelNumber: 7,
    title: '修饰语和长难句压缩术',
    body: (
      <>
        <strong>本关怎么用：</strong>长句不要一口气硬翻。先
        <strong>删修饰</strong>，把句子压回主干；看懂主干后，再把细节慢慢补回来。
        <br />
        <br />
        这一关会让你知道哪些内容是主线，哪些只是长尾巴。
      </>
    )
  },
  'level-8': {
    levelNumber: 8,
    title: '时态、语态、主谓一致够用规则',
    body: (
      <>
        <strong>本关怎么用：</strong>这一关不讲完整语法体系，只做写作和翻译最后的基础分检查：
        <strong>先定时间</strong>、<strong>再看主动被动</strong>、<strong>最后查主谓一致</strong>。
        <br />
        <br />
        目的很简单：句子读得懂，写出来不犯显眼低级错。
      </>
    )
  },
  'level-9': {
    levelNumber: 9,
    title: '高频特殊结构先还原成人话',
    body: (
      <>
        <strong>本关怎么用：</strong>这一关只处理四类高频包装：
        <strong>比较</strong>、<strong>强调</strong>、<strong>倒装</strong>、<strong>形式 it</strong>。
        <br />
        <br />
        先认信号，再还原成普通句，最后回到“谁做了什么/什么怎么样”。
      </>
    )
  },
  'level-10': {
    levelNumber: 10,
    title: '总复盘：语法秒杀流程',
    body: (
      <>
        <strong>本关怎么用：</strong>这是对前 9 关的总复盘，不讲新知识，只给你考场上的
        <strong>4 步 SOP</strong>（标准操作流程）。
        <br />
        <br />
        按顺序：<strong>抓骨架 {'->'} 砍修饰 {'->'} 看逻辑 {'->'} 定词性</strong>。不管遇到什么题型，只要卡住，就顺着这四步重新看题。
      </>
    )
  }
};
