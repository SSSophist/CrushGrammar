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

export const level5Steps: LessonStep[] = [
  {
    id: 'ing',
    title: '第一步：看到 -ing，先想主动感',
    body: [
      'doing 很像动词，但很多时候不是主发动机，而是在说明“主动做这件事的人/物”。',
      '够用判断：它贴着名词，多半是主动修饰；它放句首，多半是背景或方式。'
    ]
  },
  {
    id: 'done',
    title: '第二步：看到 done，先想被动感',
    body: [
      'done 多半表示“被做过 / 已完成”，常常贴着名词补充来源、状态、特点。',
      '读长句时先把 done 块括起来，再找后面真正撑起主线的动词。'
    ]
  },
  {
    id: 'to-do',
    title: '第三步：看到 to do，先想目的感',
    body: [
      'to do 常常表示“为了做 / 要去做 / 用来做”，不是一上来就当主发动机。',
      '如果它贴着 ability、way、chance 这类词，往往是在说明这个名词的用途或内容。'
    ]
  }
];

export const level5Terms: TermCard[] = [
  {
    id: 'non-finite',
    term: '非谓语',
    plain: '看起来像动作，但这次没有资格当主句主发动机。',
    function: '它通常负责修饰、补充目的、说明状态。',
    examUse: '长句里先把它降级，主线就不会被抢走。',
    skipForNow: '不用背动名词、分词、不定式的完整体系。'
  },
  {
    id: 'doing',
    term: 'doing',
    plain: '常带主动感：谁正在做、主动做、用来做。',
    function: '经常修饰前面的名词，或交代方式/背景。',
    examUse: '看到 using / choosing / improving，先问它是不是贴着某个名词。',
    skipForNow: '不用细分现在分词和动名词，先看它在句子里干嘛。'
  },
  {
    id: 'done',
    term: 'done',
    plain: '常带被动感或完成感：被设计的、被收集的、已完成的。',
    function: '常常贴着名词，补充这个名词的来源、状态、特点。',
    examUse: '阅读里 done 块特别容易冒充主发动机，要先降级。',
    skipForNow: '不用背过去分词所有用法，先抓“被动/完成”。'
  }
];

export const level5Examples: LessonExample[] = [
  {
    id: 'active-label',
    title: '例句 1：主动修饰先降级',
    sentence: 'Students using online tools can finish the task faster.',
    options: [
      { id: 'a', text: 'using online tools 修饰 Students' },
      { id: 'b', text: 'using 是整句主发动机' },
      { id: 'c', text: 'tools 是整句主语' },
      { id: 'd', text: 'faster 修饰 Students' }
    ],
    correctOptionId: 'a',
    engine: 'Students can finish the task.',
    skeleton: 'using online tools 说明是哪类 Students，主线是 Students can finish the task.',
    details: ['Students 是主角。', 'using online tools 是主动修饰。', 'can finish 才是主发动机。'],
    translation: '使用在线工具的学生能更快完成任务。',
    warning: '看到 -ing 不要立刻翻成主动作，先看它是不是贴着名词。'
  },
  {
    id: 'passive-label',
    title: '例句 2：被动修饰先括起来',
    sentence: 'The data collected from surveys shows a clear trend.',
    options: [
      { id: 'a', text: 'collected from surveys 修饰 data' },
      { id: 'b', text: 'collected 是整句主发动机' },
      { id: 'c', text: 'surveys shows trend' },
      { id: 'd', text: 'trend 修饰 surveys' }
    ],
    correctOptionId: 'a',
    engine: 'The data shows a trend.',
    skeleton: 'collected from surveys 是被动修饰，shows 才是主线。',
    details: ['data 是被收集来的。', 'collected from surveys 说明 data 的来源。', 'shows a clear trend 是句子重点。'],
    translation: '从调查中收集来的数据显示出一个清晰趋势。'
  },
  {
    id: 'purpose-label',
    title: '例句 3：目的开头先当背景',
    sentence: 'To save time, readers should focus on key sentences.',
    options: [
      { id: 'a', text: 'To save time 交代目的' },
      { id: 'b', text: 'time 是整句主语' },
      { id: 'c', text: 'save 是主发动机' },
      { id: 'd', text: 'key sentences 修饰 readers' }
    ],
    correctOptionId: 'a',
    engine: 'Readers should focus on key sentences.',
    skeleton: 'To save time 是目的背景，主线在逗号后。',
    details: ['to do 开头常表示“为了”。', 'readers 是主语。', 'should focus 是主发动机。'],
    translation: '为了节省时间，读者应该关注关键句。'
  }
];

