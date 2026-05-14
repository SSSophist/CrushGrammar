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

export const level7Steps: LessonStep[] = [
  {
    id: 'cut-modifiers',
    title: '第一步：先删修饰',
    body: [
      '看到介词短语、从句、非谓语、插入语，先别急着翻完，先把它们临时括起来。',
      '不是永远删掉，而是先让主干露出来。'
    ]
  },
  {
    id: 'compress-core',
    title: '第二步：压回主干',
    body: [
      '删完修饰后，只问一句：谁 + 主发动机 + 什么？',
      '主干能站住，长句就不会散。'
    ]
  },
  {
    id: 'restore-details',
    title: '第三步：补回细节',
    body: [
      '主干清楚后，再把时间、地点、原因、对象范围补回来。',
      '这样既不会漏信息，也不会被细节带跑。'
    ]
  }
];

export const level7Terms: TermCard[] = [
  {
    id: 'modifier',
    term: '修饰语',
    plain: '给名词或整句话加细节的东西。',
    function: '说明哪个、什么样、在哪里、为什么、用什么方式。',
    examUse: '阅读长句里先临时括起来，主干会清楚很多。',
    skipForNow: '不用背所有修饰语分类，先会“括起来”。'
  },
  {
    id: 'core',
    term: '主干',
    plain: '一句话删掉修饰后剩下的“谁 + 做/是 + 什么”。',
    function: '帮你抓住句子真正想说的事。',
    examUse: '长难句题常常先考你有没有抓住主干。',
    skipForNow: '不用追求每个词都标成语法成分。'
  },
  {
    id: 'prepositional-phrase',
    term: '介词短语',
    plain: 'with / in / of / from / for 后面带出的一小串。',
    function: '常常补充地点、范围、对象、方式。',
    examUse: 'of students / with clear goals 这种尾巴先别抢主语。',
    skipForNow: '不用背介词用法大全。'
  }
];

export const level7Examples: LessonExample[] = [
  {
    id: 'relative',
    title: '例句 1：先把名词后尾巴括起来',
    sentence: 'Students who review mistakes regularly improve their writing quickly.',
    options: [
      { id: 'a', text: 'Students improve writing.' },
      { id: 'b', text: 'Mistakes improve writing.' },
      { id: 'c', text: 'Review mistakes is main line.' },
      { id: 'd', text: 'Writing reviews students.' }
    ],
    correctOptionId: 'a',
    engine: 'Students improve writing.',
    skeleton: 'who review mistakes regularly 修饰 Students，主干是 Students improve writing.',
    details: ['Students 是主语。', 'who review mistakes regularly 是修饰尾巴。', 'improve their writing 是主线动作。'],
    translation: '经常复盘错误的学生能很快提高写作。'
  },
  {
    id: 'prep',
    title: '例句 2：介词短语先别抢主语',
    sentence: 'The number of students in online courses has increased.',
    options: [
      { id: 'a', text: 'The number has increased.' },
      { id: 'b', text: 'Students have increased courses.' },
      { id: 'c', text: 'Courses have increased students.' },
      { id: 'd', text: 'Online courses are the only subject.' }
    ],
    correctOptionId: 'a',
    engine: 'The number has increased.',
    skeleton: 'of students in online courses 都在补充 The number，主干看 The number.',
    details: ['The number 是主语核心。', 'of students in online courses 是范围。', 'has increased 是主发动机。'],
    translation: '在线课程中学生的数量已经增加。'
  },
  {
    id: 'insert',
    title: '例句 3：双逗号中间先跳过',
    sentence: 'The method, which many beginners find useful, saves time.',
    options: [
      { id: 'a', text: 'The method saves time.' },
      { id: 'b', text: 'Beginners save time.' },
      { id: 'c', text: 'Useful saves method.' },
      { id: 'd', text: 'Find is the main engine.' }
    ],
    correctOptionId: 'a',
    engine: 'The method saves time.',
    skeleton: 'which many beginners find useful 是插入补充，主干是 The method saves time.',
    details: ['The method 是主语。', 'which...useful 是补充说明。', 'saves time 是主线。'],
    translation: '这个方法节省时间，许多初学者觉得它有用。',
    warning: '双逗号夹住的内容先跳过，常常能直接读出主句。'
  }
];

