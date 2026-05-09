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

export const level6Steps: LessonStep[] = [
  {
    id: 'same-direction',
    title: '第一步：先看是不是同向补充',
    body: [
      'and / also / moreover 这类词，通常不是反转，而是在原方向上继续加信息。',
      '够用判断：前后两半如果都在支持同一个意思，就先按同向补充读。'
    ]
  },
  {
    id: 'turn',
    title: '第二步：看到转折，重心常在后半句',
    body: [
      'but / however / yet 这类词会把方向拧一下，后半句常常更接近作者真正想强调的点。',
      '阅读题里遇到转折，不要只记前半句，后半句往往是答案区。'
    ]
  },
  {
    id: 'cause-effect',
    title: '第三步：因果要分清原因和结果',
    body: [
      'because 后面常是原因，so / therefore 后面常是结果。',
      '先问“哪一半解释原因，哪一半给结论”，不要把方向读反。'
    ]
  },
  {
    id: 'concession',
    title: '第四步：让步是先承认，再反打',
    body: [
      'although / even though 前半句常是让步背景，真正结论通常在主句。',
      '它不是简单反对，而是“虽然有 A，但我更想说 B”。'
    ]
  }
];

export const level6Terms: TermCard[] = [
  {
    id: 'logic-word',
    term: '逻辑词',
    plain: '告诉你前后两块信息怎么连起来的路标。',
    function: '提示同向补充、反向转折、原因、结果或让步。',
    examUse: '阅读理解里，逻辑词附近经常是作者态度和答案线索。',
    skipForNow: '不用背完整连接词表，先判断方向。'
  },
  {
    id: 'same-direction',
    term: '同向补充',
    plain: '后半句继续支持前半句，不拐弯。',
    function: '常见信号有 and、also、moreover、as well。',
    examUse: '遇到这类词，重点是把信息合并，而不是找冲突。',
    skipForNow: '不用纠结并列连词和副词的语法分类。'
  },
  {
    id: 'turning',
    term: '反向转折',
    plain: '前面说一边，后面突然拐到另一边。',
    function: '常见信号有 but、however、yet、instead。',
    examUse: '四六级阅读里转折后经常更接近作者重点。',
    skipForNow: '不用背转折词强弱等级，先抓方向变化。'
  },
  {
    id: 'cause-effect',
    term: '因果方向',
    plain: '一半解释为什么，一半说明结果或结论。',
    function: 'because 常带原因，so / therefore 常带结果。',
    examUse: '细节题和推断题常考“为什么”和“所以怎样”。',
    skipForNow: '不用区分所有原因状语结构，先别读反。'
  },
  {
    id: 'concession',
    term: '让步',
    plain: '先承认一个情况，再说真正想强调的结论。',
    function: '常见信号是 although、though、even though。',
    examUse: '看到“虽然”，别急着拿前半句当作者重点。',
    skipForNow: '不用和普通转折做复杂区分，先抓“主句更重要”。'
  }
];

export const level6Examples: LessonExample[] = [
  {
    id: 'same',
    title: '例句 1：同向补充要合并',
    sentence: 'The method is simple, and it saves time.',
    options: [
      { id: 'a', text: '同向补充：简单 + 省时都支持这个方法' },
      { id: 'b', text: '反向转折：后半句否定前半句' },
      { id: 'c', text: '原因：后半句解释为什么简单' },
      { id: 'd', text: '让步：先承认再反打' }
    ],
    correctOptionId: 'a',
    engine: 'The method is simple. It saves time.',
    skeleton: '两半都在说这个方法好，方向一致。',
    details: ['simple 是优点。', 'saves time 也是优点。', 'and 把两个优点加在一起。'],
    translation: '这个方法很简单，而且能节省时间。',
    warning: '并列不是废话，常常是在给同一个观点加证据。'
  },
  {
    id: 'turn',
    title: '例句 2：转折后半句更要看',
    sentence: 'The article looks difficult, but its main idea is clear.',
    options: [
      { id: 'a', text: '同向补充：两边都说文章难' },
      { id: 'b', text: '反向转折：外表难，但主旨清楚' },
      { id: 'c', text: '结果：文章难导致主旨清楚' },
      { id: 'd', text: '原因：主旨清楚解释文章难' }
    ],
    correctOptionId: 'b',
    engine: 'Its main idea is clear.',
    skeleton: '前半句只是铺垫，转折后才是重点。',
    details: ['looks difficult 是第一印象。', 'but 把方向拧回来。', 'main idea is clear 更接近作者重点。'],
    translation: '这篇文章看起来难，但主旨很清楚。'
  },
  {
    id: 'cause',
    title: '例句 3：因果方向别读反',
    sentence: 'Students improved because they received clear feedback.',
    options: [
      { id: 'a', text: '原因：they received clear feedback' },
      { id: 'b', text: '结果：they received clear feedback' },
      { id: 'c', text: '转折：feedback 否定 improved' },
      { id: 'd', text: '让步：先承认后反打' }
    ],
    correctOptionId: 'a',
    engine: 'Students improved.',
    skeleton: 'Students improved 是结果，because 后面解释原因。',
    details: ['improved 是发生的结果。', 'because 后面回答为什么。', 'clear feedback 是原因。'],
    translation: '学生进步了，因为他们得到了清晰反馈。'
  }
];