export const level5Traps: CommonTrap[] = [
  {
    id: 'ing-steals',
    title: '坑 1：主动修饰抢主线',
    sentence: 'People reading on phones may miss important details.',
    wrongRead: 'reading 是整句主发动机。',
    whyWrong: 'reading on phones 修饰 People，主线是 People may miss details。',
    correctBreakdown: ['主语：People', '主动修饰：reading on phones', '主发动机：may miss'],
    skeleton: 'People may miss details.',
    translation: '在手机上阅读的人可能会漏掉重要细节。',
    quickRule: '-ing 贴着名词时，先按“什么样的人/物”处理。'
  },
  {
    id: 'done-steals',
    title: '坑 2：被动修饰抢主线',
    sentence: 'The advice given by the teacher helped many students.',
    wrongRead: 'given 是整句主发动机。',
    whyWrong: 'given by the teacher 修饰 advice，helped 才是主线。',
    correctBreakdown: ['主语：The advice', '被动修饰：given by the teacher', '主发动机：helped'],
    skeleton: 'The advice helped students.',
    translation: '老师给出的建议帮助了许多学生。',
    quickRule: 'done 后面如果还有正式动词，先把 done 块降级。'
  },
  {
    id: 'purpose-steals',
    title: '坑 3：目的背景当主线',
    sentence: 'To answer the question correctly, students need to read the sentence carefully.',
    wrongRead: 'answer 是整句主发动机。',
    whyWrong: 'To answer the question correctly 是目的背景，主线是 students need to read。',
    correctBreakdown: ['目的背景：To answer the question correctly', '主线：students need to read the sentence'],
    skeleton: 'Students need to read the sentence.',
    translation: '为了正确回答问题，学生需要仔细读句子。',
    quickRule: 'to do 开头先翻成“为了……”，再等主句出现。'
  }
];

export const level5ErrorInfo: Partial<Record<ErrorTag, ErrorTagInfo>> = {
  'predicate-confusion': {
    title: '假动作抢主发动机',
    plain: '你把 doing / done / to do 这种看起来像动作的形式当成了主句发动机。',
    action: '先找有没有更正式的主句动词，再决定这块是不是该降级。'
  },
  'modifier-target': {
    title: '修饰对象找错',
    plain: '你没有看清这块非谓语到底贴着哪个名词。',
    action: '看它前面最近且合理的名词，先当这个名词的补充说明。'
  },
  'modifier-as-mainline': {
    title: '把修饰当主线',
    plain: '你把补充说明读成了整句核心。',
    action: '把修饰块括起来，再看剩下的句子能不能独立成主线。'
  },
  'logic-reversal': {
    title: '目的/背景读成重点',
    plain: '你被句首目的或背景带跑，没有抓住主句。',
    action: '句首 to do 先翻成“为了……”，逗号后再找主线。'
  },
  'mainline-missing': {
    title: '主线没压出来',
    plain: '你还没有把句子压回“谁 + 主发动机 + 什么”。',
    action: '先把非谓语块降级，再找主语和正式动词。'
  },
  'term-blocked': {
    title: '术语卡住',
    plain: '你被非谓语这个名字吓住了，其实只需要判断它的功能。',
    action: '用主动感、被动感、目的感三句话先读懂句子。'
  }
};

