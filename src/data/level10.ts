import type { CommonTrap, ErrorTagInfo, LessonExample, LessonStep, PracticeQuestion, RemediationItem, TermCard } from '../types';

export const level10Steps: LessonStep[] = [
  {
    id: 'step1',
    title: '第一步：找主发动机，定主干',
    body: [
      '不管句子多长，先用眼睛扫描寻找真正的“主句谓语”。',
      '排除那些长得像动词但其实是修饰的（doing, done, to do），排除从句里的动词。',
      '找到主发动机后，往前确认主语（谁做），往后确认宾语/表语（做了什么/是什么）。'
    ]
  },
  {
    id: 'step2',
    title: '第二步：把修饰当括号处理',
    body: [
      '找到主干后，把剩下的“废话”在大脑里打上括号。',
      '例如：(介词短语)、(who/which/that 引导的从句)、(doing/done/to do 引出的小尾巴)。',
      '防止被次要信息干扰，阅读时快速跳读，翻译时最后塞进句子里。'
    ]
  },
  {
    id: 'step3',
    title: '第三步：看路标，找逻辑',
    body: [
      '找句子里的 although, but, because, therefore, and 等连词。',
      '转折词后面是真正考点。并列词（and/or）前后结构一定对称。',
      '不认识单词也能猜出作者态度，理清长难句的分层。'
    ]
  },
  {
    id: 'step4',
    title: '第四步：定词性与形式',
    body: [
      '针对选词填空和写作/翻译的最后检查。',
      '缺主语/宾语填名词；缺主发动机填动词（注意时态和主谓一致）；名词前/be动词后缺东西填形容词；句子完整了填副词。',
      '选词填空直接排除 70% 的错误选项；写译避免低级语法扣分。'
    ]
  }
];

export const level10Terms: TermCard[] = [
  {
    id: 'skeleton',
    term: '骨架 (Skeleton)',
    plain: '句子唯一合法的主线。',
    function: '一个句子只能有一套“主语+谓语(主发动机)”。',
    examUse: '如果出现了两个完整句子，中间必须有连词（and/but/because）。',
    skipForNow: '优先找骨架，其他先不管。'
  },
  {
    id: 'modifiers',
    term: '修饰 (Modifiers)',
    plain: '所有从句、非谓语、介词短语统统都是修饰。',
    function: '它们是句子的“挂件”，哪怕全删了，句子依然能在语法上存活。',
    examUse: '读不懂时，先把修饰删掉看主线。',
    skipForNow: '不要管是哪种从句，统统当括号。'
  },
  {
    id: 'connectors',
    term: '逻辑路标 (Connectors)',
    plain: '连接两句话、或者改变句子方向的词。',
    function: '见到 but/however 重点看后面，见到 and 重点找前后对称。',
    examUse: '猜词、猜态度、做选词填空和翻译逻辑连接。',
    skipForNow: '只需记住几个最高频的路标。'
  },
  {
    id: 'word-class',
    term: '词性坑 (Word Class)',
    plain: '什么位置填什么词。',
    function: '填空题和写作的终极护城河，只要位置不对，意思再通顺也是错的。',
    examUse: '做选词填空的第一步。',
    skipForNow: '根据前后文判定缺什么词。'
  }
];

