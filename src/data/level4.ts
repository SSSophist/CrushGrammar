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

export const level4Steps: LessonStep[] = [
  {
    id: 'thing',
    title: '第一步：先看它是不是“当一个东西”',
    body: [
      '一整坨句子如果能放在主语或宾语位置，就先当成一个“东西”处理。',
      '人话判断：它是不是在回答“什么事 / 什么内容”？如果是，就不要急着拆术语。'
    ]
  },
  {
    id: 'modifier',
    title: '第二步：看它是不是贴着名词做说明',
    body: [
      'who / which / that 后面跟一小句，如果紧贴在某个名词后面，常常是在解释“哪个人 / 哪个东西”。',
      '这类从句先当修饰语：它重要，但不要让里面的动作抢走整句主线。'
    ]
  },
  {
    id: 'logic',
    title: '第三步：看它是不是交代背景逻辑',
    body: [
      'when / because / if / although 这类开头，通常是在交代时间、原因、条件、让步。',
      '先把它当背景，再回到主句找真正要表达的核心。'
    ]
  }
];

export const level4Terms: TermCard[] = [
  {
    id: 'clause',
    term: '从句',
    plain: '一坨里面也有“谁 + 动作”的小句子。',
    function: '它可以当一个东西、修饰一个东西，或者交代背景逻辑。',
    examUse: '读长句时不用先背名字，先问它在句子里干嘛。',
    skipForNow: '不用纠结名词性从句、定语从句、状语从句的完整定义。'
  },
  {
    id: 'thing-clause',
    term: '当一个东西',
    plain: '整坨从句像一个名词一样，被句子拿来当主语或宾语。',
    function: '常回答“什么事 / 什么内容”。',
    examUse: '看到 That / What / whether 引出一整坨时，先看它是不是占了主语或宾语位。',
    skipForNow: '不用立刻判断它叫主语从句还是宾语从句。'
  },
  {
    id: 'modifier-clause',
    term: '修饰一个东西',
    plain: '从句贴在名词后面，解释这个名词到底是哪一个、什么样。',
    function: '常见信号是 who / which / that / why，但信号不是答案，位置才关键。',
    examUse: '阅读里先把修饰从句括起来，主线会清楚很多。',
    skipForNow: '不用背限定性、非限定性这些细分。'
  },
  {
    id: 'logic-clause',
    term: '交代背景逻辑',
    plain: '从句说明主句发生的时间、原因、条件或让步。',
    function: '它像一句话的背景字幕，不一定是作者最想强调的主线。',
    examUse: 'because / when / if / although 开头时，先等主句出现再定重点。',
    skipForNow: '不用把所有状语从句类型一次性背完。'
  },
  {
    id: 'signal-word',
    term: '引导词',
    plain: 'that / who / which / when / because / although / if 这类把从句带出来的词。',
    function: '它能提示方向，但不能替你做最终判断。',
    examUse: '考试里看到引导词，先提醒自己：后面可能是一坨从句。',
    skipForNow: '不要只靠引导词硬套规则，同一个 that 可能干不同的活。'
  }
];

