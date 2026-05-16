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

export const level1Steps: LessonStep[] = [
  {
    id: 'engine',
    title: '第一步：先找主发动机',
    body: [
      '主发动机就是这句话真正负责“做、是、变得、拥有、发生”的部分。',
      '它可能是普通动词、be 动词、情态动词 + 动词，或者 has become / have changed 这类完成结构。'
    ]
  },
  {
    id: 'subject',
    title: '第二步：问“谁发出这个动作”',
    body: ['找到主发动机后，往前问：谁 improve？谁 is？谁 has become？这个“谁”大概率就是主语。']
  },
  {
    id: 'object',
    title: '第三步：问“动作落到哪里”',
    body: ['如果主发动机是一个动作，再往后问：做了什么？影响了什么？帮助了谁？需要什么？']
  },
  {
    id: 'modifier',
    title: '第四步：先括掉修饰信息',
    body: [
      '介词短语、逗号中间插入的信息、名词后面很长的一坨、doing / done / to do 小尾巴，都先当作补充说明。',
      '它们很重要，但第一眼不要让它们抢走主线。'
    ]
  },
  {
    id: 'translate',
    title: '第五步：先翻译骨架，再补细节',
    body: [
      '这一步的目的不是让你翻译得很漂亮，而是防止你被长句绕晕。',
      '先只翻主干，确认核心意思；再把时间、地点、原因、修饰对象等细节补回去；最后整理成自然中文。',
      '例：The ability has become important. 这个能力变得重要。再补成：In a society filled with information, the ability to identify reliable sources has become important. 在信息很多的社会里，识别可靠来源的能力变得重要。'
    ]
  }
];

export const level1Terms: TermCard[] = [
  {
    id: 'subject',
    term: '主语',
    plain: '这句话主要在说的那个“人或东西”。',
    function: '通常负责发出动作，或者被描述成什么样。',
    examUse: '阅读长句里先找主语，你才知道这句话围绕谁展开。',
    skipForNow: '现在先不用背“主语可以由什么充当”，先会问“这句话在说谁”。'
  },
  {
    id: 'predicate',
    term: '谓语',
    plain: '句子的主发动机。',
    function: '告诉你主语“做了什么、是什么、变得怎样”。',
    examUse: '长句里动词很多，但真正撑起主句的谓语通常只有一个核心。',
    skipForNow: '现在先不用纠结谓语所有形式，先会找真正的主动作。'
  },
  {
    id: 'object',
    term: '宾语',
    plain: '动作落到的对象。',
    function: '回答“做了什么、影响了谁、需要什么”。',
    examUse: '翻译和阅读时，找到宾语能让你读懂动作指向。',
    skipForNow: '先不用背双宾语、复合宾语，后面遇到再补。'
  }
];

export const level1Examples: LessonExample[] = [
  {
    id: 'intuition',
    title: '例句 1：先读出学生依靠什么',
    sentence: 'Many students depend on their intuition when they read long English sentences.',
    engine: 'depend on',
    skeleton: 'Many students depend on their intuition.',
    details: ['when they read long English sentences 是时间信息。', '先读出“许多学生依靠语感”，再补“什么时候”。'],
    translation: '许多学生在读英文长句时依靠语感。'
  },
  {
    id: 'ability',
    title: '例句 2：主语很长也先抓核心',
    sentence: 'In a society filled with information, the ability to identify reliable sources has become increasingly important.',
    engine: 'has become',
    skeleton: 'The ability has become increasingly important.',
    details: ['In a society filled with information 是背景。', 'to identify reliable sources 是 ability 的说明。'],
    translation: '在信息爆炸的社会里，识别可靠来源的能力变得越来越重要。',
    warning: '不要看到 to identify 就以为它是主发动机。这里真正的主发动机是 has become。'
  },
  {
    id: 'policy',
    title: '例句 3：别把 introduced 当主发动机',
    sentence: 'The new policy introduced by the university helps students manage their time more effectively.',
    engine: 'helps',
    skeleton: 'The new policy helps students manage their time.',
    details: ['introduced by the university 是修饰 policy。', 'manage their time more effectively 是帮助学生做的事。'],
    translation: '大学推出的新政策帮助学生更有效地管理时间。',
    warning: 'introduced 看起来像动词，但它只是在补充说明 policy。'
  },
  {
    id: 'although',
    title: '例句 4：Although 前半句不是最终重点',
    sentence:
      'Although online courses give learners more flexibility, students who lack self-discipline may find it difficult to finish tasks on time.',
    engine: 'may find',
    skeleton: 'Students may find it difficult.',
    details: ['Although 引出让步背景。', 'students 后面的 who lack self-discipline 说明是哪类学生。'],
    translation: '虽然在线课程给学习者更多灵活性，但缺乏自律的学生可能会发现按时完成任务很难。',
    warning: 'Although 前半句不是主线结论。真正的重点常常在后半句。'
  }
];

