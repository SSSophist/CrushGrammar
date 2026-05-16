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

export const level8Steps: LessonStep[] = [
  {
    id: 'time-first',
    title: '第一步：先定时间',
    body: [
      '先看句子在说现在习惯/普遍事实、过去事件，还是已经发生并影响现在。',
      '四六级写译最怕时间词和动词形式不一致。'
    ]
  },
  {
    id: 'voice-second',
    title: '第二步：再看主动被动',
    body: ['问主语是动作发出者还是承受者。', '如果主语是“被建设、被使用、被认为”，英语常要 be + done。']
  },
  {
    id: 'agreement-third',
    title: '第三步：最后查主谓一致',
    body: ['真正主语核心是单数还是复数，决定动词加不加 s。', 'of/with/who 后面的长尾巴先别抢主语。']
  }
];

export const level8Terms: TermCard[] = [
  {
    id: 'tense',
    term: '时态',
    plain: '动词用什么时间形态。',
    function: '告诉读者这件事发生在现在、过去，还是已经发生并影响现在。',
    examUse: '写作和翻译里能少掉一大类基础错误。',
    skipForNow: '不用背完整十六时态，先会一般现在、一般过去、现在完成。'
  },
  {
    id: 'voice',
    term: '语态',
    plain: '主语是主动做，还是被别人做。',
    function: '决定用 do 还是 be done。',
    examUse: '翻译“中国被建设/被使用/被认为”时尤其常用。',
    skipForNow: '不用研究所有被动结构，先会 be + done。'
  },
  {
    id: 'agreement',
    term: '主谓一致',
    plain: '主语核心和动词数量要对上。',
    function: '单数主语常让一般现在动词加 s，复数主语不加。',
    examUse: '作文里 he have / the number have 这类错很显眼。',
    skipForNow: '不用背复杂例外，先找真正主语核心。'
  }
];

export const level8Examples: LessonExample[] = [
  {
    id: 'agreement-basic',
    title: '例句 1：单数主语，动词要跟上',
    sentence: 'Every student ___ a clear study plan.',
    options: [
      { id: 'a', text: 'need' },
      { id: 'b', text: 'needs' },
      { id: 'c', text: 'needed' },
      { id: 'd', text: 'is needed' }
    ],
    correctOptionId: 'b',
    engine: 'Every student needs a plan.',
    skeleton: 'Every student 看作单数，所以一般现在用 needs。',
    details: ['Every student 是主语核心。', '说长期需要，用一般现在。', 'student 是单数，动词用 needs。'],
    translation: '每个学生都需要一个清晰的学习计划。',
    warning: '看到 every，先按单数处理。'
  },
  {
    id: 'passive-past',
    title: '例句 2：主语被做，用 be done',
    sentence: 'The bridge ___ in 2010.',
    options: [
      { id: 'a', text: 'built' },
      { id: 'b', text: 'was built' },
      { id: 'c', text: 'builds' },
      { id: 'd', text: 'is build' }
    ],
    correctOptionId: 'b',
    engine: 'The bridge was built.',
    skeleton: '桥不是自己建造自己，主语承受动作；in 2010 是过去时间，所以 was built。',
    details: ['The bridge 是承受动作的对象。', 'build 变被动要用 be built。', 'in 2010 提醒用过去：was built。'],
    translation: '这座桥建于 2010 年。'
  },
  {
    id: 'present-habit',
    title: '例句 3：普遍习惯，用一般现在',
    sentence: 'Many people ___ mobile payments every day.',
    options: [
      { id: 'a', text: 'uses' },
      { id: 'b', text: 'used' },
      { id: 'c', text: 'use' },
      { id: 'd', text: 'are used' }
    ],
    correctOptionId: 'c',
    engine: 'Many people use payments.',
    skeleton: 'every day 表示习惯；Many people 是复数，动词用 use。',
    details: ['Many people 是复数主语。', 'every day 是习惯信号。', 'use 不加 s，也不是被动。'],
    translation: '许多人每天使用移动支付。'
  }
];