export const level6Traps: CommonTrap[] = [
  {
    id: 'turn-front',
    title: '坑 1：只记转折前半句',
    sentence: 'The plan sounds attractive, but it requires too much time.',
    wrongRead: '作者觉得这个计划很吸引人。',
    whyWrong: '转折后 it requires too much time 才是更关键的评价。',
    correctBreakdown: ['铺垫：sounds attractive', '转折重点：requires too much time'],
    skeleton: 'It requires too much time.',
    translation: '这个计划听起来有吸引力，但它需要太多时间。',
    quickRule: '看到转折，至少把后半句读完再下结论。'
  },
  {
    id: 'cause-reverse',
    title: '坑 2：因果读反',
    sentence: 'Many readers trust the article because it uses clear evidence.',
    wrongRead: '读者信任导致文章使用证据。',
    whyWrong: 'because 后面解释原因：文章用了清晰证据，所以读者信任。',
    correctBreakdown: ['结果：readers trust the article', '原因：it uses clear evidence'],
    skeleton: 'Readers trust the article.',
    translation: '许多读者信任这篇文章，因为它使用了清晰证据。',
    quickRule: 'because 后面先标“原因”，再回头看结果。'
  },
  {
    id: 'concession-front',
    title: '坑 3：让步前半句带跑',
    sentence: 'Although the tool is free, it is not easy to use.',
    wrongRead: '作者重点是这个工具免费。',
    whyWrong: 'Although 前半句只是让步，主句 not easy to use 才是重点评价。',
    correctBreakdown: ['让步背景：tool is free', '真正评价：it is not easy to use'],
    skeleton: 'It is not easy to use.',
    translation: '虽然这个工具免费，但它并不好用。',
    quickRule: '让步句的主句通常更值得抓。'
  }
];

export const level6ErrorInfo: Partial<Record<ErrorTag, ErrorTagInfo>> = {
  'logic-reversal': {
    title: '逻辑方向读反',
    plain: '你看到了逻辑词，但把前后方向读反了。',
    action: '先标方向：同向、转折、原因、结果、让步，再判断作者重点。'
  },
  'mainline-missing': {
    title: '主线没有压出来',
    plain: '你还没分清哪一半是铺垫，哪一半是主句或结论。',
    action: '先找逻辑词，再把两半分别压成短句。'
  },
  'clause-function': {
    title: '让步/原因块功能误判',
    plain: '你把让步或原因背景当成了整句重点。',
    action: 'because 后面先标原因，although 后面先标让步背景。'
  },
  'modifier-as-mainline': {
    title: '补充信息当重点',
    plain: '你把并列补充或铺垫信息当成了唯一重点。',
    action: '同向补充要合并，转折和让步要找更重要的一边。'
  },
  'meaning-mismatch': {
    title: '句意方向错配',
    plain: '你的选择和句子真实逻辑方向不匹配。',
    action: '不要只看熟词，先看连接词让前后两半怎么连。'
  },
  'term-blocked': {
    title: '术语卡住',
    plain: '你被并列、转折、因果、让步这些词绕住了。',
    action: '先用人话：加信息、拐方向、说原因、给结果、先承认再反打。'
  }
};

