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

export const level9Steps: LessonStep[] = [
  {
    id: 'spot-signal',
    title: '第一步：先认信号',
    body: [
      '看到 more...than、as...as、not so much...as，先知道它在做比较。',
      '看到 It is/was...that、Only when、Not only、Rarely/Never，先停一下：这不是普通语序。'
    ]
  },
  {
    id: 'restore-plain',
    title: '第二步：还原成人话',
    body: [
      '比较结构先问：谁比谁？哪一边更强？',
      '强调、倒装和形式 it 先别被开头骗走，把真正信息放回正常句子。'
    ]
  },
  {
    id: 'return-mainline',
    title: '第三步：回到主线',
    body: [
      '特殊结构只是包装。读懂包装后，仍然回到“谁做了什么/什么怎么样”。',
      '四六级里够用的目标不是背术语，而是别把方向、重点和主线读反。'
    ]
  }
];

export const level9Terms: TermCard[] = [
  {
    id: 'comparison',
    term: '比较结构',
    plain: '句子在比较两边的程度、数量或特点。',
    function: '告诉你 A 和 B 谁更强，或两边是否一样。',
    examUse: '阅读里判断作者更支持哪一边；写译里避免把比较方向写反。',
    skipForNow: '先不用背所有比较句型，抓住 more than、as as、not so much as。'
  },
  {
    id: 'emphasis',
    term: '强调结构',
    plain: '把最想突出的信息夹在 It is/was 和 that 中间。',
    function: '提醒读者：真正重点是中间那块，不是 it。',
    examUse: '阅读中常用来提示答案信息；写作中可用来突出原因、方法或对象。',
    skipForNow: '先会还原成普通句，不用研究所有强调句限制。'
  },
  {
    id: 'inversion',
    term: '倒装',
    plain: '句子故意把正常顺序拧一下。',
    function: '常见于 only、not only、rarely、never 等开头的句子。',
    examUse: '阅读时别以为句子没有主线；写译时能识别 can/do/does 提前。',
    skipForNow: '先会读懂，不急着自己大量输出复杂倒装。'
  }
];

export const level9Examples: LessonExample[] = [
  {
    id: 'comparison-more-than',
    title: '例句 1：先看谁和谁比',
    sentence: 'This method is more effective than the old one for beginners.',
    options: [
      { id: 'a', text: '旧方法对初学者更有效。' },
      { id: 'b', text: '这个方法比旧方法更有效。' },
      { id: 'c', text: '初学者比方法更有效。' },
      { id: 'd', text: '两个方法一样有效。' }
    ],
    correctOptionId: 'b',
    engine: 'This method is more effective than the old one.',
    skeleton: '比较方向是 this method > the old one。',
    details: ['比较对象：this method 和 the old one。', 'more effective 在 than 前，说明前面这一边更强。', 'for beginners 是适用对象，不参与比较方向。'],
    translation: '对初学者来说，这个方法比旧方法更有效。',
    warning: '不要看到 than 后面的 old one 就把它读成更强的一边。'
  },
  {
    id: 'emphasis-it-that',
    title: '例句 2：It is...that 中间才是重点',
    sentence: 'It was clear feedback that helped students improve.',
    options: [
      { id: 'a', text: '重点是 clear feedback。' },
      { id: 'b', text: '重点是 It。' },
      { id: 'c', text: '重点是 students。' },
      { id: 'd', text: '这句话主要说学生没有进步。' }
    ],
    correctOptionId: 'a',
    engine: 'Clear feedback helped students improve.',
    skeleton: 'It was...that 是强调壳，真正被强调的是 clear feedback。',
    details: ['It 只是结构开头，不是内容核心。', 'clear feedback 被夹在 It was 和 that 中间。', '还原后主线是 feedback helped students improve。'],
    translation: '帮助学生进步的是清晰反馈。',
    warning: '看到 It is/was 不要急着把 it 当主语内容。'
  },
  {
    id: 'only-when-inversion',
    title: '例句 3：倒装先还原正常语序',
    sentence: 'Only when students review mistakes can they make real progress.',
    options: [
      { id: 'a', text: '学生只有复盘错误，才会真正进步。' },
      { id: 'b', text: '学生一犯错就一定进步。' },
      { id: 'c', text: '复盘错误会阻止进步。' },
      { id: 'd', text: '这句话主要说学生不能进步。' }
    ],
    correctOptionId: 'a',
    engine: 'They can make real progress only when they review mistakes.',
    skeleton: 'Only when 放句首，can 提前；意思仍然是“只有在……时才……”。',
    details: ['Only when 引出条件。', 'can they 是倒装后的样子。', '还原后主线是 students can make progress。'],
    translation: '只有当学生复盘错误时，他们才会真正进步。',
    warning: '倒装不是换意思，只是换顺序。'
  }
];