export const level1Traps: CommonTrap[] = [
  {
    id: 'preposition-start',
    title: '坑 1：把开头介词短语当主语',
    sentence: 'In recent years, online learning has become more common among college students.',
    wrongRead: 'In recent years has become more common. 误以为“近年来”自己变得更常见。',
    whyWrong: 'In recent years 只是时间背景，相当于中文里的“近年来”。它不负责发出动作。',
    correctBreakdown: [
      '时间背景：In recent years',
      '主语：online learning',
      '主发动机：has become',
      '后面补充：more common among college students'
    ],
    skeleton: 'Online learning has become more common.',
    translation: '近年来，在线学习在大学生中变得更加普遍。',
    quickRule: '开头的 in / with / during / for 短语，先当背景，不急着当主语。'
  },
  {
    id: 'first-noun',
    title: '坑 2：看到第一个名词就急着定主语',
    sentence: 'The number of students who choose online courses has increased in many universities.',
    wrongRead: 'Students has increased. 误以为 students 是主语核心。',
    whyWrong: '真正主语核心是 The number，of students who choose online courses 是在说明“什么数量”。',
    correctBreakdown: [
      '主语核心：The number',
      '主语里的修饰：of students who choose online courses',
      '主发动机：has increased',
      '地点范围：in many universities'
    ],
    skeleton: 'The number has increased.',
    translation: '在许多大学里，选择在线课程的学生数量增加了。',
    quickRule: 'The number of ... 后面真正跟谓语的，经常是 number，不是 of 后面的名词。'
  },
  {
    id: 'too-many-verbs',
    title: '坑 3：看到多个动词就乱',
    sentence: 'The app introduced by the school helps students using online resources improve their reading speed.',
    wrongRead: '看到 introduced 就以为它是主动作，读成“这个 app 推出了学校”。',
    whyWrong: 'introduced by the school 是贴在 app 后面的说明，意思是“学校推出的”。',
    correctBreakdown: [
      '主语核心：The app',
      '修饰 app：introduced by the school',
      '主发动机：helps',
      'helps 的对象：students',
      '帮助学生做什么：improve their reading speed'
    ],
    skeleton: 'The app helps students improve their reading speed.',
    translation: '学校推出的这个应用帮助使用在线资源的学生提高阅读速度。',
    quickRule: '动词很多时，先找能和主语连起来、撑起整句话的那个。'
  },
  {
    id: 'logic-front',
    title: '坑 4：被 although / because / when 前半句带跑',
    sentence: 'Although the article looks difficult, its main idea is quite simple.',
    wrongRead: '只记住 article looks difficult，以为作者重点是“文章很难”。',
    whyWrong: 'Although 是“虽然”。它常常先承认一个情况，然后后面给真正想强调的重点。',
    correctBreakdown: ['让步背景：Although the article looks difficult', '主线：its main idea is quite simple'],
    skeleton: 'Its main idea is simple.',
    translation: '虽然这篇文章看起来很难，但它的主旨其实很简单。',
    quickRule: 'although / because / when 开头时，先读完逗号后面，再判断整句重点。'
  }
];