export const level8Traps: CommonTrap[] = [
  {
    id: 'number-of',
    title: '坑 1：of 后面的复数抢走动词',
    sentence: 'The number of students has increased in recent years.',
    wrongRead: 'students 是复数，所以用 have increased。',
    whyWrong: '真正主语核心是 The number，不是 students。',
    correctBreakdown: ['主语核心：The number', '修饰范围：of students', '动词：has increased'],
    skeleton: 'The number has increased.',
    translation: '近年来，学生数量已经增加。',
    quickRule: 'The number of... 先看 number，动词按单数处理。'
  },
  {
    id: 'passive-needed',
    title: '坑 2：中文没有“被”，英文也可能要被动',
    sentence: 'The museum was built in 1998.',
    wrongRead: 'The museum built in 1998.',
    whyWrong: '博物馆不是动作发出者，它是被建造出来的。',
    correctBreakdown: ['主语：The museum', '动作方向：被建造', '过去时间：in 1998'],
    skeleton: 'The museum was built.',
    translation: '这座博物馆建于 1998 年。',
    quickRule: '主语承受动作，就先想到 be done。'
  },
  {
    id: 'active-needed',
    title: '坑 3：看到 used 就乱用被动',
    sentence: 'People use public transport every day.',
    wrongRead: 'People are used public transport every day.',
    whyWrong: 'people 是动作发出者，他们主动使用公共交通。',
    correctBreakdown: ['主语：People', '动作方向：主动使用', '时间：every day 表示习惯'],
    skeleton: 'People use transport.',
    translation: '人们每天使用公共交通。',
    quickRule: '先问谁做动作，不要机械套 be done。'
  }
];

export const level8ErrorInfo: Partial<Record<ErrorTag, ErrorTagInfo>> = {
  'writing-translation-basics': {
    title: '写译基础检查漏掉',
    plain: '你急着翻意思，忘了最后检查时间、主动被动和主谓一致。',
    action: '每个写译句子最后做三查：时间、主被动、主语核心。'
  },
  'form-mismatch': {
    title: '动词形式不匹配',
    plain: '时间词、主语数量或被动形式和动词没有对上。',
    action: '先圈时间词，再看主语单复数，最后检查 be done 是否完整。'
  },
  'mainline-missing': {
    title: '主语核心没抓住',
    plain: '你被 of/with/who 后面的尾巴带走了，没有看真正决定动词的主语。',
    action: '先把修饰尾巴降级，只保留主语核心和主要动词。'
  },
  'modifier-target': {
    title: '修饰对象找错',
    plain: '你把修饰信息当成真正主语，导致动词形式跟错人。',
    action: '问这个尾巴是在说明谁，再回到被说明的核心名词。'
  },
  'logic-reversal': {
    title: '主被动方向读反',
    plain: '你没有分清主语是在做动作，还是在承受动作。',
    action: '问一句人话：这个主语能不能自己完成这个动作？不能就考虑 be done。'
  },
  'term-blocked': {
    title: '术语卡住',
    plain: '你被时态、语态、主谓一致这些名字吓住了。',
    action: '把术语翻成人话：什么时候、谁做还是被做、主语是一个还是多个。'
  }
};