export const level9Traps: CommonTrap[] = [
  {
    id: 'not-so-much',
    title: '坑 1：not so much A as B 重点在 B',
    sentence: 'The problem is not so much lack of money as lack of planning.',
    wrongRead: '这句话主要说缺钱。',
    whyWrong: 'not so much A as B 的人话是“与其说 A，不如说 B”。真正更重的一边是 B。',
    correctBreakdown: ['A：lack of money', 'B：lack of planning', '重点：lack of planning'],
    skeleton: 'The problem is more about planning than money.',
    translation: '问题与其说是缺钱，不如说是缺少规划。',
    quickRule: '遇到 not so much A as B，先把 B 圈成重点。'
  },
  {
    id: 'it-not-content',
    title: '坑 2：It is...that 里的 it 不承载内容',
    sentence: 'It is regular practice that builds confidence.',
    wrongRead: 'It 是这句话的真实内容核心。',
    whyWrong: 'It 只是强调结构外壳，真正重点是 regular practice。',
    correctBreakdown: ['强调信息：regular practice', '真实动作：builds confidence', '还原：Regular practice builds confidence.'],
    skeleton: 'Regular practice builds confidence.',
    translation: '建立信心的是规律练习。',
    quickRule: 'It is/was...that 先看中间，不要盯着 it。'
  },
  {
    id: 'negative-front',
    title: '坑 3：否定词提前后语序会变化',
    sentence: 'Rarely do students notice this small difference at first.',
    wrongRead: '看到 do students 就以为是普通疑问句。',
    whyWrong: 'rarely 放句首会触发类似疑问句的语序，但整句仍然是陈述意思。',
    correctBreakdown: ['频率信号：Rarely', '主线：students notice this difference', '意思：学生一开始很少注意到'],
    skeleton: 'Students rarely notice this difference at first.',
    translation: '学生一开始很少注意到这个小差别。',
    quickRule: 'Rarely/Never/Hardly 放句首，先还原成普通陈述句。'
  }
];

export const level9ErrorInfo: Partial<Record<ErrorTag, ErrorTagInfo>> = {
  'special-structure': {
    title: '特殊结构没识别',
    plain: '你把比较、强调、倒装或形式 it 当成普通句子读了。',
    action: '先圈信号词，再把句子还原成人话，最后回到主线。'
  },
  'logic-reversal': {
    title: '方向读反',
    plain: '比较方向、条件方向或否定方向被读反了。',
    action: '问自己：谁比谁？只有在什么情况下？真正重点是哪一边？'
  },
  'mainline-missing': {
    title: '主线没抓住',
    plain: '你被开头的 it、only、not only 或长尾巴带走了。',
    action: '把包装拆掉，只保留“谁做了什么/什么怎么样”。'
  },
  'modifier-target': {
    title: '重点对象找错',
    plain: '你没有找准被比较、被强调或真正承接动作的对象。',
    action: '把强调信息、比较对象、真实内容分别圈出来。'
  },
  'term-blocked': {
    title: '术语卡住',
    plain: '你知道这是语法点，但没有把它翻成可理解的人话。',
    action: '不要背名词，直接问：这句话想强调什么、比较什么、限制什么？'
  },
  'form-mismatch': {
    title: '结构形式不稳',
    plain: '你识别了大概意思，但没有看清固定结构里的形式要求。',
    action: '看成套信号：more...than、It is...that、Only when...can、find it...to。'
  }
};