export const errorTagInfo = {
  'mainline-missing': {
    title: '找不到主干',
    plain: '你现在的问题不是不会语法，而是没有先问“这句话到底说谁做了什么”。',
    action: '先找主发动机，再往前找主角。每句只写出“谁 + 做/是 + 什么/怎么样”。'
  },
  'modifier-as-mainline': {
    title: '把修饰当主线',
    plain: '你容易被开头的时间、地点、原因、方式带走。',
    action: '先把开头的介词短语或逗号前背景括起来，再看主句。'
  },
  'predicate-confusion': {
    title: '谓语/非谓语混淆',
    plain: '你看到 doing、done、to do 就容易把它们当主发动机。',
    action: '从多个动词里选出真正撑起主句的那个。'
  },
  'clause-function': {
    title: '从句功能判断错',
    plain: '你还没判断出一大坨句子是在当名词、修饰名词，还是说明时间原因条件。',
    action: '先看它贴着谁，再判断它是在补谁。'
  },
  'word-position': {
    title: '词性位置判断错',
    plain: '你还没有用位置判断空里大概要什么词性。',
    action: '先看空格前后有没有冠词、介词、动词或形容词。'
  },
  'logic-reversal': {
    title: '逻辑关系读反',
    plain: '你容易被 although、but、because、when 前半句带跑。',
    action: '先判断哪一半是背景，哪一半是作者真正要强调的主线。'
  },
  'modifier-target': {
    title: '修饰对象找错',
    plain: '你还没看出 doing、done、介词短语或从句到底在补充谁。',
    action: '先看它贴得最近的名词或句子主线。'
  },
  'writing-translation-basics': {
    title: '写译基础扣分点',
    plain: '你需要先保证英文句子有主语和主发动机。',
    action: '中文翻英文先搭骨架，再补细节。'
  },
  'special-structure': {
    title: '特殊结构识别失败',
    plain: '比较、强调、倒装、it 句型暂时还没稳定识别。',
    action: '第一关先不用深挖，后面单独补。'
  },
  'term-blocked': {
    title: '术语卡住',
    plain: '你不是完全不会做，而是被主语、谓语、宾语这些词吓住了。',
    action: '把术语换成人话：主语是主角，谓语是主发动机，宾语是动作对象。'
  }
} satisfies Partial<Record<ErrorTag, ErrorTagInfo>>;

