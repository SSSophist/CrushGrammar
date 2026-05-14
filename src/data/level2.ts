import type {
  CommonTrap,
  ErrorTag,
  ErrorTagInfo,
  LessonExample,
  LessonStep,
  PracticeQuestion,
  RemediationItem,
  TermCard
} from '../types';

export const level2Steps: LessonStep[] = [
  {
    id: 'position',
    title: '第一步：位置只负责缩小范围',
    body: [
      '先看空格前后：它像名词位、动词位、形容词位，还是副词位。',
      '这一步不是定答案，只是先排除明显不可能的词。'
    ]
  },
  {
    id: 'meaning',
    title: '第二步：意思负责定方向',
    body: [
      '同一类词里可能有好几个看着都能放进去，必须回到句意。',
      '不要只因为词性对就选它，词性对只是入场券。'
    ]
  },
  {
    id: 'form',
    title: '第三步：形式负责最后验票',
    body: [
      '最后检查单复数、时态、主动被动、固定搭配。',
      '四六级选词填空经常不是完全不会，而是败在形式没对上。'
    ]
  }
];

export const level2Terms: TermCard[] = [
  {
    id: 'part-of-speech',
    term: '词性',
    plain: '一个词在句子里大概扮演什么角色。',
    function: '帮你判断空格里能放哪类词。',
    examUse: '选词填空先按词性缩小候选范围。',
    skipForNow: '不用背完整分类，先会分名词、动词、形容词、副词。'
  },
  {
    id: 'noun',
    term: '名词',
    plain: '人、东西、事情、概念的名字。',
    function: '常常当主语、宾语，或跟在冠词、介词后面。',
    examUse: '看到 a / the / many / of 后面的空，先怀疑名词。',
    skipForNow: '不用细分可数不可数，先知道它是“东西/事情”。'
  },
  {
    id: 'verb',
    term: '动词',
    plain: '动作或变化。',
    function: '告诉你主语做什么、发生什么、变成什么。',
    examUse: '看到 can / should / will 后面的空，先怀疑动词原形。',
    skipForNow: '第二关先不深挖非谓语，下一关专门处理多个动词。'
  },
  {
    id: 'adjective',
    term: '形容词',
    plain: '给名词贴标签：什么样的。',
    function: '常常放在名词前，或跟在 be / become / seem 后。',
    examUse: '看到空格后面紧跟名词，先怀疑形容词。',
    skipForNow: '不用背比较级最高级，先看它是不是在修饰名词。'
  },
  {
    id: 'adverb',
    term: '副词',
    plain: '给动作、形容词或整句话加说明。',
    function: '说明怎么做、程度如何、整体语气。',
    examUse: '看到空格贴着动作或形容词，先怀疑副词，再看句意。',
    skipForNow: '不要看到 -ly 就无脑选，位置和意思还要对。'
  }
];

export const level2Examples: LessonExample[] = [
  {
    id: 'choice',
    title: '例句 1：位置先筛，不直接定',
    sentence: 'Online learning has become a common ____ among college students.',
    options: [
      { id: 'a', text: 'choice' },
      { id: 'b', text: 'choose' },
      { id: 'c', text: 'useful' },
      { id: 'd', text: 'quickly' }
    ],
    correctOptionId: 'a',
    engine: 'a common ____',
    skeleton: '这里先怀疑名词，再用意思确认是 choice。',
    details: [
      '位置：a common ____ 像“一个常见的东西/事情”，先排除动词和副词。',
      '意思：在线学习成为一种常见选择，choice 合适。',
      '形式：前面是 a，所以单数名词 choice 更稳。'
    ],
    translation: '在线学习已经成为大学生中的一种常见选择。',
    warning: '不要只看 common 后面就机械选名词，还要确认这个名词和全句意思合得上。'
  },
  {
    id: 'reliable',
    title: '例句 2：名词前面常要标签',
    sentence: 'Students need ____ information when they make decisions.',
    options: [
      { id: 'a', text: 'reliability' },
      { id: 'b', text: 'reliable' },
      { id: 'c', text: 'rely' },
      { id: 'd', text: 'reliably' }
    ],
    correctOptionId: 'b',
    engine: '____ information',
    skeleton: 'information 前面缺一个“什么样的”标签。',
    details: [
      '位置：空格后面是 information，先怀疑形容词。',
      '意思：做决定需要可靠信息，所以 reliable 合适。',
      '形式：reliability 是名词，reliably 是副词，都不适合直接修饰 information。'
    ],
    translation: '学生做决定时需要可靠的信息。'
  },
  {
    id: 'improve',
    title: '例句 3：情态动词后面先找动作',
    sentence: "Good habits can ____ students' learning efficiency.",
    options: [
      { id: 'a', text: 'improve' },
      { id: 'b', text: 'improvement' },
      { id: 'c', text: 'effective' },
      { id: 'd', text: 'clearly' }
    ],
    correctOptionId: 'a',
    engine: 'can ____',
    skeleton: 'can 后面先怀疑动词原形。',
    details: [
      '位置：can 后面需要动词原形。',
      '意思：好习惯可以提高学习效率，所以 improve 合适。',
      '形式：improvement 是名词，不能直接跟在 can 后面。'
    ],
    translation: '好习惯可以提高学生的学习效率。'
  }
];