export const level7Traps: CommonTrap[] = [
  {
    id: 'of-steals',
    title: '坑 1：of 后面的名词抢主语',
    sentence: 'The quality of answers from students varies widely.',
    wrongRead: 'students varies widely.',
    whyWrong: 'of answers from students 都在修饰 The quality，真正主语核心是 quality。',
    correctBreakdown: ['主语核心：The quality', '修饰范围：of answers from students', '主发动机：varies'],
    skeleton: 'The quality varies widely.',
    translation: '学生答案的质量差异很大。',
    quickRule: 'The number/quality/amount of... 这类结构先盯前面的核心名词。'
  },
  {
    id: 'comma-steals',
    title: '坑 2：插入语里的动作抢主线',
    sentence: 'The report, based on a recent survey, shows a clear trend.',
    wrongRead: 'based 是主发动机。',
    whyWrong: 'based on a recent survey 是插入补充，shows 才是主句动作。',
    correctBreakdown: ['主语：The report', '插入补充：based on a recent survey', '主发动机：shows'],
    skeleton: 'The report shows a trend.',
    translation: '这份基于近期调查的报告显示出清晰趋势。',
    quickRule: '逗号夹住的 done 块先降级。'
  },
  {
    id: 'front-background',
    title: '坑 3：句首背景当主线',
    sentence: 'In a society full of information, readers need judgment.',
    wrongRead: 'society full of information 是主线。',
    whyWrong: 'In a society... 是背景，主句是 readers need judgment。',
    correctBreakdown: ['背景：In a society full of information', '主语：readers', '主发动机：need'],
    skeleton: 'Readers need judgment.',
    translation: '在信息繁多的社会里，读者需要判断力。',
    quickRule: '句首 in/with/from 开头的一串，先当背景试试看。'
  }
];

export const level7ErrorInfo: Partial<Record<ErrorTag, ErrorTagInfo>> = {
  'modifier-as-mainline': {
    title: '把修饰当主线',
    plain: '你被补充说明带走了，没有先把主干压出来。',
    action: '先括掉名词后尾巴、介词短语、插入语，再读剩下的主句。'
  },
  'modifier-target': {
    title: '修饰对象找错',
    plain: '你没有看清修饰语到底贴着谁。',
    action: '看修饰语前面最近、最合理的名词，再判断它在说明哪个东西。'
  },
  'mainline-missing': {
    title: '主干没压出来',
    plain: '你还没把长句压回“谁 + 做/是 + 什么”。',
    action: '先删修饰，再只找一个主语核心和一个主发动机。'
  },
  'clause-function': {
    title: '从句功能误判',
    plain: '你把 who/which/that 带出的修饰从句读成了整句主线。',
    action: '名词后从句先当“说明这个名词”的尾巴。'
  },
  'logic-reversal': {
    title: '背景重点读反',
    plain: '你把句首背景、让步或原因读成了作者真正重点。',
    action: '背景先降级，逗号后主句通常更值得抓。'
  },
  'term-blocked': {
    title: '术语卡住',
    plain: '你被修饰语、插入语这些名字吓住了。',
    action: '先用人话：括掉补充、压主干、补细节。'
  }
};