export const level10Examples: LessonExample[] = [
  {
    id: 'ex1',
    title: '实战 1：阅读长难句秒杀',
    sentence: 'The widespread use of smartphones, which allow people to stay connected anywhere, has significantly changed the way individuals interact with each other.',
    engine: 'has changed',
    skeleton: 'The use has changed the way.',
    details: [
      'which allow... anywhere 是补充说明智能手机',
      'individuals interact with each other 说明是什么样的方式'
    ],
    translation: '智能手机的普及使用，改变了个人互动的方式。',
    warning: '扫过 which 从句里的 allow（这是从句的，不是主句的），找到真正的核心谓语 has changed。'
  },
  {
    id: 'ex2',
    title: '实战 2：选词填空预判',
    sentence: 'This new strategy has proven to be highly ________ in reducing environmental pollution. (A. effect B. effective C. effectively D. effects)',
    engine: 'has proven',
    skeleton: 'This strategy has proven to be effective.',
    details: [
      '空格前面是 be (系动词) 加上 highly (副词)。',
      '副词修饰形容词，be 动词后面接表语（形容词）。'
    ],
    translation: '这项新战略被证明在减少环境污染方面非常有效。',
    warning: '这里 100% 缺一个形容词。不用看懂整句意思，直接选 B。'
  },
  {
    id: 'ex3',
    title: '实战 3：翻译防坑',
    sentence: '中文题干：随着经济的快速发展，越来越多的年轻人选择去大城市寻找更好的工作机会。',
    engine: 'choose',
    skeleton: 'Young people choose to find...',
    details: [
      '(随着经济的快速发展) -> 介词短语背景 With the rapid development...',
      '(去大城市) -> 介词地点 to big cities',
      '(更好的工作机会) -> 补充寻找的宾语 better job opportunities'
    ],
    translation: 'With the rapid development of the economy, more and more young people choose to go to big cities to find better job opportunities.',
    warning: '先写死核心骨架，然后再把定语和状语像挂件一样挂上去，最后检查动词时态和单复数。'
  }
];

export const level10Traps: CommonTrap[] = [
  {
    id: 'hard-read',
    title: '坑 1：上来就从左到右硬读',
    sentence: '长难句中',
    wrongRead: '遇到从句或者超长名词，就卡住不往下读了。',
    whyWrong: '从左到右硬读容易脑子一团浆糊。',
    correctBreakdown: [
      '强制自己目光往后扫，找到核心“主发动机”再回头看。'
    ],
    skeleton: '抓主干',
    translation: '跳过修饰语',
    quickRule: '找主发动机'
  },
  {
    id: 'meaning-only',
    title: '坑 2：选词填空只当“阅读理解”做',
    sentence: '选词填空中',
    wrongRead: '把选项翻译成中文，然后一个个放进去读，觉得哪个顺口就选哪个。',
    whyWrong: '在四六级里，很多时候有 3 个词意思都差不多，但只有一个词性符合那个空的位置。',
    correctBreakdown: [
      '必须先判断词性！'
    ],
    skeleton: '定词性',
    translation: '缩小范围',
    quickRule: '判断词性'
  },
  {
    id: 'comma-splice',
    title: '坑 3：写长句不用连词，只用逗号',
    sentence: 'I am a student, I like English.',
    wrongRead: '用逗号连接两个完整的句子。',
    whyWrong: '一套“主谓”就是一个发动机。两个发动机不能放在同一个车厢里，除非中间用 and / but / because 这种连词接起来。',
    correctBreakdown: [
      'I am a student and I like English.',
      'Because I am a student, I like English.'
    ],
    skeleton: '使用连词',
    translation: '连接句子',
    quickRule: '加连词'
  }
];

