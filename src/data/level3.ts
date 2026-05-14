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

export const level3Steps: LessonStep[] = [
  {
    id: 'subject-link',
    title: '第一步：先找谁真正发出主动作',
    body: [
      '先问这句话主要在说谁：students、report、method、ability 这种能当主角的词。',
      '再看哪个动词能和这个主角连起来，撑起整句话。'
    ]
  },
  {
    id: 'fake-verbs',
    title: '第二步：把 doing / done / to do 先放旁边',
    body: [
      'using、introduced、to improve 这些很像动作，但多数时候只是在补充说明。',
      '它们可以很重要，但先别让它们抢走主发动机的位置。'
    ]
  },
  {
    id: 'clause-check',
    title: '第三步：从句里的动词先降级',
    body: [
      'who / when / because / although 带出来的小句子，里面也会有动词。',
      '先判断它是不是背景、修饰或原因，再回到主句找真正主线。'
    ]
  }
];

export const level3Terms: TermCard[] = [
  {
    id: 'main-engine',
    term: '主发动机',
    plain: '撑起整句话的那个核心动作或状态。',
    function: '帮你把长句压成“谁 + 做/是 + 什么”。',
    examUse: '阅读长句时先抓它，后面的修饰再慢慢补。',
    skipForNow: '不用背谓语定义，先会问：这句话真正发生了什么？'
  },
  {
    id: 'fake-verb',
    term: '假动词',
    plain: '看起来像动作，但这次不是主句发动机。',
    function: '常见样子是 doing、done、to do。',
    examUse: '看到很多动词时，先把这些可疑项放旁边，防止读偏。',
    skipForNow: '不用深挖非谓语三件套，第五关会专门讲。'
  },
  {
    id: 'main-clause',
    term: '主句',
    plain: '一句话真正想说的主线。',
    function: '决定整句话的中心意思。',
    examUse: 'although / when / because 开头时，逗号后面经常才是主线。',
    skipForNow: '不用分析所有从句类型，先分清背景和主线。'
  },
  {
    id: 'clause-verb',
    term: '从句动作',
    plain: '小句子里的动作，通常给主句补背景或修饰。',
    function: '它有动作感，但不一定是整句主发动机。',
    examUse: 'who read widely 里的 read 不要抢走 develop 的主线位置。',
    skipForNow: '先知道它常常被 who / when / because / although 带出来。'
  },
  {
    id: 'predicate',
    term: '谓语',
    plain: '本项目里先把它当成“主发动机”的正式叫法。',
    function: '说明主语做什么、是什么、怎么样。',
    examUse: '找到了谓语，长句就先压回骨架。',
    skipForNow: '不用背术语，记“主发动机”就够。'
  }
];

export const level3Examples: LessonExample[] = [
  {
    id: 'using',
    title: '例句 1：using 不一定是主发动机',
    sentence: 'Students using online resources improve their reading skills.',
    options: [
      { id: 'a', text: 'Online resources improve skills.' },
      { id: 'b', text: 'Students improve skills.' },
      { id: 'c', text: 'Students use resources.' },
      { id: 'd', text: 'Reading skills use resources.' }
    ],
    correctOptionId: 'b',
    engine: 'Students improve skills.',
    skeleton: '主线不是 using，而是 students improve skills。',
    details: [
      'Students 是主角。',
      'using online resources 是补充说明：什么样的 students。',
      'improve 才能和 Students 连起来撑起主句。'
    ],
    translation: '使用在线资源的学生提高了他们的阅读能力。',
    warning: '看到 using 不要急着翻成主动作，先看后面有没有真正的主句动词。'
  },
  {
    id: 'introduced',
    title: '例句 2：done 常常是修饰，不是主线',
    sentence: 'The report introduced by the research team shows important changes.',
    options: [
      { id: 'a', text: 'The report shows changes.' },
      { id: 'b', text: 'The team shows changes.' },
      { id: 'c', text: 'The report introduced the team.' },
      { id: 'd', text: 'Changes introduced the report.' }
    ],
    correctOptionId: 'a',
    engine: 'The report shows changes.',
    skeleton: 'introduced by the research team 修饰 report，shows 才是主发动机。',
    details: [
      'The report 是主角。',
      'introduced by the research team 只是补 report 的来源。',
      'shows important changes 是主句真正要说的事。'
    ],
    translation: '研究团队发布的报告显示了重要变化。'
  },
  {
    id: 'to-save',
    title: '例句 3：to do 开头先当目的背景',
    sentence: 'To save time, many students review key points before the exam.',
    options: [
      { id: 'a', text: 'Time reviews points.' },
      { id: 'b', text: 'Students review points.' },
      { id: 'c', text: 'Students save time.' },
      { id: 'd', text: 'The exam reviews students.' }
    ],
    correctOptionId: 'b',
    engine: 'Students review points.',
    skeleton: 'To save time 是目的背景，many students review key points 是主线。',
    details: [
      'To save time 先当“为了省时间”。',
      '逗号后面出现 many students，主角更明确。',
      'review 才是这个句子的主发动机。'
    ],
    translation: '为了节省时间，许多学生会在考前复习要点。'
  }
];