export const level5PracticeQuestions: PracticeQuestion[] = [
  {
    id: 'l5-q1',
    title: '主动修饰',
    sentence: 'Students using online dictionaries can understand new words faster.',
    prompt: 'using online dictionaries 在句子里干嘛？',
    options: [
      { id: 'a', text: '主动修饰：说明 Students' },
      { id: 'b', text: '整句主发动机' },
      { id: 'c', text: '被动修饰 dictionaries' },
      { id: 'd', text: '目的背景' }
    ],
    correctOptionId: 'a',
    skeleton: 'Students can understand new words.',
    explanation: 'using online dictionaries 贴着 Students，说明是哪类学生；can understand 才是主发动机。',
    analysisParts: [
      { id: 'l5-q1-subject', kind: 'subject', label: '主语', text: 'Students' },
      { id: 'l5-q1-modifier', kind: 'modifier', label: '主动感修饰', text: 'using online dictionaries' },
      { id: 'l5-q1-predicate', kind: 'predicate', label: '主发动机', text: 'can understand' },
      { id: 'l5-q1-object', kind: 'object', label: '对象', text: 'new words' }
    ],
    errorByOption: { b: ['predicate-confusion'], c: ['modifier-target'], d: ['logic-reversal'] }
  },
  {
    id: 'l5-q2',
    title: '被动修饰',
    sentence: 'The method designed for beginners works well.',
    prompt: 'designed for beginners 在句子里干嘛？',
    options: [
      { id: 'a', text: '目的背景' },
      { id: 'b', text: '被动修饰：说明 The method' },
      { id: 'c', text: '整句主发动机' },
      { id: 'd', text: '修饰 beginners' }
    ],
    correctOptionId: 'b',
    skeleton: 'The method works well.',
    explanation: 'method 是被设计出来的，designed for beginners 修饰 method；works 才是主线。',
    analysisParts: [
      { id: 'l5-q2-subject', kind: 'subject', label: '主语', text: 'The method' },
      { id: 'l5-q2-modifier', kind: 'modifier', label: '被动感修饰', text: 'designed for beginners' },
      { id: 'l5-q2-predicate', kind: 'predicate', label: '主发动机', text: 'works' },
      { id: 'l5-q2-detail', kind: 'detail', label: '程度', text: 'well' }
    ],
    errorByOption: { a: ['logic-reversal'], c: ['predicate-confusion'], d: ['modifier-target'] }
  },
  {
    id: 'l5-q3',
    title: '目的背景',
    sentence: 'To reduce stress, many students exercise after class.',
    prompt: 'To reduce stress 在句子里干嘛？',
    options: [
      { id: 'a', text: '主动修饰 students' },
      { id: 'b', text: '被动修饰 stress' },
      { id: 'c', text: '目的背景：为了减压' },
      { id: 'd', text: '整句主语' }
    ],
    correctOptionId: 'c',
    skeleton: 'Many students exercise.',
    explanation: 'To reduce stress 在句首表示目的，主线是 many students exercise。',
    analysisParts: [
      { id: 'l5-q3-background', kind: 'logic', label: '目的感背景', text: 'To reduce stress' },
      { id: 'l5-q3-subject', kind: 'subject', label: '主语', text: 'many students' },
      { id: 'l5-q3-predicate', kind: 'predicate', label: '主发动机', text: 'exercise' },
      { id: 'l5-q3-detail', kind: 'detail', label: '时间', text: 'after class' }
    ],
    errorByOption: { a: ['modifier-target'], b: ['modifier-target'], d: ['mainline-missing'] }
  },
  {
    id: 'l5-q4',
    title: '名词后长尾',
    sentence: 'The ability to judge sources helps readers avoid false information.',
    prompt: 'to judge sources 在句子里干嘛？',
    options: [
      { id: 'a', text: '说明 ability 的内容' },
      { id: 'b', text: '整句主发动机' },
      { id: 'c', text: '修饰 readers' },
      { id: 'd', text: '被动修饰 sources' }
    ],
    correctOptionId: 'a',
    skeleton: 'The ability helps readers.',
    explanation: 'to judge sources 贴着 ability，说明是什么能力；helps 才是主发动机。',
    analysisParts: [
      { id: 'l5-q4-subject', kind: 'subject', label: '主语', text: 'The ability' },
      { id: 'l5-q4-modifier', kind: 'modifier', label: '目的/内容补充', text: 'to judge sources' },
      { id: 'l5-q4-predicate', kind: 'predicate', label: '主发动机', text: 'helps' },
      { id: 'l5-q4-object', kind: 'object', label: '对象', text: 'readers' }
    ],
    errorByOption: { b: ['predicate-confusion'], c: ['modifier-target'], d: ['modifier-target'] }
  },
  {
    id: 'l5-q5',
    title: '主动方式',
    sentence: 'By comparing several examples, students can find the common pattern.',
    prompt: 'comparing several examples 在句子里干嘛？',
    options: [
      { id: 'a', text: '方式背景：通过比较例子' },
      { id: 'b', text: '整句主发动机' },
      { id: 'c', text: '被动修饰 examples' },
      { id: 'd', text: '当 students 的主语' }
    ],
    correctOptionId: 'a',
    skeleton: 'Students can find the pattern.',
    explanation: 'By comparing... 交代方式，主线是 students can find the common pattern。',
    analysisParts: [
      { id: 'l5-q5-background', kind: 'background', label: '方式背景', text: 'By comparing several examples' },
      { id: 'l5-q5-subject', kind: 'subject', label: '主语', text: 'students' },
      { id: 'l5-q5-predicate', kind: 'predicate', label: '主发动机', text: 'can find' },
      { id: 'l5-q5-object', kind: 'object', label: '对象', text: 'the common pattern' }
    ],
    errorByOption: { b: ['predicate-confusion'], c: ['modifier-target'], d: ['mainline-missing'] }
  },
  {
    id: 'l5-q6',
    title: '被动来源',
    sentence: 'Information collected online may not be reliable.',
    prompt: 'collected online 在句子里干嘛？',
    options: [
      { id: 'a', text: '整句主发动机' },
      { id: 'b', text: '被动修饰：说明 Information' },
      { id: 'c', text: '目的背景' },
      { id: 'd', text: '修饰 reliable' }
    ],
    correctOptionId: 'b',
    skeleton: 'Information may not be reliable.',
    explanation: 'Information 是被收集来的，collected online 说明来源。',
    analysisParts: [
      { id: 'l5-q6-subject', kind: 'subject', label: '主语', text: 'Information' },
      { id: 'l5-q6-modifier', kind: 'modifier', label: '被动感修饰', text: 'collected online' },
      { id: 'l5-q6-predicate', kind: 'predicate', label: '主发动机', text: 'may not be' },
      { id: 'l5-q6-complement', kind: 'complement', label: '状态', text: 'reliable' }
    ],
    errorByOption: { a: ['predicate-confusion'], c: ['logic-reversal'], d: ['modifier-target'] }
  },
  {
    id: 'l5-q7',
    title: '被动修饰报告',
    sentence: 'The policy introduced last year changed the way companies protect data.',
    prompt: 'introduced last year 在句子里干嘛？',
    options: [
      { id: 'a', text: '主动修饰 companies' },
      { id: 'b', text: '目的背景' },
      { id: 'c', text: '被动修饰：说明 The policy' },
      { id: 'd', text: '整句主发动机' }
    ],
    correctOptionId: 'c',
    skeleton: 'The policy changed the way.',
    explanation: 'introduced last year 说明 policy 是去年推出的，changed 才是主线。',
    analysisParts: [
      { id: 'l5-q7-subject', kind: 'subject', label: '主语', text: 'The policy' },
      { id: 'l5-q7-modifier', kind: 'modifier', label: '被动感修饰', text: 'introduced last year' },
      { id: 'l5-q7-predicate', kind: 'predicate', label: '主发动机', text: 'changed' },
      { id: 'l5-q7-object', kind: 'object', label: '对象', text: 'the way' }
    ],
    errorByOption: { a: ['modifier-target'], b: ['logic-reversal'], d: ['predicate-confusion'] }
  },
  {
    id: 'l5-q8',
    title: '目的长尾',
    sentence: 'Researchers need more data to explain the result clearly.',
    prompt: 'to explain the result clearly 在句子里干嘛？',
    options: [
      { id: 'a', text: '目的补充：需要数据来解释结果' },
      { id: 'b', text: '整句主发动机' },
      { id: 'c', text: '被动修饰 data' },
      { id: 'd', text: '修饰 Researchers' }
    ],
    correctOptionId: 'a',
    skeleton: 'Researchers need more data.',
    explanation: 'to explain... 说明需要数据的目的，主线是 Researchers need more data。',
    analysisParts: [
      { id: 'l5-q8-subject', kind: 'subject', label: '主语', text: 'Researchers' },
      { id: 'l5-q8-predicate', kind: 'predicate', label: '主发动机', text: 'need' },
      { id: 'l5-q8-object', kind: 'object', label: '对象', text: 'more data' },
      { id: 'l5-q8-purpose', kind: 'logic', label: '目的感补充', text: 'to explain the result clearly' }
    ],
    errorByOption: { b: ['predicate-confusion'], c: ['modifier-target'], d: ['modifier-target'] }
  },
  {
    id: 'l5-q9',
    title: '主动修饰 people',
    sentence: 'People choosing simple methods often save more time.',
    prompt: 'choosing simple methods 在句子里干嘛？',
    options: [
      { id: 'a', text: '整句主发动机' },
      { id: 'b', text: '主动修饰：说明 People' },
      { id: 'c', text: '目的背景' },
      { id: 'd', text: '被动修饰 methods' }
    ],
    correctOptionId: 'b',
    skeleton: 'People save more time.',
    explanation: 'choosing simple methods 说明是哪类 people，save 才是主发动机。',
    analysisParts: [
      { id: 'l5-q9-subject', kind: 'subject', label: '主语', text: 'People' },
      { id: 'l5-q9-modifier', kind: 'modifier', label: '主动感修饰', text: 'choosing simple methods' },
      { id: 'l5-q9-predicate', kind: 'predicate', label: '主发动机', text: 'save' },
      { id: 'l5-q9-object', kind: 'object', label: '对象', text: 'more time' }
    ],
    errorByOption: { a: ['predicate-confusion'], c: ['logic-reversal'], d: ['modifier-target'] }
  },
  {
    id: 'l5-q10',
    title: '被动修饰 skills',
    sentence: 'Skills learned through practice become useful in real situations.',
    prompt: 'learned through practice 在句子里干嘛？',
    options: [
      { id: 'a', text: '目的背景' },
      { id: 'b', text: '整句主发动机' },
      { id: 'c', text: '被动修饰：说明 Skills' },
      { id: 'd', text: '修饰 situations' }
    ],
    correctOptionId: 'c',
    skeleton: 'Skills become useful.',
    explanation: 'skills 是被学来的，learned through practice 修饰 Skills。',
    analysisParts: [
      { id: 'l5-q10-subject', kind: 'subject', label: '主语', text: 'Skills' },
      { id: 'l5-q10-modifier', kind: 'modifier', label: '被动感修饰', text: 'learned through practice' },
      { id: 'l5-q10-predicate', kind: 'predicate', label: '主发动机', text: 'become' },
      { id: 'l5-q10-complement', kind: 'complement', label: '状态', text: 'useful' }
    ],
    errorByOption: { a: ['logic-reversal'], b: ['predicate-confusion'], d: ['modifier-target'] }
  },
  {
    id: 'l5-q11',
    title: '两个尾巴',
    sentence: 'The plan made to support beginners requires careful preparation.',
    prompt: 'made to support beginners 整体在句子里干嘛？',
    options: [
      { id: 'a', text: '修饰 The plan：被制作出来用于支持初学者' },
      { id: 'b', text: '整句主发动机' },
      { id: 'c', text: '修饰 preparation' },
      { id: 'd', text: '交代时间背景' }
    ],
    correctOptionId: 'a',
    skeleton: 'The plan requires preparation.',
    explanation: 'made 是被动修饰，to support beginners 是目的补充，整体都在说明 plan。',
    analysisParts: [
      { id: 'l5-q11-subject', kind: 'subject', label: '主语', text: 'The plan' },
      { id: 'l5-q11-modifier', kind: 'modifier', label: '修饰块', text: 'made to support beginners' },
      { id: 'l5-q11-predicate', kind: 'predicate', label: '主发动机', text: 'requires' },
      { id: 'l5-q11-object', kind: 'object', label: '对象', text: 'careful preparation' }
    ],
    errorByOption: { b: ['predicate-confusion'], c: ['modifier-target'], d: ['logic-reversal'] }
  },
  {
    id: 'l5-q12',
    title: '句首主动背景',
    sentence: 'Reading the instructions carefully, students avoided common mistakes.',
    prompt: 'Reading the instructions carefully 在句子里干嘛？',
    options: [
      { id: 'a', text: '背景/方式：读完说明后再行动' },
      { id: 'b', text: '整句主发动机' },
      { id: 'c', text: '被动修饰 mistakes' },
      { id: 'd', text: '修饰 instructions' }
    ],
    correctOptionId: 'a',
    skeleton: 'Students avoided mistakes.',
    explanation: '句首 Reading... 交代背景或方式，主线是 students avoided mistakes。',
    analysisParts: [
      { id: 'l5-q12-background', kind: 'background', label: '背景/方式', text: 'Reading the instructions carefully' },
      { id: 'l5-q12-subject', kind: 'subject', label: '主语', text: 'students' },
      { id: 'l5-q12-predicate', kind: 'predicate', label: '主发动机', text: 'avoided' },
      { id: 'l5-q12-object', kind: 'object', label: '对象', text: 'common mistakes' }
    ],
    errorByOption: { b: ['predicate-confusion'], c: ['modifier-target'], d: ['modifier-as-mainline'] }
  },
  {
    id: 'l5-q13',
    title: '被动加目的',
    sentence: 'Materials prepared to explain grammar clearly help students review faster.',
    prompt: 'prepared to explain grammar clearly 在句子里干嘛？',
    options: [
      { id: 'a', text: '整句主发动机' },
      { id: 'b', text: '修饰 Materials：被准备出来用于解释语法' },
      { id: 'c', text: '修饰 students' },
      { id: 'd', text: '交代让步背景' }
    ],
    correctOptionId: 'b',
    skeleton: 'Materials help students.',
    explanation: 'prepared 是被动修饰，to explain grammar clearly 是目的补充，整体说明 Materials。',
    analysisParts: [
      { id: 'l5-q13-subject', kind: 'subject', label: '主语', text: 'Materials' },
      { id: 'l5-q13-modifier', kind: 'modifier', label: '修饰块', text: 'prepared to explain grammar clearly' },
      { id: 'l5-q13-predicate', kind: 'predicate', label: '主发动机', text: 'help' },
      { id: 'l5-q13-object', kind: 'object', label: '对象', text: 'students' }
    ],
    errorByOption: { a: ['predicate-confusion'], c: ['modifier-target'], d: ['logic-reversal'] }
  },
  {
    id: 'l5-q14',
    title: '名词内容',
    sentence: 'A decision to change the schedule surprised everyone.',
    prompt: 'to change the schedule 在句子里干嘛？',
    options: [
      { id: 'a', text: '说明 decision 的内容' },
      { id: 'b', text: '整句主发动机' },
      { id: 'c', text: '被动修饰 schedule' },
      { id: 'd', text: '修饰 everyone' }
    ],
    correctOptionId: 'a',
    skeleton: 'A decision surprised everyone.',
    explanation: 'to change the schedule 贴着 decision，说明是什么决定。',
    analysisParts: [
      { id: 'l5-q14-subject', kind: 'subject', label: '主语', text: 'A decision' },
      { id: 'l5-q14-modifier', kind: 'modifier', label: '内容补充', text: 'to change the schedule' },
      { id: 'l5-q14-predicate', kind: 'predicate', label: '主发动机', text: 'surprised' },
      { id: 'l5-q14-object', kind: 'object', label: '对象', text: 'everyone' }
    ],
    errorByOption: { b: ['predicate-confusion'], c: ['modifier-target'], d: ['modifier-target'] }
  },
  {
    id: 'l5-q15',
    title: '综合判断',
    sentence: 'To improve their scores, students using the guide reviewed mistakes marked by teachers.',
    prompt: '这句话最稳的主线是哪个？',
    options: [
      { id: 'a', text: 'Students reviewed mistakes.' },
      { id: 'b', text: 'Scores improved students.' },
      { id: 'c', text: 'Guide marked teachers.' },
      { id: 'd', text: 'Teachers used the guide.' }
    ],
    correctOptionId: 'a',
    skeleton: 'Students reviewed mistakes.',
    explanation: 'To improve... 是目的背景，using the guide 修饰 students，marked by teachers 修饰 mistakes；主线是 students reviewed mistakes。',
    analysisParts: [
      { id: 'l5-q15-purpose', kind: 'logic', label: '目的背景', text: 'To improve their scores' },
      { id: 'l5-q15-subject', kind: 'subject', label: '主语', text: 'students' },
      { id: 'l5-q15-active', kind: 'modifier', label: '主动感修饰', text: 'using the guide' },
      { id: 'l5-q15-predicate', kind: 'predicate', label: '主发动机', text: 'reviewed' },
      { id: 'l5-q15-object', kind: 'object', label: '对象', text: 'mistakes' },
      { id: 'l5-q15-passive', kind: 'modifier', label: '被动感修饰', text: 'marked by teachers' }
    ],
    errorByOption: { b: ['logic-reversal'], c: ['modifier-target'], d: ['modifier-as-mainline'] }
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

export const level5Remediations: RemediationItem[] = [
  {
    id: 'rem-predicate',
    tag: 'predicate-confusion',
    title: '补救 A：假动作先降级',
    explanation: level5ErrorInfo['predicate-confusion']?.plain ?? '',
    questions: [
      remediationQuestion(
        'l5-rem-predicate',
        'predicate-confusion',
        'The report written last week explains the issue.',
        '主发动机是：',
        [
          { id: 'a', text: 'written' },
          { id: 'b', text: 'explains' },
          { id: 'c', text: 'week' }
        ],
        'b',
        'The report explains the issue.',
        'written last week 修饰 report，explains 才撑起主句。'
      )
    ]
  },
  {
    id: 'rem-target',
    tag: 'modifier-target',
    title: '补救 B：修饰贴着谁',
    explanation: level5ErrorInfo['modifier-target']?.plain ?? '',
    questions: [
      remediationQuestion(
        'l5-rem-target',
        'modifier-target',
        'People carrying heavy bags walked slowly.',
        'carrying heavy bags 修饰谁？',
        [
          { id: 'a', text: 'People' },
          { id: 'b', text: 'bags' },
          { id: 'c', text: 'slowly' }
        ],
        'a',
        'People walked slowly.',
        'carrying heavy bags 贴着 People，说明是哪类人。'
      )
    ]
  },
  {
    id: 'rem-modifier-mainline',
    tag: 'modifier-as-mainline',
    title: '补救 C：括掉修饰块',
    explanation: level5ErrorInfo['modifier-as-mainline']?.plain ?? '',
    questions: [
      remediationQuestion(
        'l5-rem-modifier',
        'modifier-as-mainline',
        'Mistakes marked in red need attention.',
        '主线是：',
        [
          { id: 'a', text: 'Mistakes need attention.' },
          { id: 'b', text: 'Red marked mistakes.' },
          { id: 'c', text: 'Attention marked red.' }
        ],
        'a',
        'Mistakes need attention.',
        'marked in red 是修饰 mistakes 的被动块。'
      )
    ]
  },
  {
    id: 'rem-logic',
    tag: 'logic-reversal',
    title: '补救 D：目的先当背景',
    explanation: level5ErrorInfo['logic-reversal']?.plain ?? '',
    questions: [
      remediationQuestion(
        'l5-rem-logic',
        'logic-reversal',
        'To save money, families compare prices online.',
        'To save money 在句子里干嘛？',
        [
          { id: 'a', text: '目的背景' },
          { id: 'b', text: '主发动机' },
          { id: 'c', text: '修饰 prices' }
        ],
        'a',
        'Families compare prices online.',
        'To save money 表示目的，主线在逗号后。'
      )
    ]
  },
  {
    id: 'rem-mainline',
    tag: 'mainline-missing',
    title: '补救 E：压回主线',
    explanation: level5ErrorInfo['mainline-missing']?.plain ?? '',
    questions: [
      remediationQuestion(
        'l5-rem-mainline',
        'mainline-missing',
        'Using a simple checklist, writers avoid common errors.',
        '主线是：',
        [
          { id: 'a', text: 'Writers avoid errors.' },
          { id: 'b', text: 'Checklist uses writers.' },
          { id: 'c', text: 'Errors use checklist.' }
        ],
        'a',
        'Writers avoid errors.',
        'Using a simple checklist 是方式背景，主线是 writers avoid errors。'
      )
    ]
  },
  {
    id: 'rem-term',
    tag: 'term-blocked',
    title: '补救 F：术语翻成人话',
    explanation: level5ErrorInfo['term-blocked']?.plain ?? '',
    questions: [
      remediationQuestion(
        'l5-rem-term',
        'term-blocked',
        'A tool to record new words is useful.',
        'to record new words 在句子里干嘛？',
        [
          { id: 'a', text: '说明 tool 的用途' },
          { id: 'b', text: '主发动机' },
          { id: 'c', text: '被动修饰 words' }
        ],
        'a',
        'A tool is useful.',
        'to record new words 说明这个工具用来干嘛。'
      )
    ]
  }
];

export const level5Summary = [
  '非谓语先降级，不急着当主发动机。',
  'doing 多半先看主动感：谁主动做、正在做、用来做。',
  'done 多半先看被动感：被做过、被完成、被提供。',
  'to do 多半先看目的感：为了做、要去做、用来做。'
];