export const level4Examples: LessonExample[] = [
  {
    id: 'thing-subject',
    title: '例句 1：整坨从句可以当主语',
    sentence: 'That he improved quickly surprised everyone.',
    options: [
      { id: 'a', text: 'That he improved quickly 当一个东西' },
      { id: 'b', text: 'that 修饰 everyone' },
      { id: 'c', text: 'quickly 是整句主线' },
      { id: 'd', text: 'everyone 是背景逻辑' }
    ],
    correctOptionId: 'a',
    engine: 'That he improved quickly surprised everyone.',
    skeleton: 'That he improved quickly 是“这件事”，整坨当主语。',
    details: [
      'surprised 是主发动机。',
      '谁让大家惊讶？不是 he，而是“他进步很快这件事”。',
      '这坨从句先当一个整体，不用拆太深。'
    ],
    translation: '他进步很快这件事让所有人惊讶。',
    warning: 'that 不一定是在修饰名词，也可能把一整件事打包出来。'
  },
  {
    id: 'modifier-who',
    title: '例句 2：贴着名词就是先当修饰',
    sentence: 'Students who read widely understand complex articles faster.',
    options: [
      { id: 'a', text: 'who read widely 修饰 Students' },
      { id: 'b', text: 'read 是整句主发动机' },
      { id: 'c', text: 'articles 修饰 Students' },
      { id: 'd', text: 'faster 交代原因' }
    ],
    correctOptionId: 'a',
    engine: 'Students understand articles.',
    skeleton: 'who read widely 贴着 Students，说明是哪类学生。',
    details: [
      'Students 是主角。',
      'who read widely 是“什么样的 students”。',
      '整句主线是 Students understand articles。'
    ],
    translation: '阅读广泛的学生能更快理解复杂文章。',
    warning: 'who 里面的 read 很像动作，但先别让它抢主线。'
  },
  {
    id: 'logic-although',
    title: '例句 3：让步开头先当背景',
    sentence: 'Although the article is long, its main idea is simple.',
    options: [
      { id: 'a', text: 'Although the article is long 交代背景逻辑' },
      { id: 'b', text: 'the article is long 是整句唯一主线' },
      { id: 'c', text: 'main idea 修饰 article' },
      { id: 'd', text: 'simple 当一个东西' }
    ],
    correctOptionId: 'a',
    engine: 'Its main idea is simple.',
    skeleton: 'although 前半句是让步背景，逗号后才是主线。',
    details: [
      'although 表示“虽然”。',
      '前半句承认文章长。',
      '真正要抓的重点是：主旨很简单。'
    ],
    translation: '虽然这篇文章很长，但它的主旨很简单。',
    warning: 'although 开头时，不要读完前半句就下结论。'
  }
];

export const level4Traps: CommonTrap[] = [
  {
    id: 'that-always-modifier',
    title: '坑 1：看到 that 就以为在修饰名词',
    sentence: 'That the plan worked encouraged the team.',
    wrongRead: 'that 在修饰 team。',
    whyWrong: 'That the plan worked 整坨站在主语位置，意思是“计划成功这件事”。',
    correctBreakdown: ['当一个东西：That the plan worked', '主发动机：encouraged', '对象：the team'],
    skeleton: 'That the plan worked encouraged the team.',
    translation: '计划成功这件事鼓舞了团队。',
    quickRule: 'that 后面一整坨如果站在句首当“这件事”，先按一个东西处理。'
  },
  {
    id: 'who-steals-mainline',
    title: '坑 2：让 who 里面的动作抢主线',
    sentence: 'People who compare sources make better decisions.',
    wrongRead: 'compare 是整句主发动机。',
    whyWrong: 'who compare sources 修饰 People，整句真正说的是 People make decisions。',
    correctBreakdown: ['主角：People', '修饰：who compare sources', '主发动机：make'],
    skeleton: 'People make better decisions.',
    translation: '会比较信息来源的人能做出更好的决定。',
    quickRule: 'who 紧跟名词时，先问：它是不是在说明这个名词是哪类人。'
  },
  {
    id: 'because-as-mainline',
    title: '坑 3：because 前后重点读反',
    sentence: 'Students improve faster because they receive clear feedback.',
    wrongRead: '这句主线是 they receive feedback。',
    whyWrong: 'because 后面是原因，主句先说结果：Students improve faster。',
    correctBreakdown: ['主线：Students improve faster', '原因背景：because they receive clear feedback'],
    skeleton: 'Students improve faster.',
    translation: '学生进步更快，因为他们得到了清晰反馈。',
    quickRule: 'because 很重要，但它通常解释原因，不自动等于整句主线。'
  },
  {
    id: 'although-front',
    title: '坑 4：让步前半句带跑',
    sentence: 'Although the tool is simple, it saves a lot of time.',
    wrongRead: '作者重点是 the tool is simple。',
    whyWrong: 'although 前半句是让步背景，逗号后 it saves time 才是主线。',
    correctBreakdown: ['让步背景：Although the tool is simple', '主线：it saves a lot of time'],
    skeleton: 'It saves time.',
    translation: '虽然这个工具很简单，但它节省了大量时间。',
    quickRule: 'although 开头时，读到逗号后再决定作者重点。'
  }
];