export const level2Traps: CommonTrap[] = [
  {
    id: 'meaning-only',
    title: '坑 1：只看中文意思，不看位置',
    sentence: 'A balanced diet can have a positive ____ on learning efficiency.',
    wrongRead: '看到“影响”就选 affect。',
    whyWrong: 'affect 是动词，但 a positive ____ 这里需要名词。',
    correctBreakdown: ['位置：a positive ____ 先怀疑名词', '意思：对效率有积极影响', '形式：effect 是名词，affect 是动词'],
    skeleton: 'A diet can have an effect.',
    translation: '均衡饮食会对学习效率产生积极影响。',
    quickRule: '意思像不等于位置对。选词填空要先让词“站得住”。'
  },
  {
    id: 'suffix-only',
    title: '坑 2：看到 -ly 就无脑选副词',
    sentence: 'The solution is ____ for students with limited time.',
    wrongRead: 'usefully 有 -ly，所以选它。',
    whyWrong: 'is 后面是在说明 solution 怎么样，常常需要形容词。',
    correctBreakdown: ['位置：is ____ for students 像状态说明', '意思：这个方案有用', '形式：useful 是形容词，usefully 是副词'],
    skeleton: 'The solution is useful.',
    translation: '这个方案对时间有限的学生有用。',
    quickRule: '后缀只能提供线索，不能替你做最后决定。'
  },
  {
    id: 'form-last',
    title: '坑 3：词性和意思都对，形式没对',
    sentence: 'These activities ____ students to work with others.',
    wrongRead: 'encourages 意思对，就直接选。',
    whyWrong: '主语 These activities 是复数，主句动词不能用三单 encourages。',
    correctBreakdown: ['位置：主语后面缺动作', '意思：活动鼓励学生合作', '形式：复数主语用 encourage'],
    skeleton: 'Activities encourage students.',
    translation: '这些活动鼓励学生与他人合作。',
    quickRule: '最后一步一定看形式，特别是主谓一致和时态。'
  }
];