export const level3Traps: CommonTrap[] = [
  {
    id: 'using-main',
    title: '坑 1：看到 doing 就当主动作',
    sentence: 'People using public transportation save money.',
    wrongRead: '这句话主线是 people using。',
    whyWrong: 'using public transportation 在修饰 people，真正主线是 people save money。',
    correctBreakdown: ['主角：People', '修饰：using public transportation', '主发动机：save'],
    skeleton: 'People save money.',
    translation: '使用公共交通的人会省钱。',
    quickRule: 'doing 如果贴着名词，先怀疑它在修饰这个名词。'
  },
  {
    id: 'done-main',
    title: '坑 2：把 done 当主句动词',
    sentence: 'The plan designed for beginners works well.',
    wrongRead: 'designed 是主发动机。',
    whyWrong: 'designed for beginners 是补充 plan 的特点，works 才说明 plan 怎么样。',
    correctBreakdown: ['主角：The plan', '修饰：designed for beginners', '主发动机：works'],
    skeleton: 'The plan works well.',
    translation: '为初学者设计的方案很有效。',
    quickRule: 'done 后面如果还能看到真正动词，先把 done 当修饰。'
  },
  {
    id: 'clause-main',
    title: '坑 3：从句动词抢主线',
    sentence: 'Students who read widely understand complex articles faster.',
    wrongRead: 'read 是整句主发动机。',
    whyWrong: 'who read widely 修饰 students，主句真正说的是 students understand articles。',
    correctBreakdown: ['主角：Students', '从句修饰：who read widely', '主发动机：understand'],
    skeleton: 'Students understand articles.',
    translation: '阅读面广的学生能更快理解复杂文章。',
    quickRule: 'who 后面的动词先别抢主线，回到 who 前面的名词和后面的主句动词。'
  },
  {
    id: 'although-main',
    title: '坑 4：although 前半句带跑',
    sentence: 'Although the method looks simple, it solves a real problem.',
    wrongRead: '作者重点是 method looks simple。',
    whyWrong: 'although 前半句是让步背景，逗号后 it solves a real problem 才是主线。',
    correctBreakdown: ['让步背景：Although the method looks simple', '主线：it solves a real problem'],
    skeleton: 'It solves a problem.',
    translation: '虽然这个方法看起来简单，但它解决了一个真实问题。',
    quickRule: 'although 开头时，读完逗号后面再定主线。'
  }
];

