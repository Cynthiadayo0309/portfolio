<style lang="scss" scoped>
@import '@/styles/about.scss';
</style>

<template>
  <v-main>
    <v-container class="about-page" fluid>
      <section class="about-hero">
        <div class="about-hero__copy">
          <p class="eyebrow">{{ content.eyebrow }}</p>
          <h1>{{ content.name }}</h1>
          <p class="lead">{{ content.lead }}</p>
          <div class="focus-tags">
            <span v-for="tag in content.focus" :key="tag">
              {{ tag }}
            </span>
          </div>
        </div>
        <div class="about-hero__visual" aria-hidden="true">
          <v-img
            src="@/assets/job.jpeg"
            height="100%"
            position="center center"
          />
        </div>
      </section>

      <section class="about-summary">
        <div class="summary-copy">
          <p class="section-label">{{ content.summaryLabel }}</p>
          <h2>{{ content.summaryTitle }}</h2>
          <p v-for="paragraph in content.summary" :key="paragraph">
            {{ paragraph }}
          </p>
        </div>
        <div class="summary-facts">
          <div v-for="fact in content.facts" :key="fact.label" class="fact-item">
            <span>{{ fact.label }}</span>
            <strong>{{ fact.value }}</strong>
          </div>
        </div>
      </section>

      <section class="about-hobbies">
        <p class="section-label">{{ content.hobbiesLabel }}</p>
        <h2>{{ content.hobbiesTitle }}</h2>
        <div class="hobby-list">
          <article
            v-for="hobby in content.hobbies"
            :key="hobby.title"
            class="hobby-item"
          >
            <v-icon color="#0f8c9b" size="28">{{ hobby.icon }}</v-icon>
            <div>
              <h3>{{ hobby.title }}</h3>
              <p>{{ hobby.text }}</p>
            </div>
          </article>
        </div>
      </section>

      <section class="career-section">
        <p class="section-label">{{ content.careerLabel }}</p>
        <h2>{{ content.careerTitle }}</h2>
        <div class="career-list">
          <article
            v-for="item in content.careers"
            :key="item.title"
            class="career-item"
          >
            <div class="career-period">
              <span>{{ item.period }}</span>
              <small v-if="item.duration">{{ item.duration }}</small>
            </div>
            <div class="career-marker" :class="item.kind">
              <v-icon color="white" size="22">{{ item.icon }}</v-icon>
            </div>
            <div class="career-content">
              <div class="career-heading">
                <div>
                  <h3>{{ item.title }}</h3>
                  <p>{{ item.role }}</p>
                </div>
                <span v-if="item.current" class="current-badge">
                  {{ content.currentLabel }}
                </span>
              </div>
              <ul>
                <li v-for="point in item.points" :key="point">
                  {{ point }}
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section class="contact-strip">
        <p>{{ content.contactText }}</p>
        <div class="contact-actions">
          <router-link :to="localizedPath('works')">
            <v-btn color="#009DAE" depressed>
              {{ content.worksCta }}
            </v-btn>
          </router-link>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Cynthiadayo0309"
                v-bind="attrs"
                v-on="on"
              >
                <v-icon color="#24313f" size="34">mdi-github</v-icon>
              </a>
            </template>
            <span>GitHub</span>
          </v-tooltip>
        </div>
      </section>
    </v-container>
  </v-main>
</template>