export const level2ErrorInfo: Record<ErrorTag, ErrorTagInfo> = {
  'position-ignored': {
    title: '没看位置',
    plain: '你跳过了空格前后，直接凭意思或感觉选。',
    action: '先看空前空后，判断这里大概缺哪类词，再回到句意。'
  },
  'noun-adjective-confusion': {
    title: '名词/形容词混淆',
    plain: '你把“东西本身”和“给东西贴的标签”混在一起了。',
    action: '名词前面缺“什么样的”时，优先找形容词；冠词后面常找名词。'
  },
  'verb-noun-confusion': {
    title: '动词/名词混淆',
    plain: '你选的词意思接近，但动作位和名词位没有分清。',
    action: 'can / should / will 后先找动词原形；a / the 后先怀疑名词。'
  },
  'adverb-confusion': {
    title: '副词位置误判',
    plain: '你看到 -ly 或“怎么地”就想选副词，但没确认它修饰谁。',
    action: '副词要能贴着动作、形容词或整句话起作用。'
  },
  'meaning-mismatch': {
    title: '词性对但意思不通',
    plain: '这个词能站在位置上，但放进全句意思不自然。',
    action: '位置筛完后，一定把答案放回整句读一遍。'
  },
  'form-mismatch': {
    title: '形式没对上',
    plain: '词性和意思都接近，但单复数、时态或搭配没对。',
    action: '最后检查主谓一致、单复数、固定搭配和时态。'
  },
  'mainline-missing': {
    title: '找不到主干',
    plain: '先回到第一关：找谁做了什么。',
    action: '把主线抓出来，再判断空格位置。'
  },
  'modifier-as-mainline': {
    title: '把修饰当主线',
    plain: '你被补充信息带跑了。',
    action: '先括掉修饰，再看空格所在的核心结构。'
  },
  'predicate-confusion': {
    title: '谓语/非谓语混淆',
    plain: '你还没有分清哪个动作撑起主句。',
    action: '下一关会专门解决多个动词。'
  },
  'clause-function': {
    title: '从句功能判断错',
    plain: '这题暂时不深挖从句。',
    action: '先看空格局部位置。'
  },
  'word-position': {
    title: '位置判断错',
    plain: '你没有稳定识别空格前后的信号。',
    action: '回到三步筛词法第一步。'
  },
  'logic-reversal': {
    title: '逻辑关系读反',
    plain: '你把句子的重点读反了。',
    action: '先判断转折、因果、让步。'
  },
  'modifier-target': {
    title: '修饰对象找错',
    plain: '你还没看出修饰贴着谁。',
    action: '先看它最近修饰哪个词。'
  },
  'writing-translation-basics': {
    title: '写译基础扣分点',
    plain: '写译时先保证骨架完整。',
    action: '先搭主语和主发动机。'
  },
  'special-structure': {
    title: '特殊结构识别失败',
    plain: '特殊结构后面再处理。',
    action: '第二关先不展开。'
  },
  'term-blocked': {
    title: '术语卡住',
    plain: '先把术语换成人话。',
    action: '名词是东西，动词是动作，形容词是标签，副词是补充说明。'
  }
};