export const level6PracticeQuestions: PracticeQuestion[] = [
  {
    id: 'l6-q1',
    title: '同向补充',
    sentence: 'The guide is short and it explains the rules clearly.',
    prompt: '这句话前后两半是什么关系？',
    options: [
      { id: 'a', text: '同向补充：两个信息都在支持 guide 好用' },
      { id: 'b', text: '反向转折：后半句否定前半句' },
      { id: 'c', text: '原因：后半句解释为什么短' },
      { id: 'd', text: '让步：先承认再反打' }
    ],
    correctOptionId: 'a',
    skeleton: 'The guide is short. It explains clearly.',
    explanation: 'short 和 explains clearly 都是正向信息，and 把两个优点加在一起。',
    analysisParts: [
      { id: 'l6-q1-first', kind: 'subject', label: '信息 1', text: 'The guide is short' },
      { id: 'l6-q1-signal', kind: 'signal', label: '同向补充', text: 'and' },
      { id: 'l6-q1-second', kind: 'logic', label: '信息 2', text: 'it explains the rules clearly' }
    ],
    errorByOption: { b: ['logic-reversal'], c: ['meaning-mismatch'], d: ['clause-function'] }
  },
  {
    id: 'l6-q2',
    title: '反向转折',
    sentence: 'The lecture was long, but most students found it useful.',
    prompt: '作者更想强调哪一边？',
    options: [
      { id: 'a', text: 'lecture was long' },
      { id: 'b', text: 'students found it useful' },
      { id: 'c', text: 'long 和 useful 完全同向' },
      { id: 'd', text: 'students found it useless' }
    ],
    correctOptionId: 'b',
    skeleton: 'Most students found it useful.',
    explanation: 'but 后面拐方向，长只是铺垫，有用才是重点评价。',
    analysisParts: [
      { id: 'l6-q2-front', kind: 'background', label: '铺垫', text: 'The lecture was long' },
      { id: 'l6-q2-signal', kind: 'signal', label: '反向转折', text: 'but' },
      { id: 'l6-q2-main', kind: 'predicate', label: '重点', text: 'most students found it useful' }
    ],
    errorByOption: { a: ['logic-reversal'], c: ['meaning-mismatch'], d: ['mainline-missing'] }
  },
  {
    id: 'l6-q3',
    title: '结果方向',
    sentence: 'The instructions were unclear, so many users made mistakes.',
    prompt: '哪一半是结果？',
    options: [
      { id: 'a', text: 'The instructions were unclear.' },
      { id: 'b', text: 'many users made mistakes.' },
      { id: 'c', text: 'instructions made users clear.' },
      { id: 'd', text: 'users caused the instructions.' }
    ],
    correctOptionId: 'b',
    skeleton: 'Unclear instructions caused mistakes.',
    explanation: 'so 后面通常接结果：很多用户犯错。',
    analysisParts: [
      { id: 'l6-q3-cause', kind: 'background', label: '原因', text: 'The instructions were unclear' },
      { id: 'l6-q3-signal', kind: 'signal', label: '结果信号', text: 'so' },
      { id: 'l6-q3-effect', kind: 'logic', label: '结果', text: 'many users made mistakes' }
    ],
    errorByOption: { a: ['logic-reversal'], c: ['meaning-mismatch'], d: ['mainline-missing'] }
  },
  {
    id: 'l6-q4',
    title: '让步方向',
    sentence: 'Although the app is popular, it does not protect user privacy well.',
    prompt: '这句话真正的评价重点是：',
    options: [
      { id: 'a', text: 'app is popular' },
      { id: 'b', text: 'it does not protect privacy well' },
      { id: 'c', text: 'privacy protects the app' },
      { id: 'd', text: 'popular means private' }
    ],
    correctOptionId: 'b',
    skeleton: 'It does not protect user privacy well.',
    explanation: 'Although 前半句是让步背景，主句的隐私问题才是重点。',
    analysisParts: [
      { id: 'l6-q4-front', kind: 'logic', label: '让步背景', text: 'Although the app is popular' },
      { id: 'l6-q4-main', kind: 'predicate', label: '重点评价', text: 'it does not protect user privacy well' }
    ],
    errorByOption: { a: ['clause-function'], c: ['meaning-mismatch'], d: ['logic-reversal'] }
  },
  {
    id: 'l6-q5',
    title: '补充证据',
    sentence: 'The article gives examples; moreover, it explains each example in simple language.',
    prompt: 'moreover 的作用是：',
    options: [
      { id: 'a', text: '同向补充：继续加优点' },
      { id: 'b', text: '反向转折：否定 examples' },
      { id: 'c', text: '原因：解释为什么有 examples' },
      { id: 'd', text: '让步：虽然有 examples' }
    ],
    correctOptionId: 'a',
    skeleton: 'The article gives examples and explains them simply.',
    explanation: 'moreover 表示继续补充，两个信息都让文章更易懂。',
    analysisParts: [
      { id: 'l6-q5-first', kind: 'subject', label: '信息 1', text: 'The article gives examples' },
      { id: 'l6-q5-signal', kind: 'signal', label: '同向补充', text: 'moreover' },
      { id: 'l6-q5-second', kind: 'logic', label: '信息 2', text: 'it explains each example in simple language' }
    ],
    errorByOption: { b: ['logic-reversal'], c: ['meaning-mismatch'], d: ['clause-function'] }
  },
  {
    id: 'l6-q6',
    title: '明显转向',
    sentence: 'The rule looks simple; however, many students still use it incorrectly.',
    prompt: 'however 后面的信息在逻辑上是：',
    options: [
      { id: 'a', text: '反向转折：看似简单，但很多人用错' },
      { id: 'b', text: '同向补充：简单所以都用对' },
      { id: 'c', text: '原因：学生用错解释规则简单' },
      { id: 'd', text: '结果：规则简单导致一定正确' }
    ],
    correctOptionId: 'a',
    skeleton: 'Many students still use it incorrectly.',
    explanation: 'however 把方向拧回来：看起来简单不等于真的会用。',
    analysisParts: [
      { id: 'l6-q6-front', kind: 'background', label: '铺垫', text: 'The rule looks simple' },
      { id: 'l6-q6-signal', kind: 'signal', label: '反向转折', text: 'however' },
      { id: 'l6-q6-main', kind: 'predicate', label: '重点', text: 'many students still use it incorrectly' }
    ],
    errorByOption: { b: ['logic-reversal'], c: ['meaning-mismatch'], d: ['mainline-missing'] }
  },
  {
    id: 'l6-q7',
    title: '原因位置',
    sentence: 'Readers trust the report because it uses data from several surveys.',
    prompt: 'because 后面这半句是：',
    options: [
      { id: 'a', text: '结果：读者信任报告' },
      { id: 'b', text: '原因：报告使用多项调查数据' },
      { id: 'c', text: '转折：报告不可信' },
      { id: 'd', text: '同向补充：没有因果方向' }
    ],
    correctOptionId: 'b',
    skeleton: 'Readers trust the report.',
    explanation: 'because 后面回答为什么读者信任：它用了多项调查数据。',
    analysisParts: [
      { id: 'l6-q7-effect', kind: 'predicate', label: '结果', text: 'Readers trust the report' },
      { id: 'l6-q7-signal', kind: 'signal', label: '原因信号', text: 'because' },
      { id: 'l6-q7-cause', kind: 'logic', label: '原因', text: 'it uses data from several surveys' }
    ],
    errorByOption: { a: ['logic-reversal'], c: ['meaning-mismatch'], d: ['mainline-missing'] }
  },
  {
    id: 'l6-q8',
    title: '结论信号',
    sentence: 'The sample was too small; therefore, the conclusion is not convincing.',
    prompt: 'therefore 后面这半句是：',
    options: [
      { id: 'a', text: '原因：样本太小' },
      { id: 'b', text: '结果/结论：结论不够有说服力' },
      { id: 'c', text: '让步背景' },
      { id: 'd', text: '同向补充，没有结论' }
    ],
    correctOptionId: 'b',
    skeleton: 'The conclusion is not convincing.',
    explanation: 'therefore 后面给结论：因为样本小，所以结论不够有说服力。',
    analysisParts: [
      { id: 'l6-q8-cause', kind: 'background', label: '原因', text: 'The sample was too small' },
      { id: 'l6-q8-signal', kind: 'signal', label: '结论信号', text: 'therefore' },
      { id: 'l6-q8-effect', kind: 'logic', label: '结果/结论', text: 'the conclusion is not convincing' }
    ],
    errorByOption: { a: ['logic-reversal'], c: ['clause-function'], d: ['meaning-mismatch'] }
  },
  {
    id: 'l6-q9',
    title: '反向选择',
    sentence: 'The first solution is cheap; instead, the team chose the safer one.',
    prompt: 'instead 表示作者把方向转向：',
    options: [
      { id: 'a', text: '便宜方案被选择' },
      { id: 'b', text: '团队选择更安全的方案' },
      { id: 'c', text: '两个方案完全一样' },
      { id: 'd', text: '安全方案导致便宜' }
    ],
    correctOptionId: 'b',
    skeleton: 'The team chose the safer one.',
    explanation: 'instead 表示没有沿着 cheap 走，而是转向 safer one。',
    analysisParts: [
      { id: 'l6-q9-front', kind: 'background', label: '被放弃方向', text: 'The first solution is cheap' },
      { id: 'l6-q9-signal', kind: 'signal', label: '反向选择', text: 'instead' },
      { id: 'l6-q9-main', kind: 'predicate', label: '实际选择', text: 'the team chose the safer one' }
    ],
    errorByOption: { a: ['logic-reversal'], c: ['meaning-mismatch'], d: ['mainline-missing'] }
  },
  {
    id: 'l6-q10',
    title: '条件结果',
    sentence: 'If students skip the examples, they may misunderstand the rule.',
    prompt: '这句话的逻辑方向是：',
    options: [
      { id: 'a', text: '条件：跳过例子；结果：误解规则' },
      { id: 'b', text: '原因：误解规则；结果：跳过例子' },
      { id: 'c', text: '转折：例子否定规则' },
      { id: 'd', text: '同向补充：没有条件' }
    ],
    correctOptionId: 'a',
    skeleton: 'They may misunderstand the rule.',
    explanation: 'If 引出条件：如果跳过例子，结果可能误解规则。',
    analysisParts: [
      { id: 'l6-q10-condition', kind: 'logic', label: '条件', text: 'If students skip the examples' },
      { id: 'l6-q10-effect', kind: 'predicate', label: '可能结果', text: 'they may misunderstand the rule' }
    ],
    errorByOption: { b: ['logic-reversal'], c: ['meaning-mismatch'], d: ['clause-function'] }
  },
  {
    id: 'l6-q11',
    title: '双重补充',
    sentence: 'The course is practical and affordable, so many students choose it.',
    prompt: '整句话的逻辑最稳读法是：',
    options: [
      { id: 'a', text: 'practical 和 affordable 是原因，students choose it 是结果' },
      { id: 'b', text: 'students choose it 是原因，course practical 是结果' },
      { id: 'c', text: 'and 表示强转折' },
      { id: 'd', text: 'so 后面是让步背景' }
    ],
    correctOptionId: 'a',
    skeleton: 'Many students choose it.',
    explanation: 'practical and affordable 是两个同向原因，so 后面给结果。',
    analysisParts: [
      { id: 'l6-q11-cause', kind: 'background', label: '同向原因', text: 'The course is practical and affordable' },
      { id: 'l6-q11-signal', kind: 'signal', label: '结果信号', text: 'so' },
      { id: 'l6-q11-effect', kind: 'logic', label: '结果', text: 'many students choose it' }
    ],
    errorByOption: { b: ['logic-reversal'], c: ['meaning-mismatch'], d: ['clause-function'] }
  },
  {
    id: 'l6-q12',
    title: '让步加转折感',
    sentence: 'Even though the task seems easy, it requires careful planning.',
    prompt: '这句话真正强调的是：',
    options: [
      { id: 'a', text: 'the task seems easy' },
      { id: 'b', text: 'it requires careful planning' },
      { id: 'c', text: 'easy means no planning' },
      { id: 'd', text: 'planning makes the task disappear' }
    ],
    correctOptionId: 'b',
    skeleton: 'It requires careful planning.',
    explanation: 'Even though 前半句是让步背景，主句才是提醒：需要认真规划。',
    analysisParts: [
      { id: 'l6-q12-front', kind: 'logic', label: '让步背景', text: 'Even though the task seems easy' },
      { id: 'l6-q12-main', kind: 'predicate', label: '重点', text: 'it requires careful planning' }
    ],
    errorByOption: { a: ['clause-function'], c: ['logic-reversal'], d: ['meaning-mismatch'] }
  },
  {
    id: 'l6-q13',
    title: '前后对比',
    sentence: 'Some people value speed, while others care more about accuracy.',
    prompt: 'while 在这里主要表示：',
    options: [
      { id: 'a', text: '对比：一部分重速度，另一部分重准确' },
      { id: 'b', text: '结果：速度导致准确' },
      { id: 'c', text: '原因：准确解释速度' },
      { id: 'd', text: '同一个群体完全同一观点' }
    ],
    correctOptionId: 'a',
    skeleton: 'Some value speed; others value accuracy.',
    explanation: 'while 把两类人的关注点放在一起对比。',
    analysisParts: [
      { id: 'l6-q13-left', kind: 'subject', label: '一边', text: 'Some people value speed' },
      { id: 'l6-q13-signal', kind: 'signal', label: '对比信号', text: 'while' },
      { id: 'l6-q13-right', kind: 'logic', label: '另一边', text: 'others care more about accuracy' }
    ],
    errorByOption: { b: ['logic-reversal'], c: ['meaning-mismatch'], d: ['mainline-missing'] }
  },
  {
    id: 'l6-q14',
    title: '原因到建议',
    sentence: 'Since the deadline is close, the team should focus on the most important tasks.',
    prompt: 'Since the deadline is close 在句子里干嘛？',
    options: [
      { id: 'a', text: '原因背景：截止时间近' },
      { id: 'b', text: '结果：团队专注重点任务' },
      { id: 'c', text: '反向转折：时间不重要' },
      { id: 'd', text: '同向补充：没有因果' }
    ],
    correctOptionId: 'a',
    skeleton: 'The team should focus on important tasks.',
    explanation: 'Since 在这里表示原因：因为截止时间近，所以团队应该抓重点。',
    analysisParts: [
      { id: 'l6-q14-cause', kind: 'background', label: '原因背景', text: 'Since the deadline is close' },
      { id: 'l6-q14-effect', kind: 'predicate', label: '建议/结论', text: 'the team should focus on the most important tasks' }
    ],
    errorByOption: { b: ['logic-reversal'], c: ['meaning-mismatch'], d: ['mainline-missing'] }
  },
  {
    id: 'l6-q15',
    title: '综合方向',
    sentence: 'Although the passage is long, it uses clear examples, so readers can follow the main idea.',
    prompt: '这句话最稳的逻辑链是：',
    options: [
      { id: 'a', text: '让步：文章长；原因：例子清楚；结果：读者能跟上主旨' },
      { id: 'b', text: '原因：读者能跟上；结果：文章变长' },
      { id: 'c', text: '转折后重点是文章完全不可读' },
      { id: 'd', text: '同向补充：三部分没有重点差别' }
    ],
    correctOptionId: 'a',
    skeleton: 'Readers can follow the main idea.',
    explanation: 'Although 引出让步，clear examples 是原因，so 后面给结果：读者能跟上主旨。',
    analysisParts: [
      { id: 'l6-q15-concession', kind: 'logic', label: '让步背景', text: 'Although the passage is long' },
      { id: 'l6-q15-cause', kind: 'background', label: '原因', text: 'it uses clear examples' },
      { id: 'l6-q15-signal', kind: 'signal', label: '结果信号', text: 'so' },
      { id: 'l6-q15-effect', kind: 'predicate', label: '结果/重点', text: 'readers can follow the main idea' }
    ],
    errorByOption: { b: ['logic-reversal'], c: ['meaning-mismatch'], d: ['modifier-as-mainline'] }
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

export const level6Remediations: RemediationItem[] = [
  {
    id: 'rem-logic',
    tag: 'logic-reversal',
    title: '补救 A：方向先标出来',
    explanation: level6ErrorInfo['logic-reversal']?.plain ?? '',
    questions: [
      remediationQuestion(
        'l6-rem-logic',
        'logic-reversal',
        'The room was noisy, so many students could not focus.',
        'so 后面是：',
        [
          { id: 'a', text: '结果' },
          { id: 'b', text: '原因' },
          { id: 'c', text: '让步' }
        ],
        'a',
        'Students could not focus.',
        'so 后面给结果：学生无法专注。'
      )
    ]
  },
  {
    id: 'rem-mainline',
    tag: 'mainline-missing',
    title: '补救 B：两半都压短',
    explanation: level6ErrorInfo['mainline-missing']?.plain ?? '',
    questions: [
      remediationQuestion(
        'l6-rem-main',
        'mainline-missing',
        'The tool is useful, but it is expensive.',
        '转折后的重点是：',
        [
          { id: 'a', text: 'it is expensive' },
          { id: 'b', text: 'the tool is useful' },
          { id: 'c', text: 'useful means cheap' }
        ],
        'a',
        'It is expensive.',
        'but 后面拐方向，贵是重点问题。'
      )
    ]
  },
  {
    id: 'rem-clause',
    tag: 'clause-function',
    title: '补救 C：原因/让步先降级',
    explanation: level6ErrorInfo['clause-function']?.plain ?? '',
    questions: [
      remediationQuestion(
        'l6-rem-clause',
        'clause-function',
        'Although the answer is short, it is accurate.',
        '真正评价重点是：',
        [
          { id: 'a', text: 'it is accurate' },
          { id: 'b', text: 'answer is short' },
          { id: 'c', text: 'short means wrong' }
        ],
        'a',
        'It is accurate.',
        'Although 前半句是让步，主句 accurate 才是重点。'
      )
    ]
  },
  {
    id: 'rem-modifier',
    tag: 'modifier-as-mainline',
    title: '补救 D：补充和重点分开',
    explanation: level6ErrorInfo['modifier-as-mainline']?.plain ?? '',
    questions: [
      remediationQuestion(
        'l6-rem-modifier',
        'modifier-as-mainline',
        'The answer is clear and detailed.',
        'and 表示：',
        [
          { id: 'a', text: '同向补充' },
          { id: 'b', text: '强转折' },
          { id: 'c', text: '原因结果' }
        ],
        'a',
        'The answer is clear and detailed.',
        'clear 和 detailed 都是正向描述，方向一致。'
      )
    ]
  },
  {
    id: 'rem-meaning',
    tag: 'meaning-mismatch',
    title: '补救 E：别只看熟词',
    explanation: level6ErrorInfo['meaning-mismatch']?.plain ?? '',
    questions: [
      remediationQuestion(
        'l6-rem-meaning',
        'meaning-mismatch',
        'The evidence is weak; therefore, the claim is doubtful.',
        'therefore 后面是：',
        [
          { id: 'a', text: '结论：claim is doubtful' },
          { id: 'b', text: '原因：evidence is weak' },
          { id: 'c', text: '让步背景' }
        ],
        'a',
        'The claim is doubtful.',
        'therefore 后面给结论。'
      )
    ]
  },
  {
    id: 'rem-term',
    tag: 'term-blocked',
    title: '补救 F：术语翻成人话',
    explanation: level6ErrorInfo['term-blocked']?.plain ?? '',
    questions: [
      remediationQuestion(
        'l6-rem-term',
        'term-blocked',
        'The idea is old, yet it still works.',
        'yet 在这里表示：',
        [
          { id: 'a', text: '反向转折' },
          { id: 'b', text: '原因' },
          { id: 'c', text: '同向补充' }
        ],
        'a',
        'It still works.',
        'yet 表示虽然旧，但仍然有效。'
      )
    ]
  }
];

export const level6Summary = [
  '逻辑词先看方向，不先背表。',
  'and / moreover 多半是同向补充。',
  'but / however / yet 后面常是重点。',
  'because 找原因，so / therefore 找结果，although 先让步再看主句。'
];