<script>
const careerJa = [
  {
    period: '2026年5月 - 現在',
    title: 'データ分析系IT企業',
    role: 'データ分析アプリケーション開発',
    icon: 'mdi-chart-line',
    kind: 'work',
    current: true,
    points: [
      '顧客の業務データを可視化・分析するWebアプリケーションの設計、実装、テスト、リリース後の改修を担当',
      '顧客へのヒアリングをもとに、必要なデータ項目、集計方法、画面表示内容を整理',
      'データの抽出・加工・集計、グラフや表による可視化、検索・絞り込み機能を実装',
      '顧客データを分析し、数値の傾向や課題を整理したうえで、改善施策やデータ活用方法を提案',
      '顧客や社内メンバーからの意見を取り入れ、機能や操作性を継続的に改善',
      'Git・GitHubを利用した社内のソースコード管理体制の整備に参画',
      'ブランチ命名、プルリクエスト、レビュー、マージの運用ルールや手順書を整備し、属人的だった開発作業の標準化を推進',
    ],
  },
  {
    period: '2023年4月 - 2026年4月',
    duration: '約3年間',
    title: '金融系IT企業',
    role: 'IT基盤サービス部 / サブリーダー',
    icon: 'mdi-server-network',
    kind: 'work',
    points: [
      '金融機関向けシステムにおけるAWSインフラの構築・運用・保守を担当',
      'EC2、RDS、Lambda、WAF、IAM、Security Hubなどを利用し、安定稼働とセキュリティを意識した運用を実施',
      'CloudFormationでAWSリソースをコード化し、環境構築の再現性向上と作業ミス削減を推進',
      '障害対応フローの整備、障害訓練、定型作業の自動化、運用報告書の作成を担当',
      'JenkinsからGitHub ActionsへのCI/CD移行で、既存処理の調査、ワークフロー設計・実装、動作確認、移行手順作成、本番切り替えまで経験',
      'インフラチームのサブリーダーとして、タスク管理、進捗確認、技術的なフォロー、関係部署との調整を担当',
      'Amazon Linux 2からAmazon Linux 2023へのOS移行プロジェクトに参画し、既存設定やミドルウェアの調査、影響確認、検証環境構築、接続確認を実施',
      '社内の情報セキュリティ委員を兼務し、ISMSの運用に従事',
    ],
  },
  {
    period: '2021年6月 - 2022年11月',
    duration: '約1年6か月',
    title: '宿泊業向けSaaS企業',
    role: 'システム開発 / アルバイト',
    icon: 'mdi-code-tags',
    kind: 'work',
    points: [
      '大学在学中に、ホテル・旅館など宿泊施設向けWebサービスのフロントエンド開発を経験',
      'Vue.js、TypeScriptを使用し、SPA形式の画面や共通コンポーネントを実装',
      '検索・絞り込み、入力フォーム、バリデーション、API連携、エラー処理などを担当',
      '利用者が迷わず操作できるよう、画面構成、入力導線、状態表示の分かりやすさを意識して開発',
      'アプリケーション開発を通じて、システムを支えるインフラ領域への関心を深める',
    ],
  },
  {
    period: '2019年4月 - 2023年3月',
    duration: '4年間',
    title: '淑徳大学',
    role: '総合福祉学部 / 実践心理学科',
    icon: 'mdi-school',
    kind: 'education',
    points: [
      '心理学の概論、研究法、統計法を体系的に学習',
      '組織心理学、社会心理学、発達心理学に加え、経済政策や労働法なども学ぶ',
      '研究テーマは「嘘に対する子供の道徳的判断に関する研究」',
    ],
  },
  {
    period: '2017年4月 - 2019年3月',
    duration: '2年間',
    title: '神田外語学院',
    role: 'ヨーロッパ言語科 / スペイン語コース',
    icon: 'mdi-translate',
    kind: 'education',
    points: [
      '英語とスペイン語を専攻',
      '異なる文化や価値観を理解しながら伝える姿勢を身につける',
    ],
  },
]

const careerEn = [
  {
    period: 'May 2026 - Present',
    title: 'Data Analysis Technology Company',
    role: 'Data Analysis Application Development',
    icon: 'mdi-chart-line',
    kind: 'work',
    current: true,
    points: [
      'Designing, implementing, testing, and improving web applications that visualize and analyze customer business data',
      'Clarifying required data fields, aggregation methods, and screen content through customer interviews',
      'Implementing data extraction, processing, aggregation, chart and table visualization, search, and filtering features',
      'Analyzing customer data trends and issues, then proposing improvement measures and practical data usage ideas',
      'Continuously improving features and usability based on feedback from customers and internal members',
      'Contributing to internal source code management practices using Git and GitHub',
      'Creating branch naming, pull request, review, merge, and shared procedure rules to standardize previously individual-dependent development work',
    ],
  },
  {
    period: 'Apr 2023 - Apr 2026',
    duration: 'About 3 years',
    title: 'Financial Technology Company',
    role: 'IT Infrastructure Services / Sub Leader',
    icon: 'mdi-server-network',
    kind: 'work',
    points: [
      'Built, operated, and maintained AWS infrastructure for financial institution systems',
      'Used EC2, RDS, Lambda, WAF, IAM, Security Hub, and related AWS services with a focus on stable operations and security',
      'Codified AWS resources with CloudFormation to improve environment reproducibility and reduce manual operation mistakes',
      'Prepared incident response flows, ran incident drills, automated routine operations, and created operation reports',
      'Led hands-on work for CI/CD migration from Jenkins to GitHub Actions, including investigation, workflow design and implementation, verification, migration procedures, and production cutover',
      'Supported the infrastructure team as a sub leader through task management, progress checks, technical follow-up, and coordination with related departments',
      'Joined an Amazon Linux 2 to Amazon Linux 2023 migration project, investigating existing settings and middleware, checking impact, building validation environments, and confirming connectivity',
      'Served on the internal information security committee and supported ISMS operations',
    ],
  },
  {
    period: 'Jun 2021 - Nov 2022',
    duration: 'About 1.5 years',
    title: 'Hospitality SaaS Company',
    role: 'System Development / Part-time',
    icon: 'mdi-code-tags',
    kind: 'work',
    points: [
      'Worked on frontend development for a web service for hotels, ryokans, and other lodging facilities while studying at university',
      'Implemented SPA screens and shared components using Vue.js and TypeScript',
      'Handled search, filtering, input forms, validation, API integration, and error handling',
      'Built clear user interfaces with attention to screen structure, input flows, and state feedback so users could operate the service without confusion',
      'Developed a stronger interest in infrastructure through application development',
    ],
  },
  {
    period: 'Apr 2019 - Mar 2023',
    duration: '4 years',
    title: 'Shukutoku University',
    role: 'Faculty of Integrated Human and Social Welfare Studies / Practical Psychology',
    icon: 'mdi-school',
    kind: 'education',
    points: [
      'Studied psychology fundamentals, research methods, and statistics',
      'Learned organizational psychology, social psychology, developmental psychology, economic policy, and labor law',
      'Research theme: moral judgment in children regarding lies',
    ],
  },
  {
    period: 'Apr 2017 - Mar 2019',
    duration: '2 years',
    title: 'Kanda Institute of Foreign Languages',
    role: 'European Languages / Spanish Course',
    icon: 'mdi-translate',
    kind: 'education',
    points: [
      'Majored in English and Spanish',
      'Built a foundation for communicating across cultures and perspectives',
    ],
  },
]