export const level2PracticeQuestions: PracticeQuestion[] = [
  {
    id: 'l2-q1',
    title: '题 1：位置先筛词性',
    sentence: 'Online learning has become a practical ____ for busy college students.',
    prompt: '空格里最稳的是：',
    options: [
      { id: 'a', text: 'choice' },
      { id: 'b', text: 'choose' },
      { id: 'c', text: 'useful' },
      { id: 'd', text: 'quickly' }
    ],
    correctOptionId: 'a',
    skeleton: 'Online learning has become a practical choice.',
    explanation: '位置只是第一轮筛选：a practical ____ 先怀疑名词。再看意思，“一种实用选择”通顺；最后看形式，a 后面用单数名词 choice。',
    analysisParts: [
      { id: 'l2-q1-signal', kind: 'signal', label: '位置信号', text: 'a practical ____' },
      { id: 'l2-q1-answer', kind: 'answer', label: '最终答案', text: 'choice', note: '名词，意思和形式都对' }
    ],
    errorByOption: {
      b: ['verb-noun-confusion'],
      c: ['noun-adjective-confusion'],
      d: ['adverb-confusion']
    }
  },
  {
    id: 'l2-q2',
    title: '题 2：名词前面找标签',
    sentence: 'Readers need ____ sources when they check online claims.',
    prompt: '空格里最稳的是：',
    options: [
      { id: 'a', text: 'reliability' },
      { id: 'b', text: 'reliable' },
      { id: 'c', text: 'rely' },
      { id: 'd', text: 'reliably' }
    ],
    correctOptionId: 'b',
    skeleton: 'Readers need reliable sources.',
    explanation: '____ sources 先怀疑形容词，因为空格在给 sources 贴标签。再看意思，可靠来源最自然。',
    analysisParts: [
      { id: 'l2-q2-signal', kind: 'signal', label: '位置信号', text: '____ sources' },
      { id: 'l2-q2-answer', kind: 'answer', label: '最终答案', text: 'reliable' }
    ],
    errorByOption: {
      a: ['noun-adjective-confusion'],
      c: ['verb-noun-confusion'],
      d: ['adverb-confusion']
    }
  },
  {
    id: 'l2-q3',
    title: '题 3：can 后面先找动作',
    sentence: 'Regular review can ____ students\' exam performance.',
    prompt: '空格里最稳的是：',
    options: [
      { id: 'a', text: 'improve' },
      { id: 'b', text: 'improvement' },
      { id: 'c', text: 'effective' },
      { id: 'd', text: 'clearly' }
    ],
    correctOptionId: 'a',
    skeleton: 'Regular review can improve performance.',
    explanation: 'can ____ 先怀疑动词原形。意思上“提高表现”成立，所以 improve 最稳。',
    analysisParts: [
      { id: 'l2-q3-signal', kind: 'signal', label: '位置信号', text: 'can ____' },
      { id: 'l2-q3-answer', kind: 'answer', label: '最终答案', text: 'improve' }
    ],
    errorByOption: {
      b: ['verb-noun-confusion'],
      c: ['noun-adjective-confusion'],
      d: ['adverb-confusion']
    }
  },
  {
    id: 'l2-q4',
    title: '题 4：动作旁边看副词',
    sentence: 'Students who practice often can communicate ____ in group discussions.',
    prompt: '空格里最稳的是：',
    options: [
      { id: 'a', text: 'effective' },
      { id: 'b', text: 'effectively' },
      { id: 'c', text: 'effect' },
      { id: 'd', text: 'effectiveness' }
    ],
    correctOptionId: 'b',
    skeleton: 'Students can communicate effectively.',
    explanation: 'communicate ____ 这里是在说明“怎么沟通”，先怀疑副词。effectively 能修饰 communicate。',
    analysisParts: [
      { id: 'l2-q4-signal', kind: 'signal', label: '位置信号', text: 'communicate ____' },
      { id: 'l2-q4-answer', kind: 'answer', label: '最终答案', text: 'effectively' }
    ],
    errorByOption: {
      a: ['adverb-confusion'],
      c: ['verb-noun-confusion'],
      d: ['noun-adjective-confusion']
    }
  },
  {
    id: 'l2-q5',
    title: '题 5：a clear 后面仍要看意思',
    sentence: "The survey shows a clear ____ in students' reading habits.",
    prompt: '空格里最稳的是：',
    options: [
      { id: 'a', text: 'increase' },
      { id: 'b', text: 'increasing' },
      { id: 'c', text: 'increasingly' },
      { id: 'd', text: 'increaseful' }
    ],
    correctOptionId: 'a',
    skeleton: 'The survey shows a clear increase.',
    explanation: 'a clear ____ 先怀疑名词。再看意思，调查显示“明显增加”通顺，所以 increase 是名词用法。',
    analysisParts: [
      { id: 'l2-q5-signal', kind: 'signal', label: '位置信号', text: 'a clear ____' },
      { id: 'l2-q5-answer', kind: 'answer', label: '最终答案', text: 'increase' }
    ],
    errorByOption: {
      b: ['form-mismatch'],
      c: ['adverb-confusion'],
      d: ['meaning-mismatch']
    }
  },
  {
    id: 'l2-q6',
    title: '题 6：be 后面说明状态',
    sentence: 'Online courses are ____ for students who need flexible schedules.',
    prompt: '空格里最稳的是：',
    options: [
      { id: 'a', text: 'use' },
      { id: 'b', text: 'usefully' },
      { id: 'c', text: 'useful' },
      { id: 'd', text: 'usefulness' }
    ],
    correctOptionId: 'c',
    skeleton: 'Online courses are useful.',
    explanation: 'are ____ for students 是在说明 online courses 怎么样，先怀疑形容词。useful 最自然。',
    analysisParts: [
      { id: 'l2-q6-signal', kind: 'signal', label: '位置信号', text: 'are ____ for students' },
      { id: 'l2-q6-answer', kind: 'answer', label: '最终答案', text: 'useful' }
    ],
    errorByOption: {
      a: ['verb-noun-confusion'],
      b: ['adverb-confusion'],
      d: ['noun-adjective-confusion']
    }
  },
  {
    id: 'l2-q7',
    title: '题 7：help 后面的动作',
    sentence: 'The new app helps students ____ their time more effectively.',
    prompt: '空格里最稳的是：',
    options: [
      { id: 'a', text: 'manage' },
      { id: 'b', text: 'management' },
      { id: 'c', text: 'manager' },
      { id: 'd', text: 'careful' }
    ],
    correctOptionId: 'a',
    skeleton: 'The app helps students manage their time.',
    explanation: 'helps students ____ their time 这里是在说帮助学生做什么，先怀疑动词原形。manage their time 是固定顺手的表达。',
    analysisParts: [
      { id: 'l2-q7-signal', kind: 'signal', label: '位置信号', text: 'helps students ____ their time' },
      { id: 'l2-q7-answer', kind: 'answer', label: '最终答案', text: 'manage' }
    ],
    errorByOption: {
      b: ['verb-noun-confusion'],
      c: ['meaning-mismatch'],
      d: ['noun-adjective-confusion']
    }
  },
  {
    id: 'l2-q8',
    title: '题 8：意思像也要位置对',
    sentence: 'A quiet study space can have a positive ____ on concentration.',
    prompt: '空格里最稳的是：',
    options: [
      { id: 'a', text: 'affect' },
      { id: 'b', text: 'effective' },
      { id: 'c', text: 'effect' },
      { id: 'd', text: 'effectively' }
    ],
    correctOptionId: 'c',
    skeleton: 'A quiet study space can have a positive effect.',
    explanation: 'a positive ____ 先怀疑名词。affect 意思像“影响”，但它是动词；这里需要名词 effect。',
    analysisParts: [
      { id: 'l2-q8-signal', kind: 'signal', label: '位置信号', text: 'a positive ____' },
      { id: 'l2-q8-answer', kind: 'answer', label: '最终答案', text: 'effect' }
    ],
    errorByOption: {
      a: ['verb-noun-confusion'],
      b: ['noun-adjective-confusion'],
      d: ['adverb-confusion']
    }
  },
  {
    id: 'l2-q9',
    title: '题 9：修饰 explain',
    sentence: 'Teachers should explain difficult ideas ____ so that students can follow them.',
    prompt: '空格里最稳的是：',
    options: [
      { id: 'a', text: 'clear' },
      { id: 'b', text: 'clearly' },
      { id: 'c', text: 'clarity' },
      { id: 'd', text: 'clearer' }
    ],
    correctOptionId: 'b',
    skeleton: 'Teachers should explain ideas clearly.',
    explanation: 'explain difficult ideas ____ 是说明“怎么解释”，副词 clearly 最稳。',
    analysisParts: [
      { id: 'l2-q9-signal', kind: 'signal', label: '位置信号', text: 'explain difficult ideas ____' },
      { id: 'l2-q9-answer', kind: 'answer', label: '最终答案', text: 'clearly' }
    ],
    errorByOption: {
      a: ['adverb-confusion'],
      c: ['noun-adjective-confusion'],
      d: ['form-mismatch']
    }
  },
  {
    id: 'l2-q10',
    title: '题 10：同根词综合判断',
    sentence: 'The ability to think ____ is important when people read online information.',
    prompt: '空格里最稳的是：',
    options: [
      { id: 'a', text: 'critical' },
      { id: 'b', text: 'critically' },
      { id: 'c', text: 'criticism' },
      { id: 'd', text: 'criticize' }
    ],
    correctOptionId: 'b',
    skeleton: 'The ability to think critically is important.',
    explanation: 'think ____ 是说明“怎么思考”，先怀疑副词。critically 和 think 搭配自然。',
    analysisParts: [
      { id: 'l2-q10-signal', kind: 'signal', label: '位置信号', text: 'think ____' },
      { id: 'l2-q10-answer', kind: 'answer', label: '最终答案', text: 'critically' }
    ],
    errorByOption: {
      a: ['adverb-confusion'],
      c: ['noun-adjective-confusion'],
      d: ['verb-noun-confusion']
    }
  },
  {
    id: 'l2-q11',
    title: '题 11：四个形容词都像熟词',
    sentence: 'Many public services are now ____ online, which saves residents time.',
    prompt: '空格里最稳的是：',
    options: [
      { id: 'a', text: 'available' },
      { id: 'b', text: 'valuable' },
      { id: 'c', text: 'variable' },
      { id: 'd', text: 'various' }
    ],
    correctOptionId: 'a',
    skeleton: 'Public services are available online.',
    explanation:
      'are now ____ online 先怀疑形容词，但四个选项都很像形容词，所以要回到意思：公共服务现在可以在线获得，available online 最自然。',
    analysisParts: [
      { id: 'l2-q11-signal', kind: 'signal', label: '位置信号', text: 'are now ____ online' },
      { id: 'l2-q11-answer', kind: 'answer', label: '最终答案', text: 'available', note: 'available online = 可以在线获得' }
    ],
    errorByOption: {
      b: ['meaning-mismatch'],
      c: ['meaning-mismatch'],
      d: ['meaning-mismatch']
    }
  },
  {
    id: 'l2-q12',
    title: '题 12：全是名词时看固定搭配',
    sentence: 'The program gives rural students easier ____ to digital learning resources.',
    prompt: '空格里最稳的是：',
    options: [
      { id: 'a', text: 'approach' },
      { id: 'b', text: 'process' },
      { id: 'c', text: 'access' },
      { id: 'd', text: 'progress' }
    ],
    correctOptionId: 'c',
    skeleton: 'The program gives students access to resources.',
    explanation:
      'easier ____ to resources 位置上先怀疑名词。难点是四个选项都像名词，最后靠搭配和意思定：access to resources 表示“获得资源的机会/渠道”。',
    analysisParts: [
      { id: 'l2-q12-signal', kind: 'signal', label: '位置信号', text: 'easier ____ to digital learning resources' },
      { id: 'l2-q12-answer', kind: 'answer', label: '最终答案', text: 'access', note: 'access to 是高频搭配' }
    ],
    errorByOption: {
      a: ['meaning-mismatch'],
      b: ['meaning-mismatch'],
      d: ['meaning-mismatch']
    }
  },
  {
    id: 'l2-q13',
    title: '题 13：动词前面的程度词',
    sentence: 'Using reliable sources can ____ improve the quality of an essay.',
    prompt: '空格里最稳的是：',
    options: [
      { id: 'a', text: 'significantly' },
      { id: 'b', text: 'significant' },
      { id: 'c', text: 'significance' },
      { id: 'd', text: 'signify' }
    ],
    correctOptionId: 'a',
    skeleton: 'Reliable sources can significantly improve quality.',
    explanation:
      'can ____ improve 这里空格夹在 can 和 improve 中间，是在修饰 improve 的程度。significantly 是副词，能表示“显著地提高”。',
    analysisParts: [
      { id: 'l2-q13-signal', kind: 'signal', label: '位置信号', text: 'can ____ improve' },
      { id: 'l2-q13-answer', kind: 'answer', label: '最终答案', text: 'significantly', note: '副词修饰 improve' }
    ],
    errorByOption: {
      b: ['adverb-confusion'],
      c: ['noun-adjective-confusion'],
      d: ['verb-noun-confusion']
    }
  },
  {
    id: 'l2-q14',
    title: '题 14：is 后面不一定是普通形容词',
    sentence: 'When information is clearly organized, the time needed to find key points is ____.',
    prompt: '空格里最稳的是：',
    options: [
      { id: 'a', text: 'reduce' },
      { id: 'b', text: 'reduced' },
      { id: 'c', text: 'reduction' },
      { id: 'd', text: 'reducing' }
    ],
    correctOptionId: 'b',
    skeleton: 'The time is reduced.',
    explanation:
      'the time ... is ____ 这里不是“时间主动减少别人”，而是“时间被减少”。reduced 能和 is 组成被动/状态，形式和意思都对。',
    analysisParts: [
      { id: 'l2-q14-signal', kind: 'signal', label: '位置信号', text: 'the time needed to find key points is ____' },
      { id: 'l2-q14-answer', kind: 'answer', label: '最终答案', text: 'reduced', note: 'is reduced = 被减少' }
    ],
    errorByOption: {
      a: ['form-mismatch'],
      c: ['verb-noun-confusion'],
      d: ['form-mismatch']
    }
  },
  {
    id: 'l2-q15',
    title: '题 15：although 后半句也要站稳',
    sentence: 'The method is ____ for students under time pressure, although it looks simple.',
    prompt: '空格里最稳的是：',
    options: [
      { id: 'a', text: 'effect' },
      { id: 'b', text: 'effectively' },
      { id: 'c', text: 'effectiveness' },
      { id: 'd', text: 'effective' }
    ],
    correctOptionId: 'd',
    skeleton: 'The method is effective.',
    explanation:
      'is ____ for students 先怀疑形容词，说明 method 怎么样。although 后面只是补充“虽然简单”，主线仍然是这个方法有效，所以 effective 最稳。',
    analysisParts: [
      { id: 'l2-q15-signal', kind: 'signal', label: '位置信号', text: 'is ____ for students' },
      { id: 'l2-q15-answer', kind: 'answer', label: '最终答案', text: 'effective', note: '形容词说明 method 的性质' }
    ],
    errorByOption: {
      a: ['noun-adjective-confusion'],
      b: ['adverb-confusion'],
      c: ['noun-adjective-confusion']
    }
  }
];