export const level7PracticeQuestions: PracticeQuestion[] = [
  {
    id: 'l7-q1',
    title: '修饰从句',
    sentence: 'Students who read widely understand complex articles faster.',
    prompt: '这句话压缩后的主干是：',
    options: [
      { id: 'a', text: 'Students understand articles.' },
      { id: 'b', text: 'Students read widely.' },
      { id: 'c', text: 'Articles read students.' },
      { id: 'd', text: 'Widely understands faster.' }
    ],
    correctOptionId: 'a',
    skeleton: 'Students understand articles.',
    explanation: 'who read widely 修饰 Students，主干是 Students understand articles。',
    analysisParts: [
      { id: 'l7-q1-subject', kind: 'subject', label: '主语核心', text: 'Students' },
      { id: 'l7-q1-modifier', kind: 'modifier', label: '修饰尾巴', text: 'who read widely' },
      { id: 'l7-q1-predicate', kind: 'predicate', label: '主发动机', text: 'understand' },
      { id: 'l7-q1-object', kind: 'object', label: '对象', text: 'complex articles' }
    ],
    errorByOption: { b: ['clause-function'], c: ['mainline-missing'], d: ['modifier-as-mainline'] }
  },
  {
    id: 'l7-q2',
    title: '介词尾巴',
    sentence: 'The number of people with basic digital skills is growing.',
    prompt: '主语核心是：',
    options: [
      { id: 'a', text: 'people' },
      { id: 'b', text: 'skills' },
      { id: 'c', text: 'The number' },
      { id: 'd', text: 'digital' }
    ],
    correctOptionId: 'c',
    skeleton: 'The number is growing.',
    explanation: 'of people with basic digital skills 都在补充 The number，主语核心是 The number。',
    analysisParts: [
      { id: 'l7-q2-subject', kind: 'subject', label: '主语核心', text: 'The number' },
      { id: 'l7-q2-modifier', kind: 'modifier', label: '范围修饰', text: 'of people with basic digital skills' },
      { id: 'l7-q2-predicate', kind: 'predicate', label: '主发动机', text: 'is growing' }
    ],
    errorByOption: { a: ['modifier-target'], b: ['modifier-target'], d: ['mainline-missing'] }
  },
  {
    id: 'l7-q3',
    title: '句首背景',
    sentence: 'In many modern cities, public libraries provide free access to digital resources.',
    prompt: '先删掉句首背景后，主干是：',
    options: [
      { id: 'a', text: 'Modern cities provide libraries.' },
      { id: 'b', text: 'Public libraries provide access.' },
      { id: 'c', text: 'Resources provide cities.' },
      { id: 'd', text: 'Access is modern.' }
    ],
    correctOptionId: 'b',
    skeleton: 'Public libraries provide access.',
    explanation: 'In many modern cities 是地点背景，主干是 public libraries provide access。',
    analysisParts: [
      { id: 'l7-q3-bg', kind: 'background', label: '背景', text: 'In many modern cities' },
      { id: 'l7-q3-subject', kind: 'subject', label: '主语', text: 'public libraries' },
      { id: 'l7-q3-predicate', kind: 'predicate', label: '主发动机', text: 'provide' },
      { id: 'l7-q3-object', kind: 'object', label: '对象', text: 'free access' }
    ],
    errorByOption: { a: ['logic-reversal'], c: ['mainline-missing'], d: ['modifier-as-mainline'] }
  },
  {
    id: 'l7-q4',
    title: '插入补充',
    sentence: 'The policy, introduced last year, has changed daily habits.',
    prompt: 'introduced last year 在句子里干嘛？',
    options: [
      { id: 'a', text: '插入补充，说明 policy' },
      { id: 'b', text: '整句主发动机' },
      { id: 'c', text: '修饰 habits' },
      { id: 'd', text: '主语核心' }
    ],
    correctOptionId: 'a',
    skeleton: 'The policy has changed habits.',
    explanation: 'introduced last year 被逗号夹住，是补充说明；has changed 才是主发动机。',
    analysisParts: [
      { id: 'l7-q4-subject', kind: 'subject', label: '主语', text: 'The policy' },
      { id: 'l7-q4-insert', kind: 'modifier', label: '插入补充', text: 'introduced last year' },
      { id: 'l7-q4-predicate', kind: 'predicate', label: '主发动机', text: 'has changed' },
      { id: 'l7-q4-object', kind: 'object', label: '对象', text: 'daily habits' }
    ],
    errorByOption: { b: ['modifier-as-mainline'], c: ['modifier-target'], d: ['mainline-missing'] }
  },
  {
    id: 'l7-q5',
    title: '双层介词',
    sentence: 'The quality of information on social media varies greatly.',
    prompt: '这句话压缩后的主干是：',
    options: [
      { id: 'a', text: 'Social media varies greatly.' },
      { id: 'b', text: 'Information varies media.' },
      { id: 'c', text: 'The quality varies greatly.' },
      { id: 'd', text: 'Media quality information.' }
    ],
    correctOptionId: 'c',
    skeleton: 'The quality varies greatly.',
    explanation: 'of information on social media 都是范围修饰，核心是 The quality varies。',
    analysisParts: [
      { id: 'l7-q5-subject', kind: 'subject', label: '主语核心', text: 'The quality' },
      { id: 'l7-q5-modifier', kind: 'modifier', label: '范围修饰', text: 'of information on social media' },
      { id: 'l7-q5-predicate', kind: 'predicate', label: '主发动机', text: 'varies' },
      { id: 'l7-q5-detail', kind: 'detail', label: '程度', text: 'greatly' }
    ],
    errorByOption: { a: ['modifier-target'], b: ['mainline-missing'], d: ['modifier-as-mainline'] }
  },
  {
    id: 'l7-q6',
    title: '非谓语修饰',
    sentence: 'Researchers studying sleep patterns found a surprising result.',
    prompt: '主干是：',
    options: [
      { id: 'a', text: 'Researchers found a result.' },
      { id: 'b', text: 'Sleep patterns found researchers.' },
      { id: 'c', text: 'Researchers studying patterns.' },
      { id: 'd', text: 'A result studied sleep.' }
    ],
    correctOptionId: 'a',
    skeleton: 'Researchers found a result.',
    explanation: 'studying sleep patterns 修饰 Researchers，found 才是主发动机。',
    analysisParts: [
      { id: 'l7-q6-subject', kind: 'subject', label: '主语', text: 'Researchers' },
      { id: 'l7-q6-modifier', kind: 'modifier', label: '修饰块', text: 'studying sleep patterns' },
      { id: 'l7-q6-predicate', kind: 'predicate', label: '主发动机', text: 'found' },
      { id: 'l7-q6-object', kind: 'object', label: '对象', text: 'a surprising result' }
    ],
    errorByOption: { b: ['modifier-target'], c: ['modifier-as-mainline'], d: ['mainline-missing'] }
  },
  {
    id: 'l7-q7',
    title: '介词短语',
    sentence: 'Readers with clear goals usually finish articles more efficiently.',
    prompt: 'with clear goals 在句子里干嘛？',
    options: [
      { id: 'a', text: '修饰 Readers' },
      { id: 'b', text: '主发动机' },
      { id: 'c', text: '修饰 articles' },
      { id: 'd', text: '整句主干' }
    ],
    correctOptionId: 'a',
    skeleton: 'Readers finish articles.',
    explanation: 'with clear goals 说明什么样的 Readers，主干是 Readers finish articles。',
    analysisParts: [
      { id: 'l7-q7-subject', kind: 'subject', label: '主语', text: 'Readers' },
      { id: 'l7-q7-modifier', kind: 'modifier', label: '修饰语', text: 'with clear goals' },
      { id: 'l7-q7-predicate', kind: 'predicate', label: '主发动机', text: 'finish' },
      { id: 'l7-q7-object', kind: 'object', label: '对象', text: 'articles' }
    ],
    errorByOption: { b: ['mainline-missing'], c: ['modifier-target'], d: ['modifier-as-mainline'] }
  },
  {
    id: 'l7-q8',
    title: '长主语',
    sentence: 'The ability to compare different sources helps students avoid misleading claims.',
    prompt: '压缩主干是：',
    options: [
      { id: 'a', text: 'Sources help claims.' },
      { id: 'b', text: 'The ability helps students.' },
      { id: 'c', text: 'Students compare ability.' },
      { id: 'd', text: 'Claims avoid sources.' }
    ],
    correctOptionId: 'b',
    skeleton: 'The ability helps students.',
    explanation: 'to compare different sources 修饰 ability，avoid... 是 helps 后面的补充，主干先抓 The ability helps students。',
    analysisParts: [
      { id: 'l7-q8-subject', kind: 'subject', label: '主语核心', text: 'The ability' },
      { id: 'l7-q8-modifier', kind: 'modifier', label: '内容修饰', text: 'to compare different sources' },
      { id: 'l7-q8-predicate', kind: 'predicate', label: '主发动机', text: 'helps' },
      { id: 'l7-q8-object', kind: 'object', label: '对象', text: 'students' }
    ],
    errorByOption: { a: ['modifier-target'], c: ['modifier-as-mainline'], d: ['mainline-missing'] }
  },
  {
    id: 'l7-q9',
    title: '逗号插入',
    sentence: 'Online courses, which are popular among college students, require self-discipline.',
    prompt: '这句话主干是：',
    options: [
      { id: 'a', text: 'Online courses require self-discipline.' },
      { id: 'b', text: 'Students require courses.' },
      { id: 'c', text: 'Courses are popular.' },
      { id: 'd', text: 'Self-discipline is popular.' }
    ],
    correctOptionId: 'a',
    skeleton: 'Online courses require self-discipline.',
    explanation: 'which are popular among college students 是插入补充，require 才是主发动机。',
    analysisParts: [
      { id: 'l7-q9-subject', kind: 'subject', label: '主语', text: 'Online courses' },
      { id: 'l7-q9-insert', kind: 'modifier', label: '插入补充', text: 'which are popular among college students' },
      { id: 'l7-q9-predicate', kind: 'predicate', label: '主发动机', text: 'require' },
      { id: 'l7-q9-object', kind: 'object', label: '对象', text: 'self-discipline' }
    ],
    errorByOption: { b: ['modifier-target'], c: ['clause-function'], d: ['mainline-missing'] }
  },
  {
    id: 'l7-q10',
    title: '句首方式',
    sentence: 'By focusing on key words, readers can understand the passage faster.',
    prompt: '主干是：',
    options: [
      { id: 'a', text: 'Key words focus readers.' },
      { id: 'b', text: 'Readers can understand the passage.' },
      { id: 'c', text: 'Words understand faster.' },
      { id: 'd', text: 'Focusing is the only main line.' }
    ],
    correctOptionId: 'b',
    skeleton: 'Readers can understand the passage.',
    explanation: 'By focusing on key words 是方式背景，主干是 readers can understand the passage。',
    analysisParts: [
      { id: 'l7-q10-bg', kind: 'background', label: '方式背景', text: 'By focusing on key words' },
      { id: 'l7-q10-subject', kind: 'subject', label: '主语', text: 'readers' },
      { id: 'l7-q10-predicate', kind: 'predicate', label: '主发动机', text: 'can understand' },
      { id: 'l7-q10-object', kind: 'object', label: '对象', text: 'the passage' }
    ],
    errorByOption: { a: ['modifier-target'], c: ['mainline-missing'], d: ['logic-reversal'] }
  },
  {
    id: 'l7-q11',
    title: '被动修饰',
    sentence: 'The advice given by experienced teachers helps beginners write better essays.',
    prompt: '压缩主干是：',
    options: [
      { id: 'a', text: 'The advice helps beginners.' },
      { id: 'b', text: 'Teachers help advice.' },
      { id: 'c', text: 'Beginners given essays.' },
      { id: 'd', text: 'Essays write teachers.' }
    ],
    correctOptionId: 'a',
    skeleton: 'The advice helps beginners.',
    explanation: 'given by experienced teachers 修饰 advice，write better essays 是 helps 后面的补充动作。',
    analysisParts: [
      { id: 'l7-q11-subject', kind: 'subject', label: '主语', text: 'The advice' },
      { id: 'l7-q11-modifier', kind: 'modifier', label: '被动修饰', text: 'given by experienced teachers' },
      { id: 'l7-q11-predicate', kind: 'predicate', label: '主发动机', text: 'helps' },
      { id: 'l7-q11-object', kind: 'object', label: '对象', text: 'beginners' }
    ],
    errorByOption: { b: ['modifier-target'], c: ['modifier-as-mainline'], d: ['mainline-missing'] }
  },
  {
    id: 'l7-q12',
    title: '多层尾巴',
    sentence: 'A report about learning habits among college students shows an interesting change.',
    prompt: '主干是：',
    options: [
      { id: 'a', text: 'A report shows a change.' },
      { id: 'b', text: 'Habits show students.' },
      { id: 'c', text: 'Students learn report.' },
      { id: 'd', text: 'College shows habits.' }
    ],
    correctOptionId: 'a',
    skeleton: 'A report shows a change.',
    explanation: 'about learning habits among college students 都修饰 report，shows 是主发动机。',
    analysisParts: [
      { id: 'l7-q12-subject', kind: 'subject', label: '主语核心', text: 'A report' },
      { id: 'l7-q12-modifier', kind: 'modifier', label: '多层修饰', text: 'about learning habits among college students' },
      { id: 'l7-q12-predicate', kind: 'predicate', label: '主发动机', text: 'shows' },
      { id: 'l7-q12-object', kind: 'object', label: '对象', text: 'an interesting change' }
    ],
    errorByOption: { b: ['modifier-target'], c: ['modifier-as-mainline'], d: ['mainline-missing'] }
  },
  {
    id: 'l7-q13',
    title: '原因背景',
    sentence: 'Because the topic is familiar, many students ignore important details.',
    prompt: '主干是：',
    options: [
      { id: 'a', text: 'The topic is familiar.' },
      { id: 'b', text: 'Students ignore details.' },
      { id: 'c', text: 'Details ignore students.' },
      { id: 'd', text: 'Familiar topic is the object.' }
    ],
    correctOptionId: 'b',
    skeleton: 'Students ignore details.',
    explanation: 'Because... 是原因背景，主句 many students ignore important details 是主干。',
    analysisParts: [
      { id: 'l7-q13-bg', kind: 'logic', label: '原因背景', text: 'Because the topic is familiar' },
      { id: 'l7-q13-subject', kind: 'subject', label: '主语', text: 'many students' },
      { id: 'l7-q13-predicate', kind: 'predicate', label: '主发动机', text: 'ignore' },
      { id: 'l7-q13-object', kind: 'object', label: '对象', text: 'important details' }
    ],
    errorByOption: { a: ['logic-reversal'], c: ['mainline-missing'], d: ['modifier-as-mainline'] }
  },
  {
    id: 'l7-q14',
    title: '复合修饰',
    sentence: 'The strategy used by students who prepare early reduces exam pressure.',
    prompt: '这句话压缩后的主干是：',
    options: [
      { id: 'a', text: 'Students prepare early.' },
      { id: 'b', text: 'The strategy reduces pressure.' },
      { id: 'c', text: 'Pressure prepares strategy.' },
      { id: 'd', text: 'Students reduce strategy.' }
    ],
    correctOptionId: 'b',
    skeleton: 'The strategy reduces pressure.',
    explanation: 'used by students who prepare early 整体修饰 strategy，reduces 才是主发动机。',
    analysisParts: [
      { id: 'l7-q14-subject', kind: 'subject', label: '主语', text: 'The strategy' },
      { id: 'l7-q14-modifier', kind: 'modifier', label: '复合修饰', text: 'used by students who prepare early' },
      { id: 'l7-q14-predicate', kind: 'predicate', label: '主发动机', text: 'reduces' },
      { id: 'l7-q14-object', kind: 'object', label: '对象', text: 'exam pressure' }
    ],
    errorByOption: { a: ['clause-function'], c: ['mainline-missing'], d: ['modifier-target'] }
  },
  {
    id: 'l7-q15',
    title: '综合压缩',
    sentence: 'Although the article, which includes many examples, looks long, its main argument is simple.',
    prompt: '这句话最稳的主干是：',
    options: [
      { id: 'a', text: 'Its main argument is simple.' },
      { id: 'b', text: 'The article includes examples.' },
      { id: 'c', text: 'Examples look long.' },
      { id: 'd', text: 'The article is only long.' }
    ],
    correctOptionId: 'a',
    skeleton: 'Its main argument is simple.',
    explanation: 'Although... 是让步背景，which includes many examples 是插入修饰，真正主句是 its main argument is simple。',
    analysisParts: [
      { id: 'l7-q15-bg-start', kind: 'logic', label: '让步背景', text: 'Although the article' },
      { id: 'l7-q15-insert', kind: 'modifier', label: '插入修饰', text: 'which includes many examples' },
      { id: 'l7-q15-bg-end', kind: 'logic', label: '背景续写', text: 'looks long' },
      { id: 'l7-q15-subject', kind: 'subject', label: '主语', text: 'its main argument' },
      { id: 'l7-q15-predicate', kind: 'predicate', label: '主发动机', text: 'is' },
      { id: 'l7-q15-complement', kind: 'complement', label: '状态', text: 'simple' }
    ],
    errorByOption: { b: ['clause-function'], c: ['modifier-target'], d: ['logic-reversal'] }
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

export const level7Remediations: RemediationItem[] = [
  {
    id: 'rem-mod-main',
    tag: 'modifier-as-mainline',
    title: '补救 A：括掉修饰块',
    explanation: level7ErrorInfo['modifier-as-mainline']?.plain ?? '',
    questions: [
      remediationQuestion(
        'l7-rem-mod-main',
        'modifier-as-mainline',
        'People using public transport save money.',
        '主干是：',
        [
          { id: 'a', text: 'People save money.' },
          { id: 'b', text: 'People use money.' },
          { id: 'c', text: 'Transport saves people.' }
        ],
        'a',
        'People save money.',
        'using public transport 修饰 People。'
      )
    ]
  },
  {
    id: 'rem-target',
    tag: 'modifier-target',
    title: '补救 B：修饰贴着谁',
    explanation: level7ErrorInfo['modifier-target']?.plain ?? '',
    questions: [
      remediationQuestion(
        'l7-rem-target',
        'modifier-target',
        'Readers with enough context understand the paragraph.',
        'with enough context 修饰谁？',
        [
          { id: 'a', text: 'Readers' },
          { id: 'b', text: 'paragraph' },
          { id: 'c', text: 'understand' }
        ],
        'a',
        'Readers understand the paragraph.',
        'with enough context 贴着 Readers。'
      )
    ]
  },
  {
    id: 'rem-mainline',
    tag: 'mainline-missing',
    title: '补救 C：只留谁做什么',
    explanation: level7ErrorInfo['mainline-missing']?.plain ?? '',
    questions: [
      remediationQuestion(
        'l7-rem-main',
        'mainline-missing',
        'The result of the experiment surprised the class.',
        '主干是：',
        [
          { id: 'a', text: 'The result surprised the class.' },
          { id: 'b', text: 'Experiment surprised result.' },
          { id: 'c', text: 'Class surprised experiment.' }
        ],
        'a',
        'The result surprised the class.',
        'of the experiment 修饰 The result。'
      )
    ]
  },
  {
    id: 'rem-clause',
    tag: 'clause-function',
    title: '补救 D：从句先当尾巴',
    explanation: level7ErrorInfo['clause-function']?.plain ?? '',
    questions: [
      remediationQuestion(
        'l7-rem-clause',
        'clause-function',
        'Books that explain rules clearly help beginners.',
        '主干是：',
        [
          { id: 'a', text: 'Books help beginners.' },
          { id: 'b', text: 'Rules explain books.' },
          { id: 'c', text: 'Beginners explain rules.' }
        ],
        'a',
        'Books help beginners.',
        'that explain rules clearly 修饰 Books。'
      )
    ]
  },
  {
    id: 'rem-logic',
    tag: 'logic-reversal',
    title: '补救 E：背景先降级',
    explanation: level7ErrorInfo['logic-reversal']?.plain ?? '',
    questions: [
      remediationQuestion(
        'l7-rem-logic',
        'logic-reversal',
        'Although the sentence is long, its structure is clear.',
        '主句重点是：',
        [
          { id: 'a', text: 'its structure is clear' },
          { id: 'b', text: 'the sentence is long' },
          { id: 'c', text: 'long means unclear' }
        ],
        'a',
        'Its structure is clear.',
        'Although 前半句是让步背景。'
      )
    ]
  },
  {
    id: 'rem-term',
    tag: 'term-blocked',
    title: '补救 F：术语翻成人话',
    explanation: level7ErrorInfo['term-blocked']?.plain ?? '',
    questions: [
      remediationQuestion(
        'l7-rem-term',
        'term-blocked',
        'The plan, simple but effective, worked well.',
        '逗号中间 simple but effective 是：',
        [
          { id: 'a', text: '补充说明 plan' },
          { id: 'b', text: '主发动机' },
          { id: 'c', text: '宾语' }
        ],
        'a',
        'The plan worked well.',
        '逗号中间是补充说明。'
      )
    ]
  }
];

export const level7Summary = [
  '长句先删修饰，再压回主干。',
  '介词短语、从句、非谓语、插入语都可以先临时括起来。',
  '主干只问：谁 + 主发动机 + 什么。',
  '主干稳了，再补回时间、地点、原因、范围和修饰细节。'
];