export const level4ErrorInfo: Partial<Record<ErrorTag, ErrorTagInfo>> = {
  'clause-function': {
    title: '从句功能判断错',
    plain: '你看到了从句信号，但还没判断这坨从句到底在句子里干嘛。',
    action: '按三问走：它是当一个东西、修饰一个东西，还是交代背景逻辑？'
  },
  'modifier-target': {
    title: '修饰对象找错',
    plain: '你把贴着名词的说明看偏了，没抓住它到底在解释哪个名词。',
    action: '看从句前最近、最合理的名词，先把从句当成这个名词的标签。'
  },
  'logic-reversal': {
    title: '逻辑重点读反',
    plain: '你被 because / although / if / when 带出的背景牵走了。',
    action: '先标出背景逻辑，再回到主句问：作者真正要说什么？'
  },
  'mainline-missing': {
    title: '主线没压出来',
    plain: '你还没有把整句压成“谁 + 主发动机 + 什么”。',
    action: '先把从句整体降级，再找主句主语和主发动机。'
  },
  'modifier-as-mainline': {
    title: '把修饰当主线',
    plain: '你把补充说明读成了整句最核心的信息。',
    action: '把贴着名词的从句先括起来，看剩下部分能不能独立成主线。'
  },
  'term-blocked': {
    title: '术语卡住',
    plain: '你不是不会读，而是被从句名字吓住了。',
    action: '暂时不用术语，只问“这坨东西在干嘛”。'
  }
};