export default {
  computed: {
    content() {
      if (this.$route.params.lang === 'en') {
        return {
          eyebrow: 'About Me',
          name: 'Kosuke Aoki',
          lead:
            'Engineer with experience in data analysis application development, infrastructure operations, and information security.',
          focus: ['Data Analysis', 'Infrastructure', 'Application Development', 'ISMS'],
          summaryLabel: 'Profile',
          summaryTitle: 'Turning business context into practical systems',
          summary: [
            'I have worked across application development and infrastructure operations, from building services to maintaining platforms that need stability.',
            'My background in psychology, statistics, and languages helps me listen carefully, organize ambiguous requirements, and communicate across teams.',
          ],
          facts: [
            { label: 'Current', value: 'Data Analysis Technology Company' },
            { label: 'Experience', value: 'App Dev / Infrastructure / ISMS' },
            { label: 'Background', value: 'Psychology / Statistics / Languages' },
          ],
          hobbiesLabel: 'Hobbies',
          hobbiesTitle: 'What I enjoy outside work',
          hobbies: [
            { title: 'Horse Racing', text: 'Watching races and following the stories behind each event.', icon: 'mdi-horse' },
            { title: 'Games', text: 'Pokemon, Dragon Quest, and FPS games.', icon: 'mdi-gamepad-variant-outline' },
            { title: 'Cooking', text: 'Trying recipes and making everyday meals a little better.', icon: 'mdi-silverware-fork-knife' },
          ],
          careerLabel: 'Career',
          careerTitle: 'Experience and Education',
          currentLabel: 'Current',
          contactText: 'Code and personal projects are available on GitHub.',
          worksCta: 'View Works',
          careers: careerEn,
        }
      }

      return {
        eyebrow: 'About Me',
        name: '青木 孝輔',
        lead:
          'データ分析アプリケーション開発、インフラ運用、情報セキュリティの経験を持つエンジニアです。',
        focus: ['データ分析', 'インフラ', 'アプリ開発', 'ISMS'],
        summaryLabel: 'Profile',
        summaryTitle: '事業の文脈をくみ取り、実用的なシステムに落とし込む',
        summary: [
          'アプリケーション開発とインフラ運用の両面を経験し、作るだけでなく、安定して使われ続ける仕組みづくりに関心を持っています。',
          '心理学・統計・語学を学んだ背景を活かし、曖昧な課題を整理しながら、チームやお客様と丁寧にすり合わせて進めることを大切にしています。',
        ],
        facts: [
          { label: '現在', value: 'データ分析系IT企業' },
          { label: '経験領域', value: 'アプリ開発 / インフラ / ISMS' },
          { label: '学習背景', value: '心理学 / 統計 / 語学' },
        ],
        hobbiesLabel: 'Hobbies',
        hobbiesTitle: '仕事以外で好きなこと',
        hobbies: [
          { title: '競馬観戦', text: 'レース展開や背景にあるストーリーを楽しみながら観戦しています。', icon: 'mdi-horse' },
          { title: 'ゲーム', text: 'ポケモン、ドラクエ、FPSなどをプレイしています。', icon: 'mdi-gamepad-variant-outline' },
          { title: '料理', text: '日々の食事を少し楽しくする料理づくりが好きです。', icon: 'mdi-silverware-fork-knife' },
        ],
        careerLabel: 'Career',
        careerTitle: '職歴・学歴',
        currentLabel: '現在',
        contactText: '制作物やコードはGitHubでも公開しています。',
        worksCta: '実績を見る',
        careers: careerJa,
      }
    },
  },
  methods: {
    localizedPath(page) {
      const lang = this.$route.params.lang === 'en' ? 'en' : 'ja'
      return `/${lang}/${page}`
    },
  },
}
</script>