const remediationQuestion = (
  id: string,
  tag: ErrorTag,
  sentence: string,
  prompt: string,
  options: { id: string; text: string }[],
  correctOptionId: string,
  skeleton: string,
  explanation: string
): PracticeQuestion => ({
  id,
  title: id.toUpperCase(),
  sentence,
  prompt,
  options,
  correctOptionId,
  skeleton,
  explanation,
  errorByOption: Object.fromEntries(options.filter((option) => option.id !== correctOptionId).map((option) => [option.id, [tag]]))
});

export const level2Remediations: RemediationItem[] = [
  {
    id: 'rem-position',
    tag: 'position-ignored',
    title: '补救 A：先看位置',
    explanation: level2ErrorInfo['position-ignored'].plain,
    questions: [
      remediationQuestion(
        'p1',
        'position-ignored',
        'The article offers a useful ____ for beginners.',
        '空格先怀疑什么？',
        [
          { id: 'a', text: 'guide' },
          { id: 'b', text: 'guidefully' },
          { id: 'c', text: 'guiding' }
        ],
        'a',
        'The article offers a useful guide.',
        'a useful ____ 先怀疑名词。'
      )
    ]
  },
  {
    id: 'rem-noun-adjective',
    tag: 'noun-adjective-confusion',
    title: '补救 B：名词和形容词分清',
    explanation: level2ErrorInfo['noun-adjective-confusion'].plain,
    questions: [
      remediationQuestion(
        'na1',
        'noun-adjective-confusion',
        'Reading builds ____ thinking habits.',
        '空格里最稳的是：',
        [
          { id: 'a', text: 'critical' },
          { id: 'b', text: 'criticism' },
          { id: 'c', text: 'criticize' }
        ],
        'a',
        'Reading builds critical thinking habits.',
        '____ thinking habits 是给 habits 贴标签，先找形容词 critical。'
      )
    ]
  },
  {
    id: 'rem-verb-noun',
    tag: 'verb-noun-confusion',
    title: '补救 C：动作位和名词位分清',
    explanation: level2ErrorInfo['verb-noun-confusion'].plain,
    questions: [
      remediationQuestion(
        'vn1',
        'verb-noun-confusion',
        'Good notes can ____ students remember key points.',
        'can 后面最稳的是：',
        [
          { id: 'a', text: 'help' },
          { id: 'b', text: 'helpful' },
          { id: 'c', text: 'helpfulness' }
        ],
        'a',
        'Good notes can help students remember key points.',
        'can 后面先找动词原形，help 才能做动作。'
      )
    ]
  },
  {
    id: 'rem-adverb',
    tag: 'adverb-confusion',
    title: '补救 D：副词看它修饰谁',
    explanation: level2ErrorInfo['adverb-confusion'].plain,
    questions: [
      remediationQuestion(
        'adv1',
        'adverb-confusion',
        'Students should review new words ____.',
        '这里最稳的是：',
        [
          { id: 'a', text: 'regular' },
          { id: 'b', text: 'regularly' },
          { id: 'c', text: 'regularity' }
        ],
        'b',
        'Students should review new words regularly.',
        'review new words ____ 是说明“怎么复习”，副词 regularly 修饰 review。'
      )
    ]
  },
  {
    id: 'rem-meaning',
    tag: 'meaning-mismatch',
    title: '补救 E：放回全句验意思',
    explanation: level2ErrorInfo['meaning-mismatch'].plain,
    questions: [
      remediationQuestion(
        'm1',
        'meaning-mismatch',
        'The teacher gave students useful ____ before the exam.',
        '空格里最稳的是：',
        [
          { id: 'a', text: 'advice' },
          { id: 'b', text: 'device' },
          { id: 'c', text: 'advise' }
        ],
        'a',
        'The teacher gave students useful advice before the exam.',
        '位置上先怀疑名词；意思上考前给的是 advice，不是 device。'
      )
    ]
  },
  {
    id: 'rem-form',
    tag: 'form-mismatch',
    title: '补救 F：最后看形式',
    explanation: level2ErrorInfo['form-mismatch'].plain,
    questions: [
      remediationQuestion(
        'f1',
        'form-mismatch',
        'These tools ____ students save time.',
        '空格里最稳的是：',
        [
          { id: 'a', text: 'helps' },
          { id: 'b', text: 'help' },
          { id: 'c', text: 'helpful' }
        ],
        'b',
        'These tools help students save time.',
        '主语 tools 是复数，动词用 help。'
      )
    ]
  }
];

export const level2Summary = [
  '位置先筛范围，不直接定答案。',
  '词性对只是入场券，意思还要通。',
  '同根词要看它在句子里站什么位置。',
  '最后检查形式：单复数、时态、搭配。'
];