export const practiceQuestions: PracticeQuestion[] = [
  {
    id: 'q1',
    title: '题 1：选出句子骨架',
    sentence: 'In many cities, public libraries provide free access to digital resources for local residents.',
    prompt: '哪一个是这句话的骨架？',
    options: [
      { id: 'a', text: 'In many cities provide resources.' },
      { id: 'b', text: 'Public libraries provide access.' },
      { id: 'c', text: 'Digital resources provide residents.' },
      { id: 'd', text: 'Local residents provide libraries.' }
    ],
    correctOptionId: 'b',
    skeleton: 'Public libraries provide access.',
    explanation: 'In many cities 是地点背景，for local residents 是服务对象。主线是 public libraries provide access。',
    analysisParts: [
      { id: 'q1-background', kind: 'background', label: '地点背景', text: 'In many cities' },
      { id: 'q1-subject', kind: 'subject', label: '主语', text: 'public libraries' },
      { id: 'q1-predicate', kind: 'predicate', label: '主发动机', text: 'provide' },
      { id: 'q1-object', kind: 'object', label: '宾语', text: 'free access to digital resources' },
      { id: 'q1-detail', kind: 'detail', label: '服务对象', text: 'for local residents' }
    ],
    errorByOption: {
      a: ['modifier-as-mainline'],
      c: ['mainline-missing'],
      d: ['mainline-missing']
    }
  },
  {
    id: 'q2',
    title: '题 2：先找主发动机',
    sentence: "The habit of reviewing notes after class can improve students' learning efficiency.",
    prompt: '这句话的主发动机是：',
    options: [
      { id: 'a', text: 'reviewing' },
      { id: 'b', text: 'notes' },
      { id: 'c', text: 'can improve' },
      { id: 'd', text: 'learning' }
    ],
    correctOptionId: 'c',
    skeleton: 'The habit can improve efficiency.',
    explanation: 'reviewing notes 是 habit 后面的说明，不是主发动机。真正说明 habit 作用的是 can improve。',
    analysisParts: [
      {
        id: 'q2-subject',
        kind: 'subject',
        label: '主语',
        text: 'The habit of reviewing notes after class',
        note: '核心是 habit'
      },
      { id: 'q2-modifier', kind: 'modifier', label: '说明', text: 'of reviewing notes after class' },
      { id: 'q2-predicate', kind: 'predicate', label: '主发动机', text: 'can improve' },
      { id: 'q2-object', kind: 'object', label: '宾语', text: "students' learning efficiency" }
    ],
    errorByOption: {
      a: ['predicate-confusion'],
      b: ['term-blocked'],
      d: ['term-blocked']
    }
  },
  {
    id: 'q3',
    title: '题 3：找主语核心',
    sentence: 'The ability to express ideas clearly is useful in both exams and future work.',
    prompt: '这句话的主语核心是：',
    options: [
      { id: 'a', text: 'ability' },
      { id: 'b', text: 'ideas' },
      { id: 'c', text: 'exams' },
      { id: 'd', text: 'work' }
    ],
    correctOptionId: 'a',
    skeleton: 'The ability is useful.',
    explanation: 'to express ideas clearly 是 ability 的说明，主语核心是 ability。',
    analysisParts: [
      {
        id: 'q3-subject',
        kind: 'subject',
        label: '主语',
        text: 'The ability to express ideas clearly',
        note: '核心是 ability'
      },
      { id: 'q3-modifier', kind: 'modifier', label: '说明', text: 'to express ideas clearly' },
      { id: 'q3-predicate', kind: 'predicate', label: '主发动机', text: 'is' },
      { id: 'q3-complement', kind: 'complement', label: '状态补充', text: 'useful in both exams and future work' }
    ],
    errorByOption: {
      b: ['modifier-as-mainline'],
      c: ['mainline-missing'],
      d: ['mainline-missing']
    }
  },
  {
    id: 'q4',
    title: '题 4：判断哪部分是修饰',
    sentence: 'Students who manage their time well usually feel less pressure before exams.',
    prompt: '哪部分主要是在补充说明 Students？',
    options: [
      { id: 'a', text: 'who manage their time well' },
      { id: 'b', text: 'usually feel' },
      { id: 'c', text: 'less pressure' },
      { id: 'd', text: 'before exams' }
    ],
    correctOptionId: 'a',
    skeleton: 'Students feel less pressure.',
    explanation: 'who manage their time well 是 Students 后面的一坨，说明是哪类学生。',
    analysisParts: [
      {
        id: 'q4-subject',
        kind: 'subject',
        label: '主语',
        text: 'Students who manage their time well',
        note: '核心是 Students'
      },
      { id: 'q4-modifier', kind: 'modifier', label: '修饰', text: 'who manage their time well' },
      { id: 'q4-predicate', kind: 'predicate', label: '主发动机', text: 'feel' },
      { id: 'q4-complement', kind: 'complement', label: '状态补充', text: 'less pressure' },
      { id: 'q4-detail', kind: 'detail', label: '时间背景', text: 'before exams' }
    ],
    errorByOption: {
      b: ['predicate-confusion'],
      c: ['modifier-target'],
      d: ['modifier-target']
    }
  },
  {
    id: 'q5',
    title: '题 5：压缩长句',
    sentence: 'With the development of mobile technology, online learning has become a common choice for many college students.',
    prompt: '请选出压缩后的核心意思：',
    options: [
      { id: 'a', text: '移动技术发展。' },
      { id: 'b', text: '在线学习已经成为一种常见选择。' },
      { id: 'c', text: '许多大学生发展移动技术。' },
      { id: 'd', text: '移动技术选择了在线学习。' }
    ],
    correctOptionId: 'b',
    skeleton: 'Online learning has become a common choice.',
    explanation: 'With the development of mobile technology 是背景。主线是 online learning has become a common choice。',
    analysisParts: [
      {
        id: 'q5-background',
        kind: 'background',
        label: '背景',
        text: 'With the development of mobile technology'
      },
      { id: 'q5-subject', kind: 'subject', label: '主语', text: 'online learning' },
      { id: 'q5-predicate', kind: 'predicate', label: '主发动机', text: 'has become' },
      { id: 'q5-complement', kind: 'complement', label: '结果补充', text: 'a common choice' },
      { id: 'q5-detail', kind: 'detail', label: '适用对象', text: 'for many college students' }
    ],
    errorByOption: {
      a: ['modifier-as-mainline'],
      c: ['mainline-missing'],
      d: ['mainline-missing']
    }
  },
  {
    id: 'q6',
    title: '题 6：识别假主发动机',
    sentence: 'The survey conducted last month shows that many students prefer short videos to long lectures.',
    prompt: '这句话真正的主发动机是：',
    options: [
      { id: 'a', text: 'conducted' },
      { id: 'b', text: 'shows' },
      { id: 'c', text: 'prefer' },
      { id: 'd', text: 'lectures' }
    ],
    correctOptionId: 'b',
    skeleton: 'The survey shows that many students prefer short videos.',
    explanation: 'conducted last month 是修饰 survey 的，不是主发动机。shows 才是主句动作。',
    analysisParts: [
      {
        id: 'q6-subject',
        kind: 'subject',
        label: '主语',
        text: 'The survey conducted last month',
        note: '核心是 survey'
      },
      { id: 'q6-modifier', kind: 'modifier', label: '修饰', text: 'conducted last month' },
      { id: 'q6-predicate', kind: 'predicate', label: '主发动机', text: 'shows' },
      {
        id: 'q6-object',
        kind: 'object',
        label: '说明内容',
        text: 'that many students prefer short videos to long lectures'
      }
    ],
    errorByOption: {
      a: ['predicate-confusion'],
      c: ['clause-function'],
      d: ['term-blocked']
    }
  },
  {
    id: 'q7',
    title: '题 7：找动作对象',
    sentence: 'Careful planning before the final week helps students avoid unnecessary stress during exam preparation.',
    prompt: 'helps 的直接对象是：',
    options: [
      { id: 'a', text: 'Careful planning' },
      { id: 'b', text: 'students' },
      { id: 'c', text: 'avoid' },
      { id: 'd', text: 'unnecessary stress' }
    ],
    correctOptionId: 'b',
    skeleton: 'Planning helps students.',
    explanation: 'helps 后面先接 students，意思是“帮助学生”。avoid unnecessary stress 是学生去做的事。',
    analysisParts: [
      { id: 'q7-subject', kind: 'subject', label: '主语', text: 'Careful planning' },
      { id: 'q7-predicate', kind: 'predicate', label: '主发动机', text: 'helps' },
      { id: 'q7-object', kind: 'object', label: '宾语', text: 'students' },
      { id: 'q7-complement', kind: 'complement', label: '补充动作', text: 'avoid unnecessary stress' }
    ],
    errorByOption: {
      a: ['term-blocked'],
      c: ['predicate-confusion'],
      d: ['modifier-target']
    }
  },
  {
    id: 'q8',
    title: '题 8：判断主线在哪里',
    sentence: 'Although the task seemed simple at first, it required careful reading and logical thinking.',
    prompt: '这句话的主线重点更接近：',
    options: [
      { id: 'a', text: '这个任务一开始看起来简单。' },
      { id: 'b', text: '这个任务需要仔细阅读和逻辑思考。' },
      { id: 'c', text: '仔细阅读一开始很简单。' },
      { id: 'd', text: '逻辑思考让任务变简单。' }
    ],
    correctOptionId: 'b',
    skeleton: 'It required careful reading and logical thinking.',
    explanation: 'Although 引出的“虽然一开始看起来简单”是让步背景。逗号后面才是主线转折重点。',
    analysisParts: [
      {
        id: 'q8-logic',
        kind: 'logic',
        label: '让步背景',
        text: 'Although the task seemed simple at first'
      },
      { id: 'q8-subject', kind: 'subject', label: '主语', text: 'it' },
      { id: 'q8-predicate', kind: 'predicate', label: '主发动机', text: 'required' },
      {
        id: 'q8-object',
        kind: 'object',
        label: '宾语',
        text: 'careful reading and logical thinking'
      }
    ],
    errorByOption: {
      a: ['logic-reversal'],
      c: ['mainline-missing'],
      d: ['mainline-missing']
    }
  },
  {
    id: 'q9',
    title: '题 9：翻译先搭骨架',
    sentence: '良好的阅读习惯可以帮助学生更快地理解文章。',
    prompt: '下面哪个英文骨架最稳？',
    options: [
      { id: 'a', text: 'Good reading habits can help students understand articles faster.' },
      { id: 'b', text: 'Good reading habits helping students understand articles faster.' },
      { id: 'c', text: 'To understand articles faster good reading habits.' },
      { id: 'd', text: 'Students faster articles can good reading habits.' }
    ],
    correctOptionId: 'a',
    skeleton: 'Good reading habits can help students understand articles.',
    explanation: '中文先搭骨架：习惯可以帮助学生理解文章。A 有完整主语和主发动机 can help。',
    analysisParts: [
      { id: 'q9-subject', kind: 'subject', label: '主语', text: 'Good reading habits' },
      { id: 'q9-predicate', kind: 'predicate', label: '主发动机', text: 'can help' },
      { id: 'q9-object', kind: 'object', label: '宾语', text: 'students' },
      { id: 'q9-complement', kind: 'complement', label: '补充动作', text: 'understand articles faster' }
    ],
    errorByOption: {
      b: ['writing-translation-basics'],
      c: ['mainline-missing'],
      d: ['mainline-missing']
    }
  },
  {
    id: 'q10',
    title: '题 10：综合压缩',
    sentence: 'In an age when information changes rapidly, people who can judge the quality of sources are less likely to be misled.',
    prompt: '这句话的核心骨架是：',
    options: [
      { id: 'a', text: 'Information changes rapidly.' },
      { id: 'b', text: 'People are less likely to be misled.' },
      { id: 'c', text: 'Sources can judge people.' },
      { id: 'd', text: 'An age is less likely to be misled.' }
    ],
    correctOptionId: 'b',
    skeleton: 'People are less likely to be misled.',
    explanation: 'In an age when information changes rapidly 是时代背景。people who can judge the quality of sources 是主语。',
    analysisParts: [
      {
        id: 'q10-background',
        kind: 'background',
        label: '时代背景',
        text: 'In an age when information changes rapidly'
      },
      {
        id: 'q10-subject',
        kind: 'subject',
        label: '主语',
        text: 'people who can judge the quality of sources',
        note: '核心是 people'
      },
      { id: 'q10-modifier', kind: 'modifier', label: '修饰', text: 'who can judge the quality of sources' },
      { id: 'q10-predicate', kind: 'predicate', label: '主发动机', text: 'are less likely to be misled' }
    ],
    errorByOption: {
      a: ['modifier-as-mainline'],
      c: ['modifier-target'],
      d: ['mainline-missing']
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

export const remediations: RemediationItem[] = [
  {
    id: 'rem-mainline',
    tag: 'mainline-missing',
    title: '补救 A：找不到主干',
    explanation: errorTagInfo['mainline-missing'].plain,
    questions: [
      remediationQuestion(
        'a1',
        'mainline-missing',
        'In recent years, more young people have chosen flexible working styles.',
        '骨架是：',
        [
          { id: 'a', text: 'In recent years have chosen.' },
          { id: 'b', text: 'More young people have chosen working styles.' },
          { id: 'c', text: 'Working styles have chosen people.' }
        ],
        'b',
        'More young people have chosen working styles.',
        'In recent years 是时间背景，主语是 more young people。'
      ),
      remediationQuestion(
        'a2',
        'mainline-missing',
        'The rise of online communication has changed the way people maintain relationships.',
        '骨架是：',
        [
          { id: 'a', text: 'The rise has changed the way.' },
          { id: 'b', text: 'Online communication maintain relationships.' },
          { id: 'c', text: 'People has changed online communication.' }
        ],
        'a',
        'The rise has changed the way.',
        '主语核心是 The rise，has changed 是主发动机。'
      )
    ]
  },
  {
    id: 'rem-modifier',
    tag: 'modifier-as-mainline',
    title: '补救 B：把修饰当主线',
    explanation: errorTagInfo['modifier-as-mainline'].plain,
    questions: [
      remediationQuestion(
        'b1',
        'modifier-as-mainline',
        'During the final week, many students spend more time reviewing key points.',
        '先括掉的背景是：',
        [
          { id: 'a', text: 'During the final week' },
          { id: 'b', text: 'many students' },
          { id: 'c', text: 'spend more time' }
        ],
        'a',
        'Many students spend more time reviewing key points.',
        'During the final week 是时间背景，先括掉。'
      ),
      remediationQuestion(
        'b2',
        'modifier-as-mainline',
        'With enough practice, learners can read long sentences more confidently.',
        '句子主线是：',
        [
          { id: 'a', text: 'With enough practice' },
          { id: 'b', text: 'Learners can read sentences.' },
          { id: 'c', text: 'Practice can read learners.' }
        ],
        'b',
        'Learners can read sentences.',
        'With enough practice 是条件背景，不是主线。'
      )
    ]
  },
  {
    id: 'rem-predicate',
    tag: 'predicate-confusion',
    title: '补救 C：谓语/非谓语混淆',
    explanation: errorTagInfo['predicate-confusion'].plain,
    questions: [
      remediationQuestion(
        'c1',
        'predicate-confusion',
        'The report published yesterday attracted much attention.',
        '主发动机是：',
        [
          { id: 'a', text: 'published' },
          { id: 'b', text: 'attracted' },
          { id: 'c', text: 'yesterday' }
        ],
        'b',
        'The report attracted attention.',
        'published yesterday 是修饰 report，attracted 才撑起主句。'
      ),
      remediationQuestion(
        'c2',
        'predicate-confusion',
        'Students using digital tools often finish projects faster.',
        '主发动机是：',
        [
          { id: 'a', text: 'using' },
          { id: 'b', text: 'finish' },
          { id: 'c', text: 'tools' }
        ],
        'b',
        'Students finish projects.',
        'using digital tools 是修饰 students。'
      )
    ]
  },
  {
    id: 'rem-logic',
    tag: 'logic-reversal',
    title: '补救 D：逻辑关系读反',
    explanation: errorTagInfo['logic-reversal'].plain,
    questions: [
      remediationQuestion(
        'd1',
        'logic-reversal',
        'Although the method is simple, it works well for beginners.',
        '重点是：',
        [
          { id: 'a', text: '方法简单。' },
          { id: 'b', text: '它对初学者有效。' }
        ],
        'b',
        'It works well for beginners.',
        'Although 引出让步背景，逗号后是重点。'
      ),
      remediationQuestion(
        'd2',
        'logic-reversal',
        'While online tools are convenient, students still need independent thinking.',
        '重点是：',
        [
          { id: 'a', text: '在线工具方便。' },
          { id: 'b', text: '学生仍然需要独立思考。' }
        ],
        'b',
        'Students still need independent thinking.',
        'while 前半句让步，still 后面强调真正重点。'
      )
    ]
  },
  {
    id: 'rem-term',
    tag: 'term-blocked',
    title: '补救 E：术语卡住',
    explanation: errorTagInfo['term-blocked'].plain,
    questions: [
      remediationQuestion(
        'e1',
        'term-blocked',
        'The teacher explained the rule clearly.',
        '主语是谁？',
        [
          { id: 'a', text: 'The teacher' },
          { id: 'b', text: 'explained' },
          { id: 'c', text: 'the rule' }
        ],
        'a',
        'The teacher explained the rule.',
        '主语就是这句话的主角。'
      ),
      remediationQuestion(
        'e2',
        'term-blocked',
        'The result was surprising.',
        '表语是什么？',
        [
          { id: 'a', text: 'The result' },
          { id: 'b', text: 'was' },
          { id: 'c', text: 'surprising' }
        ],
        'c',
        'The result was surprising.',
        'surprising 跟在 was 后面，说明 result 怎么样。'
      )
    ]
  }
];

export const lastMinuteReview = [
  '长句先找主发动机。',
  '再问谁发出动作。',
  '介词短语、从句、非谓语先当修饰。',
  '先翻骨架，再补细节。'
];