export const level3ErrorInfo: Partial<Record<ErrorTag, ErrorTagInfo>> = {
  'mainline-missing': {
    title: '找不到主线',
    plain: '你还没有先把整句话压成“谁 + 做/是 + 什么”。',
    action: '先圈主角，再只找一个能和主角连起来的主发动机。'
  },
  'predicate-confusion': {
    title: '主发动机误判',
    plain: '你把看起来像动作的词当成了撑起主句的发动机。',
    action: 'doing / done / to do 先放旁边，再看有没有更完整的主句动词。'
  },
  'modifier-as-mainline': {
    title: '把修饰当主线',
    plain: '你被贴在名词旁边的补充信息带走了。',
    action: '先删掉名词后面的修饰块，看看剩下的主句是否完整。'
  },
  'clause-function': {
    title: '从句动作抢主线',
    plain: '你把 who / when / although 等带出的小句动作当成了整句核心。',
    action: '先判断从句是在修饰、交代时间，还是让步背景，再回到主句。'
  },
  'modifier-target': {
    title: '修饰对象找错',
    plain: '你没看出 using / done / to do 到底贴着谁。',
    action: '看它离哪个名词最近，先把它当作这个名词的补充说明。'
  },
  'logic-reversal': {
    title: '让步重点读反',
    plain: '你被 although 前半句带跑，没抓住后半句的真正重点。',
    action: 'although 开头时，逗号后面的主句通常更值得先抓。'
  },
  'term-blocked': {
    title: '术语卡住',
    plain: '你不是不会读，而是被谓语、非谓语、从句这些词吓住了。',
    action: '先用人话：主发动机、假动词、背景句。'
  }
};