export const level4PracticeQuestions: PracticeQuestion[] = [
  {
    id: 'l4-q1',
    title: 'That 整坨当主语',
    sentence: 'That he improved quickly surprised everyone.',
    prompt: 'That he improved quickly 在句子里干嘛？',
    options: [
      { id: 'a', text: '当一个东西：整坨当主语' },
      { id: 'b', text: '修饰 everyone' },
      { id: 'c', text: '交代原因背景' },
      { id: 'd', text: '当主发动机' }
    ],
    correctOptionId: 'a',
    skeleton: 'That he improved quickly surprised everyone.',
    explanation: 'That he improved quickly 放在 surprised 前面，整坨表示“他进步很快这件事”，当主语。',
    analysisParts: [
      { id: 'l4-q1-subject', kind: 'subject', label: '当一个东西', text: 'That he improved quickly', note: '整坨当主语' },
      { id: 'l4-q1-predicate', kind: 'predicate', label: '主发动机', text: 'surprised' },
      { id: 'l4-q1-object', kind: 'object', label: '对象', text: 'everyone' }
    ],
    errorByOption: {
      b: ['modifier-target'],
      c: ['logic-reversal'],
      d: ['clause-function']
    }
  },
  {
    id: 'l4-q2',
    title: 'that 内容当宾语',
    sentence: 'Teachers believe that practice builds confidence.',
    prompt: 'that practice builds confidence 在句子里干嘛？',
    options: [
      { id: 'a', text: '修饰 Teachers' },
      { id: 'b', text: '当一个东西：believe 的内容' },
      { id: 'c', text: '交代时间背景' },
      { id: 'd', text: '当整句主语' }
    ],
    correctOptionId: 'b',
    skeleton: 'Teachers believe that practice builds confidence.',
    explanation: 'believe 后面需要一个“相信什么”，that 后面整坨就是相信的内容。',
    analysisParts: [
      { id: 'l4-q2-subject', kind: 'subject', label: '主语', text: 'Teachers' },
      { id: 'l4-q2-predicate', kind: 'predicate', label: '主发动机', text: 'believe' },
      { id: 'l4-q2-object', kind: 'object', label: '当一个东西', text: 'that practice builds confidence', note: 'believe 的内容' }
    ],
    errorByOption: {
      a: ['modifier-target'],
      c: ['logic-reversal'],
      d: ['clause-function']
    }
  },
  {
    id: 'l4-q3',
    title: 'who 修饰人',
    sentence: 'Students who review notes regularly remember more details.',
    prompt: 'who review notes regularly 在句子里干嘛？',
    options: [
      { id: 'a', text: '修饰一个东西：说明 Students' },
      { id: 'b', text: '当 remember 的宾语' },
      { id: 'c', text: '交代让步背景' },
      { id: 'd', text: '替代主发动机' }
    ],
    correctOptionId: 'a',
    skeleton: 'Students remember more details.',
    explanation: 'who review notes regularly 贴着 Students，说明是哪类学生，主线仍是 Students remember details。',
    analysisParts: [
      { id: 'l4-q3-subject', kind: 'subject', label: '主语', text: 'Students' },
      { id: 'l4-q3-modifier', kind: 'modifier', label: '修饰一个东西', text: 'who review notes regularly', note: '说明 Students' },
      { id: 'l4-q3-predicate', kind: 'predicate', label: '主发动机', text: 'remember' },
      { id: 'l4-q3-object', kind: 'object', label: '对象', text: 'more details' }
    ],
    errorByOption: {
      b: ['clause-function'],
      c: ['logic-reversal'],
      d: ['modifier-as-mainline']
    }
  },
  {
    id: 'l4-q4',
    title: 'that 修饰物',
    sentence: 'The book that I borrowed yesterday explains the topic clearly.',
    prompt: 'that I borrowed yesterday 在句子里干嘛？',
    options: [
      { id: 'a', text: '当 explains 的宾语' },
      { id: 'b', text: '修饰一个东西：说明 The book' },
      { id: 'c', text: '交代原因背景' },
      { id: 'd', text: '当整句主语' }
    ],
    correctOptionId: 'b',
    skeleton: 'The book explains the topic.',
    explanation: 'that I borrowed yesterday 贴着 The book，说明是哪本书。',
    analysisParts: [
      { id: 'l4-q4-subject', kind: 'subject', label: '主语', text: 'The book' },
      { id: 'l4-q4-modifier', kind: 'modifier', label: '修饰一个东西', text: 'that I borrowed yesterday', note: '说明 The book' },
      { id: 'l4-q4-predicate', kind: 'predicate', label: '主发动机', text: 'explains' },
      { id: 'l4-q4-object', kind: 'object', label: '对象', text: 'the topic' }
    ],
    errorByOption: {
      a: ['clause-function'],
      c: ['logic-reversal'],
      d: ['modifier-target']
    }
  },
  {
    id: 'l4-q5',
    title: 'when 时间背景',
    sentence: 'When the exam ended, many students felt relieved.',
    prompt: 'When the exam ended 在句子里干嘛？',
    options: [
      { id: 'a', text: '修饰 students' },
      { id: 'b', text: '交代背景逻辑：时间' },
      { id: 'c', text: '当 felt 的宾语' },
      { id: 'd', text: '当整句主线' }
    ],
    correctOptionId: 'b',
    skeleton: 'Many students felt relieved.',
    explanation: 'When the exam ended 是时间背景，逗号后 many students felt relieved 才是主线。',
    analysisParts: [
      { id: 'l4-q5-background', kind: 'background', label: '交代背景逻辑', text: 'When the exam ended', note: '时间' },
      { id: 'l4-q5-subject', kind: 'subject', label: '主语', text: 'many students' },
      { id: 'l4-q5-predicate', kind: 'predicate', label: '主发动机', text: 'felt' },
      { id: 'l4-q5-complement', kind: 'complement', label: '状态', text: 'relieved' }
    ],
    errorByOption: {
      a: ['modifier-target'],
      c: ['clause-function'],
      d: ['mainline-missing']
    }
  },
  {
    id: 'l4-q6',
    title: 'if 条件背景',
    sentence: 'If the instructions are unclear, students may waste time.',
    prompt: 'If the instructions are unclear 在句子里干嘛？',
    options: [
      { id: 'a', text: '交代背景逻辑：条件' },
      { id: 'b', text: '修饰 time' },
      { id: 'c', text: '当 waste 的宾语' },
      { id: 'd', text: '替代 students' }
    ],
    correctOptionId: 'a',
    skeleton: 'Students may waste time.',
    explanation: 'If 开头是在给条件：如果说明不清楚，主句结果是 students may waste time。',
    analysisParts: [
      { id: 'l4-q6-background', kind: 'logic', label: '交代背景逻辑', text: 'If the instructions are unclear', note: '条件' },
      { id: 'l4-q6-subject', kind: 'subject', label: '主语', text: 'students' },
      { id: 'l4-q6-predicate', kind: 'predicate', label: '主发动机', text: 'may waste' },
      { id: 'l4-q6-object', kind: 'object', label: '对象', text: 'time' }
    ],
    errorByOption: {
      b: ['modifier-target'],
      c: ['clause-function'],
      d: ['mainline-missing']
    }
  },
  {
    id: 'l4-q7',
    title: 'because 原因背景',
    sentence: 'Many students lose marks because they ignore the question requirements.',
    prompt: 'because they ignore the question requirements 在句子里干嘛？',
    options: [
      { id: 'a', text: '当 Many students 的修饰语' },
      { id: 'b', text: '当 lose 的宾语' },
      { id: 'c', text: '交代背景逻辑：原因' },
      { id: 'd', text: '当整句主语' }
    ],
    correctOptionId: 'c',
    skeleton: 'Many students lose marks.',
    explanation: 'because 后面解释原因：为什么丢分。主线先抓 Many students lose marks。',
    analysisParts: [
      { id: 'l4-q7-subject', kind: 'subject', label: '主语', text: 'Many students' },
      { id: 'l4-q7-predicate', kind: 'predicate', label: '主发动机', text: 'lose' },
      { id: 'l4-q7-object', kind: 'object', label: '对象', text: 'marks' },
      { id: 'l4-q7-background', kind: 'logic', label: '交代背景逻辑', text: 'because they ignore the question requirements', note: '原因' }
    ],
    errorByOption: {
      a: ['modifier-target'],
      b: ['clause-function'],
      d: ['mainline-missing']
    }
  },
  {
    id: 'l4-q8',
    title: 'why 解释 reason',
    sentence: 'The reason why the plan failed was simple.',
    prompt: 'why the plan failed 在句子里干嘛？',
    options: [
      { id: 'a', text: '修饰一个东西：解释 The reason' },
      { id: 'b', text: '当 was 的补语' },
      { id: 'c', text: '交代让步背景' },
      { id: 'd', text: '当整句主发动机' }
    ],
    correctOptionId: 'a',
    skeleton: 'The reason was simple.',
    explanation: 'why the plan failed 贴着 The reason，解释“哪个原因 / 什么原因”。',
    analysisParts: [
      { id: 'l4-q8-subject', kind: 'subject', label: '主语', text: 'The reason' },
      { id: 'l4-q8-modifier', kind: 'modifier', label: '修饰一个东西', text: 'why the plan failed', note: '解释 reason' },
      { id: 'l4-q8-predicate', kind: 'predicate', label: '主发动机', text: 'was' },
      { id: 'l4-q8-complement', kind: 'complement', label: '状态', text: 'simple' }
    ],
    errorByOption: {
      b: ['clause-function'],
      c: ['logic-reversal'],
      d: ['modifier-as-mainline']
    }
  },
  {
    id: 'l4-q9',
    title: 'what 整坨当主语',
    sentence: 'What the speaker said changed my opinion.',
    prompt: 'What the speaker said 在句子里干嘛？',
    options: [
      { id: 'a', text: '交代时间背景' },
      { id: 'b', text: '修饰 opinion' },
      { id: 'c', text: '当一个东西：发言内容当主语' },
      { id: 'd', text: '当 changed 的对象' }
    ],
    correctOptionId: 'c',
    skeleton: 'What the speaker said changed my opinion.',
    explanation: 'What the speaker said 表示“发言者说的话”，整坨当主语。',
    analysisParts: [
      { id: 'l4-q9-subject', kind: 'subject', label: '当一个东西', text: 'What the speaker said', note: '整坨当主语' },
      { id: 'l4-q9-predicate', kind: 'predicate', label: '主发动机', text: 'changed' },
      { id: 'l4-q9-object', kind: 'object', label: '对象', text: 'my opinion' }
    ],
    errorByOption: {
      a: ['logic-reversal'],
      b: ['modifier-target'],
      d: ['clause-function']
    }
  },
  {
    id: 'l4-q10',
    title: 'whether 内容当宾语',
    sentence: 'I do not know whether the answer is correct.',
    prompt: 'whether the answer is correct 在句子里干嘛？',
    options: [
      { id: 'a', text: '当一个东西：know 的内容' },
      { id: 'b', text: '修饰 I' },
      { id: 'c', text: '交代原因背景' },
      { id: 'd', text: '当整句主语' }
    ],
    correctOptionId: 'a',
    skeleton: 'I do not know whether the answer is correct.',
    explanation: 'know 后面要接“知道什么”，whether 后面整坨就是不知道的内容。',
    analysisParts: [
      { id: 'l4-q10-subject', kind: 'subject', label: '主语', text: 'I' },
      { id: 'l4-q10-predicate', kind: 'predicate', label: '主发动机', text: 'do not know' },
      { id: 'l4-q10-object', kind: 'object', label: '当一个东西', text: 'whether the answer is correct', note: 'know 的内容' }
    ],
    errorByOption: {
      b: ['modifier-target'],
      c: ['logic-reversal'],
      d: ['clause-function']
    }
  },
  {
    id: 'l4-q11',
    title: 'who 修饰 People',
    sentence: 'People who can manage time well usually feel less stressed.',
    prompt: 'who can manage time well 在句子里干嘛？',
    options: [
      { id: 'a', text: '当 feel 的宾语' },
      { id: 'b', text: '修饰一个东西：说明 People' },
      { id: 'c', text: '交代条件背景' },
      { id: 'd', text: '当整句主线' }
    ],
    correctOptionId: 'b',
    skeleton: 'People feel less stressed.',
    explanation: 'who can manage time well 贴着 People，说明是哪类人。',
    analysisParts: [
      { id: 'l4-q11-subject', kind: 'subject', label: '主语', text: 'People' },
      { id: 'l4-q11-modifier', kind: 'modifier', label: '修饰一个东西', text: 'who can manage time well', note: '说明 People' },
      { id: 'l4-q11-predicate', kind: 'predicate', label: '主发动机', text: 'feel' },
      { id: 'l4-q11-complement', kind: 'complement', label: '状态', text: 'less stressed' }
    ],
    errorByOption: {
      a: ['clause-function'],
      c: ['logic-reversal'],
      d: ['modifier-as-mainline']
    }
  },
  {
    id: 'l4-q12',
    title: 'although 让步背景',
    sentence: 'Although the passage looks difficult, the main idea is clear.',
    prompt: 'Although the passage looks difficult 在句子里干嘛？',
    options: [
      { id: 'a', text: '修饰 the main idea' },
      { id: 'b', text: '当 clear 的主语' },
      { id: 'c', text: '交代背景逻辑：让步' },
      { id: 'd', text: '当整句主线' }
    ],
    correctOptionId: 'c',
    skeleton: 'The main idea is clear.',
    explanation: 'Although 前半句承认“文章看起来难”，逗号后才是重点：主旨清楚。',
    analysisParts: [
      { id: 'l4-q12-background', kind: 'logic', label: '交代背景逻辑', text: 'Although the passage looks difficult', note: '让步' },
      { id: 'l4-q12-subject', kind: 'subject', label: '主语', text: 'the main idea' },
      { id: 'l4-q12-predicate', kind: 'predicate', label: '主发动机', text: 'is' },
      { id: 'l4-q12-complement', kind: 'complement', label: '状态', text: 'clear' }
    ],
    errorByOption: {
      a: ['modifier-target'],
      b: ['clause-function'],
      d: ['logic-reversal']
    }
  },
  {
    id: 'l4-q13',
    title: 'that 解释 suggestion',
    sentence: 'The suggestion that students should read daily is useful.',
    prompt: 'that students should read daily 在句子里干嘛？',
    options: [
      { id: 'a', text: '修饰一个东西：说明 suggestion 的内容' },
      { id: 'b', text: '交代时间背景' },
      { id: 'c', text: '当 is 的主语' },
      { id: 'd', text: '当整句主发动机' }
    ],
    correctOptionId: 'a',
    skeleton: 'The suggestion is useful.',
    explanation: 'that students should read daily 贴着 suggestion，说明这个建议的内容。',
    analysisParts: [
      { id: 'l4-q13-subject', kind: 'subject', label: '主语', text: 'The suggestion' },
      { id: 'l4-q13-modifier', kind: 'modifier', label: '修饰一个东西', text: 'that students should read daily', note: '说明 suggestion' },
      { id: 'l4-q13-predicate', kind: 'predicate', label: '主发动机', text: 'is' },
      { id: 'l4-q13-complement', kind: 'complement', label: '状态', text: 'useful' }
    ],
    errorByOption: {
      b: ['logic-reversal'],
      c: ['clause-function'],
      d: ['modifier-as-mainline']
    }
  },
  {
    id: 'l4-q14',
    title: 'because 句首原因',
    sentence: 'Because online information changes fast, readers need judgment.',
    prompt: 'Because online information changes fast 在句子里干嘛？',
    options: [
      { id: 'a', text: '当 readers 的修饰语' },
      { id: 'b', text: '交代背景逻辑：原因' },
      { id: 'c', text: '当 need 的宾语' },
      { id: 'd', text: '当整句唯一主线' }
    ],
    correctOptionId: 'b',
    skeleton: 'Readers need judgment.',
    explanation: 'Because 前半句给原因：因为信息变化快。主线是 readers need judgment。',
    analysisParts: [
      { id: 'l4-q14-background', kind: 'logic', label: '交代背景逻辑', text: 'Because online information changes fast', note: '原因' },
      { id: 'l4-q14-subject', kind: 'subject', label: '主语', text: 'readers' },
      { id: 'l4-q14-predicate', kind: 'predicate', label: '主发动机', text: 'need' },
      { id: 'l4-q14-object', kind: 'object', label: '对象', text: 'judgment' }
    ],
    errorByOption: {
      a: ['modifier-target'],
      c: ['clause-function'],
      d: ['logic-reversal']
    }
  },
  {
    id: 'l4-q15',
    title: 'although 里套 what',
    sentence: 'Although what he said sounded simple, it solved a real problem.',
    prompt: 'Although what he said sounded simple 在句子里干嘛？',
    options: [
      { id: 'a', text: '当 solved 的宾语' },
      { id: 'b', text: '修饰 problem' },
      { id: 'c', text: '交代背景逻辑：让步' },
      { id: 'd', text: '当整句主线' }
    ],
    correctOptionId: 'c',
    skeleton: 'It solved a real problem.',
    explanation: '整坨 Although... 是让步背景；里面 what he said 又是一小坨“他说的话”，但本题先抓外层功能。',
    analysisParts: [
      { id: 'l4-q15-background', kind: 'logic', label: '交代背景逻辑', text: 'Although what he said sounded simple', note: '让步' },
      { id: 'l4-q15-subject', kind: 'subject', label: '主语', text: 'it' },
      { id: 'l4-q15-predicate', kind: 'predicate', label: '主发动机', text: 'solved' },
      { id: 'l4-q15-object', kind: 'object', label: '对象', text: 'a real problem' }
    ],
    errorByOption: {
      a: ['clause-function'],
      b: ['modifier-target'],
      d: ['logic-reversal']
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

export const level4Remediations: RemediationItem[] = [
  {
    id: 'rem-clause-function',
    tag: 'clause-function',
    title: '补救 A：先问这坨在干嘛',
    explanation: level4ErrorInfo['clause-function']?.plain ?? '',
    questions: [
      remediationQuestion(
        'l4-rem-cf',
        'clause-function',
        'I understand what the author means.',
        'what the author means 在句子里干嘛？',
        [
          { id: 'a', text: '当 understand 的内容' },
          { id: 'b', text: '修饰 I' },
          { id: 'c', text: '交代原因' }
        ],
        'a',
        'I understand what the author means.',
        'understand 后面问“理解什么”，what the author means 是理解的内容。'
      )
    ]
  },
  {
    id: 'rem-modifier-target',
    tag: 'modifier-target',
    title: '补救 B：看它贴着谁',
    explanation: level4ErrorInfo['modifier-target']?.plain ?? '',
    questions: [
      remediationQuestion(
        'l4-rem-target',
        'modifier-target',
        'The student who asked the question looked confident.',
        'who asked the question 在句子里干嘛？',
        [
          { id: 'a', text: '修饰 The student' },
          { id: 'b', text: '当 looked 的宾语' },
          { id: 'c', text: '交代让步' }
        ],
        'a',
        'The student looked confident.',
        'who asked the question 贴着 The student，说明是哪位学生。'
      )
    ]
  },
  {
    id: 'rem-logic',
    tag: 'logic-reversal',
    title: '补救 C：先标背景，再找主线',
    explanation: level4ErrorInfo['logic-reversal']?.plain ?? '',
    questions: [
      remediationQuestion(
        'l4-rem-logic',
        'logic-reversal',
        'Although the rule seems strange, it works well.',
        'Although the rule seems strange 在句子里干嘛？',
        [
          { id: 'a', text: '交代让步背景' },
          { id: 'b', text: '修饰 it' },
          { id: 'c', text: '当 works 的宾语' }
        ],
        'a',
        'It works well.',
        'although 前半句是让步背景，主线在逗号后。'
      )
    ]
  },
  {
    id: 'rem-mainline',
    tag: 'mainline-missing',
    title: '补救 D：把主句压出来',
    explanation: level4ErrorInfo['mainline-missing']?.plain ?? '',
    questions: [
      remediationQuestion(
        'l4-rem-main',
        'mainline-missing',
        'When the meeting ended, the manager shared the decision.',
        '整句主线是：',
        [
          { id: 'a', text: 'The meeting ended.' },
          { id: 'b', text: 'The manager shared the decision.' },
          { id: 'c', text: 'The decision ended.' }
        ],
        'b',
        'The manager shared the decision.',
        'When the meeting ended 是时间背景，主句是 the manager shared the decision。'
      )
    ]
  },
  {
    id: 'rem-modifier-mainline',
    tag: 'modifier-as-mainline',
    title: '补救 E：修饰从句先括起来',
    explanation: level4ErrorInfo['modifier-as-mainline']?.plain ?? '',
    questions: [
      remediationQuestion(
        'l4-rem-mod-main',
        'modifier-as-mainline',
        'Books that explain ideas clearly help beginners.',
        'that explain ideas clearly 在句子里干嘛？',
        [
          { id: 'a', text: '修饰 Books' },
          { id: 'b', text: '当 help 的宾语' },
          { id: 'c', text: '交代原因' }
        ],
        'a',
        'Books help beginners.',
        'that explain ideas clearly 贴着 Books，是说明什么样的书。'
      )
    ]
  },
  {
    id: 'rem-term',
    tag: 'term-blocked',
    title: '补救 F：术语先翻成人话',
    explanation: level4ErrorInfo['term-blocked']?.plain ?? '',
    questions: [
      remediationQuestion(
        'l4-rem-term',
        'term-blocked',
        'What matters most is daily practice.',
        'What matters most 在句子里干嘛？',
        [
          { id: 'a', text: '当一个东西：整坨当主语' },
          { id: 'b', text: '修饰 practice' },
          { id: 'c', text: '交代条件' }
        ],
        'a',
        'What matters most is daily practice.',
        '先别管术语，它就是“最重要的东西”，整坨当主语。'
      )
    ]
  }
];

export const level4Summary = [
  '从句先问功能，不先背名字。',
  '整坨能当主语/宾语，就是“当一个东西”。',
  '贴着名词，就是“修饰一个东西”。',
  'when / because / if / although 多半在交代背景逻辑。'
];