export const practiceQuestions: PracticeQuestion[] = [
  {
    id: 'q1',
    title: '题 1：长难句剥离骨架（综合找主干）',
    sentence: 'A recent study conducted by a team of researchers from top universities reveals that regular physical activity can delay the aging process.',
    prompt: '这句话真正的主干骨架是：',
    options: [
      { id: 'a', text: 'A recent study conducted by a team.' },
      { id: 'b', text: 'Researchers reveals that.' },
      { id: 'c', text: 'A study reveals that regular physical activity can delay the aging process.' },
      { id: 'd', text: 'Physical activity can delay the aging process.' }
    ],
    correctOptionId: 'c',
    skeleton: 'A study reveals that...',
    explanation: '主语是 study（修饰语 conducted... 扔掉），主发动机是 reveals，宾语是一整个从句（that...）。主线就是“研究揭示了某事”。',
    errorByOption: {
      a: ['modifier-as-mainline'],
      b: ['mainline-missing'],
      d: ['clause-function']
    }
  },
  {
    id: 'q2',
    title: '题 2：选词填空词性预判',
    sentence: 'The government is taking immediate measures to prevent the situation from becoming even more ________.',
    prompt: '填入空格的词，词性必须是：',
    options: [
      { id: 'a', text: '名词 (Noun)' },
      { id: 'b', text: '动词 (Verb)' },
      { id: 'c', text: '形容词 (Adjective)' },
      { id: 'd', text: '副词 (Adverb)' }
    ],
    correctOptionId: 'c',
    skeleton: 'The situation becomes more...',
    explanation: 'becoming (变得) 是系动词，even more (更加) 是副词，后面必须接形容词来说明“情况变得怎么样”。',
    errorByOption: {
      a: ['word-position'],
      b: ['word-position'],
      d: ['word-position']
    }
  },
  {
    id: 'q3',
    title: '题 3：识别伪装的动词',
    sentence: 'The solutions provided by the experts helping the company overcome the crisis are highly practical.',
    prompt: '这句话的主发动机（核心谓语）是：',
    options: [
      { id: 'a', text: 'provided' },
      { id: 'b', text: 'helping' },
      { id: 'c', text: 'overcome' },
      { id: 'd', text: 'are' }
    ],
    correctOptionId: 'd',
    skeleton: 'The solutions are practical.',
    explanation: 'provided 是修饰 solutions 的，helping 是修饰 experts 的，overcome 是跟在 helping 后面的。真正的骨架是 The solutions are practical。',
    errorByOption: {
      a: ['predicate-confusion'],
      b: ['predicate-confusion'],
      c: ['predicate-confusion']
    }
  },
  {
    id: 'q4',
    title: '题 4：逻辑路标判断',
    sentence: 'Some people argue that technology limits human interaction; ________, others believe it connects people across the globe more effectively.',
    prompt: '根据前后句的主干意思，这里应该填入什么逻辑词？',
    options: [
      { id: 'a', text: 'therefore (因此)' },
      { id: 'b', text: 'however (然而)' },
      { id: 'c', text: 'moreover (此外)' },
      { id: 'd', text: 'because (因为)' }
    ],
    correctOptionId: 'b',
    skeleton: 'Some people argue... however, others believe...',
    explanation: '前面说“限制互动”，后面说“更有效连接全球”，明显是对立转折关系。',
    errorByOption: {
      a: ['logic-reversal'],
      c: ['logic-reversal'],
      d: ['logic-reversal']
    }
  },
  {
    id: 'q5',
    title: '题 5：写作骨架纠错',
    sentence: "Playing video games for a long time it is bad for students' eyes.",
    prompt: '这句话的语法错误在于：',
    options: [
      { id: 'a', text: '缺主语' },
      { id: 'b', text: '有两个主语打架（Playing video games 和 it）' },
      { id: 'c', text: '缺谓语动词' },
      { id: 'd', text: '介词使用错误' }
    ],
    correctOptionId: 'b',
    skeleton: "Playing video games is bad...",
    explanation: 'Playing video games for a long time 已经是一件事（动名词作主语）了，后面就不需要再多加一个 it。直接就是 Playing... is bad...。',
    errorByOption: {
      a: ['writing-translation-basics'],
      c: ['writing-translation-basics'],
      d: ['writing-translation-basics']
    }
  },
  {
    id: 'q6',
    title: '题 6：综合拆解并列与修饰',
    sentence: 'Companies that fail to adapt to the new market trends or ignore customer feedback will eventually lose their competitive edge.',
    prompt: '这句话中 will eventually lose 这个动作的主语是：',
    options: [
      { id: 'a', text: 'new market trends' },
      { id: 'b', text: 'customer feedback' },
      { id: 'c', text: 'Companies' },
      { id: 'd', text: 'Companies that fail' }
    ],
    correctOptionId: 'c',
    skeleton: 'Companies will lose edge.',
    explanation: 'that 引导了一长串从句一直到 feedback，都是在修饰 Companies（什么样的公司）。核心主语只有 Companies。',
    errorByOption: {
      a: ['mainline-missing'],
      b: ['mainline-missing'],
      d: ['modifier-as-mainline']
    }
  },
  {
    id: 'q7',
    title: '题 7：翻译句子拼装',
    sentence: '中文：为了提高效率，经理建议采用新的软件。',
    prompt: '下列哪个翻译在结构上最准确？',
    options: [
      { id: 'a', text: 'To improve efficiency, the manager suggested adopting the new software.' },
      { id: 'b', text: 'Improve efficiency, the manager suggested adopting the new software.' },
      { id: 'c', text: 'For improve efficiency, the manager suggest new software.' },
      { id: 'd', text: 'To improve efficiency, the manager suggesting adopting the new software.' }
    ],
    correctOptionId: 'a',
    skeleton: 'The manager suggested adopting software.',
    explanation: '表目的用 To do，主语 manager，谓语 suggested (过去时)，建议做某事 suggest doing。',
    errorByOption: {
      b: ['writing-translation-basics'],
      c: ['writing-translation-basics'],
      d: ['writing-translation-basics']
    }
  },
  {
    id: 'q8',
    title: '题 8：选词填空形式判断',
    sentence: 'The number of wild animals in this area has ________ significantly over the past decade due to habitat loss.',
    prompt: '空格处需要填入一个动词，它的正确形式应该是：',
    options: [
      { id: 'a', text: 'increase (原形)' },
      { id: 'b', text: 'to increase (不定式)' },
      { id: 'c', text: 'increased (过去分词/完成时)' },
      { id: 'd', text: 'increasing (现在分词)' }
    ],
    correctOptionId: 'c',
    skeleton: 'The number has increased...',
    explanation: '前面有 has，加上 over the past decade (在过去十年里)，这是标准的现在完成时标志 (has + done)。',
    errorByOption: {
      a: ['writing-translation-basics'],
      b: ['writing-translation-basics'],
      d: ['writing-translation-basics']
    }
  },
  {
    id: 'q9',
    title: '题 9：从句作用判断',
    sentence: 'The main reason why he declined the offer is that he wants to start his own business.',
    prompt: '句中的 "that he wants to start his own business" 起到的作用是：',
    options: [
      { id: 'a', text: '修饰 reason' },
      { id: 'b', text: '作为主句的主语' },
      { id: 'c', text: '解释说明 is 后面的内容（表语）' },
      { id: 'd', text: '作为一个独立的主句' }
    ],
    correctOptionId: 'c',
    skeleton: 'The reason is that...',
    explanation: '它跟在 is 后面，补充说明 reason 到底是什么，这叫表语从句。A 的修饰 reason 是 why 引导的从句干的事。',
    errorByOption: {
      a: ['clause-function'],
      b: ['clause-function'],
      d: ['clause-function']
    }
  },
  {
    id: 'q10',
    title: '题 10：终极长句提取',
    sentence: 'Despite the numerous challenges faced during the initial stage of the project, the team managed to complete all tasks ahead of schedule, which surprised everyone.',
    prompt: '如果只能保留一个最核心的信息（删掉所有补充背景和评价），它是：',
    options: [
      { id: 'a', text: '尽管面临许多挑战。' },
      { id: 'b', text: '团队设法提前完成了所有任务。' },
      { id: 'c', text: '这让每个人都感到惊讶。' },
      { id: 'd', text: '项目的初始阶段有很多任务。' }
    ],
    correctOptionId: 'b',
    skeleton: 'The team managed to complete all tasks.',
    explanation: 'Despite... 是让步背景括号；which... 是最后补充的评价括号。真正主句就是中间那句 The team managed to complete...',
    errorByOption: {
      a: ['modifier-as-mainline'],
      c: ['modifier-as-mainline'],
      d: ['modifier-as-mainline']
    }
  }
];

export const remediations: RemediationItem[] = [];

export const lastMinuteReview = [
  '考场固定检查顺序：',
  '1. 找主干',
  '2. 砍修饰',
  '3. 看逻辑',
  '4. 定词性'
];