export const level9PracticeQuestions: PracticeQuestion[] = [
  {
    id: 'l9-q1',
    title: 'neutral',
    sentence: 'Online practice is more flexible than printed worksheets for busy learners.',
    prompt: '这句话最稳的读法是：',
    options: [
      { id: 'a', text: '纸质练习对忙碌学习者更灵活。' },
      { id: 'b', text: '线上练习比纸质练习更灵活。' },
      { id: 'c', text: '两种练习完全一样。' },
      { id: 'd', text: '忙碌学习者让纸质练习更灵活。' }
    ],
    correctOptionId: 'b',
    skeleton: 'Online practice is more flexible than printed worksheets.',
    explanation: 'more flexible 在 online practice 这一边，than 后面是被比较对象 printed worksheets，所以更灵活的是 online practice。',
    analysisParts: [
      { id: 'l9-q1-subject', kind: 'subject', label: '比较主体', text: 'Online practice' },
      { id: 'l9-q1-form', kind: 'form', label: '比较信号', text: 'more flexible than' },
      { id: 'l9-q1-object', kind: 'object', label: '比较对象', text: 'printed worksheets' },
      { id: 'l9-q1-detail', kind: 'detail', label: '适用对象', text: 'for busy learners' }
    ],
    errorByOption: { a: ['logic-reversal'], c: ['special-structure'], d: ['mainline-missing'] }
  },
  {
    id: 'l9-q2',
    title: 'neutral',
    sentence: "The new guide in the review booklet is as clear as the teacher's explanation.",
    prompt: '这句话的意思最接近：',
    options: [
      { id: 'a', text: '新指南和老师解释一样清楚。' },
      { id: 'b', text: '新指南比老师解释更清楚。' },
      { id: 'c', text: '老师解释不清楚。' },
      { id: 'd', text: '新指南没有任何解释。' }
    ],
    correctOptionId: 'a',
    skeleton: 'The new guide is as clear as the explanation.',
    explanation: 'as clear as 表示“和……一样清楚”，不是更强，也不是更弱。',
    analysisParts: [
      { id: 'l9-q2-subject', kind: 'subject', label: '比较主体', text: 'The new guide' },
      { id: 'l9-q2-form', kind: 'form', label: '比较信号', text: 'as clear as' },
      { id: 'l9-q2-object', kind: 'object', label: '比较对象', text: "the teacher's explanation" }
    ],
    errorByOption: { b: ['logic-reversal'], c: ['meaning-mismatch'], d: ['mainline-missing'] }
  },
  {
    id: 'l9-q3',
    title: 'neutral',
    sentence: 'The issue in the final project is not so much money as time management.',
    prompt: '这句话真正更强调哪一边？',
    options: [
      { id: 'a', text: 'money' },
      { id: 'b', text: 'time' },
      { id: 'c', text: 'issue' },
      { id: 'd', text: '两边都完全不是问题' }
    ],
    correctOptionId: 'b',
    skeleton: 'The issue is more about time than money.',
    explanation: 'not so much A as B 是“与其说 A，不如说 B”，真正重点在 as 后面的 time。',
    analysisParts: [
      { id: 'l9-q3-subject', kind: 'subject', label: '主线', text: 'The issue' },
      { id: 'l9-q3-a', kind: 'detail', label: '弱化对象', text: 'money' },
      { id: 'l9-q3-form', kind: 'form', label: '结构信号', text: 'not so much money as' },
      { id: 'l9-q3-b', kind: 'answer', label: '真正重点', text: 'time' }
    ],
    errorByOption: { a: ['logic-reversal'], c: ['mainline-missing'], d: ['meaning-mismatch'] }
  },
  {
    id: 'l9-q4',
    title: 'neutral',
    sentence: 'It is regular practice after class that improves reading speed over time.',
    prompt: '这句话强调的信息是：',
    options: [
      { id: 'a', text: 'regular practice' },
      { id: 'b', text: 'It' },
      { id: 'c', text: 'reading speed' },
      { id: 'd', text: '没有任何强调信息' }
    ],
    correctOptionId: 'a',
    skeleton: 'Regular practice improves reading speed.',
    explanation: 'It is...that 是强调壳，中间的 regular practice 才是被强调内容。',
    analysisParts: [
      { id: 'l9-q4-form-1', kind: 'form', label: '强调外壳', text: 'It is' },
      { id: 'l9-q4-answer', kind: 'answer', label: '强调信息', text: 'regular practice' },
      { id: 'l9-q4-form-2', kind: 'form', label: '强调外壳', text: 'that' },
      { id: 'l9-q4-predicate', kind: 'predicate', label: '动作', text: 'improves reading speed' }
    ],
    errorByOption: { b: ['mainline-missing'], c: ['modifier-target'], d: ['special-structure'] }
  },
  {
    id: 'l9-q5',
    title: 'neutral',
    sentence: 'It was the final paragraph of the report that changed her opinion.',
    prompt: '还原成普通句，主线最接近：',
    options: [
      { id: 'a', text: 'The final paragraph changed her opinion.' },
      { id: 'b', text: 'It changed the final paragraph.' },
      { id: 'c', text: 'Her opinion changed the paragraph.' },
      { id: 'd', text: 'The paragraph had no effect.' }
    ],
    correctOptionId: 'a',
    skeleton: 'The final paragraph changed her opinion.',
    explanation: '被强调的是 the final paragraph，还原后它是主线主语。',
    analysisParts: [
      { id: 'l9-q5-form', kind: 'form', label: '强调外壳', text: 'It was' },
      { id: 'l9-q5-answer', kind: 'answer', label: '强调信息', text: 'the final paragraph' },
      { id: 'l9-q5-predicate', kind: 'predicate', label: '动作', text: 'changed her opinion' }
    ],
    errorByOption: { b: ['mainline-missing'], c: ['logic-reversal'], d: ['meaning-mismatch'] }
  },
  {
    id: 'l9-q6',
    title: 'neutral',
    sentence: 'It is important to check the question first before choosing an answer under time pressure.',
    prompt: '这句话里真正重要的事情是：',
    options: [
      { id: 'a', text: 'to check the question first' },
      { id: 'b', text: 'It' },
      { id: 'c', text: 'important' },
      { id: 'd', text: 'question 这个词本身' }
    ],
    correctOptionId: 'a',
    skeleton: 'Checking the question first is important.',
    explanation: 'It 是形式主语，占位置；真正内容是后面的 to check the question first。',
    analysisParts: [
      { id: 'l9-q6-form', kind: 'form', label: '形式主语', text: 'It' },
      { id: 'l9-q6-predicate', kind: 'predicate', label: '判断', text: 'is important' },
      { id: 'l9-q6-answer', kind: 'answer', label: '真正内容', text: 'to check the question first' }
    ],
    errorByOption: { b: ['mainline-missing'], c: ['modifier-target'], d: ['term-blocked'] }
  },
  {
    id: 'l9-q7',
    title: 'neutral',
    sentence: 'Many students find it difficult to understand long sentences with hidden modifiers.',
    prompt: '这句话里 difficult 真正指向的是：',
    options: [
      { id: 'a', text: 'to understand long sentences' },
      { id: 'b', text: 'Many students' },
      { id: 'c', text: 'find' },
      { id: 'd', text: 'it 这个词' }
    ],
    correctOptionId: 'a',
    skeleton: 'Students find understanding long sentences difficult.',
    explanation: 'find it difficult to... 里的 it 是形式宾语，真正困难的是 to understand long sentences。',
    analysisParts: [
      { id: 'l9-q7-subject', kind: 'subject', label: '主语', text: 'Many students' },
      { id: 'l9-q7-form', kind: 'form', label: '形式宾语结构', text: 'find it difficult' },
      { id: 'l9-q7-answer', kind: 'answer', label: '真正内容', text: 'to understand long sentences' }
    ],
    errorByOption: { b: ['modifier-target'], c: ['mainline-missing'], d: ['special-structure'] }
  },
  {
    id: 'l9-q8',
    title: 'neutral',
    sentence: 'Only after learners compare several explanations can they spot the real difference.',
    prompt: '还原成人话，意思最接近：',
    options: [
      { id: 'a', text: '学习者只有比较几种解释之后，才能看出真正差别。' },
      { id: 'b', text: '学习者比较解释后就不能发现差别。' },
      { id: 'c', text: '解释会主动比较学习者。' },
      { id: 'd', text: '这句话主要说没有任何条件。' }
    ],
    correctOptionId: 'a',
    skeleton: 'Learners can spot the real difference only after they compare several explanations.',
    explanation: 'Only after 放在句首，can 提前；意思仍然是“只有在……之后才……”。',
    analysisParts: [
      { id: 'l9-q8-condition', kind: 'background', label: '条件', text: 'Only after learners compare several explanations' },
      { id: 'l9-q8-form', kind: 'form', label: '倒装信号', text: 'can they' },
      { id: 'l9-q8-predicate', kind: 'predicate', label: '主线动作', text: 'spot the real difference' }
    ],
    errorByOption: { b: ['logic-reversal'], c: ['mainline-missing'], d: ['special-structure'] }
  },
  {
    id: 'l9-q9',
    title: 'neutral',
    sentence: 'Not only does the app save time, but it also reduces stress.',
    prompt: '这句话表达的是：',
    options: [
      { id: 'a', text: '这个 app 既节省时间，也减轻压力。' },
      { id: 'b', text: '这个 app 不节省时间。' },
      { id: 'c', text: '这个 app 只减轻压力，不节省时间。' },
      { id: 'd', text: '时间减轻了 app 的压力。' }
    ],
    correctOptionId: 'a',
    skeleton: 'The app saves time and reduces stress.',
    explanation: 'Not only...but also... 是双重补充，不是否定整体；does 提前只是结构形式。',
    analysisParts: [
      { id: 'l9-q9-form', kind: 'form', label: '并列信号', text: 'Not only' },
      { id: 'l9-q9-subject', kind: 'subject', label: '主语', text: 'the app' },
      { id: 'l9-q9-p1', kind: 'predicate', label: '作用一', text: 'save time' },
      { id: 'l9-q9-p2', kind: 'predicate', label: '作用二', text: 'reduces stress' }
    ],
    errorByOption: { b: ['logic-reversal'], c: ['meaning-mismatch'], d: ['mainline-missing'] }
  },
  {
    id: 'l9-q10',
    title: 'neutral',
    sentence: 'Rarely do readers question this hidden assumption at first during timed practice.',
    prompt: '这句话最稳的理解是：',
    options: [
      { id: 'a', text: '读者一开始很少质疑这个隐藏假设。' },
      { id: 'b', text: '读者一开始总是质疑这个隐藏假设。' },
      { id: 'c', text: '这是一个真实问句。' },
      { id: 'd', text: '假设主动质疑读者。' }
    ],
    correctOptionId: 'a',
    skeleton: 'Readers rarely question this assumption at first.',
    explanation: 'Rarely 放句首触发 do readers 这种语序，但整句意思是“很少质疑”。',
    analysisParts: [
      { id: 'l9-q10-signal', kind: 'signal', label: '频率信号', text: 'Rarely' },
      { id: 'l9-q10-form', kind: 'form', label: '倒装形式', text: 'do readers' },
      { id: 'l9-q10-predicate', kind: 'predicate', label: '主线动作', text: 'question this hidden assumption' },
      { id: 'l9-q10-detail', kind: 'detail', label: '时间', text: 'at first' }
    ],
    errorByOption: { b: ['logic-reversal'], c: ['special-structure'], d: ['mainline-missing'] }
  },
  {
    id: 'l9-q11',
    title: 'neutral',
    sentence: 'Reading the question carefully under time pressure is more useful than guessing quickly.',
    prompt: '比较结果是：',
    options: [
      { id: 'a', text: '认真读题比快速猜测更有用。' },
      { id: 'b', text: '快速猜测比认真读题更有用。' },
      { id: 'c', text: '认真读题和猜测一样有用。' },
      { id: 'd', text: '这句话没有比较。' }
    ],
    correctOptionId: 'a',
    skeleton: 'Reading carefully is more useful than guessing quickly.',
    explanation: 'more useful 放在 Reading the question carefully 这一边，than 后面是 guessing quickly。',
    analysisParts: [
      { id: 'l9-q11-subject', kind: 'subject', label: '比较主体', text: 'Reading the question carefully' },
      { id: 'l9-q11-form', kind: 'form', label: '比较信号', text: 'more useful than' },
      { id: 'l9-q11-object', kind: 'object', label: '比较对象', text: 'guessing quickly' }
    ],
    errorByOption: { b: ['logic-reversal'], c: ['meaning-mismatch'], d: ['special-structure'] }
  },
  {
    id: 'l9-q12',
    title: 'neutral',
    sentence: 'The course is less difficult than many beginners expect after the first lesson.',
    prompt: '这句话意思最接近：',
    options: [
      { id: 'a', text: '这门课没有许多初学者预想的那么难。' },
      { id: 'b', text: '这门课比所有初学者都难。' },
      { id: 'c', text: '许多初学者比课程更难。' },
      { id: 'd', text: '这门课没有任何难度。' }
    ],
    correctOptionId: 'a',
    skeleton: 'The course is less difficult than beginners expect.',
    explanation: 'less difficult than... 是“比……想的更不难”，也就是没那么难。',
    analysisParts: [
      { id: 'l9-q12-subject', kind: 'subject', label: '比较主体', text: 'The course' },
      { id: 'l9-q12-form', kind: 'form', label: '比较信号', text: 'less difficult than' },
      { id: 'l9-q12-object', kind: 'object', label: '比较对象', text: 'many beginners expect' }
    ],
    errorByOption: { b: ['logic-reversal'], c: ['mainline-missing'], d: ['meaning-mismatch'] }
  },
  {
    id: 'l9-q13',
    title: 'neutral',
    sentence: 'It is the context in the sentence that decides the meaning of the word.',
    prompt: '这句话强调的是：',
    options: [
      { id: 'a', text: 'the context' },
      { id: 'b', text: 'It' },
      { id: 'c', text: 'the word' },
      { id: 'd', text: 'meaning 这个词' }
    ],
    correctOptionId: 'a',
    skeleton: 'The context decides the meaning.',
    explanation: 'the context 被夹在 It is 和 that 中间，是被强调信息。',
    analysisParts: [
      { id: 'l9-q13-form-1', kind: 'form', label: '强调外壳', text: 'It is' },
      { id: 'l9-q13-answer', kind: 'answer', label: '强调信息', text: 'the context' },
      { id: 'l9-q13-predicate', kind: 'predicate', label: '动作', text: 'decides the meaning of the word' }
    ],
    errorByOption: { b: ['mainline-missing'], c: ['modifier-target'], d: ['term-blocked'] }
  },
  {
    id: 'l9-q14',
    title: 'neutral',
    sentence: 'Teachers consider it necessary to explain examples clearly before students practice alone.',
    prompt: 'necessary 真正指向的内容是：',
    options: [
      { id: 'a', text: 'to explain examples clearly' },
      { id: 'b', text: 'Teachers' },
      { id: 'c', text: 'it' },
      { id: 'd', text: 'examples 这个名词' }
    ],
    correctOptionId: 'a',
    skeleton: 'Teachers consider explaining examples clearly necessary.',
    explanation: 'consider it necessary to... 里的 it 是形式宾语，真正必要的是 to explain examples clearly。',
    analysisParts: [
      { id: 'l9-q14-subject', kind: 'subject', label: '主语', text: 'Teachers' },
      { id: 'l9-q14-form', kind: 'form', label: '形式宾语结构', text: 'consider it necessary' },
      { id: 'l9-q14-answer', kind: 'answer', label: '真正内容', text: 'to explain examples clearly' }
    ],
    errorByOption: { b: ['modifier-target'], c: ['mainline-missing'], d: ['term-blocked'] }
  },
  {
    id: 'l9-q15',
    title: 'neutral',
    sentence: 'Only by comparing examples from different passages can students find the common pattern.',
    prompt: '还原成人话，意思最接近：',
    options: [
      { id: 'a', text: '学生只有通过比较例子，才能找到共同规律。' },
      { id: 'b', text: '学生不用比较例子也能找到规律。' },
      { id: 'c', text: '共同规律比较学生。' },
      { id: 'd', text: '这句话主要说学生不能找到规律。' }
    ],
    correctOptionId: 'a',
    skeleton: 'Students can find the common pattern only by comparing examples.',
    explanation: 'Only by 放句首，can students 倒装；意思是“只有通过……才……”。',
    analysisParts: [
      { id: 'l9-q15-condition', kind: 'background', label: '方式条件', text: 'Only by comparing examples' },
      { id: 'l9-q15-form', kind: 'form', label: '倒装信号', text: 'can students' },
      { id: 'l9-q15-predicate', kind: 'predicate', label: '主线动作', text: 'find the common pattern' }
    ],
    errorByOption: { b: ['logic-reversal'], c: ['mainline-missing'], d: ['meaning-mismatch'] }
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

export const level9Remediations: RemediationItem[] = [
  {
    id: 'rem-special',
    tag: 'special-structure',
    title: '补救 A：先认结构壳',
    explanation: level9ErrorInfo['special-structure']?.plain ?? '',
    questions: [
      remediationQuestion(
        'l9-rem-special',
        'special-structure',
        'It is careful reading that prevents mistakes.',
        '这句话应先识别成哪类结构？',
        [
          { id: 'a', text: '强调结构' },
          { id: 'b', text: '普通地点状语' },
          { id: 'c', text: '被动语态' }
        ],
        'a',
        'Careful reading prevents mistakes.',
        'It is...that 是强调结构，先找中间的 careful reading。'
      )
    ]
  },
  {
    id: 'rem-logic',
    tag: 'logic-reversal',
    title: '补救 B：比较方向别读反',
    explanation: level9ErrorInfo['logic-reversal']?.plain ?? '',
    questions: [
      remediationQuestion(
        'l9-rem-logic',
        'logic-reversal',
        'Planning is more helpful than guessing.',
        '哪一边更 helpful？',
        [
          { id: 'a', text: 'Planning' },
          { id: 'b', text: 'guessing' },
          { id: 'c', text: '两边都不是' }
        ],
        'a',
        'Planning is more helpful.',
        'more helpful 在 Planning 这一边。'
      )
    ]
  },
  {
    id: 'rem-mainline',
    tag: 'mainline-missing',
    title: '补救 C：拆掉包装找主线',
    explanation: level9ErrorInfo['mainline-missing']?.plain ?? '',
    questions: [
      remediationQuestion(
        'l9-rem-mainline',
        'mainline-missing',
        'Only after practice can learners write clearly.',
        '普通语序主线是：',
        [
          { id: 'a', text: 'Learners can write clearly after practice.' },
          { id: 'b', text: 'Practice can write learners.' },
          { id: 'c', text: 'Only 是主语。' }
        ],
        'a',
        'Learners can write clearly.',
        'Only after practice 是条件，主线仍然是 learners can write clearly。'
      )
    ]
  },
  {
    id: 'rem-target',
    tag: 'modifier-target',
    title: '补救 D：找准被强调对象',
    explanation: level9ErrorInfo['modifier-target']?.plain ?? '',
    questions: [
      remediationQuestion(
        'l9-rem-target',
        'modifier-target',
        'It was the example that made the rule clear.',
        '被强调的是：',
        [
          { id: 'a', text: 'the example' },
          { id: 'b', text: 'It' },
          { id: 'c', text: 'the rule' }
        ],
        'a',
        'The example made the rule clear.',
        'It was...that 中间的 the example 是强调信息。'
      )
    ]
  },
  {
    id: 'rem-term',
    tag: 'term-blocked',
    title: '补救 E：术语翻成人话',
    explanation: level9ErrorInfo['term-blocked']?.plain ?? '',
    questions: [
      remediationQuestion(
        'l9-rem-term',
        'term-blocked',
        'Many students find it hard to keep focused.',
        '这句话先问哪句人话？',
        [
          { id: 'a', text: '真正 hard 的事情是什么？' },
          { id: 'b', text: 'it 这个词高级吗？' },
          { id: 'c', text: 'students 是不是地点？' }
        ],
        'a',
        'Keeping focused is hard.',
        'find it hard to... 里的 it 是形式宾语，真正内容在 to 后面。'
      )
    ]
  },
  {
    id: 'rem-form',
    tag: 'form-mismatch',
    title: '补救 F：成套信号一起看',
    explanation: level9ErrorInfo['form-mismatch']?.plain ?? '',
    questions: [
      remediationQuestion(
        'l9-rem-form',
        'form-mismatch',
        'Not only does practice improve speed, but it also builds confidence.',
        '这句话的成套信号是：',
        [
          { id: 'a', text: 'Not only...but also...' },
          { id: 'b', text: 'only...than...' },
          { id: 'c', text: 'as...because...' }
        ],
        'a',
        'Practice improves speed and builds confidence.',
        'Not only...but also... 是成套结构，表达两件事都成立。'
      )
    ]
  }
];

export const level9Summary = [
  '特殊结构先认信号，再还原成人话。',
  '比较题先问：谁比谁，哪边更强。',
  'It is/was...that 重点在中间，不在 it。',
  'Only、Rarely、Not only 开头时，先把倒装还原回普通主线。'
];