export const level8PracticeQuestions: PracticeQuestion[] = [
  {
    id: 'l8-q1',
    title: 'every 单数',
    sentence: 'Every student in the class ___ a clear study plan before the final exam.',
    prompt: '这句话动词最稳的是哪个？',
    options: [
      { id: 'a', text: 'needs' },
      { id: 'b', text: 'need' },
      { id: 'c', text: 'needed' },
      { id: 'd', text: 'is needed' }
    ],
    correctOptionId: 'a',
    skeleton: 'Every student needs a plan.',
    explanation: '主语核心是 Every student，虽然后面有 in the class，但核心仍是单数；说长期需要，用 needs。',
    analysisParts: [
      { id: 'l8-q1-subject', kind: 'subject', label: '主语核心', text: 'Every student' },
      { id: 'l8-q1-modifier', kind: 'modifier', label: '地点范围', text: 'in the class' },
      { id: 'l8-q1-predicate', kind: 'predicate', label: '动词', text: 'needs' },
      { id: 'l8-q1-object', kind: 'object', label: '对象', text: 'a clear study plan' }
    ],
    errorByOption: { b: ['mainline-missing'], c: ['form-mismatch'], d: ['logic-reversal'] }
  },
  {
    id: 'l8-q2',
    title: 'number of',
    sentence: 'The number of online learners in rural areas of the country ___ in recent years.',
    prompt: '这句话的正确动词形式是：',
    options: [
      { id: 'a', text: 'have increased' },
      { id: 'b', text: 'has increased' },
      { id: 'c', text: 'are increased' },
      { id: 'd', text: 'increase' }
    ],
    correctOptionId: 'b',
    skeleton: 'The number has increased.',
    explanation: 'of online learners 是修饰范围，真正主语核心是 The number，所以用 has increased。',
    analysisParts: [
      { id: 'l8-q2-subject', kind: 'subject', label: '主语核心', text: 'The number' },
      { id: 'l8-q2-modifier', kind: 'modifier', label: '修饰范围', text: 'of online learners' },
      { id: 'l8-q2-predicate', kind: 'predicate', label: '动词', text: 'has increased' },
      { id: 'l8-q2-detail', kind: 'detail', label: '时间', text: 'in recent years' }
    ],
    errorByOption: { a: ['mainline-missing'], c: ['logic-reversal'], d: ['form-mismatch'] }
  },
  {
    id: 'l8-q3',
    title: '复数习惯',
    sentence: 'Many students ___ key points from several difficult chapters before final exams.',
    prompt: '这句话最自然的动词形式是：',
    options: [
      { id: 'a', text: 'reviews' },
      { id: 'b', text: 'review' },
      { id: 'c', text: 'reviewed' },
      { id: 'd', text: 'are reviewed' }
    ],
    correctOptionId: 'b',
    skeleton: 'Many students review points.',
    explanation: 'Many students 是复数，before exams 是习惯性场景，所以用 review。',
    analysisParts: [
      { id: 'l8-q3-subject', kind: 'subject', label: '主语', text: 'Many students' },
      { id: 'l8-q3-predicate', kind: 'predicate', label: '动词', text: 'review' },
      { id: 'l8-q3-object', kind: 'object', label: '对象', text: 'key points' },
      { id: 'l8-q3-detail', kind: 'detail', label: '场景', text: 'before exams' }
    ],
    errorByOption: { a: ['form-mismatch'], c: ['form-mismatch'], d: ['logic-reversal'] }
  },
  {
    id: 'l8-q4',
    title: '过去被动',
    sentence: 'The rules ___ clearly by the teacher before the practice test yesterday.',
    prompt: '这句话最稳的动词形式是：',
    options: [
      { id: 'a', text: 'explained' },
      { id: 'b', text: 'were explained' },
      { id: 'c', text: 'explain' },
      { id: 'd', text: 'are explaining' }
    ],
    correctOptionId: 'b',
    skeleton: 'The rules were explained.',
    explanation: 'rules 是被解释的内容，不是解释别人；yesterday 提醒用过去，所以是 were explained。',
    analysisParts: [
      { id: 'l8-q4-subject', kind: 'subject', label: '主语', text: 'The rules' },
      { id: 'l8-q4-predicate', kind: 'predicate', label: '被动动词', text: 'were explained' },
      { id: 'l8-q4-detail', kind: 'detail', label: '方式', text: 'clearly' },
      { id: 'l8-q4-time', kind: 'background', label: '过去时间', text: 'yesterday' }
    ],
    errorByOption: { a: ['logic-reversal'], c: ['mainline-missing'], d: ['term-blocked'] }
  },
  {
    id: 'l8-q5',
    title: '单数事实',
    sentence: 'This method ___ beginners understand long sentences with several hidden modifiers.',
    prompt: '这句话最稳的动词形式是：',
    options: [
      { id: 'a', text: 'helps' },
      { id: 'b', text: 'help' },
      { id: 'c', text: 'helped' },
      { id: 'd', text: 'is helped' }
    ],
    correctOptionId: 'a',
    skeleton: 'This method helps beginners.',
    explanation: '真正决定 helps 的是 This method，不是后面的 beginners 或 long sentences。',
    analysisParts: [
      { id: 'l8-q5-subject', kind: 'subject', label: '主语', text: 'This method' },
      { id: 'l8-q5-predicate', kind: 'predicate', label: '动词', text: 'helps' },
      { id: 'l8-q5-object', kind: 'object', label: '对象', text: 'beginners' },
      { id: 'l8-q5-complement', kind: 'complement', label: '补充动作', text: 'understand long sentences' }
    ],
    errorByOption: { b: ['mainline-missing'], c: ['modifier-target'], d: ['term-blocked'] }
  },
  {
    id: 'l8-q6',
    title: '复数被动过去',
    sentence: 'Several useful apps for vocabulary review among college students ___ last year.',
    prompt: '这句话最稳的动词形式是：',
    options: [
      { id: 'a', text: 'introduced' },
      { id: 'b', text: 'were introduced' },
      { id: 'c', text: 'has introduced' },
      { id: 'd', text: 'are introduce' }
    ],
    correctOptionId: 'b',
    skeleton: 'Apps were introduced.',
    explanation: 'apps 是被介绍出来的，last year 是过去时间；复数主语用 were introduced。',
    analysisParts: [
      { id: 'l8-q6-subject', kind: 'subject', label: '主语', text: 'Several useful apps' },
      { id: 'l8-q6-predicate', kind: 'predicate', label: '被动动词', text: 'were introduced' },
      { id: 'l8-q6-time', kind: 'background', label: '过去时间', text: 'last year' }
    ],
    errorByOption: { a: ['logic-reversal'], c: ['modifier-target'], d: ['form-mismatch'] }
  },
  {
    id: 'l8-q7',
    title: 'was built',
    sentence: 'The new library for community learners ___ near the campus in 2020.',
    prompt: '这句话最稳的动词形式是：',
    options: [
      { id: 'a', text: 'built' },
      { id: 'b', text: 'was built' },
      { id: 'c', text: 'builds' },
      { id: 'd', text: 'is build' }
    ],
    correctOptionId: 'b',
    skeleton: 'The library was built.',
    explanation: 'The new library 是被建造的对象，in 2020 是过去时间，所以用 was built。',
    analysisParts: [
      { id: 'l8-q7-subject', kind: 'subject', label: '主语', text: 'The new library' },
      { id: 'l8-q7-predicate', kind: 'predicate', label: '被动动词', text: 'was built' },
      { id: 'l8-q7-place', kind: 'detail', label: '地点', text: 'near the campus' },
      { id: 'l8-q7-time', kind: 'background', label: '过去时间', text: 'in 2020' }
    ],
    errorByOption: { a: ['logic-reversal'], c: ['mainline-missing'], d: ['form-mismatch'] }
  },
  {
    id: 'l8-q8',
    title: '复数主动',
    sentence: 'Good habits developed early during the semester ___ exam preparation easier.',
    prompt: '这句话最稳的动词形式是：',
    options: [
      { id: 'a', text: 'make' },
      { id: 'b', text: 'makes' },
      { id: 'c', text: 'made' },
      { id: 'd', text: 'are made' }
    ],
    correctOptionId: 'a',
    skeleton: 'Good habits make preparation easier.',
    explanation: 'Good habits 是复数主语，而且是主动产生影响，所以用 make。',
    analysisParts: [
      { id: 'l8-q8-subject', kind: 'subject', label: '主语', text: 'Good habits' },
      { id: 'l8-q8-predicate', kind: 'predicate', label: '动词', text: 'make' },
      { id: 'l8-q8-object', kind: 'object', label: '对象', text: 'exam preparation' },
      { id: 'l8-q8-complement', kind: 'complement', label: '结果', text: 'easier' }
    ],
    errorByOption: { b: ['mainline-missing'], c: ['term-blocked'], d: ['logic-reversal'] }
  },
  {
    id: 'l8-q9',
    title: 'quality 单数',
    sentence: 'The quality of the answers in writing tasks during exams ___ on clear thinking.',
    prompt: '这句话最稳的动词形式是：',
    options: [
      { id: 'a', text: 'depend' },
      { id: 'b', text: 'depends' },
      { id: 'c', text: 'depended' },
      { id: 'd', text: 'are depended' }
    ],
    correctOptionId: 'b',
    skeleton: 'The quality depends on thinking.',
    explanation: 'of the answers 修饰 The quality，真正主语核心是单数 quality。',
    analysisParts: [
      { id: 'l8-q9-subject', kind: 'subject', label: '主语核心', text: 'The quality' },
      { id: 'l8-q9-modifier', kind: 'modifier', label: '修饰范围', text: 'of the answers' },
      { id: 'l8-q9-predicate', kind: 'predicate', label: '动词', text: 'depends' },
      { id: 'l8-q9-object', kind: 'object', label: '依靠对象', text: 'clear thinking' }
    ],
    errorByOption: { a: ['mainline-missing'], c: ['modifier-target'], d: ['term-blocked'] }
  },
  {
    id: 'l8-q10',
    title: '现在被动',
    sentence: 'These skills ___ in reading and writing throughout the whole course.',
    prompt: '这句话最稳的动词形式是：',
    options: [
      { id: 'a', text: 'are used' },
      { id: 'b', text: 'use' },
      { id: 'c', text: 'is used' },
      { id: 'd', text: 'used' }
    ],
    correctOptionId: 'a',
    skeleton: 'These skills are used.',
    explanation: 'skills 是被使用的东西；These skills 是复数，所以用 are used。',
    analysisParts: [
      { id: 'l8-q10-subject', kind: 'subject', label: '主语', text: 'These skills' },
      { id: 'l8-q10-predicate', kind: 'predicate', label: '被动动词', text: 'are used' },
      { id: 'l8-q10-detail', kind: 'detail', label: '使用场景', text: 'in reading and writing' }
    ],
    errorByOption: { b: ['logic-reversal'], c: ['mainline-missing'], d: ['form-mismatch'] }
  },
  {
    id: 'l8-q11',
    title: 'goal 单数',
    sentence: 'A clear goal before each practice session ___ students manage time better.',
    prompt: '这句话最稳的动词形式是：',
    options: [
      { id: 'a', text: 'helps' },
      { id: 'b', text: 'help' },
      { id: 'c', text: 'are helped' },
      { id: 'd', text: 'helped' }
    ],
    correctOptionId: 'a',
    skeleton: 'A clear goal helps students.',
    explanation: 'A clear goal 是单数主语，主动帮助学生管理时间，所以 helps 最稳。',
    analysisParts: [
      { id: 'l8-q11-subject', kind: 'subject', label: '主语', text: 'A clear goal' },
      { id: 'l8-q11-predicate', kind: 'predicate', label: '动词', text: 'helps' },
      { id: 'l8-q11-object', kind: 'object', label: '对象', text: 'students' },
      { id: 'l8-q11-complement', kind: 'complement', label: '补充动作', text: 'manage time better' }
    ],
    errorByOption: { b: ['mainline-missing'], c: ['logic-reversal'], d: ['modifier-target'] }
  },
  {
    id: 'l8-q12',
    title: '节日被庆祝',
    sentence: 'Many traditional festivals with local customs ___ across China every year.',
    prompt: '这句话最稳的动词形式是：',
    options: [
      { id: 'a', text: 'are celebrated' },
      { id: 'b', text: 'celebrate' },
      { id: 'c', text: 'is celebrated' },
      { id: 'd', text: 'celebrated' }
    ],
    correctOptionId: 'a',
    skeleton: 'Festivals are celebrated.',
    explanation: '节日是被庆祝的对象；Many traditional festivals 是复数，所以用 are celebrated。',
    analysisParts: [
      { id: 'l8-q12-subject', kind: 'subject', label: '主语', text: 'Many traditional festivals' },
      { id: 'l8-q12-predicate', kind: 'predicate', label: '被动动词', text: 'are celebrated' },
      { id: 'l8-q12-detail', kind: 'detail', label: '范围', text: 'across China' }
    ],
    errorByOption: { b: ['logic-reversal'], c: ['modifier-target'], d: ['form-mismatch'] }
  },
  {
    id: 'l8-q13',
    title: 'report shows',
    sentence: 'The report based on three surveys of college students ___ a clear trend.',
    prompt: '这句话最稳的动词形式是：',
    options: [
      { id: 'a', text: 'show' },
      { id: 'b', text: 'showed' },
      { id: 'c', text: 'shows' },
      { id: 'd', text: 'is shown' }
    ],
    correctOptionId: 'c',
    skeleton: 'The report shows a trend.',
    explanation: 'based on three surveys 修饰 report，真正主线是 The report shows a clear trend。',
    analysisParts: [
      { id: 'l8-q13-subject', kind: 'subject', label: '主语核心', text: 'The report' },
      { id: 'l8-q13-modifier', kind: 'modifier', label: '修饰', text: 'based on three surveys' },
      { id: 'l8-q13-predicate', kind: 'predicate', label: '主句动词', text: 'shows' },
      { id: 'l8-q13-object', kind: 'object', label: '对象', text: 'a clear trend' }
    ],
    errorByOption: { a: ['term-blocked'], b: ['mainline-missing'], d: ['modifier-target'] }
  },
  {
    id: 'l8-q14',
    title: 'past signal',
    sentence: 'In the past, people in small markets ___ for most goods in cash.',
    prompt: '这句话最稳的动词形式是：',
    options: [
      { id: 'a', text: 'paid' },
      { id: 'b', text: 'pay' },
      { id: 'c', text: 'are paid' },
      { id: 'd', text: 'pays' }
    ],
    correctOptionId: 'a',
    skeleton: 'People paid for goods.',
    explanation: 'In the past 直接提醒这是过去情况，所以主要动词用 paid。',
    analysisParts: [
      { id: 'l8-q14-time', kind: 'background', label: '过去时间', text: 'In the past' },
      { id: 'l8-q14-subject', kind: 'subject', label: '主语', text: 'people' },
      { id: 'l8-q14-predicate', kind: 'predicate', label: '动词', text: 'paid' },
      { id: 'l8-q14-object', kind: 'object', label: '对象', text: 'most goods' }
    ],
    errorByOption: { b: ['form-mismatch'], c: ['mainline-missing'], d: ['logic-reversal'] }
  },
  {
    id: 'l8-q15',
    title: 'although background',
    sentence: 'Although online learning is convenient, students still ___ self-discipline during long courses.',
    prompt: '这句话最稳的动词形式是：',
    options: [
      { id: 'a', text: 'need' },
      { id: 'b', text: 'needs' },
      { id: 'c', text: 'needed' },
      { id: 'd', text: 'are needed' }
    ],
    correctOptionId: 'a',
    skeleton: 'Students need self-discipline.',
    explanation: 'Although 引导的是让步背景；逗号后主句主语是 students，复数主语用 need。',
    analysisParts: [
      { id: 'l8-q15-bg', kind: 'logic', label: '让步背景', text: 'Although online learning is convenient' },
      { id: 'l8-q15-subject', kind: 'subject', label: '主句主语', text: 'students' },
      { id: 'l8-q15-predicate', kind: 'predicate', label: '动词', text: 'need' },
      { id: 'l8-q15-object', kind: 'object', label: '对象', text: 'self-discipline' }
    ],
    errorByOption: { b: ['logic-reversal'], c: ['form-mismatch'], d: ['mainline-missing'] }
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

export const level8Remediations: RemediationItem[] = [
  {
    id: 'rem-writing-basics',
    tag: 'writing-translation-basics',
    title: '补救 A：写译三查',
    explanation: level8ErrorInfo['writing-translation-basics']?.plain ?? '',
    questions: [
      remediationQuestion(
        'l8-rem-writing',
        'writing-translation-basics',
        'The habit helps students study every day.',
        '最后检查时先看哪三件事？',
        [
          { id: 'a', text: '时间、主动被动、主语核心' },
          { id: 'b', text: '单词长度、标点、字体' },
          { id: 'c', text: '只看中文意思' }
        ],
        'a',
        'The habit helps students.',
        '写译基础检查先抓时间、主被动、主谓一致。'
      )
    ]
  },
  {
    id: 'rem-form',
    tag: 'form-mismatch',
    title: '补救 B：动词形式对齐',
    explanation: level8ErrorInfo['form-mismatch']?.plain ?? '',
    questions: [
      remediationQuestion(
        'l8-rem-form',
        'form-mismatch',
        'Last year, the school opened a new reading room.',
        '动词最稳的是：',
        [
          { id: 'a', text: 'opens' },
          { id: 'b', text: 'opened' },
          { id: 'c', text: 'open' }
        ],
        'b',
        'The school opened a room.',
        'Last year 是过去时间，动词用 opened。'
      )
    ]
  },
  {
    id: 'rem-mainline',
    tag: 'mainline-missing',
    title: '补救 C：抓主语核心',
    explanation: level8ErrorInfo['mainline-missing']?.plain ?? '',
    questions: [
      remediationQuestion(
        'l8-rem-main',
        'mainline-missing',
        'The price of these books for exam review is reasonable.',
        '主语核心是：',
        [
          { id: 'a', text: 'books' },
          { id: 'b', text: 'The price' },
          { id: 'c', text: 'reasonable' }
        ],
        'b',
        'The price is reasonable.',
        'of these books 是修饰范围，核心是 The price。'
      )
    ]
  },
  {
    id: 'rem-target',
    tag: 'modifier-target',
    title: '补救 D：别让尾巴抢主语',
    explanation: level8ErrorInfo['modifier-target']?.plain ?? '',
    questions: [
      remediationQuestion(
        'l8-rem-target',
        'modifier-target',
        'A list of useful words from reading passages helps beginners.',
        'helps 跟谁一致？',
        [
          { id: 'a', text: 'A list' },
          { id: 'b', text: 'words' },
          { id: 'c', text: 'beginners' }
        ],
        'a',
        'A list helps beginners.',
        'of useful words 修饰 A list。'
      )
    ]
  },
  {
    id: 'rem-voice',
    tag: 'logic-reversal',
    title: '补救 E：判断主被动',
    explanation: level8ErrorInfo['logic-reversal']?.plain ?? '',
    questions: [
      remediationQuestion(
        'l8-rem-voice',
        'logic-reversal',
        'This technology is widely used in daily life.',
        '为什么用 is used？',
        [
          { id: 'a', text: 'technology 被使用' },
          { id: 'b', text: 'technology 主动使用生活' },
          { id: 'c', text: 'daily 是主语' }
        ],
        'a',
        'Technology is used.',
        '技术是被人使用的，所以用被动。'
      )
    ]
  },
  {
    id: 'rem-term',
    tag: 'term-blocked',
    title: '补救 F：术语翻成人话',
    explanation: level8ErrorInfo['term-blocked']?.plain ?? '',
    questions: [
      remediationQuestion(
        'l8-rem-term',
        'term-blocked',
        'The answer depends on the question in the passage.',
        '“主谓一致”先问哪句话？',
        [
          { id: 'a', text: '真正主语是一个还是多个？' },
          { id: 'b', text: '这个词有多高级？' },
          { id: 'c', text: '中文有没有被字？' }
        ],
        'a',
        'The answer depends.',
        '主谓一致先找真正主语核心，再看动词。'
      )
    ]
  }
];

export const level8Summary = [
  '写译先做三查：时间、主动被动、主谓一致。',
  '有过去时间词，动词别留现在式。',
  '主语被动作影响，用 be done。',
  'of/with/who 后尾巴不要抢主语核心。'
];