export const level3PracticeQuestions: PracticeQuestion[] = [
  {
    id: 'l3-q1',
    title: '题 1：using 先别抢主线',
    sentence: 'Students using study groups solve difficult problems quickly.',
    prompt: '哪一个是这句话的主线？',
    options: [
      { id: 'a', text: 'Study groups solve problems.' },
      { id: 'b', text: 'Students solve problems.' },
      { id: 'c', text: 'Students use groups.' },
      { id: 'd', text: 'Problems use students.' }
    ],
    correctOptionId: 'b',
    skeleton: 'Students solve problems.',
    explanation: 'using study groups 贴着 Students，是修饰信息。真正能和 Students 连起来撑起主句的是 solve。',
    analysisParts: [
      { id: 'l3-q1-subject', kind: 'subject', label: '主语', text: 'Students' },
      { id: 'l3-q1-modifier', kind: 'modifier', label: '修饰动作', text: 'using study groups' },
      { id: 'l3-q1-predicate', kind: 'predicate', label: '主发动机', text: 'solve' },
      { id: 'l3-q1-object', kind: 'object', label: '动作对象', text: 'difficult problems' }
    ],
    errorByOption: {
      a: ['modifier-target'],
      c: ['predicate-confusion'],
      d: ['mainline-missing']
    }
  },
  {
    id: 'l3-q2',
    title: '题 2：done 是修饰报告',
    sentence: 'The report published yesterday attracted wide attention.',
    prompt: '哪一个是这句话的主线？',
    options: [
      { id: 'a', text: 'The report attracted attention.' },
      { id: 'b', text: 'Yesterday attracted attention.' },
      { id: 'c', text: 'The report published yesterday.' },
      { id: 'd', text: 'Attention published the report.' }
    ],
    correctOptionId: 'a',
    skeleton: 'The report attracted attention.',
    explanation: 'published yesterday 补充 report 的发布时间，主句真正说的是 The report attracted wide attention。',
    analysisParts: [
      { id: 'l3-q2-subject', kind: 'subject', label: '主语', text: 'The report' },
      { id: 'l3-q2-modifier', kind: 'modifier', label: '修饰动作', text: 'published yesterday' },
      { id: 'l3-q2-predicate', kind: 'predicate', label: '主发动机', text: 'attracted' },
      { id: 'l3-q2-object', kind: 'object', label: '动作对象', text: 'wide attention' }
    ],
    errorByOption: {
      b: ['mainline-missing'],
      c: ['predicate-confusion'],
      d: ['modifier-target']
    }
  },
  {
    id: 'l3-q3',
    title: '题 3：to do 开头先当目的',
    sentence: 'To reduce stress, many students exercise after class.',
    prompt: '哪一个是这句话的主线？',
    options: [
      { id: 'a', text: 'Stress reduces students.' },
      { id: 'b', text: 'Students exercise.' },
      { id: 'c', text: 'Students reduce class.' },
      { id: 'd', text: 'Class exercises students.' }
    ],
    correctOptionId: 'b',
    skeleton: 'Students exercise.',
    explanation: 'To reduce stress 是目的背景，逗号后 many students exercise after class 才是主线。',
    analysisParts: [
      { id: 'l3-q3-background', kind: 'background', label: '目的背景', text: 'To reduce stress' },
      { id: 'l3-q3-subject', kind: 'subject', label: '主语', text: 'many students' },
      { id: 'l3-q3-predicate', kind: 'predicate', label: '主发动机', text: 'exercise' },
      { id: 'l3-q3-detail', kind: 'detail', label: '时间细节', text: 'after class' }
    ],
    errorByOption: {
      a: ['modifier-as-mainline'],
      c: ['predicate-confusion'],
      d: ['mainline-missing']
    }
  },
  {
    id: 'l3-q4',
    title: '题 4：studying 是谁的标签',
    sentence: 'Researchers studying sleep patterns found a surprising result.',
    prompt: '哪一个是这句话的主线？',
    options: [
      { id: 'a', text: 'Researchers found a result.' },
      { id: 'b', text: 'Sleep patterns found researchers.' },
      { id: 'c', text: 'Researchers study a result.' },
      { id: 'd', text: 'A result studied sleep.' }
    ],
    correctOptionId: 'a',
    skeleton: 'Researchers found a result.',
    explanation: 'studying sleep patterns 修饰 Researchers，真正主发动机是 found。',
    analysisParts: [
      { id: 'l3-q4-subject', kind: 'subject', label: '主语', text: 'Researchers' },
      { id: 'l3-q4-modifier', kind: 'modifier', label: '修饰动作', text: 'studying sleep patterns' },
      { id: 'l3-q4-predicate', kind: 'predicate', label: '主发动机', text: 'found' },
      { id: 'l3-q4-object', kind: 'object', label: '动作对象', text: 'a surprising result' }
    ],
    errorByOption: {
      b: ['mainline-missing'],
      c: ['predicate-confusion'],
      d: ['modifier-target']
    }
  },
  {
    id: 'l3-q5',
    title: '题 5：learned 不是主发动机',
    sentence: 'The skills learned in class become useful in real situations.',
    prompt: '哪一个是这句话的主线？',
    options: [
      { id: 'a', text: 'The skills become useful.' },
      { id: 'b', text: 'The skills learned class.' },
      { id: 'c', text: 'Class becomes useful.' },
      { id: 'd', text: 'Situations learn skills.' }
    ],
    correctOptionId: 'a',
    skeleton: 'The skills become useful.',
    explanation: 'learned in class 是补充 skills 的来源，become useful 才是主线。',
    analysisParts: [
      { id: 'l3-q5-subject', kind: 'subject', label: '主语', text: 'The skills' },
      { id: 'l3-q5-modifier', kind: 'modifier', label: '修饰动作', text: 'learned in class' },
      { id: 'l3-q5-predicate', kind: 'predicate', label: '主发动机', text: 'become' },
      { id: 'l3-q5-complement', kind: 'complement', label: '状态结果', text: 'useful' }
    ],
    errorByOption: {
      b: ['predicate-confusion'],
      c: ['modifier-target'],
      d: ['mainline-missing']
    }
  },
  {
    id: 'l3-q6',
    title: '题 6：who 里面的动词先降级',
    sentence: 'People who read widely develop better judgment.',
    prompt: '哪一个是这句话的主线？',
    options: [
      { id: 'a', text: 'People read widely.' },
      { id: 'b', text: 'People develop judgment.' },
      { id: 'c', text: 'Judgment reads people.' },
      { id: 'd', text: 'Widely develops judgment.' }
    ],
    correctOptionId: 'b',
    skeleton: 'People develop judgment.',
    explanation: 'who read widely 是修饰 People 的从句，主句真正说的是 People develop better judgment。',
    analysisParts: [
      { id: 'l3-q6-subject', kind: 'subject', label: '主语', text: 'People' },
      { id: 'l3-q6-clause', kind: 'detail', label: '从句动作', text: 'who read widely' },
      { id: 'l3-q6-predicate', kind: 'predicate', label: '主发动机', text: 'develop' },
      { id: 'l3-q6-object', kind: 'object', label: '动作对象', text: 'better judgment' }
    ],
    errorByOption: {
      a: ['clause-function'],
      c: ['mainline-missing'],
      d: ['modifier-as-mainline']
    }
  },
  {
    id: 'l3-q7',
    title: '题 7：when 前半句是时间背景',
    sentence: 'When the lecture ended, students discussed the key ideas.',
    prompt: '哪一个是这句话的主线？',
    options: [
      { id: 'a', text: 'The lecture ended.' },
      { id: 'b', text: 'Students discussed ideas.' },
      { id: 'c', text: 'Ideas ended students.' },
      { id: 'd', text: 'The lecture discussed ideas.' }
    ],
    correctOptionId: 'b',
    skeleton: 'Students discussed ideas.',
    explanation: 'When the lecture ended 交代时间，逗号后 students discussed the key ideas 是主线。',
    analysisParts: [
      { id: 'l3-q7-background', kind: 'background', label: '时间背景', text: 'When the lecture ended' },
      { id: 'l3-q7-subject', kind: 'subject', label: '主语', text: 'students' },
      { id: 'l3-q7-predicate', kind: 'predicate', label: '主发动机', text: 'discussed' },
      { id: 'l3-q7-object', kind: 'object', label: '动作对象', text: 'the key ideas' }
    ],
    errorByOption: {
      a: ['clause-function'],
      c: ['mainline-missing'],
      d: ['modifier-target']
    }
  },
  {
    id: 'l3-q8',
    title: '题 8：introduced 修饰 policy',
    sentence: 'A policy introduced to protect personal data requires companies to report risks.',
    prompt: '哪一个是这句话的主线？',
    options: [
      { id: 'a', text: 'A policy requires companies.' },
      { id: 'b', text: 'A policy introduced data.' },
      { id: 'c', text: 'Data requires risks.' },
      { id: 'd', text: 'Companies protect policy.' }
    ],
    correctOptionId: 'a',
    skeleton: 'A policy requires companies.',
    explanation: 'introduced to protect personal data 修饰 policy，requires 才是主句主发动机。',
    analysisParts: [
      { id: 'l3-q8-subject', kind: 'subject', label: '主语', text: 'A policy' },
      { id: 'l3-q8-modifier', kind: 'modifier', label: '修饰动作', text: 'introduced to protect personal data' },
      { id: 'l3-q8-predicate', kind: 'predicate', label: '主发动机', text: 'requires' },
      { id: 'l3-q8-object', kind: 'object', label: '动作对象', text: 'companies' }
    ],
    errorByOption: {
      b: ['predicate-confusion'],
      c: ['modifier-target'],
      d: ['mainline-missing']
    }
  },
  {
    id: 'l3-q9',
    title: '题 9：The number 才是主语核心',
    sentence: 'The number of students choosing online courses has increased quickly.',
    prompt: '哪一个是这句话的主线？',
    options: [
      { id: 'a', text: 'Students choose courses.' },
      { id: 'b', text: 'The number has increased.' },
      { id: 'c', text: 'Courses increased students.' },
      { id: 'd', text: 'Students have increased courses.' }
    ],
    correctOptionId: 'b',
    skeleton: 'The number has increased.',
    explanation: 'of students choosing online courses 都在补 The number，主发动机是 has increased。',
    analysisParts: [
      { id: 'l3-q9-subject', kind: 'subject', label: '主语核心', text: 'The number' },
      { id: 'l3-q9-modifier', kind: 'modifier', label: '修饰动作', text: 'choosing online courses' },
      { id: 'l3-q9-predicate', kind: 'predicate', label: '主发动机', text: 'has increased' },
      { id: 'l3-q9-detail', kind: 'detail', label: '程度细节', text: 'quickly' }
    ],
    errorByOption: {
      a: ['modifier-as-mainline'],
      c: ['mainline-missing'],
      d: ['modifier-target']
    }
  },
  {
    id: 'l3-q10',
    title: '题 10：although 前半句不是重点',
    sentence: 'Although the article looks difficult, its main idea is quite simple.',
    prompt: '哪一个是这句话的主线？',
    options: [
      { id: 'a', text: 'The article looks difficult.' },
      { id: 'b', text: 'Its main idea is simple.' },
      { id: 'c', text: 'The article is quite difficult.' },
      { id: 'd', text: 'Difficulty is the main idea.' }
    ],
    correctOptionId: 'b',
    skeleton: 'Its main idea is simple.',
    explanation: 'Although 前半句是让步背景，逗号后 its main idea is quite simple 才是主线。',
    analysisParts: [
      { id: 'l3-q10-background', kind: 'logic', label: '让步背景', text: 'Although the article looks difficult' },
      { id: 'l3-q10-subject', kind: 'subject', label: '主语', text: 'its main idea' },
      { id: 'l3-q10-predicate', kind: 'predicate', label: '主发动机', text: 'is' },
      { id: 'l3-q10-complement', kind: 'complement', label: '状态结果', text: 'quite simple' }
    ],
    errorByOption: {
      a: ['logic-reversal'],
      c: ['logic-reversal'],
      d: ['mainline-missing']
    }
  },
  {
    id: 'l3-q11',
    title: '题 11：collected 不是主线',
    sentence: 'Information collected from several surveys shows a clear trend.',
    prompt: '哪一个是这句话的主线？',
    options: [
      { id: 'a', text: 'Information shows a trend.' },
      { id: 'b', text: 'Surveys show information.' },
      { id: 'c', text: 'Information collected surveys.' },
      { id: 'd', text: 'A trend collected information.' }
    ],
    correctOptionId: 'a',
    skeleton: 'Information shows a trend.',
    explanation: 'collected from several surveys 修饰 Information，shows 才是主发动机。',
    analysisParts: [
      { id: 'l3-q11-subject', kind: 'subject', label: '主语', text: 'Information' },
      { id: 'l3-q11-modifier', kind: 'modifier', label: '修饰动作', text: 'collected from several surveys' },
      { id: 'l3-q11-predicate', kind: 'predicate', label: '主发动机', text: 'shows' },
      { id: 'l3-q11-object', kind: 'object', label: '动作对象', text: 'a clear trend' }
    ],
    errorByOption: {
      b: ['modifier-target'],
      c: ['predicate-confusion'],
      d: ['mainline-missing']
    }
  },
  {
    id: 'l3-q12',
    title: '题 12：designed to support 是修饰块',
    sentence: 'The program designed to support beginners allows students to practice daily.',
    prompt: '哪一个是这句话的主线？',
    options: [
      { id: 'a', text: 'Beginners allow students.' },
      { id: 'b', text: 'The program allows students.' },
      { id: 'c', text: 'The program designed beginners.' },
      { id: 'd', text: 'Students support the program.' }
    ],
    correctOptionId: 'b',
    skeleton: 'The program allows students.',
    explanation: 'designed to support beginners 修饰 The program，allows 才是主句发动机。',
    analysisParts: [
      { id: 'l3-q12-subject', kind: 'subject', label: '主语', text: 'The program' },
      { id: 'l3-q12-modifier', kind: 'modifier', label: '修饰动作', text: 'designed to support beginners' },
      { id: 'l3-q12-predicate', kind: 'predicate', label: '主发动机', text: 'allows' },
      { id: 'l3-q12-object', kind: 'object', label: '动作对象', text: 'students' }
    ],
    errorByOption: {
      a: ['mainline-missing'],
      c: ['predicate-confusion'],
      d: ['modifier-target']
    }
  },
  {
    id: 'l3-q13',
    title: '题 13：who are preparing 是修饰',
    sentence: 'Students who are preparing for exams often ignore basic sleep needs.',
    prompt: '哪一个是这句话的主线？',
    options: [
      { id: 'a', text: 'Students prepare exams.' },
      { id: 'b', text: 'Students ignore sleep needs.' },
      { id: 'c', text: 'Exams ignore students.' },
      { id: 'd', text: 'Sleep needs prepare students.' }
    ],
    correctOptionId: 'b',
    skeleton: 'Students ignore sleep needs.',
    explanation: 'who are preparing for exams 修饰 Students，主句真正说的是 Students often ignore basic sleep needs。',
    analysisParts: [
      { id: 'l3-q13-subject', kind: 'subject', label: '主语', text: 'Students' },
      { id: 'l3-q13-clause', kind: 'detail', label: '从句动作', text: 'who are preparing for exams' },
      { id: 'l3-q13-predicate', kind: 'predicate', label: '主发动机', text: 'ignore' },
      { id: 'l3-q13-object', kind: 'object', label: '动作对象', text: 'basic sleep needs' }
    ],
    errorByOption: {
      a: ['clause-function'],
      c: ['mainline-missing'],
      d: ['modifier-target']
    }
  },
  {
    id: 'l3-q14',
    title: '题 14：ability 后面一串先压缩',
    sentence: 'The ability to judge sources helps readers avoid misleading information.',
    prompt: '哪一个是这句话的主线？',
    options: [
      { id: 'a', text: 'The ability helps readers.' },
      { id: 'b', text: 'Sources judge readers.' },
      { id: 'c', text: 'Readers avoid ability.' },
      { id: 'd', text: 'Information helps sources.' }
    ],
    correctOptionId: 'a',
    skeleton: 'The ability helps readers.',
    explanation: 'to judge sources 修饰 ability，avoid misleading information 是 helps 后面的补充动作，主线先抓 The ability helps readers。',
    analysisParts: [
      { id: 'l3-q14-subject', kind: 'subject', label: '主语', text: 'The ability' },
      { id: 'l3-q14-modifier', kind: 'modifier', label: '修饰动作', text: 'to judge sources' },
      { id: 'l3-q14-predicate', kind: 'predicate', label: '主发动机', text: 'helps' },
      { id: 'l3-q14-object', kind: 'object', label: '动作对象', text: 'readers' }
    ],
    errorByOption: {
      b: ['modifier-as-mainline'],
      c: ['predicate-confusion'],
      d: ['mainline-missing']
    }
  },
  {
    id: 'l3-q15',
    title: '题 15：although + using 双干扰',
    sentence: 'Although using apps can save time, students still need a clear study plan.',
    prompt: '哪一个是这句话的主线？',
    options: [
      { id: 'a', text: 'Using apps can save time.' },
      { id: 'b', text: 'Apps need a plan.' },
      { id: 'c', text: 'Time saves students.' },
      { id: 'd', text: 'Students need a plan.' }
    ],
    correctOptionId: 'd',
    skeleton: 'Students need a plan.',
    explanation: 'Although using apps can save time 是让步背景，逗号后 students still need a clear study plan 才是主线。',
    analysisParts: [
      { id: 'l3-q15-background', kind: 'logic', label: '让步背景', text: 'Although using apps can save time' },
      { id: 'l3-q15-subject', kind: 'subject', label: '主语', text: 'students' },
      { id: 'l3-q15-predicate', kind: 'predicate', label: '主发动机', text: 'need' },
      { id: 'l3-q15-object', kind: 'object', label: '动作对象', text: 'a clear study plan' }
    ],
    errorByOption: {
      a: ['logic-reversal'],
      b: ['modifier-target'],
      c: ['mainline-missing']
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

export const level3Remediations: RemediationItem[] = [
  {
    id: 'rem-mainline',
    tag: 'mainline-missing',
    title: '补救 A：压成谁做什么',
    explanation: level3ErrorInfo['mainline-missing']?.plain ?? '',
    questions: [
      remediationQuestion(
        'm1',
        'mainline-missing',
        'Young readers with clear goals finish books faster.',
        '主线是：',
        [
          { id: 'a', text: 'Readers finish books.' },
          { id: 'b', text: 'Goals finish books.' },
          { id: 'c', text: 'Books finish readers.' }
        ],
        'a',
        'Readers finish books.',
        'with clear goals 是补充 readers，finish 是主发动机。'
      )
    ]
  },
  {
    id: 'rem-predicate',
    tag: 'predicate-confusion',
    title: '补救 B：假动词先放旁边',
    explanation: level3ErrorInfo['predicate-confusion']?.plain ?? '',
    questions: [
      remediationQuestion(
        'p1',
        'predicate-confusion',
        'The guide written for new users explains every step.',
        '主发动机是：',
        [
          { id: 'a', text: 'written' },
          { id: 'b', text: 'explains' },
          { id: 'c', text: 'users' }
        ],
        'b',
        'The guide explains every step.',
        'written for new users 是修饰 guide，explains 才撑起主句。'
      )
    ]
  },
  {
    id: 'rem-modifier',
    tag: 'modifier-as-mainline',
    title: '补救 C：修饰块先括起来',
    explanation: level3ErrorInfo['modifier-as-mainline']?.plain ?? '',
    questions: [
      remediationQuestion(
        'mod1',
        'modifier-as-mainline',
        'Students carrying heavy bags walked slowly.',
        '主线是：',
        [
          { id: 'a', text: 'Students carried bags.' },
          { id: 'b', text: 'Students walked slowly.' },
          { id: 'c', text: 'Bags walked slowly.' }
        ],
        'b',
        'Students walked slowly.',
        'carrying heavy bags 修饰 students，walked 是主发动机。'
      )
    ]
  },
  {
    id: 'rem-clause',
    tag: 'clause-function',
    title: '补救 D：从句动作先降级',
    explanation: level3ErrorInfo['clause-function']?.plain ?? '',
    questions: [
      remediationQuestion(
        'c1',
        'clause-function',
        'Workers who use new tools complete tasks faster.',
        '主线是：',
        [
          { id: 'a', text: 'Workers use tools.' },
          { id: 'b', text: 'Workers complete tasks.' },
          { id: 'c', text: 'Tools complete workers.' }
        ],
        'b',
        'Workers complete tasks.',
        'who use new tools 修饰 workers，complete 才是主发动机。'
      )
    ]
  },
  {
    id: 'rem-target',
    tag: 'modifier-target',
    title: '补救 E：看修饰贴着谁',
    explanation: level3ErrorInfo['modifier-target']?.plain ?? '',
    questions: [
      remediationQuestion(
        't1',
        'modifier-target',
        'The course designed for adults starts next week.',
        '主线是：',
        [
          { id: 'a', text: 'Adults start the course.' },
          { id: 'b', text: 'The course starts next week.' },
          { id: 'c', text: 'The course designed adults.' }
        ],
        'b',
        'The course starts next week.',
        'designed for adults 贴着 course，starts 才是主发动机。'
      )
    ]
  },
  {
    id: 'rem-logic',
    tag: 'logic-reversal',
    title: '补救 F：although 后面找主线',
    explanation: level3ErrorInfo['logic-reversal']?.plain ?? '',
    questions: [
      remediationQuestion(
        'l1',
        'logic-reversal',
        'Although the task seems easy, it requires patience.',
        '主线是：',
        [
          { id: 'a', text: 'The task seems easy.' },
          { id: 'b', text: 'It requires patience.' },
          { id: 'c', text: 'Patience seems easy.' }
        ],
        'b',
        'It requires patience.',
        'Although 前面是让步背景，逗号后面是主线。'
      )
    ]
  }
];

export const level3Summary = [
  '一句话先只找一个主发动机。',
  'doing / done / to do 先别急着当主线。',
  'who / when / although 带出的动词先降级。',
  '长句先压成“谁 + 做/是 + 什么”，再补细节。'
];
